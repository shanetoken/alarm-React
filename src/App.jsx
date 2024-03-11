import { useState, useEffect, useRef } from 'react';
import './App.css';


function App() {

  const message = [
    "Learn React ⚛️",
    "Get a job 💼",
    "Go home 🛫"
  ]

  const [step, setStep] = useState(1)

  const disableStyle = step < 1 || step > 3? 'disabled' : ''

  const handleBack = () => {
    setStep((s) => s - 1)
  }

  const handleNext = () => {
    setStep((s) => s + 1)
  }

  return (
    <>
      <div className='steps'>
        
        {Array.from({ length: 3 }, (_, i) => (
            <span key={i} className={i < step ? "active" : ""}>{i + 1}</span>
        ))}

      </div>
      
      <h1 className='message'>Step {step} : {message[step - 1]}</h1>

      <div className='btn-step'>
        <button onClick={handleBack} disabled={step === 1}>Back</button>
        <button onClick={handleNext} disabled={step === 3}>Next</button>
      </div>
    </>
  );
}

export default App;
