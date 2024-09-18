// utils/errorUtils.ts
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError, } from '@reduxjs/toolkit/query';

export const getErrorData = (error: FetchBaseQueryError | SerializedError): { message?: string } | null => {
  if ('data' in error) {
    // Return a consistent error structure
    return error.data;
  }
  return null;
};