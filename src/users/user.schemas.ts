import { z } from 'zod';

export const updateProfileInputSchema = z.object({
  fullName: z.string().min(2).max(100).optional(),
  phone: z.string().optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileInputSchema>;
