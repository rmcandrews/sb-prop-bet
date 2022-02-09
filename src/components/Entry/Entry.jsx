import React from "react";
import Avatar from "react-avatar";
import { useLocation, Redirect } from "react-router-dom";
import styles from "./Entry.module.scss";

const Entry = () => {
  const { state } = useLocation();
  if (!state) return <Redirect to="/" />;
  const { name, email, answers, points } = state.entry;
  const correctAnswers = state.answers;
  return (
    <div className={styles.entryPage}>
      <div>
        <Avatar
          name={name}
          email={email}
          round
          size="80"
          className={styles.avatar}
        />
      </div>
      <h1 className={styles.name}>{name}</h1>
      <h2>Score: {points}</h2>
      {Object.keys(answers).map((question) => {
        const style = {};
        let isCorrect = false;
        let isSettled = false;
        if (correctAnswers[question] && correctAnswers[question].answer) {
          isSettled = true;
          if (correctAnswers[question].answer === "PUSH") {
            style.backgroundColor = "rgb(205 205 205)";
          } else {
            if (correctAnswers[question].answer === answers[question]) {
              isCorrect = true;
              style.backgroundColor = "#b1dab1";
            } else {
              style.backgroundColor = "#f7a8a8";
            }
          }
        }

        let score;
        if (isSettled) {
          score = !isCorrect ? 0 : correctAnswers[question].value;
        }

        return (
          <div
            key={question}
            className={styles.questionAndAnswer}
            style={style}
          >
            <div style={{ marginRight: "3rem" }}>
              <div className={styles.question}>{question}</div>
              <div className={styles.answer}>{answers[question]}</div>
            </div>
            <div style={{ marginLeft: "auto", fontSize: 22 }}>{score}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Entry;
