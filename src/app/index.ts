import express from 'express';
import setup from '@backend-service-setup';

const app = express();
setup({ app });

export default app;
