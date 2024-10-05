import React, { useEffect, useState } from "react";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch, useSelector } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import "./PracticeMCQMultipleAnswer.css";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
import axios from "axios";
function PracticeMCQMultipleAnswer() {
  // let ques = [
  //   {
  //     questionId: 1,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What are the benefits of regular exercise mentioned by the speaker?",
  //     text: "Regular exercise is crucial for maintaining physical health. It helps improve cardiovascular fitness, boosts mood, and reduces stress. Additionally, it can enhance overall well-being and increase energy levels.",
  //     options: [
  //       "Improves cardiovascular fitness.",
  //       "Boosts mood and reduces stress.",
  //       "Increases risk of injury.",
  //       "Enhances overall well-being.",
  //     ],
  //     answer: [
  //       "Improves cardiovascular fitness.",
  //       "Boosts mood and reduces stress.",
  //       "Enhances overall well-being.",
  //     ],
  //     explanation:
  //       "The speaker emphasizes that regular exercise has multiple positive effects on physical and mental health.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 2,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What factors contribute to effective teamwork according to the speaker?",
  //     text: "Effective teamwork relies on clear communication, mutual respect, and shared goals. Team members should be open to feedback and willing to collaborate to achieve common objectives.",
  //     options: [
  //       "Clear communication is essential.",
  //       "Mutual respect among team members.",
  //       "Individual goals are prioritized.",
  //       "Collaboration to achieve common objectives.",
  //     ],
  //     answer: [
  //       "Clear communication is essential.",
  //       "Mutual respect among team members.",
  //       "Collaboration to achieve common objectives.",
  //     ],
  //     explanation:
  //       "The speaker highlights that successful teamwork is built on communication, respect, and collaboration.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 3,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What are the advantages of learning a second language mentioned by the speaker?",
  //     text: "Learning a second language can enhance cognitive abilities, improve career prospects, and foster cultural understanding. It also allows for better communication in diverse environments.",
  //     options: [
  //       "Enhances cognitive abilities.",
  //       "Improves career prospects.",
  //       "Limits cultural understanding.",
  //       "Facilitates better communication.",
  //     ],
  //     answer: [
  //       "Enhances cognitive abilities.",
  //       "Improves career prospects.",
  //       "Facilitates better communication.",
  //     ],
  //     explanation:
  //       "The speaker discusses the various benefits of bilingualism, including cognitive and professional advantages.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 4,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the importance of financial literacy?",
  //     text: "Financial literacy is crucial for making informed decisions about personal finances. It helps individuals budget effectively, save for the future, and avoid debt traps.",
  //     options: [
  //       "Helps individuals budget effectively.",
  //       "Encourages reckless spending.",
  //       "Aids in saving for the future.",
  //       "Prevents falling into debt traps.",
  //     ],
  //     answer: [
  //       "Helps individuals budget effectively.",
  //       "Aids in saving for the future.",
  //       "Prevents falling into debt traps.",
  //     ],
  //     explanation:
  //       "The speaker emphasizes that understanding financial concepts is key to managing money wisely.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 5,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What are the key points about effective time management mentioned by the speaker?",
  //     text: "Effective time management involves setting priorities, creating schedules, and avoiding procrastination. It allows individuals to maximize productivity and achieve their goals.",
  //     options: [
  //       "Setting priorities is essential.",
  //       "Procrastination is encouraged.",
  //       "Creating schedules helps maximize productivity.",
  //       "Time management is unnecessary.",
  //     ],
  //     answer: [
  //       "Setting priorities is essential.",
  //       "Creating schedules helps maximize productivity.",
  //     ],
  //     explanation:
  //       "The speaker discusses how prioritizing tasks and scheduling can enhance efficiency.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 6,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker highlight about the benefits of volunteering?",
  //     text: "Volunteering provides individuals with opportunities to give back to the community, develop new skills, and meet new people. It also enhances personal fulfillment and social responsibility.",
  //     options: [
  //       "Volunteering is only for young people.",
  //       "It develops new skills.",
  //       "Enhances personal fulfillment.",
  //       "Volunteering has no real benefits.",
  //     ],
  //     answer: ["It develops new skills.", "Enhances personal fulfillment."],
  //     explanation:
  //       "The speaker emphasizes the personal and social benefits of engaging in volunteer work.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 7,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What are the key aspects of emotional intelligence mentioned by the speaker?",
  //     text: "Emotional intelligence involves recognizing one's emotions, understanding the emotions of others, and managing emotional responses. It is vital for effective communication and relationships.",
  //     options: [
  //       "Recognizing one's emotions.",
  //       "Understanding others' emotions.",
  //       "Ignoring emotional responses.",
  //       "Managing emotional responses.",
  //     ],
  //     answer: [
  //       "Recognizing one's emotions.",
  //       "Understanding others' emotions.",
  //       "Managing emotional responses.",
  //     ],
  //     explanation:
  //       "The speaker highlights the importance of emotional awareness and regulation in interpersonal interactions.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 8,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the impact of technology on education?",
  //     text: "Technology has transformed education by providing access to online resources, enabling interactive learning, and facilitating communication between students and teachers.",
  //     options: [
  //       "Technology limits access to information.",
  //       "It enables interactive learning.",
  //       "Facilitates communication.",
  //       "Technology is not useful in education.",
  //     ],
  //     answer: [
  //       "It enables interactive learning.",
  //       "Facilitates communication.",
  //     ],
  //     explanation:
  //       "The speaker discusses how technology enhances the educational experience through various tools and resources.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 9,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker emphasize about the significance of cultural diversity?",
  //     text: "Cultural diversity enriches societies by bringing different perspectives and ideas. It fosters creativity and innovation in various fields.",
  //     options: [
  //       "Cultural diversity is not important.",
  //       "It limits creativity.",
  //       "Cultural diversity enriches societies.",
  //       "Only certain cultures are valuable.",
  //     ],
  //     answer: ["Cultural diversity enriches societies."],
  //     explanation:
  //       "The speaker highlights how cultural diversity contributes positively to creativity and innovation.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 10,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the importance of adaptability?",
  //     text: "Adaptability is crucial in today's fast-paced world. It allows individuals to adjust to changes and overcome challenges effectively.",
  //     options: [
  //       "Adaptability is not important.",
  //       "It helps in avoiding challenges.",
  //       "Adaptability is crucial for overcoming challenges.",
  //       "Only leaders need to be adaptable.",
  //     ],
  //     answer: ["Adaptability is crucial for overcoming challenges."],
  //     explanation:
  //       "The speaker emphasizes that being adaptable is essential for thriving in a dynamic work environment.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 11,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker highlight about the significance of mentorship?",
  //     text: "Mentorship provides guidance and support for individuals seeking to advance their careers. It helps them navigate challenges and develop essential skills.",
  //     options: [
  //       "Mentorship is only for young professionals.",
  //       "It can limit career growth.",
  //       "Mentorship provides guidance and support.",
  //       "Most people do not need mentors.",
  //     ],
  //     answer: ["Mentorship provides guidance and support."],
  //     explanation:
  //       "The speaker highlights the benefits of mentorship in professional development and career advancement.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 12,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the effects of stress on health?",
  //     text: "Chronic stress can lead to serious health issues, including heart disease and depression. Managing stress is essential for maintaining overall health.",
  //     options: [
  //       "Stress has no effect on health.",
  //       "It only affects mental health.",
  //       "Chronic stress can lead to serious health issues.",
  //       "Stress management is not necessary.",
  //     ],
  //     answer: ["Chronic stress can lead to serious health issues."],
  //     explanation:
  //       "The speaker emphasizes the negative consequences of chronic stress on both physical and mental health.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 13,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2: "What does the speaker say about the importance of self-care?",
  //     text: "Self-care is essential for maintaining mental and physical health. It involves taking time to relax, recharge, and prioritize personal well-being.",
  //     options: [
  //       "Self-care is a luxury.",
  //       "It is only important for women.",
  //       "Self-care is essential for everyone.",
  //       "Most people do not need self-care.",
  //     ],
  //     answer: ["Self-care is essential for everyone."],
  //     explanation:
  //       "The speaker emphasizes that self-care is crucial for all individuals, regardless of gender or circumstances.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 14,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker highlight about the importance of creativity?",
  //     text: "Creativity is a vital skill in today's world. It drives innovation and problem-solving in various fields, including business and the arts.",
  //     options: [
  //       "Creativity is not necessary in business.",
  //       "It is only important for artists.",
  //       "Creativity drives innovation and problem-solving.",
  //       "Most people are not creative.",
  //     ],
  //     answer: ["Creativity drives innovation and problem-solving."],
  //     explanation:
  //       "The speaker discusses how creativity is crucial for fostering new ideas and solutions in different sectors.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 15,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2: "What does the speaker say about the benefits of reading?",
  //     text: "Reading regularly can improve vocabulary, enhance knowledge, and stimulate mental faculties. It also provides a great way to relax and escape reality.",
  //     options: [
  //       "Reading is a waste of time.",
  //       "It only benefits children.",
  //       "Reading improves vocabulary and knowledge.",
  //       "Most people do not enjoy reading.",
  //     ],
  //     answer: ["Reading improves vocabulary and knowledge."],
  //     explanation:
  //       "The speaker discusses how reading contributes to personal development and relaxation.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 16,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the role of technology in education?",
  //     text: "Technology enhances the learning experience by providing interactive tools and resources. It allows for personalized learning and access to a wealth of information.",
  //     options: [
  //       "Technology limits access to information.",
  //       "It enables interactive learning.",
  //       "Facilitates communication.",
  //       "Technology is not useful in education.",
  //     ],
  //     answer: [
  //       "It enables interactive learning.",
  //       "Facilitates communication.",
  //     ],
  //     explanation:
  //       "The speaker discusses how technology enhances the educational experience through various tools and resources.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 17,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the significance of emotional intelligence?",
  //     text: "Emotional intelligence involves recognizing one's emotions, understanding the emotions of others, and managing emotional responses. It is vital for effective communication and relationships.",
  //     options: [
  //       "Emotional intelligence is not necessary.",
  //       "It is only important for leaders.",
  //       "It helps build strong relationships.",
  //       "Most people do not have emotional intelligence.",
  //     ],
  //     answer: ["It helps build strong relationships."],
  //     explanation:
  //       "The speaker highlights the importance of emotional awareness and regulation in interpersonal interactions.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 18,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker mention about the impact of stress on health?",
  //     text: "Chronic stress can lead to serious health issues, including heart disease and depression. Managing stress is essential for maintaining overall health.",
  //     options: [
  //       "Stress has no effect on health.",
  //       "It only affects mental health.",
  //       "Chronic stress can lead to serious health issues.",
  //       "Stress management is not necessary.",
  //     ],
  //     answer: ["Chronic stress can lead to serious health issues."],
  //     explanation:
  //       "The speaker emphasizes the negative consequences of chronic stress on both physical and mental health.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 19,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the importance of adaptability?",
  //     text: "Adaptability is crucial in today's fast-paced world. It allows individuals to adjust to changes and overcome challenges effectively.",
  //     options: [
  //       "Adaptability is not important.",
  //       "It helps in avoiding challenges.",
  //       "Adaptability is crucial for overcoming challenges.",
  //       "Only leaders need to be adaptable.",
  //     ],
  //     answer: ["Adaptability is crucial for overcoming challenges."],
  //     explanation:
  //       "The speaker emphasizes that being adaptable is essential for thriving in a dynamic work environment.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 20,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the significance of cultural diversity?",
  //     text: "Cultural diversity enriches societies by bringing different perspectives and ideas. It fosters creativity and innovation in various fields.",
  //     options: [
  //       "Cultural diversity is not important.",
  //       "It limits creativity.",
  //       "Cultural diversity enriches societies.",
  //       "Only certain cultures are valuable.",
  //     ],
  //     answer: ["Cultural diversity enriches societies."],
  //     explanation:
  //       "The speaker highlights how cultural diversity contributes positively to creativity and innovation.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 21,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker highlight about the importance of gratitude?",
  //     text: "Practicing gratitude can enhance overall well-being. It fosters positive emotions and strengthens relationships with others.",
  //     options: [
  //       "Gratitude is not important.",
  //       "It only benefits certain people.",
  //       "Practicing gratitude enhances well-being.",
  //       "Most people do not feel grateful.",
  //     ],
  //     answer: ["Practicing gratitude enhances well-being."],
  //     explanation:
  //       "The speaker discusses how gratitude contributes to emotional health and relationship building.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },

  //   {
  //     questionId: 23,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the importance of financial planning?",
  //     text: "Financial planning is crucial for achieving long-term goals. It helps individuals manage their resources effectively and prepare for unexpected expenses.",
  //     options: [
  //       "Financial planning is only for wealthy individuals.",
  //       "It is unnecessary for young people.",
  //       "It helps manage resources and prepare for expenses.",
  //       "Most people do not need to plan financially.",
  //     ],
  //     answer: ["It helps manage resources and prepare for expenses."],
  //     explanation:
  //       "The speaker emphasizes that financial planning is essential for effective resource management and preparedness.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 24,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker highlight about the benefits of lifelong learning?",
  //     text: "Lifelong learning is essential in today's rapidly changing world. It allows individuals to adapt to new challenges and stay relevant in their careers.",
  //     options: [
  //       "Lifelong learning is unnecessary.",
  //       "It is only for older adults.",
  //       "It helps individuals adapt to new challenges.",
  //       "Most people do not need to learn continuously.",
  //     ],
  //     answer: ["It helps individuals adapt to new challenges."],
  //     explanation:
  //       "The speaker emphasizes the importance of continuous education for personal and professional growth.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 25,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the impact of technology on communication?",
  //     text: "Technology has transformed communication, making it faster and more accessible. However, it can also lead to misunderstandings and a lack of personal connection.",
  //     options: [
  //       "Technology has no effect on communication.",
  //       "It makes communication less effective.",
  //       "It leads to misunderstandings and lack of connection.",
  //       "Only older generations struggle with technology.",
  //     ],
  //     answer: ["It leads to misunderstandings and lack of connection."],
  //     explanation:
  //       "The speaker discusses the dual impact of technology on communication, highlighting both its advantages and drawbacks.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 26,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the effects of climate change?",
  //     text: "Climate change is affecting weather patterns and ecosystems worldwide. It poses serious risks to food security and health.",
  //     options: [
  //       "Climate change has no significant impact.",
  //       "It only affects certain countries.",
  //       "It poses serious risks to food security and health.",
  //       "Only governments can address climate change.",
  //     ],
  //     answer: ["It poses serious risks to food security and health."],
  //     explanation:
  //       "The speaker emphasizes the widespread effects of climate change on various aspects of life.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 27,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker highlight about the importance of critical thinking?",
  //     text: "Critical thinking is the ability to analyze information and make reasoned judgments. It is essential for problem-solving and decision-making.",
  //     options: [
  //       "Critical thinking is not necessary.",
  //       "It is only important for students.",
  //       "Critical thinking is essential for problem-solving.",
  //       "Most people do not use critical thinking.",
  //     ],
  //     answer: ["Critical thinking is essential for problem-solving."],
  //     explanation:
  //       "The speaker emphasizes the role of critical thinking in making informed decisions and solving problems effectively.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 28,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2: "What does the speaker say about the impact of globalization?",
  //     text: "Globalization has led to increased interconnectedness among countries. It has both positive and negative effects on economies and cultures.",
  //     options: [
  //       "Globalization has no impact on cultures.",
  //       "It only benefits wealthy countries.",
  //       "Globalization increases interconnectedness.",
  //       "Most people oppose globalization.",
  //     ],
  //     answer: ["Globalization increases interconnectedness."],
  //     explanation:
  //       "The speaker discusses how globalization fosters connections between different nations and cultures.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 29,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the benefits of a balanced diet?",
  //     text: "A balanced diet is essential for maintaining good health. It provides the necessary nutrients for the body and helps prevent chronic diseases.",
  //     options: [
  //       "A balanced diet is not important.",
  //       "It only benefits certain people.",
  //       "A balanced diet helps maintain good health.",
  //       "Most people do not need to eat healthily.",
  //     ],
  //     answer: ["A balanced diet helps maintain good health."],
  //     explanation:
  //       "The speaker discusses how a healthy diet contributes to overall well-being and disease prevention.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 30,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker highlight about the importance of effective communication?",
  //     text: "Effective communication is essential in both personal and professional settings. It helps prevent misunderstandings and fosters collaboration.",
  //     options: [
  //       "Communication is only important in business.",
  //       "It has no impact on relationships.",
  //       "Effective communication helps prevent misunderstandings.",
  //       "Most people do not communicate effectively.",
  //     ],
  //     answer: ["Effective communication helps prevent misunderstandings."],
  //     explanation:
  //       "The speaker emphasizes that good communication skills are key to successful interactions.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 31,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the role of creativity in problem-solving?",
  //     text: "Creativity is vital for effective problem-solving. It allows individuals to think outside the box and develop innovative solutions.",
  //     options: [
  //       "Creativity is not necessary for problem-solving.",
  //       "It limits the range of solutions.",
  //       "Creativity allows for innovative solutions.",
  //       "Only artists need to be creative.",
  //     ],
  //     answer: ["Creativity allows for innovative solutions."],
  //     explanation:
  //       "The speaker discusses how creativity enhances the problem-solving process by introducing new ideas.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 32,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker highlight about the significance of environmental conservation?",
  //     text: "Environmental conservation is crucial for protecting natural resources and maintaining biodiversity. It ensures a sustainable future for generations to come.",
  //     options: [
  //       "Environmental conservation is not important.",
  //       "It is only necessary for certain regions.",
  //       "It protects natural resources and biodiversity.",
  //       "Most people do not care about conservation.",
  //     ],
  //     answer: ["It protects natural resources and biodiversity."],
  //     explanation:
  //       "The speaker emphasizes the importance of conservation efforts for sustaining the environment.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 33,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker mention about the importance of adaptability in the workplace?",
  //     text: "Adaptability is crucial in the workplace as it allows employees to adjust to changes and new challenges. It enhances productivity and job satisfaction.",
  //     options: [
  //       "Adaptability is not necessary.",
  //       "It leads to confusion.",
  //       "Adaptability enhances productivity and satisfaction.",
  //       "Only leaders need to be adaptable.",
  //     ],
  //     answer: ["Adaptability enhances productivity and satisfaction."],
  //     explanation:
  //       "The speaker highlights that being adaptable is key to thriving in a dynamic work environment.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 34,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the role of mentorship in career development?",
  //     text: "Mentorship provides guidance and support for individuals seeking to advance their careers. It helps them navigate challenges and develop essential skills.",
  //     options: [
  //       "Mentorship is only for young professionals.",
  //       "It can limit career growth.",
  //       "Mentorship provides guidance and support.",
  //       "Most people do not need mentors.",
  //     ],
  //     answer: ["Mentorship provides guidance and support."],
  //     explanation:
  //       "The speaker emphasizes the importance of mentorship for career advancement and skill development.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 35,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2: "What does the speaker say about the effects of social media?",
  //     text: "Social media has transformed communication, allowing people to connect across distances. However, it can also lead to misinformation and reduced face-to-face interactions.",
  //     options: [
  //       "Social media is entirely negative.",
  //       "It has no impact on communication.",
  //       "Social media allows for global connections.",
  //       "Only young people use social media.",
  //     ],
  //     answer: ["Social media allows for global connections."],
  //     explanation:
  //       "The speaker acknowledges the positive aspects of social media in facilitating communication while also noting its drawbacks.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 36,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker highlight about the importance of goal setting?",
  //     text: "Setting goals is crucial for personal and professional growth. It provides direction and motivation, helping individuals stay focused on their objectives.",
  //     options: [
  //       "Goal setting is unnecessary.",
  //       "It can lead to stress.",
  //       "Setting goals provides direction and motivation.",
  //       "Only professionals need to set goals.",
  //     ],
  //     answer: ["Setting goals provides direction and motivation."],
  //     explanation:
  //       "The speaker emphasizes that having clear goals helps individuals maintain focus and achieve success.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 37,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2: "What does the speaker say about the importance of resilience?",
  //     text: "Resilience is the ability to bounce back from setbacks. It is crucial for overcoming challenges and achieving long-term goals.",
  //     options: [
  //       "Resilience is not important.",
  //       "It helps in avoiding challenges.",
  //       "Resilience is crucial for overcoming challenges.",
  //       "Only some people are resilient.",
  //     ],
  //     answer: ["Resilience is crucial for overcoming challenges."],
  //     explanation:
  //       "The speaker highlights the importance of resilience in facing difficulties and achieving success.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 38,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2: "What does the speaker say about the benefits of travel?",
  //     text: "Traveling broadens one's horizons and exposes individuals to different cultures and perspectives. It enhances personal growth and understanding.",
  //     options: [
  //       "Travel is a waste of time.",
  //       "It limits personal growth.",
  //       "Traveling broadens one's horizons.",
  //       "Only expensive travel is worthwhile.",
  //     ],
  //     answer: ["Traveling broadens one's horizons."],
  //     explanation:
  //       "The speaker emphasizes that travel is valuable for expanding knowledge and understanding of the world.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 39,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2: "What does the speaker say about the role of networking?",
  //     text: "Networking is crucial for career advancement. It helps individuals build relationships that can lead to new opportunities and collaborations.",
  //     options: [
  //       "Networking is only important for job seekers.",
  //       "It can limit professional growth.",
  //       "Networking helps build relationships for new opportunities.",
  //       "Most people do not need to network.",
  //     ],
  //     answer: ["Networking helps build relationships for new opportunities."],
  //     explanation:
  //       "The speaker emphasizes that networking is key to discovering and creating new career possibilities.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 40,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker mention about the benefits of meditation?",
  //     text: "Meditation can reduce stress and improve mental clarity. It allows individuals to focus better and enhances overall well-being.",
  //     options: [
  //       "Meditation is only for relaxation.",
  //       "It has no real benefits.",
  //       "It can reduce stress and improve focus.",
  //       "Meditation is a waste of time.",
  //     ],
  //     answer: ["It can reduce stress and improve focus."],
  //     explanation:
  //       "The speaker discusses the positive effects of meditation on mental health and clarity.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  //   {
  //     questionId: 41,
  //     heading:
  //       "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
  //     heading2:
  //       "What does the speaker say about the role of arts in education?",
  //     text: "The arts play a crucial role in education by fostering creativity and critical thinking. They encourage students to express themselves and explore new ideas.",
  //     options: [
  //       "The arts are not important in education.",
  //       "They only benefit students with artistic talents.",
  //       "The arts foster creativity and critical thinking.",
  //       "Most students prefer science over the arts.",
  //     ],
  //     answer: ["The arts foster creativity and critical thinking."],
  //     explanation:
  //       "The speaker emphasizes the importance of arts in developing essential skills in students.",
  //     type: "multiple",
  //     moduleType: "listening",
  //   },
  // ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [landingPage, SetLandingPage] = useState(true);

  const [summary, setSummary] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.app.baseUrl);

  useEffect(() => {}, [currentQuestion]);
  useEffect(() => {
    getQuestionsFunc();
  }, []);

  function nextQuestion(questionId) {
    // console.log("selectedOptions", selectedOptions);
    setShowAnswer(false);
    dispatch(
      resetCountDown({ reset: `PracticeMCQMultipleAnswer${questionId}` })
    );
    if (selectedOptions.length !== 0) {
      setAnswers([...answers, { questionId, answer: selectedOptions }]);
    }
    setSelectedOptions([]);
    setCurrentQuestion(currentQuestion + 1);
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

  function submitTest(params) {
    console.log("Answers", answers);
  }
  function startPage(params) {
    SetLandingPage(false);
  }
  function getQuestionsFunc(params) {
    axios
      .post(`${baseUrl}api/user/getQuestionsByQuestionType`, {
        questionType: "multipleListening",
      })
      .then((d) => {
        console.log(d);
        setQuestions(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function questionFunc(params) {
    if (questions.length !== 0) {
      if (currentQuestion < questions.length) {
        return (
          <div className="practiceReadAloud-main-content-questions">
            <div className="practiceReadAloud-main-content-question">
              <h2 className="practiceReadAloud-main-content-question-no">
                Question {currentQuestion + 1}
              </h2>
              <p className="practiceReadAloud-main-content-question-heading">
                {questions[currentQuestion].heading}
              </p>
              <TextToSpeech text={questions[currentQuestion].text} />
              <p className="practiceReadAloud-main-content-question-para">
                {questions[currentQuestion].heading2}
              </p>
              {questions[currentQuestion].options.map((option, index) => (
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() =>
                      handleOptionChangeCheckBox(
                        option,
                        questions[currentQuestion].questionId
                      )
                    }
                  />
                  {option}
                  <br />
                </label>
              ))}
            </div>
            {showAnswer == true ? (
              <p>{mapAnswersFunc(questions[currentQuestion].answer)}</p>
            ) : (
              <></>
            )}
            <div className="practiceRepeatSentence-main-content-question-buttonDiv">
              <button
                onClick={() =>
                  nextQuestion(questions[currentQuestion].questionId)
                }
              >
                Next Question
              </button>
              <button onClick={showAnswerFunc}>
                {showAnswer ? "Hide Answer" : "Show Answer"}
              </button>
            </div>
          </div>
        );
      } else {
        return <button onClick={submitTest}>Submit Test</button>;
      }
    } else {
      return <p>Questions Not Found</p>;
    }
  }
  function showAnswerFunc() {
    setShowAnswer(!showAnswer);
  }
  function mapAnswersFunc(ansArray) {
    let ans = []
    ansArray.map((d) =>{
      ans.push(
        <div className="practiceMCQMultipleAnswer-answer">{d}</div>
      )
    })
    return ans;
  }
  return (
    <div className="practiceReadAloud-main">
      <div className="practiceReadAloud-main-content">
        {landingPage == true ? (
          <QuestionsFrontPage startPage={startPage} />
        ) : (
          questionFunc()
        )}
      </div>
    </div>
  );
}

export default PracticeMCQMultipleAnswer;
