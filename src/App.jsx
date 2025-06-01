import { Navigator } from "../components/Navigator.jsx";
import { Displayer } from "../components/Displayer.jsx";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="h-[100vh] bg-black flex">
        <Navigator />
        <Displayer />
      </div>
    </RecoilRoot>
  );
}

export default App;
