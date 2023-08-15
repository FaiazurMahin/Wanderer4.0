import express from 'express'

import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingControllers.js';

const router=express.Router()

router.post('/', verifyUser, createBooking )
router.get('/:id', verifyUser, getBooking)
router.get('/', verifyAdmin, getAllBooking )


export default router;