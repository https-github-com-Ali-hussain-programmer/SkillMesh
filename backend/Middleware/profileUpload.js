const multer = require("multer");
const s3Multer = require("multer-s3");
const { S3Client } = require("@aws-sdk/client-s3");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const s3 = new S3Client({
  region: process.env.region,
  credentials: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
  },
});

const createStorage = (folderName) => {
  return s3Multer({
    s3,
    bucket: process.env.bucket,
    metadata: function (req, file, cb) {
      cb(null, {
        fileName: file.originalname,
        fileSize: file.size,
        fileType: file.mimetype,
      });
    },
    key: function (req, file, cb) {
      cb(
        null,
        `images/${folderName}/` + Date.now() + path.extname(file.originalname)
      );
    },
    contentType: function (req, file, cb) {
      cb(null, "image/jpeg");
    },
    contentDisposition: "inline",
  });
};

const uploadPics = (folderName) => {
  const upload = multer({ storage: createStorage(folderName) });

  return (req, res, next) => {
    upload.single("images")(req, res, function (err) {
      return next();
    });
  };
};


module.exports = uploadPics;
