const uploader = require("./upload");


const logoUpload = () => {
    const uploadLogo = uploader(
        "logo",
        ["image/jpeg", "image/jpg", "image/png"],
        1000000,
    )
    return uploadLogo
};

module.exports = logoUpload;