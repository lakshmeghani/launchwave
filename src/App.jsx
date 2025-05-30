import { Navigator } from "../components/Navigator.jsx";
import { Displayer } from "../components/Displayer.jsx";

function App() {
  return (
    <>
      <div className="h-[100vh] bg-black flex">
        <Navigator />
        <Displayer />
      </div>
    </>
  );
}

export default App;
