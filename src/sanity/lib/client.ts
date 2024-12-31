import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01", // Use the date of your latest schema
  useCdn: false, // `false` ensures fresh data
  token: process.env.SANITY_API_TOKEN, // Required for write operations
});

export default client;
