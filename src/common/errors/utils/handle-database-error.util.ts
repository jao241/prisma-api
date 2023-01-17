import { PrismaErrorsCode } from '../enums/prismaErrorsCode';
import { DatabaseError } from '../types/DatabaseError';
import { PrismaClientError } from '../types/PrismaClientError';
import { UniqueConstraintError } from '../types/UniqueConstraintError';

export const handleDatabaseErrors = (error: PrismaClientError) => {
  switch (error.code) {
    case PrismaErrorsCode.UniqueConstraintFail:
      return new UniqueConstraintError(error);

    default:
      return new DatabaseError(error.message);
  }
};
