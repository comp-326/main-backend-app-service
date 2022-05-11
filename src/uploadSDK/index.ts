/* eslint-disable camelcase */
import { v2 as cloudinary } from 'cloudinary';
import { cloudinaryConfig } from '@backend-service-config';

cloudinary.config({
	cloud_name: cloudinaryConfig.CLOUDINARY_NAME,
	api_key: cloudinaryConfig.CLOUDINARY_API_KEY,
	api_secret: cloudinaryConfig.CLOUDINARY_SECRET,
	secure: true
});

export default cloudinary;
