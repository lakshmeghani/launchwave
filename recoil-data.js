import { atom, selector } from "recoil";
import allData from "./database.json";

let allDataAtom = atom({
  key: "allDataAtom",
  default: allData,
});

const collectionNamesSelector = selector({
  key: "collectionNamesSelector",
  get: ({ get }) => {
    const data = get(allDataAtom);
    return Object.keys(data);
  },
});

export { allDataAtom, collectionNamesSelector };
