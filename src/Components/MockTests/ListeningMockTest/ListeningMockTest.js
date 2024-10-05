import React, { useState } from "react";
import MockTestCommon from "../MockTestCommon";
import ".//ListeningMockTest.css";
import Listening from "../../Listening/Listening";
function ListeningMockTest({ hideNav }) {
  const mock1 = [
    {
      questionId: 1,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report discusses the rising levels of air pollution in urban areas, highlighting the main sources such as vehicle emissions and industrial activities. It emphasizes the health risks associated with poor air quality, including respiratory diseases and heart problems, and suggests measures like stricter regulations and promoting public transport to mitigate the issue.",
      sampleSummary:
        "Urban air pollution is increasing due to various factors, primarily vehicle emissions and industrial activities. This rise in pollution poses significant health risks, including respiratory diseases and heart problems. The report suggests implementing stricter regulations and promoting public transport as effective strategies to improve air quality and protect public health.",
    },
    {
      questionId: 2,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker outlines the benefits of regular exercise, including improved mental health, better sleep, and enhanced physical fitness. They also mention that even small amounts of physical activity can lead to significant health improvements and encourage listeners to find enjoyable ways to incorporate exercise into their daily routines.",
      sampleSummary:
        "Regular exercise is beneficial for both physical and mental health. It can lead to improved mood, better sleep, and enhanced fitness levels. The speaker emphasizes that even small amounts of physical activity can yield significant health benefits. Therefore, individuals are encouraged to find enjoyable ways to incorporate exercise into their daily routines for overall well-being.",
    },
    {
      questionId: 3,
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
      questionId: 4,
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
      questionId: 5,
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
      questionId: 6,
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
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 7,
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
    },
    {
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 8,
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
    },
    {
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the speaker suggest about the importance of grammar?",
      text: "Grammar is the framework of a language. It provides the structure that allows us to communicate clearly and effectively. Without grammar, sentences can become confusing and difficult to understand.",
      options: [
        "Grammar is not important for communication.",
        "Grammar only matters in written language.",
        "Grammar helps ensure clarity in communication.",
        "Grammar rules are always flexible.",
      ],
      answer: "Grammar helps ensure clarity in communication.",
      explanation:
        "The speaker emphasizes that grammar is essential for clear and effective communication.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about subject-verb agreement?",
      text: "Subject-verb agreement is crucial in constructing grammatically correct sentences. The verb must agree in number with the subject, ensuring that singular subjects take singular verbs and plural subjects take plural verbs.",
      options: [
        "Subject-verb agreement is optional.",
        "Only plural subjects need to agree with verbs.",
        "Subject-verb agreement is essential for grammatical accuracy.",
        "Agreement rules are the same in all languages.",
      ],
      answer: "Subject-verb agreement is essential for grammatical accuracy.",
      explanation:
        "The speaker highlights the importance of subject-verb agreement in maintaining grammatical correctness.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about decision-making?",
      text: "When faced with a tough choice, it's important to trust your _____ and consider the consequences.",
      options: ["instinct", "logic", "emotion", "fear"],
      answer: "instinct",
      explanation:
        "The speaker emphasizes the importance of trusting one's instincts when making difficult decisions.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about safety?",
      text: "Always look both ways before crossing the street to ensure your _____ and well-being.",
      options: ["safety", "health", "speed", "comfort"],
      answer: "safety",
      explanation:
        "The speaker highlights the importance of ensuring safety when crossing streets.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 13,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "So far in our discussion of chemical reactions we have assumed that these reactions only go in one direction, the 'forward' direction, from left to right as we read it in an equation. That's why our 'arrowhead' points from left to right: reactants react together to make products. However, this is not exactly how things occur in 'nature'. In fact, practically every chemical reaction is reversible, meaning the products can also react together to 'reform' the reactants that they were made of.",
      text: "So far in our discussion of chemical 'equations' we have assumed that these reactions only go in one direction, the 'reverse' direction, from left to right as we read it in an equation. That's why our 'arrow' points from left to right: reactants react together to make products. However, this is not exactly how things occur in 'reality'. In fact, practically every chemical reaction is reversible, meaning the products can also react together to 'create' the reactants that they were made of.",
      answer:
        "So far in our discussion of chemical 'equations' we have assumed that these reactions only go in one direction, the 'reverse' direction, from left to right as we read it in an equation. That's why our 'arrow' points from left to right: reactants react together to make products. However, this is not exactly how things occur in 'reality'. In fact, practically every chemical reaction is reversible, meaning the products can also react together to 'create' the reactants that they were made of.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The Amazon rainforest is known for its vast 'biodiversity', housing millions of species of plants and animals. It plays a crucial role in regulating the Earth's climate and is often referred to as the 'lungs of the planet.' However, 'deforestation' poses a significant threat to this vital ecosystem.",
      text: "The Amazon rainforest is known for its vast 'biodiversity', housing millions of species of plants and 'creatures'. It plays a crucial role in regulating the Earth's climate and is often referred to as the 'lungs of the Earth.' However, 'deforestation' poses a significant threat to this vital 'habitat.'",
      answer:
        "The Amazon rainforest is known for its vast 'biodiversity', housing millions of species of plants and 'creatures'. It plays a crucial role in regulating the Earth's climate and is often referred to as the 'lungs of the Earth.' However, 'deforestation' poses a significant threat to this vital 'habitat.'",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 15,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Common sense is the ability to make practical decisions and judgments.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "It is important to use common sense when faced with a difficult situation.",
      type: "dictation",
      moduleType: "listening",
    },
  ];

  const mock2 = [
    {
      questionId: 1,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report covers the impact of social media on communication, noting both positive and negative effects. It highlights how social media can enhance connectivity and information sharing but also mentions issues like misinformation and reduced face-to-face interactions.",
      sampleSummary:
        "Social media has a profound impact on communication, offering both benefits and drawbacks. On one hand, it enhances connectivity and facilitates the sharing of information across vast distances. On the other hand, it can lead to misinformation and a decline in face-to-face interactions, which are essential for building strong relationships. Understanding these dynamics is crucial in navigating modern communication effectively.",
    },
    {
      questionId: 2,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker discusses the importance of biodiversity, explaining how diverse ecosystems contribute to environmental stability and resilience. They highlight threats to biodiversity, such as habitat destruction and climate change, and stress the need for conservation efforts.",
      sampleSummary:
        "Biodiversity is essential for maintaining environmental stability and resilience. The speaker emphasizes that diverse ecosystems provide critical services, such as clean air and water, and support various species. However, threats like habitat destruction and climate change are endangering biodiversity. Therefore, urgent conservation efforts are necessary to protect these ecosystems and ensure the health of our planet.",
    },
    {
      questionId: 3,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker mention about vocabulary?",
      text: "A strong vocabulary enhances communication skills and allows for more precise expression of thoughts and ideas. It can also improve reading comprehension and writing quality.",
      options: [
        "A strong vocabulary is only necessary for academic writing.",
        "Vocabulary enhances communication skills.",
        "A rich vocabulary allows for precise expression.",
        "Vocabulary is not important for effective communication.",
      ],
      answer: [
        "Vocabulary enhances communication skills.",
        "A rich vocabulary allows for precise expression.",
      ],
      explanation:
        "The speaker emphasizes that a strong vocabulary significantly improves communication and expression.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 4,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker suggest about the use of active voice?",
      text: "Using active voice in writing makes sentences clearer and more direct. It helps maintain clarity and engages the reader more effectively.",
      options: [
        "Active voice is preferred for clarity.",
        "Active voice makes writing less engaging.",
        "Active voice is only used in informal writing.",
        "Active voice improves sentence clarity.",
      ],
      answer: [
        "Active voice is preferred for clarity.",
        "Active voice improves sentence clarity.",
      ],
      explanation:
        "The speaker highlights that active voice enhances clarity and engagement in writing.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 5,
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
      questionId: 6,
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
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 7,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The importance of mental health awareness is growing, as more people recognize the need for mental health support.",
      options: [
        "Mental health issues are often overlooked in society.",
        "Raising mental health awareness can lead to better support systems.",
        "Mental health is only a concern for a small population.",
        "There is a stigma associated with seeking mental health help.",
      ],
      answer:
        "Raising mental health awareness can lead to better support systems.",
    },
    {
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 8,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "Renewable energy sources are essential for reducing dependence on fossil fuels and combating climate change.",
      options: [
        "Fossil fuels are the most reliable energy sources.",
        "Renewable energy can significantly reduce carbon emissions.",
        "There are no viable alternatives to fossil fuels.",
        "The transition to renewable energy is unnecessary.",
      ],
      answer: "Renewable energy can significantly reduce carbon emissions.",
    },
    {
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about punctuation?",
      text: "Punctuation marks are vital for clarifying meaning in writing. They indicate pauses, separate ideas, and help convey the intended tone of the message. Misuse of punctuation can lead to misunderstandings.",
      options: [
        "Punctuation is not necessary in informal writing.",
        "Punctuation marks are only for written language.",
        "Punctuation helps clarify meaning and tone.",
        "Punctuation rules are always rigid.",
      ],
      answer: "Punctuation helps clarify meaning and tone.",
      explanation:
        "The speaker emphasizes that proper punctuation is essential for clear communication in writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about the use of active voice?",
      text: "Using active voice in writing makes sentences clearer and more direct. In active voice, the subject performs the action, which can make the writing more engaging and easier to understand.",
      options: [
        "Active voice is less effective than passive voice.",
        "Active voice makes writing less engaging.",
        "Active voice improves clarity and engagement.",
        "Active voice is only used in informal writing.",
      ],
      answer: "Active voice improves clarity and engagement.",
      explanation:
        "The speaker highlights that active voice enhances the clarity and engagement of writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about helping others?",
      text: "If you see someone struggling, it's common sense to offer your _____ and support.",
      options: ["help", "advice", "time", "money"],
      answer: "help",
      explanation:
        "The speaker emphasizes the importance of offering help and support to those in need.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about making plans?",
      text: "When making plans, it's important to consider everyone's _____ to ensure a good time for all.",
      options: ["preferences", "schedules", "opinions", "interests"],
      answer: "schedules",
      explanation:
        "The speaker highlights the necessity of considering everyone's schedules when planning events.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 13,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Renewable energy sources, such as solar and wind power, are essential for reducing greenhouse gas 'emissions'. Transitioning to these energy sources can help combat climate change and promote 'sustainability'.",
      text: "Renewable energy sources, such as solar and 'wind' power, are essential for reducing 'pollution'. Transitioning to these energy sources can help combat climate change and promote 'environmental stability'.",
      answer:
        "Renewable energy sources, such as solar and 'wind' power, are essential for reducing 'pollution'. Transitioning to these energy sources can help combat climate change and promote 'environmental stability'.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The human brain is one of the most complex 'organs' in the body. It is responsible for processing 'information', controlling movements, and regulating emotions. Understanding how the brain works is crucial for advancing medical science.",
      text: "The human brain is one of the most complex 'structures' in the body. It is responsible for processing 'data', controlling movements, and regulating 'emotions'. Understanding how the brain works is crucial for advancing 'healthcare' science.",
      answer:
        "The human brain is one of the most complex 'structures' in the body. It is responsible for processing 'data', controlling movements, and regulating 'emotions'. Understanding how the brain works is crucial for advancing 'healthcare' science.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 15,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Common sense tells us to look both ways before crossing the street.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Using common sense can help us avoid making foolish mistakes.",
      type: "dictation",
      moduleType: "listening",
    },
  ];

  const mock3 = [
    {
      questionId: 1,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker examines the effects of climate change on agriculture, noting shifts in growing seasons and increased pest populations. The speaker suggests that farmers adopt sustainable practices and diversify crops to adapt to these changes.",
      sampleSummary:
        "Climate change is significantly impacting agriculture by altering growing seasons and increasing pest populations. These changes pose challenges for farmers, making it essential to adapt their practices. The speaker suggests that adopting sustainable farming techniques and diversifying crops can help mitigate these effects and ensure food security in the face of climate change.",
    },
    {
      questionId: 2,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker discusses the role of technology in education, highlighting how digital tools can enhance learning experiences. They mention the importance of integrating technology into the classroom while also addressing potential distractions for students.",
      sampleSummary:
        "Technology plays a crucial role in modern education by enhancing learning experiences through digital tools. The speaker highlights the benefits of integrating technology into the classroom, such as personalized learning and increased engagement. However, they also caution about potential distractions that technology can pose for students, emphasizing the need for balanced and mindful use of digital resources.",
    },
    {
      questionId: 3,
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
      questionId: 4,
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
      questionId: 5,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker mention about punctuation?",
      text: "Punctuation marks are crucial for conveying meaning in writing. They indicate pauses, separate ideas, and clarify the relationships between different parts of a sentence.",
      options: [
        "Punctuation is optional in informal writing.",
        "Punctuation helps clarify meaning.",
        "Punctuation marks are not important.",
        "Punctuation indicates pauses.",
      ],
      answer: [
        "Punctuation helps clarify meaning.",
        "Punctuation indicates pauses.",
      ],
      explanation:
        "The speaker emphasizes that punctuation is essential for clarity and coherence in writing.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 6,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker suggest about the use of conjunctions?",
      text: "Conjunctions are words that connect clauses, sentences, or words. They play a vital role in creating complex sentences and showing relationships between ideas.",
      options: [
        "Conjunctions are unnecessary in writing.",
        "Conjunctions connect clauses and sentences.",
        "Conjunctions should be avoided in formal writing.",
        "Conjunctions help clarify relationships.",
      ],
      answer: [
        "Conjunctions connect clauses and sentences.",
        "Conjunctions help clarify relationships.",
      ],
      explanation:
        "The speaker highlights the importance of conjunctions in linking ideas and enhancing sentence structure.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 7,
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
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 8,
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
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about conjunctions?",
      text: "Conjunctions are words that connect clauses, sentences, or words. They play a crucial role in creating complex sentences and showing relationships between ideas.",
      options: [
        "Conjunctions are unnecessary in writing.",
        "Conjunctions only connect similar ideas.",
        "Conjunctions help connect clauses and ideas.",
        "Conjunctions are only used in spoken language.",
      ],
      answer: "Conjunctions help connect clauses and ideas.",
      explanation:
        "The speaker emphasizes the importance of conjunctions in linking ideas and creating complex sentences.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the speaker suggest about the importance of vocabulary?",
      text: "A strong vocabulary enhances communication skills and allows for more precise expression of thoughts and ideas. It can also improve reading comprehension and writing quality.",
      options: [
        "Vocabulary is not important for effective communication.",
        "A strong vocabulary is only necessary for academic writing.",
        "Vocabulary enhances communication and expression.",
        "Vocabulary should be limited to basic words.",
      ],
      answer: "Vocabulary enhances communication and expression.",
      explanation:
        "The speaker emphasizes that a robust vocabulary significantly improves one's ability to communicate effectively.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about communication?",
      text: "Effective communication relies on being clear and _____ in your messages.",
      options: ["concise", "loud", "emotional", "complex"],
      answer: "concise",
      explanation:
        "The speaker emphasizes the importance of clarity and conciseness in effective communication.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about responsibility?",
      text: "Taking responsibility for your actions is a sign of _____ and maturity.",
      options: ["growth", "wisdom", "strength", "fear"],
      answer: "growth",
      explanation:
        "The speaker highlights that taking responsibility is indicative of personal growth and maturity.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 13,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The effects of climate change are becoming increasingly 'evident'. Rising temperatures, changing precipitation patterns, and more frequent extreme weather events are just a few examples of how our planet is responding to this 'crisis'.",
      text: "The effects of climate change are becoming increasingly 'clear'. Rising temperatures, changing 'weather' patterns, and more frequent extreme weather events are just a few examples of how our planet is responding to this 'emergency'.",
      answer:
        "The effects of climate change are becoming increasingly 'clear'. Rising temperatures, changing 'weather' patterns, and more frequent extreme weather events are just a few examples of how our planet is responding to this 'emergency'.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The study of economics involves understanding how resources are allocated within a 'society'. It examines the production, distribution, and consumption of goods and 'services'.",
      text: "The study of 'economics' involves understanding how resources are allocated within a 'community'. It examines the production, distribution, and consumption of goods and 'products'.",
      answer:
        "The study of 'economics' involves understanding how resources are allocated within a 'community'. It examines the production, distribution, and consumption of goods and 'products'.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 15,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Common sense is often overlooked in today's fast-paced world.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Applying common sense can lead to better decision-making.",
      type: "dictation",
      moduleType: "listening",
    },
  ];

  const mock4 = [
    {
      questionId: 1,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker discusses the benefits of learning a second language, including cognitive advantages and improved job prospects. They also mention cultural enrichment and the ability to connect with a broader range of people.",
      sampleSummary:
        "Learning a second language offers numerous advantages, including cognitive benefits such as improved memory and problem-solving skills. The speaker highlights how bilingualism can enhance job prospects in a globalized job market. Additionally, learning another language enriches cultural understanding and enables individuals to connect with a wider range of people, fostering meaningful relationships across cultures.",
    },
    {
      questionId: 2,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report covers the importance of financial literacy, explaining how understanding personal finance can lead to better decision-making and financial stability. The speaker encourages educational programs to improve financial literacy among young people.",
      sampleSummary:
        "Financial literacy is crucial for making informed decisions about personal finance, which can lead to greater financial stability. The speaker emphasizes the need for educational programs aimed at improving financial literacy among young people, equipping them with essential skills to manage their finances effectively. This knowledge can help prevent debt and promote long-term financial health.",
    },
    {
      questionId: 3,
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
      questionId: 4,
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
      questionId: 5,
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
      questionId: 6,
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
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 7,
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
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 8,
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
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about learning grammar?",
      text: "Learning grammar is essential for mastering a language. It provides the rules and structure necessary for effective communication, enabling speakers and writers to convey their messages clearly.",
      options: [
        "Grammar is not important for language learning.",
        "Grammar rules are optional in casual conversation.",
        "Learning grammar is essential for effective communication.",
        "Grammar is only necessary for written language.",
      ],
      answer: "Learning grammar is essential for effective communication.",
      explanation:
        "The speaker emphasizes that understanding grammar is crucial for clear communication in any language.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about the role of adjectives?",
      text: "Adjectives are words that describe nouns and provide additional information about them, such as color, size, and quality. They enhance writing by adding detail and specificity.",
      options: [
        "Adjectives are not necessary in writing.",
        "Adjectives only describe verbs.",
        "Adjectives provide detail and enhance writing.",
        "Adjectives should be avoided in formal writing.",
      ],
      answer: "Adjectives provide detail and enhance writing.",
      explanation:
        "The speaker highlights the importance of adjectives in adding detail and specificity to writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about learning?",
      text: "Common sense often comes from _____ experiences and observations.",
      options: ["personal", "book", "theoretical", "academic"],
      answer: "personal",
      explanation:
        "The speaker emphasizes that common sense is often derived from personal experiences and observations.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about decision-making?",
      text: "When making important decisions, it's wise to gather all relevant _____ before proceeding.",
      options: ["information", "opinions", "emotions", "experiences"],
      answer: "information",
      explanation:
        "The speaker emphasizes the importance of gathering relevant information before making decisions.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 13,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Literature serves as a reflection of society, capturing the thoughts, feelings, and experiences of 'individuals'. It allows readers to explore different perspectives and understand the human condition.",
      text: "Literature serves as a reflection of 'culture', capturing the thoughts, feelings, and experiences of 'people'. It allows readers to explore different perspectives and understand the human 'experience'.",
      answer:
        "Literature serves as a reflection of 'culture', capturing the thoughts, feelings, and experiences of 'people'. It allows readers to explore different perspectives and understand the human 'experience'.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Technological advancements have transformed the way we communicate, work, and live. From smartphones to social media, technology has made it easier to connect with 'others'.",
      text: "Technological advancements have transformed the way we 'connect', work, and live. From 'smartphones' to social media, technology has made it easier to connect with 'people'.",
      answer:
        "Technological advancements have transformed the way we 'connect', work, and live. From 'smartphones' to social media, technology has made it easier to connect with 'people'.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 15,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Common sense is a valuable tool in both personal and professional life.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Developing common sense takes time and experience.",
      type: "dictation",
      moduleType: "listening",
    },
  ];

  const mock5 = [
    {
      questionId: 1,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker discusses the significance of renewable energy sources, highlighting their role in reducing greenhouse gas emissions. They emphasize the need for investment in solar and wind energy to combat climate change and promote sustainability.",
      sampleSummary:
        "Renewable energy sources, such as solar and wind, are essential for reducing greenhouse gas emissions and combating climate change. The speaker emphasizes the critical need for increased investment in these technologies to promote sustainability and transition away from fossil fuels. By adopting renewable energy, societies can work toward a cleaner, healthier environment for future generations.",
    },
    {
      questionId: 2,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report examines the effects of urbanization on wildlife, noting habitat loss and increased human-wildlife conflict. The speaker suggests creating wildlife corridors and protected areas to mitigate these impacts and support biodiversity.",
      sampleSummary:
        "Urbanization poses significant threats to wildlife, primarily through habitat loss and increased conflicts between humans and animals. The speaker discusses the urgent need to create wildlife corridors and protected areas to mitigate these impacts. By establishing these safe spaces, we can support biodiversity and ensure that wildlife can thrive despite the challenges posed by expanding urban environments.",
    },
    {
      questionId: 3,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker suggest about the importance of vocabulary?",
      text: "A strong vocabulary is essential for effective communication. It allows individuals to express their thoughts and ideas more clearly and can improve both writing and speaking skills.",
      options: [
        "A strong vocabulary enhances communication.",
        "Vocabulary is not important for effective communication.",
        "A rich vocabulary improves writing quality.",
        "A strong vocabulary is only necessary for academic writing.",
      ],
      answer: [
        "A strong vocabulary enhances communication.",
        "A rich vocabulary improves writing quality.",
      ],
      explanation:
        "The speaker emphasizes that a strong vocabulary significantly improves communication and writing quality.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 4,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker suggest about learning grammar?",
      text: "Learning grammar is essential for mastering a language. It provides the rules and structure necessary for effective communication, enabling speakers and writers to convey their messages clearly.",
      options: [
        "Grammar is not important for language learning.",
        "Grammar provides the structure for effective communication.",
        "Grammar rules are optional in casual conversation.",
        "Grammar is crucial for clear communication.",
      ],
      answer: [
        "Grammar provides the structure for effective communication.",
        "Grammar is crucial for clear communication.",
      ],
      explanation:
        "The speaker emphasizes that learning grammar is essential for clear and effective communication.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 5,
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
      questionId: 6,
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
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 7,
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
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 8,
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
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about the use of adverbs?",
      text: "Adverbs modify verbs, adjectives, or other adverbs, providing information about how, when, where, or to what extent an action is performed. They can add depth to writing and clarify meaning.",
      options: [
        "Adverbs are unnecessary in writing.",
        "Adverbs only modify nouns.",
        "Adverbs enhance clarity and depth in writing.",
        "Adverbs should be avoided in formal writing.",
      ],
      answer: "Adverbs enhance clarity and depth in writing.",
      explanation:
        "The speaker emphasizes that adverbs play a crucial role in clarifying meaning and adding depth to writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about the use of passive voice?",
      text: "While passive voice can be useful in certain contexts, it often makes sentences less direct and can lead to ambiguity. Using active voice is generally preferred for clarity and engagement.",
      options: [
        "Passive voice is always preferred in writing.",
        "Passive voice makes writing clearer.",
        "Active voice is generally preferred for clarity.",
        "Passive voice should never be used.",
      ],
      answer: "Active voice is generally preferred for clarity.",
      explanation:
        "The speaker suggests that active voice is typically more effective for clear communication than passive voice.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about common sense?",
      text: "Using common sense can help you avoid _____ in everyday situations.",
      options: ["trouble", "success", "happiness", "confusion"],
      answer: "trouble",
      explanation:
        "The speaker highlights that applying common sense can help prevent trouble in daily life.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about safety?",
      text: "Common sense dictates that you should always prioritize your _____ when making decisions.",
      options: ["safety", "profit", "time", "comfort"],
      answer: "safety",
      explanation:
        "The speaker emphasizes that safety should always be a priority in decision-making.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 13,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Health care systems around the world are facing numerous 'challenges', including rising costs and access to quality care. Reforming these systems is essential for improving health outcomes.",
      text: "Health care systems around the world are facing numerous 'issues', including rising costs and access to quality 'treatment'. Reforming these systems is essential for improving health 'results'.",
      answer:
        "Health care systems around the world are facing numerous 'issues', including rising costs and access to quality 'treatment'. Reforming these systems is essential for improving health 'results'.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "Cultural diversity enriches societies by bringing together different perspectives, traditions, and ideas. It fosters creativity and innovation, contributing to social and economic growth.",
      text: "Cultural diversity enriches 'communities' by bringing together different perspectives, traditions, and 'ideas'. It fosters creativity and 'originality', contributing to social and economic 'development'.",
      answer:
        "Cultural diversity enriches 'communities' by bringing together different perspectives, traditions, and 'ideas'. It fosters creativity and 'originality', contributing to social and economic 'development'.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },

    {
      questionId: 15,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Common sense is often the first line of defense against potential problems.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Exercising common sense can help us make more informed choices.",
      type: "dictation",
      moduleType: "listening",
    },
  ];

  const mock6 = [
    {
      questionId: 13,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report discusses the impact of fast fashion on the environment, emphasizing issues such as waste and pollution. The speaker advocates for sustainable fashion choices and encourages consumers to be mindful of their purchasing habits.",
      sampleSummary:
        "Fast fashion significantly impacts the environment, contributing to waste and pollution through unsustainable production practices. The speaker emphasizes the need for consumers to make sustainable fashion choices, such as buying second-hand or supporting ethical brands. By being mindful of purchasing habits, individuals can reduce their environmental footprint and promote a more sustainable fashion industry.",
    },
    {
      questionId: 14,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker highlights the role of art in society, discussing its ability to inspire change and foster community engagement. They emphasize the importance of supporting local artists and cultural initiatives.",
      sampleSummary:
        "Art plays a vital role in society by inspiring change and fostering community engagement. The speaker discusses how art can serve as a powerful tool for social commentary and transformation. They emphasize the importance of supporting local artists and cultural initiatives, as these efforts enrich communities and promote creativity, ultimately leading to a more vibrant and inclusive society.",
    },
    {
      questionId: 3,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker suggest about the use of idioms?",
      text: "Idioms are expressions that have a figurative meaning different from the literal meaning of the individual words. Understanding idioms is important for comprehending native-level speech and writing.",
      options: [
        "Idioms should be avoided in formal writing.",
        "Idioms are not important for language proficiency.",
        "Idioms have a figurative meaning different from the literal meaning.",
        "Idioms are always confusing and should be ignored.",
      ],
      answer: [
        "Idioms have a figurative meaning different from the literal meaning.",
      ],
      explanation:
        "The speaker defines idioms as expressions with a figurative meaning that differs from the literal meaning of the individual words.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 4,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker suggest about the use of figurative language?",
      text: "Using figurative language, such as metaphors and similes, can add richness and depth to your writing. Figurative expressions allow you to create vivid images and convey complex ideas more effectively.",
      options: [
        "Figurative language should be avoided in formal writing.",
        "Figurative language enhances the richness of writing.",
        "Figurative language is only useful for creative writing.",
        "Figurative language can convey complex ideas.",
      ],
      answer: [
        "Figurative language enhances the richness of writing.",
        "Figurative language can convey complex ideas.",
      ],
      explanation:
        "The speaker emphasizes that figurative language adds depth and richness to writing while allowing for the expression of complex ideas.",
      type: "multiple",
      moduleType: "listening",
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
      questionId: 19,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The significance of biodiversity cannot be overstated.",
      para: "Biodiversity contributes to ecosystem 'blank' and resilience. Protecting various species is essential for maintaining 'blank' health. Conservation efforts aim to preserve habitats and 'blank' endangered species.",
      answer: {
        1: "stability",
        2: "planetary",
        3: "protect",
      },
    },
    {
      type: "highLightCorrectSummary",
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
      type: "highLightCorrectSummary",
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
      questionId: 7,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about the use of adverbs?",
      text: "Adverbs modify verbs, adjectives, or other adverbs, providing information about how, when, where, or to what extent an action is performed. They can add depth to writing and clarify meaning.",
      options: [
        "Adverbs are unnecessary in writing.",
        "Adverbs only modify nouns.",
        "Adverbs enhance clarity and depth in writing.",
        "Adverbs should be avoided in formal writing.",
      ],
      answer: "Adverbs enhance clarity and depth in writing.",
      explanation:
        "The speaker emphasizes that adverbs play a crucial role in clarifying meaning and adding depth to writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 8,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about the use of passive voice?",
      text: "While passive voice can be useful in certain contexts, it often makes sentences less direct and can lead to ambiguity. Using active voice is generally preferred for clarity and engagement.",
      options: [
        "Passive voice is always preferred in writing.",
        "Passive voice makes writing clearer.",
        "Active voice is generally preferred for clarity.",
        "Passive voice should never be used.",
      ],
      answer: "Active voice is generally preferred for clarity.",
      explanation:
        "The speaker suggests that active voice is typically more effective for clear communication than passive voice.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 5,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about trust?",
      text: "Building trust takes time and requires consistent _____ in your actions.",
      options: ["integrity", "effort", "communication", "patience"],
      answer: "integrity",
      explanation:
        "The speaker highlights that integrity is crucial for building trust with others.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 6,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about teamwork?",
      text: "Effective teamwork relies on clear _____ and mutual respect among team members.",
      options: ["communication", "goals", "effort", "trust"],
      answer: "communication",
      explanation:
        "The speaker emphasizes that communication is key to successful teamwork.",
      type: "missingWord",
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
      type: "highLightInCorrectWord",
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
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 1,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Common sense is often the foundation of good judgment.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 2,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Applying common sense can help us avoid potential pitfalls.",
      type: "dictation",
      moduleType: "listening",
    },
  ];

  const mock7 = [
    {
      questionId: 1,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report discusses the benefits of meditation, including stress reduction and improved focus. The speaker encourages individuals to incorporate mindfulness practices into their daily routines for better mental well-being.",
      sampleSummary:
        "Meditation offers numerous benefits, such as stress reduction and improved focus. The speaker emphasizes the importance of incorporating mindfulness practices into daily routines to enhance mental well-being. By dedicating just a few minutes each day to meditation, individuals can cultivate a sense of calm and clarity, ultimately leading to a more balanced and fulfilling life.",
    },
    {
      questionId: 2,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker discusses the significance of nutrition in maintaining health, highlighting the importance of a balanced diet. They also address common dietary misconceptions and encourage informed food choices.",
      sampleSummary:
        "Nutrition is fundamental to maintaining overall health, and a balanced diet is essential for providing the body with necessary nutrients. The speaker addresses common dietary misconceptions, such as the belief that all fats are bad, and encourages individuals to make informed food choices. By understanding nutrition better, people can improve their health and well-being.",
    },
    {
      questionId: 3,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker suggest about the importance of context in understanding vocabulary?",
      text: "Understanding the context in which a word is used is crucial for grasping its meaning. Context clues can help you infer the meaning of unfamiliar words and enhance comprehension.",
      options: [
        "Context is not important for understanding vocabulary.",
        "Context clues can help infer meanings.",
        "Ignoring context can lead to misunderstandings.",
        "Context is only useful for advanced vocabulary learners.",
      ],
      answer: [
        "Context clues can help infer meanings.",
        "Ignoring context can lead to misunderstandings.",
      ],
      explanation:
        "The speaker emphasizes that context is vital for understanding vocabulary and avoiding misunderstandings.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 4,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker suggest about the use of word roots?",
      text: "Understanding word roots can help you decipher the meanings of unfamiliar words. Many English words are derived from Greek and Latin roots, and knowing these can aid in vocabulary acquisition.",
      options: [
        "Word roots are not important for vocabulary.",
        "Word roots can help determine meanings.",
        "Word roots are only useful for advanced learners.",
        "Many English words come from Greek and Latin roots.",
      ],
      answer: [
        "Word roots can help determine meanings.",
        "Many English words come from Greek and Latin roots.",
      ],
      explanation:
        "The speaker highlights that knowing word roots is beneficial for understanding unfamiliar vocabulary.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 5,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The study of history helps us understand our past and shape our future.",
      para: "Historians analyze 'blank' events to draw lessons for today. Understanding historical contexts can inform 'blank' decisions and policies. This knowledge is vital for fostering 'blank' citizenship.",
      answer: {
        1: "historical",
        2: "informed",
        3: "responsible",
      },
    },
    {
      questionId: 6,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The importance of teamwork in the workplace is widely recognized.",
      para: "Effective teams leverage diverse 'blank' to achieve common goals. Collaboration fosters innovation and 'blank' problem-solving. Organizations that promote teamwork often see improved 'blank' and morale.",
      answer: {
        1: "perspectives",
        2: "effective",
        3: "productivity",
      },
    },
    {
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 7,
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
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 8,
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
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about sentence structure?",
      text: "Understanding sentence structure is crucial for effective writing. It involves knowing how to combine clauses and phrases to create clear, coherent sentences that convey the intended message.",
      options: [
        "Sentence structure is not important for writing.",
        "Only complex sentences are effective.",
        "Understanding sentence structure is crucial for clarity.",
        "Sentence structure should be ignored in casual writing.",
      ],
      answer: "Understanding sentence structure is crucial for clarity.",
      explanation:
        "The speaker emphasizes that a good grasp of sentence structure is essential for clear and effective writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about punctuation?",
      text: "Punctuation marks are essential for conveying meaning in writing. They indicate pauses, separate ideas, and help clarify the relationships between different parts of a sentence.",
      options: [
        "Punctuation is optional in informal writing.",
        "Punctuation marks are not important for understanding.",
        "Punctuation helps clarify meaning and structure.",
        "Punctuation rules are always flexible.",
      ],
      answer: "Punctuation helps clarify meaning and structure.",
      explanation:
        "The speaker highlights the importance of punctuation in ensuring clarity and coherence in writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about problem-solving?",
      text: "Common sense often leads to practical solutions when faced with _____ challenges.",
      options: ["complex", "simple", "financial", "emotional"],
      answer: "complex",
      explanation:
        "The speaker highlights that common sense can provide practical solutions to complex problems.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about personal growth?",
      text: "Learning from mistakes is an important part of personal _____ and development.",
      options: ["growth", "failure", "success", "experience"],
      answer: "growth",
      explanation:
        "The speaker emphasizes that learning from mistakes contributes to personal growth.",
      type: "missingWord",
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
      type: "highLightInCorrectWord",
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
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },

    {
      questionId: 15,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Common sense is a valuable asset in any situation.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Developing common sense can help us make better choices in life.",
      type: "dictation",
      moduleType: "listening",
    },
  ];

  const mock8 = [
    {
      questionId: 17,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report highlights the challenges of remote work, including feelings of isolation and difficulties in communication. The speaker suggests strategies for maintaining productivity and fostering connections among remote teams.",
      sampleSummary:
        "Remote work presents several challenges, including feelings of isolation and communication difficulties among team members. The speaker discusses the importance of maintaining productivity in this environment and suggests strategies to foster connections, such as regular virtual meetings and team-building activities. By implementing these strategies, remote teams can enhance collaboration and support each other effectively.",
    },
    {
      questionId: 18,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker discusses the importance of ethical consumerism, explaining how purchasing decisions can impact the environment and society. They encourage consumers to support brands that prioritize sustainability and social responsibility.",
      sampleSummary:
        "Ethical consumerism is increasingly important as purchasing decisions can significantly impact both the environment and society. The speaker emphasizes the need for consumers to be mindful of their choices and to support brands that prioritize sustainability and social responsibility. By doing so, individuals can contribute to positive change and promote a more equitable and sustainable marketplace.",
    },
    {
      questionId: 3,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker suggest about vocabulary learning strategies?",
      text: "Effective vocabulary learning strategies include using flashcards, engaging in conversations, and reading extensively. These methods can reinforce memory and understanding of new words.",
      options: [
        "Using flashcards is an effective strategy.",
        "Reading extensively helps with vocabulary.",
        "Engaging in conversations is not helpful.",
        "Vocabulary learning strategies are unnecessary.",
      ],
      answer: [
        "Using flashcards is an effective strategy.",
        "Reading extensively helps with vocabulary.",
      ],
      explanation:
        "The speaker emphasizes that using various strategies, such as flashcards and reading, can significantly enhance vocabulary learning.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 4,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker suggest about the role of context in vocabulary acquisition?",
      text: "Context plays a vital role in vocabulary acquisition. By encountering words in various contexts, learners can better understand their meanings and usage. This exposure helps reinforce learning and retention.",
      options: [
        "Context is not important for vocabulary acquisition.",
        "Encountering words in context enhances understanding.",
        "Context helps reinforce learning and retention.",
        "Contextual learning is only useful for advanced learners.",
      ],
      answer: [
        "Encountering words in context enhances understanding.",
        "Context helps reinforce learning and retention.",
      ],
      explanation:
        "The speaker emphasizes that context is essential for effective vocabulary acquisition and retention.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 22,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The evolution of transportation has transformed society.",
      para: "From horse-drawn carriages to electric cars, 'blank' has come a long way. Advances in technology continue to shape how we 'blank' and travel. Sustainable options are becoming increasingly 'blank'.",
      answer: {
        1: "transportation",
        2: "commute",
        3: "popular",
      },
    },
    {
      questionId: 23,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The significance of water conservation is critical in today's world.",
      para: "As populations grow, the demand for 'blank' increases. Implementing conservation strategies can help ensure a sustainable 'blank' supply. Awareness campaigns aim to educate communities about 'blank' practices.",
      answer: {
        1: "water",
        2: "water",
        3: "conservation",
      },
    },
    {
      type: "highLightCorrectSummary",
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
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 19,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The role of innovation in driving economic growth is crucial.",
      options: [
        "Innovation is only important for technology companies.",
        "Economic growth is not affected by innovation.",
        "Innovative practices lead to new job creation.",
        "Innovation has little impact on traditional industries.",
      ],
      answer: "Innovative practices lead to new job creation.",
    },
    {
      questionId: 5,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about the role of adjectives?",
      text: "Adjectives are words that describe nouns and provide additional information about them, such as color, size, and quality. They enhance writing by adding detail and specificity.",
      options: [
        "Adjectives are not necessary in writing.",
        "Adjectives only describe verbs.",
        "Adjectives provide detail and enhance writing.",
        "Adjectives should be avoided in formal writing.",
      ],
      answer: "Adjectives provide detail and enhance writing.",
      explanation:
        "The speaker highlights the importance of adjectives in adding detail and specificity to writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 6,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about the use of adverbs?",
      text: "Adverbs modify verbs, adjectives, or other adverbs, providing information about how, when, where, or to what extent an action is performed. They can add depth to writing and clarify meaning.",
      options: [
        "Adverbs are unnecessary in writing.",
        "Adverbs only modify nouns.",
        "Adverbs enhance clarity and depth in writing.",
        "Adverbs should be avoided in formal writing.",
      ],
      answer: "Adverbs enhance clarity and depth in writing.",
      explanation:
        "The speaker emphasizes that adverbs play a crucial role in clarifying meaning and adding depth to writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 7,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about critical thinking?",
      text: "Common sense requires the ability to think _____ and evaluate situations logically.",
      options: ["critically", "quickly", "emotionally", "creatively"],
      answer: "critically",
      explanation:
        "The speaker highlights that critical thinking is essential for applying common sense effectively.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 8,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about decision-making?",
      text: "When making decisions, it's important to weigh the _____ and consider the consequences.",
      options: ["pros", "cons", "options", "alternatives"],
      answer: "pros",
      explanation:
        "The speaker emphasizes the importance of evaluating the pros and cons when making decisions.",
      type: "missingWord",
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
      type: "highLightInCorrectWord",
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
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 1,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Common sense is often the key to solving complex problems.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 2,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Applying common sense can help us avoid making costly mistakes.",
      type: "dictation",
      moduleType: "listening",
    },
  ];

  const mock9 = [
    {
      questionId: 1,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report examines the effects of screen time on children, highlighting potential impacts on physical health and social skills. The speaker suggests setting limits on screen time and encouraging outdoor activities.",
      sampleSummary:
        "Excessive screen time can have detrimental effects on children's physical health and social skills. The speaker discusses the importance of setting limits on screen time to promote healthier habits. They also encourage parents and caregivers to foster outdoor activities and face-to-face interactions, which are essential for children's development and well-being.",
    },
    {
      questionId: 2,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report discusses the impact of global warming on sea levels, noting that rising temperatures contribute to melting ice caps and thermal expansion of water. The speaker emphasizes the need for urgent action to address climate change.",
      sampleSummary:
        "Global warming has a significant impact on sea levels, primarily due to the melting of ice caps and the thermal expansion of water as temperatures rise. The speaker stresses the urgency of taking action to combat climate change, highlighting the potential consequences for coastal communities and ecosystems if immediate measures are not implemented.",
    },
    {
      questionId: 3,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2:
        "What does the speaker suggest about the importance of clarity in writing?",
      text: "Clarity in writing is essential for effective communication. It ensures that the reader understands the message without confusion. Using clear language, proper grammar, and well-structured sentences contributes to clarity.",
      options: [
        "Clarity is not important in informal writing.",
        "Clarity ensures effective communication.",
        "Clarity can be achieved through complex language.",
        "Clear writing helps prevent misunderstandings.",
      ],
      answer: [
        "Clarity ensures effective communication.",
        "Clear writing helps prevent misunderstandings.",
      ],
      explanation:
        "The speaker emphasizes that clarity in writing is crucial for ensuring that the reader understands the intended message.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 4,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker suggest about the use of commas?",
      text: "Commas are important punctuation marks that help clarify meaning in sentences. They can indicate pauses, separate items in a list, and set off introductory elements. Proper use of commas can enhance readability.",
      options: [
        "Commas are optional in all writing.",
        "Commas help clarify meaning.",
        "Commas should be used to separate items in a list.",
        "Commas are not necessary in formal writing.",
      ],
      answer: [
        "Commas help clarify meaning.",
        "Commas should be used to separate items in a list.",
      ],
      explanation:
        "The speaker highlights that commas play a crucial role in enhancing clarity and readability in writing.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 5,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The role of education in society is foundational.",
      para: "Education equips individuals with the 'blank' and skills necessary for success. It fosters critical thinking and 'blank' awareness. A well-educated population contributes to 'blank' development.",
      answer: {
        1: "knowledge",
        2: "social",
        3: "societal",
      },
    },
    {
      questionId: 6,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The impact of climate change on wildlife is alarming.",
      para: "Many species are at risk due to changing 'blank' conditions. Conservationists are working to protect habitats and 'blank' biodiversity. Addressing climate change is essential for ensuring 'blank' survival.",
      answer: {
        1: "climatic",
        2: "preserve",
        3: "species",
      },
    },
    {
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 7,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The impact of artificial intelligence on the workforce is significant.",
      options: [
        "AI will eliminate all jobs in the future.",
        "AI can enhance productivity and efficiency.",
        "AI has no effect on job creation.",
        "Only low-skilled jobs are at risk due to AI.",
      ],
      answer: "AI can enhance productivity and efficiency.",
    },
    {
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 8,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The significance of ethical consumerism is growing in today's market.",
      options: [
        "Consumers are indifferent to ethical considerations.",
        "Ethical consumerism promotes responsible purchasing.",
        "Ethical consumerism is only a trend.",
        "There is no demand for ethically produced goods.",
      ],
      answer: "Ethical consumerism promotes responsible purchasing.",
    },
    {
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about the use of passive voice?",
      text: "While passive voice can be useful in certain contexts, it often makes sentences less direct and can lead to ambiguity. Using active voice is generally preferred for clarity and engagement.",
      options: [
        "Passive voice is always preferred in writing.",
        "Passive voice makes writing clearer.",
        "Active voice is generally preferred for clarity.",
        "Passive voice should never be used.",
      ],
      answer: "Active voice is generally preferred for clarity.",
      explanation:
        "The speaker suggests that active voice is typically more effective for clear communication than passive voice.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about sentence structure?",
      text: "Understanding sentence structure is crucial for effective writing. It involves knowing how to combine clauses and phrases to create clear, coherent sentences that convey the intended message.",
      options: [
        "Sentence structure is not important for writing.",
        "Only complex sentences are effective.",
        "Understanding sentence structure is crucial for clarity.",
        "Sentence structure should be ignored in casual writing.",
      ],
      answer: "Understanding sentence structure is crucial for clarity.",
      explanation:
        "The speaker emphasizes that a good grasp of sentence structure is essential for clear and effective writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about communication?",
      text: "Clear communication can prevent _____ and misunderstandings in relationships.",
      options: ["conflict", "success", "trust", "growth"],
      answer: "conflict",
      explanation:
        "The speaker highlights that effective communication can help avoid conflicts in relationships.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about empathy?",
      text: "Practicing empathy can improve _____ and strengthen relationships.",
      options: ["communication", "understanding", "trust", "growth"],
      answer: "understanding",
      explanation:
        "The speaker emphasizes that empathy fosters better understanding in relationships.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 13,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The impact of globalization on local economies is profound. It creates new opportunities for trade and cultural exchange but also presents challenges.",
      text: "The impact of globalization on local 'markets' is profound. It creates new 'opportunities' for trade and cultural 'interaction' but also presents challenges.",
      answer:
        "The impact of globalization on local 'markets' is profound. It creates new 'opportunities' for trade and cultural 'interaction' but also presents challenges.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The significance of biodiversity is critical for maintaining healthy ecosystems. Protecting various species ensures ecological balance.",
      text: "The significance of biodiversity is critical for maintaining healthy 'environments'. Protecting various 'organisms' ensures ecological balance.",
      answer:
        "The significance of biodiversity is critical for maintaining healthy 'environments'. Protecting various 'organisms' ensures ecological balance.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 15,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Common sense is often the foundation of successful problem-solving.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Developing common sense can help us navigate through life's challenges.",
      type: "dictation",
      moduleType: "listening",
    },
  ];

  const mock10 = [
    {
      questionId: 1,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The speaker highlights the benefits of reading for pleasure, discussing its impact on mental health and cognitive development. They encourage individuals to make time for reading as a way to relax and stimulate the mind.",
      sampleSummary:
        "Reading for pleasure offers numerous benefits, including positive impacts on mental health and cognitive development. The speaker emphasizes that making time for reading can serve as a form of relaxation and mental stimulation. By engaging with literature, individuals can enhance their creativity, expand their vocabulary, and gain new perspectives on life.",
    },
    {
      questionId: 2,
      heading:
        "You will hear a short report. Write a summary for a fellow student who was not present. You should write 50-70 words.",
      type: "summarize",
      moduleType: "listening",
      heading2:
        "You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the report.",
      text: "The report discusses the importance of cybersecurity in today's digital age, highlighting the increasing number of cyber threats. The speaker emphasizes the need for individuals and organizations to adopt robust security measures to protect sensitive information.",
      sampleSummary:
        "In today's digital age, cybersecurity is more important than ever due to the rising number of cyber threats targeting individuals and organizations. The speaker stresses the necessity of adopting robust security measures, such as strong passwords and regular software updates, to protect sensitive information. By prioritizing cybersecurity, we can safeguard our data and maintain privacy in an increasingly connected world.",
    },
    {
      questionId: 3,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker suggest about the use of conjunctions?",
      text: "Conjunctions are essential for connecting words, phrases, and clauses. They help create complex sentences and show relationships between ideas, making writing more cohesive and fluid.",
      options: [
        "Conjunctions are unnecessary in writing.",
        "Conjunctions connect words and phrases.",
        "Conjunctions should be avoided in formal writing.",
        "Conjunctions enhance the flow of writing.",
      ],
      answer: [
        "Conjunctions connect words and phrases.",
        "Conjunctions enhance the flow of writing.",
      ],
      explanation:
        "The speaker emphasizes that conjunctions are vital for linking ideas and improving the overall coherence of writing.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 4,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct responses. More than one response may be correct.",
      heading2: "What does the speaker suggest about the role of adverbs?",
      text: "Adverbs modify verbs, adjectives, or other adverbs, providing information about how, when, where, or to what extent an action is performed. They add depth to writing and clarify meaning.",
      options: [
        "Adverbs are unnecessary in writing.",
        "Adverbs enhance clarity and depth.",
        "Adverbs only modify nouns.",
        "Adverbs are important for understanding actions.",
      ],
      answer: [
        "Adverbs enhance clarity and depth.",
        "Adverbs are important for understanding actions.",
      ],
      explanation:
        "The speaker highlights that adverbs play a crucial role in modifying actions and improving clarity in writing.",
      type: "multiple",
      moduleType: "listening",
    },
    {
      questionId: 5,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The importance of cultural diversity enriches societies.",
      para: "Cultural exchange fosters understanding and 'blank' among communities. Celebrating diversity can lead to 'blank' innovation and creativity. Societies that embrace cultural differences often experience 'blank' growth.",
      answer: {
        1: "connection",
        2: "greater",
        3: "economic",
      },
    },

    {
      questionId: 6,
      heading: "You will hear a recording.Type missing word in each blank",
      moduleType: "listening",
      type: "fillUps",
      text: "The benefits of regular physical activity are well-documented.",
      para: "Exercise contributes to physical and mental 'blank'. It helps reduce stress and improves 'blank'. Incorporating physical activity into daily routines is crucial for maintaining 'blank'.",
      answer: {
        1: "health",
        2: "well-being",
        3: "fitness",
      },
    },
    {
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 7,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The importance of lifelong learning in personal and professional development is crucial.",
      options: [
        "Lifelong learning is only for older adults.",
        "Continuous learning helps individuals adapt to changes.",
        "Lifelong learning is not necessary in today's world.",
        "Only formal education matters for career advancement.",
      ],
      answer: "Continuous learning helps individuals adapt to changes.",
    },
    {
      type: "highLightCorrectSummary",
      moduleType: "listening",
      questionId: 8,
      heading:
        "You will hear a recording. Click on the paragraph that best relates to the recording.",
      text: "The role of youth in shaping the future is increasingly recognized.",
      options: [
        "Youth have little influence on societal change.",
        "Young people are essential for driving innovation.",
        "Youth involvement is not important for democracy.",
        "Only adults can create meaningful change.",
      ],
      answer: "Young people are essential for driving innovation.",
    },
    {
      questionId: 9,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the speaker suggest about punctuation?",
      text: "Punctuation marks are essential for conveying meaning in writing. They indicate pauses, separate ideas, and help clarify the relationships between different parts of a sentence.",
      options: [
        "Punctuation is optional in informal writing.",
        "Punctuation marks are not important for understanding.",
        "Punctuation helps clarify meaning and structure.",
        "Punctuation rules are always flexible.",
      ],
      answer: "Punctuation helps clarify meaning and structure.",
      explanation:
        "The speaker highlights the importance of punctuation in ensuring clarity and coherence in writing.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 10,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What does the speaker suggest about the importance of vocabulary?",
      text: "A rich vocabulary allows for more precise expression of thoughts and ideas. It enhances communication skills and can improve reading comprehension and writing quality.",
      options: [
        "Vocabulary is not important for effective communication.",
        "A strong vocabulary is only necessary for academic writing.",
        "A rich vocabulary enhances communication and expression.",
        "Vocabulary should be limited to basic words.",
      ],
      answer: "A rich vocabulary enhances communication and expression.",
      explanation:
        "The speaker emphasizes that a strong vocabulary significantly improves one's ability to communicate effectively.",
      moduleType: "listening",
      type: "single",
    },
    {
      questionId: 11,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2:
        "What word completes the speaker's statement about responsibility?",
      text: "Taking responsibility for your actions is a sign of _____ and maturity.",
      options: ["growth", "wisdom", "strength", "fear"],
      answer: "growth",
      explanation:
        "The speaker highlights that taking responsibility is indicative of personal growth and maturity.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 12,
      heading:
        "Listen to the recording and answer the multiple-choice question by selecting the missing word. Only one response is correct.",
      heading2: "What word completes the speaker's statement about teamwork?",
      text: "Effective teamwork relies on clear _____ and mutual respect among team members.",
      options: ["communication", "goals", "effort", "trust"],
      answer: "communication",
      explanation:
        "The speaker emphasizes that communication is key to successful teamwork.",
      type: "missingWord",
      moduleType: "listening",
    },
    {
      questionId: 13,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The arts play a vital role in society by fostering creativity and providing a means of expression. They reflect cultural values and challenge societal norms.",
      text: "The arts play a vital role in 'communities' by fostering 'creativity' and providing a means of 'articulation'. They reflect cultural values and challenge societal 'standards'.",
      answer:
        "The arts play a vital role in 'communities' by fostering 'creativity' and providing a means of 'articulation'. They reflect cultural values and challenge societal 'standards'.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 14,
      heading:
        "You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker(s) said. Please click on the words that are different.",
      summary:
        "The importance of teamwork in achieving organizational goals is well-documented. Collaborative efforts lead to improved outcomes and innovation.",
      text: "The importance of teamwork in achieving 'business' goals is well-documented. Collaborative efforts lead to improved 'results' and innovation.",
      answer:
        "The importance of teamwork in achieving 'business' goals is well-documented. Collaborative efforts lead to improved 'results' and innovation.",
      type: "highLightInCorrectWord",
      moduleType: "listening",
    },
    {
      questionId: 15,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Common sense is often the first step towards making wise decisions.",
      type: "dictation",
      moduleType: "listening",
    },
    {
      questionId: 16,
      heading:
        "You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.",
      text: "Applying common sense can help us avoid potential conflicts.",
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
    } else if (mockNumber === "eigth") {
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
            <p>Listening Mock Test First</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("second")}
          >
            <p>Listening Mock Test Second</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("third")}
          >
            <p>Listening Mock Test Third</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("fourth")}
          >
            <p>Listening Mock Test Fourth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("fifth")}
          >
            <p>Listening Mock Test Fifth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("sixth")}
          >
            <p>Listening Mock Test Sixth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("seventh")}
          >
            <p>Listening Mock Test Seventh</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("eigth")}
          >
            <p>Listening Mock Test Eigth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("ninth")}
          >
            <p>Listening Mock Test Ninth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("tenth")}
          >
            <p>Listening Mock Test Tenth</p>
          </div>
        </div>
      ) : (
        // <MockTestCommon que={questions} />
        <Listening que={questions} mockTestNumber={mockTestNumber} />
      )}
    </div>
  );
}

export default ListeningMockTest;
