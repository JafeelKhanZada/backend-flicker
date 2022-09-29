const Flickr = require("flickr-sdk");
class FlickerHelper {
  constructor() {
    this.flicker = new Flickr(
      process.env.FLICKER || "4101e10c0ba2e44bc1431f18b12d14fe"
    );
  }
}

module.exports = { FlickerHelper };
