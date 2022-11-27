import Editor from './components/Editor';
import Preview from './components/Preview';
import {RecoilRoot} from 'recoil';
import './styling.css'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Editor />
        <Preview />
      </RecoilRoot>
    </div>
  );
}

export default App;
