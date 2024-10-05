import React, { useState } from "react";
import MockTestCommon from "../MockTestCommon";
import "./ReadingMockTest.css";
import Reading from "../../Reading/Reading";
function ReadingMockTest({ hideNav }) {
  // const mock1 = [
  //   {
  //     QuestionID: 1,
  //     Heading:
  //       "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
  //     Paragraph:
  //       "The approach to the methodology of learning and teaching has to be comprehensive, presenting all options in an explicit and transparent way. and avoiding advocacy or dogmatism. It has been our fundamental methodological principle that the methods to be employed in language learning, teaching and research are those considered to be most effective in reaching the objectives agreed in the light of the needs of the individual learners in their social context. Effectiveness is contingent on the motivations and characteristics of the learners as well as the nature of the human and material resources which can be brought into play.",
  //     Question: "What point is the writer making in this paragraph?",
  //     Options: [
  //       "Motivation is worth more than intelligence in leaming.",
  //       "Language can be effectively learnt through play.",
  //       "There is no single best method for learning.",
  //       "Teachers should regularly change their methods.",
  //     ],
  //     selection: "single",
  //   },
  //   {
  //     QuestionID: 2,
  //     Heading:
  //       "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
  //     Paragraph:
  //       "In many ways Britten's most ambitious effort is the War Requiem of 1961, a flawed but still impressive work for chorus, soloists, and orchestra. It weaves together the traditional Latin Mass for the Dead with antiwar poems by Wilfrid Owen, a young officer killed in World War I. The point of War Requiem is how the words of the liturgical text are reinterpreted and often rendered hollow by the realities of death in war. In this work we see Britten's prodigal inconsistencies on display. For all its problems, the War Requiem will probably survive as one of our time's most impassioned indictments of war and its heroic myth.",
  //     Question:
  //       "Which of the following most accurately summarizes the opinion of the author in the text?",
  //     Options: [
  //       "He finds the weaving together of the Latin Mass and antiwar poems to be quite effective.",
  //       "He is critical of Britten's inconsistencies as observed in the War Requiem.",
  //       "He admires the War Requiem of Britten but finds it far from perfect.",
  //       "He questions whether Britten's work will endure.",
  //     ],
  //     selection: "single",
  //   },
  //   {
  //     QuestionID: 3,
  //     Heading:
  //       "Read the text and answer the question by selecting all correct responses. More than one response is correct.",
  //     Paragraph:
  //       "Who Are Aborigines? Aborigines are Australia's indigenous people. Recent government statistics counted approximately 400,000 aboriginal people, or about 2% of Australia's total population.Australian Aborigines migrated from somewhere in Asia at least 30,000 years ago. Though they comprise 500-600 distinct groups, aboriginal people possess some unifying links. Among these are strong spiritual beliefs that tie them to the land, a tribal culture of storytelling and art, and, like other indigenous populations, a difficult colonial history.The Dreamtime: Aboriginal spirituality entails a close relationship between humans and the land. Aborigines call the beginning of the world the 'Dreaming' or 'Dreamtime'. In the 'Dreamtime', aboriginal 'Ancestors' rose from below the earth to form various parts of nature including animal species, bodies of water, and the sky. Unlike other religions, however, aboriginal belief does not place the human species apart from or on a higher level than nature. Aborigines believe some of the Ancestors metamorphosed into nature (as in rock formations or rivers), where they remain spiritually alive.Storytelling, Art, and the Didgeridoo: The oral tradition of storytelling informs aboriginals' vibrant cultural life. Songs illustrate the Dreamtime and other tales of the land, while dances and diagrams drawn in the sand accompany oral tales. In the Northern Territory, aboriginal art includes sculpture, bark and rock paintings, and baskets and beadwork. Rock carvings and paintings can be found in such places as Arnhem Land, Ubirr, and Nourlangie. Many aborigines earn a living through selling native artworks.Aboriginal music is often recognizable for its most famous instrument, the didgeridoo. A wind instrument typically made from bamboo, it extends about five feet and produces a low, vibrating hum. Aborigines use didgeridoos in formal ceremonies at such events as sunsets, circumcisions, and funerals.",
  //     Question:
  //       "Which of the following statements about Australian Aborigines can be supported from this text?",
  //     Options: [
  //       "It is estimated that the population of Australian Aborigines peaked at about 400,000 some 30,000 years before white settlement.",
  //       "Despite being recognised internationally, the Aboriginal musical instrument the didgeridoo, rarely plays a significant role in Aboriginal cultural ceremonies.",
  //       "Today Aborigines comprise approximately 2% of the Australian population.",
  //       "Aboriginal culture is based on a belief that people, animals, and the land are integrally linked.",
  //       "Unlike many other indigenous cultures, Australian Aborigines developed equitable relationships with colonial powers.",
  //     ],
  //     selection: "multiple",
  //   },
  // ];
  const mock1 = [
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
      questionId: 5,
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
      questionId: 6,
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
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Abnormal psychology is the branch of psychology that deals with the study of abnormal behavior and psychological disorders.",
        "It aims to understand the nature, causes, and treatment of mental disorders.",
        "The field encompasses various theoretical perspectives, including biological, psychological, and sociocultural approaches.",
        "Understanding abnormal psychology is essential for effective diagnosis and treatment of mental health issues.",
      ],
      answers: [
        "Abnormal psychology is the branch of psychology that deals with the study of abnormal behavior and psychological disorders.",
        "It aims to understand the nature, causes, and treatment of mental disorders.",
        "The field encompasses various theoretical perspectives, including biological, psychological, and sociocultural approaches.",
        "Understanding abnormal psychology is essential for effective diagnosis and treatment of mental health issues.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The DSM (Diagnostic and Statistical Manual of Mental Disorders) is a widely used classification system for diagnosing mental disorders.",
        "It provides standardized criteria for the diagnosis of various psychological conditions.",
        "The DSM is regularly updated to reflect new research and changes in the understanding of mental health.",
        "Critics argue that the DSM may pathologize normal behavior and that cultural factors should be considered in diagnosis.",
      ],
      answers: [
        "The DSM (Diagnostic and Statistical Manual of Mental Disorders) is a widely used classification system for diagnosing mental disorders.",
        "It provides standardized criteria for the diagnosis of various psychological conditions.",
        "The DSM is regularly updated to reflect new research and changes in the understanding of mental health.",
        "Critics argue that the DSM may pathologize normal behavior and that cultural factors should be considered in diagnosis.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 3,
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
      questionId: 4,
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
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "Which of the following most accurately summarizes the opinion of the author in the text?",
      para: "Economics is often defined as the study of how societies allocate scarce resources among competing uses. This definition highlights the fundamental problem of scarcity, which forces individuals and societies to make choices. The decisions made can have profound implications for economic growth, distribution of wealth, and overall societal welfare.",
      options: [
        "Economics is solely about money.",
        "Scarcity is a central concept in economics.",
        "Economic growth is not important.",
        "Resources are unlimited.",
      ],
      answer: "Scarcity is a central concept in economics.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the primary focus of microeconomics?",
      para: "Microeconomics studies the behavior of individuals and firms in making decisions regarding the allocation of resources. It examines how these entities interact in markets and how they respond to changes in prices and incentives. Understanding microeconomic principles is essential for analyzing consumer behavior and market dynamics.",
      options: [
        "The economy as a whole.",
        "Individual and firm behavior.",
        "Government policies.",
        "International trade.",
      ],
      answer: "Individual and firm behavior.",
      type: "single",
      moduleType: "reading",
    },
  ];

  const mock2 = [
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Grammar is the set of rules that govern the structure of sentences in a language. Understanding grammar is essential for effective 'blank'. It helps in conveying messages clearly and accurately. Common grammar issues include 'blank' agreement, sentence fragments, and misplaced modifiers. Mastering these rules can greatly improve one's writing 'blank'.",
      options: [
        {
          id: 1,
          options: ["communication", "expression", "interaction", "dialogue"],
        },
        { id: 2, options: ["verb", "subject", "noun", "tense"] },
        { id: 3, options: ["style", "clarity", "structure", "flow"] },
      ],
      answers: ["communication", "subject", "clarity"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Vocabulary is a crucial component of language learning. A rich vocabulary allows individuals to express themselves more 'blank' and understand others better. Techniques for improving vocabulary include reading widely, using flashcards, and engaging in conversations. It is important to 'blank' new words in context to enhance retention and 'blank'.",
      options: [
        {
          id: 1,
          options: ["effectively", "clearly", "precisely", "articulately"],
        },
        { id: 2, options: ["practice", "memorize", "review", "learn"] },
        {
          id: 3,
          options: ["application", "usage", "understanding", "recognition"],
        },
      ],
      answers: ["effectively", "practice", "usage"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },

    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some effective strategies for improving paragraph writing?",
      para: "To improve paragraph writing, it is important to focus on developing a clear topic sentence, providing relevant supporting details, using appropriate transition words, and maintaining coherence throughout the paragraph.",
      options: [
        "Brainstorming and outlining before writing",
        "Avoiding repetition of words and phrases",
        "Incorporating complex sentence structures",
        "Revising and editing the paragraph",
      ],
      answers: [
        "Brainstorming and outlining before writing",
        "Avoiding repetition of words and phrases",
        "Revising and editing the paragraph",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some common issues that can affect the clarity and coherence of a paragraph?",
      para: "Common issues that can affect the clarity and coherence of a paragraph include unclear topic sentences, lack of supporting details, inconsistent use of verb tenses, and inappropriate use of transition words.",
      options: [
        "Unclear topic sentences",
        "Excessive use of passive voice",
        "Lack of supporting details",
        "Inappropriate use of transition words",
      ],
      answers: [
        "Unclear topic sentences",
        "Lack of supporting details",
        "Inappropriate use of transition words",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Anxiety disorders are characterized by excessive fear or anxiety that interferes with daily functioning.",
        "Common types include generalized anxiety disorder, panic disorder, and specific phobias.",
        "Cognitive-behavioral therapy (CBT) is an effective treatment for anxiety disorders, focusing on changing negative thought patterns.",
        "Medication, such as antidepressants and anti-anxiety drugs, may also be prescribed to manage symptoms.",
      ],
      answers: [
        "Anxiety disorders are characterized by excessive fear or anxiety that interferes with daily functioning.",
        "Common types include generalized anxiety disorder, panic disorder, and specific phobias.",
        "Cognitive-behavioral therapy (CBT) is an effective treatment for anxiety disorders, focusing on changing negative thought patterns.",
        "Medication, such as antidepressants and anti-anxiety drugs, may also be prescribed to manage symptoms.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Mood disorders, such as depression and bipolar disorder, involve significant changes in emotional states.",
        "Major depressive disorder is characterized by persistent feelings of sadness and loss of interest in activities.",
        "Bipolar disorder involves alternating episodes of depression and mania, marked by elevated mood and increased energy.",
        "Treatment options for mood disorders include psychotherapy, medication, and lifestyle changes.",
      ],
      answers: [
        "Mood disorders, such as depression and bipolar disorder, involve significant changes in emotional states.",
        "Major depressive disorder is characterized by persistent feelings of sadness and loss of interest in activities.",
        "Bipolar disorder involves alternating episodes of depression and mania, marked by elevated mood and increased energy.",
        "Treatment options for mood disorders include psychotherapy, medication, and lifestyle changes.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 3,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural relativism is the principle of understanding and evaluating a culture based on its own 'blank' rather than judging it by the standards of another culture. This approach fosters respect and appreciation for cultural diversity, allowing for a more nuanced understanding of human behavior.",
      options: [
        { id: 1, value: "values" },
        { id: 2, value: "practices" },
        { id: 3, value: "beliefs" },
        { id: 4, value: "norms" },
      ],
      answers: ["values"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural diffusion is the process by which cultural elements, such as ideas, practices, and technologies, spread from one culture to another. This can occur through trade, migration, and 'blank'. Cultural diffusion can lead to the enrichment of cultures but can also result in cultural 'blank'.",
      options: [
        { id: 1, value: "interaction" },
        { id: 2, value: "homogenization" },
        { id: 3, value: "integration" },
        { id: 4, value: "transformation" },
      ],
      answers: ["interaction", "homogenization"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the law of demand state?",
      para: "The law of demand states that, all else being equal, as the price of a good decreases, the quantity demanded for that good increases. Conversely, as the price increases, the quantity demanded decreases. This relationship between price and quantity demanded is typically represented by a downward-sloping demand curve on a graph.",
      options: [
        "Price and quantity demanded are directly related.",
        "Price and quantity demanded are inversely related.",
        "Quantity supplied increases as price decreases.",
        "Demand remains constant regardless of price.",
      ],
      answer: "Price and quantity demanded are inversely related.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the primary purpose of fiscal policy?",
      para: "Fiscal policy refers to the use of government spending and taxation to influence the economy. It aims to achieve economic objectives such as full employment, price stability, and economic growth. By adjusting spending levels and tax rates, governments can stimulate or slow down economic activity.",
      options: [
        "To control inflation.",
        "To regulate the money supply.",
        "To influence economic activity through spending and taxation.",
        "To manage exchange rates.",
      ],
      answer: "To influence economic activity through spending and taxation.",
      type: "single",
      moduleType: "reading",
    },
  ];

  const mock3 = [
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Critical thinking is the ability to analyze information and make reasoned judgments. It involves evaluating 'blank', identifying biases, and considering alternative perspectives. Developing critical thinking skills is essential for academic success and informed 'blank'. Individuals are encouraged to question assumptions and seek evidence before forming conclusions.",
      options: [
        { id: 1, options: ["evidence", "information", "data", "arguments"] },
        { id: 2, options: ["decisions", "opinions", "beliefs", "actions"] },
      ],
      answers: ["evidence", "decisions"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Literature reflects the culture and values of the society in which it is created. Through 'blank', authors explore themes such as love, conflict, and identity. Analyzing literature allows readers to gain insight into different 'blank' and perspectives, fostering empathy and understanding.",
      options: [
        {
          id: 1,
          options: ["storytelling", "narration", "writing", "expression"],
        },
        { id: 2, options: ["cultures", "ideas", "beliefs", "values"] },
      ],
      answers: ["storytelling", "cultures"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },

    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some key features of a strong concluding sentence in a paragraph?",
      para: "A strong concluding sentence in a paragraph should reinforce the main idea, provide a sense of closure, and leave a lasting impression on the reader.",
      options: [
        "Introduces a new idea",
        "Summarizes the main points",
        "Raises a question for further thought",
        "Connects to the opening sentence",
      ],
      answers: [
        "Summarizes the main points",
        "Connects to the opening sentence",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some common types of supporting details used in paragraphs?",
      para: "Common types of supporting details used in paragraphs include facts, examples, statistics, quotations, and personal anecdotes.",
      options: [
        "Definitions",
        "Metaphors",
        "Facts and statistics",
        "Personal opinions",
      ],
      answers: ["Facts and statistics", "Personal anecdotes"],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Personality disorders are enduring patterns of behavior and inner experience that deviate from cultural expectations.",
        "They can lead to significant impairment in social, occupational, and other areas of functioning.",
        "The DSM classifies personality disorders into three clusters: A (odd/eccentric), B (dramatic/emotional), and C (anxious/fearful).",
        "Treatment for personality disorders often involves psychotherapy, with a focus on developing healthier coping mechanisms.",
      ],
      answers: [
        "Personality disorders are enduring patterns of behavior and inner experience that deviate from cultural expectations.",
        "They can lead to significant impairment in social, occupational, and other areas of functioning.",
        "The DSM classifies personality disorders into three clusters: A (odd/eccentric), B (dramatic/emotional), and C (anxious/fearful).",
        "Treatment for personality disorders often involves psychotherapy, with a focus on developing healthier coping mechanisms.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Substance use disorders involve the compulsive use of substances despite harmful consequences.",
        "Common substances include alcohol, opioids, and stimulants, each with distinct effects and withdrawal symptoms.",
        "Treatment approaches for substance use disorders may include detoxification, rehabilitation programs, and support groups.",
        "Cognitive-behavioral therapy (CBT) and motivational interviewing are effective therapeutic techniques for addressing substance use.",
      ],
      answers: [
        "Substance use disorders involve the compulsive use of substances despite harmful consequences.",
        "Common substances include alcohol, opioids, and stimulants, each with distinct effects and withdrawal symptoms.",
        "Treatment approaches for substance use disorders may include detoxification, rehabilitation programs, and support groups.",
        "Cognitive-behavioral therapy (CBT) and motivational interviewing are effective therapeutic techniques for addressing substance use.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 3,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural symbols are objects, gestures, or images that hold particular meaning within a culture. They can represent 'blank', beliefs, and values. Understanding cultural symbols is essential for effective communication and 'blank' in a multicultural society.",
      options: [
        { id: 1, value: "traditions" },
        { id: 2, value: "identity" },
        { id: 3, value: "heritage" },
        { id: 4, value: "integration" },
      ],
      answers: ["identity", "integration"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Globalization has led to increased interconnectedness among cultures, resulting in both positive and negative effects. While it promotes cultural exchange and 'blank', it can also lead to the erosion of local cultures and traditions. Balancing globalization with cultural preservation is a significant challenge.",
      options: [
        { id: 1, value: "integration" },
        { id: 2, value: "interaction" },
        { id: 3, value: "homogenization" },
        { id: 4, value: "diversity" },
      ],
      answers: ["integration", "homogenization"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does GDP stand for?",
      para: "Gross Domestic Product (GDP) is a monetary measure that represents the market value of all final goods and services produced in a country during a specific period, typically annually. It is used as an indicator of a country's economic health and to gauge a nation's standard of living.",
      options: [
        "Gross Domestic Product",
        "General Domestic Product",
        "Gross Development Product",
        "General Development Product",
      ],
      answer: "Gross Domestic Product",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the main function of money in an economy?",
      para: "Money serves several important functions in an economy: it acts as a medium of exchange, a unit of account, and a store of value. By facilitating transactions, providing a standard measure for pricing goods and services, and retaining value over time, money plays a crucial role in economic activity.",
      options: [
        "To serve as a medium of exchange.",
        "To regulate prices.",
        "To facilitate trade.",
        "To store wealth.",
      ],
      answer: "To serve as a medium of exchange.",
      type: "single",
      moduleType: "reading",
    },
  ];

  const mock4 = [
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Critical thinking is the ability to analyze information and make reasoned judgments. It involves evaluating 'blank', identifying biases, and considering alternative perspectives. Developing critical thinking skills is essential for academic success and informed 'blank'. Individuals are encouraged to question assumptions and seek evidence before forming conclusions.",
      options: [
        { id: 1, options: ["evidence", "information", "data", "arguments"] },
        { id: 2, options: ["decisions", "opinions", "beliefs", "actions"] },
      ],
      answers: ["evidence", "decisions"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Literature reflects the culture and values of the society in which it is created. Through 'blank', authors explore themes such as love, conflict, and identity. Analyzing literature allows readers to gain insight into different 'blank' and perspectives, fostering empathy and understanding.",
      options: [
        {
          id: 1,
          options: ["storytelling", "narration", "writing", "expression"],
        },
        { id: 2, options: ["cultures", "ideas", "beliefs", "values"] },
      ],
      answers: ["storytelling", "cultures"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some effective ways to vary sentence structure within a paragraph?",
      para: "To vary sentence structure within a paragraph, writers can use a combination of simple, compound, complex, and compound-complex sentences, as well as different sentence openings and lengths.",
      options: [
        "Using only short, simple sentences",
        "Incorporating complex sentence structures",
        "Varying sentence openings",
        "Maintaining consistent sentence length",
      ],
      answers: [
        "Incorporating complex sentence structures",
        "Varying sentence openings",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some common types of transition words used in paragraphs?",
      para: "Transition words are used to connect ideas and create coherence within and between paragraphs. Common types of transition words include those that show addition (e.g., also, furthermore), contrast (e.g., however, on the other hand), and sequence (e.g., first, next, finally).",
      options: [
        "Addition: also, furthermore, in addition",
        "Contrast: however, on the other hand, nevertheless",
        "Sequence: first, next, finally, in conclusion",
        "Cause and effect: therefore, as a result, consequently",
      ],
      answers: [
        "Addition: also, furthermore, in addition",
        "Contrast: however, on the other hand, nevertheless",
        "Sequence: first, next, finally, in conclusion",
        "Cause and effect: therefore, as a result, consequently",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Dissociative disorders involve a disconnection between thoughts, identity, consciousness, and memory.",
        "Dissociative identity disorder (DID) is characterized by the presence of two or more distinct personality states.",
        "Dissociative amnesia involves an inability to recall important personal information, often related to trauma or stress.",
        "Treatment for dissociative disorders may include psychotherapy, aimed at integrating fragmented identities and processing traumatic memories.",
      ],
      answers: [
        "Dissociative disorders involve a disconnection between thoughts, identity, consciousness, and memory.",
        "Dissociative identity disorder (DID) is characterized by the presence of two or more distinct personality states.",
        "Dissociative amnesia involves an inability to recall important personal information, often related to trauma or stress.",
        "Treatment for dissociative disorders may include psychotherapy, aimed at integrating fragmented identities and processing traumatic memories.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Eating disorders, such as anorexia nervosa and bulimia nervosa, are characterized by abnormal eating behaviors and concerns about body weight.",
        "Anorexia nervosa involves extreme restriction of food intake and an intense fear of gaining weight.",
        "Bulimia nervosa is marked by episodes of binge eating followed by compensatory behaviors, such as vomiting or excessive exercise.",
        "Treatment for eating disorders often includes a combination of psychotherapy, nutritional counseling, and medical monitoring.",
      ],
      answers: [
        "Eating disorders, such as anorexia nervosa and bulimia nervosa, are characterized by abnormal eating behaviors and concerns about body weight.",
        "Anorexia nervosa involves extreme restriction of food intake and an intense fear of gaining weight.",
        "Bulimia nervosa is marked by episodes of binge eating followed by compensatory behaviors, such as vomiting or excessive exercise.",
        "Treatment for eating disorders often includes a combination of psychotherapy, nutritional counseling, and medical monitoring.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 3,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural identity can influence an individual's worldview and behavior. It shapes how people 'blank' themselves and others, affecting their interactions and relationships. Understanding cultural identity is essential for fostering 'blank' and respect in diverse communities.",
      options: [
        { id: 1, value: "perceive" },
        { id: 2, value: "tolerance" },
        { id: 3, value: "understanding" },
        { id: 4, value: "acceptance" },
      ],
      answers: ["perceive", "understanding"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural practices, such as rituals, celebrations, and customs, play a vital role in shaping group identity. They provide a sense of 'blank' and continuity, connecting individuals to their heritage. Understanding these practices is crucial for appreciating the richness of 'blank' diversity.",
      options: [
        { id: 1, value: "belonging" },
        { id: 2, value: "cultural" },
        { id: 3, value: "social" },
        { id: 4, value: "historical" },
      ],
      answers: ["belonging", "cultural"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the difference between nominal and real GDP?",
      para: "Nominal GDP measures a country's economic output without adjusting for inflation, while real GDP adjusts for inflation to reflect the true value of goods and services produced. Real GDP provides a more accurate representation of an economy's size and how it is growing over time.",
      options: [
        "Nominal GDP is adjusted for inflation, real GDP is not.",
        "Real GDP is adjusted for inflation, nominal GDP is not.",
        "Both are the same.",
        "Nominal GDP is a better measure of economic health.",
      ],
      answer: "Real GDP is adjusted for inflation, nominal GDP is not.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the concept of opportunity cost?",
      para: "Opportunity cost refers to the value of the next best alternative that is forgone when making a decision. It is an essential concept in economics that helps individuals and businesses evaluate the potential benefits of different choices.",
      options: [
        "The cost of an item in monetary terms.",
        "The benefits lost when choosing one option over another.",
        "The total cost of production.",
        "The cost associated with opportunity.",
      ],
      answer: "The benefits lost when choosing one option over another.",
      type: "single",
      moduleType: "reading",
    },
  ];

  const mock5 = [
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Grammar is the system of rules that govern the structure of sentences in a language. Understanding grammar is essential for effective 'blank'. It helps in conveying messages clearly and accurately. Common grammar issues include 'blank' agreement, sentence fragments, and misplaced modifiers.",
      options: [
        {
          id: 1,
          options: ["communication", "expression", "interaction", "dialogue"],
        },
        { id: 2, options: ["verb", "subject", "noun", "tense"] },
      ],
      answers: ["communication", "subject"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Vocabulary is a crucial component of language learning. A rich vocabulary allows individuals to express themselves more 'blank' and understand others better. Techniques for improving vocabulary include reading widely, using flashcards, and engaging in conversations.",
      options: [
        {
          id: 1,
          options: ["effectively", "clearly", "precisely", "articulately"],
        },
      ],
      answers: ["effectively"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },

    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some key considerations when writing a topic sentence for a paragraph?",
      para: "A strong topic sentence should clearly state the main idea of the paragraph, be specific and focused, and provide a clear direction for the supporting details that follow.",
      options: [
        "Avoid using complex language",
        "Make it too broad or general",
        "Ensure it is specific and focused",
        "Provide a clear direction for the paragraph",
      ],
      answers: [
        "Ensure it is specific and focused",
        "Provide a clear direction for the paragraph",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some common issues that can affect the coherence of a paragraph?",
      para: "Lack of a clear topic sentence, inconsistent use of verb tenses, and inappropriate use of transition words can all contribute to a lack of coherence within a paragraph.",
      options: [
        "Unclear topic sentence",
        "Inconsistent verb tenses",
        "Overuse of transition words",
        "Lack of supporting details",
      ],
      answers: [
        "Unclear topic sentence",
        "Inconsistent verb tenses",
        "Lack of supporting details",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Neurocognitive disorders, such as dementia and delirium, involve cognitive decline and impairment.",
        "Dementia is characterized by a progressive loss of cognitive function, affecting memory, reasoning, and social abilities.",
        "Delirium is a sudden and severe confusion that can be caused by various medical conditions, medications, or substance withdrawal.",
        "Treatment for neurocognitive disorders focuses on managing symptoms and providing support for affected individuals and their families.",
      ],
      answers: [
        "Neurocognitive disorders, such as dementia and delirium, involve cognitive decline and impairment.",
        "Dementia is characterized by a progressive loss of cognitive function, affecting memory, reasoning, and social abilities.",
        "Delirium is a sudden and severe confusion that can be caused by various medical conditions, medications, or substance withdrawal.",
        "Treatment for neurocognitive disorders focuses on managing symptoms and providing support for affected individuals and their families.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Cognitive-behavioral therapy (CBT) is a widely used therapeutic approach for treating various psychological disorders.",
        "CBT focuses on identifying and changing negative thought patterns and maladaptive behaviors.",
        "It is based on the premise that thoughts, feelings, and behaviors are interconnected and that changing one can lead to changes in the others.",
        "Research has shown that CBT is effective for treating conditions such as depression, anxiety disorders, and PTSD.",
      ],
      answers: [
        "Cognitive-behavioral therapy (CBT) is a widely used therapeutic approach for treating various psychological disorders.",
        "CBT focuses on identifying and changing negative thought patterns and maladaptive behaviors.",
        "It is based on the premise that thoughts, feelings, and behaviors are interconnected and that changing one can lead to changes in the others.",
        "Research has shown that CBT is effective for treating conditions such as depression, anxiety disorders, and PTSD.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 3,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural assimilation occurs when individuals or groups adopt the customs and attitudes of another culture, often losing their original cultural identity. This process can lead to 'blank' of cultural diversity and can be a source of tension between different groups. It is important to find a balance between assimilation and 'blank' of cultural heritage.",
      options: [
        { id: 1, value: "loss" },
        { id: 2, value: "preservation" },
        { id: 3, value: "integration" },
        { id: 4, value: "integration" },
      ],
      answers: ["loss", "preservation"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural norms are the unwritten rules that govern behavior in a society or group. They dictate what is considered 'blank' or unacceptable and can vary widely across different cultures. Understanding cultural norms is essential for effective communication and 'blank' in a multicultural society.",
      options: [
        { id: 1, value: "acceptable" },
        { id: 2, value: "integration" },
        { id: 3, value: "interaction" },
        { id: 4, value: "tolerance" },
      ],
      answers: ["acceptable", "interaction"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the term 'inflation' refer to?",
      para: "Inflation is the rate at which the general level of prices for goods and services rises, eroding purchasing power. Central banks attempt to limit inflation, and avoid deflation, to keep the economy running smoothly.",
      options: [
        "A decrease in prices.",
        "An increase in prices.",
        "A stable price level.",
        "A measure of economic growth.",
      ],
      answer: "An increase in prices.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the role of supply and demand in determining prices?",
      para: "Supply and demand are fundamental concepts in economics that describe the relationship between the availability of a product and the desire for that product. Prices are determined by the interaction of supply and demand; when demand exceeds supply, prices tend to rise, and when supply exceeds demand, prices tend to fall.",
      options: [
        "Prices are determined solely by supply.",
        "Prices are determined solely by demand.",
        "Prices fluctuate based on the interaction of supply and demand.",
        "Prices remain constant regardless of supply and demand.",
      ],
      answer: "Prices fluctuate based on the interaction of supply and demand.",
      type: "single",
      moduleType: "reading",
    },
  ];

  const mock6 = [
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Public speaking is a valuable skill that can enhance one's career and personal life. It involves 'blank' ideas and engaging an audience effectively. To become a confident speaker, individuals should practice their delivery, work on their 'blank', and learn to manage anxiety.",
      options: [
        {
          id: 1,
          options: ["communicating", "presenting", "sharing", "expressing"],
        },
        { id: 2, options: ["content", "tone", "body language", "style"] },
      ],
      answers: ["communicating", "body language"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Critical thinking is the ability to analyze information and make reasoned judgments. It involves evaluating 'blank', identifying biases, and considering alternative perspectives. Developing critical thinking skills is essential for academic success and informed 'blank'.",
      options: [
        { id: 1, options: ["evidence", "information", "data", "arguments"] },
        { id: 2, options: ["decisions", "opinions", "beliefs", "actions"] },
      ],
      answers: ["evidence", "decisions"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },

    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are some key elements of a well-structured paragraph?",
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
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some effective strategies for improving paragraph writing?",
      para: "To improve paragraph writing, it is important to focus on developing a clear topic sentence, providing relevant supporting details, using appropriate transition words, and maintaining coherence throughout the paragraph.",
      options: [
        "Brainstorming and outlining before writing",
        "Avoiding repetition of words and phrases",
        "Incorporating complex sentence structures",
        "Revising and editing the paragraph",
      ],
      answers: [
        "Brainstorming and outlining before writing",
        "Avoiding repetition of words and phrases",
        "Revising and editing the paragraph",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Biological approaches to abnormal psychology focus on the physiological and genetic factors that contribute to mental disorders.",
        "Neurotransmitters, brain structure, and genetic predispositions are key areas of study in this approach.",
        "Medications, such as antidepressants and antipsychotics, are often used to treat symptoms of mental disorders based on biological findings.",
        "While biological treatments can be effective, they are often combined with psychotherapy for a more comprehensive approach.",
      ],
      answers: [
        "Biological approaches to abnormal psychology focus on the physiological and genetic factors that contribute to mental disorders.",
        "Neurotransmitters, brain structure, and genetic predispositions are key areas of study in this approach.",
        "Medications, such as antidepressants and antipsychotics, are often used to treat symptoms of mental disorders based on biological findings.",
        "While biological treatments can be effective, they are often combined with psychotherapy for a more comprehensive approach.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Cultural factors play a significant role in the understanding and treatment of abnormal psychology.",
        "Different cultures have unique beliefs about mental health and illness, which can influence diagnosis and treatment.",
        "Cultural stigma surrounding mental illness can prevent individuals from seeking help or disclosing their symptoms.",
        "Culturally sensitive approaches to treatment are essential for effectively addressing the needs of diverse populations.",
      ],
      answers: [
        "Cultural factors play a significant role in the understanding and treatment of abnormal psychology.",
        "Different cultures have unique beliefs about mental health and illness, which can influence diagnosis and treatment.",
        "Cultural stigma surrounding mental illness can prevent individuals from seeking help or disclosing their symptoms.",
        "Culturally sensitive approaches to treatment are essential for effectively addressing the needs of diverse populations.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 3,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural globalization refers to the worldwide exchange of ideas, values, and cultural practices. This process can lead to increased 'blank' and interconnectedness among different cultures. However, it can also result in the 'blank' of local cultures and traditions, raising concerns about cultural homogenization.",
      options: [
        { id: 1, value: "diversity" },
        { id: 2, value: "loss" },
        { id: 3, value: "integration" },
        { id: 4, value: "acceptance" },
      ],
      answers: ["diversity", "loss"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural heritage includes the traditions, customs, and artifacts that are passed down through generations. It is an important aspect of 'blank' identity and plays a vital role in fostering a sense of belonging. Preserving cultural heritage is essential for maintaining 'blank' diversity and promoting understanding among different groups.",
      options: [
        { id: 1, value: "individual" },
        { id: 2, value: "cultural" },
        { id: 3, value: "social" },
        { id: 4, value: "historical" },
      ],
      answers: ["cultural", "cultural"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the primary purpose of monetary policy?",
      para: "Monetary policy involves the management of money supply and interest rates by central banks to achieve macroeconomic objectives such as controlling inflation, consumption, growth, and liquidity.",
      options: [
        "To regulate government spending.",
        "To control inflation and stabilize the currency.",
        "To manage fiscal policy.",
        "To influence trade balances.",
      ],
      answer: "To control inflation and stabilize the currency.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the definition of a recession?",
      para: "A recession is defined as a significant decline in economic activity across the economy that lasts for an extended period, typically visible in real GDP, income, employment, manufacturing, and retail sales.",
      options: [
        "A period of economic growth.",
        "A decline in economic activity.",
        "A stable economy.",
        "A period of high inflation.",
      ],
      answer: "A decline in economic activity.",
      type: "single",
      moduleType: "reading",
    },
  ];

  const mock7 = [
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Literature reflects the culture and values of the society in which it is created. Through 'blank', authors explore themes such as love, conflict, and identity. Analyzing literature allows readers to gain insight into different 'blank' and perspectives, fostering empathy and understanding.",
      options: [
        {
          id: 1,
          options: ["storytelling", "narration", "writing", "expression"],
        },
        { id: 2, options: ["cultures", "ideas", "beliefs", "values"] },
      ],
      answers: ["storytelling", "cultures"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Grammar is the system of rules that govern the structure of sentences in a language. Understanding grammar is essential for effective 'blank'. It helps in conveying messages clearly and accurately. Common grammar issues include 'blank' agreement, sentence fragments, and misplaced modifiers.",
      options: [
        {
          id: 1,
          options: ["communication", "expression", "interaction", "dialogue"],
        },
        { id: 2, options: ["verb", "subject", "noun", "tense"] },
      ],
      answers: ["communication", "subject"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },

    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some common issues that can affect the clarity and coherence of a paragraph?",
      para: "Common issues that can affect the clarity and coherence of a paragraph include unclear topic sentences, lack of supporting details, inconsistent use of verb tenses, and inappropriate use of transition words.",
      options: [
        "Unclear topic sentences",
        "Excessive use of passive voice",
        "Lack of supporting details",
        "Inappropriate use of transition words",
      ],
      answers: [
        "Unclear topic sentences",
        "Lack of supporting details",
        "Inappropriate use of transition words",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some key features of a strong concluding sentence in a paragraph?",
      para: "A strong concluding sentence in a paragraph should reinforce the main idea, provide a sense of closure, and leave a lasting impression on the reader.",
      options: [
        "Introduces a new idea",
        "Summarizes the main points",
        "Raises a question for further thought",
        "Connects to the opening sentence",
      ],
      answers: [
        "Summarizes the main points",
        "Connects to the opening sentence",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Psychotherapy is a common treatment for various psychological disorders, involving a therapeutic relationship between a client and a trained professional.",
        "Different types of psychotherapy include cognitive-behavioral therapy, psychodynamic therapy, humanistic therapy, and group therapy.",
        "The effectiveness of psychotherapy can vary based on the individual's needs, the nature of the disorder, and the therapeutic approach used.",
        "Research has shown that psychotherapy can lead to significant improvements in mental health and well-being.",
      ],
      answers: [
        "Psychotherapy is a common treatment for various psychological disorders, involving a therapeutic relationship between a client and a trained professional.",
        "Different types of psychotherapy include cognitive-behavioral therapy, psychodynamic therapy, humanistic therapy, and group therapy.",
        "The effectiveness of psychotherapy can vary based on the individual's needs, the nature of the disorder, and the therapeutic approach used.",
        "Research has shown that psychotherapy can lead to significant improvements in mental health and well-being.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 3,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural sensitivity involves being aware of and respecting the beliefs and practices of different cultures. It is essential for effective communication and 'blank' in a diverse society. Cultural sensitivity can be developed through education, exposure, and 'blank' to different cultural perspectives.",
      options: [
        { id: 1, value: "integration" },
        { id: 2, value: "tolerance" },
        { id: 3, value: "understanding" },
        { id: 4, value: "acceptance" },
      ],
      answers: ["understanding", "tolerance"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural appropriation refers to the adoption of elements of one culture by members of another culture, often without understanding or respecting the original context. This practice can lead to 'blank' and exploitation of marginalized cultures. It is important to recognize and address issues of 'blank' in cultural exchange.",
      options: [
        { id: 1, value: "misunderstanding" },
        { id: 2, value: "disrespect" },
        { id: 3, value: "appreciation" },
        { id: 4, value: "integration" },
      ],
      answers: ["disrespect", "misunderstanding"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What does the term 'market equilibrium' mean?",
      para: "Market equilibrium is the point where the quantity of a good demanded by consumers equals the quantity supplied by producers. At this point, the market is in balance, and there is no tendency for the price to change.",
      options: [
        "The point where supply exceeds demand.",
        "The point where demand exceeds supply.",
        "The point where supply equals demand.",
        "The point where prices are fixed.",
      ],
      answer: "The point where supply equals demand.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the purpose of a budget?",
      para: "A budget is a financial plan that outlines expected income and expenses over a specific period. It helps individuals and organizations manage their finances, allocate resources effectively, and achieve financial goals.",
      options: [
        "To track past expenses.",
        "To plan for future income and expenses.",
        "To eliminate all spending.",
        "To increase debt.",
      ],
      answer: "To plan for future income and expenses.",
      type: "single",
      moduleType: "reading",
    },
  ];

  const mock8 = [
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Public speaking is a valuable skill that can enhance one's career and personal life. It involves 'blank' ideas and engaging an audience effectively. To become a confident speaker, individuals should practice their delivery, work on their 'blank', and learn to manage anxiety.",
      options: [
        {
          id: 1,
          options: ["communicating", "presenting", "sharing", "expressing"],
        },
        { id: 2, options: ["content", "tone", "body language", "style"] },
      ],
      answers: ["communicating", "body language"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Critical thinking is the ability to analyze information and make reasoned judgments. It involves evaluating 'blank', identifying biases, and considering alternative perspectives. Developing critical thinking skills is essential for academic success and informed 'blank'.",
      options: [
        { id: 1, options: ["evidence", "information", "data", "arguments"] },
        { id: 2, options: ["decisions", "opinions", "beliefs", "actions"] },
      ],
      answers: ["evidence", "decisions"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },

    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some common types of supporting details used in paragraphs?",
      para: "Common types of supporting details used in paragraphs include facts, examples, statistics, quotations, and personal anecdotes.",
      options: [
        "Definitions",
        "Metaphors",
        "Facts and statistics",
        "Personal opinions",
      ],
      answers: ["Facts and statistics", "Personal anecdotes"],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some effective ways to vary sentence structure within a paragraph?",
      para: "To vary sentence structure within a paragraph, writers can use a combination of simple, compound, complex, and compound-complex sentences, as well as different sentence openings and lengths.",
      options: [
        "Using only short, simple sentences",
        "Incorporating complex sentence structures",
        "Varying sentence openings",
        "Maintaining consistent sentence length",
      ],
      answers: [
        "Incorporating complex sentence structures",
        "Varying sentence openings",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 9,
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
      questionId: 10,
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
      questionId: 3,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural exchange is the process of sharing ideas, values, and practices between different cultures. This exchange can promote 'blank' and understanding, but it can also lead to 'blank' if not approached with sensitivity and respect.",
      options: [
        { id: 1, value: "conflict" },
        { id: 2, value: "appreciation" },
        { id: 3, value: "tolerance" },
        { id: 4, value: "integration" },
      ],
      answers: ["appreciation", "conflict"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural values are the core principles and ideals upon which an entire community exists. They influence behavior, attitudes, and 'blank' within a society. Understanding cultural values is essential for fostering 'blank' and cooperation among diverse groups.",
      options: [
        { id: 1, value: "interactions" },
        { id: 2, value: "tolerance" },
        { id: 3, value: "integration" },
        { id: 4, value: "discrimination" },
      ],
      answers: ["interactions", "tolerance"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2:
        "What is the significance of consumer confidence in an economy?",
      para: "Consumer confidence measures how optimistic or pessimistic consumers are regarding their expected financial situation. High consumer confidence typically leads to increased spending, which drives economic growth, while low confidence can result in reduced spending and economic slowdown.",
      options: [
        "It indicates the level of inflation.",
        "It affects consumer spending and economic growth.",
        "It reflects the stock market performance.",
        "It determines interest rates.",
      ],
      answer: "It affects consumer spending and economic growth.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the role of a central bank in an economy?",
      para: "A central bank is responsible for managing a country's currency, money supply, and interest rates. It implements monetary policy to promote economic stability and growth, control inflation, and regulate the banking system.",
      options: [
        "To control fiscal policy.",
        "To manage the national debt.",
        "To regulate the money supply and interest rates.",
        "To set trade policies.",
      ],
      answer: "To regulate the money supply and interest rates.",
      type: "single",
      moduleType: "reading",
    },
  ];

  const mock9 = [
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Literature reflects the culture and values of the society in which it is created. Through 'blank', authors explore themes such as love, conflict, and identity. Analyzing literature allows readers to gain insight into different 'blank' and perspectives, fostering empathy and understanding.",
      options: [
        {
          id: 1,
          options: ["storytelling", "narration", "writing", "expression"],
        },
        { id: 2, options: ["cultures", "ideas", "beliefs", "values"] },
      ],
      answers: ["storytelling", "cultures"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Grammar is the system of rules that govern the structure of sentences in a language. Understanding grammar is essential for effective 'blank'. It helps in conveying messages clearly and accurately. Common grammar issues include 'blank' agreement, sentence fragments, and misplaced modifiers.",
      options: [
        {
          id: 1,
          options: ["communication", "expression", "interaction", "dialogue"],
        },
        { id: 2, options: ["verb", "subject", "noun", "tense"] },
      ],
      answers: ["communication", "subject"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },

    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some common types of transition words used in paragraphs?",
      para: "Transition words are used to connect ideas and create coherence within and between paragraphs. Common types of transition words include those that show addition (e.g., also, furthermore), contrast (e.g., however, on the other hand), and sequence (e.g., first, next, finally).",
      options: [
        "Addition: also, furthermore, in addition",
        "Contrast: however, on the other hand, nevertheless",
        "Sequence: first, next, finally, in conclusion",
        "Cause and effect: therefore, as a result, consequently",
      ],
      answers: [
        "Addition: also, furthermore, in addition",
        "Contrast: however, on the other hand, nevertheless",
        "Sequence: first, next, finally, in conclusion",
        "Cause and effect: therefore, as a result, consequently",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some key considerations when writing a topic sentence for a paragraph?",
      para: "A strong topic sentence should clearly state the main idea of the paragraph, be specific and focused, and provide a clear direction for the supporting details that follow.",
      options: [
        "Avoid using complex language",
        "Make it too broad or general",
        "Ensure it is specific and focused",
        "Provide a clear direction for the paragraph",
      ],
      answers: [
        "Ensure it is specific and focused",
        "Provide a clear direction for the paragraph",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Biodiversity hotspots are regions with a high level of endemic species that are under significant threat from human activities.",
        "These areas are prioritized for conservation efforts due to their rich biodiversity and the urgent need for protection.",
        "Examples of biodiversity hotspots include the Amazon rainforest, the Himalayas, and the Caribbean islands.",
        "Conserving biodiversity hotspots can help protect a large number of species and maintain ecosystem services.",
      ],
      answers: [
        "Biodiversity hotspots are regions with a high level of endemic species that are under significant threat from human activities.",
        "These areas are prioritized for conservation efforts due to their rich biodiversity and the urgent need for protection.",
        "Examples of biodiversity hotspots include the Amazon rainforest, the Himalayas, and the Caribbean islands.",
        "Conserving biodiversity hotspots can help protect a large number of species and maintain ecosystem services.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 10,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "The extinction of species is a significant concern for biodiversity conservation.",
        "Human activities, such as habitat destruction, pollution, and climate change, are major drivers of species extinction.",
        "The IUCN Red List categorizes species based on their risk of extinction, helping to prioritize conservation efforts.",
        "Protecting endangered species and their habitats is crucial for maintaining biodiversity.",
      ],
      answers: [
        "The extinction of species is a significant concern for biodiversity conservation.",
        "Human activities, such as habitat destruction, pollution, and climate change, are major drivers of species extinction.",
        "The IUCN Red List categorizes species based on their risk of extinction, helping to prioritize conservation efforts.",
        "Protecting endangered species and their habitats is crucial for maintaining biodiversity.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 3,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural norms dictate the accepted behaviors within a society. They can vary widely across different cultures and can influence everything from 'blank' to social interactions. Understanding cultural norms is crucial for effective communication and 'blank' in a multicultural society.",
      options: [
        { id: 1, value: "traditions" },
        { id: 2, value: "integration" },
        { id: 3, value: "interaction" },
        { id: 4, value: "tolerance" },
      ],
      answers: ["traditions", "interaction"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural sensitivity involves being aware of and respecting the beliefs and practices of different cultures. It is essential for effective communication and 'blank' in a diverse society. Cultural sensitivity can be developed through education, exposure, and 'blank' to different cultural perspectives.",
      options: [
        { id: 1, value: "integration" },
        { id: 2, value: "tolerance" },
        { id: 3, value: "understanding" },
        { id: 4, value: "acceptance" },
      ],
      answers: ["understanding", "tolerance"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the concept of comparative advantage?",
      para: "Comparative advantage is the ability of an individual or group to carry out a particular economic activity more efficiently than another activity. This principle suggests that countries should specialize in producing goods where they have a lower opportunity cost.",
      options: [
        "It leads to trade deficits.",
        "It promotes specialization and trade.",
        "It is irrelevant in a global economy.",
        "It encourages competition.",
      ],
      answer: "It promotes specialization and trade.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the definition of a monopoly?",
      para: "A monopoly exists when a single company or entity is the sole provider of a particular good or service, giving it significant market power. Monopolies can lead to higher prices and reduced choices for consumers.",
      options: [
        "A competitive market with many suppliers.",
        "A single seller dominating the market.",
        "A market with equal supply and demand.",
        "A situation where prices are fixed.",
      ],
      answer: "A single seller dominating the market.",
      type: "single",
      moduleType: "reading",
    },
  ];

  const mock10 = [
    {
      questionId: 1,
      heading:
        "Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.",
      paraWithDropDown:
        "Public speaking is a valuable skill that can enhance one's career and personal life. It involves 'blank' ideas and engaging an audience effectively. To become a confident speaker, individuals should practice their delivery, work on their 'blank', and learn to manage anxiety.",
      options: [
        {
          id: 1,
          options: ["communicating", "presenting", "sharing", "expressing"],
        },
        { id: 2, options: ["content", "tone", "body language", "style"] },
      ],
      answers: ["communicating", "body language"],
      type: "fillUpsWithDropDown",
      moduleType: "reading",
    },
    {
      questionId: 2,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural pluralism refers to the coexistence of diverse cultures within a society, where each culture maintains its unique identity and traditions. It promotes 'blank' and respect for cultural diversity. Cultural pluralism can lead to a rich exchange of ideas and the creation of a more 'blank' society.",
      options: [
        { id: 1, value: "tolerance" },
        { id: 2, value: "diverse" },
        { id: 3, value: "integration" },
        { id: 4, value: "assimilation" },
      ],
      answers: ["tolerance", "diverse"],
      type: "fillUps",
      moduleType: "reading",
    },

    {
      questionId: 5,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2:
        "What are some effective strategies for learning new vocabulary words?",
      para: "Effective strategies for learning new vocabulary words include reading extensively, using flashcards, practicing with word games, and incorporating new words into daily conversations.",
      options: [
        "Rote memorization",
        "Contextual learning",
        "Associating words with visuals",
        "Frequent review and practice",
      ],
      answers: [
        "Contextual learning",
        "Associating words with visuals",
        "Frequent review and practice",
      ],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 8,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Invasive species are non-native organisms that, when introduced to a new environment, can cause significant harm to local ecosystems.",
        "They often outcompete native species for resources, disrupt food webs, and alter habitat structures.",
        "Management strategies for invasive species include prevention, early detection, and control measures.",
        "Examples of invasive species include zebra mussels in North America and cane toads in Australia.",
      ],
      answers: [
        "Invasive species are non-native organisms that, when introduced to a new environment, can cause significant harm to local ecosystems.",
        "They often outcompete native species for resources, disrupt food webs, and alter habitat structures.",
        "Examples of invasive species include zebra mussels in North America and cane toads in Australia.",
        "Management strategies for invasive species include prevention, early detection, and control measures.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 9,
      heading:
        "The text boxes in the left panel have been placed in a random order. Restore the original order by dragging the text boxes from the left panel to the right panel.",
      options: [
        "Conservation biology is a field that focuses on the preservation of biodiversity and the protection of endangered species.",
        "It involves studying ecosystems, species interactions, and the impacts of human activities on the environment.",
        "Conservation strategies can include habitat restoration, protected areas, and sustainable resource management.",
        "The goal of conservation biology is to maintain healthy ecosystems and ensure the survival of diverse species.",
      ],
      answers: [
        "Conservation biology is a field that focuses on the preservation of biodiversity and the protection of endangered species.",
        "It involves studying ecosystems, species interactions, and the impacts of human activities on the environment.",
        "Conservation strategies can include habitat restoration, protected areas, and sustainable resource management.",
        "The goal of conservation biology is to maintain healthy ecosystems and ensure the survival of diverse species.",
      ],
      type: "dragAndDrop",
      moduleType: "reading",
    },
    {
      questionId: 3,
      heading:
        "In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.",
      paraWithFillUps:
        "Cultural relativism is the principle of understanding and evaluating a culture based on its own 'blank' rather than judging it by the standards of another culture. This approach fosters respect and appreciation for cultural diversity, allowing for a more nuanced understanding of human behavior.",
      options: [
        { id: 1, value: "values" },
        { id: 2, value: "practices" },
        { id: 3, value: "beliefs" },
        { id: 4, value: "norms" },
      ],
      answers: ["values"],
      type: "fillUps",
      moduleType: "reading",
    },
    {
      questionId: 4,
      heading:
        "Read the text and answer the multiple-choice question by selecting all correct responses. More than one response is correct.",
      heading2: "What are the benefits of having a rich vocabulary?",
      para: "A rich vocabulary allows individuals to express themselves more effectively, understand others better, and engage in more meaningful conversations.",
      options: [
        "Improved communication skills",
        "Enhanced creativity",
        "Increased confidence",
        "Better academic performance",
      ],
      answers: ["Improved communication skills", "Increased confidence"],
      type: "multiple",
      moduleType: "reading",
    },
    {
      questionId: 6,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the significance of supply and demand in economics?",
      para: "Supply and demand are fundamental concepts that describe the relationship between the availability of a product and the desire for that product. Prices are determined by the interaction of supply and demand, influencing market equilibrium.",
      options: [
        "They determine market prices.",
        "They are irrelevant to economic theory.",
        "They only apply to consumer goods.",
        "They are fixed and do not change.",
      ],
      answer: "They determine market prices.",
      type: "single",
      moduleType: "reading",
    },
    {
      questionId: 7,
      heading:
        "Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.",
      heading2: "What is the purpose of trade barriers?",
      para: "Trade barriers are government-imposed restrictions on international trade. They can include tariffs, quotas, and subsidies, and are used to protect domestic industries from foreign competition.",
      options: [
        "To promote free trade.",
        "To protect domestic industries.",
        "To increase consumer choice.",
        "To lower prices for consumers.",
      ],
      answer: "To protect domestic industries.",
      type: "single",
      moduleType: "reading",
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
            <p>Reading Mock Test First</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("second")}
          >
            <p>Reading Mock Test Second</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("third")}
          >
            <p>Reading Mock Test Third</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("fourth")}
          >
            <p>Reading Mock Test Fourth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("fifth")}
          >
            <p>Reading Mock Test Fifth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("sixth")}
          >
            <p>Reading Mock Test Sixth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("seventh")}
          >
            <p>Reading Mock Test Seventh</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("eigth")}
          >
            <p>Reading Mock Test Eigth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("ninth")}
          >
            <p>Reading Mock Test Ninth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("tenth")}
          >
            <p>Reading Mock Test Tenth</p>
          </div>
        </div>
      ) : (
        // <MockTestCommon que={questions} />
        <Reading que={questions} mockTestNumber={mockTestNumber} />
      )}
    </div>
  );
}

export default ReadingMockTest;
