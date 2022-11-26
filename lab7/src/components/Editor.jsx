import { useRecoilState } from 'recoil';
import { LeftCountryCodeState, RightCountryCodeState, StadiumState, LeftTeamScoreState, RightTeamScoreState } from '../atoms'


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


    return (
        <div className="Editor">
            <label for='hometeam_code'>Home team:</label>
            <input id='hometeam_code' onChange={(e) => setLeftCountryCode(e.target.value)}></input>

            <label for='awayteam_code'>Away team:</label>
            <input id='awayteam_code' onChange={(e) => setRightCountryCode(e.target.value)}></input>

            <label for='stadium'>Stadium:</label>
            <input id='stadium' onChange={(e) => setStadium(e.target.value)}></input>

            <button id='home_goal' onClick={incrementHome}>Goal for {leftCountryCode}</button>
            <button id='away_goal' onClick={incrementAway}>Goal for {rightCountryCode}</button>
        </div>
    );
}

export default Editor;