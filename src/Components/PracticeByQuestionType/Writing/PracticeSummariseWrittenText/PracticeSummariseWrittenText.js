import React, { useEffect, useState } from 'react'
import './PracticeSummariseWrittenText.css'
import QuestionsFrontPage from '../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage';
import axios from 'axios'
import { useSelector } from 'react-redux';
import Spinner from '../../../CommonComponents/Spinner/Spinner';
import ResultModal from '../../../CommonComponents/ResultModal/ResultModal';
function SummariseWrittenText() {
    // let ques = [
    //     {
    //       questionId: 13,
    //       heading:
    //         "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
    //       summary:
    //         "For millions of years, Mediterranean sea turtles have been coming to the shore of southern Lebanon to lay their eggs. Every summer, their babies hatch and literally run for their lives on the strip of sand that separates their nests from the sea. An endangered species, they had been largely ignored in this part of Lebanon until two women set out to protect them. lineBreak  Mona Khalil was inspired by a walk on the beach during a visit to her homeland, when she first saw the turtles. Upon learning that they were close to disappearing from her country, Khalil decided to ome back and do something about them. lineBreak  The next year, 2000, she returned and teamed up with Habiba Fayed, who shares her passion for the environment. They opened a bed-and- breakfast in the Khalil family home to finance their efforts. Guests could simply vacation or, in the spirit of ecotourism, they could help the owners protect the turtles' nests and keep the beach clean. lineBreak  Female turtles travel to the exact spot where they were born to dig their nests in the sand, laying an average of 70 to 100 eggs. This is the moment when the women intervene. They protect the nests from predators by burying an iron grid in the sand above the eggs. The spaces on the grid are large enough to allow the baby turtles to emerge after a month and find their way to the sea... and to a chance at life.",
    //     },
    //     {
    //       questionId: 14,
    //       heading:
    //       "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
    //       summary:
    //         "So far in our discussion of chemical equations we have assumed that these reactions only go in one direction, the forward direction, from left to right as we read it in the equation. That's why our arrowhead points from left to right reactants react together to make products. However, this is not exactly how things occur in reality. In fact, practically every chemical reaction is reversible, meaning the products can also react together to reform the reactants that they were made of. So instead of writing that single arrow facing from right to top, a more appropriate symbol would be a double arrow, one going from left to right and one going from right to left. Reactants are continually continuously reacting to form produce. But at the same time as those products are formed, they remake the reactants. They're both going simultaneously, forming each other. This is what we would call a state of equality.",
    //     },
    //   ];
      const [questions, setQuestions] = useState([]);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [summary, setSummary] = useState("");
      const [landingPage,SetLandingPage] = useState(true)
      const [showSpinner, setShowSpinner] = useState(false);
      const [showResultModal, setShowResultModal] = useState(false);
      const [result, setResult] = useState(0);


      const baseUrl = useSelector((state) => state.app.baseUrl);

      useEffect(()=>{
        getQuestionsFunc()
      },[])
      
      const handleChange = (event) => {
        setSummary(event.target.value);
      };

      const nextQuestion = () => {
        setSummary("")
        setCurrentQuestion(currentQuestion + 1);
      }
        function submitTest(params) {
          setShowSpinner(true);
          
          debugger
          axios
          .post(`${baseUrl}api/user/checkSummaryResult`, {summary})
          .then((d) => {
            console.log(d);
            setResult(d.data);
            setShowResultModal(true)
            setShowSpinner(false);
          })
          .catch((e) => {
            setShowSpinner(false);
            console.log(e);
          });
        }
      function lineBreakInSummaryFunc(summary) {
        
        // const myString = "Hello world lineBreak This is a test lineBreak Another line";
        const lines = summary.split(' lineBreak ');
        let paraToDisplay = []
        lines.map((line, index) => (
            paraToDisplay.push(
            <React.Fragment key={index}>
              {line}
              <br />
              <br />
            </React.Fragment>)
          ))
          return paraToDisplay;
      }
      function startPage(params) {
        SetLandingPage(false)
      }

      function getQuestionsFunc(params) {
        axios
          .post(
            `${baseUrl}api/user/getQuestionsByQuestionType`,
            {questionType:"summariseWrittenText"}
          )
          .then((d) => {
            
            console.log(d);
            setQuestions(d.data)
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
            <h2>Question {currentQuestion + 1}</h2>
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
                <p>{lineBreakInSummaryFunc(questions[currentQuestion].summary)}</p>
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
        }else{
          return <p>Questions Not Found</p>
        }
        
      }

      function closeFunc() {
        setShowResultModal(false)
      }
  return (
    <div className="summariseWrittenText-main">
      <div className="summariseWrittenText-main-content">
      {landingPage == true ? (<QuestionsFrontPage startPage={startPage}/>):(
      questionFunc())}
        {showSpinner ? <Spinner /> : <></>}
        {showResultModal ? <ResultModal totalScore={result} outOf={10} closeFunc={closeFunc}/> : <></>}

      </div>
    </div>
  )
}

export default SummariseWrittenText