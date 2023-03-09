import supabase from "../supabase";

export async function downloadImage(path: any) {
  try {
    const { data, error } = await supabase.storage
      .from("images")
      .download(path);
    if (error) {
      throw error;
    }
    const url = URL.createObjectURL(data);
    return url;
  } catch (error: any) {
    console.log("Error downloading image: ", error.message);
  }
}

export async function uploadEventImage(event: any) {
  try {
    if (!event.target.files || event.target.files.length === 0) {
      throw new Error("You must select an image to upload.");
    }

    const file = event.target.files[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("images")
      .upload(filePath, file);

    if (uploadError) {
      console.log(uploadError);
    }
  } catch (error: any) {
    alert(error?.message);
  }
}
