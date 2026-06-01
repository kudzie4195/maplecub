-- Run this in Supabase → SQL Editor for your MapleCub project.
-- Creates the signups table, RLS policy that lets the anon key INSERT only,
-- and constraints to keep data clean.

create extension if not exists "pgcrypto";

create table if not exists public.signups (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 1 and 120),
  email       text not null,
  province    text not null check (province in (
                'AB','BC','MB','NB','NL','NS','NT','NU','ON','PE','QC','SK','YT'
              )),
  source      text,
  referrer    text,
  created_at  timestamptz not null default now()
);

-- Unique on lowercased email so duplicate signups don't pile up
create unique index if not exists signups_email_key
  on public.signups (lower(email));

-- Enable RLS and allow only inserts from anon/authenticated clients.
alter table public.signups enable row level security;

drop policy if exists "Allow public inserts to signups" on public.signups;
create policy "Allow public inserts to signups"
  on public.signups
  for insert
  to anon, authenticated
  with check (true);

-- DO NOT add a SELECT policy. The anon key should never be able to
-- read the list back. You'll view signups from the Supabase dashboard
-- or via the service-role key on the backend.
