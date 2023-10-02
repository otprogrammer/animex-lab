import { create } from "zustand";

const isEpisodesImg = localStorage.getItem("showEpisodesImg");
const autoNext = localStorage.getItem("autoNext");
const autoPlay = localStorage.getItem("autoPlay");

const autoSkip = localStorage.getItem("autoSkip");



export const useEpisodesImage = create<useEpisodesProps>((set) => ({
    isEpImgEnabled: isEpisodesImg,
  enableEpImg: () => {
    set(() => ({ isEpImgEnabled: true }));
    localStorage.setItem("showEpisodesImg", "true");
  },

  disableEpImg: () => {
    set(() => ({ isEpImgEnabled: false }));
    localStorage.setItem("showEpisodesImg", "false");
  },
}));

export const useAutoNext = create<useAutoNextProps>((set) => ({
    isAutoNext: autoNext,
    enableAutoNext: () => {
      set(() => ({ isAutoNext: true }));
      localStorage.setItem("autoNext", "true");
    },
  
    disableAutoNext: () => {
      set(() => ({ isAutoNext: false }));
      localStorage.setItem("autoNext", "false");
    },
  }));

  export const useAutoPlay = create<useAutoPlayProps>((set) => ({
    isAutoPlay: autoPlay,
    enableAutoPlay: () => {
      set(() => ({ isAutoPlay: true }));
      localStorage.setItem("autoPlay", "true");
    },
  
    disableAutoPlay: () => {
      set(() => ({ isAutoPlay: false }));
      localStorage.setItem("autoPlay", "false");
    },
  }));

  export const useAutoSkip = create<useAutoSkipProps>((set) => ({
    isAutoSkip: autoSkip,
    enableAutoSkip: () => {
      set(() => ({ isAutoSkip: true }));
      localStorage.setItem("autoSkip", "true");
    },
  
    disableAutoSkip: () => {
      set(() => ({ isAutoSkip: false }));
      localStorage.setItem("autoSkip", "false");
    },
  }));
// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
