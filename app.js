// app.js
const { createClient } = supabase;

const supabaseUrl = 'https://qglmvceyggcldopqgqex.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnbG12Y2V5Z2djbGRvcHFncWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwODkyODcsImV4cCI6MjAzNzY2NTI4N30.RFhcFGNh0X6AmR-cgZKPjLXC3uzh6rn72XFJs4nbUp0';
const supabase = createClient(supabaseUrl, supabaseKey);
