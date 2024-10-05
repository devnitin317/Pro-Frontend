import React, { useState } from "react";
import textgears from "textgears-api";
import "./Writing.css";
import axios from "axios";
import { useSelector } from "react-redux";
function Writing({que}) {
  let ques = [
    {
      questionId: 13,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      type: "highLightInCorrectWord",
      summary:
        "So far in our discussion of chemical equations we have assumed that these reactions only go in one direction, the forward direction, from left to right as we read it in the equation. That's why our arrowhead points from left to right reactants react together to make products. However, this is not exactly how things occur in reality. In fact, practically every chemical reaction is reversible, meaning the products can also react together to reform the reactants that they were made of. So instead of writing that single arrow facing from right to top, a more appropriate symbol would be a double arrow, one going from left to right and one going from right to left. Reactants are continually continuously reacting to form produce. But at the same time as those products are formed, they remake the reactants. They're both going simultaneously, forming each other. This is what we would call a state of equality.",
    },
    {
      questionId: 14,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      type: "highLightInCorrectWord",
      summary:
        "So far in our discussion of chemical equations we have assumed that these reactions only go in one direction, the forward direction, from left to right as we read it in the equation. That's why our arrowhead points from left to right reactants react together to make products. However, this is not exactly how things occur in reality. In fact, practically every chemical reaction is reversible, meaning the products can also react together to reform the reactants that they were made of. So instead of writing that single arrow facing from right to top, a more appropriate symbol would be a double arrow, one going from left to right and one going from right to left. Reactants are continually continuously reacting to form produce. But at the same time as those products are formed, they remake the reactants. They're both going simultaneously, forming each other. This is what we would call a state of equality.",
    },
  ];
  const [questions, setQuestions] = useState(que);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [data, setData] = useState();
  const [bad, setBad] = useState();
  const [better, setBetter] = useState();
  const [summary, setSummary] = useState("");
  const [spellingResponse, setSpellingResponse] = useState([]);
  const [grammerResponse, setGrammerResponse] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const baseUrl = useSelector((state) => state.app.baseUrl);
  let incorrectSpellingArr = [];

  const textgearsApi = textgears("KgTfFRqsmncThR0k", { language: "en-US" });

  const handleChange = (event) => {
    setSummary(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the summary submission here, e.g., send to an API
    console.log("Submitted Summary:", summary);
    checkGrammarFunc();
    // // Clear the input after submission (optional)
    // setSummary('');
  };

  function checkGrammarFunc(params) {
    textgearsApi
      .checkGrammar(summary)
      .then((data) => {
        let arr = [];
        setData(data.response.errors);
        filterData(data.response.errors);
      })
      .catch((err) => {});
  }

  function filterData(data) {
    let badArr = [];
    let betterArr = [];

    data.map((d) => {
      badArr.push(<span>{d.bad}</span>);
      betterArr.push(<span>{d.better}</span>);
    });
    setBad(badArr);
    setBetter(betterArr);
  }
  function checkSpellingsOfWord(params) {
    axios
      // .get("http://localhost:5001/api/user/checkSpellings")
      .get(`${baseUrl}api/user/checkSpellings`)
      .then((d) => {
        console.log(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function checkSpellingOfSummary() {
    axios
      .post(`${baseUrl}api/user/checkSummary`, { summary })
      .then((d) => {
        setSpellingResponse(d.data.spellingResult);
        setGrammerResponse(d.data.grammerResult[0].grammerMistakes);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function spellingResponseFunc() {
    console.log("spellingresponsefrom func : ", spellingResponse);
    let res = [];
    if (spellingResponse.length != 0) {
      spellingResponse.incorrectSpelling.map((spelling) => {
        incorrectSpellingArr.push(<span>{spelling},</span>);
      });
      res.push(
        <div className="spellingResponseDiv">
          <h2>Spelling Data</h2>
          <p>Total Words : {spellingResponse.summaryLength}</p>
          <p>Correct words : {spellingResponse.spellingCheckCount}</p>
          <p>Incorrect words : {incorrectSpellingArr}</p>
        </div>
      );
    }

    return res;
  }

  function grammerResponseFunc(params) {
    console.log("spellingresponsefrom func : ", grammerResponse);
    let res = [];
    let gramMis = [];
    let replacements = [];
    let reps = []; //because mistake.replacements is an array and it may contain more than one value
    if (grammerResponse.length != 0) {
      grammerResponse.map((mistake) => {
        gramMis.push(<span>{mistake.error},</span>);
        mistake.replacements.map((rep) => {
          reps.push(<span>{rep} </span>);
        });
        replacements.push(
          <div className="repsDiv">
            <span>{reps},</span>
          </div>
        );
        reps = [];
      });
      res.push(
        <div className="spellingResponseDiv">
          <h2>Grammer Data</h2>
          <p>Mistakes : {gramMis}</p>
          <div className="repMainDiv">Replacements : {replacements}</div>
        </div>
      );
    }

    return res;
  }

  function calculateScore() {
    //For Words in summary
    let sc1 = 5 / 300;
    let wordCountScore = sc1 * spellingResponse.summaryLength;

    let sc = 5 / spellingResponse.summaryLength;
    let spellingScore = sc * spellingResponse.spellingCheckCount;

    let grammerScore =
      sc * (spellingResponse.summaryLength - grammerResponse.length);

    //Total
    let totalScoreVar = (wordCountScore + spellingScore + grammerScore) / 3;
    totalScoreVar = totalScoreVar.toFixed(1);
    setTotalScore(totalScoreVar);
    // Calculate total score out of 10
    // const totalScore = (spellingScore + grammarScore) * 1.0;
    // console.log(totalScore)
    // return totalScore;
  }

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  }
  function submitTest(params) {
    
  }
  return (
    <div className="writing-main">
      <div className="writing-main-content">
        {currentQuestion < questions.length ? (
          <div className="writing-main-content-questions">
            <h2>Question {currentQuestion + 1}</h2>
            {questions[currentQuestion].heading !== "" ? (
              <div className="writing-main-content-QuestionsDiv">
                <p className="writing-main-content-QuestionsDiv-P">
                  {questions[currentQuestion].heading}
                </p>
              </div>
            ) : (
              <></>
            )}
            {questions[currentQuestion].summary !== "" ? (
              <div className="writing-main-content-summary">
                <p>{questions[currentQuestion].summary}</p>
              </div>
            ) : (
              <></>
            )}  
             {questions[currentQuestion].topic !== "" ? (
              <div className="writing-main-content-summary">
                <p>{questions[currentQuestion].topic}</p>
              </div>
            ) : (
              <></>
            )}  
            <div className="writing-main-content-textArea-Div">

                <textarea
                  value={summary}
                  onChange={handleChange}
                  placeholder="Write your summary here..."
                  rows={5}
                  cols={40}
                />
                <br />
                
            </div>
            <div className="reading-main-content-next">
            <button onClick={handleSubmit} >Submit Summary</button>
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
          <button onClick={submitTest}>Submit Test</button>

        )}
      </div>
    </div>
  );
}

export default Writing;

// <div className="main-Div">
//   <div className="main-Div-Content">
//     <div className="writing-main">
//       <div className="writing-main-content">
//         <div className="writing-main-content-summary">
//           <div>
//             <h2>Enter Your Summary</h2>
//             <form onSubmit={handleSubmit}>
//               <textarea
//                 value={summary}
//                 onChange={handleChange}
//                 placeholder="Write your summary here..."
//                 rows={5}
//                 cols={40}
//               />
//               <br />
//               <button type="submit">Submit Summary</button>
//             </form>
//           </div>
//         </div>
//         {console.log(data)}
//         <p>Spelling Mistakes : </p>
//         <p>Grammer Mistakes :{bad} </p>
//         <p>Grammer solution :{better} </p>

//         {/* {checkSpellings()} */}
//         {/* {checkSummary()} */}
//         <div className="spellingResponseMainDiv">
//           {spellingResponseFunc()}
//           {/* <button onClick={checkSpellingOfSummary}>Check Spelling Mistakes</button> */}
//         </div>
//         <div className="grammerResponseMainDiv">
//           {grammerResponseFunc()}
//           <button onClick={checkSpellingOfSummary}>Check Mistakes</button>
//         </div>
//         <p>Score : {totalScore}</p>
//         <button onClick={calculateScore}>Check Score</button>
//       </div>
//     </div>
//   </div>
// </div>
