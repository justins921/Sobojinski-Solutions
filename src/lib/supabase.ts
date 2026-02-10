import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _supabase: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (_supabase) return _supabase

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
    )
  }

  _supabase = createClient(supabaseUrl, supabaseAnonKey)
  return _supabase
}

/*
  Supabase Setup Instructions:

  1. Create a Supabase project at https://supabase.com/dashboard
  2. Copy your Project URL and anon/public key into .env.local
  3. Create the contact_submissions table with this SQL:

  CREATE TABLE contact_submissions (
    id BIGSERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  -- Enable Row Level Security
  ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

  -- Allow inserts from anonymous users (form submissions)
  CREATE POLICY "Allow anonymous inserts" ON contact_submissions
    FOR INSERT WITH CHECK (true);

  4. For email notifications on new submissions, set up a Database Webhook
     in the Supabase Dashboard (Database > Webhooks) that triggers on INSERT
     to the contact_submissions table and calls your preferred email service.
*/
