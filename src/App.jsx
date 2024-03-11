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
        <div className={step >= 1? "active" : ""}>
          1
        </div>
        <div className={step >= 2? "active" : ""}>
          2
        </div>
        <div className={step >= 3? "active" : ""}> 
          3
        </div>
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
