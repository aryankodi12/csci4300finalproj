import Card from './Card';
import './Heading.css';

function Heading () {

    return (
        <Card className="heading-box">
            <img className = "logo" src='https://i.imgur.com/xo4qwfm.png' alt="Roster Ready Logo"/>
        </Card>
    );
}

export default Heading;