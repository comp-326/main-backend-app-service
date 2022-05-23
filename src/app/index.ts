import express from 'express';
import setup from '@exam-cell-setup';

const app = express();
setup({ app });

export default app;
