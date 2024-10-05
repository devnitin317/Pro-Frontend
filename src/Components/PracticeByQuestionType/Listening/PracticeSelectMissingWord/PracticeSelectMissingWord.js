import React, { useEffect, useRef, useState } from "react";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch, useSelector } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import "./PracticeSelectMissingWord.css";
import PlaceInputInString from "../../../CommonComponents/Listening/PlaceInputInString";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
// import PlaceInputInString from "../../../CommonComponents/PlaceInputInString/PlaceInputInString";
import axios from "axios";
function PracticeSelectMissingWord() {
  // let ques = [
  //   {
  //     questionId: 13,
  //     heading:
  //       "You will hear a recording about an analysis of medical research findings. At the end of the recording the last word or group of words has been replaced by a beep. Select the correct option to complete the recording.",
  //     text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
  //     options: [
  //       "He finds the weaving together of the Latin Mass and antiwar poems to be quite effective.",
  //       "He is critical of Britten's inconsistencies as observed in the War Requiem.",
  //       "He admires the War Requiem of Britten but finds it far from perfect.",
  //       "He questions whether Britten's work will endure."
  //     ],
  //   },
  //   {
  //     questionId: 14,
  //     heading:
  //     "You will hear a recording. At the end of the recording the last word or group of words has been replaced by a beep. Select the correct option to complete the recording.",
  //     text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
  //     options: [
  //       "Motivation is worth more than intelligence in leaming.",
  //       "Language can be effectively learnt through play.",
  //       "There is no single best method for learning.",
  //       "Teachers should regularly change their methods."
  //     ],
  //   },
  // ];
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState({ answer: "" });
  const [landingPage, SetLandingPage] = useState(true);

  const [summary, setSummary] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.app.baseUrl);

  useEffect(() => {}, [currentQuestion]);

  useEffect(() => {
    getQuestionsFunc();
  }, []);
  function nextQuestion(questionId) {
    setShowAnswer(false);
    // console.log("selectedOptions", selectedOptions);
    dispatch(
      resetCountDown({ reset: `PracticeSelectMissingWord${questionId}` })
    );
    if (selectedOption.answer !== "") {
      setAnswers([...answers, selectedOption]);
    }

    setCurrentQuestion(currentQuestion + 1);
  }
  const handleOptionSelect = (answer, questionId) => {
    setSelectedOption({ questionId, answer });
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
        questionType: "missingWordListening",
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
          <div className="practiceReadAloud-main-content-questions">
            <div className="practiceReadAloud-main-content-question">
              <h2 className="practiceReadAloud-main-content-question-no">
                Question {currentQuestion + 1}
              </h2>
              <p className="practiceReadAloud-main-content-question-heading">
                {questions[currentQuestion].heading}
              </p>
              <TextToSpeech text={questions[currentQuestion].text} />
              <p className="practiceReadAloud-main-content-question-para">
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index} className="optionsLi">
                    <label>
                      <input
                        type="radio"
                        name="options"
                        value={option}
                        checked={option === selectedOption.answer}
                        onChange={() =>
                          handleOptionSelect(
                            option,
                            questions[currentQuestion].questionId
                          )
                        }
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </p>
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
    <div className="practiceReadAloud-main">
      <div className="practiceReadAloud-main-content">
        {landingPage == true ? (
          <QuestionsFrontPage startPage={startPage} />
        ) : (
          questionFunc()
        )}
      </div>
    </div>
  );
}

export default PracticeSelectMissingWord;
