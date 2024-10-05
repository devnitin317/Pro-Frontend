import React, { useState } from "react";
import MockTestCommon from "../MockTestCommon";
import "./FullMockTest.css";
function FullMockTest({ hideNav }) {
  const mock1 = [
    {
      questionId: 1,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "Which of the following most accurately summarizes the opinion of the author in the text?",
      para: "In many ways Britten's most ambitious effort is the War Requiem of 1961, a flawed but still impressive work for chorus, soloists, and orchestra. It weaves together the traditional Latin Mass for the Dead with antiwar poems by Wilfrid Owen, a young officer killed in World War I. The point of War Requiem is how the words of the liturgical text are reinterpreted and often rendered hollow by the realities of death in war. In this work we see Britten's prodigal inconsistencies on display. For all its problems, the War Requiem will probably survive as one of our time's most impassioned indictments of war and its heroic myth.",
      options: [
        "Motivation is worth more than intelligence in learning.",
        "Language can be effectively learnt through play.",
        "There is no single best method for learning.",
        "Teachers should regularly change their methods.",
      ],
      answer: "There is no single best method for learning.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the main theme of the passage?",
      para: "The concept of sustainability has gained significant traction in recent years, emphasizing the need for responsible management of resources to ensure ecological balance. This involves not only environmental considerations but also social and economic dimensions, making it a multifaceted approach to development.",
      options: [
        "Sustainability is solely about environmental issues.",
        "Sustainability encompasses environmental, social, and economic factors.",
        "Sustainability is a new concept.",
        "Sustainability is only relevant to developed countries.",
      ],
      answer:
        "Sustainability encompasses environmental, social, and economic factors.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 3,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "Which of the following statements are true about the benefits of exercise?",
      para: "Regular exercise is essential for maintaining physical health. It helps in weight management, improves mental health, and boosts overall energy levels.",
      options: [
        "Exercise can help manage weight.",
        "Exercise has no impact on mental health.",
        "Exercise increases energy levels.",
        "Exercise is only beneficial for physical health.",
      ],
      answer: [
        "Exercise can help manage weight.",
        "Exercise increases energy levels.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the key features of effective communication?",
      para: "Effective communication involves clarity, active listening, and empathy. It ensures that the message is understood and fosters positive relationships.",
      options: [
        "Clarity is essential for effective communication.",
        "Active listening enhances understanding.",
        "Empathy is irrelevant in communication.",
        "Effective communication fosters positive relationships.",
      ],
      answer: [
        "Clarity is essential for effective communication.",
        "Active listening enhances understanding.",
        "Effective communication fosters positive relationships.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 5,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "This short book has been concerned with the main tool of learning: language. Many children, particularly those in the industrial areas of the country, start their educational lives with this tool blunt, and live their early years in home circumstances which often conspire to keep it 'blank' with the result, as the young sixth-former wrote in Chapter One, that even he becomes increasingly conscious of his 'blank' of fluency, which may become the most prominent manifestation of his embarrassment and discomfort. To 'blank' this, to give the child the confidence, which derives from 'blank' of speech and writing, is surely one of the prime tasks of the country's schools. There is no single recipe for a 'blank' to do this well, but it may be helpful to consider the conditions, which appear to be 'blank' to the primary schools whose work has been quoted.",
      options: [
        {
          id: 1,
          options: ["sharp", "same", "different", "blunt", "young"],
        },
        {
          id: 2,
          options: ["shortage", "difficulty", "lack", "weakness", "gap"],
        },
        { id: 3, options: ["miss", "avoid", "waste", "spare", "pass"] },
        {
          id: 4,
          options: ["ease", "skill", "comfort", "utility", "ability"],
        },
        { id: 5, options: ["meal", "lesson", "way", "teaching", "style"] },
        {
          id: 6,
          options: ["frequent", "clear", "similar", "shared", "common"],
        },
      ],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "This short book has been concerned with the main tool of learning: language. Many children, particularly those in the industrial areas of the country, start their educational lives with this tool blunt, and live their early years in home circumstances which often conspire to keep it 'blank' with the result, as the young sixth-former wrote in Chapter One, that even he becomes increasingly conscious of his 'blank' of fluency, which may become the most prominent manifestation of his embarrassment and discomfort. To 'blank' this, to give the child the confidence, which derives from 'blank' of speech and writing, is surely one of the prime tasks of the country's schools. There is no single recipe for a 'blank' to do this well, but it may be helpful to consider the conditions, which appear to be 'blank' to the primary schools whose work has been quoted.",
      options: [
        {
          id: 1,
          options: ["sharp", "same", "different", "blunt", "young"],
        },
        {
          id: 2,
          options: ["shortage", "difficulty", "lack", "weakness", "gap"],
        },
        { id: 3, options: ["miss", "avoid", "waste", "spare", "pass"] },
        {
          id: 4,
          options: ["ease", "skill", "comfort", "utility", "ability"],
        },
        { id: 5, options: ["meal", "lesson", "way", "teaching", "style"] },
        {
          id: 6,
          options: ["frequent", "clear", "similar", "shared", "common"],
        },
      ],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },

    {
      questionId: 7,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Considering their lingering reputation as man-killers, it's hardly surprising that hackles are raised any time someone brings up the idea of 'blank' wolves to the Scottish Highlands. Debate on this topic has been raging for years; 'blank' would like to see the Highland environment returned to its natural state. Opponents 'blank' the animals' 'blank' for killing livestock.",
      options: [
        { id: 1, value: "proponents" },
        { id: 2, value: "activists" },
        { id: 3, value: "reacquainting" },
        { id: 4, value: "propensity" },
        { id: 5, value: "reintroducing" },
        { id: 6, value: "cite" },
        { id: 7, value: "accuse" },
      ],
      answers: ["reintroducing", "proponents", "cite", "propensity"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The concept of 'blank' has evolved over the years, with many experts arguing that it is essential for 'blank' in modern society. However, critics 'blank' that it can lead to 'blank' and a lack of genuine connection.",
      options: [
        { id: 1, value: "technology" },
        { id: 2, value: "communication" },
        { id: 3, value: "argue" },
        { id: 4, value: "isolation" },
        { id: 5, value: "innovation" },
        { id: 6, value: "support" },
        { id: 7, value: "promote" },
      ],
      answers: ["technology", "communication", "argue", "isolation"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "But in Scotland three banks are still allowed to issue banknotes.",
        "When this bank was founded in 1695, Scots coinage was in short supply and of uncertain value, compared with English, Dutch, Flemish or French coin.",
        "To face growth of trade it was deemed necessary to remedy this lack of an adequate currency.",
        "The first Scottish bank to do this was the Bank of Scotland.",
        "In most countries it is only the government, through their central banks, who are permitted to issue currency.",
      ],
      answer: [
        "In most countries it is only the government, through their central banks, who are permitted to issue currency.",
        "But in Scotland three banks are still allowed to issue banknotes.",
        "The first Scottish bank to do this was the Bank of Scotland.",
        "When this bank was founded in 1695, Scots coinage was in short supply and of uncertain value, compared with English, Dutch, Flemish or French coin.",
        "To face growth of trade it was deemed necessary to remedy this lack of an adequate currency.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The concept of renewable energy has gained traction in recent years.",
        "Solar and wind power are among the most popular sources.",
        "Many countries are investing in renewable technologies.",
        "This shift is essential for combating climate change.",
        "Fossil fuels are being phased out in favor of cleaner alternatives.",
      ],
      answer: [
        "The concept of renewable energy has gained traction in recent years.",
        "Many countries are investing in renewable technologies.",
        "Solar and wind power are among the most popular sources.",
        "This shift is essential for combating climate change.",
        "Fossil fuels are being phased out in favor of cleaner alternatives.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },

    {
      questionId: 11,
      heading: "Read the passage below and summarize it using one sentence.",
      summary:
        "The significance of mental health in the workplace is gaining attention, with studies showing that employee well-being is linked to productivity and job satisfaction. Organizations are increasingly recognizing the need to support mental health through initiatives such as employee assistance programs, flexible work arrangements, and mental health training for managers. Creating a supportive work environment can reduce absenteeism and turnover rates while enhancing overall organizational performance. Employers are encouraged to prioritize mental health as part of their corporate responsibility and workplace culture.",
      sampleSummary:
        "Workplace mental health is crucial for productivity, prompting organizations to implement support initiatives and create a supportive environment.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      type: "highlightCorrectSummary",
      questionId: 12,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "Climate change is affecting global weather patterns, leading to more extreme weather events and rising sea levels.",
      options: [
        "Climate change has minimal effects on weather patterns.",
        "Rising sea levels are a direct consequence of climate change.",
        "Weather patterns are becoming more predictable due to climate change.",
        "Climate change is only a future concern.",
      ],
      answer: "Rising sea levels are a direct consequence of climate change.",
      moduleType: "listening",
    },
    {
      questionId: 13,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below.",
      summary:
        "Tobacco, mainly in the form of cigarettes, is one of the most widely-used drugs in the world. Over a billion adults legally smoke tobacco every day. The long-term health costs are high—for smokers themselves, and for the wider community in terms of health care costs and lost productivity. Do governments have a legitimate role to legislate to protect citizens from the harmful effects of their own decisions to smoke, or are such decisions up to the individual?",
      sampleSummary:
        "Governments have a legitimate role in legislating against smoking to protect public health and reduce healthcare costs, while still respecting individual freedom of choice.",
      type: "writeEssay",
      moduleType: "writing",
    },
    {
      questionId: 14,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible.",
      paragraph:
        "Once most animals reach adulthood, they stop growing. In contrast, even plants that are thousands of years old continue to grow new needles, add new wood, and produce cones and new flowers, almost as if parts of their bodies remained 'forever young'. The secrets of plant growth are regions of tissue that can produce cells that later develop into specialized tissues.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 15,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible.",
      paragraph:
        "Climate change is one of the most pressing challenges facing humanity today. It affects weather patterns, sea levels, and biodiversity across the globe.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it.",
      text: "The quick brown fox jumps over the lazy dog.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 17,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it.",
      text: "Climate change is one of the most pressing challenges today.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 18,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words.",
      text: "Interviewer: In an article that you wrote that I just read, you said you wished you could take everyone back to decades ago to look at the Florida Keys. Interviewee: Fifty years ago. Think about how much change has taken place in that short period of time. We have managed to consume on the order of 90% of the big fish in the ocean: the tunas, the swordfish, the sharks. They're mostly gone. Until recently people have had the belief that there isn't much we puny human beings can do to change the nature of the ocean. But in fact, we have, not just because of what we've been taking out, and the destructive means often applied to take fish and other creatures from the sea, but also what we're putting into the sea, either directly or what we put into the atmosphere that falls back into the sea. Interviewer: So if you were going to give a grade on the health of the oceans today, what would it be? Interviewee: Well, it depends on which aspect. Across the board. Huh. The oceans are in trouble. It's hard for me to assign a specific grade. Maybe C-.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 19,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words.",
      text: "Interviewer: In your recent research, you discussed the decline of bee populations. Interviewee: Yes, bee populations have been declining significantly due to habitat loss, pesticide use, and climate change. Bees are crucial for pollinating many crops, and their decline threatens food production and biodiversity. Interviewer: What can be done to protect bees? Interviewee: We can create bee-friendly habitats, reduce pesticide usage, and support local beekeepers to promote healthy bee populations.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 20,
      heading:
        "You will hear a question. Please give a simple and short answer.",
      text: "What is the key to effective leadership?",
      answer: "Communication",
      moduleType: "speaking",
      type: "shortAnswer",
    },
    {
      questionId: 21,
      heading:
        "You will hear a question. Please give a simple and short answer.",
      text: "What drives innovation in technology?",
      answer: "Creativity",
      moduleType: "speaking",
      type: "shortAnswer",
    },
    {
      questionId: 22,
      heading: "You will hear a recording.Type missing word in each blank",
      text: "Photosynthesis occurs primarily in the leaves of plants, where chlorophyll absorbs sunlight. This energy is then used to convert carbon dioxide and water into glucose and oxygen. The overall reaction can be summarized as 6CO2 + 6H2O → C6H12O6 + 6O2.",
      para: "Photosynthesis occurs primarily in the leaves of plants, where 'blank' absorbs sunlight. This energy is then used to convert 'blank' and water into glucose and oxygen. The overall reaction can be summarized as 'blank'.",
      answers: {
        1: "chlorophyll",
        2: "carbon dioxide",
        3: "6CO2 + 6H2O → C6H12O6 + 6O2",
      },
      moduleType: "listening",
      type: "fillUps",
    },
    {
      questionId: 23,
      heading: "You will hear a recording.Type missing word in each blank",
      text: "One of the most concerning effects of climate change is the increase in greenhouse gas levels, which leads to rising sea levels. This phenomenon threatens coastal communities and endangers biodiversity. Mitigating these impacts requires collective action from all nations.",
      para: "One of the most concerning effects of climate change is the increase in 'blank' levels, which leads to rising sea levels. This phenomenon threatens coastal communities and 'blank' biodiversity. Mitigating these impacts requires 'blank' action from all nations.",
      answers: {
        1: "greenhouse gas",
        2: "endangers",
        3: "collective",
      },
      moduleType: "listening",
      type: "fillUps",
    },
    {
      questionId: 24,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it.",
      text: "The rapid development of renewable energy sources is crucial for combating climate change.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 25,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it.",
      text: "Effective communication skills are essential for success in both personal and professional relationships.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 26,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The War Requiem by Benjamin Britten intertwines the Latin Mass with the themes of war and peace, reflecting on the horrors of conflict.",
      options: [
        "He finds the weaving together of the Latin Mass and antiwar poems to be quite effective.",
        "He is critical of Britten's inconsistencies as observed in the War Requiem.",
        "He admires the War Requiem of Britten but finds it far from perfect.",
        "He questions whether Britten's work will endure.",
      ],
      answer:
        "He is critical of Britten's inconsistencies as observed in the War Requiem.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 27,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "Climate change is affecting global weather patterns, leading to more extreme weather events and rising sea levels.",
      options: [
        "Climate change has minimal effects on weather patterns.",
        "Rising sea levels are a direct consequence of climate change.",
        "Weather patterns are becoming more predictable due to climate change.",
        "Climate change is only a future concern.",
      ],
      answer: "Rising sea levels are a direct consequence of climate change.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 28,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "So far in our discussion of chemical reactions we have assumed that these reactions only go in one direction, the forward direction, from left to right as we read it in an equation. That's why our arrowhead points from left to right: reactants react together to make products. However, this is not exactly how things occur in nature . In fact, practically every chemical reaction is reversible, meaning the products can also react together to reform the reactants that they were made of.",

      text: "So far in our discussion of chemical 'equations' we have assumed that these reactions only go in one direction, the 'reverse' direction, from left to right as we read it in an equation. That's why our 'arrow' points from left to right: reactants react together to make products. However, this is not exactly how things occur in 'reality'. In fact, practically every chemical reaction is reversible, meaning the products can also react together to 'create' the reactants that they were made of.",
      answer: ["reactions", "forward", "arrowhead", "nature", "reform"],
      type: "highlightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 29,
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
      questionId: 30,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses.",
      heading2:
        "What are the benefits of regular exercise mentioned by the speaker?",
      text: "Regular exercise is crucial for maintaining physical health. It helps improve cardiovascular fitness, boosts mood, and reduces stress. Additionally, it can enhance overall well-being and increase energy levels.",
      options: [
        "Improves cardiovascular fitness.",
        "Boosts mood and reduces stress.",
        "Increases risk of injury.",
        "Enhances overall well-being.",
      ],
      answer: [
        "Improves cardiovascular fitness.",
        "Boosts mood and reduces stress.",
        "Enhances overall well-being.",
      ],
      explanation:
        "The speaker emphasizes that regular exercise has multiple positive effects on physical and mental health.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 31,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses.",
      heading2:
        "What factors contribute to effective teamwork according to the speaker?",
      text: "Effective teamwork relies on clear communication, mutual respect, and shared goals. Team members should be open to feedback and willing to collaborate to achieve common objectives.",
      options: [
        "Clear communication is essential.",
        "Mutual respect among team members.",
        "Individual goals are prioritized.",
        "Collaboration to achieve common objectives.",
      ],
      answer: [
        "Clear communication is essential.",
        "Mutual respect among team members.",
        "Collaboration to achieve common objectives.",
      ],
      explanation:
        "The speaker highlights that successful teamwork is built on communication, respect, and collaboration.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 32,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response.",
      heading2: "What does the speaker suggest about teamwork?",
      text: "Teamwork is essential in achieving common goals. It allows individuals to combine their strengths and skills to produce better results.",
      options: [
        "Teamwork is less important than individual effort.",
        "Effective communication is key to successful teamwork.",
        "Teamwork can lead to confusion and delays.",
        "Only leaders benefit from teamwork.",
      ],
      answer: "Effective communication is key to successful teamwork.",
      explanation:
        "The speaker highlights that communication among team members is crucial for achieving success.",
      type: "single",
      moduleType: "listening",
    },
    {
      questionId: 33,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response.",
      heading2: "What is the speaker's opinion on online education?",
      text: "Online education provides flexibility and accessibility for students. It allows learners to study at their own pace and from any location.",
      options: [
        "Online education lacks the quality of traditional education.",
        "It is suitable only for self-motivated learners.",
        "It offers convenience and flexibility.",
        "Students prefer face-to-face interaction.",
      ],
      answer: "It offers convenience and flexibility.",
      explanation:
        "The speaker praises online education for its ability to accommodate different learning styles and schedules.",
      type: "single",
      moduleType: "listening",
    },
    {
      questionId: 34,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word.",
      heading2: "What word completes the speaker's statement about exercise?",
      text: "Regular exercise is essential for maintaining good health and can significantly improve your _ and overall well-being.",
      options: ["mood", "diet", "sleep", "stress"],
      answer: "mood",
      explanation:
        "The speaker emphasizes the positive impact of exercise on mental health, specifically mood enhancement.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 35,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word.",
      heading2: "What word completes the speaker's statement about teamwork?",
      text: "Successful teamwork requires effective communication and a _ of goals among all team members.",
      options: ["division", "collaboration", "disagreement", "confusion"],
      answer: "collaboration",
      explanation:
        "The speaker highlights the importance of working together towards shared goals in a team setting.",
      type: "missingWord",
      moduleType: "listening",
    },
  ];

  const mock2 = [
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "This short book has been concerned with the main tool of learning: language. Many children, particularly those in the industrial areas of the country, start their educational lives with this tool blunt, and live their early years in home circumstances which often conspire to keep it 'blank' with the result, as the young sixth-former wrote in Chapter One, that even he becomes increasingly conscious of his 'blank' of fluency, which may become the most prominent manifestation of his embarrassment and discomfort. To 'blank' this, to give the child the confidence, which derives from 'blank' of speech and writing, is surely one of the prime tasks of the country's schools. There is no single recipe for a 'blank' to do this well, but it may be helpful to consider the conditions, which appear to be 'blank' to the primary schools whose work has been quoted.",
      options: [
        { id: 1, options: ["sharp", "same", "different", "blunt", "young"] },
        {
          id: 2,
          options: ["shortage", "difficulty", "lack", "weakness", "gap"],
        },
        { id: 3, options: ["miss", "avoid", "waste", "spare", "pass"] },
        {
          id: 4,
          options: ["ease", "skill", "comfort", "utility", "ability"],
        },
        { id: 5, options: ["meal", "lesson", "way", "teaching", "style"] },
        {
          id: 6,
          options: ["frequent", "clear", "similar", "shared", "common"],
        },
      ],
      answers: ["blunt", "lack", "avoid", "ability", "way", "common"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "In the world of literature, the 'blank' of a story often determines its impact on the reader. A strong narrative can engage the audience and evoke 'blank' emotions. Writers use various techniques to create depth and 'blank' in their characters, making them relatable and memorable. Ultimately, the goal of storytelling is to 'blank' the reader's imagination and provoke thought.",
      options: [
        { id: 1, options: ["structure", "plot", "theme", "style"] },
        { id: 2, options: ["intense", "mixed", "complex", "contradictory"] },
        { id: 3, options: ["growth", "development", "change", "action"] },
        { id: 4, options: ["capture", "inspire", "entertain", "challenge"] },
      ],
      answers: ["plot", "intense", "development", "capture"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 1,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Culture encompasses the beliefs, behaviors, and values shared by a group of people. It shapes how individuals 'blank' the world around them and influences their interactions with others. Cultural norms dictate acceptable behavior and can vary significantly between 'blank'.",
      options: [
        { id: 1, value: "interpret" },
        { id: 2, value: "societies" },
        { id: 3, value: "communities" },
        { id: 4, value: "environments" },
      ],
      answers: ["interpret", "societies"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural identity refers to the sense of belonging to a particular culture or group. It is shaped by various factors, including language, traditions, and 'blank'. Individuals often express their cultural identity through art, music, and 'blank'.",
      options: [
        { id: 1, value: "heritage" },
        { id: 2, value: "values" },
        { id: 3, value: "beliefs" },
        { id: 4, value: "clothing" },
      ],
      answers: ["heritage", "values"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 1,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What is the main idea that the speaker is trying to convey in her comments?",
      para: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
      options: [
        "Motivation is worth more than intelligence in learning.",
        "Language can be effectively learnt through play.",
        "There is no single best method for learning.",
        "Teachers should regularly change their methods.",
      ],
      answers: [
        "There is no single best method for learning.",
        "Teachers should regularly change their methods.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the key elements of a well-structured paragraph?",
      para: "A well-structured paragraph typically includes a topic sentence that introduces the main idea, supporting sentences that provide details and examples, and a concluding sentence that reinforces the main point.",
      options: [
        "Coherence and unity",
        "Variety in sentence structure",
        "Appropriate use of transition words",
        "Conciseness and clarity",
      ],
      answers: [
        "Coherence and unity",
        "Appropriate use of transition words",
        "Conciseness and clarity",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 1,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "Which of the following most accurately summarizes the main idea of the text?",
      para: "Grammar is the set of rules that govern the structure of sentences in a language. It includes the arrangement of words, phrases, and clauses to convey meaning. Understanding grammar is essential for effective communication.",
      options: [
        "Grammar is unimportant in communication.",
        "Grammar rules are the same in every language.",
        "Grammar helps convey meaning in communication.",
        "Grammar only applies to written language.",
      ],
      answer: "Grammar helps convey meaning in communication.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the primary function of a subject in a sentence?",
      para: "The subject of a sentence is the person, place, thing, or idea that is doing or being something. It is essential for forming a complete thought and is typically accompanied by a verb.",
      options: [
        "To provide additional information.",
        "To indicate the action of the sentence.",
        "To clarify the meaning of the verb.",
        "To identify who or what the sentence is about.",
      ],
      answer: "To identify who or what the sentence is about.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 1,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Biodiversity refers to the variety of life on Earth, including the variety of species, genetic diversity, and ecosystem diversity.",
        "It plays a crucial role in maintaining ecosystem health and resilience.",
        "Biodiversity provides essential services such as pollination, nutrient cycling, and climate regulation.",
        "The loss of biodiversity can lead to ecosystem instability and reduced capacity to adapt to environmental changes.",
      ],
      answers: [
        "Biodiversity refers to the variety of life on Earth, including the variety of species, genetic diversity, and ecosystem diversity.",
        "It plays a crucial role in maintaining ecosystem health and resilience.",
        "Biodiversity provides essential services such as pollination, nutrient cycling, and climate regulation.",
        "The loss of biodiversity can lead to ecosystem instability and reduced capacity to adapt to environmental changes.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "There are three main levels of biodiversity: genetic diversity, species diversity, and ecosystem diversity.",
        "Genetic diversity refers to the variation of genes within a species.",
        "Species diversity encompasses the variety of species within a given area.",
        "Ecosystem diversity refers to the variety of ecosystems in a particular region.",
      ],
      answers: [
        "There are three main levels of biodiversity: genetic diversity, species diversity, and ecosystem diversity.",
        "Genetic diversity refers to the variation of genes within a species.",
        "Species diversity encompasses the variety of species within a given area.",
        "Ecosystem diversity refers to the variety of ecosystems in a particular region.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Biodiversity refers to the variety of life on Earth, including the diversity of species, ecosystems, and genetic variations within species. It is essential for maintaining the balance of ecosystems and providing resources for human survival.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "The loss of biodiversity poses a significant threat to global ecosystems. Factors such as habitat destruction, pollution, climate change, and overexploitation of resources contribute to the decline of species and ecosystems.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 1,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "A balanced diet is essential for maintaining good health.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Regular exercise helps reduce the risk of chronic diseases.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 1,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins is essential for maintaining good health. It provides the necessary nutrients for proper bodily function and reduces the risk of chronic diseases.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Regular exercise, such as brisk walking, jogging, or swimming, for at least 150 minutes per week helps reduce the risk of chronic diseases like heart disease, type 2 diabetes, and certain types of cancer.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 1,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the most important thing to do when making a decision?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Think",
    },
    {
      questionId: 2,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see something suspicious?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Report",
    },
    {
      questionId: 1,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "The vocabulary of a language includes all the words and phrases used by its speakers.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 2,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Expanding your vocabulary can enhance your communication skills.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 1,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What are the key components of effective communication mentioned by the speaker?",
      text: "Effective communication involves active listening, clear expression of ideas, and non-verbal cues. It is essential for building relationships and ensuring mutual understanding.",
      options: [
        "Active listening is important.",
        "Clear expression of ideas is essential.",
        "Non-verbal cues are irrelevant.",
        "Building relationships requires effective communication.",
      ],
      answer: [
        "Active listening is important.",
        "Clear expression of ideas is essential.",
        "Building relationships requires effective communication.",
      ],
      explanation:
        "The speaker emphasizes that active listening, clarity in expression, and non-verbal cues are crucial for effective communication.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 2,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker suggest about the importance of grammar?",
      text: "Grammar provides the structure and rules that allow us to communicate clearly and effectively. It is essential for understanding the meaning of sentences and conveying ideas accurately.",
      options: [
        "Grammar is optional in casual conversation.",
        "Grammar is essential for clear communication.",
        "Grammar rules can be ignored.",
        "Grammar helps convey ideas accurately.",
      ],
      answer: [
        "Grammar is essential for clear communication.",
        "Grammar helps convey ideas accurately.",
      ],
      explanation:
        "The speaker highlights that grammar is crucial for clarity and accuracy in communication.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 1,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the speaker suggest about vocabulary and communication?",
      text: "Expanding your vocabulary can enhance your ability to communicate effectively. By having a wide range of words at your disposal, you can express your thoughts and ideas more clearly and precisely.",
      options: [
        "Vocabulary is not important for communication.",
        "Effective communication relies solely on body language.",
        "Expanding vocabulary can improve communication skills.",
        "Vocabulary and communication are unrelated.",
      ],
      answer: "Expanding vocabulary can improve communication skills.",
      explanation:
        "The speaker emphasizes that having a rich vocabulary can enhance one's ability to communicate effectively.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 2,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about synonyms?",
      text: "Synonyms are words that have very similar meanings. They allow you to avoid repetition and add variety to your writing and speech. Using synonyms can make your language more engaging and precise.",
      options: [
        "Synonyms are words with completely different meanings.",
        "Synonyms should be avoided in writing and speech.",
        "Synonyms are useful for adding variety to language.",
        "Synonyms are not important for effective communication.",
      ],
      answer: "Synonyms are useful for adding variety to language.",
      explanation:
        "The speaker suggests that using synonyms can add variety and richness to one's language.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 1,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about vocabulary?",
      text: "Expanding your vocabulary can enhance your 'blank' skills and improve communication.",
      options: ["writing", "reading", "speaking", "listening"],
      answer: "communication",
      explanation:
        "The speaker emphasizes that having a rich vocabulary can enhance overall communication skills.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 2,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about synonyms?",
      text: "Synonyms are words that have 'blank' meanings.",
      options: ["opposite", "similar", "related", "different"],
      answer: "similar",
      explanation:
        "The speaker defines synonyms as words that have the same or very close meanings.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 1,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "For millions of years, Mediterranean sea turtles have been coming to the shore of southern Lebanon to lay their eggs. Every summer, their babies hatch and literally run for their lives on the strip of sand that separates their nests from the sea. An endangered species, they had been largely ignored in this part of Lebanon until two women set out to protect them. Mona Khalil was inspired by a walk on the beach during a visit to her homeland, when she first saw the turtles. Upon learning that they were close to disappearing from her country, Khalil decided to come back and do something about them. The next year, 2000, she returned and teamed up with Habiba Fayed, who shares her passion for the environment. They opened a bed-and-breakfast in the Khalil family home to finance their efforts. Guests could simply vacation or, in the spirit of ecotourism, they could help the owners protect the turtles' nests and keep the beach clean. Female turtles travel to the exact spot where they were born to dig their nests in the sand, laying an average of 70 to 100 eggs. This is the moment when the women intervene. They protect the nests from predators by burying an iron grid in the sand above the eggs. The spaces on the grid are large enough to allow the baby turtles to emerge after a month and find their way to the sea... and to a chance at life.",
      sampleSummary:
        "Two women in Lebanon are protecting endangered Mediterranean sea turtles by safeguarding their nests and promoting ecotourism.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      questionId: 1,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "For millions of years, Mediterranean sea turtles have been coming to the shore of southern Lebanon to lay their eggs. Every summer, their babies hatch and literally run for their lives on the strip of sand that separates their nests from the sea. An endangered species, they had been largely ignored in this part of Lebanon until two women set out to protect them. Mona Khalil was inspired by a walk on the beach during a visit to her homeland, when she first saw the turtles. Upon learning that they were close to disappearing from her country, Khalil decided to come back and do something about them. The next year, 2000, she returned and teamed up with Habiba Fayed, who shares her passion for the environment. They opened a bed-and-breakfast in the Khalil family home to finance their efforts. Guests could simply vacation or, in the spirit of ecotourism, they could help the owners protect the turtles' nests and keep the beach clean. Female turtles travel to the exact spot where they were born to dig their nests in the sand, laying an average of 70 to 100 eggs. This is the moment when the women intervene. They protect the nests from predators by burying an iron grid in the sand above the eggs. The spaces on the grid are large enough to allow the baby turtles to emerge after a month and find their way to the sea... and to a chance at life.",
      sampleSummary:
        "Two women in Lebanon are protecting endangered Mediterranean sea turtles by safeguarding their nests and promoting ecotourism.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
  ];
  const mock3 = [
    {
      questionId: 3,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Conservation efforts aim to protect and restore biodiversity through various strategies, including the establishment of protected areas, wildlife corridors, and sustainable resource management practices.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Ecosystems provide essential services, such as clean air and water, pollination of crops, and climate regulation. The loss of biodiversity can disrupt these services, leading to negative impacts on human health and well-being.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 3,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Stress can have negative impacts on both physical and mental health.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Vaccination is an effective way to prevent the spread of infectious diseases.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 1,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Biodiversity refers to the variety of life on Earth, including the diversity of species, ecosystems, and genetic variations within species. It is essential for maintaining the balance of ecosystems and providing resources for human survival.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "The loss of biodiversity poses a significant threat to global ecosystems. Factors such as habitat destruction, pollution, climate change, and overexploitation of resources contribute to the decline of species and ecosystems.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 1,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the main purpose of grammar?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Structure",
    },
    {
      questionId: 2,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the function of a noun in a sentence?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Subject",
    },
    {
      questionId: 3,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Synonyms are words that have similar meanings.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Antonyms are words that have opposite meanings.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 1,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What are the main functions of grammar mentioned by the speaker?",
      text: "Grammar provides the structure and rules that allow us to communicate clearly and effectively. It helps ensure that sentences are grammatically correct and convey the intended meaning. Without proper grammar, communication can become confusing and ambiguous.",
      options: [
        "Grammar ensures clear communication.",
        "Grammar is only important in formal writing.",
        "Grammar provides the structure for language.",
        "Grammar rules are always flexible.",
      ],
      answer: [
        "Grammar ensures clear communication.",
        "Grammar provides the structure for language.",
      ],
      explanation:
        "The speaker emphasizes that grammar is essential for clear communication by providing the necessary structure and rules.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 2,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What are the key aspects of subject-verb agreement mentioned by the speaker?",
      text: "Subject-verb agreement is crucial for constructing grammatically correct sentences. The verb must agree in number with the subject, ensuring that singular subjects take singular verbs and plural subjects take plural verbs. Proper subject-verb agreement helps maintain clarity and coherence in writing.",
      options: [
        "Singular subjects take singular verbs.",
        "Plural subjects take plural verbs.",
        "Subject-verb agreement is optional.",
        "Subject-verb agreement ensures clarity.",
      ],
      answer: [
        "Singular subjects take singular verbs.",
        "Plural subjects take plural verbs.",
        "Subject-verb agreement ensures clarity.",
      ],
      explanation:
        "The speaker highlights the importance of subject-verb agreement in maintaining grammatical accuracy and clarity.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 3,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about antonyms?",
      text: "Antonyms are words that have opposite meanings. Understanding antonyms can help you grasp the full range and nuances of a word's meaning. Knowing antonyms can also improve your ability to make comparisons and contrasts in your writing and speech.",
      options: [
        "Antonyms are not important for understanding vocabulary.",
        "Antonyms are words with very similar meanings.",
        "Antonyms are useful for understanding the full meaning of a word.",
        "Antonyms should be avoided in writing and speech.",
      ],
      answer:
        "Antonyms are useful for understanding the full meaning of a word.",
      explanation:
        "The speaker suggests that knowing antonyms helps comprehend the complete range of a word's meaning.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 4,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about context clues?",
      text: "Context clues are words or phrases in the surrounding text that can help you determine the meaning of an unfamiliar word. By using context clues, you can often infer the meaning without needing to consult a dictionary, making it a valuable skill for improving vocabulary.",
      options: [
        "Context clues are not useful for understanding unfamiliar words.",
        "Context clues should be used instead of dictionaries.",
        "Context clues can help infer the meaning of unknown words.",
        "Context clues are only useful for advanced vocabulary learners.",
      ],
      answer: "Context clues can help infer the meaning of unknown words.",
      explanation:
        "The speaker emphasizes that using context clues can help deduce the meanings of unfamiliar vocabulary.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 3,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about antonyms?",
      text: "Antonyms are words that have 'blank' meanings.",
      options: ["similar", "related", "opposite", "different"],
      answer: "opposite",
      explanation:
        "The speaker defines antonyms as words that have meanings that are the opposite of each other.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 4,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about context clues?",
      text: "Context clues can help you determine the 'blank' of unfamiliar words.",
      options: ["spelling", "pronunciation", "meaning", "definition"],
      answer: "meaning",
      explanation:
        "The speaker emphasizes that context clues can help infer the meanings of words that are unfamiliar to the reader.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "The cat 'blank' on the mat, enjoying the warm sunlight streaming through the window. It 'blank' lazily, stretching its paws and yawning. The peaceful atmosphere was 'blank' by the occasional chirp of birds outside.",
      options: [
        { id: 1, options: ["sat", "sits", "sitting", "sit"] },
        { id: 2, options: ["lay", "laid", "lying", "lies"] },
        { id: 3, options: ["interrupted", "broken", "enhanced", "disrupted"] },
      ],
      answers: ["sat", "lay", "interrupted"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "She has been studying French for three years, and she 'blank' speak it quite well. However, she 'blank' to practice more to improve her fluency. Her goal is to 'blank' a conversation with native speakers during her trip to Paris.",
      options: [
        { id: 1, options: ["can", "could", "may", "might"] },
        { id: 2, options: ["wants", "needs", "hopes", "desires"] },
        { id: 3, options: ["start", "continue", "finish", "join"] },
      ],
      answers: ["can", "needs", "start"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 1,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Technology has transformed the way we communicate, work, and live. The 'blank' of the internet has made information accessible to anyone with a connection. Social media platforms allow individuals to 'blank' with others across the globe, fostering connections and collaborations. However, the rapid advancement of technology also raises concerns about privacy and security.",
      options: [
        { id: 1, value: "advent" },
        { id: 2, value: "interact" },
        { id: 3, value: "disrupt" },
        { id: 4, value: "connect" },
      ],
      answers: ["advent", "interact"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Artificial Intelligence (AI) is a branch of technology that aims to create machines capable of 'blank' tasks that typically require human intelligence. This includes abilities such as learning, reasoning, and problem-solving. AI has applications in various fields, including healthcare, finance, and 'blank'.",
      options: [
        { id: 1, value: "performing" },
        { id: 2, value: "manufacturing" },
        { id: 3, value: "transportation" },
        { id: 4, value: "entertainment" },
      ],
      answers: ["performing", "transportation"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 1,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What is the main idea that the speaker is trying to convey in her comments?",
      para: "An English paragraph for reading is a concise piece of text composed of one or more sentences that convey a specific idea, information, or story.",
      options: [
        "Motivation is worth more than intelligence in learning.",
        "Language can be effectively learnt through play.",
        "There is no single best method for learning.",
        "Teachers should regularly change their methods.",
      ],
      answers: [
        "There is no single best method for learning.",
        "Teachers should regularly change their methods.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the key elements of a well-structured paragraph?",
      para: "A well-structured paragraph typically includes a topic sentence that introduces the main idea, supporting sentences that provide details and examples, and a concluding sentence that reinforces the main point.",
      options: [
        "Coherence and unity",
        "Variety in sentence structure",
        "Appropriate use of transition words",
        "Conciseness and clarity",
      ],
      answers: [
        "Coherence and unity",
        "Appropriate use of transition words",
        "Conciseness and clarity",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 3,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the role of a verb in a sentence?",
      para: "A verb expresses an action, occurrence, or state of being. It is a crucial component of a sentence, as it tells what the subject does or what happens to the subject.",
      options: [
        "To describe the subject.",
        "To indicate the time of action.",
        "To connect the subject with additional information.",
        "To express an action or state.",
      ],
      answer: "To express an action or state.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the purpose of punctuation in writing?",
      para: "Punctuation marks are symbols that help clarify meaning and indicate pauses in writing. They guide readers through the text and help convey the intended tone and structure.",
      options: [
        "To make writing look more attractive.",
        "To indicate pauses and clarify meaning.",
        "To confuse the reader.",
        "To replace words.",
      ],
      answer: "To indicate pauses and clarify meaning.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 1,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Cognitive psychology studies how people acquire, process, and store information.",
        "It emerged in the 1950s as a response to behaviorism's focus on observable behaviors.",
        "This field incorporates various disciplines, including neuroscience, linguistics, and computer science.",
        "Cognitive psychologists use experimental methods to explore mental processes.",
      ],
      answers: [
        "Cognitive psychology studies how people acquire, process, and store information.",
        "It emerged in the 1950s as a response to behaviorism's focus on observable behaviors.",
        "Cognitive psychologists use experimental methods to explore mental processes.",
        "This field incorporates various disciplines, including neuroscience, linguistics, and computer science.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The rise of renewable energy sources has become a significant focus in combating climate change. Solar, wind, and hydroelectric power are increasingly being utilized as alternatives to fossil fuels. Governments around the world are investing in these technologies to reduce carbon emissions and promote sustainability. However, challenges such as initial costs, infrastructure development, and public acceptance remain.",
      sampleSummary:
        "Renewable energy sources like solar and wind are crucial in combating climate change, but face challenges in cost and acceptance.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      questionId: 1,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
      summary:
        "Tobacco, mainly in the form of cigarettes, is one of the most widely-used drugs in the world. Over a billion adults legally smoke tobacco every day. The long-term health costs are high—for smokers themselves, and for the wider community in terms of health care costs and lost productivity. Do governments have a legitimate role to legislate to protect citizens from the harmful effects of their own decisions to smoke, or are such decisions up to the individual?",
      sampleSummary:
        "Governments have a legitimate role in legislating against smoking to protect public health and reduce healthcare costs, while still respecting individual freedom of choice. Smoking imposes significant financial and social burdens on society, with smokers requiring more healthcare and contributing to higher insurance premiums for all. Governments can discourage smoking through measures like raising tobacco taxes, restricting advertising, and mandating graphic health warnings on cigarette packs. These policies have been shown to reduce smoking rates, especially among youth. However, outright bans on smoking may be too paternalistic, as adults should have the right to make their own choices about legal substances. Governments could instead focus on education campaigns to inform people about the dangers of smoking and provide cessation support for those who want to quit. Ultimately, a balanced approach is needed that combines reasonable regulations to limit smoking's societal costs with respect for individual liberty. Smoking is a complex issue without easy answers, but governments have a duty to protect public health while still preserving personal freedom as much as possible. Legislating against smoking, while controversial, is a legitimate and important role for governments to play.",
      type: "writeEssay",
      moduleType: "writing",
    },
  ];
  const mock4 = [
    {
      questionId: 5,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Exposure to intensely loud sounds leads to permanent damage of the hair cells which act as sound perceivers in the ear. Once damaged, the hair cells do not grow back, leading to noise-induced hearing loss.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Researchers found that couples with higher satisfaction in their relationship had greater neural synchronization while watching marriage-related clips. However, they don't always return to the same spot when we reopen our eyes.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Couples with higher satisfaction had greater neural synchronization.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Exposure to loud sounds damages hair cells permanently.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: What are the health benefits of a plant-based diet? Interviewee: A plant-based diet is associated with numerous health benefits, including lower risks of heart disease, diabetes, and certain cancers. It is rich in fiber, vitamins, and antioxidants, which promote overall health. Additionally, plant-based diets can help with weight management and improve digestion. Interviewer: How can someone transition to a plant-based diet? Interviewee: Start by incorporating more fruits and vegetables into your meals, gradually replacing meat with plant proteins like beans and lentils.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: What role does technology play in education today? Interviewee: Technology has transformed education by providing access to vast resources and learning tools. Online courses, educational apps, and interactive platforms enhance the learning experience. Additionally, technology facilitates communication between students and teachers, making education more accessible. However, it is essential to ensure that technology is used effectively and equitably. Interviewer: What are some challenges associated with technology in education? Interviewee: Challenges include the digital divide, screen time concerns, and the need for teacher training.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the primary goal of market research?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Understanding consumers",
    },
    {
      questionId: 6,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the benefit of continuous learning in a career?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Skill enhancement",
    },
    {
      questionId: 4,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The rise of artificial intelligence (AI) is transforming various industries, from healthcare to finance, by enhancing efficiency and productivity. AI technologies are being employed to analyze vast amounts of data, automate routine tasks, and improve decision-making processes. However, the rapid advancement of AI also raises ethical concerns, including job displacement and privacy issues. Experts argue that while AI has the potential to drive innovation, it is crucial to establish ethical guidelines and regulations to mitigate risks associated with its implementation. The future of work will likely involve collaboration between humans and AI, requiring a reevaluation of skills and education to adapt to this new landscape.",
      sampleSummary:
        "AI is revolutionizing industries by improving efficiency but raises ethical concerns, necessitating guidelines to mitigate associated risks.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      questionId: 4,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
      summary:
        "The internet has transformed the way we communicate. Discuss the advantages and disadvantages of this change.",
      sampleSummary:
        "The internet has revolutionized communication, making it faster, more convenient, and accessible to a global audience. Email, instant messaging, and social media platforms allow people to stay connected with friends, family, and colleagues regardless of geographical distance. Online communication is often more efficient and cost-effective than traditional methods like letters or long-distance phone calls. The internet has also facilitated the rise of remote work, online education, and telehealth, enabling people to access opportunities and services from the comfort of their homes. However, the ubiquity of online communication has also introduced drawbacks. The lack of face-to-face interaction can lead to misunderstandings and a sense of isolation, especially for those who rely heavily on digital communication. The speed and anonymity of online interactions can also encourage cyberbullying, trolling, and the spread of misinformation. Excessive screen time can have negative impacts on mental health, sleep quality, and productivity. Additionally, the reliance on technology for communication raises concerns about data privacy and security. While the benefits of internet-enabled communication outweigh the drawbacks for many, it is crucial to strike a balance and maintain healthy boundaries. Developing digital literacy skills, practicing mindful technology use, and prioritizing in-person interactions can help mitigate the potential downsides of online communication.",
      type: "writeEssay",
      moduleType: "writing",
    },
    {
      questionId: 5,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Sustainability is a critical issue that requires 'blank' from everyone. By adopting 'blank' practices, we can help protect the environment for future generations.",
      options: [
        {
          id: 1,
          options: [
            "effort",
            "indifference",
            "apathy",
            "neglect",
            "disinterest",
          ],
        },
        {
          id: 2,
          options: [
            "unsustainable",
            "harmful",
            "eco-friendly",
            "wasteful",
            "destructive",
          ],
        },
      ],
      answer: ["effort", "eco-friendly"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Physical fitness is essential for maintaining a healthy lifestyle. Regular exercise can lead to improved 'blank' and increased 'blank'.",
      options: [
        {
          id: 1,
          options: ["strength", "weakness", "fatigue", "pain", "discomfort"],
        },
        {
          id: 2,
          options: ["energy", "boredom", "disinterest", "apathy", "neglect"],
        },
      ],
      answer: ["strength", "energy"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 5,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The importance of 'blank' cannot be overstated. It is essential for 'blank' and emotional well-being. Engaging in activities that promote 'blank' can lead to a more fulfilling life.",
      options: [
        { id: 1, value: "self-care" },
        { id: 2, value: "mental health" },
        { id: 3, value: "physical health" },
        { id: 4, value: "balance" },
        { id: 5, value: "happiness" },
        { id: 6, value: "stress" },
        { id: 7, value: "wellness" },
      ],
      answers: ["self-care", "mental health", "wellness"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The concept of 'blank' is often misunderstood. It involves not only the physical aspect but also the 'blank' and emotional dimensions of health. A holistic approach is necessary for 'blank' well-being.",
      options: [
        { id: 1, value: "health" },
        { id: 2, value: "mental" },
        { id: 3, value: "social" },
        { id: 4, value: "emotional" },
        { id: 5, value: "complete" },
        { id: 6, value: "overall" },
        { id: 7, value: "physical" },
      ],
      answers: ["health", "mental", "overall"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the impacts of climate change mentioned in the text?",
      para: "Climate change has various impacts, including rising sea levels, increased frequency of extreme weather events, and loss of biodiversity.",
      options: [
        "Climate change causes rising sea levels.",
        "Climate change has no effect on biodiversity.",
        "Climate change leads to extreme weather events.",
        "Climate change can affect agricultural productivity.",
      ],
      answer: [
        "Climate change causes rising sea levels.",
        "Climate change leads to extreme weather events.",
        "Climate change can affect agricultural productivity.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "Which benefits of technology in education are highlighted?",
      para: "Technology in education enhances learning experiences, provides access to a wealth of information, and facilitates personalized learning.",
      options: [
        "Technology enhances learning experiences.",
        "Technology provides access to information.",
        "Technology complicates the learning process.",
        "Technology facilitates personalized learning.",
      ],
      answer: [
        "Technology enhances learning experiences.",
        "Technology provides access to information.",
        "Technology facilitates personalized learning.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the author imply about climate change?",
      para: "Climate change poses a significant threat to global stability, impacting weather patterns, sea levels, and biodiversity. The author emphasizes the urgent need for collective action to mitigate its effects and adapt to the changing environment.",
      options: [
        "Climate change is a minor issue.",
        "Collective action is unnecessary.",
        "Climate change requires urgent action.",
        "Only developed countries should address climate change.",
      ],
      answer: "Climate change requires urgent action.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the author's perspective on education?",
      para: "Education is not merely a process of acquiring knowledge; it is a transformative experience that shapes individuals' character and worldview. The author believes that education should foster critical thinking and creativity, preparing students for a rapidly changing world.",
      options: [
        "Education is only about memorizing facts.",
        "Education should focus on critical thinking and creativity.",
        "Education is irrelevant in today's society.",
        "Education should be standardized for all.",
      ],
      answer: "Education should focus on critical thinking and creativity.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 5,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The importance of mental health awareness is growing.",
        "Many organizations are working to reduce stigma.",
        "Access to mental health resources is crucial.",
        "Education plays a key role in promoting understanding.",
        "Support systems can significantly improve outcomes.",
      ],
      answer: [
        "The importance of mental health awareness is growing.",
        "Many organizations are working to reduce stigma.",
        "Education plays a key role in promoting understanding.",
        "Access to mental health resources is crucial.",
        "Support systems can significantly improve outcomes.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Climate change is one of the most significant challenges of our time.",
        "It affects weather patterns, sea levels, and biodiversity.",
        "Global cooperation is essential to address this issue.",
        "Many countries are implementing policies to reduce carbon emissions.",
        "Public awareness and education are also critical.",
      ],
      answer: [
        "Climate change is one of the most significant challenges of our time.",
        "It affects weather patterns, sea levels, and biodiversity.",
        "Global cooperation is essential to address this issue.",
        "Many countries are implementing policies to reduce carbon emissions.",
        "Public awareness and education are also critical.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 5,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "Renewable energy sources are becoming increasingly important in the fight against climate change.",
      para: "Solar and wind energy are two of the most popular 'blank' sources. They provide clean alternatives to fossil fuels, reducing 'blank' emissions. Governments are investing in 'blank' technologies to promote sustainability.",
      answer: {
        1: "renewable",
        2: "greenhouse gas",
        3: "clean",
      },
    },
    {
      questionId: 6,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The study of economics involves understanding how societies allocate scarce resources.",
      para: "Economists analyze various factors that influence 'blank' decisions. They examine supply and 'blank', consumer behavior, and market structures. Understanding these concepts is crucial for 'blank' effective policies.",
      answer: {
        1: "consumer",
        2: "demand",
        3: "developing",
      },
    },
    {
      questionId: 5,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "Renewable energy sources are becoming increasingly important in the fight against climate change.",
      para: "Solar and wind energy are two of the most popular 'blank' sources. They provide clean alternatives to fossil fuels, reducing 'blank' emissions. Governments are investing in 'blank' technologies to promote sustainability.",
      answer: {
        1: "renewable",
        2: "greenhouse gas",
        3: "clean",
      },
    },
    {
      questionId: 6,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The study of economics involves understanding how societies allocate scarce resources.",
      para: "Economists analyze various factors that influence 'blank' decisions. They examine supply and 'blank', consumer behavior, and market structures. Understanding these concepts is crucial for 'blank' effective policies.",
      answer: {
        1: "consumer",
        2: "demand",
        3: "developing",
      },
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 5,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The impact of technology on education has transformed how students learn and interact with information.",
      options: [
        "Technology has made education less accessible.",
        "Students now rely solely on technology for learning.",
        "Technology enhances learning experiences and engagement.",
        "Education has not changed significantly due to technology.",
      ],
      answer: "Technology enhances learning experiences and engagement.",
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 6,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "Diversity in the workplace leads to increased creativity and innovation.",
      options: [
        "Diversity can create challenges in communication.",
        "A diverse workforce improves problem-solving capabilities.",
        "Diversity is not important for business success.",
        "Homogeneous teams are more effective.",
      ],
      answer: "A diverse workforce improves problem-solving capabilities.",
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
      questionId: 5,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What are the key points about effective time management mentioned by the speaker?",
      text: "Effective time management involves setting priorities, creating schedules, and avoiding procrastination. It allows individuals to maximize productivity and achieve their goals.",
      options: [
        "Setting priorities is essential.",
        "Procrastination is encouraged.",
        "Creating schedules helps maximize productivity.",
        "Time management is unnecessary.",
      ],
      answer: [
        "Setting priorities is essential.",
        "Creating schedules helps maximize productivity.",
      ],
      explanation:
        "The speaker discusses how prioritizing tasks and scheduling can enhance efficiency.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 6,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker highlight about the benefits of volunteering?",
      text: "Volunteering provides individuals with opportunities to give back to the community, develop new skills, and meet new people. It also enhances personal fulfillment and social responsibility.",
      options: [
        "Volunteering is only for young people.",
        "It develops new skills.",
        "Enhances personal fulfillment.",
        "Volunteering has no real benefits.",
      ],
      answer: ["It develops new skills.", "Enhances personal fulfillment."],
      explanation:
        "The speaker emphasizes the personal and social benefits of engaging in volunteer work.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 5,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What is the main benefit of learning a second language, according to the speaker?",
      text: "Learning a second language opens up opportunities for communication and cultural exchange. It enhances cognitive abilities and career prospects.",
      options: [
        "It is only useful for travel.",
        "It improves memory and cognitive skills.",
        "It is a waste of time.",
        "Only children should learn new languages.",
      ],
      answer: "It improves memory and cognitive skills.",
      explanation:
        "The speaker highlights the cognitive benefits that come with learning a new language, such as improved memory.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 6,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker mention about healthy eating habits?",
      text: "Healthy eating habits contribute to overall well-being. They provide the necessary nutrients for the body and can prevent chronic diseases.",
      options: [
        "Healthy eating is only important for weight loss.",
        "It can lead to improved physical and mental health.",
        "Fast food is a healthy option.",
        "Eating habits do not affect health.",
      ],
      answer: "It can lead to improved physical and mental health.",
      explanation:
        "The speaker emphasizes that a balanced diet is essential for both physical and mental well-being.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 5,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about technology?",
      text: "Advancements in technology have transformed the way we 'blank' and communicate with one another.",
      options: ["learn", "travel", "eat", "sleep"],
      answer: "learn",
      explanation:
        "The speaker highlights the impact of technology on educational methods and communication.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 6,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about mental health?",
      text: "Taking time for self-care is essential for maintaining good 'blank' and emotional well-being.",
      options: ["health", "wealth", "knowledge", "fitness"],
      answer: "health",
      explanation:
        "The speaker emphasizes the importance of self-care in supporting mental health.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 5,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summariseSpokenText",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker examines the effects of climate change on agriculture, noting shifts in growing seasons and increased pest populations. The speaker suggests that farmers adopt sustainable practices and diversify crops to adapt to these changes.",
      sampleSummary:
        "Climate change is significantly impacting agriculture by altering growing seasons and increasing pest populations. These changes pose challenges for farmers, making it essential to adapt their practices. The speaker suggests that adopting sustainable farming techniques and diversifying crops can help mitigate these effects and ensure food security in the face of climate change.",
    },
    {
      questionId: 5,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Traveling to different countries can broaden your perspective and enhance cultural understanding.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 6,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Reading regularly can improve vocabulary and comprehension skills in both children and adults.",
      type: "dictation",
      moduleType: "listening",
    },
  ];
  const mock5 = [
    {
      questionId: 7,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Many individuals have unwittingly contributed to this book through sharing ideas with us as colleagues, students, practitioners, tourists, and residents of destination areas. They are too numerous to think individually and indeed it is not possible to isolate exactly their specific contributions.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 8,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "It is normally expected that the final version of your thesis, which must be submitted to the University Library in both hard copy and electronic form, will be freely available to the public once in the library. Your thesis may be consulted, borrowed, and copied in accordance with the regulations.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Many individuals contributed to this book through sharing ideas.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 8,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "The final thesis must be submitted in hard copy.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: Can you discuss the importance of mental health awareness? Interviewee: Mental health awareness is crucial for reducing stigma and encouraging individuals to seek help. It promotes understanding of mental health issues and the importance of self-care. By raising awareness, we can create supportive environments that foster mental well-being. Interviewer: What steps can be taken to improve mental health awareness? Interviewee: Education, community programs, and open conversations about mental health can help improve awareness and support.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 8,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: What are the primary challenges facing renewable energy adoption? Interviewee: The primary challenges include high initial costs, technological limitations, and regulatory barriers. Additionally, there is often resistance from traditional energy sectors and a lack of public awareness about the benefits of renewable energy. Overcoming these challenges is essential for a sustainable energy future. Interviewer: What strategies can be implemented to promote renewable energy? Interviewee: Incentives, subsidies, and educational campaigns can help increase the adoption of renewable energy sources.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is a key factor in building customer loyalty?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Trust",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the main purpose of a business plan?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Guidance",
    },
    {
      questionId: 5,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The benefits of regular physical activity are well-documented, with numerous studies linking exercise to improved physical and mental health. Engaging in regular exercise can help reduce the risk of chronic diseases, enhance mood, and improve cognitive function. Public health organizations recommend that adults aim for at least 150 minutes of moderate-intensity aerobic activity each week, along with muscle-strengthening activities on two or more days. However, despite the known benefits, many individuals struggle to incorporate exercise into their daily routines due to barriers such as time constraints and lack of motivation. Addressing these barriers through community programs and initiatives can help promote a more active lifestyle.",
      sampleSummary:
        "Regular physical activity improves health, yet many struggle to exercise due to barriers, highlighting the need for community initiatives to promote fitness.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      questionId: 5,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
      summary:
        "Many people think that social media has a negative impact on society. To what extent do you agree or disagree?",
      sampleSummary:
        "While social media has undoubtedly transformed society in many ways, its impact is complex and multifaceted. On one hand, social media platforms can foster connection, community, and the exchange of ideas. They provide a space for marginalized groups to amplify their voices, raise awareness about important issues, and organize collective action. Social media has also democratized content creation, allowing individuals to share their stories, creativity, and expertise with a wide audience. However, the negative effects of social media cannot be ignored. The constant comparison to idealized online personas can contribute to feelings of inadequacy, low self-esteem, and envy, particularly among young users. The addictive nature of social media and the dopamine rush from likes and shares can lead to excessive screen time, reduced productivity, and poor mental health outcomes. Additionally, the reliance on technology for communication raises concerns about data privacy and security. Ultimately, whether social media has a net positive or negative impact on society depends on how it is used. Developing digital literacy skills, practicing mindful social media use, and holding platforms accountable for harmful content and practices can help mitigate the risks while harnessing the potential benefits of these powerful communication tools.",
      type: "writeEssay",
      moduleType: "writing",
    },
    {
      questionId: 7,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Traveling can be an enriching experience that broadens one's 'blank'. It allows individuals to immerse themselves in different cultures and gain a new 'blank' on life.",
      options: [
        {
          id: 1,
          options: [
            "perspective",
            "narrowness",
            "ignorance",
            "indifference",
            "stagnation",
          ],
        },
        {
          id: 2,
          options: [
            "view",
            "disinterest",
            "disconnection",
            "confusion",
            "clarity",
          ],
        },
      ],
      answer: ["perspective", "view"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Leadership is not just about authority; it is about 'blank' others to achieve a common goal. A good leader fosters a sense of 'blank' within the team.",
      options: [
        {
          id: 1,
          options: [
            "inspiring",
            "controlling",
            "manipulating",
            "dominating",
            "restricting",
          ],
        },
        {
          id: 2,
          options: [
            "division",
            "unity",
            "conflict",
            "separation",
            "disconnection",
          ],
        },
      ],
      answer: ["inspiring", "unity"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The debate over 'blank' energy sources continues to grow. Advocates argue that these sources are essential for 'blank' climate change, while opponents raise concerns about their 'blank' and reliability.",
      options: [
        { id: 1, value: "renewable" },
        { id: 2, value: "combating" },
        { id: 3, value: "sustainability" },
        { id: 4, value: "cost" },
        { id: 5, value: "efficiency" },
        { id: 6, value: "environmental" },
        { id: 7, value: "impact" },
      ],
      answers: ["renewable", "combating", "cost"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The rise of 'blank' has changed the way we interact with each other. While it offers convenience, it also raises questions about 'blank' and the quality of our relationships.",
      options: [
        { id: 1, value: "technology" },
        { id: 2, value: "communication" },
        { id: 3, value: "privacy" },
        { id: 4, value: "social media" },
        { id: 5, value: "connection" },
        { id: 6, value: "authenticity" },
        { id: 7, value: "interaction" },
      ],
      answers: ["technology", "privacy", "connection"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are the characteristics of a good leader according to the text?",
      para: "A good leader demonstrates integrity, communicates effectively, and inspires others. They also show empathy and are adaptable to change.",
      options: [
        "Good leaders are adaptable.",
        "Good leaders lack integrity.",
        "Good leaders inspire others.",
        "Good leaders communicate effectively.",
      ],
      answer: [
        "Good leaders are adaptable.",
        "Good leaders inspire others.",
        "Good leaders communicate effectively.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "Which factors contribute to a healthy diet?",
      para: "A healthy diet includes a variety of fruits and vegetables, whole grains, lean proteins, and healthy fats. It is also important to limit processed foods and sugars.",
      options: [
        "Eating a variety of fruits and vegetables is important.",
        "Processed foods should be consumed regularly.",
        "Whole grains are part of a healthy diet.",
        "Limiting sugars is beneficial.",
      ],
      answer: [
        "Eating a variety of fruits and vegetables is important.",
        "Whole grains are part of a healthy diet.",
        "Limiting sugars is beneficial.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the author suggest about the role of art?",
      para: "Art serves as a powerful medium for expression and communication, transcending language barriers. The author argues that through art, individuals can convey emotions, challenge societal norms, and inspire change.",
      options: [
        "Art is only for aesthetic pleasure.",
        "Art can inspire change and challenge norms.",
        "Art has no real purpose.",
        "Art should be confined to galleries.",
      ],
      answer: "Art can inspire change and challenge norms.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the author's view on globalization?",
      para: "Globalization has interconnected the world in unprecedented ways, facilitating the exchange of goods, ideas, and cultures. However, the author warns that it can also lead to cultural homogenization and economic disparities, necessitating a balanced approach.",
      options: [
        "Globalization is entirely beneficial.",
        "Globalization leads to cultural homogenization and disparities.",
        "Globalization should be rejected.",
        "Globalization has no impact on culture.",
      ],
      answer: "Globalization leads to cultural homogenization and disparities.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The rise of e-commerce has transformed retail.",
        "Consumers now prefer shopping online for convenience.",
        "This shift has led to the decline of traditional brick-and-mortar stores.",
        "Retailers are adapting by enhancing their online presence.",
        "Technology plays a crucial role in this evolution.",
      ],
      answer: [
        "The rise of e-commerce has transformed retail.",
        "Consumers now prefer shopping online for convenience.",
        "This shift has led to the decline of traditional brick-and-mortar stores.",
        "Technology plays a crucial role in this evolution.",
        "Retailers are adapting by enhancing their online presence.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Traveling can broaden one's horizons.",
        "It exposes individuals to different cultures and perspectives.",
        "Experiencing new environments fosters personal growth.",
        "Many people find that travel enhances their creativity.",
        "Planning a trip can also be a rewarding experience.",
      ],
      answer: [
        "Traveling can broaden one's horizons.",
        "It exposes individuals to different cultures and perspectives.",
        "Experiencing new environments fosters personal growth.",
        "Many people find that travel enhances their creativity.",
        "Planning a trip can also be a rewarding experience.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "Literature reflects the culture and values of the society in which it is produced.",
      para: "Through 'blank', authors express their thoughts and feelings about the world around them. Literary works often explore themes such as 'blank', love, and conflict. These narratives provide insight into the human 'blank'.",
      answer: {
        1: "writing",
        2: "identity",
        3: "experience",
      },
    },
    {
      questionId: 8,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The Internet has transformed how we communicate and access information.",
      para: "With the rise of social media, people can now 'blank' with others instantly. This has led to a shift in 'blank', as news spreads rapidly online. However, it also raises concerns about 'blank' and misinformation.",
      answer: {
        1: "connect",
        2: "communication",
        3: "privacy",
      },
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 7,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The arts play a crucial role in fostering creativity and critical thinking.",
      options: [
        "The arts are a luxury that can be overlooked.",
        "Engaging in the arts has no impact on academic performance.",
        "The arts enhance cognitive abilities and emotional intelligence.",
        "Creativity is not essential in today's job market.",
      ],
      answer:
        "The arts enhance cognitive abilities and emotional intelligence.",
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 8,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "Public health initiatives are vital for improving community health outcomes.",
      options: [
        "Public health initiatives are often underfunded.",
        "Community engagement is crucial for effective public health.",
        "Public health initiatives have little effect on health outcomes.",
        "Health education is not necessary for public health.",
      ],
      answer: "Community engagement is crucial for effective public health.",
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
      questionId: 7,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What are the key aspects of emotional intelligence mentioned by the speaker?",
      text: "Emotional intelligence involves recognizing one's emotions, understanding the emotions of others, and managing emotional responses. It is vital for effective communication and relationships.",
      options: [
        "Recognizing one's emotions.",
        "Understanding others' emotions.",
        "Ignoring emotional responses.",
        "Managing emotional responses.",
      ],
      answer: [
        "Recognizing one's emotions.",
        "Understanding others' emotions.",
        "Managing emotional responses.",
      ],
      explanation:
        "The speaker highlights the importance of emotional awareness and regulation in interpersonal interactions.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 8,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker say about the impact of technology on education?",
      text: "Technology has transformed education by providing access to online resources, enabling interactive learning, and facilitating communication between students and teachers.",
      options: [
        "Technology limits access to information.",
        "It enables interactive learning.",
        "Facilitates communication.",
        "Technology is not useful in education.",
      ],
      answer: [
        "It enables interactive learning.",
        "Facilitates communication.",
      ],
      explanation:
        "The speaker discusses how technology enhances the educational experience through various tools and resources.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 7,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the speaker say about the role of technology in education?",
      text: "Technology enhances the learning experience by providing interactive tools and resources. It allows for personalized learning and access to a wealth of information.",
      options: [
        "Technology is distracting for students.",
        "It is only useful in higher education.",
        "It limits creativity in learning.",
        "It provides interactive tools for learning.",
      ],
      answer: "It provides interactive tools for learning.",
      explanation:
        "The speaker discusses how technology can enrich the educational experience through various tools and resources.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 8,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the speaker's view on physical activity?",
      text: "Regular physical activity is essential for maintaining health. It helps improve cardiovascular fitness and mental well-being.",
      options: [
        "Physical activity is only for athletes.",
        "It has no impact on mental health.",
        "It is essential for maintaining health.",
        "Most people do not need to exercise.",
      ],
      answer: "It is essential for maintaining health.",
      explanation:
        "The speaker emphasizes the importance of physical activity for both physical and mental health.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 7,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about education?",
      text: "Education plays a vital role in shaping an individual's 'blank' and future opportunities.",
      options: ["identity", "wealth", "career", "happiness"],
      answer: "career",
      explanation:
        "The speaker discusses how education influences career paths and opportunities.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 8,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about environmental conservation?",
      text: "Environmental conservation is crucial for protecting our planet's 'blank' and ensuring a sustainable future.",
      options: ["resources", "population", "technology", "economy"],
      answer: "resources",
      explanation:
        "The speaker emphasizes the need to conserve natural resources for future generations.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 6,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summariseSpokenText",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker discusses the role of technology in education, highlighting how digital tools can enhance learning experiences. They mention the importance of integrating technology into the classroom while also addressing potential distractions for students.",
      sampleSummary:
        "Technology plays a crucial role in modern education by enhancing learning experiences through digital tools. The speaker highlights the benefits of integrating technology into the classroom, such as personalized learning and increased engagement. However, they also caution about potential distractions that technology can pose for students, emphasizing the need for balanced and mindful use of digital resources.",
    },
    {
      questionId: 7,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Maintaining a work-life balance is essential for reducing stress and preventing burnout.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 8,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Innovation and creativity are vital for driving progress in today’s competitive market.",
      type: "dictation",
      moduleType: "listening",
    },
  ];
  const mock6 = [
    {
      questionId: 9,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "The national physical activity guidelines for adults recommends at least 30 minutes of moderate intensity physical activity, preferably every day of the week, to obtain health benefits.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 10,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "We can see from the x-rays that at an early stage of painting, a window was painted at the left of the portrait. It seems that there may have been two windows in the initial design for the portrait or that the window was moved at an early stage.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 9,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "The national guidelines recommend 30 minutes of physical activity.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 10,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "A window was painted at the left of the portrait.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 9,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: How does urbanization impact the environment? Interviewee: Urbanization leads to habitat loss, increased pollution, and higher energy consumption. As cities expand, natural habitats are destroyed, affecting biodiversity. Additionally, urban areas often produce more waste and emissions, contributing to climate change. It is essential to implement sustainable urban planning to mitigate these effects. Interviewer: What are some sustainable practices for urban development? Interviewee: Green spaces, efficient public transport, and waste reduction strategies can help create sustainable cities.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 10,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: What is the significance of biodiversity? Interviewee: Biodiversity is essential for ecosystem stability and resilience. It supports a wide range of species, which contribute to ecosystem services such as pollination, nutrient cycling, and water purification. Loss of biodiversity can lead to ecosystem collapse and reduced quality of life for humans. Interviewer: How can we protect biodiversity? Interviewee: Conservation efforts, habitat restoration, and sustainable resource management are crucial for protecting biodiversity.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 9,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the significance of emotional intelligence in the workplace?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Relationship management",
    },
    {
      questionId: 10,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is a common strategy for conflict resolution?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Negotiation",
    },
    {
      questionId: 6,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The exploration of Mars has gained momentum with recent advancements in space technology and increased interest from both governmental and private organizations. NASA's Perseverance rover, launched in 2020, is currently conducting experiments to search for signs of ancient life and collect samples for future return missions. Additionally, private companies like SpaceX are developing plans for manned missions to Mars, aiming to establish a human presence on the planet. The potential for discovering extraterrestrial life and the challenges of sustaining human life on Mars present exciting opportunities for scientific research and exploration. However, ethical considerations regarding planetary protection and the implications of colonization must also be addressed.",
      sampleSummary:
        "Mars exploration is advancing with missions like NASA's Perseverance rover and private efforts, raising scientific and ethical questions about colonization.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      questionId: 6,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
      summary:
        "Some believe that technology makes our lives more complicated, while others think it makes our lives easier. Discuss both views.",
      sampleSummary:
        "Technology has had a profound impact on our lives, simplifying some aspects while complicating others. On the one hand, technological advancements have made many tasks more efficient and convenient. Smartphones provide instant access to information, communication, and entertainment. Online shopping and banking save time and effort. Automation and artificial intelligence are taking over tedious and dangerous jobs. Medical breakthroughs are improving health outcomes. However, the rapid pace of technological change has also introduced new challenges. The constant need to learn and adapt to new tools and platforms can be overwhelming, especially for older adults. The blurring of work-life boundaries due to 24/7 connectivity can lead to burnout and stress. Cybercrime, data breaches, and online harassment are growing concerns. Overreliance on technology can weaken social skills, empathy, and problem-solving abilities, particularly in children. Moreover, the environmental impact of technology, from e-waste to energy consumption, is a pressing issue. Ultimately, whether technology makes our lives easier or more complicated depends on how we choose to use it. Developing digital literacy, setting boundaries, and prioritizing human connection can help us harness the benefits of technology while mitigating its drawbacks.",
      type: "writeEssay",
      moduleType: "writing",
    },
    {
      questionId: 9,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Technology has transformed the way we live and work. It has made communication 'blank' and has provided us with tools to increase our 'blank'.",
      options: [
        {
          id: 1,
          options: [
            "easier",
            "harder",
            "more complex",
            "less effective",
            "more challenging",
          ],
        },
        {
          id: 2,
          options: [
            "efficiency",
            "distraction",
            "confusion",
            "difficulty",
            "disinterest",
          ],
        },
      ],
      answer: ["easier", "efficiency"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Mental health is just as important as physical health. It is essential to seek help when facing 'blank' challenges and to prioritize 'blank'.",
      options: [
        {
          id: 1,
          options: [
            "emotional",
            "physical",
            "financial",
            "social",
            "environmental",
          ],
        },
        {
          id: 2,
          options: [
            "well-being",
            "discomfort",
            "neglect",
            "pain",
            "indifference",
          ],
        },
      ],
      answer: ["emotional", "well-being"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "Education plays a crucial role in 'blank' individuals for the future. It equips them with the necessary skills and knowledge to 'blank' in a competitive world.",
      options: [
        { id: 1, value: "preparing" },
        { id: 2, value: "succeed" },
        { id: 3, value: "educating" },
        { id: 4, value: "develop" },
        { id: 5, value: "empowering" },
        { id: 6, value: "thrive" },
        { id: 7, value: "advance" },
      ],
      answers: ["preparing", "succeed"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The importance of 'blank' cannot be overlooked. It is essential for personal growth and can lead to 'blank' in various aspects of life.",
      options: [
        { id: 1, value: "self-improvement" },
        { id: 2, value: "development" },
        { id: 3, value: "success" },
        { id: 4, value: "knowledge" },
        { id: 5, value: "achievement" },
        { id: 6, value: "failure" },
        { id: 7, value: "progress" },
      ],
      answers: ["self-improvement", "success"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the primary goals of sustainable development?",
      para: "Sustainable development aims to meet the needs of the present without compromising the ability of future generations to meet their own needs. It focuses on environmental protection, social equity, and economic growth.",
      options: [
        "Sustainable development prioritizes environmental protection.",
        "Sustainable development ignores social equity.",
        "Sustainable development promotes economic growth.",
        "Sustainable development aims to meet present and future needs.",
      ],
      answer: [
        "Sustainable development prioritizes environmental protection.",
        "Sustainable development promotes economic growth.",
        "Sustainable development aims to meet present and future needs.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "Which strategies are effective for stress management?",
      para: "Effective stress management strategies include regular exercise, practicing mindfulness, maintaining a balanced diet, and ensuring adequate sleep.",
      options: [
        "Regular exercise helps manage stress.",
        "Mindfulness practices are ineffective.",
        "A balanced diet contributes to stress management.",
        "Adequate sleep is important for stress relief.",
      ],
      answer: [
        "Regular exercise helps manage stress.",
        "A balanced diet contributes to stress management.",
        "Adequate sleep is important for stress relief.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the author imply about mental health?",
      para: "Mental health is an integral part of overall well-being, yet it is often stigmatized and overlooked. The author advocates for greater awareness and resources to support mental health initiatives, emphasizing that mental health is just as important as physical health.",
      options: [
        "Mental health is less important than physical health.",
        "Mental health should be prioritized equally with physical health.",
        "Mental health issues are exaggerated.",
        "Mental health resources are unnecessary.",
      ],
      answer:
        "Mental health should be prioritized equally with physical health.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the author's stance on renewable energy?",
      para: "Renewable energy sources, such as solar and wind, are essential for a sustainable future. The author argues that transitioning to renewable energy not only reduces carbon emissions but also creates economic opportunities and enhances energy security.",
      options: [
        "Renewable energy is not viable.",
        "Renewable energy can provide economic benefits.",
        "Renewable energy should be avoided.",
        "Renewable energy is too expensive.",
      ],
      answer: "Renewable energy can provide economic benefits.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The role of education in society is multifaceted.",
        "It equips individuals with knowledge and skills.",
        "Education promotes critical thinking and innovation.",
        "Access to quality education is essential for all.",
        "It also fosters social cohesion and equality.",
      ],
      answer: [
        "The role of education in society is multifaceted.",
        "It equips individuals with knowledge and skills.",
        "Education promotes critical thinking and innovation.",
        "Access to quality education is essential for all.",
        "It also fosters social cohesion and equality.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Healthy eating is essential for overall well-being.",
        "It provides the body with necessary nutrients.",
        "A balanced diet can prevent chronic diseases.",
        "Education about nutrition is crucial.",
        "Making informed food choices leads to a healthier lifestyle.",
      ],
      answer: [
        "Healthy eating is essential for overall well-being.",
        "It provides the body with necessary nutrients.",
        "A balanced diet can prevent chronic diseases.",
        "Education about nutrition is crucial.",
        "Making informed food choices leads to a healthier lifestyle.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The field of psychology studies the mind and behavior.",
      para: "Psychologists use various methods to 'blank' human behavior. They conduct experiments, surveys, and observations to gather 'blank'. This research helps in understanding mental 'blank' and developing effective treatments.",
      answer: {
        1: "study",
        2: "data",
        3: "health",
      },
    },
    {
      questionId: 10,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "Sustainable agriculture focuses on producing food while preserving the environment.",
      para: "Farmers are adopting 'blank' practices to reduce their impact on the ecosystem. Techniques such as crop rotation and organic farming help maintain 'blank' health. These methods ensure food security for future 'blank'.",
      answer: {
        1: "sustainable",
        2: "soil",
        3: "generations",
      },
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 9,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "Social media has transformed communication but also presents challenges.",
      options: [
        "Social media is the only way people communicate now.",
        "Social media has no impact on relationships.",
        "Social media can lead to misunderstandings and misinformation.",
        "Communication has improved significantly due to social media.",
      ],
      answer: "Social media can lead to misunderstandings and misinformation.",
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 10,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The significance of financial literacy is increasingly recognized in today's economy.",
      options: [
        "Financial literacy is only important for wealthy individuals.",
        "Understanding financial concepts is essential for making informed decisions.",
        "Financial literacy has no impact on personal success.",
        "Only professionals need financial literacy.",
      ],
      answer:
        "Understanding financial concepts is essential for making informed decisions.",
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
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker emphasize about the significance of cultural diversity?",
      text: "Cultural diversity enriches societies by bringing different perspectives and ideas. It fosters creativity and innovation in various fields.",
      options: [
        "Cultural diversity is not important.",
        "It limits creativity.",
        "Cultural diversity enriches societies.",
        "Only certain cultures are valuable.",
      ],
      answer: ["Cultural diversity enriches societies."],
      explanation:
        "The speaker highlights how cultural diversity contributes positively to creativity and innovation.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker say about the importance of adaptability?",
      text: "Adaptability is crucial in today's fast-paced world. It allows individuals to adjust to changes and overcome challenges effectively.",
      options: [
        "Adaptability is not important.",
        "It helps in avoiding challenges.",
        "Adaptability is crucial for overcoming challenges.",
        "Only leaders need to be adaptable.",
      ],
      answer: ["Adaptability is crucial for overcoming challenges."],
      explanation:
        "The speaker emphasizes that being adaptable is essential for thriving in a dynamic work environment.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the speaker highlight about the importance of creativity?",
      text: "Creativity is a vital skill in today's world. It drives innovation and problem-solving in various fields, including business and the arts.",
      options: [
        "Creativity is not necessary in business.",
        "It is only important for artists.",
        "It drives innovation and problem-solving.",
        "Most people are not creative.",
      ],
      answer: "It drives innovation and problem-solving.",
      explanation:
        "The speaker stresses that creativity is crucial for fostering new ideas and solutions in different sectors.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the speaker say about the impact of stress on health?",
      text: "Chronic stress can lead to serious health issues, including heart disease and depression. Managing stress is essential for maintaining overall health.",
      options: [
        "Stress has no effect on health.",
        "It only affects mental health.",
        "Chronic stress can lead to serious health issues.",
        "Stress management is not necessary.",
      ],
      answer: "Chronic stress can lead to serious health issues.",
      explanation:
        "The speaker highlights the negative consequences of chronic stress on both physical and mental health.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about public speaking?",
      text: "Public speaking is an essential skill that can enhance your 'blank' and professional opportunities.",
      options: ["confidence", "intelligence", "appearance", "wealth"],
      answer: "confidence",
      explanation:
        "The speaker discusses how public speaking can boost self-confidence and career prospects.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about innovation?",
      text: "Innovation is key to driving 'blank' and improving processes within organizations.",
      options: ["stagnation", "growth", "failure", "confusion"],
      answer: "growth",
      explanation:
        "The speaker highlights the importance of innovation in fostering organizational growth.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 7,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summariseSpokenText",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report highlights the significance of mental health awareness, discussing common mental health issues and the stigma surrounding them. The speaker encourages open conversations and support systems to improve mental health outcomes.",
      sampleSummary:
        "Mental health awareness is vital in addressing common issues such as anxiety and depression, which affect many individuals. The speaker discusses the stigma surrounding mental health and the importance of fostering open conversations to combat it. Additionally, they emphasize the need for support systems within communities to improve mental health outcomes and promote overall well-being.",
    },
    {
      questionId: 9,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "The impact of social media on society is a topic of ongoing research and debate.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 10,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Understanding different cultures can enhance interpersonal relationships and promote global harmony.",
      type: "dictation",
      moduleType: "listening",
    },
  ];
  const mock7 = [
    {
      questionId: 11,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Environmental individual and social traits of free-ranging raccoons influence performance in cognitive testing. Shy raccoons are better learners than bold ones, a result that has implications for our relationship with urban wildlife",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 12,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "This report includes a huge swathe of macroeconomics such as the effects of tax reform, a new industrial policy, and understanding how to deal with the uncertainty inherent in global financial markets. But it also covers key areas of microeconomic policies such as boosting laggardly rates of productivity.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 11,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Raccoons' traits influence performance in cognitive testing.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 12,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "This report includes the effects of tax reform.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 11,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: Can you explain the concept of sustainable development? Interviewee: Sustainable development aims to meet the needs of the present without compromising the ability of future generations to meet their own needs. It involves balancing economic growth, environmental protection, and social equity. Sustainable practices are essential for ensuring long-term prosperity and well-being. Interviewer: What are some examples of sustainable development initiatives? Interviewee: Renewable energy projects, sustainable agriculture, and conservation efforts are all examples of sustainable development.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 12,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: What are the effects of plastic pollution on marine life? Interviewee: Plastic pollution poses a significant threat to marine ecosystems. Marine animals can ingest plastic debris, leading to injury or death. Additionally, microplastics can enter the food chain, affecting both marine life and human health. Reducing plastic waste is critical for protecting ocean health. Interviewer: What actions can be taken to combat plastic pollution? Interviewee: Implementing bans on single-use plastics and promoting recycling initiatives can help reduce plastic pollution.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 11,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the role of feedback in professional development?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Improvement",
    },
    {
      questionId: 12,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is a key element of effective project management?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Planning",
    },
    {
      questionId: 7,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The significance of mental health awareness is increasingly recognized in society, with campaigns aimed at reducing stigma and promoting understanding of mental health issues. Mental health disorders affect millions globally, yet many individuals do not seek help due to fear of judgment or lack of knowledge about available resources. Educational initiatives that inform the public about mental health conditions and encourage open discussions can foster a supportive environment for those affected. Furthermore, integrating mental health education into school curricula can equip future generations with the tools to recognize and address mental health challenges.",
      sampleSummary:
        "Mental health awareness campaigns aim to reduce stigma and promote understanding, encouraging open discussions and education in schools.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      questionId: 7,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
      summary:
        "What are the advantages and disadvantages of living in a multicultural society?",
      sampleSummary:
        "Living in a multicultural society offers both benefits and challenges. On the positive side, exposure to diverse cultures can broaden our horizons, challenge our assumptions, and foster greater understanding and appreciation of differences. In a multicultural society, people have access to a rich tapestry of cuisines, art, music, and traditions that enrich the cultural landscape. Diversity also drives innovation by bringing together people with different perspectives, skills, and experiences. Multicultural societies are often more vibrant, dynamic, and creative. However, cultural diversity can also lead to misunderstandings, conflicts, and social tensions if not managed well. Language barriers can hinder effective communication and integration. Differences in values, customs, and beliefs can sometimes clash, causing friction and resentment. Minority groups may face discrimination, marginalization, and lack of representation. Maintaining social cohesion and a shared sense of national identity in a multicultural society is an ongoing challenge. Successful multicultural societies require a delicate balance of respect for diversity and a commitment to common civic values. Promoting intercultural dialogue, celebrating shared humanity, and ensuring equal rights and opportunities for all are essential for harnessing the benefits and mitigating the drawbacks of diversity. With the right policies and attitudes, multicultural societies can thrive and become models of inclusive progress.",
      type: "writeEssay",
      moduleType: "writing",
    },
    {
      questionId: 11,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The effects of 'blank' on mental health are profound. Many studies show that regular physical activity can 'blank' feelings of anxiety and depression.",
      options: [
        { id: 1, value: "exercise" },
        { id: 2, value: "reduce" },
        { id: 3, value: "increase" },
        { id: 4, value: "stress" },
        { id: 5, value: "promote" },
        { id: 6, value: "improve" },
        { id: 7, value: "affect" },
      ],
      answers: ["exercise", "reduce"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 12,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The concept of 'blank' is essential in understanding human behavior. It encompasses various factors that influence how we 'blank' and interact with others.",
      options: [
        { id: 1, value: "psychology" },
        { id: 2, value: "react" },
        { id: 3, value: "sociology" },
        { id: 4, value: "observe" },
        { id: 5, value: "behavior" },
        { id: 6, value: "communicate" },
        { id: 7, value: "understand" },
      ],
      answers: ["psychology", "react"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 11,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the advantages of renewable energy sources?",
      para: "Renewable energy sources, such as solar and wind, are sustainable and reduce dependence on fossil fuels. They also contribute to lower greenhouse gas emissions and can create jobs in the green economy.",
      options: [
        "Renewable energy reduces dependence on fossil fuels.",
        "Renewable energy sources are unsustainable.",
        "Renewable energy contributes to lower emissions.",
        "Renewable energy can create jobs.",
      ],
      answer: [
        "Renewable energy reduces dependence on fossil fuels.",
        "Renewable energy contributes to lower emissions.",
        "Renewable energy can create jobs.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 12,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "Which factors influence consumer behavior?",
      para: "Consumer behavior is influenced by psychological, social, and economic factors. Personal preferences, cultural background, and marketing strategies also play significant roles.",
      options: [
        "Psychological factors influence consumer behavior.",
        "Consumer behavior is unaffected by marketing strategies.",
        "Cultural background affects consumer choices.",
        "Economic factors impact consumer behavior.",
      ],
      answer: [
        "Psychological factors influence consumer behavior.",
        "Cultural background affects consumer choices.",
        "Economic factors impact consumer behavior.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 11,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the author suggest about the importance of biodiversity?",
      para: "Biodiversity is crucial for the stability of ecosystems and the survival of species. The author highlights that preserving biodiversity is essential for maintaining ecological balance and ensuring that natural resources are available for future generations.",
      options: [
        "Biodiversity is not important.",
        "Biodiversity is essential for ecological balance.",
        "Biodiversity can be sacrificed for development.",
        "Biodiversity only matters in certain regions.",
      ],
      answer: "Biodiversity is essential for ecological balance.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 12,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What is the author's perspective on the impact of social media?",
      para: "Social media has revolutionized communication, allowing individuals to connect across the globe. However, the author warns that it can also lead to misinformation and a decline in face-to-face interactions, urging users to navigate social media mindfully.",
      options: [
        "Social media has only positive effects.",
        "Social media can lead to misinformation.",
        "Social media is irrelevant.",
        "Social media should be avoided.",
      ],
      answer: "Social media can lead to misinformation.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 11,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The importance of mental health awareness is increasing.",
        "Many organizations are working to reduce stigma.",
        "Access to mental health resources is crucial.",
        "Education plays a key role in promoting understanding.",
        "Support systems can significantly improve outcomes.",
      ],
      answer: [
        "The importance of mental health awareness is increasing.",
        "Many organizations are working to reduce stigma.",
        "Education plays a key role in promoting understanding.",
        "Access to mental health resources is crucial.",
        "Support systems can significantly improve outcomes.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 12,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The effects of climate change are becoming more evident.",
        "Rising sea levels threaten coastal communities.",
        "Extreme weather events are becoming more frequent.",
        "Global cooperation is essential to combat these challenges.",
        "Many countries are implementing policies to reduce emissions.",
      ],
      answer: [
        "The effects of climate change are becoming more evident.",
        "Rising sea levels threaten coastal communities.",
        "Extreme weather events are becoming more frequent.",
        "Global cooperation is essential to combat these challenges.",
        "Many countries are implementing policies to reduce emissions.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 11,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "Artificial intelligence is reshaping industries and changing the way we work.",
      para: "AI technologies are being implemented in areas such as 'blank', healthcare, and finance. These advancements improve efficiency and 'blank' decision-making. However, they also raise ethical 'blank' regarding job displacement.",
      answer: {
        1: "transportation",
        2: "enhance",
        3: "concerns",
      },
    },
    {
      questionId: 12,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "Globalization has interconnected economies and cultures around the world.",
      para: "While globalization offers many 'blank', it also presents challenges. Issues such as 'blank' inequality and cultural homogenization arise. Policymakers must address these concerns to ensure 'blank' development.",
      answer: {
        1: "benefits",
        2: "income",
        3: "sustainable",
      },
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 11,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The role of sustainability in business practices is becoming more important.",
      options: [
        "Sustainability is a trend that will pass.",
        "Businesses can benefit from adopting sustainable practices.",
        "Sustainability has no impact on profitability.",
        "Only large corporations need to focus on sustainability.",
      ],
      answer: "Businesses can benefit from adopting sustainable practices.",
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 12,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "Civic engagement is essential for a healthy democracy.",
      options: [
        "Civic engagement is only important during elections.",
        "Active participation fosters a sense of community.",
        "Civic engagement has little impact on governance.",
        "Only politicians need to be engaged in civic activities.",
      ],
      answer: "Active participation fosters a sense of community.",
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
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker highlight about the significance of mentorship?",
      text: "Mentorship provides guidance and support for individuals seeking to advance their careers. It helps them navigate challenges and develop essential skills.",
      options: [
        "Mentorship is only for young professionals.",
        "It can limit career growth.",
        "Mentorship provides guidance and support.",
        "Most people do not need mentors.",
      ],
      answer: ["Mentorship provides guidance and support."],
      explanation:
        "The speaker highlights the benefits of mentorship in professional development and career advancement.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker say about the effects of stress on health?",
      text: "Chronic stress can lead to serious health issues, including heart disease and depression. Managing stress is essential for maintaining overall health.",
      options: [
        "Stress has no effect on health.",
        "It only affects mental health.",
        "Chronic stress can lead to serious health issues.",
        "Stress management is not necessary.",
      ],
      answer: ["Chronic stress can lead to serious health issues."],
      explanation:
        "The speaker emphasizes the negative consequences of chronic stress on both physical and mental health.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the speaker's opinion on the benefits of travel?",
      text: "Traveling broadens one's horizons and exposes individuals to different cultures and perspectives. It enhances personal growth and understanding.",
      options: [
        "Travel is a waste of time.",
        "It limits personal growth.",
        "Traveling broadens one's horizons.",
        "Only expensive travel is worthwhile.",
      ],
      answer: "Traveling broadens one's horizons.",
      explanation:
        "The speaker emphasizes that travel is valuable for expanding knowledge and understanding of the world.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker emphasize about lifelong learning?",
      text: "Lifelong learning is essential in today's rapidly changing world. It allows individuals to adapt to new challenges and stay relevant in their careers.",
      options: [
        "Lifelong learning is unnecessary.",
        "It is only for older adults.",
        "It helps individuals adapt to new challenges.",
        "Most people do not need to learn continuously.",
      ],
      answer: "It helps individuals adapt to new challenges.",
      explanation:
        "The speaker highlights the importance of continuous education for personal and professional growth.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about stress management?",
      text: "Effective stress management techniques can improve your 'blank' and overall quality of life.",
      options: ["health", "wealth", "social life", "happiness"],
      answer: "health",
      explanation:
        "The speaker emphasizes that managing stress effectively contributes to better health.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about cultural exchange?",
      text: "Cultural exchange promotes understanding and 'blank' between different societies.",
      options: ["conflict", "tolerance", "ignorance", "competition"],
      answer: "tolerance",
      explanation:
        "The speaker discusses how cultural exchange fosters tolerance and understanding among diverse groups.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 8,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summariseSpokenText",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker discusses the benefits of learning a second language, including cognitive advantages and improved job prospects. They also mention cultural enrichment and the ability to connect with a broader range of people.",
      sampleSummary:
        "Learning a second language offers numerous advantages, including cognitive benefits such as improved memory and problem-solving skills. The speaker highlights how bilingualism can enhance job prospects in a globalized job market. Additionally, learning another language enriches cultural understanding and enables individuals to connect with a wider range of people, fostering meaningful relationships across cultures.",
    },
    {
      questionId: 11,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Time management skills are crucial for achieving academic and professional success.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "The benefits of lifelong learning extend beyond personal satisfaction and can enhance career opportunities.",
      type: "dictation",
      moduleType: "listening",
    },
  ];
  const mock8 = [
    {
      questionId: 13,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Participating regularly in physical activity has been shown to benefit an individual's health and well-being. Regular physical activity is important in reducing the risk of chronic diseases such as heart disease and stroke, obesity, diabetes, and some forms of cancer.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 14,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Once damaged, the hair cells do not grow back, leading to noise-induced hearing loss. Participating regularly in physical activity has been shown to benefit an individual's health and well-being.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 13,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Participating in physical activity benefits health and well-being.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 14,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Once damaged, hair cells do not grow back.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 13,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: How does deforestation impact climate change? Interviewee: Deforestation contributes to climate change by releasing stored carbon dioxide into the atmosphere. Trees absorb carbon dioxide, and when they are cut down, this carbon is released, exacerbating global warming. Additionally, deforestation reduces the planet's capacity to absorb carbon, further intensifying climate change. Interviewer: What measures can be taken to prevent deforestation? Interviewee: Reforestation, sustainable forestry practices, and protecting existing forests are essential for combating deforestation.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 14,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: What is the role of education in promoting sustainability? Interviewee: Education is crucial for raising awareness about sustainability and environmental issues. It empowers individuals to make informed decisions and encourages responsible behavior. By integrating sustainability into curricula, we can foster a culture of environmental stewardship. Interviewer: How can schools promote sustainability? Interviewee: Schools can implement recycling programs, teach about renewable energy, and involve students in community sustainability projects.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 13,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the primary purpose of branding?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Recognition",
    },
    {
      questionId: 14,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is essential for effective time management?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Prioritization",
    },
    {
      questionId: 8,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The role of technology in education has evolved significantly, with digital tools enhancing learning experiences for students. Online resources, interactive platforms, and educational apps provide opportunities for personalized learning and collaboration among students and teachers. However, the digital divide remains a critical issue, as not all students have equal access to technology and the internet. Educators and policymakers must work together to address these disparities and ensure that all students can benefit from technological advancements in education.",
      sampleSummary:
        "Technology enhances education by providing personalized learning, but the digital divide poses challenges that require collaborative solutions.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      questionId: 8,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
      summary:
        "Many people think that children should be taught to be competitive in school. To what extent do you agree or disagree?",
      sampleSummary:
        "While a certain degree of healthy competition can motivate students and foster excellence, an overemphasis on competitiveness in schools may have negative consequences. On the positive side, competition can push students to work harder, develop resilience, and strive for their personal best. It can also prepare them for the competitive nature of the job market and life in general. However, an excessive focus on competition can also lead to unhealthy stress, anxiety, and pressure, especially for young children. It can undermine collaboration, teamwork, and empathy as students become more focused on outperforming their peers than supporting each other. Highly competitive environments may also discourage students with different learning styles or abilities, leading to feelings of inadequacy and low self-esteem. Moreover, the pressure to succeed can lead some students to engage in unethical practices like cheating or plagiarism. A balanced approach that combines elements of competition with cooperation, individual goal-setting, and a focus on personal growth is ideal. Schools should create an environment that celebrates effort, progress, and the joy of learning rather than just test scores and rankings. Healthy competition can be fostered through extracurricular activities, sports, and challenges that bring out the best in students without compromising their wellbeing or social-emotional development. Ultimately, while competition has its place in education, it should be one tool among many to help students reach their full potential.",
      type: "writeEssay",
      moduleType: "writing",
    },
    {
      questionId: 13,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The role of 'blank' in economic development is significant. It fosters innovation, creates jobs, and enhances the overall quality of life.",
      options: [
        { id: 1, value: "entrepreneurship" },
        { id: 2, value: "government" },
        { id: 3, value: "business" },
        { id: 4, value: "investment" },
        { id: 5, value: "education" },
        { id: 6, value: "technology" },
        { id: 7, value: "trade" },
      ],
      answers: ["entrepreneurship", "business"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 14,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The impact of 'blank' on the environment is a growing concern. It is crucial to adopt sustainable practices that 'blank' natural resources.",
      options: [
        { id: 1, value: "pollution" },
        { id: 2, value: "conserve" },
        { id: 3, value: "deplete" },
        { id: 4, value: "protect" },
        { id: 5, value: "preserve" },
        { id: 6, value: "manage" },
        { id: 7, value: "restore" },
      ],
      answers: ["pollution", "conserve"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 13,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the benefits of learning a second language?",
      para: "Learning a second language enhances cognitive abilities, improves career prospects, and fosters cultural understanding. It can also improve communication skills and increase confidence.",
      options: [
        "Learning a second language enhances cognitive abilities.",
        "Learning a second language is irrelevant for career prospects.",
        "Learning a second language fosters cultural understanding.",
        "Learning a second language improves communication skills.",
      ],
      answer: [
        "Learning a second language enhances cognitive abilities.",
        "Learning a second language fosters cultural understanding.",
        "Learning a second language improves communication skills.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 14,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "Which challenges are associated with urbanization?",
      para: "Urbanization can lead to challenges such as overcrowding, increased pollution, and strain on public services. It can also contribute to social inequality and housing shortages.",
      options: [
        "Urbanization leads to overcrowding.",
        "Urbanization has no impact on pollution.",
        "Urbanization strains public services.",
        "Urbanization can contribute to social inequality.",
      ],
      answer: [
        "Urbanization leads to overcrowding.",
        "Urbanization strains public services.",
        "Urbanization can contribute to social inequality.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 13,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the author imply about healthy living?",
      para: "Healthy living encompasses not just physical health but also mental and emotional well-being. The author emphasizes the importance of a balanced lifestyle that includes proper nutrition, regular exercise, and mindfulness practices.",
      options: [
        "Healthy living is only about diet.",
        "Healthy living includes physical, mental, and emotional well-being.",
        "Healthy living is not achievable.",
        "Healthy living is only for certain individuals.",
      ],
      answer:
        "Healthy living includes physical, mental, and emotional well-being.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 14,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the author's view on the significance of history?",
      para: "History is not merely a record of past events; it is a narrative that shapes our identity and informs our present. The author argues that understanding history is essential for making informed decisions about the future.",
      options: [
        "History is irrelevant to the present.",
        "History helps shape identity and inform the future.",
        "History should be forgotten.",
        "History only matters to historians.",
      ],
      answer: "History helps shape identity and inform the future.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 13,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The rise of artificial intelligence is reshaping industries.",
        "It offers new opportunities for efficiency and innovation.",
        "However, it also raises ethical concerns.",
        "Job displacement is a significant issue.",
        "Society must adapt to these changes.",
      ],
      answer: [
        "The rise of artificial intelligence is reshaping industries.",
        "It offers new opportunities for efficiency and innovation.",
        "However, it also raises ethical concerns.",
        "Job displacement is a significant issue.",
        "Society must adapt to these changes.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 14,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The concept of sustainability is gaining traction.",
        "It emphasizes the responsible use of resources.",
        "Sustainable practices can mitigate environmental impact.",
        "Many organizations are adopting sustainability initiatives.",
        "Public awareness is crucial for promoting sustainability.",
      ],
      answer: [
        "The concept of sustainability is gaining traction.",
        "It emphasizes the responsible use of resources.",
        "Sustainable practices can mitigate environmental impact.",
        "Many organizations are adopting sustainability initiatives.",
        "Public awareness is crucial for promoting sustainability.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 13,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The importance of mental health awareness is increasingly recognized in society.",
      para: "Mental health issues affect millions of 'blank' worldwide. Raising awareness can help reduce 'blank' and encourage individuals to seek help. Community support and 'blank' resources are vital in addressing these challenges.",
      answer: {
        1: "people",
        2: "stigma",
        3: "accessible",
      },
    },
    {
      questionId: 14,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The arts play a crucial role in education and personal development.",
      para: "Engaging in 'blank' activities fosters creativity and critical thinking. Schools that prioritize arts education often see improved 'blank' outcomes. This highlights the need for 'blank' investment in the arts.",
      answer: {
        1: "artistic",
        2: "academic",
        3: "increased",
      },
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 13,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The importance of emotional intelligence in leadership cannot be overstated.",
      options: [
        "Emotional intelligence is not relevant for leaders.",
        "Leaders with emotional intelligence can better manage teams.",
        "Emotional intelligence is less important than technical skills.",
        "All leaders are naturally emotionally intelligent.",
      ],
      answer: "Leaders with emotional intelligence can better manage teams.",
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 14,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The impact of globalization on local cultures is complex.",
      options: [
        "Globalization only has negative effects on cultures.",
        "Local cultures are thriving due to globalization.",
        "Globalization can lead to cultural homogenization.",
        "Globalization has no effect on cultural identity.",
      ],
      answer: "Globalization can lead to cultural homogenization.",
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
      questionId: 13,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker say about the importance of self-care?",
      text: "Self-care is essential for maintaining mental and physical health. It involves taking time to relax, recharge, and prioritize personal well-being.",
      options: [
        "Self-care is a luxury.",
        "It is only important for women.",
        "Self-care is essential for everyone.",
        "Most people do not need self-care.",
      ],
      answer: ["Self-care is essential for everyone."],
      explanation:
        "The speaker emphasizes that self-care is crucial for all individuals, regardless of gender or circumstances.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker highlight about the importance of creativity?",
      text: "Creativity is a vital skill in today's world. It drives innovation and problem-solving in various fields, including business and the arts.",
      options: [
        "Creativity is not necessary in business.",
        "It is only important for artists.",
        "Creativity drives innovation and problem-solving.",
        "Most people are not creative.",
      ],
      answer: ["Creativity drives innovation and problem-solving."],
      explanation:
        "The speaker discusses how creativity is crucial for fostering new ideas and solutions in different sectors.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 13,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker say about the importance of networking?",
      text: "Networking is crucial for career advancement. It helps individuals build relationships that can lead to new opportunities and collaborations.",
      options: [
        "Networking is only important for job seekers.",
        "It can limit professional growth.",
        "It helps build relationships for new opportunities.",
        "Most people do not need to network.",
      ],
      answer: "It helps build relationships for new opportunities.",
      explanation:
        "The speaker emphasizes that networking is key to discovering and creating new career possibilities.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 14,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the speaker mention about the benefits of meditation?",
      text: "Meditation can reduce stress and improve mental clarity. It allows individuals to focus better and enhances overall well-being.",
      options: [
        "Meditation is only for relaxation.",
        "It has no real benefits.",
        "It can reduce stress and improve focus.",
        "Meditation is a waste of time.",
      ],
      answer: "It can reduce stress and improve focus.",
      explanation:
        "The speaker discusses the positive effects of meditation on mental health and clarity.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 13,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about the importance of networking?",
      text: "Networking is essential for building professional 'blank' and discovering new opportunities.",
      options: ["connections", "barriers", "obstacles", "issues"],
      answer: "connections",
      explanation:
        "The speaker emphasizes the role of networking in creating valuable professional relationships.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about the role of hobbies?",
      text: "Engaging in hobbies can provide a necessary 'blank' from daily stress and responsibilities.",
      options: ["escape", "burden", "challenge", "problem"],
      answer: "escape",
      explanation:
        "The speaker discusses how hobbies serve as an escape from the pressures of everyday life.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 9,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summariseSpokenText",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report covers the importance of financial literacy, explaining how understanding personal finance can lead to better decision-making and financial stability. The speaker encourages educational programs to improve financial literacy among young people.",
      sampleSummary:
        "Financial literacy is crucial for making informed decisions about personal finance, which can lead to greater financial stability. The speaker emphasizes the need for educational programs aimed at improving financial literacy among young people, equipping them with essential skills to manage their finances effectively. This knowledge can help prevent debt and promote long-term financial health.",
    },
    {
      questionId: 13,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Sustainable practices are essential for protecting the environment and ensuring future resources.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Participating in team sports can foster teamwork and improve social skills among participants.",
      type: "dictation",
      moduleType: "listening",
    },
  ];
  const mock9 = [
    {
      questionId: 15,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "The role of women in promoting voluntary medical male circumcision is crucial. Their involvement as partners, mothers, and community members can significantly influence men's decisions to undergo the procedure.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 16,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Researchers found that couples with higher satisfaction in their relationship had greater neural synchronization while watching marriage-related clips. However, they don't always return to the same spot when we reopen our eyes.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 15,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "The role of women is crucial in promoting circumcision.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Regular physical activity reduces the risk of diseases.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 15,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: Can you discuss the importance of clean water access? Interviewee: Clean water access is essential for public health and well-being. Contaminated water can lead to waterborne diseases, malnutrition, and economic challenges. Ensuring access to safe drinking water is a fundamental human right and is critical for sustainable development. Interviewer: What steps can be taken to improve water access? Interviewee: Investing in water infrastructure, promoting water conservation, and protecting water sources are vital actions.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 16,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: What are the benefits of urban green spaces? Interviewee: Urban green spaces provide numerous benefits, including improved air quality, enhanced biodiversity, and recreational opportunities. They also contribute to mental well-being by offering residents a natural escape from urban life. Green spaces can help mitigate urban heat and manage stormwater. Interviewer: How can cities create more green spaces? Interviewee: Cities can transform vacant lots, rooftops, and parks into green areas through community involvement and planning.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 15,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is a fundamental aspect of strategic planning?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Goal setting",
    },
    {
      questionId: 16,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the benefit of networking in a career?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Opportunities",
    },
    {
      questionId: 9,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The importance of biodiversity in maintaining healthy ecosystems is well-documented, with diverse species contributing to ecosystem stability and resilience. Human activities, however, are leading to habitat destruction and species extinction at an alarming rate. Conservation efforts are critical to protecting biodiversity and ensuring the sustainability of ecosystems for future generations. Initiatives such as habitat restoration, wildlife protection laws, and community engagement in conservation practices are essential for reversing the negative impacts of human activity on biodiversity.",
      sampleSummary:
        "Biodiversity is vital for ecosystem health, but human activities threaten it, making conservation efforts essential for sustainability.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      questionId: 9,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
      summary:
        "Some people believe that the best way to solve environmental problems is to increase the price of fuel. To what extent do you agree or disagree?",
      sampleSummary:
        "Increasing the price of fuel could be an effective way to address environmental problems, but it should be part of a broader strategy that also includes investment in renewable energy and public transportation. Higher fuel prices would incentivize people to drive less, switch to more fuel-efficient vehicles, and adopt alternative modes of transportation like electric cars, bicycles, or public transit. This would reduce greenhouse gas emissions, air pollution, and dependence on fossil fuels. Higher fuel costs could also spur innovation in clean energy technologies and encourage businesses to adopt more sustainable practices. However, raising fuel prices alone is unlikely to solve environmental problems, and it could have unintended negative consequences if not implemented carefully. Higher fuel prices would disproportionately burden low-income individuals and families who rely on cars for transportation and may not have the means to switch to more expensive alternatives. This could exacerbate social inequalities and lead to public backlash against environmental policies. Moreover, fuel price hikes could drive up the costs of goods and services that rely on transportation, leading to inflation. To mitigate these risks, governments should combine fuel price increases with targeted subsidies, tax credits, and investment in public transportation infrastructure to ensure that cleaner alternatives are accessible and affordable for all. Fuel price increases should also be gradual and predictable to allow people and businesses time to adapt. Ultimately, while higher fuel prices can be an effective tool for incentivizing environmentally-friendly behavior, they should be part of a comprehensive, equitable, and well-designed policy package to address the complex challenge of environmental sustainability.",
      type: "writeEssay",
      moduleType: "writing",
    },
    {
      questionId: 15,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "Understanding 'blank' is essential for effective communication. It involves recognizing non-verbal cues and adapting messages to suit different contexts.",
      options: [
        { id: 1, value: "context" },
        { id: 2, value: "culture" },
        { id: 3, value: "language" },
        { id: 4, value: "audience" },
        { id: 5, value: "empathy" },
        { id: 6, value: "feedback" },
        { id: 7, value: "tone" },
      ],
      answers: ["context", "audience"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 16,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The significance of 'blank' in shaping public policy cannot be underestimated. It involves engaging stakeholders and considering diverse perspectives.",
      options: [
        { id: 1, value: "research" },
        { id: 2, value: "analysis" },
        { id: 3, value: "debate" },
        { id: 4, value: "consultation" },
        { id: 5, value: "dialogue" },
        { id: 6, value: "collaboration" },
        { id: 7, value: "evaluation" },
      ],
      answers: ["consultation", "dialogue"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 15,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the key components of effective time management?",
      para: "Effective time management includes setting clear goals, prioritizing tasks, and avoiding procrastination. It also involves planning and organizing activities to maximize productivity.",
      options: [
        "Setting clear goals is essential.",
        "Procrastination helps in time management.",
        "Prioritizing tasks enhances productivity.",
        "Planning and organizing are important.",
      ],
      answer: [
        "Setting clear goals is essential.",
        "Prioritizing tasks enhances productivity.",
        "Planning and organizing are important.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 16,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the effects of deforestation mentioned in the text?",
      para: "Deforestation leads to loss of biodiversity, disruption of water cycles, and contributes to climate change. It also affects the livelihoods of communities that depend on forests.",
      options: [
        "Deforestation causes loss of biodiversity.",
        "Deforestation has no impact on climate change.",
        "Deforestation disrupts water cycles.",
        "Deforestation affects community livelihoods.",
      ],
      answer: [
        "Deforestation causes loss of biodiversity.",
        "Deforestation disrupts water cycles.",
        "Deforestation affects community livelihoods.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 15,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the author suggest about the importance of teamwork?",
      para: "Teamwork is essential in achieving common goals and fostering a collaborative environment. The author highlights that effective teamwork can lead to increased productivity, creativity, and job satisfaction.",
      options: [
        "Teamwork is unnecessary.",
        "Teamwork can enhance productivity and creativity.",
        "Teamwork should be avoided.",
        "Teamwork is only for large organizations.",
      ],
      answer: "Teamwork can enhance productivity and creativity.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 16,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the author's perspective on consumerism?",
      para: "Consumerism has led to a culture of excess, where the pursuit of material possessions often overshadows the importance of experiences and relationships. The author argues for a shift towards mindful consumption and valuing what truly matters.",
      options: [
        "Consumerism is beneficial for society.",
        "Consumerism should be embraced.",
        "Consumerism can detract from meaningful experiences.",
        "Consumerism is irrelevant.",
      ],
      answer: "Consumerism can detract from meaningful experiences.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 15,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Traveling can broaden one's perspective.",
        "It exposes individuals to different cultures and traditions.",
        "Experiencing new environments fosters personal growth.",
        "Many people find that travel enhances their creativity.",
        "Planning a trip can also be a rewarding experience.",
      ],
      answer: [
        "Traveling can broaden one's perspective.",
        "It exposes individuals to different cultures and traditions.",
        "Experiencing new environments fosters personal growth.",
        "Many people find that travel enhances their creativity.",
        "Planning a trip can also be a rewarding experience.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 16,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The significance of biodiversity is often overlooked.",
        "It plays a crucial role in maintaining ecosystem balance.",
        "Biodiversity contributes to food security and health.",
        "Conservation efforts are essential to protect species.",
        "Public engagement is vital for successful conservation.",
      ],
      answer: [
        "The significance of biodiversity is often overlooked.",
        "It plays a crucial role in maintaining ecosystem balance.",
        "Biodiversity contributes to food security and health.",
        "Conservation efforts are essential to protect species.",
        "Public engagement is vital for successful conservation.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 15,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "Public speaking is a valuable skill in both personal and professional contexts.",
      para: "Effective speakers can 'blank' their ideas clearly and persuasively. Developing this skill involves practice and 'blank'. Many organizations offer workshops to help individuals improve their 'blank'.",
      answer: {
        1: "communicate",
        2: "dedication",
        3: "public speaking",
      },
    },
    {
      questionId: 16,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The role of technology in education is rapidly evolving.",
      para: "Digital tools enhance 'blank' and engagement in the classroom. Online learning platforms provide access to 'blank' resources, allowing students to learn at their own pace. However, this shift also requires 'blank' from educators.",
      answer: {
        1: "learning",
        2: "educational",
        3: "adaptation",
      },
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 15,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The significance of biodiversity is crucial for ecosystem health.",
      options: [
        "Biodiversity has little impact on ecosystem stability.",
        "Protecting biodiversity is essential for sustainability.",
        "Biodiversity is only important for wildlife.",
        "Human activities have no effect on biodiversity.",
      ],
      answer: "Protecting biodiversity is essential for sustainability.",
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 16,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The role of technology in healthcare is rapidly evolving.",
      options: [
        "Technology has made healthcare less accessible.",
        "Innovations in technology improve patient care.",
        "Technology has no impact on healthcare outcomes.",
        "Healthcare technology is only for large hospitals.",
      ],
      answer: "Innovations in technology improve patient care.",
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
      questionId: 15,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker say about the benefits of reading?",
      text: "Reading regularly can improve vocabulary, enhance knowledge, and stimulate mental faculties. It also provides a great way to relax and escape reality.",
      options: [
        "Reading is a waste of time.",
        "It only benefits children.",
        "Reading improves vocabulary and knowledge.",
        "Most people do not enjoy reading.",
      ],
      answer: ["Reading improves vocabulary and knowledge."],
      explanation:
        "The speaker discusses how reading contributes to personal development and relaxation.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker say about the role of technology in education?",
      text: "Technology enhances the learning experience by providing interactive tools and resources. It allows for personalized learning and access to a wealth of information.",
      options: [
        "Technology limits access to information.",
        "It enables interactive learning.",
        "Facilitates communication.",
        "Technology is not useful in education.",
      ],
      answer: [
        "It enables interactive learning.",
        "Facilitates communication.",
      ],
      explanation:
        "The speaker discusses how technology enhances the educational experience through various tools and resources.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 15,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker say about the role of hobbies?",
      text: "Hobbies play an important role in maintaining a balanced life. They provide an outlet for creativity and relaxation outside of work.",
      options: [
        "Hobbies are a waste of time.",
        "They are only for children.",
        "Hobbies help maintain a balanced life.",
        "Most people do not need hobbies.",
      ],
      answer: "Hobbies help maintain a balanced life.",
      explanation:
        "The speaker emphasizes that engaging in hobbies contributes to overall well-being and balance.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 16,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the speaker highlight about the importance of cultural awareness?",
      text: "Cultural awareness is essential in our globalized world. It fosters understanding and respect among diverse groups of people.",
      options: [
        "Cultural awareness is unnecessary.",
        "It promotes misunderstanding.",
        "It fosters understanding and respect.",
        "Only certain professions require cultural awareness.",
      ],
      answer: "It fosters understanding and respect.",
      explanation:
        "The speaker discusses how cultural awareness can enhance relationships and communication in diverse settings.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 15,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about the importance of goal setting?",
      text: "Setting goals is crucial for personal and professional 'blank' and helps individuals stay focused on their objectives.",
      options: ["success", "failure", "confusion", "distraction"],
      answer: "success",
      explanation:
        "The speaker emphasizes that having clear goals helps individuals maintain focus and achieve success.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about the impact of climate change?",
      text: "Climate change is leading to severe weather patterns and affecting 'blank' across the globe.",
      options: ["ecosystems", "populations", "transportation", "communication"],
      answer: "ecosystems",
      explanation:
        "The speaker discusses how climate change disrupts natural ecosystems and biodiversity.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 10,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summariseSpokenText",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker discusses the significance of renewable energy sources, highlighting their role in reducing greenhouse gas emissions. They emphasize the need for investment in solar and wind energy to combat climate change and promote sustainability.",
      sampleSummary:
        "Renewable energy sources, such as solar and wind, are essential for reducing greenhouse gas emissions and combating climate change. The speaker emphasizes the critical need for increased investment in these technologies to promote sustainability and transition away from fossil fuels. By adopting renewable energy, societies can work toward a cleaner, healthier environment for future generations.",
    },
    {
      questionId: 15,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Financial literacy is important for making informed decisions about personal finances and investments.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "The influence of technology on education has transformed traditional teaching methods and learning experiences.",
      type: "dictation",
      moduleType: "listening",
    },
  ];
  const mock10 = [
    {
      questionId: 17,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "The national physical activity guidelines for adults recommends at least 30 minutes of moderate intensity physical activity preferably every day of the week to obtain health benefits. Regular physical activity has been shown to benefit an individual's health and well-being.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 18,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Environmental individual and social traits of free-ranging raccoons influence performance in cognitive testing. Shy raccoons are better learners than bold ones, a result that has implications for our relationship with urban wildlife",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 17,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Shy raccoons are better learners than bold ones.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 18,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Your thesis may be consulted, borrowed, and copied.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 17,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: How does food waste impact the environment? Interviewee: Food waste contributes to greenhouse gas emissions when it decomposes in landfills. It also represents a significant waste of resources, including water, energy, and labor. Reducing food waste is essential for promoting sustainability and conserving resources. Interviewer: What strategies can be implemented to minimize food waste? Interviewee: Education on portion sizes, better food storage practices, and community food-sharing initiatives can help reduce waste.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 18,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Interviewer: What is the significance of animal conservation? Interviewee: Animal conservation is crucial for maintaining biodiversity and ecosystem balance. Many species are threatened by habitat loss, poaching, and climate change. Protecting these species ensures the health of ecosystems and the services they provide. Interviewer: How can individuals contribute to animal conservation? Interviewee: Individuals can support wildlife organizations, reduce their ecological footprint, and advocate for conservation policies.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 17,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the primary focus of human resource management?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Employee welfare",
    },
    {
      questionId: 18,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the significance of a SWOT analysis?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Strategic planning",
    },
    {
      questionId: 10,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The impact of urbanization on wildlife is a growing concern, as expanding cities encroach on natural habitats and threaten biodiversity. Urban areas often lack green spaces, which are essential for maintaining healthy ecosystems. Sustainable urban planning that incorporates green spaces and wildlife corridors is crucial for balancing development and conservation efforts. By creating environments that support both human and wildlife needs, cities can foster biodiversity and enhance the quality of life for their residents.",
      sampleSummary:
        "Urbanization threatens wildlife by encroaching on habitats, necessitating sustainable planning that includes green spaces for biodiversity.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      questionId: 10,
      heading:
        "Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.",
      summary:
        "The impact of urbanization on wildlife is a growing concern, as expanding cities encroach on natural habitats and threaten biodiversity. Urban areas often lack green spaces, which are essential for maintaining healthy ecosystems. Sustainable urban planning that incorporates green spaces and wildlife corridors is crucial for balancing development and conservation efforts. By creating environments that support both human and wildlife needs, cities can foster biodiversity and enhance the quality of life for their residents.",
      sampleSummary:
        "Urbanization threatens wildlife by encroaching on habitats, necessitating sustainable planning that includes green spaces for biodiversity.",
      type: "summariseWrittenText",
      moduleType: "writing",
    },
    {
      questionId: 9,
      heading:
        "You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words.",
      summary:
        "Some people believe that the best way to solve environmental problems is to increase the price of fuel. To what extent do you agree or disagree?",
      sampleSummary:
        "Increasing the price of fuel could be an effective way to address environmental problems, but it should be part of a broader strategy that also includes investment in renewable energy and public transportation. Higher fuel prices would incentivize people to drive less, switch to more fuel-efficient vehicles, and adopt alternative modes of transportation like electric cars, bicycles, or public transit. This would reduce greenhouse gas emissions, air pollution, and dependence on fossil fuels. Higher fuel costs could also spur innovation in clean energy technologies and encourage businesses to adopt more sustainable practices. However, raising fuel prices alone is unlikely to solve environmental problems, and it could have unintended negative consequences if not implemented carefully. Higher fuel prices would disproportionately burden low-income individuals and families who rely on cars for transportation and may not have the means to switch to more expensive alternatives. This could exacerbate social inequalities and lead to public backlash against environmental policies. Moreover, fuel price hikes could drive up the costs of goods and services that rely on transportation, leading to inflation. To mitigate these risks, governments should combine fuel price increases with targeted subsidies, tax credits, and investment in public transportation infrastructure to ensure that cleaner alternatives are accessible and affordable for all. Fuel price increases should also be gradual and predictable to allow people and businesses time to adapt. Ultimately, while higher fuel prices can be an effective tool for incentivizing environmentally-friendly behavior, they should be part of a comprehensive, equitable, and well-designed policy package to address the complex challenge of environmental sustainability.",
      type: "writeEssay",
      moduleType: "writing",
    },
    {
      questionId: 17,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The role of 'blank' in modern society is multifaceted. It influences education, healthcare, and economic growth, shaping the future of communities.",
      options: [
        { id: 1, value: "technology" },
        { id: 2, value: "innovation" },
        { id: 3, value: "policy" },
        { id: 4, value: "research" },
        { id: 5, value: "development" },
        { id: 6, value: "culture" },
        { id: 7, value: "communication" },
      ],
      answers: ["technology", "innovation"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 19,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text.",
      paraWithFillUps:
        "The importance of 'blank' in the workplace cannot be overstated. It fosters collaboration, enhances productivity, and creates a positive work environment.",
      options: [
        { id: 1, value: "teamwork" },
        { id: 2, value: "communication" },
        { id: 3, value: "leadership" },
        { id: 4, value: "innovation" },
        { id: 5, value: "efficiency" },
        { id: 6, value: "diversity" },
        { id: 7, value: "motivation" },
      ],
      answers: ["teamwork", "communication"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 17,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "Which factors contribute to effective teamwork?",
      para: "Effective teamwork relies on clear communication, mutual respect, and shared goals. Trust among team members and the ability to resolve conflicts are also crucial.",
      options: [
        "Clear communication is important for teamwork.",
        "Mutual respect enhances team dynamics.",
        "Teamwork is irrelevant for project success.",
        "Trust among team members is crucial.",
      ],
      answer: [
        "Clear communication is important for teamwork.",
        "Mutual respect enhances team dynamics.",
        "Trust among team members is crucial.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 18,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the benefits of a diverse workplace?",
      para: "A diverse workplace fosters creativity, enhances problem-solving, and improves employee satisfaction. It also reflects a broader range of perspectives and can lead to better decision-making.",
      options: [
        "Diversity fosters creativity.",
        "Diversity has no impact on problem-solving.",
        "Diversity improves employee satisfaction.",
        "Diversity leads to better decision-making.",
      ],
      answer: [
        "Diversity fosters creativity.",
        "Diversity improves employee satisfaction.",
        "Diversity leads to better decision-making.",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 17,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the author imply about the role of government in society?",
      para: "The government plays a crucial role in maintaining order, providing public services, and protecting citizens' rights. The author emphasizes that an effective government is essential for a functioning democracy and societal well-being.",
      options: [
        "Government has no role in society.",
        "Government is essential for democracy and societal well-being.",
        "Government should be minimized.",
        "Government is only for enforcing laws.",
      ],
      answer: "Government is essential for democracy and societal well-being.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 18,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the author suggest about innovation?",
      para: "Innovation drives progress and is vital for addressing complex challenges in society. The author argues that fostering a culture of innovation can lead to breakthroughs that improve quality of life and economic growth.",
      options: [
        "Innovation is unnecessary.",
        "Innovation is essential for progress and problem-solving.",
        "Innovation should be discouraged.",
        "Innovation is only for technology companies.",
      ],
      answer: "Innovation is essential for progress and problem-solving.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 17,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The impact of globalization on local cultures is significant.",
        "It can lead to cultural exchange and enrichment.",
        "However, it may also result in cultural homogenization.",
        "Balancing globalization with cultural preservation is essential.",
        "Communities must adapt to the changing landscape.",
      ],
      answer: [
        "The impact of globalization on local cultures is significant.",
        "It can lead to cultural exchange and enrichment.",
        "However, it may also result in cultural homogenization.",
        "Balancing globalization with cultural preservation is essential.",
        "Communities must adapt to the changing landscape.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 18,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The importance of critical thinking in education is paramount.",
        "It encourages students to analyze and evaluate information.",
        "Critical thinking skills are essential for problem-solving.",
        "Educators must foster an environment that promotes inquiry.",
        "Students should be encouraged to question assumptions.",
      ],
      answer: [
        "The importance of critical thinking in education is paramount.",
        "It encourages students to analyze and evaluate information.",
        "Critical thinking skills are essential for problem-solving.",
        "Educators must foster an environment that promotes inquiry.",
        "Students should be encouraged to question assumptions.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 17,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "Healthy eating habits are essential for maintaining overall well-being.",
      para: "A balanced diet includes a variety of 'blank', fruits, and whole grains. Nutritionists recommend limiting 'blank' intake and focusing on whole foods. This approach can lead to better 'blank' and longevity.",
      answer: {
        1: "vegetables",
        2: "sugar",
        3: "health",
      },
    },
    {
      questionId: 18,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The impact of social media on communication is profound.",
      para: "While it enables instant 'blank', it can also lead to misunderstandings. Users must navigate the complexities of 'blank' interactions. Understanding these dynamics is crucial for effective 'blank'.",
      answer: {
        1: "connection",
        2: "online",
        3: "communication",
      },
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 17,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The importance of community service in personal development is significant.",
      options: [
        "Community service is only for students.",
        "Engaging in community service fosters empathy and responsibility.",
        "Community service has no impact on personal growth.",
        "Only professionals should engage in community service.",
      ],
      answer:
        "Engaging in community service fosters empathy and responsibility.",
    },
    {
      type: "highlightCorrectSummary",
      moduleType: "listening",
      questionId: 18,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The significance of health education in schools is increasingly recognized.",
      options: [
        "Health education is not necessary for students.",
        "Health education can lead to healthier lifestyle choices.",
        "Only physical education is important in schools.",
        "Health education has minimal impact on student behavior.",
      ],
      answer: "Health education can lead to healthier lifestyle choices.",
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
      questionId: 17,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker say about the significance of emotional intelligence?",
      text: "Emotional intelligence involves recognizing one's emotions, understanding the emotions of others, and managing emotional responses. It is vital for effective communication and relationships.",
      options: [
        "Emotional intelligence is not necessary.",
        "It is only important for leaders.",
        "It helps build strong relationships.",
        "Most people do not have emotional intelligence.",
      ],
      answer: ["It helps build strong relationships."],
      explanation:
        "The speaker highlights the importance of emotional awareness and regulation in interpersonal interactions.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 18,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker mention about the impact of stress on health?",
      text: "Chronic stress can lead to serious health issues, including heart disease and depression. Managing stress is essential for maintaining overall health.",
      options: [
        "Stress has no effect on health.",
        "It only affects mental health.",
        "Chronic stress can lead to serious health issues.",
        "Stress management is not necessary.",
      ],
      answer: ["Chronic stress can lead to serious health issues."],
      explanation:
        "The speaker emphasizes the negative consequences of chronic stress on both physical and mental health.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 17,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker say about the impact of climate change?",
      text: "Climate change is affecting weather patterns and ecosystems worldwide. It poses serious risks to food security and health.",
      options: [
        "Climate change has no significant impact.",
        "It only affects certain countries.",
        "It poses serious risks to food security and health.",
        "Only governments can address climate change.",
      ],
      answer: "It poses serious risks to food security and health.",
      explanation:
        "The speaker emphasizes the widespread effects of climate change on various aspects of life.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 18,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the speaker mention about the advantages of remote work?",
      text: "Remote work offers flexibility and can lead to increased productivity. It allows employees to create a work environment that suits their needs.",
      options: [
        "Remote work is less productive.",
        "It offers flexibility and can increase productivity.",
        "Most people prefer working in an office.",
        "Remote work has no real benefits.",
      ],
      answer: "It offers flexibility and can increase productivity.",
      explanation:
        "The speaker highlights the positive aspects of remote work, particularly regarding flexibility and productivity.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 17,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about the importance of education?",
      text: "Education is a powerful tool that can transform lives and create 'blank' for future generations.",
      options: ["opportunities", "barriers", "challenges", "limitations"],
      answer: "opportunities",
      explanation:
        "The speaker highlights the transformative power of education in providing opportunities.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 18,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about the role of technology in society?",
      text: "Technology plays a crucial role in shaping our daily lives and influencing 'blank' in various sectors.",
      options: ["decisions", "traditions", "habits", "values"],
      answer: "decisions",
      explanation:
        "The speaker discusses how technology impacts decision-making processes in different areas.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 11,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summariseSpokenText",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report examines the effects of urbanization on wildlife, noting habitat loss and increased human-wildlife conflict. The speaker suggests creating wildlife corridors and protected areas to mitigate these impacts and support biodiversity.",
      sampleSummary:
        "Urbanization poses significant threats to wildlife, primarily through habitat loss and increased conflicts between humans and animals. The speaker discusses the urgent need to create wildlife corridors and protected areas to mitigate these impacts. By establishing these safe spaces, we can support biodiversity and ensure that wildlife can thrive despite the challenges posed by expanding urban environments.",
    },
    {
      questionId: 17,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Effective leadership is characterized by the ability to inspire and motivate others toward a common goal.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 18,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Mental health awareness is crucial for reducing stigma and promoting access to mental health resources.",
      type: "dictation",
      moduleType: "listening",
    },
  ];
  const [questions, setQuestions] = useState();
  const [mockTest, setMockTest] = useState(false);
  const [mockTestNumber, setMockTestNumber] = useState();
  function loadMockTest(mockNumber) {
    if (mockNumber === "first") {
      setMockTestNumber("mockTest1");
      setQuestions(mock1);
      setMockTest(true);
      hideNav();
    } else if (mockNumber === "second") {
      setMockTestNumber("mockTest2");
      setQuestions(mock2);
      setMockTest(true);
      hideNav();
    } else if (mockNumber === "third") {
      setMockTestNumber("mockTest3");
      setQuestions(mock3);
      setMockTest(true);
      hideNav();
    } else if (mockNumber === "fourth") {
      setMockTestNumber("mockTest4");
      setQuestions(mock4);
      setMockTest(true);
      hideNav();
    } else if (mockNumber === "fifth") {
      setMockTestNumber("mockTest5");
      setQuestions(mock5);
      setMockTest(true);
      hideNav();
    } else if (mockNumber === "sixth") {
      setMockTestNumber("mockTest6");
      setQuestions(mock6);
      setMockTest(true);
      hideNav();
    } else if (mockNumber === "seventh") {
      setMockTestNumber("mockTest7");
      setQuestions(mock7);
      setMockTest(true);
      hideNav();
    } else if (mockNumber === "eight") {
      setMockTestNumber("mockTest8");
      setQuestions(mock8);
      setMockTest(true);
      hideNav();
    } else if (mockNumber === "ninth") {
      setMockTestNumber("mockTest9");
      setQuestions(mock9);
      setMockTest(true);
      hideNav();
    } else if (mockNumber === "tenth") {
      setMockTestNumber("mockTest10");
      setQuestions(mock10);
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
            <p>Complete Mock Test First</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("second")}
          >
            <p>Complete Mock Test Second</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("third")}
          >
            <p>Complete Mock Test Third</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("fourth")}
          >
            <p>Complete Mock Test Fourth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("fifth")}
          >
            <p>Complete Mock Test Fifth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("sixth")}
          >
            <p>Complete Mock Test Sixth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("seventh")}
          >
            <p>Complete Mock Test Seventh</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("eighth")}
          >
            <p>Complete Mock Test Eighth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("ninth")}
          >
            <p>Complete Mock Test Ninth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("tenth")}
          >
            <p>Complete Mock Test Tenth</p>
          </div>
        </div>
      ) : (
        <MockTestCommon que={questions} mockTestNumber={mockTestNumber} />
      )}
    </div>
  );
}

export default FullMockTest;
