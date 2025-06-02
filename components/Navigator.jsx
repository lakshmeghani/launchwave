import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  allDataAtom,
  collectionBodyGiver,
  collectionData,
  collectionNamesSelector,
  isAddingAtom,
} from "../recoil-data";

function localStorageSave(data) {
  console.log("saving updated data to localStorage...");
  localStorage.setItem("launchWave_data", JSON.stringify(data));
}

export function Navigator() {
  const [isAdding, setIsAdding] = useRecoilState(isAddingAtom);
  const data = useRecoilValue(collectionNamesSelector);
  const allData = useRecoilValue(allDataAtom);

  function addListItem() {
    setIsAdding(true);
  }

  useEffect(() => {
    localStorageSave(allData);
  }, [allData]);

  return (
    <div className="w-[30%] bg-gray-950 p-10 border border-white rounded-2xl m-6 text-white font-mono text-3xl">
      <div className="flex justify-around">
        <h1 className="pr-14">Navigator</h1>
        <button
          className="border border-white px-2 py-2 rounded-full hover:bg-purple-900 cursor-pointer disabled:cursor-not-allowed"
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
        {data.map((listItem) => {
          return <SetListItem key={listItem} collectionName={listItem} />;
        })}
      </div>
    </div>
  );
}

function NewListItem() {
  const setIsAdding = useSetRecoilState(isAddingAtom);
  const [collectionName, setCollectionName] = useState("Collection Name");
  // useState only for the dynamic input text validation
  const [data, setData] = useRecoilState(allDataAtom);

  function inputValidator(e) {
    setCollectionName(e.target.value);
  }

  function removeSkeletonItem() {
    setIsAdding(false);
  }

  function addNewItem() {
    setData((currentData) => {
      return { ...currentData, [collectionName]: [] };
    });
    removeSkeletonItem();
    localStorageSave(data);
  }

  function handleKeyDown(event) {
    if (event.key == "Enter") {
      addNewItem();
    } else if (event.key == "Escape") {
      removeSkeletonItem();
    }
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
          onKeyDown={handleKeyDown}
          autoFocus={true}
        />
      </section>
      <section className="flex gap-2 place-items-center">
        <button className="border border-white px-2 py-3 rounded-full hover:bg-green-600 cursor-pointer">
          <img
            style={{ filter: "invert(1)" }}
            src="../src/assets/approve.png"
            className="h-4 "
            onClick={addNewItem}
          />
        </button>
        <button className=" rounded-full hover:bg-red-600 cursor-pointer">
          <img
            style={{ filter: "invert(1)" }}
            src={"../src/assets/cancel.png"}
            className="h-12"
            onClick={removeSkeletonItem}
          />
        </button>
      </section>
    </div>
  );
}

function SetListItem({ collectionName }) {
  const [data, setData] = useRecoilState(allDataAtom);
  const setCollectionData = useSetRecoilState(collectionData);

  function deleteListItem() {
    setData((currentData) => {
      const { [collectionName]: _, ...rest } = currentData;
      return rest;
    });
    localStorageSave(data);
  }

  function chooseCollection() {
    const collectionBodyData = useRecoilValue(
      collectionBodyGiver(collectionName),
    );
    setCollectionData([collectionName, collectionBodyData]);
  }

  return (
    <div className="flex justify-between px-2 my-4 border-b border-gray-600">
      <section
        className="flex gap-6 place-items-center cursor-pointer"
        onClick={chooseCollection}
      >
        <img
          style={{ filter: "invert(1)" }}
          src="../src/assets/folder.webp"
          className="h-12 "
        />
        <p className="text-xl">{collectionName}</p>
      </section>
      {collectionName !== "Smart Launcher" ? (
        <button className=" rounded-full hover:bg-red-600 cursor-pointer">
          <img
            style={{ filter: "invert(1)" }}
            src={"../src/assets/delete.png"}
            className="h-10"
            onClick={deleteListItem}
          />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
