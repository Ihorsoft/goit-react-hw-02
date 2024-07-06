import { useState } from "react";

import "./App.css";
import Description from "../description/Description";
import Feedback from "../feedback/Feedback.jsx";
import Options from "../options/Options";
import ColorPicker from "../colorpicker/ColorPicker";
import TodoList from "../todolist/TodoList.jsx";

const Arr1 = {
  good: 0,
  neutral: 0,
  bad: 0,
  reset: false,
};

const { good, neutral, bad, reset } = Arr1;

function App() {
  const [clickGood, setClickGood] = useState(good);
  const [clickNeutral, setClickNeutral] = useState(neutral);
  const [clickBad, setClickBad] = useState(bad);
  const [clickReset, setClickReset] = useState(false);
  console.log("good first in options", good);
  console.log("click Good first", clickGood);

  const handleClickGood = (name) => {
    console.log("click Good", { clickGood });
    /*  setClickGood((prevState) => prevState + 1);
    setClickReset((prevState) => true);
    feedbackObj.good = clickGood;
 */

    switch (name) {
      case "good":
        console.log("case good:", name);
        setFeedbackObj({
          ...feedbackObj,
          good: feedbackObj.good + 1,
          reset: true,
        });

        console.log("goood after +1", good);
        break;

      case "neutral":
        setFeedbackObj({
          ...feedbackObj,
          neutral: feedbackObj.neutral + 1,
          reset: true,
        });
        break;

      case "bad":
        setFeedbackObj({
          ...feedbackObj,
          bad: feedbackObj.bad + 1,
          reset: true,
        });
        break;

      case "reset":
        setFeedbackObj({
          ...feedbackObj,
          good: 0,
          neutral: 0,
          bad: 0,
          reset: false,
        });
        break;
    }
  };

  const handleClickNeutral = () => {
    setClickNeutral((prevState) => prevState + 1);
    setClickReset(true);
  };

  const handleClickBad = () => {
    setClickBad(clickBad + 1);
    setClickReset(true);
  };

  const handleClickReset = () => {
    setClickReset(false);
  };

  const fObj = {
    good: 0,
    neutral: 0,
    bad: 0,
    reset: false,
  };
  const [feedbackObj, setFeedbackObj] = useState(
    fObj
    /*  good: 0,
    neutral: 0,
    bad: 0, */
  );

  let totalFeedback = feedbackObj.good + feedbackObj.neutral + feedbackObj.bad;
  let positiveFeedback = Math.round((feedbackObj.good / totalFeedback) * 100);

  console.log("total:", totalFeedback, "positive:", positiveFeedback);
  // const [count, setCount] = useState(feedbackObj);
  console.log("feedbackObj good:", feedbackObj.good);
  return (
    <>
      <Description />
      {/* <Options feedbackObj={feedbackObj} /> */}
      <Options feedbackObj={feedbackObj} handleClickGood={handleClickGood} />
      <Feedback
        feedbackObj={feedbackObj}
        onUpdate={setFeedbackObj}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
      <ColorPicker />
      <TodoList />
    </>
  );
}
//export function setFeedbackObj();
export default App;
//export setFeedbackObj;
