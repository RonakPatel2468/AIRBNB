import express from 'express';
import { createBooking } from '../controllers/bookingController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// Route to create a booking (requires authentication)
router.post('/', authMiddleware, createBooking);

export default router;

