CREATE TABLE public.diagnostic_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT NOT NULL,
  path TEXT NOT NULL,
  terrain TEXT NOT NULL,
  learn TEXT[] NOT NULL DEFAULT '{}',
  features TEXT[] NOT NULL DEFAULT '{}',
  duolingo TEXT,
  price TEXT,
  comment TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.diagnostic_submissions TO service_role;

ALTER TABLE public.diagnostic_submissions ENABLE ROW LEVEL SECURITY;

-- No policies: only service_role (server) can access. Inserts happen via a server function using supabaseAdmin.