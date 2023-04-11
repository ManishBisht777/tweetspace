import supabase from "../supabase";

export const getMyPosts = async (userId: any) => {
  if (!userId) return;

  const { data, error } = await supabase
    .from("spaces")
    .select(`*, users(*)`)
    .order("date , from", { ascending: true })
    .eq("created_by", userId);

  if (error) console.log(error, "error from getMyposts");
  return data;
};

export const getAllSpaces = async (
  start: number,
  end: number,
  time: string
) => {
  const currentDate = new Date();
  const currentIsoDate = currentDate.toISOString().split("T")[0];

  let queryPromsie: any;

  if (time === "all") {
    queryPromsie = supabase
      .from("spaces")
      .select(`*, users(*)`)
      .order("date , from", { ascending: true })
      .range(start, end);
  } else if (time === "past") {
    queryPromsie = supabase
      .from("spaces")
      .select(`*, users(*)`)
      .lt("date", currentIsoDate)
      .order("date , from", { ascending: true })
      .range(start, end);
  } else if (time === "ongoing") {
    queryPromsie = supabase
      .from("spaces")
      .select(`*, users(*)`)
      .eq("date", currentIsoDate)
      .order("date , from", { ascending: true })
      .range(start, end);
  } else if (time === "future") {
    queryPromsie = supabase
      .from("spaces")
      .select(`*, users(*)`)
      .gt("date", currentIsoDate)
      .order("date , from", { ascending: true })
      .range(start, end);
  }

  const { data: spaces, error } = await queryPromsie;

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
    .order("date , from", { ascending: true })
    .ilike("title", `%${searchQuery}%`)
    .range(start, end);

  return spaces;
};
