"use client"
import { create } from "zustand";
import supabase from "../utils/supabase";
import { useAuth } from "@/components/hooks/Auth";

const isEpisodesImg = typeof window !== "undefined" && localStorage.getItem("showEpisodesImg");
const autoNext = typeof window !== "undefined" && localStorage.getItem("autoNext");
const autoPlay = typeof window !== "undefined" && localStorage.getItem("autoPlay");

const autoSkip = typeof window !== "undefined" && localStorage.getItem("autoSkip");



export const useEpisodesImage = create<useEpisodesProps>((set) => ({
    isEpImgEnabled: isEpisodesImg,
  enableEpImg: () => {
    set(() => ({ isEpImgEnabled: "true" }));
    localStorage.setItem("showEpisodesImg", "true");
  },

  disableEpImg: () => {
    set(() => ({ isEpImgEnabled: "false" }));
    localStorage.setItem("showEpisodesImg", "false");
  },
}));

export const useAutoNext = create<useAutoNextProps>((set) => ({
    isAutoNext: autoNext,
    enableAutoNext: () => {
      set(() => ({ isAutoNext: "true" }));
      localStorage.setItem("autoNext", "true");
    },
  
    disableAutoNext: () => {
      set(() => ({ isAutoNext: "false" }));
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
      set(() => ({ isAutoSkip: "true" }));
      localStorage.setItem("autoSkip", "true");
    },
  
    disableAutoSkip: () => {
      set(() => ({ isAutoSkip: "false" }));
      localStorage.setItem("autoSkip", "false");
    },
  }));


  export const useSort = create<useSortProps>((set) => ({
    isSort: false,
    enableIsSort: () => {
      set(() => ({ isSort: true }));
    },
  
    disableIsSort: () => {
      set(() => ({ isSort: false }));
    },
  }));


  export const useContact = create<useContactProps>((set) => ({
    isContact: false,
    enableIsContact: () => {
      set(() => ({ isContact: true }));
    },
  
    disableIsContact: () => {
      set(() => ({ isContact: false }));
    },
  }));


  export const useModal = create<useModalProps>((set) => ({
    isModal: false,
    id:"",
  
    enableIsModal: (id) => {
      set(() => ({ isModal: true,id:id }));
    },
  
    disableIsModal: () => {
      set(() => ({ isModal: false }));
    },
  }));


  export const useUser = create((set) => ({
    isUser: false,
    userData : {},
    id:"",
  
    getUserData: async (userid) => {

      const {data} =await supabase
      .from("profiles")
      .select("*")
      .eq("id", userid)

      set(() => ({userData : data}))
    },
  
    
  }));


  export const useDetailsModal = create<useDetailsModalProps>((set,get) => ({
    isOpen: false,
    id:"",
    anilistid:"",
    anilistData:{},
  
    openModal: (id,anilistid) => {
      set(() => ({ isOpen: true,id:id,anilistid:anilistid }));
    },
  
    closeModal: () => {
      set(() => ({ isOpen: false }));
    },
    clearId: () => {
      set(() => ({ id:"" }));
    },
    getAnilistData : async () => {
      let url = `/api/anilist/${get().anilistid}`;
      let req = await fetch(url);
      let res = await req.json();
      set(() => ({anilistData : res}))
      

    }
  }));

  export const useSearchModal = create<useSearchModalProps>((set) => ({
    isOpen: false,
    id:"",
  
    openModal: (id) => {
      set(() => ({ isOpen: true,id:id }));
    },
  
    closeModal: () => {
      set(() => ({ isOpen: false }));
    },
  }));