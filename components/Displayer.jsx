import { useRecoilValue } from "recoil";
import { collectionData } from "../recoil-data";

export function Displayer() {
  return (
    <div className="w-[75%] bg-gray-950 p-10 border border-white rounded-2xl m-6">
      <Header />
      <CollectionBody />
      <Footer />
    </div>
  );
}

function Header() {
  const [collectionName, _] = useRecoilValue(collectionData);

  return (
    <div className="flex justify-between px-16 pb-6 text-white text-3xl font-mono border-b border-gray-600">
      <h1 className="pr-14">LaunchWave</h1>
      <h1 className="pr-14">{collectionName}</h1>
      <div className="flex gap-12">
        <button className="border border-white px-2 py-2 rounded-full hover:bg-purple-900 cursor-pointer disabled:cursor-not-allowed">
          <img
            style={{ filter: "invert(1)" }}
            src="../src/assets/add.png"
            className="h-6 "
          />
        </button>
        <button className="border border-white px-2 py-2 rounded-full hover:bg-purple-900 cursor-pointer disabled:cursor-not-allowed">
          <img
            style={{ filter: "invert(1)" }}
            src="../src/assets/settings.png"
            className="h-6 "
          />
        </button>
      </div>
    </div>
  );
}

function CollectionBody() {
  return <div className="h-[90%]"></div>;
}

function Footer() {
  return (
    <div className="border-t border-gray-600 flex justify-between px-14 py-3">
      <p className="text-center text-white">
        Browser Independent: <b>No</b>{" "}
      </p>
      <p className="text-center text-white">
        Source Code:{" "}
        <a href="https://github.com/lakshmeghani/launchwave">GitHub</a>
      </p>
      <p className="text-center text-white">Welcome Page</p>
    </div>
  );
}
