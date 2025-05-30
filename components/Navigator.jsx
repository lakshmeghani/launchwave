import { useState } from "react";
import existingData from "../database.json";

export function Navigator() {
  const [data, setData] = useState(existingData);

  function deleteListItem(navigateName) {
    const { [navigateName]: _, ...rest } = data; // assigning the navigateName variable name's key to _(underscore) and coagulating all other properties
    setData(rest);
  }

  return (
    <div className="w-[30%] bg-gray-950 p-10 border border-white rounded-2xl m-6 text-white font-mono text-3xl">
      <div className="flex justify-around">
        <h1 className="pr-14">Navigator</h1>
        <button className="border border-white px-2 py-2 rounded-full hover:bg-purple-900 cursor-pointer">
          <img
            style={{ filter: "invert(1)" }}
            src="../src/assets/add.png"
            className="h-6 "
          />
        </button>
      </div>
      <div className="mt-6">
        {Object.keys(data).map((key) => {
          return (
            <ListItem
              key={key}
              navigateName={key}
              deleteListItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

function ListItem({ navigateName, deleteListItem }) {
  const [inputState, setInputState] = useState(false);
  const [collectionName, setCollectionName] = useState(navigateName);

  function inputValidator(e) {
    setCollectionName(e.target.value);
  }

  function approveCollection() {
    setInputState(false);
  }

  function deleteListItemHere() {
    deleteListItem(navigateName);
  }

  return (
    <div className="flex justify-between px-2 my-4 border-b border-gray-600">
      <section className="flex gap-6 place-items-center cursor-pointer">
        <img
          style={{ filter: "invert(1)" }}
          src="../src/assets/folder.webp"
          className="h-12 "
        />
        {!inputState ? (
          <p className="text-xl">{collectionName}</p>
        ) : (
          <input
            type="text"
            placeholder="Enter Name of Collection"
            className="text-sm w-60 bg-black p-3 rounded-2xl"
            value={collectionName}
            onChange={inputValidator}
          />
        )}
      </section>
      <section className="flex gap-2 place-items-center">
        {inputState && (
          <button
            className="border border-white px-2 py-3 rounded-full hover:bg-green-600 cursor-pointer"
            onClick={approveCollection}
          >
            <img
              style={{ filter: "invert(1)" }}
              src="../src/assets/approve.png"
              className="h-4 "
            />
          </button>
        )}
        <button
          className=" rounded-full hover:bg-red-600 cursor-pointer"
          onClick={deleteListItemHere}
        >
          <img
            style={{ filter: "invert(1)" }}
            src={
              inputState
                ? "../src/assets/cancel.png"
                : "../src/assets/delete.png"
            }
            className={` ${inputState ? "h-12" : "h-10"}`}
          />
        </button>
      </section>
    </div>
  );
}
