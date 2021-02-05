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
        if (correctAnswers[question]) {
          style.backgroundColor =
            correctAnswers[question] === answers[question]
              ? "#b1dab1"
              : "#f7a8a8";
        }
        return (
          <div
            key={question}
            className={styles.questionAndAnswer}
            style={style}
          >
            <div className={styles.question}>{question}</div>
            <div className={styles.answer}>{answers[question]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Entry;
