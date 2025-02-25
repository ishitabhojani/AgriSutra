// // lib/api.ts

// export interface Scheme {
//     id: string;
//     name: string;
//     description: string;
//     details: string;
//     benefits: string[];
//     eligibility: string;
//     youtube_link: string;
//     registration_link: string;
//     // Add additional fields if needed
//   }
  
//   export const fetchSchemes = async (): Promise<Scheme[]> => {
//     const res = await fetch("http://localhost:5000/api/schemes");
//     if (!res.ok) {
//       throw new Error("Failed to fetch schemes");
//     }
//     return res.json();
//   };
  
//   export const fetchSchemeById = async (id: string): Promise<Scheme> => {
//     const res = await fetch(`http://localhost:5000/api/schemes/${id}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch scheme");
//     }
//     return res.json();
//   };
  // lib/api.ts

export interface Scheme {
  id: string;
  name: string;
  details: string;
  benefits: string[];
  eligibility: string;
  youtube_link: string;
  registration_link: string;
}

export const fetchSchemes = async (): Promise<Scheme[]> => {
  const res = await fetch("http://localhost:3001/api/schemes", {
    // Next.js can handle server fetch with no-cors issues
    // but if you get CORS errors, ensure your backend has CORS enabled
  });
  if (!res.ok) {
    throw new Error("Failed to fetch schemes");
  }
  return res.json();
};

export const fetchSchemeById = async (id: string): Promise<Scheme> => {
  const res = await fetch(`http://localhost:3001/api/schemes/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch scheme");
  }
  return res.json();
};
