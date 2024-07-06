import { useState } from "react";

const Options = ({ feedbackObj, handleClickGood }) => {
  const { good, neutral, bad, reset } = feedbackObj;

  /* const handleClickGood = (name) => {
    console.log("click Good", { good });

    setFeedbackObj({
      ...feedbackObj,
      good: feedbackObj.good + 1,
      reset: true,
    }); */
  /*  setClickGood((prevState) => prevState + 1);
    setClickReset((prevState) => true);
    feedbackObj.good = clickGood; */
  // };

  /*   const [clickGood, setClickGood] = useState(good);
  const [clickNeutral, setClickNeutral] = useState(neutral);
  const [clickBad, setClickBad] = useState(bad);
  const [clickReset, setClickReset] = useState(false);
  console.log("good first in options", good);
  console.log("click Good first", clickGood);
  
  
  const hendleClickGood = () => {
    console.log("click Good", { clickGood });
    setClickGood((prevState) => prevState + 1);
    setClickReset((prevState) => true);
    feedbackObj.good = clickGood;
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
  }; */

  return (
    <div>
      <div>
        <button onClick={() => handleClickGood("good")}>Good {good}</button>
        <button onClick={() => handleClickGood("neutral")}>Neutral</button>
        <button onClick={() => handleClickGood("bad")}>Bad</button>
        {reset ? (
          <button onClick={() => handleClickGood("reset")}>Reset</button>
        ) : (
          <></>
        )}

        {/*  {clickReset ? (
          <button onClick={() => handleClickReset()}>Reset</button>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
};
export default Options;
