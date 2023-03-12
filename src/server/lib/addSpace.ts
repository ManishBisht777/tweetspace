import supabase from "../supabase";

export async function addSpace(formData: any, session: any) {
  console.log(formData);
  const { data, error } = await supabase.from("spaces").insert([
    {
      title: formData.title,
      date: formData.date,
      from: formData.start,
      created_by: session.id,
      link: formData.link,
    },
  ]);
  if (data) {
    console.log(data, "success");
  } else console.log(error, "error some");
}
