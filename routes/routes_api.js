var express = require("express");
var router = express.Router();
var api = require("../controller/api");
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now + ".jpg");
    },
  }),
}).any("user_file");


router.post("/insert",upload, api.insert);
router.get("/get", api.get);
router.get("/get/:id", api.get_id);
router.delete("/get/:id", api.delete);
router.patch("/update/:id", api.update);

module.exports = router;
