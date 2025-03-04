"use server";

import { uploadImage } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

const { storePost, updatePostLikeStatus } = require("@/lib/posts");
const { redirect } = require("next/navigation");

export async function createPost(prevState, formData) {
  "use server";
  const data = Object.fromEntries(formData);
  const title = data.title;
  const content = data.content;
  const image = data.image;
  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }
  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }
  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }
  if (errors.length > 0) {
    return { errors };
  }
  let imageUrl = "";
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error("Image upload failed");
  }

  await storePost({
    imageUrl,
    title: data.title,
    content: data.content,
    userId: 1,
  });

  redirect("/feed");
}

export async function togglePostLikeStatus(postId) {
  updatePostLikeStatus(postId, 2);
  revalidatePath("/feed");
}
