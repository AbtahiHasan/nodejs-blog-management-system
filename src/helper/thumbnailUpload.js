const uploader = require("./upload");


const thumbnailUpload = () => {
    const uploadLogo = uploader(
        "tambnails",
        ["image/jpeg", "image/jpg", "image/png"],
        1000000,
    )
    return uploadLogo
};

module.exports = thumbnailUpload;