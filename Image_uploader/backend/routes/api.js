const {
  imgUploadController,
  showImgController,
} = require("../controllers/uploadController");
const upload = require("../middleware/multer");

const router = require("express").Router();

router.post("/upload-image", upload.single("Image"), imgUploadController);
router.get("/show-image", showImgController);

module.exports = router;
