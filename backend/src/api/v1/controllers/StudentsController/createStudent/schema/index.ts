import z from 'zod';
import { patterns } from '@utils/patterns';

export const createStudentSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
  ra: z.string().regex(patterns.ra),
  cpf: z.string().regex(patterns.cpf),
});
