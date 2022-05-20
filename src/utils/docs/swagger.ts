import { BASE_DIR } from '@backend-service/config';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerAutogen = require('swagger-autogen')();

const doc = {
	info: {
		version: '', // by default: '1.0.0'
		title: '', // by default: 'REST API'
		description: '', // by default: ''
	},
	host: '', // by default: 'localhost:3000'
	basePath: '', // by default: '/'
	schemes: [], // by default: ['http']
	consumes: [], // by default: ['application/json']
	produces: [], // by default: ['application/json']
	tags: [
		// by default: empty Array
		{
			name: '', // Tag name
			description: '', // Tag description
		},
		// { ... }
	],
	securityDefinitions: {}, // by default: empty object (Swagger 2.0)
	definitions: {}, // by default: empty object
	components: {}, // by default: empty object (OpenAPI 3.x)
};

const outputFile = path.join(BASE_DIR, 'swagger-docs/api.json');
const endpointsFiles = [path.resolve(BASE_DIR, 'server.ts')];

/* NOTE: if you use the express Router, you must pass in the 
     'endpointsFiles' only the root file where the route starts,
     such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
