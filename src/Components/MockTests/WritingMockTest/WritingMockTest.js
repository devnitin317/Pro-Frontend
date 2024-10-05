import React, { useState } from "react";
import MockTestCommon from "../MockTestCommon";
import "./WritingMockTest.css";
import Writing from "../../Writing/Writing";
function WritingMockTest({ hideNav }) {
  const mock1 = [
    {
      questionId: 16,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The significance of mental health in the workplace is gaining attention, with studies showing that employee well-being is linked to productivity and job satisfaction. Organizations are increasingly recognizing the need to support mental health through initiatives such as employee assistance programs, flexible work arrangements, and mental health training for managers. Creating a supportive work environment can reduce absenteeism and turnover rates while enhancing overall organizational performance. Employers are encouraged to prioritize mental health as part of their corporate responsibility and workplace culture.",
      sampleSummary:
        "Workplace mental health is crucial for productivity, prompting organizations to implement support initiatives and create a supportive environment.",
      type: "summariseWrittenText",
    },
    {
      questionId: 17,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The rise of telecommuting has transformed the traditional work environment, allowing employees to work remotely from anywhere with internet access. This shift has been accelerated by advancements in technology and changing workforce expectations. While telecommuting offers flexibility and work-life balance, it also presents challenges such as isolation and difficulties in communication. Organizations are adapting by implementing tools and strategies to foster collaboration and maintain team cohesion in a remote work setting.",
      sampleSummary:
        "Telecommuting offers flexibility and work-life balance but presents challenges like isolation, prompting organizations to adapt communication strategies.",
      type: "summariseWrittenText",
    },
  ];
  const mock2 = [
    {
      questionId: 14,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
      topic:
        "The gap between rich and poor is widening. What are the causes of this issue, and what solutions can be proposed?",
      sampleSummary:
        "The widening gap between the rich and the poor is a pressing global issue with complex causes and potential solutions. One major factor contributing to this disparity is the unequal access to education and job opportunities. Individuals from lower socioeconomic backgrounds often face barriers to quality education, limiting their ability to secure well-paying jobs. Additionally, globalization has led to the concentration of wealth in the hands of a few, as multinational corporations benefit from cheap labor and tax loopholes. The rise of technology has also played a role, as automation and artificial intelligence threaten low-skilled jobs while creating high-paying positions that require specialized skills. To address this issue, governments and organizations must implement policies that promote equitable access to education and training programs. Investing in vocational training, scholarships, and mentorship programs can help bridge the skills gap and empower individuals from disadvantaged backgrounds. Additionally, progressive taxation and social welfare programs can help redistribute wealth and provide support to those in need. Ultimately, tackling the growing wealth gap requires a multifaceted approach that addresses systemic inequalities and promotes inclusive economic growth.",
      type: "writeEssay",
    },
    {
      questionId: 15,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
      topic:
        "Some people believe that children should learn a foreign language at an early age. Discuss the advantages and disadvantages.",
      sampleSummary:
        "Learning a foreign language at an early age offers numerous advantages, including enhanced cognitive development, better pronunciation, and improved cultural awareness. Children are naturally adept at picking up new languages, and early exposure can lead to greater fluency and confidence in communication. Additionally, bilingualism has been linked to improved problem-solving skills and creativity, as it encourages children to think in different ways. However, there are also potential drawbacks to consider. Introducing a foreign language too early may overwhelm some children, especially if they are not yet fully proficient in their native language. This could lead to confusion and hinder overall language development. Furthermore, the quality of language instruction is crucial; without effective teaching methods and resources, early language learning may not yield the desired outcomes. Parents and educators must strike a balance between promoting foreign language acquisition and ensuring that children have a strong foundation in their native language. Ultimately, while there are both advantages and disadvantages to teaching foreign languages at a young age, the potential benefits of bilingualism often outweigh the challenges, provided that the approach is well-planned and executed.",
      type: "writeEssay",
    },
  ];
  const [questions, setQuestions] = useState();
  const [mockTest, setMockTest] = useState(false);

  function loadMockTest(mockNumber) {
    if (mockNumber === "first") {
      setQuestions(mock1);
      setMockTest(true);
      hideNav();
    } else if (mockNumber === "second") {
      setQuestions(mock2);
      setMockTest(true);
      hideNav();
    }
  }
  return (
    <div className="fullMockTest-main">
      {mockTest !== true ? (
        <div className="fullMockTest-main-content">
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("first")}
          >
            <p>Writing Mock Test First</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("second")}
          >
            <p>Writing Mock Test Second</p>
          </div>
        </div>
      ) : (
        // <MockTestCommon que={questions} />
        <Writing que={questions} />
      )}
    </div>
  );
}

export default WritingMockTest;
