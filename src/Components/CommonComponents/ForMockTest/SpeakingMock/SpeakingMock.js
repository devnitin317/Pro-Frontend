import React, { useEffect, useState } from "react";
import ReadAloud from "../../Speaking/ReadAloud/ReadAloud";
import { useDispatch, useSelector } from "react-redux";
// import { resetCountDown, startStopCountDown } from "../CommonComponents/CountDown/countDownSlice";
import { stopRecording } from "../../Recording/recordingSlice";
import { resetCountDown } from "../../Countdown/countDownSlice";
// import DescribeImage from "../CommonComponents/Speaking/DescribeImage/DescribeImage";
import DescribeImage from "../../Speaking/DescribeImage/DescribeImage";
import img1 from "../../../../Images/user.jpg";
import ShortAnswer from "../../Speaking/ShortAnswer/ShortAnswer";
import { resetAudioPlayer } from "../../AudioPlayer/audioPlayerSlice";
import audioFile01 from "../../../../Audio/ShortAnswer/Audio01.mp3";
import RepeatSentence from "../../Speaking/RepeatSentence/RepeatSentence";
import ReTellLecture from "../../Speaking/ReTellLecture/ReTellLecture";
import "./SpeakingMock.css";
const SpeakingMock = React.forwardRef((props, ref) =>  {
  let que = props.question;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(que);
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();
  const recording = useSelector((state) => state.recording);

  useEffect(() => {
    setQuestions(que);
  }, [props.question]);

    //#region calling child func from parent
  
  // Expose childFunction to parent via ref
  React.useImperativeHandle(ref, () => ({
    nextQuestionFromSpeakingMock,
  }));
  //#endregion

  const nextQuestionFromSpeakingMock = (questionId) => {
    // dispatch(resetCountDown(10));
    dispatch(resetCountDown({ reset: `speaking${questionId}` }));
    dispatch(stopRecording(false));
    dispatch(resetAudioPlayer({ reset: `speaking${questionId}` }));

    console.log("recording.transcript", recording.transcript);
    // setAnswers([...answers, { questionId, answer: recording.transcript }]);
    // setAnswers([...answers, { questionId, answer: "The text boxes in the left panel have been placed in a random order." }]);

    return recording.transcript;

    // setCurrentQuestion(currentQuestion + 1);
  };

  function questionFunc(questionIndex, questionId, text) {
    let queArray = [];
    if (questions.type === "readAloud") {
      queArray.push(<ReadAloud />);
    } else if (questions.type === "describe") {
      queArray.push(<DescribeImage image={img1} />);
    } else if (questions.type === "shortAnswer") {
      queArray.push(
        <ShortAnswer audio={text} questionId={questionId} />
      );
    } else if (questions.type === "repeatSentence") {
      queArray.push(
        <RepeatSentence audio={text} questionId={questionId} />
      );
    } else if (questions.type === "reTellLecture") {
      queArray.push(
        <ReTellLecture audio={text} questionId={questionId} />
      );
    }
    return queArray;
  }

  function submitTest() {
    console.log("answers", answers);
  }
  return (
    <div className="speaking-main-content-questions">
      <div className="speaking-main-content-question">
        <p className="speaking-main-content-question-heading">
          {questions.heading}
        </p>
        {questionFunc(currentQuestion, questions.questionId, questions.text)}
        <p className="speaking-main-content-question-para">
          {questions.paragraph}
        </p>
      </div>
    </div>
  );
})

export default SpeakingMock;
