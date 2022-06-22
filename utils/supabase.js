import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
	'https://nlogvyfzemqkorycnniv.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTU4NDY0NCwiZXhwIjoxOTU3MTYwNjQ0fQ.NsmXdIdfBFAwzNgbNyYZg5ScNA0u_8FSzcVqBHAWaHE',
);

export default supabase;
