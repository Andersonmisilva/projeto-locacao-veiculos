import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

export default function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (err instanceof AppError) {
    console.log(`[ERROR] ${err.message}`);
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(`[ERROR] ${err.message}`);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
