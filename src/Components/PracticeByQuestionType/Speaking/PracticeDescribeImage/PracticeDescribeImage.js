import React, { useState } from "react";
import "./PracticeDescribeImage.css";
import CountDown from "../../../CommonComponents/Countdown/Countdown";
import { useDispatch, useSelector } from "react-redux";
import image from "../../../../Images/reTell01.jpg";
import SpeechToText from "../../../CommonComponents/SpeechToText/SpeechToText";
import { resetCountDown } from "../../../../Components/CommonComponents/Countdown/countDownSlice";
import { stopRecording } from "../../../../Components/CommonComponents/Recording/recordingSlice";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";

function PracticeDescribeImage() {
  let que = [
    {
      questionId: 1,
      heading:
        "Look at the image below. In 25 seconds, please speak into the microphone and describe in detail what the graph is showing. You will have 40 seconds to give your response.",
    },
    {
      questionId: 2,
      heading:
        "Look at the image below. In 25 seconds, please speak into the microphone and describe in detail what the graph is showing. You will have 40 seconds to give your response.",
    },
    {
      questionId: 3,
      heading:
      "Look at the image below. In 25 seconds, please speak into the microphone and describe in detail what the graph is showing. You will have 40 seconds to give your response.",

    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(que);
  const [answers, setAnswers] = useState([]);
  const [landingPage,SetLandingPage] = useState(true)

  const countDown = useSelector((state) => state.countDown);
  let count = CountDown(10, countDown.active, countDown.reset);
  const dispatch = useDispatch();
  const recording = useSelector((state) => state.recording);

  const nextQuestion = (questionId) => {
    dispatch(resetCountDown({ reset: `practiceDescribeImage${questionId}` }));
    dispatch(stopRecording(false));
    setAnswers([...answers, { questionId, answer: recording.transcript }]);
    setCurrentQuestion(currentQuestion + 1);
  };
  function submitTest(params) {
    console.log("Answers", answers);
  }
  function startPage(params) {
    SetLandingPage(false)
  }
  return (
    <div className="practiceDescribeImage-main">
      <div className="practiceDescribeImage-main-content">
      {landingPage == true ? (<QuestionsFrontPage startPage={startPage}/>):(
        currentQuestion < questions.length ? (
          <div className="practiceDescribeImage-main-content-questions">
            <div className="practiceDescribeImage-main-content-question">
              <h2 className="practiceDescribeImage-main-content-question-no">
                Question {currentQuestion + 1}
              </h2>
              <p className="practiceDescribeImage-main-content-question-heading">
                {questions[currentQuestion].heading}
              </p>
              <div className="describeImage-Content">
                <div className="describeImage-Image">
                  <div>
                    <img src={image} className="describeImage-Image-img" />
                  </div>
                </div>
                <div className="describeImage-RecordAnswer">
                  <SpeechToText />
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() =>
                  nextQuestion(questions[currentQuestion].questionId)
                }
              >
                Next Question
              </button>
            </div>
          </div>
        ) : (
          <button onClick={submitTest}>Submit Test</button>
        ))}
      </div>
    </div>
    // <div className="describeImage-Main">
    //   <div className="describeImage-Content">
    //     <div className="describeImage-Image">
    //       <div>
    //         <img src={image} className="describeImage-Image-img" />
    //       </div>
    //     </div>
    //     <div className="describeImage-RecordAnswer">
    //       <SpeechToText />
    //     </div>
    //   </div>
    // </div>
  );
}

export default PracticeDescribeImage;
