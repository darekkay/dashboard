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
  faMinus,
  faPalette,
  faPencilAlt,
  faPlus,
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
  | "minus"
  | "palette"
  | "pencil"
  | "plus"
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
  minus: faMinus,
  palette: faPalette,
  pencil: faPencilAlt,
  plus: faPlus,
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
