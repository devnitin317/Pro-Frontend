import React from "react";
import "./ReadAloud.css";
import SpeechToText from "../../SpeechToText/SpeechToText";

function ReadAloud() {
  return <SpeechToText duration={40}/>;
}

export default ReadAloud;
