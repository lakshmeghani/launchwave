import { useState } from "react";
import { useRecoilValue } from "recoil";
import { collectionNamesSelector } from "../recoil-data";

export function Navigator() {
  const [isAdding, setIsAdding] = useState(false);
  const data = useRecoilValue(collectionNamesSelector);
  const [preListData, setPreListData] = useState(
    data.map((listItem) => {
      return <SetListItem key={listItem} collectionName={listItem} />;
    }),
  );

  function addListItem() {
    setIsAdding(true);
  }

  return (
    <div className="w-[30%] bg-gray-950 p-10 border border-white rounded-2xl m-6 text-white font-mono text-3xl">
      <div className="flex justify-around">
        <h1 className="pr-14">Navigator</h1>
        <button
          className="border border-white px-2 py-2 rounded-full hover:bg-purple-900 cursor-pointer"
          onClick={addListItem}
          disabled={isAdding}
        >
          <img
            style={{ filter: "invert(1)" }}
            src="../src/assets/add.png"
            className="h-6 "
          />
        </button>
      </div>
      <div className="mt-6">
        {isAdding && <NewListItem />}
        {preListData}
      </div>
    </div>
  );
}

function NewListItem() {
  const [collectionName, setCollectionName] = useState("Collection Name");

  function inputValidator(e) {
    setCollectionName(e.target.value);
  }

  return (
    <div className="flex justify-between px-2 my-4 border-b border-gray-600">
      <section className="flex gap-6 place-items-center cursor-pointer">
        <img
          style={{ filter: "invert(1)" }}
          src="../src/assets/folder.webp"
          className="h-12 "
        />
        <input
          type="text"
          placeholder="Enter Name of Collection"
          className="text-sm w-60 bg-black p-3 rounded-2xl"
          value={collectionName}
          onChange={inputValidator}
        />
      </section>
      <section className="flex gap-2 place-items-center">
        <button className="border border-white px-2 py-3 rounded-full hover:bg-green-600 cursor-pointer">
          <img
            style={{ filter: "invert(1)" }}
            src="../src/assets/approve.png"
            className="h-4 "
          />
        </button>
        <button className=" rounded-full hover:bg-red-600 cursor-pointer">
          <img
            style={{ filter: "invert(1)" }}
            src={"../src/assets/cancel.png"}
            className="h-12"
          />
        </button>
      </section>
    </div>
  );
}

function SetListItem({ collectionName }) {
  return (
    <div className="flex justify-between px-2 my-4 border-b border-gray-600">
      <section className="flex gap-6 place-items-center cursor-pointer">
        <img
          style={{ filter: "invert(1)" }}
          src="../src/assets/folder.webp"
          className="h-12 "
        />
        <p className="text-xl">{collectionName}</p>
      </section>
      <section className="flex gap-2 place-items-center">
        <button className=" rounded-full hover:bg-red-600 cursor-pointer">
          <img
            style={{ filter: "invert(1)" }}
            src={"../src/assets/delete.png"}
            className="h-10"
          />
        </button>
      </section>
    </div>
  );
}
