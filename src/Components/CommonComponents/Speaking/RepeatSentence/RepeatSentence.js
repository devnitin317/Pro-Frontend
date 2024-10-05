import React, { useEffect, useState } from 'react'
import './RepeatSentence.css'
import AudioPlayer from '../../AudioPlayer/AudioPlayer'
import { useSelector } from 'react-redux';
import SpeechToText from '../../SpeechToText/SpeechToText';
import TextToSpeech from '../../TextToSpeech/TextToSpeech';

function RepeatSentence({audio,questionId,text}) {
  const [audioEnds, setAudioEnds] = useState(false);
  const audioPlayer = useSelector((state) => state.audioPlayer);

  useEffect(() => {
    setAudioEnds(false);
  }, [questionId]);

  function onAudioEnds(params) {
    setAudioEnds(true);
  }
  return (
    <div>
       {/* <AudioPlayer src={audio} reset={audioPlayer.reset} onEnd={onAudioEnds} questionId={questionId}/> */}
      <TextToSpeech text={audio} onAudioEnds={onAudioEnds}/>
       {audioEnds ? <SpeechToText /> : <></>}
      
    </div>
  )
}

export default RepeatSentence