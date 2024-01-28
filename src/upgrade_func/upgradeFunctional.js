export function UpdateScore(object, score, setScore) {

  // console.log('Updating score with upgrades:', object[1].numberOfUpgrades);
  // ეს კოდი გაეშვება ყოვალ 1.5 წამში
  // ქულების მომატების ლოგიკა


  if (object[1].numberOfUpgrades >= 1){
    setScore((prevScore) => {   //წინა სქორის მნიშვნელობა
      const newScore = prevScore + object[1].numberOfUpgrades;    //ამატებს ჯერ 1 ს გაძლიერების შემდეგ მეტს
      localStorage.setItem("score", JSON.stringify(newScore));    //ინახავს ლოკალურად
      return newScore;
    });
  }


  if (object.length >= 3 && object[2].numberOfUpgrades >= 1){
    setScore((prevScore) => {   
      const newScore = prevScore + (5*object[2].numberOfUpgrades);   
      localStorage.setItem("score", JSON.stringify(newScore));    
      return newScore;
    });
  }

  if (object.length >= 4 && object[3].numberOfUpgrades >= 1){
    setScore((prevScore) => {   
      const newScore = prevScore + (10*object[3].numberOfUpgrades);   
      localStorage.setItem("score", JSON.stringify(newScore));   
      return newScore;
    });
  }

  if (object.length >= 5 && object[4].numberOfUpgrades >= 1){
    setScore((prevScore) => {   
      const newScore = prevScore + (20*object[4].numberOfUpgrades);   
      localStorage.setItem("score", JSON.stringify(newScore));   
      return newScore;
    });
  }

  if (object.length >= 6 && object[5].numberOfUpgrades >= 1){
    setScore((prevScore) => {   
      const newScore = prevScore + (30*object[5].numberOfUpgrades);   
      localStorage.setItem("score", JSON.stringify(newScore));   
      return newScore;
    });
  }

  if (object.length >= 7 && object[6].numberOfUpgrades >= 1){
    setScore((prevScore) => {   
      const newScore = prevScore + (90*object[6].numberOfUpgrades);   
      localStorage.setItem("score", JSON.stringify(newScore));   
      return newScore;
    });
  }

  
  if (object.length >= 8 && object[7].numberOfUpgrades >= 1){
    setScore((prevScore) => {   
      const newScore = prevScore + (150*object[7].numberOfUpgrades);   
      localStorage.setItem("score", JSON.stringify(newScore));   
      return newScore;
    });
  }

  
  if (object.length >= 9 && object[8].numberOfUpgrades >= 1){
    setScore((prevScore) => {   
      const newScore = prevScore + (250*object[8].numberOfUpgrades);   
      localStorage.setItem("score", JSON.stringify(newScore));   
      return newScore;
    });
  }

  
  if (object.length >= 10 && object[9].numberOfUpgrades >= 1){
    setScore((prevScore) => {   
      const newScore = prevScore + (350*object[9].numberOfUpgrades);   
      localStorage.setItem("score", JSON.stringify(newScore));   
      return newScore;
    });
  }

}