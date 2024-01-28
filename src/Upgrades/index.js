import { useState, useEffect } from 'react';
import './upgrades.css';



const Upgrades = ({uniqueNumber, object, score, setScore, setNumberOfClick, addStarter, monacemebi }) => {

  // uniqueNumber.uniqueNumber - არის უნიკალური რიცხვი
  // uniqueNumber.object = არის ობიექტი

  const [cost, setCost] = useState(object.cost);
  
  // ვიღებს ინფორმაციას ფასებზე სერვერიდან
  useEffect(() => {
    if (monacemebi !== null && monacemebi.upgrades && monacemebi.upgrades[uniqueNumber]) {
      setCost(monacemebi.upgrades[uniqueNumber].cost + 15);
    }
  }, [monacemebi, uniqueNumber]);
  



  const handleBuy = () => {
    if (score >= cost) {
      setScore((prevScore) => {     // score-ს ახალი მნიშვნელობის შენახვა
        const newScore = prevScore - cost;
        localStorage.setItem("score", JSON.stringify(newScore));
        return newScore;
      });
      setCost(cost+15);    // ახალი cost და numberOfUpgrades ის შეცვლა
      object.cost = cost;
      object.numberOfUpgrades = object.numberOfUpgrades+1;

      addStarter();

      if (uniqueNumber === 0){
        setNumberOfClick((prevNumberOfClick) => prevNumberOfClick + 1)
      }
    }
  }



  return (
    <div className='Upgrade_card_div'>
      <p>ნაყიდია: {object.numberOfUpgrades}</p>
      <img className="upgrade_img" src={`/Upgrade_imgs/${uniqueNumber}.jpg`} alt='upgrade' />
      <p>ფასი: {cost}</p>
      <button className='upgrade_button' onClick={() => handleBuy()}>ყიდვა</button>
    </div>
  )
};

export default Upgrades;
