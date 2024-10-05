import React, { useEffect, useState } from "react";
import "./PracticeWriteFromDictation.css";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch, useSelector } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
import axios from "axios";
function PracticeWriteFromDictation() {
  // let ques = [
  //   {
  //     questionId: 13,
  //     heading:
  //       "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",

  //     text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
  //     type:"writeFromDictation"
  //   },
  //   {
  //     questionId: 14,
  //     heading:
  //       "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",

  //     text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
  //   },
  // ];
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [summary, setSummary] = useState("");
  const [answers, setAnswers] = useState([]);
  const [landingPage, SetLandingPage] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.app.baseUrl);

  useEffect(() => {
    setSummary("");
  }, [currentQuestion]);

  useEffect(() => {
    getQuestionsFunc();
  }, []);

  const handleChange = (event) => {
    setSummary(event.target.value);
  };

  function nextQuestion(questionId) {
    setShowAnswer(false);
    // console.log("selectedOptions", selectedOptions);
    dispatch(
      resetCountDown({ reset: `PracticeWriteFromDictation${questionId}` })
    );
    setAnswers([...answers, { questionId, answer: summary }]);

    setCurrentQuestion(currentQuestion + 1);
  }

  function submitTest(params) {
    console.log("Answers", answers);
  }
  function startPage(params) {
    SetLandingPage(false);
  }
  function getQuestionsFunc(params) {
    axios
      .post(`${baseUrl}api/user/getQuestionsByQuestionType`, {
        questionType: "dictationListening",
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
          <div className="listening-Main-Content-Questions">
            <h2>Question {currentQuestion + 1}</h2>
            {questions[currentQuestion].heading !== "" ? (
              <div className="listening-Main-Content-QuestionsDiv">
                <p className="listening-Main-Content-QuestionsDiv-P">
                  {questions[currentQuestion].heading}
                </p>
                {/* <br/> */}

                <div className="listening-Main-Content-QuestionsDiv-Audio-Div">
                  <div className="listening-Main-Content-QuestionsDiv-Audio-Div-Content">
                    <TextToSpeech text={questions[currentQuestion].text} />
                  </div>
                </div>
                <div className="listening-Main-Content-QuestionsDiv-Options">
                  <div className="listening-Main-Content-QuestionsDiv-Options-Content">
                    <p className="listening-Main-Content-QuestionsDiv-Options-P">
                      {/* <TextAreaWithWordCount
                      questionId={questions[currentQuestion].questionId}

                    /> */}
                      <div className="summariseWrittenText-main-content-textArea-Div">
                        <textarea
                          value={summary}
                          onChange={handleChange}
                          placeholder="Write your summary here..."
                          rows={5}
                          cols={40}
                        />
                        <br />
                      </div>
                    </p>
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
                </div>
              </div>
            ) : (
              <></>
            )}
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
    <div className="listening-main">
      <div className="listening-Main-Content">
        {landingPage == true ? (
          <QuestionsFrontPage startPage={startPage} />
        ) : (
          questionFunc()
        )}
      </div>
    </div>
  );
}

export default PracticeWriteFromDictation;
