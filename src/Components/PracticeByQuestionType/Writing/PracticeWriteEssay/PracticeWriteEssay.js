import React, { useEffect, useState } from "react";
import "./PracticeWriteEssay.css";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../CommonComponents/Spinner/Spinner";
import ResultModal from "../../../CommonComponents/ResultModal/ResultModal";
import CountDown from "../../../CommonComponents/Countdown/Countdown";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
function PracticeWriteEssay() {
  // let ques = [
  //     {
  //       questionId: 13,
  //       heading:
  //         "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
  //       summary:
  //         "Tobacco, mainly in the form of cigarettes, is one of the most widely-used drugs in the world. Over a billion adults legally smoke tobacco every day. The long term health costs are high-for smokers themselves, and for the wider community in terms of health care costs and lost productivity. lineBreak  Do governments have a legitimate role to legislate to protect citizens from the harmful effects of their own decisions to smoke, or are such decisions up to the individual?",
  //     },
  //     {
  //       questionId: 14,
  //       heading:
  //       "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
  //       summary:
  //         "So far in our discussion of chemical equations we have assumed that these reactions only go in one direction, the forward direction, from left to right as we read it in the equation. That's why our arrowhead points from left to right reactants react together to make products. However, this is not exactly how things occur in reality. In fact, practically every chemical reaction is reversible, meaning the products can also react together to reform the reactants that they were made of. So instead of writing that single arrow facing from right to top, a more appropriate symbol would be a double arrow, one going from left to right and one going from right to left. Reactants are continually continuously reacting to form produce. But at the same time as those products are formed, they remake the reactants. They're both going simultaneously, forming each other. This is what we would call a state of equality.",
  //     },
  //   ];
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [summary, setSummary] = useState("");
  const [landingPage, SetLandingPage] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [result, setResult] = useState(0);
  const baseUrl = useSelector((state) => state.app.baseUrl);
  const countDown = useSelector((state) => state.countDown);
  let dispatch = useDispatch();

  let count = CountDown(600, countDown.active, countDown.reset);
  useEffect(() => {
    getQuestionsFunc();
  }, []);

  const handleChange = (event) => {
    setSummary(event.target.value);
  };

  const nextQuestion = (questionId) => {
    dispatch(resetCountDown({ reset: `PracticeWriteEssay${questionId}` }));
    setSummary("");
    setCurrentQuestion(currentQuestion + 1);
  };
  function submitTest(params) {}
  function lineBreakInSummaryFunc(summary) {
    // const myString = "Hello world lineBreak This is a test lineBreak Another line";
    const lines = summary.split(" lineBreak ");
    let paraToDisplay = [];
    lines.map((line, index) =>
      paraToDisplay.push(
        <React.Fragment key={index}>
          {line}
          <br />
          <br />
        </React.Fragment>
      )
    );
    return paraToDisplay;
  }
  function startPage(params) {
    SetLandingPage(false);
  }
  function getQuestionsFunc(params) {
    axios
      .post(`${baseUrl}api/user/getQuestionsByQuestionType`, {
        questionType: "writeEssayData",
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
          <div className="summariseWrittenText-main-content-questions">
            <div className="practiceReadAloud-main-content-question-no-timer">
              <h2 className="practiceReadAloud-main-content-question-no">
                Question {currentQuestion + 1}
              </h2>
              <p className="practiceReadAloud-main-content-question-timer">
                {/* Time : <Timer id={currentQuestion} /> */}
                Time :{" "}
                <span>
                  {Math.floor((count.seconds % 3600) / 60)
                    .toString()
                    .padStart(2, "0")}
                  :
                </span>
                <span>{(count.seconds % 60).toString().padStart(2, "0")}</span>
              </p>
            </div>
            {questions[currentQuestion].heading !== "" ? (
              <div className="summariseWrittenText-main-content-QuestionsDiv">
                <p className="summariseWrittenText-main-content-QuestionsDiv-P">
                  {questions[currentQuestion].heading}
                </p>
              </div>
            ) : (
              <></>
            )}
            {questions[currentQuestion].summary !== "" ? (
              <div className="summariseWrittenText-main-content-summary">
                <p>
                  {lineBreakInSummaryFunc(questions[currentQuestion].summary)}
                </p>
              </div>
            ) : (
              <></>
            )}
            <div className="summariseWrittenText-main-content-textArea-Div">
              <textarea
                value={summary}
                onChange={handleChange}
                placeholder="Write your summary here..."
                rows={5}
                cols={40}
                disabled={count.seconds === 0 ? true : false}
              />
              <br />
            </div>
            <div className="summariseWrittenText-main-content-next">
              <button
                onClick={() =>
                  nextQuestion(questions[currentQuestion].questionId)
                }
              >
                Next Question
              </button>
              <button onClick={submitTest}>Check Answer</button>
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
  function submitTest(params) {
    setShowSpinner(true);
    let dataToSend = { summary, moduleType: "essay" };
    axios
      .post(`${baseUrl}api/user/checkSummaryResult`, dataToSend)
      .then((d) => {
        console.log(d);
        setResult(d.data);
        setShowResultModal(true);
        setShowSpinner(false);
      })
      .catch((e) => {
        setShowSpinner(false);
        console.log(e);
      });
  }
  function closeFunc() {
    setShowResultModal(false);
  }
  return (
    <div className="summariseWrittenText-main">
      <div className="summariseWrittenText-main-content">
        {landingPage == true ? (
          <QuestionsFrontPage startPage={startPage} />
        ) : (
          questionFunc()
        )}

        {showSpinner ? <Spinner /> : <></>}
        {showResultModal ? (
          <ResultModal totalScore={result} outOf={10} closeFunc={closeFunc} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default PracticeWriteEssay;
