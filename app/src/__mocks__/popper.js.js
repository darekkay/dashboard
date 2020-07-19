import PopperJs from "popper.js";

/*
 * Popper.js mock
 * Based on https://github.com/popperjs/popper-core/issues/478#issuecomment-341506071
 */
export default class Popper {
  static placements = PopperJs.placements;

  constructor() {
    return {
      destroy: () => {},
      scheduleUpdate: () => {},
    };
  }
}
