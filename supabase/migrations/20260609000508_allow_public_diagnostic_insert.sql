GRANT INSERT ON TABLE public.diagnostic_submissions TO anon, authenticated;
REVOKE SELECT, UPDATE, DELETE ON TABLE public.diagnostic_submissions FROM anon, authenticated;

DROP POLICY IF EXISTS "Anyone can submit diagnostic requests" ON public.diagnostic_submissions;

CREATE POLICY "Anyone can submit diagnostic requests"
ON public.diagnostic_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 120
  AND length(trim(phone)) BETWEEN 6 AND 20
  AND phone ~ '^[+\d\s()-]+$'
  AND length(trim(role)) BETWEEN 1 AND 120
  AND length(trim(email)) BETWEEN 3 AND 160
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(trim(path)) BETWEEN 1 AND 120
  AND length(trim(terrain)) BETWEEN 1 AND 60
  AND cardinality(learn) <= 10
  AND cardinality(features) <= 10
  AND (duolingo IS NULL OR length(trim(duolingo)) <= 60)
  AND (price IS NULL OR length(trim(price)) <= 60)
  AND (comment IS NULL OR length(trim(comment)) <= 1000)
);
