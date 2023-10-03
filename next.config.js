/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://tomeleyakujcqfaovrqr.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbWVsZXlha3VqY3FmYW92cnFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMjMzMDgsImV4cCI6MTk4ODU5OTMwOH0.d4pv9u8o0zyCrCyVB0Qv1ZP-Qsn7B86ht63SG8r_HMA',
    REDIS_BEARER_TOKEN: 'AX8TACQgM2ZmNTUwOWEtM2I5Yy00ZWE0LWE2NWItMmNiNjFiYTFjYzI1YzYyN2EzNzkzZGU1NGM5NzllMzk0MmVlZWNlODUwMDk=',

  },
  
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
      reactStrictMode:false
}

module.exports = nextConfig
