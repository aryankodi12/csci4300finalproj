import './StatHead.css'

function StatHead(props) {
    return(
    <div className = "StatHeader">
        <div className= "curveR"></div>
        <h4 className="HeadName">Player Name</h4>
        <h4 className="numb">Number</h4>
        <h4>Position</h4>
        <h4>Height</h4>
        <h4>Age</h4>
        <h4>School</h4>
        <div className= "curveL"></div>
      </div>
    );
}

export default StatHead