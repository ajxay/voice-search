import React, { useEffect, useState } from "react";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

const API_KEY = "YOUR_API_KEY";
const CX = "YOUR_CX";

const Dictaphone = () => {
  const [result, setResult] = useState(null);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    finalTranscript,
  } = useSpeechRecognition();

  const stopListening = () => {
    SpeechRecognition.stopListening();
    getSearchResult(transcript);
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  async function getSearchResult(transcript) {
    console.log(transcript, "transcript");
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyAm5eYULOU2Kd3Wt4MvYcvNXvjzZ70qDhM&cx=c276411025b54413b&q=${transcript}`
      );
      console.log(response, "from google");
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="voice-search">
      <div className="voice-search-buttons">
        {listening ? (
          <button onClick={stopListening}>
            <FontAwesomeIcon icon={faMicrophoneSlash} />
          </button>
        ) : (
          <button onClick={startListening}>
            <FontAwesomeIcon icon={faMicrophone} />
          </button>
        )}
        <button onClick={resetTranscript}>
          <FontAwesomeIcon icon={faRotateRight} />
        </button>
      </div>
      <div className="voice-search-transcript">
        <p>Microphone: {listening ? "on" : "off"}</p>
        <p>{transcript}</p>
      </div>
      {result && (
        <div className="voice-search-results">
          <h3>Results</h3>
          {result.items.map((item, index) => (
            <div key={index} className="voice-search-result-item">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="voice-search-result-link"
              >
                {item.title}
              </a>
              <p className="voice-search-result-snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dictaphone;
