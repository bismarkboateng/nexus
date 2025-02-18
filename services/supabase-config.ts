import { createClient } from "@supabase/supabase-js"
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_ANON_PUBLIC_KEY!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!
export const supabase = createClient(supabaseUrl, supabaseKey)