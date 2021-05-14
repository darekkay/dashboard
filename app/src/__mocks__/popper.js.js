/*
 * Popper.js mock
 * Based on https://github.com/popperjs/popper-core/issues/478#issuecomment-341506071
 */

export default class Popper {
  constructor() {
    // eslint-disable-next-line no-constructor-return
    return {
      destroy: () => {},
      scheduleUpdate: () => {},
    };
  }
}
