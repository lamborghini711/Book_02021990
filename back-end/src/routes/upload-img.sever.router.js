const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

const storage = multer.diskStorage({
   destination: function(req, file, cb){ 
    cb(null,"./front-end/public/uploads/")},
   filename: function(req, file, cb){
      cb(null, "(" +  new Date().toISOString() + ")" + file.originalname);
   }
});

const upload = multer({
   storage: storage,
}).single("bookImage");
router.post("/api/upload", (req, res) => {
  upload(req, res, function(err){
    if(!err){
      return res.send(req.file.path).end()
    } {
      res.status(500).json(err)
    }
  })
})

module.exports = router