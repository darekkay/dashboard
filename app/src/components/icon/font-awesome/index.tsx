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
  faPlus,
  faSearch,
  faStar,
  faTimes,
  faUndoAlt,
  faUpload,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCheckCircle,
  faQuestionCircle,
  faSave,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
  | "github"
  | "home"
  | "minus"
  | "palette"
  | "plus"
  | "question"
  | "save"
  | "search"
  | "star"
  | "success"
  | "times"
  | "trash"
  | "undo"
  | "upload"
  | "userFriends";

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
  github: faGithub,
  home: faHome,
  minus: faMinus,
  palette: faPalette,
  plus: faPlus,
  question: faQuestionCircle,
  save: faSave,
  search: faSearch,
  star: faStar,
  success: faCheckCircle,
  times: faTimes,
  trash: faTrashAlt,
  undo: faUndoAlt,
  upload: faUpload,
  userFriends: faUserFriends,
};

export default icons;
