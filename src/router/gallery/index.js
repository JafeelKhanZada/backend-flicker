const router = require("express").Router();
const gallery = require("../../controller/gallery");
const Controller = new gallery.GalleryController();
router.get("/", Controller.getAll);
module.exports = router;
