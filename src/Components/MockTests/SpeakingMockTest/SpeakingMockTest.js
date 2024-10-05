import React, { useState } from "react";
import MockTestCommon from "../MockTestCommon";
import "./SpeakingMockTest.css";
import Speaking from "../../Speaking/Speaking";
function SpeakingMockTest({ hideNav }) {
  const mock1 = [
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
      questionId: 3,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Biodiversity is the variety of life on Earth.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Habitat destruction is a major threat to biodiversity.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Biodiversity refers to the variety of life on Earth, including the diversity of species, ecosystems, and genetic variations within species. It is essential for maintaining the balance of ecosystems and providing resources for human survival.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "The loss of biodiversity poses a significant threat to global ecosystems. Factors such as habitat destruction, pollution, climate change, and overexploitation of resources contribute to the decline of species and ecosystems.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the most important thing to do when making a decision?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Think",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see something suspicious?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Report",
    },
  ];

  const mock2 = [
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Conservation efforts aim to protect and restore biodiversity through various strategies, including the establishment of protected areas, wildlife corridors, and sustainable resource management practices.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 2,
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
      text: "Conservation efforts aim to protect and restore biodiversity.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Ecosystems provide essential services that support life.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Conservation efforts aim to protect and restore biodiversity through various strategies, including the establishment of protected areas, wildlife corridors, and sustainable resource management practices.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Ecosystems provide essential services, such as clean air and water, pollination of crops, and climate regulation. The loss of biodiversity can disrupt these services, leading to negative impacts on human health and well-being.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the best way to avoid getting lost?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Map",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see someone in danger?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Help",
    },
  ];

  const mock3 = [
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Invasive species are non-native organisms that can disrupt local ecosystems and outcompete native species for resources. They can lead to significant declines in biodiversity and alter habitat structures.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Climate change is one of the most pressing threats to biodiversity. Changes in temperature and precipitation patterns can alter habitats, affect species distributions, and lead to increased extinction rates.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 3,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Invasive species can disrupt local ecosystems and outcompete native species.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Climate change is a major threat to biodiversity worldwide.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Invasive species are non-native organisms that can disrupt local ecosystems and outcompete native species for resources. They can lead to significant declines in biodiversity and alter habitat structures.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Climate change is one of the most pressing threats to biodiversity. Changes in temperature and precipitation patterns can alter habitats, affect species distributions, and lead to increased extinction rates.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the most important thing to do when driving?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Focus",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see a fire?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Evacuate",
    },
  ];

  const mock4 = [
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Sustainable practices, such as responsible forestry, fishing, and agriculture, are crucial for preserving biodiversity. These practices help maintain healthy ecosystems while providing resources for human use.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Public awareness and education about biodiversity are essential for promoting conservation efforts. Engaging communities in conservation initiatives can lead to more effective protection of natural resources.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 3,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Sustainable practices help maintain healthy ecosystems and biodiversity.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Public awareness and education are crucial for biodiversity conservation.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Sustainable practices, such as responsible forestry, fishing, and agriculture, are crucial for preserving biodiversity. These practices help maintain healthy ecosystems while providing resources for human use.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Public awareness and education about biodiversity are essential for promoting conservation efforts. Engaging communities in conservation initiatives can lead to more effective protection of natural resources.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the best way to stay healthy?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Exercise",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see someone littering?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Recycle",
    },
  ];

  const mock5 = [
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Biodiversity hotspots are regions that are both rich in endemic species and significantly threatened by human activities. Protecting these areas is critical for global conservation efforts.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Genetic diversity within species is vital for their adaptability and resilience to changing environmental conditions. Conservation of genetic resources can help ensure the survival of species in the face of threats.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 3,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Biodiversity hotspots are regions with high levels of endemic species.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Genetic diversity is essential for species adaptability and resilience.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Biodiversity hotspots are regions that are both rich in endemic species and significantly threatened by human activities. Protecting these areas is critical for global conservation efforts.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Genetic diversity within species is vital for their adaptability and resilience to changing environmental conditions. Conservation of genetic resources can help ensure the survival of species in the face of threats.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the most important thing to do when meeting new people?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Listen",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see someone in need?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Assist",
    },
  ];

  const mock6 = [
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "The concept of ecosystem services refers to the benefits that humans derive from ecosystems, including provisioning, regulating, cultural, and supporting services. Protecting biodiversity is essential for maintaining these services.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Habitat destruction is one of the leading causes of biodiversity loss. Activities such as deforestation, urbanization, and agriculture can fragment and degrade natural habitats, threatening the survival of many species.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 3,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Ecosystem services provide benefits that support human well-being.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Deforestation is a major driver of biodiversity loss worldwide.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "The concept of ecosystem services refers to the benefits that humans derive from ecosystems, including provisioning, regulating, cultural, and supporting services. Protecting biodiversity is essential for maintaining these services.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Habitat destruction is one of the leading causes of biodiversity loss. Activities such as deforestation, urbanization, and agriculture can fragment and degrade natural habitats, threatening the survival of many species.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the best way to save money?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Budget",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see someone in distress?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Help",
    },
  ];

  const mock7 = [
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Conservation biology is a field of science that focuses on the preservation of biodiversity and the management of natural resources. It combines principles from ecology, genetics, and environmental science to develop strategies for protecting endangered species and ecosystems.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "The extinction of species can have a cascading effect on ecosystems, disrupting food webs and leading to further declines in biodiversity. Protecting endangered species is crucial for maintaining ecological balance.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 3,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Ecosystem services provide benefits that support human well-being.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Deforestation is a major driver of biodiversity loss worldwide.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Conservation biology is a field of science that focuses on the preservation of biodiversity and the management of natural resources. It combines principles from ecology, genetics, and environmental science to develop strategies for protecting endangered species and ecosystems.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "The extinction of species can have a cascading effect on ecosystems, disrupting food webs and leading to further declines in biodiversity. Protecting endangered species is crucial for maintaining ecological balance.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the most important thing to do when learning a new skill?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Practice",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see someone in need of medical attention?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Call",
    },
  ];

  const mock8 = [
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Ecotourism promotes responsible travel to natural areas, conserving the environment and improving the well-being of local people. It can provide economic benefits while raising awareness about the importance of biodiversity conservation.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Invasive species can threaten native biodiversity by outcompeting local species for resources, disrupting ecosystems, and altering habitats. Managing invasive species is crucial for protecting native flora and fauna.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 3,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Conservation biology combines principles from ecology, genetics, and environmental science.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "The extinction of species can disrupt ecosystem balance and functioning.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Ecotourism promotes responsible travel to natural areas, conserving the environment and improving the well-being of local people. It can provide economic benefits while raising awareness about the importance of biodiversity conservation.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Invasive species can threaten native biodiversity by outcompeting local species for resources, disrupting ecosystems, and altering habitats. Managing invasive species is crucial for protecting native flora and fauna.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the best way to resolve a conflict?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Communicate",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see someone in danger of drowning?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Rescue",
    },
  ];

  const mock9 = [
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Climate change poses significant threats to biodiversity, affecting species distribution and habitat conditions. Mitigating climate change is essential for preserving ecosystems and the services they provide.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Sustainable practices in agriculture, forestry, and fisheries are vital for conserving biodiversity. These practices help maintain healthy ecosystems while providing resources for human use.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 3,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Mitigating climate change is essential for preserving biodiversity and ecosystems.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Sustainable agriculture and forestry practices help conserve biodiversity.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Climate change poses significant threats to biodiversity, affecting species distribution and habitat conditions. Mitigating climate change is essential for preserving ecosystems and the services they provide.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Sustainable practices in agriculture, forestry, and fisheries are vital for conserving biodiversity. These practices help maintain healthy ecosystems while providing resources for human use.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the most important thing to do when making a presentation?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Prepare",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see someone in need of emotional support?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Listen",
    },
  ];

  const mock10 = [
    {
      questionId: 1,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Public awareness and education about biodiversity are essential for promoting conservation efforts. Engaging communities in conservation initiatives can lead to more effective protection of natural resources.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 2,
      heading:
        "Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.",
      paragraph:
        "Biodiversity hotspots are regions that are both rich in endemic species and significantly threatened by human activities. Protecting these areas is critical for global conservation efforts.",
      type: "readAloud",
      moduleType: "speaking",
    },
    {
      questionId: 3,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Community engagement is crucial for effective biodiversity conservation efforts.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 4,
      heading:
        "You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.",
      text: "Protecting biodiversity hotspots is a priority for global conservation.",
      type: "repeatSentence",
      moduleType: "speaking",
    },
    {
      questionId: 5,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Public awareness and education about biodiversity are essential for promoting conservation efforts. Engaging communities in conservation initiatives can lead to more effective protection of natural resources.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 6,
      heading:
        "You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.",
      text: "Biodiversity hotspots are regions that are both rich in endemic species and significantly threatened by human activities. Protecting these areas is critical for global conservation efforts.",
      type: "reTellLecture",
      moduleType: "speaking",
    },
    {
      questionId: 7,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What is the best way to stay organized?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Plan",
    },
    {
      questionId: 8,
      heading:
        "You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.",
      text: "What should you do if you see someone in need of legal advice?",
      moduleType: "speaking",
      type: "shortAnswer",
      answer: "Refer",
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
      setMockTestNumber("mockTest1");
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
            <p>Speaking Mock Test First</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("second")}
          >
            <p>Speaking Mock Test Second</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("third")}
          >
            <p>Speaking Mock Test Third</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("fourth")}
          >
            <p>Speaking Mock Test Fourth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("fifth")}
          >
            <p>Speaking Mock Test Fifth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("sixth")}
          >
            <p>Speaking Mock Test Sixth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("seventh")}
          >
            <p>Speaking Mock Test Seventh</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("eigth")}
          >
            <p>Speaking Mock Test Eigth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("ninth")}
          >
            <p>Speaking Mock Test Ninth</p>
          </div>
          <div
            className="mockTest-content-element"
            onClick={() => loadMockTest("tenth")}
          >
            <p>Speaking Mock Test Tenth</p>
          </div>
        </div>
      ) : (
        // <MockTestCommon que={questions} />
        <Speaking que={questions} mockTestNumber={mockTestNumber} />
      )}
    </div>
  );
}

export default SpeakingMockTest;
