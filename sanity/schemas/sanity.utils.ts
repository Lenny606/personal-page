import { createClient, groq } from "next-sanity"


export async function getProjects() {
  const client = createClient({
    projectId: "3xv7gn3a",
    dataset: "production",  
    apiVersion: "2023-03-04"
  });

 return client.fetch(
    groq`*[_type="project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  )

}
