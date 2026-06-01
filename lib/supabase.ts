import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Dummy client for build time when env vars aren't available
let supabase: any;

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn(
    "Supabase env vars not set. Using dummy client for build. Form will work at runtime."
  );
  supabase = {
    from: () => ({ insert: async () => ({}) }),
    auth: { getUser: async () => ({ data: { user: null } }) },
  };
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
}

export { supabase };
