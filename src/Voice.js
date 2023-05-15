import React from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

const Voice = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      {/* <p>🎤{listening ? "on" : "off"}</p>
      <button onMouseOver={SpeechRecognition.startListening} onMouseOut={SpeechRecognition.stopListening}>🎤</button>
     <button onMouseOut={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> 
      <br />
      <br />
       <p>{transcript}</p> */}
      <input type="text" value={transcript}  
      placeholder='Speack loudly' />
    </div>
  );
};
export default Voice;