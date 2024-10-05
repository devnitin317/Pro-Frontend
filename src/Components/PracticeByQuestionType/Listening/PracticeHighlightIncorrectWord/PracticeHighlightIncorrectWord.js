import React, { useEffect, useRef, useState } from "react";
import TextToSpeech from "../../../CommonComponents/TextToSpeech/TextToSpeech";
import TextAreaWithWordCount from "../../../CommonComponents/TextAreaWithWordCount/TextAreaWithWordCount";
import { useDispatch, useSelector } from "react-redux";
import { resetCountDown } from "../../../CommonComponents/Countdown/countDownSlice";
import "./PracticeHighlightIncorrectWord.css";
import PlaceInputInString from "../../../CommonComponents/Listening/PlaceInputInString";
import HighLightInCorrectWord from "../../../CommonComponents/HighLightInCorrectWord/HighLightInCorrectWord";
import QuestionsFrontPage from "../../../CommonComponents/QuestionsFrontPage/QuestionsFrontPage";
// import PlaceInputInString from "../../../CommonComponents/PlaceInputInString/PlaceInputInString";
import axios from "axios";
function PracticeHighlightIncorrectWord() {
  let ques = [
    {
      questionId: 1,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "So far in our discussion of chemical reactions we have assumed that these reactions only go in one direction, the 'forward' direction, from left to right as we read it in an equation. That's why our 'arrowhead' points from left to right: reactants react together to make products. However, this is not exactly how things occur in 'nature'. In fact, practically every chemical reaction is reversible, meaning the products can also react together to 'reform' the reactants that they were made of.",
      text: "So far in our discussion of chemical 'equations' we have assumed that these reactions only go in one direction, the 'reverse' direction, from left to right as we read it in an equation. That's why our 'arrow' points from left to right: reactants react together to make products. However, this is not exactly how things occur in 'reality'. In fact, practically every chemical reaction is reversible, meaning the products can also react together to 'create' the reactants that they were made of.",
      answer:
        "So far in our discussion of chemical 'equations' we have assumed that these reactions only go in one direction, the 'reverse' direction, from left to right as we read it in an equation. That's why our 'arrow' points from left to right: reactants react together to make products. However, this is not exactly how things occur in 'reality'. In fact, practically every chemical reaction is reversible, meaning the products can also react together to 'create' the reactants that they were made of.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 2,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The Amazon rainforest is known for its vast 'biodiversity', housing millions of species of plants and animals. It plays a crucial role in regulating the Earth's climate and is often referred to as the 'lungs of the planet.' However, 'deforestation' poses a significant threat to this vital ecosystem.",
      text: "The Amazon rainforest is known for its vast 'biodiversity', housing millions of species of plants and 'creatures'. It plays a crucial role in regulating the Earth's climate and is often referred to as the 'lungs of the Earth.' However, 'deforestation' poses a significant threat to this vital 'habitat.'",
      answer:
        "The Amazon rainforest is known for its vast 'biodiversity', housing millions of species of plants and 'creatures'. It plays a crucial role in regulating the Earth's climate and is often referred to as the 'lungs of the Earth.' However, 'deforestation' poses a significant threat to this vital 'habitat.'",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 3,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Renewable energy sources, such as solar and wind power, are essential for reducing greenhouse gas 'emissions'. Transitioning to these energy sources can help combat climate change and promote 'sustainability'.",
      text: "Renewable energy sources, such as solar and 'wind' power, are essential for reducing 'pollution'. Transitioning to these energy sources can help combat climate change and promote 'environmental stability'.",
      answer:
        "Renewable energy sources, such as solar and 'wind' power, are essential for reducing 'pollution'. Transitioning to these energy sources can help combat climate change and promote 'environmental stability'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 4,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The human brain is one of the most complex 'organs' in the body. It is responsible for processing 'information', controlling movements, and regulating emotions. Understanding how the brain works is crucial for advancing medical science.",
      text: "The human brain is one of the most complex 'structures' in the body. It is responsible for processing 'data', controlling movements, and regulating 'emotions'. Understanding how the brain works is crucial for advancing 'healthcare' science.",
      answer:
        "The human brain is one of the most complex 'structures' in the body. It is responsible for processing 'data', controlling movements, and regulating 'emotions'. Understanding how the brain works is crucial for advancing 'healthcare' science.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 5,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The effects of climate change are becoming increasingly 'evident'. Rising temperatures, changing precipitation patterns, and more frequent extreme weather events are just a few examples of how our planet is responding to this 'crisis'.",
      text: "The effects of climate change are becoming increasingly 'clear'. Rising temperatures, changing 'weather' patterns, and more frequent extreme weather events are just a few examples of how our planet is responding to this 'emergency'.",
      answer:
        "The effects of climate change are becoming increasingly 'clear'. Rising temperatures, changing 'weather' patterns, and more frequent extreme weather events are just a few examples of how our planet is responding to this 'emergency'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 6,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The study of economics involves understanding how resources are allocated within a 'society'. It examines the production, distribution, and consumption of goods and 'services'.",
      text: "The study of 'economics' involves understanding how resources are allocated within a 'community'. It examines the production, distribution, and consumption of goods and 'products'.",
      answer:
        "The study of 'economics' involves understanding how resources are allocated within a 'community'. It examines the production, distribution, and consumption of goods and 'products'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 7,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Literature serves as a reflection of society, capturing the thoughts, feelings, and experiences of 'individuals'. It allows readers to explore different perspectives and understand the human condition.",
      text: "Literature serves as a reflection of 'culture', capturing the thoughts, feelings, and experiences of 'people'. It allows readers to explore different perspectives and understand the human 'experience'.",
      answer:
        "Literature serves as a reflection of 'culture', capturing the thoughts, feelings, and experiences of 'people'. It allows readers to explore different perspectives and understand the human 'experience'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 8,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Technological advancements have transformed the way we communicate, work, and live. From smartphones to social media, technology has made it easier to connect with 'others'.",
      text: "Technological advancements have transformed the way we 'connect', work, and live. From 'smartphones' to social media, technology has made it easier to connect with 'people'.",
      answer:
        "Technological advancements have transformed the way we 'connect', work, and live. From 'smartphones' to social media, technology has made it easier to connect with 'people'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 9,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Health care systems around the world are facing numerous 'challenges', including rising costs and access to quality care. Reforming these systems is essential for improving health outcomes.",
      text: "Health care systems around the world are facing numerous 'issues', including rising costs and access to quality 'treatment'. Reforming these systems is essential for improving health 'results'.",
      answer:
        "Health care systems around the world are facing numerous 'issues', including rising costs and access to quality 'treatment'. Reforming these systems is essential for improving health 'results'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 10,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Cultural diversity enriches societies by bringing together different perspectives, traditions, and ideas. It fosters creativity and innovation, contributing to social and economic growth.",
      text: "Cultural diversity enriches 'communities' by bringing together different perspectives, traditions, and 'ideas'. It fosters creativity and 'originality', contributing to social and economic 'development'.",
      answer:
        "Cultural diversity enriches 'communities' by bringing together different perspectives, traditions, and 'ideas'. It fosters creativity and 'originality', contributing to social and economic 'development'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 11,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The importance of mental health awareness is gaining recognition. Understanding mental health issues can lead to better support and resources for those in need.",
      text: "The importance of mental health awareness is gaining 'attention'. Understanding mental health issues can lead to better 'assistance' and resources for those in 'need'.",
      answer:
        "The importance of mental health awareness is gaining 'attention'. Understanding mental health issues can lead to better 'assistance' and resources for those in 'need'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Urbanization has led to significant changes in society, including shifts in population density and the development of infrastructure. It presents both opportunities and challenges for urban planners.",
      text: "Urbanization has led to significant changes in 'society', including shifts in population 'density' and the development of 'infrastructure'. It presents both opportunities and challenges for urban 'developers'.",
      answer:
        "Urbanization has led to significant changes in 'society', including shifts in population 'density' and the development of 'infrastructure'. It presents both opportunities and challenges for urban 'developers'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 13,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The significance of early childhood education cannot be overstated. It lays the foundation for lifelong learning and development.",
      text: "The significance of early childhood education cannot be 'underestimated'. It lays the foundation for lifelong 'education' and development.",
      answer:
        "The significance of early childhood education cannot be 'underestimated'. It lays the foundation for lifelong 'education' and development.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The rise of artificial intelligence is transforming industries and changing the way we work. It offers both opportunities and ethical considerations.",
      text: "The rise of artificial intelligence is transforming 'sectors' and changing the way we work. It offers both opportunities and ethical 'issues'.",
      answer:
        "The rise of artificial intelligence is transforming 'sectors' and changing the way we work. It offers both opportunities and ethical 'issues'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 15,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Sustainable practices are essential for preserving the environment for future generations. They include reducing waste, conserving energy, and protecting natural resources.",
      text: "Sustainable practices are essential for preserving the 'ecosystem' for future generations. They include reducing 'trash', conserving energy, and protecting natural 'assets'.",
      answer:
        "Sustainable practices are essential for preserving the 'ecosystem' for future generations. They include reducing 'trash', conserving energy, and protecting natural 'assets'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The role of government in regulating industries is crucial for public safety. Effective regulations help protect consumers and the environment.",
      text: "The role of government in regulating 'sectors' is crucial for public safety. Effective regulations help protect 'buyers' and the environment.",
      answer:
        "The role of government in regulating 'sectors' is crucial for public safety. Effective regulations help protect 'buyers' and the environment.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 17,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The impact of globalization on local economies is profound. It creates new opportunities for trade and cultural exchange but also presents challenges.",
      text: "The impact of globalization on local 'markets' is profound. It creates new 'opportunities' for trade and cultural 'interaction' but also presents challenges.",
      answer:
        "The impact of globalization on local 'markets' is profound. It creates new 'opportunities' for trade and cultural 'interaction' but also presents challenges.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 18,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The significance of biodiversity is critical for maintaining healthy ecosystems. Protecting various species ensures ecological balance.",
      text: "The significance of biodiversity is critical for maintaining healthy 'environments'. Protecting various 'organisms' ensures ecological balance.",
      answer:
        "The significance of biodiversity is critical for maintaining healthy 'environments'. Protecting various 'organisms' ensures ecological balance.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 19,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The arts play a vital role in society by fostering creativity and providing a means of expression. They reflect cultural values and challenge societal norms.",
      text: "The arts play a vital role in 'communities' by fostering 'creativity' and providing a means of 'articulation'. They reflect cultural values and challenge societal 'standards'.",
      answer:
        "The arts play a vital role in 'communities' by fostering 'creativity' and providing a means of 'articulation'. They reflect cultural values and challenge societal 'standards'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 20,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The importance of teamwork in achieving organizational goals is well-documented. Collaborative efforts lead to improved outcomes and innovation.",
      text: "The importance of teamwork in achieving 'business' goals is well-documented. Collaborative efforts lead to improved 'results' and innovation.",
      answer:
        "The importance of teamwork in achieving 'business' goals is well-documented. Collaborative efforts lead to improved 'results' and innovation.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },

    {
      questionId: 31,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The role of social media in shaping public opinion is significant. It allows individuals to share their views and engage in discussions.",
      text: "The role of social media in shaping public 'perception' is significant. It allows 'users' to share their views and engage in 'conversations'.",
      answer:
        "The role of social media in shaping public 'perception' is significant. It allows 'users' to share their views and engage in 'conversations'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 32,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The significance of financial literacy is increasingly recognized in today's economy. Understanding financial concepts enables individuals to make informed decisions.",
      text: "The significance of financial 'understanding' is increasingly recognized in today's economy. Understanding financial concepts enables 'people' to make informed 'choices'.",
      answer:
        "The significance of financial 'understanding' is increasingly recognized in today's economy. Understanding financial concepts enables 'people' to make informed 'choices'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 33,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Climate change is a pressing global issue that affects all aspects of life. It requires immediate action from individuals, businesses, and governments.",
      text: "Climate change is a pressing global 'challenge' that affects all aspects of life. It requires immediate action from 'citizens', businesses, and governments.",
      answer:
        "Climate change is a pressing global 'challenge' that affects all aspects of life. It requires immediate action from 'citizens', businesses, and governments.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 34,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The importance of community service in personal development is significant. Volunteering fosters a sense of responsibility and empathy.",
      text: "The importance of community service in personal 'growth' is significant. Volunteering fosters a sense of 'duty' and empathy.",
      answer:
        "The importance of community service in personal 'growth' is significant. Volunteering fosters a sense of 'duty' and empathy.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 35,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The role of innovation in driving economic growth is crucial. Innovative ideas lead to new products and services that can benefit society.",
      text: "The role of innovation in driving economic 'progress' is crucial. Innovative ideas lead to new 'solutions' and services that can benefit society.",
      answer:
        "The role of innovation in driving economic 'progress' is crucial. Innovative ideas lead to new 'solutions' and services that can benefit society.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 36,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The significance of mental health support in schools is crucial for student well-being. Providing resources can improve academic performance.",
      text: "The significance of mental health 'assistance' in schools is crucial for student well-being. Providing 'support' can improve academic 'success'.",
      answer:
        "The significance of mental health 'assistance' in schools is crucial for student well-being. Providing 'support' can improve academic 'success'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 37,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Effective leadership involves the ability to inspire and motivate others. It requires strong communication skills and a clear vision.",
      text: "Effective leadership involves the ability to inspire and 'encourage' others. It requires strong communication 'abilities' and a clear 'goal'.",
      answer:
        "Effective leadership involves the ability to inspire and 'encourage' others. It requires strong communication 'abilities' and a clear 'goal'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 38,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The effects of pollution on health are well-documented. Exposure to harmful substances can lead to serious medical conditions.",
      text: "The effects of 'contamination' on health are well-documented. Exposure to harmful 'chemicals' can lead to serious medical 'issues'.",
      answer:
        "The effects of 'contamination' on health are well-documented. Exposure to harmful 'chemicals' can lead to serious medical 'issues'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 39,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The significance of civic engagement in a democracy cannot be overstated. Active participation is essential for a healthy society.",
      text: "The significance of civic 'involvement' in a democracy cannot be 'underestimated'. Active participation is essential for a healthy 'community'.",
      answer:
        "The significance of civic 'involvement' in a democracy cannot be 'underestimated'. Active participation is essential for a healthy 'community'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 40,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Social entrepreneurship focuses on creating social value rather than just profit. It addresses societal challenges through innovative solutions.",
      text: "Social entrepreneurship focuses on creating social 'impact' rather than just profit. It addresses societal 'issues' through innovative solutions.",
      answer:
        "Social entrepreneurship focuses on creating social 'impact' rather than just profit. It addresses societal 'issues' through innovative solutions.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 41,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The role of mentorship in professional development is invaluable. Mentors provide guidance and support to help individuals grow.",
      text: "The role of mentorship in professional 'advancement' is invaluable. Mentors provide 'advice' and support to help individuals grow.",
      answer:
        "The role of mentorship in professional 'advancement' is invaluable. Mentors provide 'advice' and support to help individuals grow.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 42,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Financial literacy is essential for making informed decisions about money management. It helps individuals understand budgeting, saving, and investing.",
      text: "Financial literacy is essential for making informed decisions about money 'handling'. It helps individuals understand budgeting, saving, and 'investing'.",
      answer:
        "Financial literacy is essential for making informed decisions about money 'handling'. It helps individuals understand budgeting, saving, and 'investing'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 43,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Public speaking is a valuable skill that can enhance career opportunities. It allows individuals to communicate their ideas effectively.",
      text: "Public speaking is a valuable skill that can enhance career 'prospects'. It allows individuals to communicate their 'thoughts' effectively.",
      answer:
        "Public speaking is a valuable skill that can enhance career 'prospects'. It allows individuals to communicate their 'thoughts' effectively.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 44,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The significance of nutrition in maintaining health is often overlooked. A balanced diet is crucial for overall well-being.",
      text: "The significance of nutrition in maintaining 'wellness' is often overlooked. A balanced diet is crucial for overall 'health'.",
      answer:
        "The significance of nutrition in maintaining 'wellness' is often overlooked. A balanced diet is crucial for overall 'health'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 45,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Environmental conservation efforts are essential for protecting wildlife and natural habitats. They ensure the sustainability of ecosystems.",
      text: "Environmental conservation efforts are essential for protecting 'species' and natural 'environments'. They ensure the sustainability of 'ecosystems'.",
      answer:
        "Environmental conservation efforts are essential for protecting 'species' and natural 'environments'. They ensure the sustainability of 'ecosystems'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 46,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The role of mentorship in professional development is invaluable. Mentors provide guidance and support to help individuals grow.",
      text: "The role of mentorship in professional 'advancement' is invaluable. Mentors provide 'advice' and support to help individuals grow.",
      answer:
        "The role of mentorship in professional 'advancement' is invaluable. Mentors provide 'advice' and support to help individuals grow.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 47,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The significance of civic engagement in a democracy cannot be overstated. Active participation is essential for a healthy society.",
      text: "The significance of civic 'involvement' in a democracy cannot be 'underestimated'. Active participation is essential for a healthy 'community'.",
      answer:
        "The significance of civic 'involvement' in a democracy cannot be 'underestimated'. Active participation is essential for a healthy 'community'.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 48,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Social entrepreneurship focuses on creating social value rather than just profit. It addresses societal challenges through innovative solutions.",
      text: "Social entrepreneurship focuses on creating social 'impact' rather than just profit. It addresses societal 'issues' through innovative solutions.",
      answer:
        "Social entrepreneurship focuses on creating social 'impact' rather than just profit. It addresses societal 'issues' through innovative solutions.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 49,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The role of mentorship in professional development is invaluable. Mentors provide guidance and support to help individuals grow.",
      text: "The role of mentorship in professional 'advancement' is invaluable. Mentors provide 'advice' and support to help individuals grow.",
      answer:
        "The role of mentorship in professional 'advancement' is invaluable. Mentors provide 'advice' and support to help individuals grow.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 50,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Public speaking is a valuable skill that can enhance career opportunities. It allows individuals to communicate their ideas effectively.",
      text: "Public speaking is a valuable skill that can enhance career 'prospects'. It allows individuals to communicate their 'thoughts' effectively.",
      answer:
        "Public speaking is a valuable skill that can enhance career 'prospects'. It allows individuals to communicate their 'thoughts' effectively.",
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
  ];

  const [questions, setQuestions] = useState(ques);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState({ answer: "" });
  const [landingPage, SetLandingPage] = useState(true);

  const [summary, setSummary] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const practiceHighlightIncorrectWordRef = useRef(null); //ref

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
      resetCountDown({ reset: `PracticeSelectMissingWord${questionId}` })
    );
    if (practiceHighlightIncorrectWordRef.current) {
      if (
        "dataFromHighLightInCorrectWord" in
        practiceHighlightIncorrectWordRef.current
      ) {
        let dataFromHighLightInCorrectWord =
          practiceHighlightIncorrectWordRef.current.dataFromHighLightInCorrectWord();
        setAnswers([
          ...answers,
          { questionId, answer: dataFromHighLightInCorrectWord },
        ]);
      }
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
        questionType: "highlightIncorrectWord",
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
                <HighLightInCorrectWord
                  questionId={questions[currentQuestion].questionId}
                  summary={questions[currentQuestion].summary}
                  ref={practiceHighlightIncorrectWordRef}
                />
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

export default PracticeHighlightIncorrectWord;
