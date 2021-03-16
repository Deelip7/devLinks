import express from 'express';
import { createLink, listLinks } from '../controllers/linkController.js';

const router = express.Router();

router.route('/').get(listLinks).post(createLink);

export default router;
