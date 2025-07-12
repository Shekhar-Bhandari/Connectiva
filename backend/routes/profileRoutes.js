import express from 'express';
import { createProfile, getProfile } from '../controllers/profileController.js';
const router = express.Router();

router.post('/create', createProfile);
router.get('/:userId', getProfile);

export default router;
