import { useRecoilState, useRecoilValue } from 'recoil';
import { LeftCountryCodeState, RightCountryCodeState, StadiumState, LeftTeamScoreState, RightTeamScoreState } from '../atoms'
import '../styling.css'
import { leftCountryNameState, rightCountryNameState } from '../selectors'


function Editor() {
    const [leftCountryCode, setLeftCountryCode] = useRecoilState(LeftCountryCodeState);
    const [rightCountryCode, setRightCountryCode] = useRecoilState(RightCountryCodeState);
    const [stadium, setStadium] = useRecoilState(StadiumState);
    const [leftTeamScore, setLeftTeamScore] = useRecoilState(LeftTeamScoreState);
    const [rightTeamScore, setRightTeamScore] = useRecoilState(RightTeamScoreState);

    const incrementHome = () => {
        setLeftTeamScore(leftTeamScore + 1);
    }

    const incrementAway = () => {
        setRightTeamScore(rightTeamScore + 1);
    }

    const rightTeam = useRecoilValue(rightCountryNameState);
    const leftTeam = useRecoilValue(leftCountryNameState);

    return (
        <div className="Editor">
            <h1>EDITOR</h1>
            <div id='country_codes'>
                <span>Enter team country codes</span>
                <div>
                    <label for='hometeam_code'>Home team: </label>
                    <input id='hometeam_code' onChange={(e) => setLeftCountryCode(e.target.value)}></input>
                </div>
                <div>
                    <label for='awayteam_code'>Away team: </label>
                    <input id='awayteam_code' onChange={(e) => setRightCountryCode(e.target.value)}></input>
                </div>
            </div>
            <div id='stadium_div'>
                <label for='stadium'>Stadium:</label>
                <input id='stadium' onChange={(e) => setStadium(e.target.value)}></input>
            </div>
            <div id='scores_div'>
                <span>Register score:</span>
                <div>
                    <button id='home_goal' onClick={incrementHome}>Goal for {leftTeam}</button>
                    <button id='away_goal' onClick={incrementAway}>Goal for {rightTeam}</button>
                </div>
            </div>
        </div>
    );
}

export default Editor;