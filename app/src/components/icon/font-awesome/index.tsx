import { IconDefinition } from "@fortawesome/fontawesome-common-types";

import {
  faBars,
  faCog,
  faDownload,
  faEdit,
  faExclamationCircle,
  faHome,
  faMinus,
  faPalette,
  faPlus,
  faSearch,
  faTimes,
  faUndoAlt,
  faUpload
} from "@fortawesome/free-solid-svg-icons";

import {
  faCheckCircle,
  faQuestionCircle,
  faSave,
  faTrashAlt
} from "@fortawesome/free-regular-svg-icons";

const icons: { [key: string]: IconDefinition } = {
  bars: faBars,
  cog: faCog,
  download: faDownload,
  edit: faEdit,
  error: faExclamationCircle,
  home: faHome,
  minus: faMinus,
  palette: faPalette,
  plus: faPlus,
  question: faQuestionCircle,
  save: faSave,
  search: faSearch,
  success: faCheckCircle,
  times: faTimes,
  trash: faTrashAlt,
  undo: faUndoAlt,
  upload: faUpload
};

export default icons;
