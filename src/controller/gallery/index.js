const { FlickerHelper } = require("../../config/flicker");

class GalleryController extends FlickerHelper {
  constructor() {
    super();
    this.getAll = this.getAll.bind(this);
  }
  async getAll(req, res) {
    try {
      const query = req?.query;
      const take = query?.take || 10;
      const skip = query?.skip || 0;
      const name = query?.name || "";
      const request = await this.flicker.photos.search({
        text: name,
      });
      const {
        body: {
          photos: { photo },
        },
      } = request;
      const result = photo?.map(
        (v) =>
          `https://farm${v?.farm}.staticflickr.com/${v?.server}/${v?.id}_${v?.secret}.jpg`
      );
      return res.status(200).json({
        result,
        message: "Gallery Fetched!",
      });
    } catch (e) {
      console.log("e", e);
      return res.status(400).json({
        result: null,
        message: "Something Went Wrong!",
      });
    }
  }
}
module.exports = { GalleryController };
