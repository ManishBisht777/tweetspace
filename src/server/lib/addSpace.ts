import supabase from "../supabase";

export async function addSpace(formData: any, session: any) {
  console.log(formData);
  const { data, error } = await supabase.from("spaces").insert([
    {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      from: formData.start,
      to: formData.end,
      created_by: session.id,
      user: session.user,
    },
  ]);
  if (data) {
    console.log(data, "success");
  } else console.log(error, "error some");
}
