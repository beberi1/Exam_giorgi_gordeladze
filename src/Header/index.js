import "./Header.css";


function Header({SaveProgress}) {



    return (
      <div className="body_div">
        <header className="Main_header">
          <img className="Head_img" src='/Head_imgs/jeims.jpg' alt="james_bond"/>
          <h1 className="Head_h1">btu clicker</h1>
          <img className="Head_img" src="/Head_imgs/kaci.jpg" alt="Funny_man"/>
          <button className="pogress_save" onClick={SaveProgress}>პროგრესის შენახვა</button>
        </header>
      </div>
    );
  }
  
  export default Header;