import express from 'express';
import { createOrUpdateUserProfile } from '../controllers/userProfileController.js';
import authMiddleware from '../middlewares/authMiddleware.js'; 

const router = express.Router();


router.post('/', authMiddleware, createOrUpdateUserProfile);

export default router;
