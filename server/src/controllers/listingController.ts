import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const createListing = async (req: Request, res: Response) => {
  const { title, description, price, location } = req.body;

  try {
    const listing = await prisma.property.create({
      data: { title, description, price, location },
    });

    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create listing' });
  }
};
