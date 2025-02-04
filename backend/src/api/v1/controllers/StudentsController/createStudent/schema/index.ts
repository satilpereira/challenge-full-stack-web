import z from 'zod';
import { patterns } from '@utils/patterns';

export const createStudentSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Nome inválido. O campo deve conter ao menos 1 caractere.',
    })
    .max(255, {
      message: 'Nome inválido. O campo deve conter no máximo 255 caracteres.',
    }),
  email: z.string().email({
    message: 'Email inválido.',
  }),
  ra: z.string().regex(patterns.ra, {
    message: 'Formato de RA inválido. O RA deve conter 6 dígitos.',
  }),
  cpf: z.string().regex(patterns.cpf, {
    message: 'Formato de CPF inválido. O formato deve ser XXX.XXX.XXX-XX.',
  }),
});
