import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { groq } from "next-sanity";
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const recentProjectsQuery = groq`
  *[_type == "recentProject"] {
    _id,
    title,
    description,
    "image": image.asset->url,
    "tags":  tags[]->{
        "url": image.asset->url},
    gitUrl,
    previewUrl,
  }
`;

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-03-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getRecentProjects() {
  const query = `*[_type == "recentProject"]{
    _id,
    title,
    description,
    image,
    technologies[]->{
      _id,
      name,
      icon
    },
    githubUrl,
    deployedUrl
  }`

  const projects = await client.fetch(query)
  return projects
}

export async function getTechnologies() {
  const query = `*[_type == "technology"]{
    _id,
    name,
    icon
  }`

  const technologies = await client.fetch(query)
  return technologies
}