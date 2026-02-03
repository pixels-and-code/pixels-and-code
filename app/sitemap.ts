import { MetadataRoute } from "next";
import { getAllPosts, getAllCaseStudies } from "@/lib/content";

const baseUrl = "https://pixels-and-code.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const caseStudies = getAllCaseStudies();

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    priority: 0.6 as const,
  }));

  const workUrls = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: new Date(study.frontmatter.date),
    priority: 0.7 as const,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
    ...workUrls,
    ...blogUrls,
  ];
}
