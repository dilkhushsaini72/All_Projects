const imgModel = require("../models/imgModel");

// Upload controller
const imgUploadController = async (req, res) => {
  try {
    const { Title } = req.body;
    const Image = req.file.filename;

    const result = new imgModel({ Title, Image });
    await result.save();
    res.status(201).send({ message: "Image uploaded successfully.." });
  } catch (error) {
    res.status(500).send({ message: "server issue" });
  }
};

// Show uploaded image controller

const showImgController = async (req, res) => {
  try {
    const Data = await imgModel.find();
    res.status(200).send({ data: Data });
  } catch (error) {
    res.status(500).send({ message: "server issue" });
  }
};

module.exports = {
  imgUploadController,
  showImgController,
};
