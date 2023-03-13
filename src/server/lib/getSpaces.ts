import supabase from "../supabase";

export const getMyPosts = async (userId: any) => {
  if (!userId) return;

  const { data, error } = await supabase
    .from("spaces")
    .select(`*, users(*)`)
    .eq("created_by", userId);

  if (error) console.log(error, "error from getMyposts");
  return data;
};

export const getAllSpaces = async (start: number, end: number) => {
  const { data: spaces, error } = await supabase
    .from("spaces")
    .select(`*, users(*)`)
    .range(start, end);

  return spaces;
};

export const getSpacesByQuery = async (
  start: number,
  end: number,
  searchQuery: string
) => {
  const { data: spaces, error } = await supabase
    .from("spaces")
    .select(`*, users(*)`)
    .ilike("title", `%${searchQuery}%`)
    .range(start, end);

  return spaces;
};
