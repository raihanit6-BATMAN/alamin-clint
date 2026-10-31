import { z } from "zod";

export const bookingSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(8, "Phone number must be at least 8 digits"),
  serviceType: z
    .string()
    .min(1, "Please select a vehicle service"),
  pickupLocation: z
    .string()
    .trim()
    .min(2, "Pickup location is required"),
  pickupDate: z
    .string()
    .min(1, "Pickup date and time are required"),
  dropoffLocation: z
    .string()
    .trim()
    .optional(),
  passengers: z.coerce
    .number()
    .int()
    .positive()
    .default(1),
  notes: z
    .string()
    .optional(),
  fullName: z
    .string()
    .trim()
    .optional(),
  email: z
    .string()
    .trim()
    .optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;
