
"use server";

export async function submitForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  // Mock database write
  console.log("Saving data to database...");
  console.log({ name, email });

  return { success: true };
}
