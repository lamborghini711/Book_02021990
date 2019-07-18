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
  try{
    upload(req, res, function(err){
      if(req.file){
        return res.send(req.file.path).end()
      } {
        res.status(500).send('Request body is missing')
      }
    })
  } catch(e) {
    console.log(e)
  }
})

module.exports = router