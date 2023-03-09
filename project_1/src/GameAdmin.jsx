import './GameAdmin.css';
import Player from './Player';
import { useState } from "react";


function GameAdmin(props) {
    const [P1Name, setP1Name] = useState("<Name from input field>");
    const [P2Name, setP2Name] = useState("<Name from input field>");
    const [P1Status, setP1Status] = useState("Play");
    const [P2Status, setP2Status] = useState("Play");
    const [P1Counter, setP1Counter] = useState(0);
    const [P2Counter, setP2Counter] = useState(0);
    const [P1Button, setP1Button] = useState(false);
    const [P2Button, setP2Button] = useState(false);

    const P1ToAdmin = (P1Data) => {
        if(P1Data==="Play"){
            setP1Status("This user is playing now");
            setP2Status("Play");
            setP1Counter(P1Counter+1);
            setP1Button(true);
            setP2Button(false);
        }
    }
    const P2ToAdmin = (P2Data) => {
        if(P2Data==="Play"){
            setP2Status("This user is playing now");
            setP1Status("Play");
            setP2Counter(P2Counter+1);
            setP1Button(false);
            setP2Button(true);
        }
    }

    const P1ChangeName = (e) => {
        if(e.key === 'Enter')
        {
            setP1Name(e.target.value);
        }
    }
    const P2ChangeName = (e) => {
        if(e.key === 'Enter')
        {
            setP2Name(e.target.value);
        }
    }

    return (
        <div className="GameAdmin">
            <div>
                <Player PlayerNumber="one" PlayerName={P1Name} PlayerToAdmin={P1ToAdmin} PlayingStatus={P1Status} PlaysCounter={P1Counter} IsDisabled={P1Button}/>
                <Player PlayerNumber="two" PlayerName={P2Name} PlayerToAdmin={P2ToAdmin} PlayingStatus={P2Status} PlaysCounter={P2Counter} IsDisabled={P2Button}/>
            </div>
            <div className="breakline"></div>
            <div className="NameSetters">
                <div>
                    <label for="playerOne">Set Name of Player One: </label>
                    <input onKeyDown={P1ChangeName} type="text" id="playerOne"/>
                </div>
                <div>
                    <label for="playerTwo">Set Name of Player Two: </label>
                    <input onKeyDown={P2ChangeName} type="text" id="playerTwo"/>
                </div>
            </div>
            <p id="nwm"></p>
            
        </div>
      );
}


export default GameAdmin;
