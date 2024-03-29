import "./app.css";
import Header from "../Header";
import ClickButton from "../Click_button";
import Upgrades from "../Upgrades";
import { useState, useEffect } from "react";
import { UpdateScore } from '../upgrade_func/upgradeFunctional';
import { addUpgrade } from '../upgrade_func/addingUpgrade';
import ApiService from '../services/apiService';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Stats from "../stats/Stats";
import AboutPage from "../AboutGame/AboutPage"



// თამაშის წესები
// აჭერთ ღილაკს აგროვებთ ქულებს და ყიდულობთ სხვადასხვა upgrade
// თითოეული upgrade (პირველის გარდა) 1,5 წამში გიმატებთ რაღაც რაოდენობის ქულებს
// თავიდან მხოლოდ 1 upgrade და 1 კურსი გამოგიჩნდებათ როცა კურსს 2 ჯერ იყიდით გამოჩნდება ახალი კურსი

// ქულების კოდიდან მომატება თუ მოგინდებათ შეგიძლიათ შეხვიდეთ server/db/data.json-ში
// და შეცვალოთ score-ს მნიშვნელობა




const App = () => {
  const apiService = new ApiService();

  // ერთ დაჭერაზე რამდენი ქულა მოემატება
  const [numberOfClick, setNumberOfClick] = useState(1);

  const [monacemebi, setMonacemebi] = useState(null);

  const [upgrades, setUpgrades] = useState([
    { name: "clickupgr", numberOfUpgrades: 0, cost: 15 },
    { name: "mosawoni", numberOfUpgrades: 0, cost: 30 },
  ]);
  const [score, setScore] = useState(1);


  // data ს წამოღება სერვერიდან
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.fetchData();

        setMonacemebi(data);
        
        setScore(data.score);
        setUpgrades(data.upgrades);


        const clickupgrObject = data.upgrades.find(upgrade => upgrade.name === "clickupgr");
        setNumberOfClick(clickupgrObject.numberOfUpgrades);
        
        console.log('Data received:', data);
        
      } catch (error) {
        console.error('Error:', error.message);
      }
      
    };
    
  
    fetchData();
  
  }, []);

  // data ს შენახვა სერვერში
  const SaveProgress = async () => {
    try {
      // score-ს შენახვა
      await apiService.postUpdateScore({ "score": score });
      // upgrades-ს შენახვა
      for (const upgrade of upgrades) {
        await apiService.postUpdateUpgrades(upgrade);
        console.log("gafrinda", upgrade)
      }

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // საიტის განახლებისას dataს შენახვის შეხსენება
  window.addEventListener('beforeunload', function (event) {
    event.returnValue = "არ დაგავიწყდეს თამაშის შენახვა";
  });

//კოდი რომელიც ამატებს upgrades
  function addStarter(){
    addUpgrade(upgrades, setUpgrades);
  }

// კოდი რომელიც ყოველ 1.5 წამში ირთვება
  useEffect(() => {
    const intervalId = setInterval(() => {
      UpdateScore(upgrades, score, setScore);
    }, 1500); 

    return () => clearInterval(intervalId);
  });  // დეპენდენსიზე იყო [upgrades] მარა ამის გარეშეც მუშაობს






// საიდუმლო პრიზი

// რაღაც რაოდენობა დაჭერების შემდეგ რომ რაღაც ბონუსი იყოს
// სექრეთი რომელიც იძლევა ბონუსს 7 ჯერ მასზე დაჭერისას

  const [mouseCord, setMouseCord] = useState({ x: 0, y: 0});
  const [clickNumber, setClickNumber] = useState(0);
  const [clickNumberSec, setClickNumberSec] = useState(0);
  const [numberOfSecrets, setNumberOfSecrets] = useState(1);
  

  const applyMouseCord = (e) => {
      const {screenX, screenY} =e;
      setMouseCord({ x: screenX, y: screenY });
  }

// თუ კონკრეტულ ადგილას ეკრანზე 7 ჯერ დააჭერთ მიიღებთ საიდუმლო პრიზს
  useEffect(() => {
    setClickNumber((clickNumber) =>  clickNumber + 1);
    if ( mouseCord.x === 7 && mouseCord.y === 137 && clickNumberSec < 5){
      setClickNumberSec((clickNumberSec) => clickNumberSec + 1);
      
      if (clickNumberSec === 7 && score > 5000){
        setScore((score) => score * 4)
      }else {
        setScore((score) => score + 150000)
      }
    }

    if ( clickNumber === (5000 * numberOfSecrets)){
      setScore((score) => score + 1000001);
      setNumberOfSecrets((numberOfSecrets) => numberOfSecrets + 1);
      // უნდა გაიშვას მოდალი განმარტებებით რა მოხდა და შემდეგი პრიზი როდის და რამდენი იქნება
    }
    
    // console.log(mouseCord);
  }, [mouseCord]);





  return (
    <Router>
      <div onClick={applyMouseCord} className="body_div">
        <Header SaveProgress={SaveProgress} ></Header>

        <Routes>
          <Route exact path="/" element={
            <>
              <ClickButton score={score} setScore={setScore} numberOfClick={numberOfClick} />
              <div className="Upgrades_div">
                {upgrades.map((upgrade, index) => (
                  <Upgrades
                    key={index}
                    uniqueNumber={index}
                    object={upgrade}
                    score={score}
                    setScore={setScore}
                    setNumberOfClick={setNumberOfClick}
                    addStarter={addStarter}
                    monacemebi={monacemebi}
                  />
            
                ))}
              </div>
            </>
          } />
          <Route exact path="/stats" element={
            upgrades.map((upgrade, index) => (
              <Stats 
              key={index}
              uniqueNumber={index}
              object={upgrade}
              />
          ))
          } />
          <Route exact path="/aboutGame" element={
            <AboutPage></AboutPage>
          } />

        </Routes>
      </div>
    </Router>
  );
};
  

export default App;
