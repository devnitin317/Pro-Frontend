import React from 'react'
import { Outlet, useOutletContext,Link } from "react-router-dom";
import './PracticeHome.css'
function PracticeHome() {
  return (
    <div className='practiceHome-main'>
      <div className='practiceHome-main-content'>
        {/* Card 1 */}
        <div className='practiceHome-main-content-card'>
          <div className='practiceHome-main-content-card-heading'>
            <h1>Speaking</h1>
          </div>
          <div className='practiceHome-main-content-card-links'>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceReadAloud">ReadAloud</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/PracticeRepeatSentence">Repeat Sentence</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceDescribeImage">Describe Image</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceReTellLecture">Re-Tell Lecture</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceShortAnswer">Answer Short Question</Link>
            </p>
          </div>
        </div>
         {/* Card 2 */}
         <div className='practiceHome-main-content-card'>
          <div className='practiceHome-main-content-card-heading'>
            <h1>Writing</h1>
          </div>
          <div className='practiceHome-main-content-card-links'>
          <p className='practiceHome-main-content-card-links-p'>
              <Link to="/summariseWrittenText">Summarise Written Text</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceWriteEssay">Write Essay</Link>
            </p>
           
          </div>
        </div>
         {/* Card 3 */}
         <div className='practiceHome-main-content-card'>
          <div className='practiceHome-main-content-card-heading'>
            <h1>Listening</h1>
          </div>
          <div className='practiceHome-main-content-card-links'>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceSummarizeSpokenText">Summarise Spoken Text</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceMCQSingleAnswer">MCQ Single Answer</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceMCQMultipleAnswer">MCQ Multiple Answer</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceFillInTheBlanks">Listening Fill in the Blanks</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceHighlightCorrectSummary">Highlight Correct Summary</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceSelectMissingWord">Select Missing Word</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceHighlightIncorrectWord">Highlight Incorrect Word</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceWriteFromDictation">Write From Dictation</Link>
            </p>
          </div>
        </div>
         {/* Card 4 */}
         <div className='practiceHome-main-content-card'>
          <div className='practiceHome-main-content-card-heading'>
            <h1>Reading</h1>
          </div>
          <div className='practiceHome-main-content-card-links'>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceSingleAnswer">Multiple Type, Single Answer</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceDoubleAnswer">Multiple Type, Double Answer</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/PracticeReOrder">ReOrder Paragraph</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceReadingFillInTheBlanks">Reading Fill in the Blanks</Link>
            </p>
            <p className='practiceHome-main-content-card-links-p'>
              <Link to="/practiceReadingDropDownFillInTheBlanks">Fill in the blanks reading and writing</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticeHome