const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/api");
const PORT = 3000;

app.use(express.json());
app.use("/uploads", express.static("uploads/"));

mongoose
  .connect("mongodb://localhost:27017/Image-uploader")
  .then(() => console.log("mongoDB connected::"))
  .catch((err) => console.log(err));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
