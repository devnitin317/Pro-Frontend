import React, { useState } from "react";
import ReadAloud from "../CommonComponents/Speaking/ReadAloud/ReadAloud";
import { useDispatch, useSelector } from "react-redux";
// import { resetCountDown, startStopCountDown } from "../CommonComponents/CountDown/countDownSlice";
import { stopRecording } from "../CommonComponents/Recording/recordingSlice";
import { resetCountDown } from "../CommonComponents/Countdown/countDownSlice";
// import DescribeImage from "../CommonComponents/Speaking/DescribeImage/DescribeImage";
import DescribeImage from "../CommonComponents/Speaking/DescribeImage/DescribeImage";
import img1 from "../../Images/user.jpg";
import ShortAnswer from "../CommonComponents/Speaking/ShortAnswer/ShortAnswer";
import { resetAudioPlayer } from "../CommonComponents/AudioPlayer/audioPlayerSlice";
import audioFile01 from "../../Audio/ShortAnswer/Audio01.mp3";
import RepeatSentence from "../CommonComponents/Speaking/RepeatSentence/RepeatSentence";
import ReTellLecture from "../CommonComponents/Speaking/ReTellLecture/ReTellLecture";
import "./Speaking.css";
import axios from "axios";
import Spinner from "../CommonComponents/Spinner/Spinner";

function Speaking({ que, mockTestNumber }) {
  // let que = [
  //   {
  //     questionId: 1,
  //     heading:
  //       "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
  //     paragraph:
  //       "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
  //     type: "readAloud",
  //     img: "img1",
  //   },
  //   {
  //     questionId: 2,
  //     heading:
  //       "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
  //     paragraph:
  //       "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
  //     type: "describe",
  //     img: "img1",
  //   },
  //   {
  //     questionId: 3,
  //     heading:
  //       "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
  //     paragraph:
  //       "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
  //     type: "shortAnswer",
  //   },
  //   {
  //     questionId: 4,
  //     heading:
  //       "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
  //     paragraph:
  //       "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
  //     type: "repeatSentence",
  //   },
  //   {
  //     questionId: 5,
  //     heading:
  //       "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
  //     paragraph:
  //       "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
  //     type: "reTellLecture",
  //   },
  // ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(que);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const dispatch = useDispatch();
  const recording = useSelector((state) => state.recording);
  const baseUrl = useSelector((state) => state.app.baseUrl);
  const userEmail = useSelector((state) => state.app.userData.email);

  const nextQuestion = (questionId) => {
    if (window.speechSynthesis.speaking) {
      // Speech synthesis is already active
      window.speechSynthesis.cancel();
    }
    // dispatch(resetCountDown(10));
    dispatch(resetCountDown({ reset: `speaking${questionId}` }));
    dispatch(stopRecording(false));
    dispatch(resetAudioPlayer({ reset: `speaking${questionId}` }));

    console.log("recording.transcript", recording.transcript);
    setAnswers([...answers, { questionId, answer: recording.transcript }]);
    setCurrentQuestion(currentQuestion + 1);
  };

  function questionFunc(questionIndex, questionId, image) {
    let queArray = [];
    if (questions[questionIndex].type === "readAloud") {
      queArray.push(<ReadAloud />);
    } else if (questions[questionIndex].type === "describe") {
      queArray.push(<DescribeImage image={img1} />);
    } else if (questions[questionIndex].type === "shortAnswer") {
      queArray.push(
        <ShortAnswer audio={audioFile01} questionId={questionId} />
      );
    } else if (questions[questionIndex].type === "repeatSentence") {
      queArray.push(
        <RepeatSentence
          text={questions[questionIndex].text}
          questionId={questionId}
        />
      );
    } else if (questions[questionIndex].type === "reTellLecture") {
      queArray.push(
        <ReTellLecture audio={audioFile01} questionId={questionId} />
      );
    }
    return queArray;
  }

  function submitTest() {
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
  return (
    <div className="speaking-main">
      <div className="speaking-main-content">
        {currentQuestion < questions.length ? (
          <div className="speaking-main-content-questions">
            <div className="speaking-main-content-question">
              <h2 className="speaking-main-content-question-no">
                Question {currentQuestion + 1}
              </h2>
              <p className="speaking-main-content-question-heading">
                {questions[currentQuestion].heading}
              </p>
              {questionFunc(
                currentQuestion,
                questions[currentQuestion].questionId,
                questions[currentQuestion].img
              )}
              <p className="speaking-main-content-question-para">
                {questions[currentQuestion].paragraph}
              </p>
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
          <div className="reading-main-content-result-submit">
            <div className="reading-main-content-result">
              {result !== null ? (
                <div>
                  <p>Speaking : {Math.round(result.speakingResult) ?? 10}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <button onClick={submitTest}>Submit Test</button>
          </div>
        )}
        {showSpinner ? <Spinner /> : <></>}
      </div>
    </div>
  );
}

export default Speaking;

{
  /* <div className="main-Div">
      <div className="main-Div-Content">
        <div className="speaking-main">
          <div className="speaking-main-content">
            {currentQuestion < questions.length ? (
              <div>
                <h2>Question {currentQuestion + 1}</h2>
                <p>{questions[currentQuestion].heading}</p>
                {questionFunc(
                  currentQuestion,
                  questions[currentQuestion].questionId,
                  questions[currentQuestion].img
                )}
                <p>{questions[currentQuestion].paragraph}</p>

                <button
                  onClick={() =>
                    nextQuestion(questions[currentQuestion].questionId)
                  }
                >
                  Next Question
                </button>
              </div>
            ) : (
              <button onClick={submitTest}>Submit Test</button>
            )}
          </div>
        </div>
      </div>
    </div> */
}
