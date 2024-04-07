interface useEpisodesProps {
  isEpImgEnabled: boolean | any;
  enableEpImg: () => void;
  disableEpImg: () => void;
}

interface useAutoNextProps {
  isAutoNext: boolean | any;
  enableAutoNext: () => void;
  disableAutoNext: () => void;
}

interface useAutoSkipProps {
  isAutoSkip: boolean | any;
  enableAutoSkip: () => void;
  disableAutoSkip: () => void;
}

interface useSortProps {
  isSort: boolean | any;
  enableIsSort: () => void;
  disableIsSort: () => void;
}

interface useAutoPlayProps {
  isAutoPlay: boolean | any;
  enableAutoPlay: () => void;
  disableAutoPlay: () => void;
}

interface useContactProps {
  isContact: boolean | any;
  enableIsContact: () => void;
  disableIsContact: () => void;
}

interface useModalProps {
  isModal: boolean | any;
  id: string;
  enableIsModal: (id) => void;
  disableIsModal: () => void;
}

interface useDetailsModalProps {
  isOpen: boolean;
  id: string;
  anilistid:string;
  anilistData:any;
  openModal: (id,anilistid) => void;
  closeModal: () => void;
  clearId: () => void;
  getAnilistData : () => void
}

interface useSearchModalProps {
  isOpen: boolean;
  id: string;
  openModal: (id) => void;
  closeModal: () => void;
}

interface MsgProps {
  title: string;
  message: string;
}

interface SubtitleProps {
  file: string;
  label: string;
  kind: string;
}
