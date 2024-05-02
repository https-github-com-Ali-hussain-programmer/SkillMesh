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
        `documents/${folderName}/` +
          Date.now() +
          path.extname(file.originalname)
      );
    },
    contentType: s3Multer.AUTO_CONTENT_TYPE,
  });
};

const documentUpload = (folderName) => {
  const upload = multer({ storage: createStorage(folderName) });

  return (req, res, next) => {
    upload.single("file")(req, res, function (err) {
      return next();
    });
  };
};

module.exports = documentUpload;
