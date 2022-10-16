import './Player.css';

function Player(props) {
    return (
        <div className="Player">
            <div className="PlayerInfo">
                <h2>Player {props.PlayerNumber}</h2>
                <p>Name: <b>{props.PlayerName}</b></p>
                <p>Played number of times: <b>{props.PlaysCounter}</b></p>
            </div>
            <div className="PlayButton">
            {props.IsDisabled ? (
                 <button disabled onClick={() => props.PlayerToAdmin(props.PlayingStatus)}>{props.PlayingStatus}</button>
            ) : (
                <button onClick={() => props.PlayerToAdmin(props.PlayingStatus)}>{props.PlayingStatus}</button>
            )}
            </div>
        </div>
      );
}

export default Player;