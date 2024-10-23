import React, { useEffect, useState } from "react";
import "./PracticeReTellLecture.css";
import { useDispatch, useSelector } from "react-redux";
// import SpeechToText from "../../CommonComponents/SpeechToText/SpeechToText";
// import TextToSpeech from "../../CommonComponents/TextToSpeech/TextToSpeech";
import image from "../../../../Images/reTell01.jpg";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import { stopRecording } from "../../../CommonComponents/Recording/recordingSlice";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import SpeechToText from "../../../CommonComponents/SpeechToText/SpeechToText";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
// import { resetCountDown } from "../../CommonComponents/Countdown/countDownSlice";
// import { stopRecording } from "../../CommonComponents/Recording/recordingSlice";
import axios from "axios";
function PracticeReTellLecture() {
  let que = [
    {
      questionId: 1,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
    },
    {
      questionId: 2,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
    },
    {
      questionId: 3,
      heading:
        "Second Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(que);
  const [answers, setAnswers] = useState([]);
  const [landingPage, SetLandingPage] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

  const [audioEnds, setAudioEnds] = useState(false);
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
    setShowAnswer(false)
    dispatch(resetCountDown({ reset: `PracticeReTellLecture${questionId}` }));
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
        questionType: "reTellLecture",
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
              <div className="reTellLecture-Content">
                {/* <div className="reTellLecture-image">
                  <div className="reTellLecture-img">
                    <img src={image} />
                  </div>
                </div> */}
                <div className="reTellLecture-audioAndRec">
                  <div className="reTellLecture-audio">
                    {/* <AudioPlayer src={audio} reset={audioPlayer.reset} onEnd={onAudioEnds} questionId={questionId}/> */}
                    <TextToSpeech
                      text={questions[currentQuestion].text}
                      onAudioEnds={onAudioEnds}
                      countDuration={3}
                    />
                  </div>
                  <div className="reTellLecture-recording">
                    {audioEnds ? <SpeechToText duration={40} /> : <></>}
                  </div>
                </div>
              </div>
            </div>
            {showAnswer == true ? (
                <p>{questions[currentQuestion].text}</p>
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

export default PracticeReTellLecture;

{
  /* <div className="reTellLecture-Main">
  <div className="reTellLecture-Content">
    <div className="reTellLecture-image">
      <div className="reTellLecture-img">
        <img src={img01} />
      </div>
    </div>
    <div className="reTellLecture-audioAndRec">
      <div className="reTellLecture-audio">
        // <AudioPlayer src={audio} reset={audioPlayer.reset} onEnd={onAudioEnds} questionId={questionId}/>
        <TextToSpeech text={"Hello I am Speaking"} onAudioEnds={onAudioEnds} />
      </div>
      <div className="reTellLecture-recording">
        {audioEnds ? <SpeechToText /> : <></>}
      </div>
    </div>
  </div>
</div>; */
}
