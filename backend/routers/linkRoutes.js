import express from 'express';
import { createLink } from '../controllers/linkController.js';

const router = express.Router();

router.route('/').post(createLink);

export default router;
