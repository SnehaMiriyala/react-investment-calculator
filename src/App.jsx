import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Result from "./components/Result.jsx"
import { useState } from "react";
function App() {

  const [ userData, setUserData ] = useState({
    'initialInvestment': 10000,
    'annualInvestment': 1200,
    'expectedReturn': 6,
    'duration': 10

});
function handleChange(identity, newValue){
    setUserData(prevUserData => {
        return {
        ...prevUserData,
        [identity]: +newValue
    }
}
)}
const inputIsValid = userData.duration > 0;

  return ( <>
    <Header />
    <UserInput onChange={handleChange} userInput={userData}/>
    {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    {inputIsValid && <Result userInput={userData}/>}
    </>
  )
}

export default App
