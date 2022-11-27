import { useRecoilState, useRecoilValue } from 'recoil';
import { LeftCountryCodeState, RightCountryCodeState, StadiumState, LeftTeamScoreState, RightTeamScoreState } from '../atoms'
import { leftCountryNameState, rightCountryNameState, rightFlagState, leftFlagState } from '../selectors'
import '../styling.css'

function Preview() {
  const [leftCountryCode, setLeftCountryCode] = useRecoilState(LeftCountryCodeState);
  const [rightCountryCode, setRightCountryCode] = useRecoilState(RightCountryCodeState);
  const [stadium, setStadium] = useRecoilState(StadiumState);
  const [leftTeamScore, setLeftTeamScore] = useRecoilState(LeftTeamScoreState);
  const [rightTeamScore, setRightTeamScore] = useRecoilState(RightTeamScoreState);
  const rightFlag = useRecoilValue(rightFlagState);
  const leftFlag = useRecoilValue(leftFlagState);
  const rightTeam = useRecoilValue(rightCountryNameState);
  const leftTeam = useRecoilValue(leftCountryNameState);

  return (
    <div className="Preview">
      <h1>PREVIEW</h1>
      <div id='flags_teams'>
        <div id='left'>
          <img src={leftFlag} alt="home_flag"></img>
          <span>{leftTeam}</span>
        </div>
        <div id='right'>
          <img src={rightFlag} alt="away_flag"></img>
          <span>{rightTeam}</span>
        </div>
      </div>
      <div id='stadium_scores'>
        <label>Stadium name: {stadium}</label>
        <span>{leftTeamScore} : {rightTeamScore}</span>
      </div>
    </div>
  );
}

export default Preview;