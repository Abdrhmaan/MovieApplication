import express from "express";
import path from "path"
import multer from "multer";

const uploadrouter = express.Router()




const storage  = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"uploads/" )
    },
    filename: (req, file, cb) => {
        const extname  = path.extname(file.originalname)
        cb(null , `${file.fieldname}-${Date.now()}${extname}`)
    }
})




const fileFilter  =  (req, file, cb) => {
    const filetypes = /jpe?g|png|webp/;
    const mimetypes = /image\/jpe?g|image\/png||image\/webp/;
  
    const extname = path.extname(file.originalname);
    const mimetype = file.mimetype;

    if(filetypes.test(extname) && mimetypes.test(mimetype)) {
        return cb(null, true);
    } else {
        return cb(new Error("Please upload a valid image"));
    }
}

const upload   = multer({storage , fileFilter})
const uploadsingleimage   = upload.single("image")

uploadrouter.post("/uploads",  uploadsingleimage , (req, res) => {
    if (req.file) {
        res.status(200).send({
            message: "Image uploaded successfully",
            image: `/${req.file.path}`,
        });
    } else {
        res.status(400).send({ message: "No image file provided" });
    }
});

export default uploadrouter
