import React, { useEffect, useState } from "react";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch, useSelector } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import "./PracticeDoubleAnswer.css";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
import axios from "axios";
function PracticeDoubleAnswer() {
  // let ques = [
  //   {
  //     questionId: 13,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
  //     heading2:
  //       "What is the main idea that the speaker is trying to convey in her comments?",
  //     para: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
  //     options: [
  //       "Motivation is worth more than intelligence in leaming.",
  //       "Language can be effectively learnt through play.",
  //       "There is no single best method for learning.",
  //       "Teachers should regularly change their methods.",
  //     ],
  //   },
  //   {
  //     questionId: 14,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
  //     heading2: "What is the lecture mainly about?",
  //     para: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
  //     options: [
  //       "He finds the weaving together of the Latin Mass and antiwar poems to be quite effective.",
  //       "He is critical of Britten's inconsistencies as observed in the War Requiem.",
  //       "He admires the War Requiem of Britten but finds it far from perfect.",
  //       "He questions whether Britten's work will endure.",
  //     ],
  //   },
  // ];
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [landingPage, SetLandingPage] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

  const [summary, setSummary] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.app.baseUrl);
  debugger;
  useEffect(() => {
    getQuestionsFunc();
  }, []);

  useEffect(() => {}, [currentQuestion]);

  function nextQuestion(questionId) {
    setShowAnswer(false);
    // console.log("selectedOptions", selectedOptions);
    dispatch(resetCountDown({ reset: `PracticeDoubleAnswer${questionId}` }));
    if (selectedOptions.length !== 0) {
      setAnswers([...answers, { questionId, answer: selectedOptions }]);
    }
    setSelectedOptions([]);
    setCurrentQuestion(currentQuestion + 1);
  }
  const handleOptionChangeCheckBox = (answer, questionId) => {
    // const answer = event.target.value;
    if (selectedOptions.includes(answer)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== answer));
    } else {
      setSelectedOptions([...selectedOptions, answer]);
    }
    // setAnswers([...answers, {selectedOptions}]);
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
        questionType: "doubleAnswer",
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
              <p className="practiceSingleAnswer-main-content-question-p">
                {questions[currentQuestion].para}
              </p>
              <p className="practiceReadAloud-main-content-question-para">
                {questions[currentQuestion].heading2}
              </p>
              {questions[currentQuestion].options.map((option, index) => (
                <label>
                  <input
                    className="practiceDoubleAnswer-input"
                    type="checkbox"
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() =>
                      handleOptionChangeCheckBox(
                        option,
                        questions[currentQuestion].questionId
                      )
                    }
                  />
                  {option}
                  <br />
                </label>
              ))}
            </div>
            {showAnswer == true ? (
              <p>{mapAnswerFunc(questions[currentQuestion].answer)}</p>
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
  function mapAnswerFunc(ansArray) {
    let ans = []
    ansArray.map((d) =>{
      ans.push(
        <span>{d}, </span>
      )
    })
    return ans;
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

export default PracticeDoubleAnswer;
