import React, { useEffect, useRef, useState } from "react";
import ReadingMock from "../CommonComponents/ForMockTest/ReadingMock/ReadingMock";
import ListeningMock from "../CommonComponents/ForMockTest/ListeningMock/ListeningMock";
import WritingMock from "../CommonComponents/ForMockTest/WritingMock/WritingMock";
import SpeakingMock from "../CommonComponents/ForMockTest/SpeakingMock/SpeakingMock";
import { resetCountDown } from "../CommonComponents/Countdown/countDownSlice";
import { stopRecording } from "../CommonComponents/Recording/recordingSlice";
import { resetAudioPlayer } from "../CommonComponents/AudioPlayer/audioPlayerSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Spinner from "../CommonComponents/Spinner/Spinner";

function MockTestCommon({que,mockTestNumber}) {
  
  const ques = que;
  const [questions, setQuestions] = useState(ques);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [showSpinner,setShowSpinner] = useState(false)
  const MockTestCommonRef = useRef(null);

  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.app.baseUrl);
  const userEmail = useSelector((state) => state.app.userData.email);
  useEffect(() => {
    setQuestions(que);
    setAnswers([
      ...answers,
      { mockTest: mockTestNumber},
    ]);
  }, [que]);
  function nextQuestion(questionId, moduleType) {
    if (window.speechSynthesis.speaking) {
      // Speech synthesis is already active
      window.speechSynthesis.cancel();
    }
    
    if (MockTestCommonRef.current) {
      // let dataFromPlaceInputInString = dragAndDropRef.current.dataFromPlaceInputInString();

      if ("nextQuestionFromReadMock" in MockTestCommonRef.current) {
        let dataFromReadMock =
          MockTestCommonRef.current.nextQuestionFromReadMock();
        setAnswers([
          ...answers,
          { questionId, answer: dataFromReadMock, moduleType },
        ]);
      }
      if ("nextQuestionFromWritingMock" in MockTestCommonRef.current) {
        let dataFromReadMock =
          MockTestCommonRef.current.nextQuestionFromWritingMock();
        setAnswers([
          ...answers,
          { questionId, answer: dataFromReadMock, moduleType },
        ]);
      }
      if ("nextQuestionFromSpeakingMock" in MockTestCommonRef.current) {
        let dataFromReadMock =
          MockTestCommonRef.current.nextQuestionFromSpeakingMock();
        setAnswers([
          ...answers,
          { questionId, answer: dataFromReadMock, moduleType },
        ]);
      }
      if ("nextQuestionFromListeningMock" in MockTestCommonRef.current) {
        let dataFromReadMock =
          MockTestCommonRef.current.nextQuestionFromListeningMock();
        setAnswers([
          ...answers,
          { questionId, answer: dataFromReadMock, moduleType },
        ]);
      }
    }

    dispatch(resetCountDown({ reset: `speaking${questionId}` }));
    dispatch(stopRecording(false));
    dispatch(resetAudioPlayer({ reset: `speaking${questionId}` }));
    setCurrentQuestion(currentQuestion + 1);
    console.log("answerFRomFull", answers);
  }

  function moduleTypeAndQuestion() {
    // let moduleArr = [];

    if (questions[currentQuestion].moduleType === "reading") {
      return (
        <ReadingMock
          question={questions[currentQuestion]}
          ref={MockTestCommonRef}
        />
      );
    } else if (questions[currentQuestion].moduleType === "listening") {
      return (
        <ListeningMock
          question={questions[currentQuestion]}
          ref={MockTestCommonRef}
        />
      );
    } else if (questions[currentQuestion].moduleType === "writing") {
      return (
        <WritingMock
          question={questions[currentQuestion]}
          ref={MockTestCommonRef}
        />
      );
    } else if (questions[currentQuestion].moduleType === "speaking") {
      return (
        <SpeakingMock
          question={questions[currentQuestion]}
          ref={MockTestCommonRef}
        />
      );
    }
  }
  function submitTest(params) {
    debugger
    let dataToSend = {userEmail,answers}
    setShowSpinner(true)
    axios
      // .post("http://localhost:5001/api/user/fullMockTestcheckResult",answers)
      .post(
        `${baseUrl}api/user/fullMockTestcheckResult`,
        dataToSend
      )
      .then((d) => {
        
          setResult(d.data);
          setShowSpinner(false)
        console.log(d.data);
      })
      .catch((e) => {
        setShowSpinner(false)
        console.log(e);
      });
    console.log("Full", answers);
  }
  return (
    <div className="reading-main">
      <div className="reading-main-content">
        {currentQuestion < questions.length ? (
          <div className="reading-main-content-questions">
            <div className="reading-main-content-questions-Div">
              <h2>Question {currentQuestion + 1}</h2>
              {moduleTypeAndQuestion()}
            </div>
            <div className="reading-main-content-next">
              <button
                onClick={() =>
                  nextQuestion(
                    questions[currentQuestion].questionId,
                    questions[currentQuestion].moduleType
                  )
                }
              >
                Next Question
              </button>
              {/* <button onClick={submitTest}>Submit Test</button> */}
            </div>
          </div>
        ) : (
          <div className="reading-main-content-result-submit">
            <div className="reading-main-content-result">
              {result !== null ? (
                <div>
                  <p>Speaking : {Math.round(result.speakingResult) ?? 10}</p>
                  <p>Reading : {Math.round(result.readingResult) ?? 10}</p>
                  <p>Listening : {Math.round(result.listeningResult) ?? 10}</p>
                  <p>Writing : {Math.round(result.writingResult) ?? 10}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <button onClick={submitTest}>Submit Test</button>
          </div>
        )}
        {showSpinner ? <Spinner/>:<></>}
        {/* <ListeningMock /> */}
      </div>
    </div>
  );
}

export default MockTestCommon;
