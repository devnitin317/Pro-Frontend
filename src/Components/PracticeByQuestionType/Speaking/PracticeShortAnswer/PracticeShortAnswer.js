import React, { useEffect, useState } from "react";
import "./PracticeShortAnswer.css";
import { useDispatch, useSelector } from "react-redux";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import SpeechToText from "../../../CommonComponents/SpeechToText/SpeechToText";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import { stopRecording } from "../../../CommonComponents/Recording/recordingSlice";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
import axios from "axios";
function PracticeShortAnswer() {
  // let que = [
  //   {
  //     questionId: 1,
  //     heading:
  //       "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
  //   },
  //   {
  //     questionId: 2,
  //     heading:
  //       "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
  //   },
  //   {
  //     questionId: 3,
  //     heading:
  //       "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
  //   },
  // ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [audioEnds, setAudioEnds] = useState(false);
  const [landingPage, SetLandingPage] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

  const audioPlayer = useSelector((state) => state.audioPlayer);
  const dispatch = useDispatch();
  const recording = useSelector((state) => state.recording);
  const baseUrl = useSelector((state) => state.app.baseUrl);
  useEffect(() => {
    getQuestionsFunc();
  }, []);

  useEffect(() => {
    setAudioEnds(false);
  }, [currentQuestion]);

  function onAudioEnds(params) {
    setAudioEnds(true);
  }

  const nextQuestion = (questionId) => {
    setShowAnswer(false);
    dispatch(resetCountDown({ reset: `PracticeShortAnswer${questionId}` }));
    dispatch(stopRecording(false));
    setAnswers([...answers, { questionId, answer: recording.transcript }]);
    setCurrentQuestion(currentQuestion + 1);
  };
  function submitTest(params) {
    console.log("Answers", answers);
  }
  function startPage(params) {
    SetLandingPage(false);
  }

  function getQuestionsFunc(params) {
    axios
      .post(`${baseUrl}api/user/getQuestionsByQuestionType`, {
        questionType: "shortAnswer",
      })
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
          <div className="practiceReTellLecture-main-content-questions">
            <div className="practiceReTellLecture-main-content-question">
              <h2 className="practiceReTellLecture-main-content-question-no">
                Question {currentQuestion + 1}
              </h2>
              <p className="practiceReTellLecture-main-content-question-heading">
                {questions[currentQuestion].heading}
              </p>
              <div>
                {/* <AudioPlayer src={audio} reset={audioPlayer.reset} onEnd={onAudioEnds} /> */}
                <TextToSpeech
                  text={questions[currentQuestion].text}
                  onAudioEnds={onAudioEnds}
                  countDuration={3}
                />
                {audioEnds ? <SpeechToText duration={40} countDuration={3}/> : <></>}
              </div>
            </div>
            {showAnswer == true ? (
              <p>{questions[currentQuestion].answer}</p>
            ) : (
              <></>
            )}
            <div className="practiceRepeatSentence-main-content-question-buttonDiv">
              <button
                onClick={() =>
                  nextQuestion(questions[currentQuestion].questionId)
                }
              >
                Next Question
              </button>
              <button onClick={showAnswerFunc}>
                {showAnswer ? "Hide Answer" : "Show Answer"}
              </button>
            </div>
          </div>
        );
      } else {
        return <button onClick={submitTest}>Submit Test</button>;
      }
    } else {
      return <p>Questions Not Found</p>;
    }
  }
  function showAnswerFunc() {
    setShowAnswer(!showAnswer);
  }
  return (
    <div className="practiceReTellLecture-main">
      <div className="practiceReTellLecture-main-content">
        {landingPage == true ? (
          <QuestionsFrontPage startPage={startPage} />
        ) : (
          questionFunc()
        )}
      </div>
    </div>
  );
}

export default PracticeShortAnswer;

{
  /* <div className="reTellLecture-Content">
              <div className="reTellLecture-image">
                <div className="reTellLecture-img">
                  <img src={image} />
                </div>
              </div>
              <div className="reTellLecture-audioAndRec">
                <div className="reTellLecture-audio">
                  <AudioPlayer src={audio} reset={audioPlayer.reset} onEnd={onAudioEnds} questionId={questionId}/>
                  <TextToSpeech
                    text={"Hello I am Speaking"}
                    onAudioEnds={onAudioEnds}
                  />
                </div>
                <div className="reTellLecture-recording">
                  {audioEnds ? <SpeechToText /> : <></>}
                </div>
              </div>
            </div> */
}
