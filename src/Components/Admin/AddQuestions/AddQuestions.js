import React, { useState } from "react";
import "./AddQuestions.css";
import axios from "axios";
import { useSelector } from "react-redux";
function AddQuestions() {
  const [text, setText] = useState("");
  const baseUrl = useSelector((state) => state.app.baseUrl);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  function submit(params) {
    debugger
    console.log(text);
    axios
      .post(`${baseUrl}api/user/addQuestionByJsonArray`, text, {
        headers: {
          'Content-Type': 'application/json'
        }
        })
      .then((d) => {
        console.log(d);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="addQuestions-main">
      <div className="addQuestions-content">
        <div className="addQuestions-content-input-submit">
          <textarea value={text} onChange={handleChange} rows={5} cols={40} />
          <button onClick={submit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddQuestions;
