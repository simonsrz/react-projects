import { useRecoilState } from 'recoil';
import { LeftCountryCodeState, RightCountryCodeState, StadiumState, LeftTeamScoreState, RightTeamScoreState } from '../atoms'


function Editor() {
    const [leftCountryCode, setLeftCountryCode] = useRecoilState(LeftCountryCodeState);
    const [rightCountryCode, setRightCountryCode] = useRecoilState(RightCountryCodeState);
    const [stadium, setStadium] = useRecoilState(StadiumState);
    const [leftTeamScore, setLeftTeamScore] = useRecoilState(LeftTeamScoreState);
    const [rightTeamScore, setRightTeamScore] = useRecoilState(RightTeamScoreState);

    const changeStadium = (e) => {
        setRightCountryCode(e.target.value);
    }

    const changeCode = (e) => {
        setStadium(e.target.value);
    }

    return (
        <div className="Editor">
            <input onChange={changeCode}></input>
            <input onChange={changeStadium}></input>
        </div>
    );
}

export default Editor;