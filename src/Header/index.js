import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({SaveProgress}) {
  const navigate = useNavigate();

    return (
      <div className="head_body_div">
        <div className="icons_div">
        <img onClick={() => navigate("/")} className="icons" src='/icons/home.png'></img>
          <img onClick={() => navigate("/stats")} className="icons" src='/icons/stats.png'></img>
          <img onClick={() => navigate("/aboutGame")} className="icons" src='/icons/about.png'></img>
        </div>
        <header className="Main_header">
          
          <img className="Head_img" src='/Head_imgs/jeims.png' alt="btu_logo"/>
          <h1 className="Head_h1">𝓑𝓣𝓤 𝓒𝓵𝓲𝓬𝓴𝓮𝓻</h1>
          <img className="Head_img" src="/Head_imgs/kaci.png" alt="btu_logo"/>
          <button className="pogress_save" onClick={SaveProgress}>პროგრესის შენახვა</button>
        </header>
      </div>
    );
  }
  
  export default Header;