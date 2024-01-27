import "./stats.css"


const Stats = ({ uniqueNumber, object }) => {


    // არითმეტიკული პროგრესია
    const a1 = object.cost-(object.numberOfUpgrades*15);
    const an = a1+(object.numberOfUpgrades-1)*15
    const sn = ((a1+an)/2)*object.numberOfUpgrades;

    return(
        <>
        {uniqueNumber === 0 ? <div className="place"></div> : null}
        <div className="statDiv">
            <img className="statimg" src={`/Upgrade_imgs/${uniqueNumber}.jpg`} alt='upgrade'></img>
            <p>გაძლირების სახელი: <span> {object.name}</span></p>
            <p>გაძლირების რაოდენობა: <span> {object.numberOfUpgrades} </span></p>
            <p>საერთო ჯამში დახარჯული ქულები: <span> {sn}</span></p>
        </div>
    </>
    );
};

export default Stats;