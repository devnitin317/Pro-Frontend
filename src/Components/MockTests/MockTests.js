import React, { useState } from "react";
import MockTestCommon from "./MockTestCommon";
import Link from "react-router-dom";
import "./MockTests.css";
import FullMockTest from "./FullMockTest/FullMockTest";
import SpeakingMockTest from "./SpeakingMockTest/SpeakingMockTest";
import ReadingMockTest from "./ReadingMockTest/ReadingMockTest";
import ListeningMockTest from "./ListeningMockTest/ListeningMockTest";
import WritingMockTest from "./WritingMockTest/WritingMockTest";
function MockTests() {
  
  const [questions, setQuestions] = useState();
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedModuleType, setSelectedModuleType] = useState("fullMockTest");

 
  function selectMockTestModule() {
    if (selectedModuleType === "fullMockTest") {
      return <FullMockTest hideNav={hideNav}/>;
    }else if (selectedModuleType === "speaking") {
      return <SpeakingMockTest hideNav={hideNav}/>
    }else if (selectedModuleType === "reading") {
      return <ReadingMockTest hideNav={hideNav}/>
    }else if (selectedModuleType === "writing") {
      return <WritingMockTest hideNav={hideNav}/>
    }else if (selectedModuleType === "listening") {
      return <ListeningMockTest hideNav={hideNav}/>
    }



  }
  function selectedModule(mod) {
    setSelectedModuleType(mod);
  }
  function hideNav() {
    setShowQuestions(true)
  }
  return (
    <div className="mockTest-main">
      <div className={`mockTest-content ${showQuestions ? 'disableProp':''}`}>
        <div className={`mockTest-content-heading ${showQuestions ? 'hideMockNav':''}`}>Mock Tests</div>
        <div className={`mockTest-content-nav ${showQuestions ? 'hideMockNav':''}`}>
          <p
            className="mockTest-content-nav-link"
            onClick={() => selectedModule("fullMockTest")}
          >
            Full MockTest
          </p>
          <p className="mockTest-content-nav-link" onClick={() => selectedModule("speaking")}>Speaking</p>
          <p className="mockTest-content-nav-link" onClick={() => selectedModule("listening")}>Listening</p>
          {/* <p className="mockTest-content-nav-link" onClick={() => selectedModule("writing")}>Writing</p> */}
          <p className="mockTest-content-nav-link" onClick={() => selectedModule("reading")}>Reading</p>
        </div>
        <div className="mockTest-content-elements">
          {selectMockTestModule()}
        </div>
      </div>
      {/* <MockTestCommon que={questions} /> */}
    </div>
  );
}

export default MockTests;
