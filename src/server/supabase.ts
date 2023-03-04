import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY!;

const supabase: SupabaseClient<any, any> = createClient(
  supabaseURL,
  supabaseKey
);

export default supabase;
