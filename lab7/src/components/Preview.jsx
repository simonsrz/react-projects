import { useRecoilState, useRecoilValue } from 'recoil';
import {LeftCountryCodeState, RightCountryCodeState, StadiumState, LeftTeamScoreState, RightTeamScoreState} from '../atoms'
import { leftCountryNameState, rightCountryNameState, rightFlagState, leftFlagStates } from '../selectors'


function Preview() {
    const [leftCountryCode, setLeftCountryCode] = useRecoilState(LeftCountryCodeState);
    const [rightCountryCode, setRightCountryCode] = useRecoilState(RightCountryCodeState);
    const [stadium, setStadium] = useRecoilState(StadiumState);
    const [leftTeamScore, setLeftTeamScore] = useRecoilState(LeftTeamScoreState);
    const [rightTeamScore, setRightTeamScore] = useRecoilState(RightTeamScoreState);
    const rightFlag = useRecoilValue(rightFlagState);

    return (
      <div className="Preview">
        <img src={rightFlag} alt="flag"></img>
        <label>Stadium name: {stadium}</label>
      </div>
    );
  }
  
  export default Preview;