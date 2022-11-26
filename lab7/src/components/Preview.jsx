import { useRecoilState, useRecoilValue } from 'recoil';
import {LeftCountryCodeState, RightCountryCodeState, StadiumState, LeftTeamScoreState, RightTeamScoreState} from '../atoms'
import { leftCountryNameState, rightCountryNameState, rightFlagState, leftFlagState } from '../selectors'


function Preview() {
    const [leftCountryCode, setLeftCountryCode] = useRecoilState(LeftCountryCodeState);
    const [rightCountryCode, setRightCountryCode] = useRecoilState(RightCountryCodeState);
    const [stadium, setStadium] = useRecoilState(StadiumState);
    const [leftTeamScore, setLeftTeamScore] = useRecoilState(LeftTeamScoreState);
    const [rightTeamScore, setRightTeamScore] = useRecoilState(RightTeamScoreState);
    const rightFlag = useRecoilValue(rightFlagState);
    const leftFlag = useRecoilValue(leftFlagState);

    return (
      <div className="Preview">
        <img src={leftFlag} alt="home_flag"></img>
        <img src={rightFlag} alt="away_flag"></img>
        <label>Stadium name: {stadium}</label>
        <label>{leftTeamScore} : {rightTeamScore}</label>
      </div>
    );
  }
  
  export default Preview;