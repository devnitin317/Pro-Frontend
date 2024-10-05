import React, { useEffect, useRef, useState } from "react";
import PlaceInputInString from "../../../CommonComponents/PlaceInputInString/PlaceInputInString";
import PlaceDropDownInString from "../../../CommonComponents/PlaceDropDownInString/PlaceDropDownInString";
import './PracticeReadingDropDownFillInTheBlanks.css'
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
import axios from 'axios'
import { useSelector } from "react-redux";
function PracticeReadingDropDownFillInTheBlanks() {
  // let ques = [
  //   {
  //     questionID: 9,
  //     heading:
  //       "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
  //     Paragraph: "",
  //     Question: "",
  //     Option:
  //       "This short book has been concerned with the main tool of learning: language. Many children, particularly those in the industrial areas of the country, start their educational lives with this tool blunt, and live their early years in home circumstances which often conspire to keep it 'blank' with the result, as the young sixth-former wrote in Chapter One, that even he becomes increasingly conscious of his 'blank' of fluency, which may become the most prominent manifestation of his embarrassment and discomfort. To 'blank' this, to give the child the confidence, which derives from 'blank' of speech and writing, is surely one of the prime tasks of the country's schools. There is no single recipe for a 'blank' to do this well, but it may be helpful to consider the conditions, which appear to be 'blank' to the primary schools whose work has been quoted.",
  //     Options: [
  //       { id: 1, options: ["sharp", "same", "different", "blunt", "young"] },
  //       {
  //         id: 2,
  //         options: ["shortage", "difficulty", "lack", "weakness", "gap"],
  //       },
  //       { id: 3, options: ["miss", "avoid", "waste", "spare", "pass"] },
  //       { id: 4, options: ["ease", "skill", "comfort", "utility", "ability"] },
  //       { id: 5, options: ["meal", "lesson", "way", "teaching", "style"] },
  //       {
  //         id: 6,
  //         options: ["frequent", "clear", "similar", "shared", "common"],
  //       },
  //     ],
  //     selection: "fillUpsWithDropDown",
  //   },
  //   {
  //     QuestionID: 10,
  //     heading:
  //       "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
  //     Paragraph: "",
  //     Question: "",
  //     Option:
  //       "Evidence for a genetic basis of antisocial behavior stems from several different lines of research. First, behavioral genetic studies of twins and adoptees have demonstrated that 'blank' plays a role in antisocial behavior, including various forms of aggression and criminality, by finding greater concordance for such behavior in genetically 'blank' individuals, compared to non-relatives living in the same environment. Second, various correlates of antisocial behavior, including personality factors such as impulsivity, sensation-seeking, risk-taking, and callous-unemotional traits, are known to be at least partly genetically 'blank' Third, psychiatric outcomes related to antisocial behavior, including antisocial personality disorder, gambling, and substance use and abuse, have also been 'blank' in genetically informative designs, and each of these has demonstrated significant genetic links.",
  //     Options: [
  //       { id: 1, options: ["parenting", "environment", "heredity", "culture"] },
  //       { id: 2, options: ["identical", "related", "diverse", "idealized"] },
  //       { id: 3, options: ["delivered", "managed", "directed", "influenced"] },
  //       {
  //         id: 4,
  //         options: ["inferred", "investigated", "inspected", "integrated"],
  //       },
  //     ],
  //     selection: "fillUpsWithDropDown",
  //   },
  // ];
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [landingPage,SetLandingPage] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false);

  const baseUrl = useSelector((state) => state.app.baseUrl);

  const practiceReadingDropDownFillInTheBlanksRef = useRef(null); //ref
  useEffect(()=>{
    getQuestionsFunc()
  },[])
  function nextQuestion(questionId) {
    setShowAnswer(false)
    if (practiceReadingDropDownFillInTheBlanksRef.current) {
      if (
        "dataFromPlaceDropDownInString" in
        practiceReadingDropDownFillInTheBlanksRef.current
      ) {
        let dataFromDropDownInString =
          practiceReadingDropDownFillInTheBlanksRef.current.dataFromPlaceDropDownInString();
        console.log(dataFromDropDownInString);
        setAnswers([
          ...answers,
          { questionId, answer: dataFromDropDownInString },
        ]);
      }
    }
    setCurrentQuestion(currentQuestion + 1);
  }
  function submitTest(params) {
    console.log("answers", answers);
  }
  function startPage(params) {
    SetLandingPage(false)
  }
  function getQuestionsFunc(params) {
    axios
      .post(
        `${baseUrl}api/user/getQuestionsByQuestionType`,
        {questionType:"fillUpsWithDropDown"}
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
          <div className="practiceReadAloud-main-content-questions">
            <div className="practiceReadAloud-main-content-question">
              <h2 className="practiceReadAloud-main-content-question-no">
                Question {currentQuestion + 1}
              </h2>
              <p className="practiceReadAloud-main-content-question-heading">
                {questions[currentQuestion].heading}
              </p>
              <PlaceDropDownInString
                question={questions[currentQuestion]}
                ref={practiceReadingDropDownFillInTheBlanksRef}
              />
            </div>
            <br/>
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
    }else{
      return <p>Questions Not Found</p>
    }
    
  }
  function showAnswerFunc() {
    setShowAnswer(!showAnswer);
  }
  function mapAnswerFunc(ansArray) {
    let ans = []
    ansArray.map((d,index)=>{
      ans.push(<span>{index + 1}. {d}<br/></span>)
    })
    return ans;
  }
  return (
    <div className="practiceReadAloud-main">
      <div className="practiceReadAloud-main-content">
      {landingPage == true ? (<QuestionsFrontPage startPage={startPage}/>):(
       questionFunc())}
      </div>
    </div>
  );
}

export default PracticeReadingDropDownFillInTheBlanks;
