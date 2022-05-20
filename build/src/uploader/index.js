"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoUpload = exports.imageUpload = exports.audioUpload = void 0;
const config_1 = require("../config");
const fileSystem_1 = require("../utils/fileSystem");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const videoStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path_1.default.join(config_1.BASE_DIR, 'public/uploads/videos');
        (0, fileSystem_1.createDirectory)(uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const fileName = `video_file_upload_${new Date().getTime()}${path_1.default.extname(file.originalname)}`;
        cb(null, fileName);
    }
});
const videoFileFilters = (req, file, cb) => {
    const mime = file.mimetype;
    if (mime === 'video/mp4' ||
        mime === 'application/x-mpegURL' ||
        mime === 'video/MP2T' ||
        mime === 'video/3gpp' ||
        mime === 'video/x-fvl' ||
        mime === 'video/quicktime' ||
        mime === 'video/x-ms-wmv' ||
        mime === 'video/x-matroska')
        cb(null, true);
    cb(null, false);
};
const audioStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path_1.default.join(config_1.BASE_DIR, 'public/uploads/audio');
        (0, fileSystem_1.createDirectory)(uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const fileName = `audio_file_upload_${new Date().getTime()}${path_1.default.extname(file.originalname)}`;
        cb(null, fileName);
    }
});
const audioFileFilters = (req, file, cb) => {
    const mime = file.mimetype;
    if (mime === 'auido/L24' ||
        mime === 'audio/mid' ||
        mime === 'audio/mpeg' ||
        mime === 'audio/mp4' ||
        mime === 'audio/x-mpegurl' ||
        mime === 'audio/ogg' ||
        mime === 'audio/vnd.wav' ||
        mime === 'audio/x-aiff' ||
        mime === 'audio/basic' ||
        mime === 'audio/x-matroska')
        cb(null, true);
    cb(null, false);
};
const imageStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path_1.default.join(config_1.BASE_DIR, 'public/uploads/images');
        (0, fileSystem_1.createDirectory)(uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const fileName = `image_file_upload_${new Date().getTime()}${path_1.default.extname(file.originalname)}`;
        cb(null, fileName);
    }
});
const imageFilters = (req, file, cb) => {
    const mime = file.mimetype;
    if (mime === 'image/png' ||
        mime === 'image/jpg' ||
        mime === 'image/jpeg' ||
        mime === 'image/webp')
        cb(null, true);
    cb(null, false);
};
const imageUpload = (0, multer_1.default)({
    storage: imageStorage,
    fileFilter: imageFilters,
    limits: { fileSize: 1024 * 1024 * 3 }
});
exports.imageUpload = imageUpload;
const videoUpload = (0, multer_1.default)({
    storage: videoStorage,
    fileFilter: videoFileFilters,
    limits: { fileSize: 1024 * 1024 * 20 }
});
exports.videoUpload = videoUpload;
const audioUpload = (0, multer_1.default)({
    storage: audioStorage,
    fileFilter: audioFileFilters,
    limits: { fileSize: 1024 * 1024 * 10 }
});
exports.audioUpload = audioUpload;
exports.default = Object.freeze({ audioUpload, imageUpload, videoUpload });

//# sourceMappingURL=index.js.map
