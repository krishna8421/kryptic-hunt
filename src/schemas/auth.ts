import validator from "validator";
import z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(1),
    personalEmail: z
      .string({
        required_error: "Personal Email is required",
      })
      .email("Please enter a valid email.")
      .min(1, "Email is required"),
    kiitEmail: z
      .string({
        required_error: "Kiit Email is required",
      })
      .email("Please enter a valid KIIT email")
      .min(1)
      .refine((data) => data.endsWith("@kiit.ac.in"), {
        message: "Must be a kiit email",
      }),
    phoneNumber: z
      .string({
        required_error: "Phone Number is required",
      })
      .min(1)
      .refine(validator.isMobilePhone, {
        message: "Please enter a valid phone number",
      }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(1)
      .min(8, "Password must have more than 8 characters"),
    confirmPassword: z.string({
      required_error: "Confirm Password is required",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Please enter a valid email.")
    .refine((e) => e.endsWith("@kiit.ac.in"), {
      message: "Email must be a kiit email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required"),
});
