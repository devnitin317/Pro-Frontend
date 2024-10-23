import React, { useEffect, useRef, useState } from "react";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch, useSelector } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import "./PracticeHighlightCorrectSummary.css";
import PlaceInputInString from "../../../CommonComponents/Listening/PlaceInputInString";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
// import PlaceInputInString from "../../../CommonComponents/PlaceInputInString/PlaceInputInString";
import axios from "axios";
function PracticeHighlightCorrectSummary() {
  // let ques = [
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 1,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The War Requiem by Benjamin Britten intertwines the Latin Mass with the themes of war and peace, reflecting on the horrors of conflict.",
  //     options: [
  //       "He finds the weaving together of the Latin Mass and antiwar poems to be quite effective.",
  //       "He is critical of Britten's inconsistencies as observed in the War Requiem.",
  //       "He admires the War Requiem of Britten but finds it far from perfect.",
  //       "He questions whether Britten's work will endure.",
  //     ],
  //     answer:
  //       "He is critical of Britten's inconsistencies as observed in the War Requiem.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 2,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "Climate change is affecting global weather patterns, leading to more extreme weather events and rising sea levels.",
  //     options: [
  //       "Climate change has minimal effects on weather patterns.",
  //       "Rising sea levels are a direct consequence of climate change.",
  //       "Weather patterns are becoming more predictable due to climate change.",
  //       "Climate change is only a future concern.",
  //     ],
  //     answer: "Rising sea levels are a direct consequence of climate change.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 3,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The importance of mental health awareness is growing, as more people recognize the need for mental health support.",
  //     options: [
  //       "Mental health issues are often overlooked in society.",
  //       "Raising mental health awareness can lead to better support systems.",
  //       "Mental health is only a concern for a small population.",
  //       "There is a stigma associated with seeking mental health help.",
  //     ],
  //     answer:
  //       "Raising mental health awareness can lead to better support systems.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 4,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "Renewable energy sources are essential for reducing dependence on fossil fuels and combating climate change.",
  //     options: [
  //       "Fossil fuels are the most reliable energy sources.",
  //       "Renewable energy can significantly reduce carbon emissions.",
  //       "There are no viable alternatives to fossil fuels.",
  //       "The transition to renewable energy is unnecessary.",
  //     ],
  //     answer: "Renewable energy can significantly reduce carbon emissions.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 5,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The impact of technology on education has transformed how students learn and interact with information.",
  //     options: [
  //       "Technology has made education less accessible.",
  //       "Students now rely solely on technology for learning.",
  //       "Technology enhances learning experiences and engagement.",
  //       "Education has not changed significantly due to technology.",
  //     ],
  //     answer: "Technology enhances learning experiences and engagement.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 6,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "Diversity in the workplace leads to increased creativity and innovation.",
  //     options: [
  //       "Diversity can create challenges in communication.",
  //       "A diverse workforce improves problem-solving capabilities.",
  //       "Diversity is not important for business success.",
  //       "Homogeneous teams are more effective.",
  //     ],
  //     answer: "A diverse workforce improves problem-solving capabilities.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 7,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The arts play a crucial role in fostering creativity and critical thinking.",
  //     options: [
  //       "The arts are a luxury that can be overlooked.",
  //       "Engaging in the arts has no impact on academic performance.",
  //       "The arts enhance cognitive abilities and emotional intelligence.",
  //       "Creativity is not essential in today's job market.",
  //     ],
  //     answer:
  //       "The arts enhance cognitive abilities and emotional intelligence.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 8,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "Public health initiatives are vital for improving community health outcomes.",
  //     options: [
  //       "Public health initiatives are often underfunded.",
  //       "Community engagement is crucial for effective public health.",
  //       "Public health initiatives have little effect on health outcomes.",
  //       "Health education is not necessary for public health.",
  //     ],
  //     answer: "Community engagement is crucial for effective public health.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 9,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "Social media has transformed communication but also presents challenges.",
  //     options: [
  //       "Social media is the only way people communicate now.",
  //       "Social media has no impact on relationships.",
  //       "Social media can lead to misunderstandings and misinformation.",
  //       "Communication has improved significantly due to social media.",
  //     ],
  //     answer: "Social media can lead to misunderstandings and misinformation.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 10,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of financial literacy is increasingly recognized in today's economy.",
  //     options: [
  //       "Financial literacy is only important for wealthy individuals.",
  //       "Understanding financial concepts is essential for making informed decisions.",
  //       "Financial literacy has no impact on personal success.",
  //       "Only professionals need financial literacy.",
  //     ],
  //     answer:
  //       "Understanding financial concepts is essential for making informed decisions.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 11,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of sustainability in business practices is becoming more important.",
  //     options: [
  //       "Sustainability is a trend that will pass.",
  //       "Businesses can benefit from adopting sustainable practices.",
  //       "Sustainability has no impact on profitability.",
  //       "Only large corporations need to focus on sustainability.",
  //     ],
  //     answer: "Businesses can benefit from adopting sustainable practices.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 12,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "Civic engagement is essential for a healthy democracy.",
  //     options: [
  //       "Civic engagement is only important during elections.",
  //       "Active participation fosters a sense of community.",
  //       "Civic engagement has little impact on governance.",
  //       "Only politicians need to be engaged in civic activities.",
  //     ],
  //     answer: "Active participation fosters a sense of community.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 13,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The importance of emotional intelligence in leadership cannot be overstated.",
  //     options: [
  //       "Emotional intelligence is not relevant for leaders.",
  //       "Leaders with emotional intelligence can better manage teams.",
  //       "Emotional intelligence is less important than technical skills.",
  //       "All leaders are naturally emotionally intelligent.",
  //     ],
  //     answer: "Leaders with emotional intelligence can better manage teams.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 14,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The impact of globalization on local cultures is complex.",
  //     options: [
  //       "Globalization only has negative effects on cultures.",
  //       "Local cultures are thriving due to globalization.",
  //       "Globalization can lead to cultural homogenization.",
  //       "Globalization has no effect on cultural identity.",
  //     ],
  //     answer: "Globalization can lead to cultural homogenization.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 15,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of biodiversity is crucial for ecosystem health.",
  //     options: [
  //       "Biodiversity has little impact on ecosystem stability.",
  //       "Protecting biodiversity is essential for sustainability.",
  //       "Biodiversity is only important for wildlife.",
  //       "Human activities have no effect on biodiversity.",
  //     ],
  //     answer: "Protecting biodiversity is essential for sustainability.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 16,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of technology in healthcare is rapidly evolving.",
  //     options: [
  //       "Technology has made healthcare less accessible.",
  //       "Innovations in technology improve patient care.",
  //       "Technology has no impact on healthcare outcomes.",
  //       "Healthcare technology is only for large hospitals.",
  //     ],
  //     answer: "Innovations in technology improve patient care.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 17,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The importance of community service in personal development is significant.",
  //     options: [
  //       "Community service is only for students.",
  //       "Engaging in community service fosters empathy and responsibility.",
  //       "Community service has no impact on personal growth.",
  //       "Only professionals should engage in community service.",
  //     ],
  //     answer:
  //       "Engaging in community service fosters empathy and responsibility.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 18,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of health education in schools is increasingly recognized.",
  //     options: [
  //       "Health education is not necessary for students.",
  //       "Health education can lead to healthier lifestyle choices.",
  //       "Only physical education is important in schools.",
  //       "Health education has minimal impact on student behavior.",
  //     ],
  //     answer: "Health education can lead to healthier lifestyle choices.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 19,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of innovation in driving economic growth is crucial.",
  //     options: [
  //       "Innovation is only important for technology companies.",
  //       "Economic growth is not affected by innovation.",
  //       "Innovative practices lead to new job creation.",
  //       "Innovation has little impact on traditional industries.",
  //     ],
  //     answer: "Innovative practices lead to new job creation.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 20,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The impact of artificial intelligence on the workforce is significant.",
  //     options: [
  //       "AI will eliminate all jobs in the future.",
  //       "AI can enhance productivity and efficiency.",
  //       "AI has no effect on job creation.",
  //       "Only low-skilled jobs are at risk due to AI.",
  //     ],
  //     answer: "AI can enhance productivity and efficiency.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 21,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of ethical consumerism is growing in today's market.",
  //     options: [
  //       "Consumers are indifferent to ethical considerations.",
  //       "Ethical consumerism promotes responsible purchasing.",
  //       "Ethical consumerism is only a trend.",
  //       "There is no demand for ethically produced goods.",
  //     ],
  //     answer: "Ethical consumerism promotes responsible purchasing.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 22,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The importance of lifelong learning in personal and professional development is crucial.",
  //     options: [
  //       "Lifelong learning is only for older adults.",
  //       "Continuous learning helps individuals adapt to changes.",
  //       "Lifelong learning is not necessary in today's world.",
  //       "Only formal education matters for career advancement.",
  //     ],
  //     answer: "Continuous learning helps individuals adapt to changes.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 23,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of youth in shaping the future is increasingly recognized.",
  //     options: [
  //       "Youth have little influence on societal change.",
  //       "Young people are essential for driving innovation.",
  //       "Youth involvement is not important for democracy.",
  //       "Only adults can create meaningful change.",
  //     ],
  //     answer: "Young people are essential for driving innovation.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 24,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of mental health support in schools is crucial for student well-being.",
  //     options: [
  //       "Mental health support is not necessary in schools.",
  //       "Schools should prioritize academic performance over mental health.",
  //       "Providing mental health resources can improve student outcomes.",
  //       "Only parents should address children's mental health.",
  //     ],
  //     answer: "Providing mental health resources can improve student outcomes.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 25,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The impact of climate change on agriculture is significant.",
  //     options: [
  //       "Climate change has no effect on crop yields.",
  //       "Agriculture is resilient to climate change.",
  //       "Farmers must adapt to changing climate conditions.",
  //       "Climate change only affects urban areas.",
  //     ],
  //     answer: "Farmers must adapt to changing climate conditions.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 26,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of government in regulating industries is essential for public safety.",
  //     options: [
  //       "Government regulations are unnecessary.",
  //       "Regulations help ensure consumer protection.",
  //       "Industries should self-regulate without oversight.",
  //       "Government involvement complicates business operations.",
  //     ],
  //     answer: "Regulations help ensure consumer protection.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 27,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of cultural heritage is vital for community identity.",
  //     options: [
  //       "Cultural heritage is irrelevant in modern society.",
  //       "Preserving cultural heritage fosters community pride.",
  //       "Cultural heritage only matters to older generations.",
  //       "Heritage preservation is a waste of resources.",
  //     ],
  //     answer: "Preserving cultural heritage fosters community pride.",
  //   },

  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 28,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The impact of technology on personal relationships is complex.",
  //     options: [
  //       "Technology has improved all personal relationships.",
  //       "Technology can both connect and isolate individuals.",
  //       "Personal relationships are unaffected by technology.",
  //       "Technology only creates superficial connections.",
  //     ],
  //     answer: "Technology can both connect and isolate individuals.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 29,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The importance of nutrition education is increasingly recognized in schools.",
  //     options: [
  //       "Nutrition education is not necessary for students.",
  //       "Understanding nutrition can lead to healthier choices.",
  //       "Nutrition education is only for health professionals.",
  //       "Schools should focus solely on physical education.",
  //     ],
  //     answer: "Understanding nutrition can lead to healthier choices.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 30,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of ethical leadership in organizations is paramount.",
  //     options: [
  //       "Ethical leadership is not important for business success.",
  //       "Leaders should prioritize profits over ethics.",
  //       "Ethical leaders foster trust and accountability.",
  //       "All leaders are naturally ethical.",
  //     ],
  //     answer: "Ethical leaders foster trust and accountability.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 31,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of family in child development is crucial.",
  //     options: [
  //       "Family has little impact on a child's growth.",
  //       "Positive family environments promote healthy development.",
  //       "Children can thrive without family support.",
  //       "Family dynamics are irrelevant to child development.",
  //     ],
  //     answer: "Positive family environments promote healthy development.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 32,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The impact of globalization on economic development is multifaceted.",
  //     options: [
  //       "Globalization only benefits developed countries.",
  //       "Economic development is unaffected by globalization.",
  //       "Globalization can lead to both opportunities and challenges.",
  //       "Globalization has no impact on local economies.",
  //     ],
  //     answer: "Globalization can lead to both opportunities and challenges.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 33,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of environmental conservation is increasingly recognized.",
  //     options: [
  //       "Environmental conservation is not necessary.",
  //       "Conservation efforts are essential for sustainability.",
  //       "Only governments should focus on conservation.",
  //       "Conservation has no impact on biodiversity.",
  //     ],
  //     answer: "Conservation efforts are essential for sustainability.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 34,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of innovation in education is vital for preparing students for the future.",
  //     options: [
  //       "Innovation in education is not necessary.",
  //       "Innovative teaching methods enhance student engagement.",
  //       "Traditional methods are sufficient for education.",
  //       "Innovation complicates the learning process.",
  //     ],
  //     answer: "Innovative teaching methods enhance student engagement.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 35,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of data privacy in the digital age is paramount.",
  //     options: [
  //       "Data privacy is not a concern in today's world.",
  //       "Protecting personal data is crucial in the digital age.",
  //       "Data privacy only matters for certain individuals.",
  //       "Sharing personal information online is acceptable.",
  //     ],
  //     answer: "Protecting personal data is crucial in the digital age.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 36,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of meditation in promoting mental well-being is well-established.",
  //     options: [
  //       "Meditation has no impact on mental health.",
  //       "Regular meditation can reduce stress and improve focus.",
  //       "Only certain individuals benefit from meditation.",
  //       "Meditation is a waste of time.",
  //     ],
  //     answer: "Regular meditation can reduce stress and improve focus.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 37,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The impact of globalization on international trade is significant.",
  //     options: [
  //       "Globalization has no effect on international trade.",
  //       "Globalization has led to increased trade opportunities.",
  //       "Globalization has created challenges for fair trade practices.",
  //       "Globalization has made international trade less accessible.",
  //     ],
  //     answer: "Globalization has led to increased trade opportunities.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 38,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The importance of ethical consumption cannot be overstated.",
  //     options: [
  //       "Ethical consumption is not a priority for consumers.",
  //       "Ethical consumption promotes responsible production.",
  //       "Ethical consumption has no impact on the economy.",
  //       "Ethical consumption is only for wealthy individuals.",
  //     ],
  //     answer: "Ethical consumption promotes responsible production.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 39,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of diversity and inclusion in the workplace is crucial.",
  //     options: [
  //       "Diversity and inclusion are not necessary in the workplace.",
  //       "Diversity and inclusion foster innovation and creativity.",
  //       "Diversity and inclusion are only important for large companies.",
  //       "Diversity and inclusion create challenges in the workplace.",
  //     ],
  //     answer: "Diversity and inclusion foster innovation and creativity.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 40,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of civic engagement in a democracy cannot be overstated.",
  //     options: [
  //       "Civic engagement is only important during elections.",
  //       "Active participation in civic life strengthens democracy.",
  //       "Civic engagement has little impact on government policies.",
  //       "Only certain groups should be civically engaged.",
  //     ],
  //     answer: "Active participation in civic life strengthens democracy.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 41,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of social entrepreneurship in driving positive change is significant.",
  //     options: [
  //       "Social entrepreneurship has no impact on societal issues.",
  //       "Social entrepreneurs create innovative solutions to social problems.",
  //       "Social entrepreneurship is only a trend.",
  //       "Social entrepreneurship is not a sustainable business model.",
  //     ],
  //     answer:
  //       "Social entrepreneurs create innovative solutions to social problems.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 42,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of digital literacy in the 21st century is crucial.",
  //     options: [
  //       "Digital literacy is not necessary in today's world.",
  //       "Developing digital skills is essential for success.",
  //       "Digital literacy is only important for certain professions.",
  //       "Digital literacy has no impact on personal growth.",
  //     ],
  //     answer: "Developing digital skills is essential for success.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 43,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of sports in promoting physical and mental well-being is significant.",
  //     options: [
  //       "Sports have no impact on physical or mental health.",
  //       "Participating in sports enhances physical and mental well-being.",
  //       "Sports are only important for professional athletes.",
  //       "Sports have a negative impact on mental health.",
  //     ],
  //     answer:
  //       "Participating in sports enhances physical and mental well-being.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 44,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The impact of climate change on biodiversity is alarming.",
  //     options: [
  //       "Climate change has no effect on biodiversity.",
  //       "Climate change is causing habitat loss and species extinction.",
  //       "Biodiversity is resilient to climate change.",
  //       "Protecting biodiversity has no impact on climate change.",
  //     ],
  //     answer: "Climate change is causing habitat loss and species extinction.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 45,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of urban planning in creating sustainable cities is crucial.",
  //     options: [
  //       "Urban planning has no impact on sustainability.",
  //       "Effective urban planning promotes sustainable development.",
  //       "Only large cities require sustainable urban planning.",
  //       "Sustainable urban planning is too expensive to implement.",
  //     ],
  //     answer: "Effective urban planning promotes sustainable development.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 46,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of cultural exchange in promoting global understanding is vital.",
  //     options: [
  //       "Cultural exchange has no impact on global understanding.",
  //       "Cultural exchange fosters mutual respect and appreciation.",
  //       "Cultural exchange is only important for certain countries.",
  //       "Cultural exchange is a waste of resources.",
  //     ],
  //     answer: "Cultural exchange fosters mutual respect and appreciation.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 47,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of technology in promoting accessibility is significant.",
  //     options: [
  //       "Technology has made certain areas less accessible.",
  //       "Technological advancements improve accessibility.",
  //       "Technology has no impact on accessibility.",
  //       "Only certain groups benefit from accessible technology.",
  //     ],
  //     answer: "Technological advancements improve accessibility.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 48,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of corporate social responsibility in today's business landscape is paramount.",
  //     options: [
  //       "Corporate social responsibility is not necessary for businesses.",
  //       "Socially responsible practices enhance a company's reputation.",
  //       "Corporate social responsibility has no impact on profitability.",
  //       "Only large corporations should engage in social responsibility.",
  //     ],
  //     answer: "Socially responsible practices enhance a company's reputation.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 49,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The role of renewable energy in combating climate change is crucial.",
  //     options: [
  //       "Renewable energy has no impact on climate change.",
  //       "Transitioning to renewable energy is essential for mitigating climate change.",
  //       "Fossil fuels are still the most viable energy source.",
  //       "Renewable energy is not a reliable alternative to fossil fuels.",
  //     ],
  //     answer:
  //       "Transitioning to renewable energy is essential for mitigating climate change.",
  //   },
  //   {
  //     type: "highlightCorrectSummary",
  //     moduleType: "listening",
  //     questionId: 50,
  //     heading:
  //       "You will hear a recording. Click on the paragraph that best relates to the recording.",
  //     text: "The significance of evidence-based policymaking in addressing societal challenges is paramount.",
  //     options: [
  //       "Evidence-based policymaking is not necessary.",
  //       "Policies informed by research and data are more effective.",
  //       "Evidence-based policymaking is only important for certain issues.",
  //       "Policymaking should be based on political ideology rather than evidence.",
  //     ],
  //     answer: "Policies informed by research and data are more effective.",
  //   },
  // ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState({ answer: "" });
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
      resetCountDown({ reset: `PracticeHighlightCorrectSummary${questionId}` })
    );
    if (selectedOption.answer !== "") {
      setAnswers([...answers, selectedOption]);
    }

    setCurrentQuestion(currentQuestion + 1);
  }
  const handleOptionSelect = (answer, questionId) => {
    setSelectedOption({ questionId, answer });
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
        questionType: "highLightCorrectSummary",
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
              <TextToSpeech countDuration={10} text={questions[currentQuestion].text} />
              <p className="practiceReadAloud-main-content-question-para">
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index} className="optionsLi">
                    <label>
                      <input
                        type="radio"
                        name="options"
                        value={option}
                        checked={option === selectedOption.answer}
                        onChange={() =>
                          handleOptionSelect(
                            option,
                            questions[currentQuestion].questionId
                          )
                        }
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </p>
            </div>
            {showAnswer == true ? (
              <p>{questions[currentQuestion].answer}</p>
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

export default PracticeHighlightCorrectSummary;
