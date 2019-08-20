// create-react-app: test setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "common/i18n";

configure({ adapter: new Adapter() });
