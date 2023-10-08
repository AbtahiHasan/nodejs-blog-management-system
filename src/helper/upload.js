// external imports
const multer = require("multer");
const path = require("path");


function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
) {
    // File upload folder
    const UPLOADS_FOLDER = `${__dirname}/../../public/uploads/${subfolder_path}/`;

    // define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, file, cb) => {
            const name = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`

            cb(null, name);
        },
    });

    // preapre the final multer upload object
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: max_file_size,
        },
        fileFilter: (req, file, cb) => {
            if (allowed_file_types.includes(file.mimetype)) {
                cb(null, true);
            }
        },
    });

    return upload;
}

module.exports = uploader;