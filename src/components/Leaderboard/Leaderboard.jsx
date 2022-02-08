import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import Modal from "react-modal";
import { Form, Input, Button, Loader, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { LocalStorage } from "@data-provider/browser-storage";
import * as googleSheetsService from "../../services/googleSheets";
import styles from "./Leaderboard.module.scss";

const userPreferences = new LocalStorage({
  id: "user-preferences",
  storageFallback: true,
});

const OpenIcon = () => (
  <Icon
    name="angle right"
    size="small"
    style={{ marginLeft: "0.75rem", color: "gray" }}
  />
);

const Leaderboard = () => {
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [possibleTrackedEntries, setPossibleTrackedEntries] = useState();
  const [trackedEntry, setTrackedEntry] = useState();
  const [superBowl, setSuperbowl] = useState();
  let history = useHistory();

  useEffect(() => {
    const initialize = async () => {
      const superBowl = await googleSheetsService.getSuperBowl({
        year: "2022",
      });
      superBowl.entries.forEach((entry) => {
        let points = 0;
        for (const [question, answer] of Object.entries(superBowl.answers)) {
          if (answer && entry.answers[question] === answer) points++;
        }
        entry.points = points;
        entry.tiebreakerDifference = Math.abs(
          entry.tiebreaker - superBowl.answers["Tiebreaker"]
        );
      });
      superBowl.entries.sort((a, b) => {
        return (
          b.points - a.points || a.tiebreakerDifference - b.tiebreakerDifference
        );
      });

      let currentPoints = 100000;
      let currentPlace = 1;
      let displayPlace = 1;
      superBowl.entries.forEach((entry) => {
        if (entry.points < currentPoints) {
          displayPlace = currentPlace;
          currentPoints = entry.points;
        }
        entry.place = displayPlace;
        currentPlace++;
      });

      const leader = superBowl.entries[0];
      let questionsRemaining = 0;
      Object.values(superBowl.answers).forEach((answer) => {
        if (!answer) questionsRemaining++;
      });
      superBowl.entries.forEach((entry) => {
        entry.isEliminated = leader.points - entry.points > questionsRemaining;
      });

      let trackedEntry = await userPreferences
        .query({ prop: "trackedEntry" })
        .read();

      if (trackedEntry) {
        const correspondingEntry = superBowl.entries.find(({ name, email }) => {
          return trackedEntry.name === name && trackedEntry.email === email;
        });
        if (correspondingEntry) {
          trackedEntry = {
            ...trackedEntry,
            ...correspondingEntry,
          };
          setTrackedEntry(trackedEntry);
        }
      } else {
        setTrackedEntry(trackedEntry);
      }
      setSuperbowl(superBowl);
    };

    initialize();
  }, []);

  const handleEntryClick = (entry) => {
    if (!superBowl.hasStarted) return;
    history.push({
      pathname: "/entry",
      state: { entry, answers: superBowl.answers },
    });
  };

  if (!superBowl) {
    return (
      <div className={styles.loadingContainer}>
        <Loader size="huge" active>
          LOADING
        </Loader>
      </div>
    );
  }

  return (
    <div className={styles.leaderboardPage}>
      {trackedEntry && (
        <div className={styles.container}>
          <h2>YOU</h2>
          <div
            className={`${styles.item}${
              trackedEntry.isEliminated ? ` ${styles.eliminated}` : ""
            }`}
            style={{ cursor: superBowl.hasStarted ? "pointer" : "" }}
            onClick={() => {
              handleEntryClick(trackedEntry);
            }}
          >
            <div style={{ width: "1.75rem" }}>{trackedEntry.place}</div>
            <div>
              <Avatar
                name={trackedEntry.name}
                email={trackedEntry.email}
                round
                size="40"
              />
            </div>
            <div className={styles.itemName}>
              {trackedEntry.name}
              {superBowl.hasStarted && (
                <div className={styles.tiebreaker}>
                  Tiebreaker: {trackedEntry.tiebreaker}
                </div>
              )}
            </div>
            <div className={styles.itemPoints}>
              {trackedEntry.points}
              {superBowl.hasStarted && <OpenIcon />}
            </div>
          </div>
        </div>
      )}
      <h2>LEADERBOARD</h2>
      <div className={styles.container}>
        {superBowl.entries.map((entry) => {
          const { name, email, points, place, tiebreaker, isEliminated } =
            entry;
          let style = { cursor: superBowl.hasStarted ? "pointer" : "" };
          if (
            trackedEntry &&
            trackedEntry.name === name &&
            trackedEntry.email === email
          ) {
            style.border = "2px #6d72c3 solid";
          }
          return (
            <div
              key={email}
              className={`${styles.item}${
                isEliminated ? ` ${styles.eliminated}` : ""
              }`}
              style={style}
              onClick={() => {
                handleEntryClick(entry);
              }}
            >
              <div style={{ width: "1.75rem" }}>{place}</div>
              <div>
                <Avatar name={name} email={email} round size="40" />
              </div>
              <div className={styles.itemName}>
                <div>{name}</div>
                {superBowl.hasStarted && (
                  <div className={styles.tiebreaker}>
                    Tiebreaker: {tiebreaker}
                  </div>
                )}
              </div>
              <div className={styles.itemPoints}>
                {points}
                {superBowl.hasStarted && <OpenIcon />}
              </div>
            </div>
          );
        })}
      </div>
      {!trackedEntry && (
        <div
          className={styles.trackYourself}
          role="button"
          onClick={() => setIsTrackModalOpen(true)}
        >
          Track Yourself
        </div>
      )}
      <Modal
        isOpen={isTrackModalOpen}
        onRequestClose={() => setIsTrackModalOpen(false)}
        className={styles.trackYourselfModal}
        ariaHideApp={false}
      >
        <h2>Track Yourself</h2>
        <div>Input your email to find yourself</div>
        <Form
          onSubmit={({ target }) => {
            const possibleEntries = superBowl.entries.filter((entry) => {
              return entry.email === target[0].value;
            });
            setPossibleTrackedEntries(possibleEntries);
          }}
        >
          <Form.Field style={{ width: 300, margin: "1rem auto" }}>
            <Input placeholder="Email" size="big" type="email" autoFocus />
          </Form.Field>
          <Button id={styles.searchButton} size="big" primary type="submit">
            Search
          </Button>
          <Button onClick={() => setIsTrackModalOpen(false)} basic size="big">
            Close
          </Button>
        </Form>
        {possibleTrackedEntries && (
          <div style={{ marginTop: "2rem" }}>
            <div>{`Found ${possibleTrackedEntries.length}, ${
              possibleTrackedEntries.length > 0
                ? "pick yourself"
                : "did you get your email right?"
            }`}</div>
            {possibleTrackedEntries.map((possibleEntry, i) => {
              const { name, email } = possibleEntry;
              return (
                <div
                  key={email}
                  className={styles.item}
                  style={{ backgroundColor: "#f3f3f7", cursor: "pointer" }}
                  role="button"
                  onClick={() => {
                    userPreferences
                      .query({ prop: "trackedEntry" })
                      .update(possibleEntry);
                    setTrackedEntry(possibleEntry);
                    setIsTrackModalOpen(false);
                  }}
                >
                  <div>
                    <Avatar name={name} email={email} round size="40" />
                  </div>
                  <div className={styles.itemName} style={{ margin: "0 1rem" }}>
                    {name}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Leaderboard;
