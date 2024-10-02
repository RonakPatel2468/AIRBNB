import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const createBooking = async (req: Request, res: Response) => {
  const { propertyId, startDate, endDate } = req.body;
  const userId = req.user!.userId;

  try {
    const booking = await prisma.booking.create({
      data: {
        startDate,
        endDate,
        userId,
        propertyId,
      },
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
};
