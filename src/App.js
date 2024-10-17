import React, { useEffect, useState } from "react";
import { SideNavBar } from "./Components/SideNavBar/SideNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Home from "./Pages/Home/Home";
// import SideBar from './Test/SideBar'
import "./App.css";
import ToolTip from "./Components/Test/ToolTip";
import Speaking from "./Components/Speaking/Speaking";
import Reading from "./Components/Reading/Reading";
import Writing from "./Components/Writing/Writing";
import Listening from "./Components/Listening/Listening";
import PracticeHome from "./Components/PracticeByQuestionType/PracticeHome/PracticeHome";
import ReadAloud from "./Components/CommonComponents/Speaking/ReadAloud/ReadAloud";
import PracticeReadAloud from "./Components/PracticeByQuestionType/Speaking/PracticeReadAloud/PracticeReadAloud";
import PracticeRepeatSentence from "./Components/PracticeByQuestionType/Speaking/PracticeRepeatSentence/PracticeRepeatSentence";
import PracticeDescribeImage from "./Components/PracticeByQuestionType/Speaking/PracticeDescribeImage/PracticeDescribeImage";
// import PracticeReTellLecture from './Components/PracticeByQuestionType/PracticeReTellLecture/PracticeReTellLecture'
import PracticeReTellLecture from "./Components/PracticeByQuestionType/Speaking/PracticeReTellLecture/PracticeReTellLecture";
import PracticeShortAnswer from "./Components/PracticeByQuestionType/Speaking/PracticeShortAnswer/PracticeShortAnswer";
import PracticeSummariseWrittenText from "./Components/PracticeByQuestionType/Writing/PracticeSummariseWrittenText/PracticeSummariseWrittenText";
import PracticeWriteEssay from "./Components/PracticeByQuestionType/Writing/PracticeWriteEssay/PracticeWriteEssay";
import PracticeSummarizeSpokenText from "./Components/PracticeByQuestionType/Listening/PracticeSummarizeSpokenText/PracticeSummarizeSpokenText";
import PracticeMCQSingleAnswer from "./Components/PracticeByQuestionType/Listening/PracticeMCQSingleAnswer/PracticeMCQSingleAnswer";
import PracticeMCQMultipleAnswer from "./Components/PracticeByQuestionType/Listening/PracticeMCQMultipleAnswer/PracticeMCQMultipleAnswer";
import PracticeFillInTheBlanks from "./Components/PracticeByQuestionType/Listening/PracticeFillInTheBlanks/PracticeFillInTheBlanks";
import PracticeHighlightCorrectSummary from "./Components/PracticeByQuestionType/Listening/PracticeHighlightCorrectSummary/PracticeHighlightCorrectSummary";
import PracticeSelectMissingWord from "./Components/PracticeByQuestionType/Listening/PracticeSelectMissingWord/PracticeSelectMissingWord";
import PracticeHighlightIncorrectWord from "./Components/PracticeByQuestionType/Listening/PracticeHighlightIncorrectWord/PracticeHighlightIncorrectWord";
import PracticeWriteFromDictation from "./Components/PracticeByQuestionType/Listening/PracticeWriteFromDictation/PracticeWriteFromDictation";
import PracticeSingleAnswer from "./Components/PracticeByQuestionType/Reading/PracticeSingleAnswer/PracticeSingleAnswer";
import PracticeDoubleAnswer from "./Components/PracticeByQuestionType/Reading/PracticeDoubleAnswer/PracticeDoubleAnswer";
import PracticeReadingFillInTheBlanks from "./Components/PracticeByQuestionType/Reading/PracticeReadingFillInTheBlanks/PracticeReadingFillInTheBlanks";
import PracticeReadingDropDownFillInTheBlanks from "./Components/PracticeByQuestionType/Reading/PracticeReadingDropDownFillInTheBlanks/PracticeReadingDropDownFillInTheBlanks";
import PracticeReOrder from "./Components/PracticeByQuestionType/Reading/PracticeReOrder/PracticeReOrder";
import DashBoardHome from "./Components/DashBoardHome/DashBoardHome";
import TotalScoreCalculation from "./Components/CommonComponents/TotalScoreCalculation/TotalScoreCalculation";
import MockTests from "./Components/MockTests/MockTests";
import Login from "./Components/Login/Login";
import LoginTest from "./LoginTest/LoginTest";
import Payment from "./Components/Payment/Payment";
import LandingPage from "./Components/LandingPage/LandingPage";
import { useDispatch } from "react-redux";
import { changeBaseUrl, userDataFunc } from "./appSlice";
import AddQuestions from "./Components/Admin/AddQuestions/AddQuestions";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [userData, setUserData] = useState({ email: "" });
  
  // const baseUrl = "http://localhost:5001/";
  const baseUrl = "https://pro-backend-eight.vercel.app/"

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeBaseUrl(baseUrl));
    // dispatch(userDataFunc(userData));

  }, []);
  // const navigate = useNavigate()
  function loginStatus(user) {
    debugger;
    if (user === "logout" || user === "login") {
      setLoggedIn(!loggedIn);
      return;
    }
    if (user !== null && user !== undefined) {
      // setPaymentVerified(user.paymentVerified);
      setPaymentVerified(true);

      if (user.hasOwnProperty("email")) {
        dispatch(userDataFunc(user));
        setUserData(user);
      }
      setLoggedIn(true);
    }
  }
  return (
    <div className="app-Main">
      <BrowserRouter>
        {loggedIn && paymentVerified === true ? (
          <Routes>
            <Route
              element={
                <SideNavBar
                  loginStatus={loginStatus}
                  userEmail={userData.email}
                />
              }
            >
              <Route element={<TopNav userEmail={userData.email} />}>
                <Route
                  path="/"
                  element={<DashBoardHome userData={userData} />}
                />
                <Route path="/speaking" element={<Speaking />} />
                <Route path="/reading" element={<Reading />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/listening" element={<Listening />} />
                <Route path="/practiceHome" element={<PracticeHome />} />
                <Route
                  path="/practiceReadAloud"
                  element={<PracticeReadAloud />}
                />
                <Route
                  path="/practiceRepeatSentence"
                  element={<PracticeRepeatSentence />}
                />
                <Route
                  path="/practiceDescribeImage"
                  element={<PracticeDescribeImage />}
                />
                <Route
                  path="/practiceReTellLecture"
                  element={<PracticeReTellLecture />}
                />
                <Route
                  path="/practiceShortAnswer"
                  element={<PracticeShortAnswer />}
                />
                <Route
                  path="/summariseWrittenText"
                  element={<PracticeSummariseWrittenText />}
                />
                <Route
                  path="/practiceWriteEssay"
                  element={<PracticeWriteEssay />}
                />
                <Route
                  path="/practiceSummarizeSpokenText"
                  element={<PracticeSummarizeSpokenText />}
                />
                <Route
                  path="/practiceMCQSingleAnswer"
                  element={<PracticeMCQSingleAnswer />}
                />
                <Route
                  path="/practiceMCQMultipleAnswer"
                  element={<PracticeMCQMultipleAnswer />}
                />
                <Route
                  path="/practiceFillInTheBlanks"
                  element={<PracticeFillInTheBlanks />}
                />
                <Route
                  path="/practiceHighlightCorrectSummary"
                  element={<PracticeHighlightCorrectSummary />}
                />
                <Route
                  path="/practiceSelectMissingWord"
                  element={<PracticeSelectMissingWord />}
                />
                <Route
                  path="/practiceHighlightIncorrectWord"
                  element={<PracticeHighlightIncorrectWord />}
                />
                <Route
                  path="/practiceWriteFromDictation"
                  element={<PracticeWriteFromDictation />}
                />
                <Route
                  path="/practiceSingleAnswer"
                  element={<PracticeSingleAnswer />}
                />
                <Route
                  path="/practiceDoubleAnswer"
                  element={<PracticeDoubleAnswer />}
                />
                <Route
                  path="/practiceReadingFillInTheBlanks"
                  element={<PracticeReadingFillInTheBlanks />}
                />
                <Route
                  path="/practiceReadingDropDownFillInTheBlanks"
                  element={<PracticeReadingDropDownFillInTheBlanks />}
                />
                <Route path="/practiceReOrder" element={<PracticeReOrder />} />
                <Route
                  path="/dashBoardHome"
                  element={<DashBoardHome userData={userData} />}
                />
                <Route
                  path="/totalScoreCalculation"
                  element={<TotalScoreCalculation />}
                />
                <Route path="/mockTests" element={<MockTests />} />
                <Route path="/plans" element={<Payment />} />
                <Route path="/addQuestions" element={<AddQuestions />} />
              </Route>
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  loggedIn={loggedIn}
                  loginStatus={loginStatus}
                  userEmail={userData.email}
                />
              }
            />
            <Route
              path="/login"
              element={<LoginTest loginStatus={loginStatus} />}
            />
            <Route
              path="*"
              element={
                <LandingPage
                  loggedIn={loggedIn}
                  loginStatus={loginStatus}
                  userEmail={userData.email}
                />
              }
            />
            {/* <Route path="/plans" element={<Payment />} /> */}
          </Routes>
        )}
      </BrowserRouter>
      {/* <ToolTip/> */}
      {/* <SideBar/> */}
    </div>
    // <LoginTest/>
  );
}

export default App;

{
  /* <div>
    <BrowserRouter>
    {loggedIn ? (
       <Routes>
       <Route element={<SideNavBar loginStatus={loginStatus}/>}>
         <Route element={<TopNav />}>
           <Route path="/" element={<Home />} />
         </Route>
       </Route>
     </Routes>
    ):(
      <Routes>
      <Route path="/" element={<Login loginStatus={loginStatus} />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    )}
     
    </BrowserRouter>
  </div> */
}
