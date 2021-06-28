import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import {
  faArrowUp,
  faArrowDown,
  faBars,
  faChevronDown,
  faCodeBranch,
  faCog,
  faCompressArrowsAlt,
  faDownload,
  faEdit,
  faEquals,
  faExclamationCircle,
  faExpand,
  faHome,
  faLanguage,
  faMapMarkerAlt,
  faMinus,
  faMoneyBillWave,
  faPalette,
  faPencilAlt,
  faPlus,
  faPlusSquare,
  faSearch,
  faStar,
  faTimes,
  faUndoAlt,
  faUpload,
  faUserFriends,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCheckCircle,
  faEye,
  faFileAlt,
  faQuestionCircle,
  faSave,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export type FontAwesomeIconName =
  | "arrowDown"
  | "arrowUp"
  | "bars"
  | "chevronDown"
  | "codeBranch"
  | "cog"
  | "compress"
  | "download"
  | "edit"
  | "equals"
  | "error"
  | "expand"
  | "eye"
  | "file"
  | "github"
  | "home"
  | "language"
  | "mapMarker"
  | "minus"
  | "moneyBill"
  | "palette"
  | "pencil"
  | "plus"
  | "plusSquare"
  | "question"
  | "save"
  | "search"
  | "star"
  | "success"
  | "times"
  | "trash"
  | "twitter"
  | "undo"
  | "upload"
  | "userFriends"
  | "videoFile"
  | "youtube";

// do not add custom font awesome styles
fontAwesomeConfig.autoAddCss = false;

// do not use a custom svg class
fontAwesomeConfig.replacementClass = "";

const icons: Record<FontAwesomeIconName, IconDefinition> = {
  arrowDown: faArrowDown,
  arrowUp: faArrowUp,
  bars: faBars,
  chevronDown: faChevronDown,
  codeBranch: faCodeBranch,
  cog: faCog,
  compress: faCompressArrowsAlt,
  download: faDownload,
  edit: faEdit,
  equals: faEquals,
  error: faExclamationCircle,
  expand: faExpand,
  eye: faEye,
  file: faFileAlt,
  github: faGithub,
  home: faHome,
  language: faLanguage,
  mapMarker: faMapMarkerAlt,
  minus: faMinus,
  moneyBill: faMoneyBillWave,
  palette: faPalette,
  pencil: faPencilAlt,
  plus: faPlus,
  plusSquare: faPlusSquare,
  question: faQuestionCircle,
  save: faSave,
  search: faSearch,
  star: faStar,
  success: faCheckCircle,
  times: faTimes,
  trash: faTrashAlt,
  twitter: faTwitter,
  undo: faUndoAlt,
  upload: faUpload,
  userFriends: faUserFriends,
  videoFile: faFileVideo,
  youtube: faYoutube,
};

export default icons;
