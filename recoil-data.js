import { atom, selector, selectorFamily } from "recoil";
const allData = JSON.parse(localStorage.getItem("launchWave_data")) || null;

let allDataAtom = atom({
  key: "allDataAtom",
  default: {
    "Smart Launcher": {
      "Google Search Engine": {
        url: "google.com",
        logo: "link",
      },
      "OneDrive Client": {
        url: "onedrive.live.com",
        logo: "link",
      },
      "WhatsApp Web": {
        url: "web.whatsapp.com",
        logo: "link",
      },
    },
    ...allData,
  },
});

const collectionNamesSelector = selector({
  key: "collectionNamesSelector",
  get: ({ get }) => {
    const data = get(allDataAtom);
    return Object.keys(data);
  },
});

let isAddingAtom = atom({
  key: "isAddingAtom",
  default: false,
});

const collectionBodyGiver = selectorFamily({
  key: "collectionNameGiver",
  get:
    (collectionName) =>
      ({ get }) => {
        return [collectionName, get(allDataAtom)[collectionName]];
      },
});

const collectionData = atom({
  key: "collectionBody",
  default: collectionBodyGiver("Smart Launcher"),
});

export {
  allDataAtom,
  collectionNamesSelector,
  isAddingAtom,
  collectionBodyGiver,
  collectionData,
};
