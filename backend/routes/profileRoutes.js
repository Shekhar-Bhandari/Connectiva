import express from 'express';
import { createProfile, getProfile } from '../controllers/profileController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createProfile);
router.get('/me', authMiddleware, getProfile); 
export default router;
