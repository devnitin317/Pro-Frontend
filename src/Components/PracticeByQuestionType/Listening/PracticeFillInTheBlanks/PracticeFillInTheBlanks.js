import React, { useEffect, useRef, useState } from "react";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch, useSelector } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import "./PracticeFillInTheBlanks.css";
import PlaceInputInString from "../../../CommonComponents/Listening/PlaceInputInString";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
// import PlaceInputInString from "../../../CommonComponents/PlaceInputInString/PlaceInputInString";
import axios from "axios";
function PracticeFillInTheBlanks() {
  // let ques = [
  //   {
  //     questionId: 1,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
  //     para: "Considering their lingering reputation as man-killers, it's hardly surprising that hackles are raised any time someone brings up the idea of 'blank' wolves to the Scottish Highlands. Debate on this topic has been raging for years; 'blank' would like to see the Highland environment returned to its natural state. Opponents 'blank' the animals' 'blank' for killing livestock.",
  //     answer: {
  //       1: "reintroducing",
  //       2: "Conservationists",
  //       3: "cite",
  //       4: "aggression",
  //     },
  //   },
  //   {
  //     questionId: 2,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "Photosynthesis is the process by which green plants use sunlight to synthesize foods from carbon dioxide and water.",
  //     para: "Photosynthesis occurs primarily in the leaves of plants, where 'blank' absorbs sunlight. This energy is then used to convert 'blank' and water into glucose and oxygen. The overall reaction can be summarized as 'blank'.",
  //     answer: {
  //       1: "chlorophyll",
  //       2: "carbon dioxide",
  //       3: "6CO2 + 6H2O → C6H12O6 + 6O2",
  //     },
  //   },
  //   {
  //     questionId: 3,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "Climate change is a significant global challenge that affects ecosystems and human societies.",
  //     para: "One of the most concerning effects of climate change is the increase in 'blank' levels, which leads to rising sea levels. This phenomenon threatens coastal communities and 'blank' biodiversity. Mitigating these impacts requires 'blank' action from all nations.",
  //     answer: {
  //       1: "greenhouse gas",
  //       2: "endangers",
  //       3: "collective",
  //     },
  //   },
  //   {
  //     questionId: 4,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The human brain is an incredibly complex organ responsible for processing information and controlling behavior.",
  //     para: "Neuroscientists study the brain to understand how 'blank' functions. They explore various aspects, including 'blank', memory, and decision-making. Advances in technology have allowed researchers to 'blank' brain activity in real time.",
  //     answer: {
  //       1: "the brain",
  //       2: "cognition",
  //       3: "monitor",
  //     },
  //   },
  //   {
  //     questionId: 5,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "Renewable energy sources are becoming increasingly important in the fight against climate change.",
  //     para: "Solar and wind energy are two of the most popular 'blank' sources. They provide clean alternatives to fossil fuels, reducing 'blank' emissions. Governments are investing in 'blank' technologies to promote sustainability.",
  //     answer: {
  //       1: "renewable",
  //       2: "greenhouse gas",
  //       3: "clean",
  //     },
  //   },
  //   {
  //     questionId: 6,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The study of economics involves understanding how societies allocate scarce resources.",
  //     para: "Economists analyze various factors that influence 'blank' decisions. They examine supply and 'blank', consumer behavior, and market structures. Understanding these concepts is crucial for 'blank' effective policies.",
  //     answer: {
  //       1: "consumer",
  //       2: "demand",
  //       3: "developing",
  //     },
  //   },
  //   {
  //     questionId: 7,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "Literature reflects the culture and values of the society in which it is produced.",
  //     para: "Through 'blank', authors express their thoughts and feelings about the world around them. Literary works often explore themes such as 'blank', love, and conflict. These narratives provide insight into the human 'blank'.",
  //     answer: {
  //       1: "writing",
  //       2: "identity",
  //       3: "experience",
  //     },
  //   },
  //   {
  //     questionId: 8,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The Internet has transformed how we communicate and access information.",
  //     para: "With the rise of social media, people can now 'blank' with others instantly. This has led to a shift in 'blank', as news spreads rapidly online. However, it also raises concerns about 'blank' and misinformation.",
  //     answer: {
  //       1: "connect",
  //       2: "communication",
  //       3: "privacy",
  //     },
  //   },
  //   {
  //     questionId: 9,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The field of psychology studies the mind and behavior.",
  //     para: "Psychologists use various methods to 'blank' human behavior. They conduct experiments, surveys, and observations to gather 'blank'. This research helps in understanding mental 'blank' and developing effective treatments.",
  //     answer: {
  //       1: "study",
  //       2: "data",
  //       3: "health",
  //     },
  //   },
  //   {
  //     questionId: 10,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "Sustainable agriculture focuses on producing food while preserving the environment.",
  //     para: "Farmers are adopting 'blank' practices to reduce their impact on the ecosystem. Techniques such as crop rotation and organic farming help maintain 'blank' health. These methods ensure food security for future 'blank'.",
  //     answer: {
  //       1: "sustainable",
  //       2: "soil",
  //       3: "generations",
  //     },
  //   },
  //   {
  //     questionId: 11,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "Artificial intelligence is reshaping industries and changing the way we work.",
  //     para: "AI technologies are being implemented in areas such as 'blank', healthcare, and finance. These advancements improve efficiency and 'blank' decision-making. However, they also raise ethical 'blank' regarding job displacement.",
  //     answer: {
  //       1: "transportation",
  //       2: "enhance",
  //       3: "concerns",
  //     },
  //   },
  //   {
  //     questionId: 12,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "Globalization has interconnected economies and cultures around the world.",
  //     para: "While globalization offers many 'blank', it also presents challenges. Issues such as 'blank' inequality and cultural homogenization arise. Policymakers must address these concerns to ensure 'blank' development.",
  //     answer: {
  //       1: "benefits",
  //       2: "income",
  //       3: "sustainable",
  //     },
  //   },
  //   {
  //     questionId: 13,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The importance of mental health awareness is increasingly recognized in society.",
  //     para: "Mental health issues affect millions of 'blank' worldwide. Raising awareness can help reduce 'blank' and encourage individuals to seek help. Community support and 'blank' resources are vital in addressing these challenges.",
  //     answer: {
  //       1: "people",
  //       2: "stigma",
  //       3: "accessible",
  //     },
  //   },
  //   {
  //     questionId: 14,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The arts play a crucial role in education and personal development.",
  //     para: "Engaging in 'blank' activities fosters creativity and critical thinking. Schools that prioritize arts education often see improved 'blank' outcomes. This highlights the need for 'blank' investment in the arts.",
  //     answer: {
  //       1: "artistic",
  //       2: "academic",
  //       3: "increased",
  //     },
  //   },
  //   {
  //     questionId: 15,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "Public speaking is a valuable skill in both personal and professional contexts.",
  //     para: "Effective speakers can 'blank' their ideas clearly and persuasively. Developing this skill involves practice and 'blank'. Many organizations offer workshops to help individuals improve their 'blank'.",
  //     answer: {
  //       1: "communicate",
  //       2: "dedication",
  //       3: "public speaking",
  //     },
  //   },
  //   {
  //     questionId: 16,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The role of technology in education is rapidly evolving.",
  //     para: "Digital tools enhance 'blank' and engagement in the classroom. Online learning platforms provide access to 'blank' resources, allowing students to learn at their own pace. However, this shift also requires 'blank' from educators.",
  //     answer: {
  //       1: "learning",
  //       2: "educational",
  //       3: "adaptation",
  //     },
  //   },
  //   {
  //     questionId: 17,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "Healthy eating habits are essential for maintaining overall well-being.",
  //     para: "A balanced diet includes a variety of 'blank', fruits, and whole grains. Nutritionists recommend limiting 'blank' intake and focusing on whole foods. This approach can lead to better 'blank' and longevity.",
  //     answer: {
  //       1: "vegetables",
  //       2: "sugar",
  //       3: "health",
  //     },
  //   },
  //   {
  //     questionId: 18,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The impact of social media on communication is profound.",
  //     para: "While it enables instant 'blank', it can also lead to misunderstandings. Users must navigate the complexities of 'blank' interactions. Understanding these dynamics is crucial for effective 'blank'.",
  //     answer: {
  //       1: "connection",
  //       2: "online",
  //       3: "communication",
  //     },
  //   },
  //   {
  //     questionId: 19,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The significance of biodiversity cannot be overstated.",
  //     para: "Biodiversity contributes to ecosystem 'blank' and resilience. Protecting various species is essential for maintaining 'blank' health. Conservation efforts aim to preserve habitats and 'blank' endangered species.",
  //     answer: {
  //       1: "stability",
  //       2: "planetary",
  //       3: "protect",
  //     },
  //   },
  //   {
  //     questionId: 20,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The study of history helps us understand our past and shape our future.",
  //     para: "Historians analyze 'blank' events to draw lessons for today. Understanding historical contexts can inform 'blank' decisions and policies. This knowledge is vital for fostering 'blank' citizenship.",
  //     answer: {
  //       1: "historical",
  //       2: "informed",
  //       3: "responsible",
  //     },
  //   },
  //   {
  //     questionId: 21,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The importance of teamwork in the workplace is widely recognized.",
  //     para: "Effective teams leverage diverse 'blank' to achieve common goals. Collaboration fosters innovation and 'blank' problem-solving. Organizations that promote teamwork often see improved 'blank' and morale.",
  //     answer: {
  //       1: "perspectives",
  //       2: "effective",
  //       3: "productivity",
  //     },
  //   },
  //   {
  //     questionId: 22,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The evolution of transportation has transformed society.",
  //     para: "From horse-drawn carriages to electric cars, 'blank' has come a long way. Advances in technology continue to shape how we 'blank' and travel. Sustainable options are becoming increasingly 'blank'.",
  //     answer: {
  //       1: "transportation",
  //       2: "commute",
  //       3: "popular",
  //     },
  //   },
  //   {
  //     questionId: 23,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The significance of water conservation is critical in today's world.",
  //     para: "As populations grow, the demand for 'blank' increases. Implementing conservation strategies can help ensure a sustainable 'blank' supply. Awareness campaigns aim to educate communities about 'blank' practices.",
  //     answer: {
  //       1: "water",
  //       2: "water",
  //       3: "conservation",
  //     },
  //   },
  //   {
  //     questionId: 24,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The role of education in society is foundational.",
  //     para: "Education equips individuals with the 'blank' and skills necessary for success. It fosters critical thinking and 'blank' awareness. A well-educated population contributes to 'blank' development.",
  //     answer: {
  //       1: "knowledge",
  //       2: "social",
  //       3: "societal",
  //     },
  //   },
  //   {
  //     questionId: 25,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The impact of climate change on wildlife is alarming.",
  //     para: "Many species are at risk due to changing 'blank' conditions. Conservationists are working to protect habitats and 'blank' biodiversity. Addressing climate change is essential for ensuring 'blank' survival.",
  //     answer: {
  //       1: "climatic",
  //       2: "preserve",
  //       3: "species",
  //     },
  //   },
  //   {
  //     questionId: 26,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The importance of cultural diversity enriches societies.",
  //     para: "Cultural exchange fosters understanding and 'blank' among communities. Celebrating diversity can lead to 'blank' innovation and creativity. Societies that embrace cultural differences often experience 'blank' growth.",
  //     answer: {
  //       1: "connection",
  //       2: "greater",
  //       3: "economic",
  //     },
  //   },

  //   {
  //     questionId: 27,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The benefits of regular physical activity are well-documented.",
  //     para: "Exercise contributes to physical and mental 'blank'. It helps reduce stress and improves 'blank'. Incorporating physical activity into daily routines is crucial for maintaining 'blank'.",
  //     answer: {
  //       1: "health",
  //       2: "well-being",
  //       3: "fitness",
  //     },
  //   },
  //   {
  //     questionId: 28,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The significance of ethical leadership in organizations is paramount.",
  //     para: "Leaders who prioritize ethics foster a culture of 'blank' and accountability. Ethical leadership enhances 'blank' and trust among employees. Organizations with strong ethical foundations tend to 'blank' better.",
  //     answer: {
  //       1: "integrity",
  //       2: "respect",
  //       3: "perform",
  //     },
  //   },
  //   {
  //     questionId: 29,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The role of innovation in driving economic growth is crucial.",
  //     para: "Innovative ideas lead to new 'blank' and services, creating jobs and stimulating 'blank'. Governments encourage innovation through 'blank' and support for research.",
  //     answer: {
  //       1: "products",
  //       2: "economic activity",
  //       3: "funding",
  //     },
  //   },
  //   {
  //     questionId: 30,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The impact of globalization on local cultures is complex.",
  //     para: "While globalization promotes 'blank', it can also lead to cultural 'blank'. Balancing global influences with local traditions is essential for 'blank' preservation.",
  //     answer: {
  //       1: "interconnectedness",
  //       2: "homogenization",
  //       3: "cultural",
  //     },
  //   },
  //   {
  //     questionId: 31,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The significance of mental resilience in facing challenges is vital.",
  //     para: "Building resilience helps individuals cope with 'blank' and adversity. Techniques such as mindfulness and 'blank' can enhance mental strength. Resilient individuals are better equipped to 'blank' difficulties.",
  //     answer: {
  //       1: "stress",
  //       2: "self-care",
  //       3: "overcome",
  //     },
  //   },
  //   {
  //     questionId: 32,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The importance of financial literacy cannot be overstated.",
  //     para: "Understanding financial concepts enables individuals to make informed 'blank'. Financial literacy promotes savings, investment, and 'blank' management. Educational programs aim to enhance 'blank' skills.",
  //     answer: {
  //       1: "decisions",
  //       2: "money",
  //       3: "financial",
  //     },
  //   },
  //   {
  //     questionId: 33,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The role of community service in personal development is significant.",
  //     para: "Volunteering fosters a sense of 'blank' and responsibility. Engaging in community service enhances social 'blank' and empathy. Individuals who volunteer often report higher levels of 'blank' satisfaction.",
  //     answer: {
  //       1: "citizenship",
  //       2: "awareness",
  //       3: "personal",
  //     },
  //   },
  //   {
  //     questionId: 34,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The significance of environmental conservation is increasingly recognized.",
  //     para: "Protecting natural resources is essential for sustaining 'blank' ecosystems. Conservation efforts aim to preserve biodiversity and 'blank' habitats. Community involvement is crucial for effective 'blank'.",
  //     answer: {
  //       1: "healthy",
  //       2: "protect",
  //       3: "conservation",
  //     },
  //   },
  //   {
  //     questionId: 35,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The impact of technology on education is transformative.",
  //     para: "Digital tools enhance learning experiences and 'blank' engagement. Online resources provide access to a wealth of 'blank' information. Educators must adapt to these technological 'blank'.",
  //     answer: {
  //       1: "student",
  //       2: "educational",
  //       3: "changes",
  //     },
  //   },
  //   {
  //     questionId: 36,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The importance of emotional intelligence in leadership is crucial.",
  //     para: "Leaders with high emotional intelligence can 'blank' their teams effectively. They understand and manage their own 'blank' while empathizing with others. This skill fosters a positive 'blank' environment.",
  //     answer: {
  //       1: "motivate",
  //       2: "emotions",
  //       3: "work",
  //     },
  //   },
  //   {
  //     questionId: 37,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The role of art in society is multifaceted.",
  //     para: "Art serves as a means of 'blank' and expression. It reflects cultural values and challenges societal 'blank'. Supporting the arts enriches communities and promotes 'blank' dialogue.",
  //     answer: {
  //       1: "creativity",
  //       2: "norms",
  //       3: "meaningful",
  //     },
  //   },
  //   {
  //     questionId: 38,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The significance of public health initiatives is vital for community well-being.",
  //     para: "Public health campaigns aim to raise awareness about 'blank' issues. They promote healthy behaviors and prevent 'blank' diseases. Collaboration among stakeholders is essential for effective 'blank'.",
  //     answer: {
  //       1: "health",
  //       2: "chronic",
  //       3: "public health",
  //     },
  //   },
  //   {
  //     questionId: 39,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The impact of renewable energy on the environment is positive.",
  //     para: "Renewable sources reduce 'blank' emissions and dependence on fossil fuels. Transitioning to clean energy contributes to 'blank' sustainability. Governments are implementing policies to support this 'blank'.",
  //     answer: {
  //       1: "greenhouse gas",
  //       2: "environmental",
  //       3: "transition",
  //     },
  //   },
  //   {
  //     questionId: 40,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The importance of lifelong learning in today's world is paramount.",
  //     para: "Continuous learning helps individuals adapt to 'blank' changes and stay relevant in their careers. It fosters 'blank' thinking and opens up new opportunities. Embracing lifelong learning is key to personal and 'blank' growth.",
  //     answer: {
  //       1: "technological",
  //       2: "critical",
  //       3: "professional",
  //     },
  //   },
  //   {
  //     questionId: 41,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The significance of sustainable urban planning cannot be overstated.",
  //     para: "Effective urban planning aims to create 'blank' and livable cities. It incorporates strategies for efficient resource use, 'blank' transportation, and green spaces. Sustainable cities promote 'blank' and environmental well-being.",
  //     answer: {
  //       1: "vibrant",
  //       2: "public",
  //       3: "economic",
  //     },
  //   },
  //   {
  //     questionId: 42,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The impact of social entrepreneurship on society is transformative.",
  //     para: "Social entrepreneurs identify and address 'blank' issues, creating innovative solutions. Their ventures combine 'blank' objectives with a business approach. By prioritizing social impact, they drive 'blank' change.",
  //     answer: {
  //       1: "societal",
  //       2: "social",
  //       3: "positive",
  //     },
  //   },
  //   {
  //     questionId: 43,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The importance of digital literacy in the 21st century cannot be overstated.",
  //     para: "As technology permeates every aspect of life, developing 'blank' skills is crucial. Digital literacy enables individuals to navigate online platforms, 'blank' information, and communicate effectively. It is a key competency for success in the 'blank' world.",
  //     answer: {
  //       1: "digital",
  //       2: "evaluate",
  //       3: "digital",
  //     },
  //   },
  //   {
  //     questionId: 44,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The role of sports in promoting physical and mental well-being is significant.",
  //     para: "Engaging in sports fosters 'blank' development and teamwork skills. Regular physical activity releases endorphins, improving 'blank' and reducing stress. Participating in sports can also enhance 'blank' confidence and self-esteem.",
  //     answer: {
  //       1: "character",
  //       2: "mood",
  //       3: "personal",
  //     },
  //   },
  //   {
  //     questionId: 45,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The significance of data privacy in the digital age is paramount.",
  //     para: "As more personal information is shared online, protecting 'blank' is crucial. Individuals must be aware of their 'blank' rights and how to safeguard their data. Governments are implementing regulations to ensure 'blank' privacy standards.",
  //     answer: {
  //       1: "privacy",
  //       2: "consumer",
  //       3: "data",
  //     },
  //   },
  //   {
  //     questionId: 46,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The role of meditation in promoting mental well-being is well-established.",
  //     para: "Regular meditation practice can help reduce 'blank' and improve focus. It promotes a sense of 'blank' and inner peace. Incorporating meditation into daily routines can lead to enhanced 'blank' and overall well-being.",
  //     answer: {
  //       1: "stress",
  //       2: "calm",
  //       3: "mental health",
  //     },
  //   },
  //   {
  //     questionId: 47,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The impact of globalization on international trade is significant.",
  //     para: "Globalization has led to the 'blank' of trade barriers and the rise of global supply chains. It has opened up new 'blank' for businesses to expand their markets. However, it also raises concerns about 'blank' and labor practices.",
  //     answer: {
  //       1: "removal",
  //       2: "opportunities",
  //       3: "fair trade",
  //     },
  //   },
  //   {
  //     questionId: 48,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The importance of ethical consumption cannot be overstated.",
  //     para: "Consumers are becoming increasingly aware of the 'blank' of their purchasing decisions. They are choosing to support businesses that prioritize 'blank' and sustainability. Ethical consumption promotes responsible 'blank' and a more equitable economy.",
  //     answer: {
  //       1: "impact",
  //       2: "ethics",
  //       3: "production",
  //     },
  //   },
  //   {
  //     questionId: 49,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The role of diversity and inclusion in the workplace is crucial.",
  //     para: "Embracing diversity fosters a 'blank' and innovative work environment. It allows organizations to tap into a wider pool of 'blank' and perspectives. Inclusive practices ensure that all employees feel 'blank' and valued.",
  //     answer: {
  //       1: "creative",
  //       2: "talent",
  //       3: "respected",
  //     },
  //   },
  //   {
  //     questionId: 50,
  //     heading: "You will hear a recording.Type missing word in each blank",
  //     moduleType: "listening",
  //     type: "fillUps",
  //     text: "The significance of civic engagement in a democracy cannot be overstated.",
  //     para: "Active participation in civic life is essential for a healthy 'blank'. It includes voting, volunteering, and engaging with local 'blank'. Civically engaged citizens contribute to the 'blank' of their communities.",
  //     answer: {
  //       1: "democracy",
  //       2: "government",
  //       3: "betterment",
  //     },
  //   },
  // ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [landingPage, SetLandingPage] = useState(true);
  const [answers, setAnswers] = useState([]);
  const practiceFillInTheBlanksRef = useRef(null); //ref
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
    dispatch(resetCountDown({ reset: `PracticeFillInTheBlanks${questionId}` }));
    if (practiceFillInTheBlanksRef.current) {
      if ("dataFromPlaceInputInStrings" in practiceFillInTheBlanksRef.current) {
        let dataFromPlaceInputInStrings =
          practiceFillInTheBlanksRef.current.dataFromPlaceInputInStrings();
        setAnswers([
          ...answers,
          { questionId, answer: dataFromPlaceInputInStrings },
        ]);
      }
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  function submitTest(params) {
    console.log("Answers", answers);
  }
  function startPage(params) {
    SetLandingPage(false);
  }
  function getQuestionsFunc(params) {
    axios
      .post(`${baseUrl}api/user/getQuestionsByQuestionType`, {
        questionType: "fillUpsListening",
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
                <PlaceInputInString
                  questionId={questions[currentQuestion].questionId}
                  text={questions[currentQuestion].para}
                  ref={practiceFillInTheBlanksRef}
                />
              </p>
            </div>
            {showAnswer == true ? (
              <p>{mapAnswerFunc(questions[currentQuestion].answer)}</p>
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

  function mapAnswerFunc(ansObj) {
    debugger;
    let ans = [];
    Object.entries(ansObj).map(([key, value]) =>
      ans.push(
        <span key={key}>
          {value}, 
        </span>
      )
    );
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

export default PracticeFillInTheBlanks;
