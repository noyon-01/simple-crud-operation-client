import { revalidatePath } from "next/cache";

export const addNewUser = async (formData) => {
  "use server";

  const newUser = Object.fromEntries(formData.entries());
  const res = await fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const data = await res.json();
  console.log("client:", data);

  // Note: Revalided path - insertedId
  if (data.insertedId) {
    revalidatePath("/user");
  }
  return data;
};

export const deleteUserById = async (userId) => {
  "use server";

  const res = await fetch(`http://localhost:8000/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();

  // Note: Revalided path - deletedCount
  if (data.deletedCount > 0) {
    revalidatePath("/users");
  }
  return data;
};
