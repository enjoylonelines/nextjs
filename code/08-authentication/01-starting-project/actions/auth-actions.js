"use server";

import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const errors = {};
  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }
  if (password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  const hashedPassword = hashUserPassword(password);
  try {
    createUser(email, hashedPassword);
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "already exists",
        },
      };
    }
  }
  redirect("/training");
}
