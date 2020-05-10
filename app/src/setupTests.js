// create-react-app: test setup file

// custom jest matchers for testing-library
import "@testing-library/jest-dom/extend-expect";

import "common/i18n";

jest.useFakeTimers();

/*
 * Mock unimplemented JSDOM functions
 * https://github.com/jsdom/jsdom/issues/2751
 * https://github.com/jsdom/jsdom/issues/1435
 * https://github.com/jsdom/jsdom/issues/1695
 */
Document.prototype.elementFromPoint = jest.fn();

HTMLCanvasElement.prototype.getContext = () => null;
