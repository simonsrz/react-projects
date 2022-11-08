import React from 'react';
import './App.css';

function App() {

  const canIGoOutNow = () => {
    const meteo = getWeatherFromMeteo();
    const onet = getWeatherFromOnet();
    const google = getWeatherFromGoogle();
    Promise.race([meteo, google, onet]).then(value => { console.log(value); }).catch((errorMsg) => {

    })
  }

  const getMyLocation = (result: string, seconds: number) => {
    return new Promise((resolve, reject) => setTimeout(() => { console.log(result); resolve(result) }, seconds * 1000));
  }

  const getCurrentTime = (result: string, seconds: number, shouldFail: boolean) => {
    return new Promise((resolve, reject) => setTimeout(() => {
      if ()
        console.log(result);
      resolve(result);
    },
      seconds * 1000));
  }

  const getWeatherFromMeteo = () => {
    const location = getMyLocation("Meteo: Warsaw", 1);
    const currTime = getCurrentTime("Meteo: 10*", 3);
    return Promise.all([location, currTime]);
  }

  const getWeatherFromOnet = () => {
    const location = getMyLocation("Onet: Warsaw", 2);
    const currTime = getCurrentTime("Onet: 10*", 4);
    return Promise.all([location, currTime]);
  }

  const getWeatherFromGoogle = () => {
    const location = getMyLocation("Google: Warsaw", 3);
    const currTime = getCurrentTime("Google: 10*", 5);
    return Promise.all([location, currTime]);
  }

  return (
    <div className="App">
      <button id="canIGoButton" onClick={canIGoOutNow}>CAN I GO OUT?</button>
    </div>
  );
}

export default App;
