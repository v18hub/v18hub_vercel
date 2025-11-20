// // lib/fetchCohorts.ts
// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function getUpcomingCohorts() {
//   const res = await fetch(`${API_URL}/cohorts/upcoming`, {
//     next: { revalidate: 300 } // 5 min cache
//   });
//   const data = await res.json();
//   return data.data; // Only basic fields
// }

// export async function getCohortById(id: string) {
//   const res = await fetch(`${API_URL}/cohorts/${id}`, {
//     next: { revalidate: 3600 } // 1 hour cache
//   });
//   if (!res.ok) return null;
//   const data = await res.json();
//   return data.data;
// }