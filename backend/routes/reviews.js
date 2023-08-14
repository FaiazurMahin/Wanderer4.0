import express from 'express'
import { CreateReview } from '../controllers/reviewControllers.js';
import { verifyUser } from '../utils/verifyToken.js';

const router=express.Router()

router.post('/:tourId', verifyUser, CreateReview)

export default router;