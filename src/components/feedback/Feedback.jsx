import Options from "../options/Options";

const Feedback = ({
  feedbackObj,
  onUpdate,
  totalFeedback,
  positiveFeedback,
}) => {
  const start = feedbackObj.neutral + feedbackObj.bad + feedbackObj.good;

  return (
    <div>
      {start === 0 ? (
        <p> No feedback yet </p>
      ) : (
        <ul>
          <li>Good {feedbackObj.good}</li>
          <li>Neutral {feedbackObj.neutral}</li>
          <li>Bad {feedbackObj.bad}</li>
          <li>
            {/* Total {feedbackObj.good + feedbackObj.neutral + feedbackObj.bad} */}
            Total {totalFeedback}
          </li>
          <li>
            {/*  Positive
            {(100 * (feedbackObj.good + feedbackObj.neutral)) /
              (feedbackObj.good + feedbackObj.neutral + feedbackObj.bad)} */}
            Positive {positiveFeedback} %
          </li>
        </ul>
      )}
      {/*  <p> No feedback yet </p>
      <ul>
        <li>Good {feedbackObj.good}</li>
        <li>Neutral {feedbackObj.neutral}</li>
        <li>Bad {feedbackObj.bad}</li>
        <li>
          Total {feedbackObj.good + feedbackObj.neutral + feedbackObj.bad}
        </li>
        <li>
          Positive
          {(100 * (feedbackObj.good + feedbackObj.neutral)) /
            (feedbackObj.good + feedbackObj.neutral + feedbackObj.bad)}
        </li>
      </ul> */}
    </div>
  );
};
export default Feedback;
