import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: function (req, file, callback) {
        if (file.mimetype === 'image/jpeg') return callback(null, true);
        if (file.mimetype === 'image/png') return callback(null, true);
        return callback(null, true);
    }
});

export default upload;