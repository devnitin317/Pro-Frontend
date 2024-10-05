import React, { useEffect, useState } from "react";
import "./PracticeSummarizeSpokenText.css";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch, useSelector } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
import axios from 'axios'
function PracticeSummarizeSpokenText() {
  // let ques = [
  //   {
  //     questionId: 13,
  //     heading:
  //       "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
  //     heading2:
  //       "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
  //     text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
  //   },
  //   {
  //     questionId: 14,
  //     heading:
  //       "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
  //     heading2:
  //       "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
  //     text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
  //   },
  // ];
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [summary, setSummary] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [landingPage,SetLandingPage] = useState(true)


  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.app.baseUrl);

  useEffect(()=>{
    getQuestionsFunc()
  },[])
  useEffect(() => {
    setSummary("");
    setWordCount(0);
  }, [currentQuestion]);

  const handleChange = (event) => {
    const newText = event.target.value;
    setSummary(event.target.value);
    updateWordCount(newText);
  };

  function nextQuestion(questionId) {
    
    // console.log("selectedOptions", selectedOptions);
    dispatch(
      resetCountDown({ reset: `practiceSummarizeSpokenText${questionId}` })
    );
    setAnswers([...answers, { questionId, answer: summary }]);

    setCurrentQuestion(currentQuestion + 1);
  }

  const updateWordCount = (text) => {
    // Remove extra white spaces and split by spaces to count words
    const wordsArray = text.trim().split(/\s+/);
    setWordCount(wordsArray.length);
  };

  function submitTest(params) {
    console.log("Answers",answers)
  }
  function startPage(params) {
    SetLandingPage(false)
  }
  function getQuestionsFunc(params) {
    axios
      .post(
        `${baseUrl}api/user/getQuestionsByQuestionType`,
        {questionType:"summariseSpokenListening"}
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
          <div className="listening-Main-Content-Questions">
          <h2>Question {currentQuestion + 1}</h2>
          {questions[currentQuestion].heading !== "" ? (
            <div className="listening-Main-Content-QuestionsDiv">
              <p className="listening-Main-Content-QuestionsDiv-P">
                {questions[currentQuestion].heading}
              </p>
              {/* <br/> */}
              <p className="listening-Main-Content-QuestionsDiv-P">
                {questions[currentQuestion].heading2}
              </p>
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
                    <p>wordCount: {wordCount}</p>
                  </p>
                  <button
                    onClick={() =>
                      nextQuestion(questions[currentQuestion].questionId)
                    }
                  >
                    Next Question
                  </button>
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
    }else{
      return <p>Questions Not Found</p>
    }
    
  }
  return (
    <div className="listening-main">
      <div className="listening-Main-Content">
      {landingPage == true ? (<QuestionsFrontPage startPage={startPage}/>):(
       questionFunc())}
      </div>
    </div>
  );
}

export default PracticeSummarizeSpokenText;
