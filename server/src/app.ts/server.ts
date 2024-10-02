import express from 'express';
import authRoutes from '../routes/authRoutes';
import listingRoutes from '../routes/listingRoutes';
import bookingRoutes from '../routes/bookingRoutes';
import dotenv from 'dotenv';
import prisma from '../utils/prisma';

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/bookings', bookingRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
