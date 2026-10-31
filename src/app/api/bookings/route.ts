import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations/booking";
import { supabaseAdmin } from "@/lib/supabase";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    let rawData;
    try {
      rawData = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON in request body",
        },
        { status: 400 }
      );
    }

    // 1. Validate payload with Zod
    const validatedData = bookingSchema.parse(rawData);

    // 2. Prepare drop-off and fallback values for luxury chauffeur service
    const dropoffValue = validatedData.dropoffLocation?.trim()
      ? validatedData.dropoffLocation.trim()
      : (validatedData.serviceType.toLowerCase().includes("hour")
          ? "Hourly Disposal / As Directed"
          : "As Directed");

    // 3. Insert into Supabase bookings table
    const { error: dbError } = await supabaseAdmin.from("bookings").insert({
      full_name: validatedData.fullName?.trim() || "Chauffeur Guest",
      email: validatedData.email?.trim() || `guest-${Date.now()}@chauffeur.booking`,
      phone: validatedData.phone,
      service_type: validatedData.serviceType,
      pickup_location: validatedData.pickupLocation,
      dropoff_location: dropoffValue,
      pickup_date: validatedData.pickupDate,
      passengers: validatedData.passengers,
      notes: validatedData.notes || null,
      status: "pending",
    });

    if (dbError) {
      console.error("Supabase booking insert error:", dbError.message);
      return NextResponse.json(
        {
          success: false,
          message: "Unable to process booking request. Please try again later.",
        },
        { status: 500 }
      );
    }

    // 4. Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Booking confirmed!",
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check the provided information.",
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    console.error("Unexpected server error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
