import React, { useEffect, useState } from "react";
import "./PracticeReadAloud.css";
import { useDispatch, useSelector } from "react-redux";
import { stopRecording } from "../../../CommonComponents/Recording/recordingSlice";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import SpeechToText from "../../../CommonComponents/SpeechToText/SpeechToText";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
import axios from "axios";
import Spinner from "../../../CommonComponents/Spinner/Spinner";
function PracticeReadAloud() {
  // let que = [
  //   {
  //     questionId: 1,
  //     heading:
  //       "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
  //     paragraph:
  //       "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
  //   },
  //   {
  //       questionId: 2,
  //       heading:
  //         "Second Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
  //       paragraph:
  //         "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
  //     },
  //     {
  //       questionId: 3,
  //       heading:
  //         "Second Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
  //       paragraph:
  //         "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
  //     },
  // ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [landingPage, SetLandingPage] = useState(true);
  const [result, setResult] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const dispatch = useDispatch();
  const recording = useSelector((state) => state.recording);
  const baseUrl = useSelector((state) => state.app.baseUrl);
  const userEmail = useSelector((state) => state.app.userData.email);

  let questionType = { questionType: "readAloud" };

  useEffect(() => {
    getQuestionsFunc();
  }, []);
  const nextQuestion = (questionId) => {
    setAnswers([...answers, { questionId, answer: recording.transcript }]);
    dispatch(resetCountDown({ reset: `speaking${questionId}` }));
    dispatch(stopRecording(false));
    setCurrentQuestion(currentQuestion + 1);
  };

  function submitTest(params) {
    return;
    debugger;
    setShowSpinner(true);
    console.log("answers", answers);
    let dataToSend = { userEmail, answers };
    axios
      .post(`${baseUrl}api/user/checkSpeakingResult`, dataToSend)
      .then((d) => {
        console.log(d);
        setResult(d.data);
        setShowSpinner(false);
      })
      .catch((e) => {
        setShowSpinner(false);
        console.log(e);
      });
  }
  function startPage(params) {
    SetLandingPage(false);
  }
  function getQuestionsFunc(params) {
    axios
      .post(`${baseUrl}api/user/getQuestionsByQuestionType`, questionType)
      .then((d) => {
        console.log(d);
        setQuestions(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function questionFunc(params) {
    if (questions.length !== 0) {
      if (currentQuestion < questions.length) {
        return (
          <div className="practiceReadAloud-main-content-questions">
            <div className="practiceReadAloud-main-content-question">
              <h2 className="practiceReadAloud-main-content-question-no">
                Question {currentQuestion + 1}
              </h2>
              <p className="practiceReadAloud-main-content-question-heading">
                {questions[currentQuestion].heading}
              </p>
              <SpeechToText duration={40} countDuration={35}/>
              <p className="practiceReadAloud-main-content-question-para">
                {questions[currentQuestion].paragraph}
              </p>
            </div>
            {/* <button onClick={getQuestions}>GetQuestions</button> */}
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
        );
      } else {
        return (
          <div className="reading-main-content-result-submit">
            <div className="reading-main-content-result">
              {result !== null ? (
                <div>
                  <p>ReadAloud : {Math.round(result.speakingResult) ?? 10}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <button onClick={submitTest}>Submit Test</button>
          </div>
        );
      }
    } else {
      return <p>Questions Not Found</p>;
    }
  }
  return (
    <div className="practiceReadAloud-main">
      <div className="practiceReadAloud-main-content">
        {landingPage == true ? (
          <QuestionsFrontPage startPage={startPage} />
        ) : (
          questionFunc()
        )}
        {showSpinner ? <Spinner /> : <></>}
      </div>
    </div>
  );
}

export default PracticeReadAloud;
