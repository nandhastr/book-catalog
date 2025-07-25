import multer from "multer";
import path from "path";

const dir = "assets/img";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + path.extname(file.originalname);
        cb(null, "image-" + fileName);
    },
});

const upload = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024,
    },

    fileFilter: (req, file, cb) => {
        const allowedFile = ["image/jpeg", "image/png", "image/jpg"];

        if (allowedFile.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("hanya format jpg, jpeg, dan png yang diizinkan"));
        }
    },
});

export default upload;
