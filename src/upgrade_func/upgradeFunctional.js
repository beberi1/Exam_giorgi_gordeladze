export function UpdateScore(object, score, setScore) {

  console.log('Updating score with upgrades:', object[1].numberOfUpgrades);
  // ეს კოდი გაეშვება ყოვალ 1.5 წამში

  if (object[1].numberOfUpgrades >= 1){
    setScore((prevScore) => {   //წინა სქორის მნიშვნელობა
      const newScore = prevScore + object[1].numberOfUpgrades;    //ამატებს ჯერ 1 ს გაძლიერების შემდეგ მეტს
      localStorage.setItem("score", JSON.stringify(newScore));    //ინახავს ლოკალურად
      return newScore;
    });
  }


  //ფასის მომატების ლოგიკა
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


}