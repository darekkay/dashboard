import { IconDefinition } from "@fortawesome/fontawesome-common-types";

import {
  faBars,
  faCog,
  faDownload,
  faEdit,
  faHome,
  faMinus,
  faPalette,
  faPlus,
  faSearch,
  faTimes,
  faUndoAlt
} from "@fortawesome/free-solid-svg-icons";

import {
  faQuestionCircle,
  faSave,
  faTrashAlt
} from "@fortawesome/free-regular-svg-icons";

const icons: { [key: string]: IconDefinition } = {
  bars: faBars,
  cog: faCog,
  download: faDownload,
  edit: faEdit,
  home: faHome,
  minus: faMinus,
  palette: faPalette,
  plus: faPlus,
  question: faQuestionCircle,
  save: faSave,
  search: faSearch,
  times: faTimes,
  trash: faTrashAlt,
  undo: faUndoAlt
};

export default icons;
