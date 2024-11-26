import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import quizeData from "../data/Quize.json";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state || {};

  const handleNext = () => {
    if (selectedOptions[currentQuestion] === quizeData[currentQuestion].answer) {
      if (!selectedOptions[currentQuestion]) setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleFinish = () => {
    if (selectedOptions[currentQuestion] === quizeData[currentQuestion].answer) {
      if (!selectedOptions[currentQuestion]) setScore(score + 1);
    }
    navigate("/result", { state: { name, score } });
  };

  const handleOptionChange = (optionIndex) => {
    setSelectedOptions({ ...selectedOptions, [currentQuestion]: optionIndex });
  };

  return (
    <div>
      <h2>{quizeData[currentQuestion].question}</h2>
      <div>
        {quizeData[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="option"
              id={`option-${index}`}
              checked={selectedOptions[currentQuestion] === index}
              onChange={() => handleOptionChange(index)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrev} disabled={currentQuestion === 0}>
          Previous
        </button>
        {currentQuestion < quizeData.length - 1 ? (
          <button onClick={handleNext} disabled={selectedOptions[currentQuestion] == null}>
            Next
          </button>
        ) : (
          <button onClick={handleFinish} disabled={selectedOptions[currentQuestion] == null}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
