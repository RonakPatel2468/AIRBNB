import express from 'express';
import { createListing } from '../controllers/listingController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// Route to create a new listing (requires authentication)
router.post('/', authMiddleware, createListing);

export default router;
