import React, { useEffect, useRef, useState } from "react";
// import "../CSS/Common.css";
import axios from "axios";
import "./ReadingMock.css";
import DragAndDrop from "../../DragAndDrop/DragAndDrop";
import PlaceInputInString from "../../PlaceInputInString/PlaceInputInString";
import PlaceDropDownInString from "../../PlaceDropDownInString/PlaceDropDownInString";
import { useDispatch, useSelector } from "react-redux";

const ReadingMock = React.forwardRef((props, ref) => {
  const ques = props.question;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(ques);
  const [selectedOption, setSelectedOption] = useState({ answer: "" });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState();
  const [resultCalculated, setResultCalculated] = useState(false);
  const dispatch = useDispatch();
  //  export const DataContext = React.createContext();
  const dragAndDropRef = useRef(null); //ref

  const baseUrl = useSelector((state) => state.app.baseUrl);
 debugger
  useEffect(() => {
    // getAllQuestions();
    setQuestions(ques);
  }, [props.question]);

  //#region calling child func from parent
  
  // Expose childFunction to parent via ref
  React.useImperativeHandle(ref, () => ({
    nextQuestionFromReadMock,
  }));
  //#endregion

  function getAllQuestions() {
    axios
      // .get("http://localhost:5001/api/user/getAllReadingQuestions")
      .get(
        `${baseUrl}api/user/getAllReadingQuestions`
      )
      .then((d) => {
        console.log(d.data);
        setQuestions(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function QuestionOptions(params) {
    
    let options = [];
    if (questions && questions.options.length != 0) {
      if (questions.type === "single") {
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
                    handleOptionSelect(option, questions.QuestionID)
                  }
                />
                {option}
              </label>
            </li>
          );
        });
      } else if (questions.type === "multiple") {
        questions.options.map((option, index) => {
          options.push(
            <label>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() =>
                  handleOptionChangeCheckBox(option, questions.QuestionID)
                }
              />
              {option}
              <br />
            </label>
          );
        });
      } else if (questions.type === "dragAndDrop") {
        let optionWithSide = [];
        questions.options.map((option, index) => {
          optionWithSide.push({ id: index, option: option, side: "left" });
        });
        options.push(
          <DragAndDrop
            options={optionWithSide}
            // sendDataToReading={handleDragAndDropAnswers}
            ref={dragAndDropRef} //ref
          />
        );
      } else if (questions.type === "fillUps") {
        let question = questions;
        return <PlaceInputInString question={question} ref={dragAndDropRef} />; // ref PlaceInputInString
      } else if (questions.type === "fillUpsWithDropDown") {
        let question = questions;
        return (
          <PlaceDropDownInString question={question} ref={dragAndDropRef} />
        ); // ref PlaceInputInString
      }
    }

    return options;
  }

  const handleOptionSelect = (answer, questionId) => {
    setSelectedOption({ questionId, answer });
  };

  const handleOptionChangeCheckBox = (answer, questionId) => {
    // const answer = event.target.value;
    if (selectedOptions.includes(answer)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== answer));
    } else {
      setSelectedOptions([...selectedOptions, answer]);
    }
    // setAnswers([...answers, {selectedOptions}]);
  };

  // function handleDragAndDropAnswers(data) {
  //   console.log(data);
  //   setDragAndDrop(data);
  // }

  const nextQuestionFromReadMock = (questionId) => {
    let answerToReturn;
    if (selectedOption.answer !== "") {
      // setAnswers([...answers, selectedOption]);
      answerToReturn = selectedOption.answer
    }
    if (selectedOptions.length !== 0) {
      // setAnswers([...answers, { questionId, answer: selectedOptions }]);
      answerToReturn = selectedOptions
    }
    if (dragAndDropRef.current) {
      // let dataFromPlaceInputInString = dragAndDropRef.current.dataFromPlaceInputInString();

      if ("dataFromPlaceInputInString" in dragAndDropRef.current) {
        // Component A is in dragAndDropRef.current
        console.log("current function is dataFromPlaceInputInString");
        let dataFromPlaceInputInString =
          dragAndDropRef.current.dataFromPlaceInputInString();
          answerToReturn = dataFromPlaceInputInString;
        // setAnswers([
        //   ...answers,
        //   { questionId, answer: dataFromPlaceInputInString },
        // ]);
        console.log(dataFromPlaceInputInString);
      } else if ("dataFromDragAndDropComp" in dragAndDropRef.current) {
        console.log("current function is dataFromDragAndDropComp");
        let dataFromDragAndDrop =
          dragAndDropRef.current.dataFromDragAndDropComp(); // Call child function via ref
        console.log(dataFromDragAndDrop);
        answerToReturn = dataFromDragAndDrop;
        // setAnswers([...answers, { questionId, answer: dataFromDragAndDrop }]);
      } else if ("dataFromPlaceDropDownInString" in dragAndDropRef.current) {
        let dataFromDropDownInString =
          dragAndDropRef.current.dataFromPlaceDropDownInString();
        console.log(dataFromDropDownInString);
        answerToReturn = dataFromDropDownInString;
        // setAnswers([
        //   ...answers,
        //   { questionId, answer: dataFromDropDownInString },
        // ]);
      }
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption({ answer: "" });
    setSelectedOptions([]);
    console.log("answers", answers);
    return answerToReturn;
    //handle dragAndrop Answers
  };

  function submitTest() {
    console.log("answers", answers);
    axios
      // .post("http://localhost:5001/api/user/checkAnswers", answers)
      .post(
        `${baseUrl}api/user/checkAnswers`,
        answers
      )
      .then((d) => {
        setResult(d.data);
        setResultCalculated(true);
        console.log(d);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function resultFunc() {
    let totalScore = questions.length * 10;
    let ObtainedScore = result[result.length - 1];

    return (
      <div>
        You got {ObtainedScore.score} Out Of {totalScore}
      </div>
    );
  }
  return (
    <div className="reading-main-content-questions">
      <div className="reading-main-content-questions-Div">
        {questions.heading !== "" ? (
          <div className="reading-main-content-QuestionsDiv">
            <p className="reading-main-content-QuestionsDiv-P">
              {questions.heading}
            </p>
          </div>
        ) : (
          <></>
        )}
        {questions.para !== "" ? (
          <div>
            <p className="reading-main-content-paragraph">{questions.para}</p>
          </div>
        ) : (
          <></>
        )}
        {questions.heading2 !== "" ? (
          <div className="reading-main-content-question">
            <p>{questions.heading2}</p>
          </div>
        ) : (
          <></>
        )}
        <p className="reading-main-content-options">{QuestionOptions()}</p>
      </div>
    </div>
  );
});

export default ReadingMock;
