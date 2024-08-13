import { v2 as cloudinary } from "cloudinary";
import path from "path";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

type uploadThumbnailArgs = {
  imagePath: string;
  folderName: "thumbnails/trendings" | "thumbnails/regular";
};

export async function uploadThumbnail({
  folderName,
  imagePath,
}: uploadThumbnailArgs) {
  const absolutePath = getImageAbsolutePath(imagePath);

  const customFileName = imagePath
    .replace(/^\/?(public\/)?/, "")
    .replace(/^\/?(thumbnails\/)?/, "")
    .replace(/\/(regular|trending)\//, "_")
    .replace(/\.[^/.]+$/, "")
    .replace(/\//g, "_");

  try {
    const result = await cloudinary.uploader.upload(absolutePath, {
      folder: folderName,
      public_id: customFileName,
      use_filename: false,
      unique_filename: true,
    });

    return result.public_id;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
}

// =================

export async function deleteFile(publicId: string) {
  try {
    await cloudinary.uploader
      .destroy(publicId, {
        resource_type: "image",
        type: "upload",
        invalidate: true,
      })
      .then((result) => {
        console.log(result);
      });
  } catch (error) {
    console.log(error);
    console.log("Error white deleting the file with the public id:", publicId);
  }
}

// utils

function getImageAbsolutePath(imagePath: string) {
  return path.join(process.cwd(), imagePath);
}

export function generateImageUrlByPublicId(publicId: string) {
  return cloudinary.url(publicId);
}

// =================

type uploadUserAvatarArgs = {
  userId: string;
  imagePath: string;
};

export async function uploadProfilePicture({
  userId,
  imagePath,
}: uploadUserAvatarArgs) {
  const absolutePath = getImageAbsolutePath(imagePath);

  try {
    const result = await cloudinary.uploader.upload(absolutePath, {
      folder: "user-avatars",
      public_id: userId,
      overwrite: true,
      invalidate: true,
    });

    return result.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
}
