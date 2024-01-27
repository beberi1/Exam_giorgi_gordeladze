import "./click.css";

const ClickButton = ({score, setScore, numberOfClick}) => {
  


  const handleClick = () => {

    setScore((prevScore) => {   //წინა სქორის მნიშვნელობა
      const newScore = prevScore + numberOfClick + 1;    //ამატებს ჯერ 1 ს გაძლიერების შემდეგ მეტს
      localStorage.setItem("score", JSON.stringify(newScore));    //ინახავს ლოკალურად
      return newScore;
    });
  }


  return (
    <div className="Click_body">
      <h1>ქულა: {score-1}</h1>
      <button className="Main_button" onClick={() => {handleClick()}}>დააჭირე ქულის მოსამატებლად</button>
    </div>
  );
};

export default ClickButton;
