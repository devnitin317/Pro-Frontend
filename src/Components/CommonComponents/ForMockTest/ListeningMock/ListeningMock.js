import React, { useEffect, useRef, useState } from "react";
import TextToSpeech from "../../TextToSpeech/TextToSpeech";
import { resetCountDown } from "../../Countdown/countDownSlice";
import { useDispatch } from "react-redux";
import TextAreaWithWordCount from "../../TextAreaWithWordCount/TextAreaWithWordCount";
// import PlaceInputInString from "../../PlaceInputInString/PlaceInputInString";
import HighLightInCorrectWord from "../../HighLightInCorrectWord/HighLightInCorrectWord";
// import CheckBox from "../CommonComponents/CheckBox/CheckBox";
import "./ListeningMock.css";
import PlaceInputInString from "../../Listening/PlaceInputInString";

const ListeningMock = React.forwardRef((props, ref) => {
  let ques = props.question;
  const [questions, setQuestions] = useState(ques);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState({ answer: "" });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const dispatch = useDispatch();
  const listeningRef = useRef(null); //ref

  useEffect(() => {
    setQuestions(ques);
  }, [props.question]);

    //#region calling child func from parent
  
  // Expose childFunction to parent via ref
  React.useImperativeHandle(ref, () => ({
    nextQuestionFromListeningMock,
  }));
  //#endregion

  function nextQuestionFromListeningMock(questionId) {
    // console.log("selectedOptions", selectedOptions);
    let answerToReturn;
    dispatch(resetCountDown({ reset: `listening${questionId}` }));

    if (selectedOption.answer !== "") {
      // setAnswers([...answers, selectedOption]);
      answerToReturn = selectedOption.answer
    }
    if (selectedOptions.length !== 0) {
      // setAnswers([...answers, { questionId, answer: selectedOptions }]);
      answerToReturn = selectedOptions
    }
    if (listeningRef.current) {
      if ("dataFromTextAreaWithWordCount" in listeningRef.current) {
        let dataFromTextAreaWithWordCount =
          listeningRef.current.dataFromTextAreaWithWordCount();
        let { questionId, text, wordCount } = dataFromTextAreaWithWordCount;
        // setAnswers([
        //   ...answers,
        //   { questionId, answer: text, wordCount: wordCount },
        // ]);
        answerToReturn = text
      }
      if ("dataFromPlaceInputInStrings" in listeningRef.current) {
        let dataFromPlaceInputInStrings =
          listeningRef.current.dataFromPlaceInputInStrings();
        // setAnswers([
        //   ...answers,
        //   { questionId, answer: dataFromPlaceInputInStrings },
        // ]);
        answerToReturn = dataFromPlaceInputInStrings
      }
      if ("dataFromHighLightInCorrectWord" in listeningRef.current) {
        let dataFromHighLightInCorrectWord =
          listeningRef.current.dataFromHighLightInCorrectWord();
        // setAnswers([
        //   ...answers,
        //   { questionId, answer: dataFromHighLightInCorrectWord },
        // ]);
        answerToReturn = dataFromHighLightInCorrectWord
      }
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOptions([]);
    setSelectedOption({ answer: "" });
    return answerToReturn;
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

  const handleOptionSelect = (answer, questionId) => {
    setSelectedOption({ questionId, answer });
  };

  // function getAnswerFromTextArea(ans) {
  //   let {questionId, text, wordCount } = ans;
  //   if (text != "") {
  //     setAnswers([...answers, { questionId, answer: text,wordCount: wordCount }]);

  //   }
  //   console.log("from listening",{questionId, text, wordCount })
  // }

  function questionOptions(params) {
    // 
    let options = [];
    if (questions.type === "multiple") {
      questions.options.map((option, index) => {
        options.push(
          <label>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() =>
                handleOptionChangeCheckBox(option, questions.questionId)
              }
            />
            {option}
            <br />
          </label>
        );
      });

      // options.push(<CheckBox questionId={questions.questionId} options={ questions.options}/>)
    } else if (questions.type === "single") {
      questions.options.map((option, index) => {
        options.push(
          <li key={index} className="optionsLi">
            <label>
              <input
                type="radio"
                name="options"
                value={option}
                checked={option === selectedOption.answer}
                onChange={() =>
                  handleOptionSelect(option, questions.questionId)
                }
              />
              {option}
            </label>
          </li>
        );
      });
    } else if (questions.type === "summarize") {
      options.push(
        <TextAreaWithWordCount
          questionId={questions.questionId}
          ref={listeningRef}
        />
      );
    } else if (questions.type === "dictation") {
      options.push(
        <TextAreaWithWordCount
          questionId={questions.questionId}
          ref={listeningRef}
        />
      );
    } else if (questions.type === "fillUps") {
      options.push(
        <PlaceInputInString
          questionId={questions.questionId}
          text={questions.para}
          ref={listeningRef}
        />
      );
    } else if (questions.type === "highlightCorrectSummary") {
      // 
      questions.options.map((option, index) => {
        options.push(
          <li key={index} className="optionsLi">
            <label>
              <input
                type="radio"
                name="options"
                value={option}
                checked={option === selectedOption.answer}
                onChange={() =>
                  handleOptionSelect(option, questions.questionId)
                }
              />
              {option}
            </label>
          </li>
        );
      });
    } else if (questions.type === "highlightInCorrectWord") {
      options.push(
        <HighLightInCorrectWord
          questionId={questions.questionId}
          summary={questions.summary}
          ref={listeningRef}
        />
      );
    } else if (questions.type === "missingWord") {
      questions.options.map((option, index) => {
        options.push(
          <li key={index} className="optionsLi">
            <label>
              <input
                type="radio"
                name="options"
                value={option}
                checked={option === selectedOption.answer}
                onChange={() =>
                  handleOptionSelect(option, questions.questionId)
                }
              />
              {option}
            </label>
          </li>
        );
      });
    }
    return options;
  }
  function submitTest(params) {
    console.log("answers", answers);
  }
  return (
    <div className="reading-main-content-questions">
      <div className="reading-main-content-questions-Div">
        <div className="listening-Main-Content-QuestionsDiv">
          <p className="listening-Main-Content-QuestionsDiv-P">
            {questions.heading}
          </p>
          <div className="listening-Main-Content-QuestionsDiv-Audio-Div">
            <div className="listening-Main-Content-QuestionsDiv-Audio-Div-Content">
              <TextToSpeech text={questions.text} />
            </div>
            <br/>
            <p>{questions.heading2}</p>
          </div>
          <div className="listening-Main-Content-QuestionsDiv-Options">
            <div className="listening-Main-Content-QuestionsDiv-Options-Content">
              <p className="listening-Main-Content-QuestionsDiv-Options-P">
                {questionOptions()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default ListeningMock;
