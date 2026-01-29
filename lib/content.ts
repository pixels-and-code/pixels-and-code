import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  published?: boolean;
}

export interface CaseStudyFrontmatter {
  title: string;
  company: string;
  date: string;
  excerpt: string;
  tags: string[];
  accent: string;
  published?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: string;
}

export interface CaseStudy {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: string;
  readingTime: string;
}

function getContentFromDirectory<T>(
  directory: string
): { slug: string; frontmatter: T; content: string; readingTime: string }[] {
  const fullPath = path.join(contentDirectory, directory);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  return mdxFiles
    .map((file) => {
      const filePath = path.join(fullPath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.mdx$/, "");
      const stats = readingTime(content);

      return {
        slug,
        frontmatter: data as T,
        content,
        readingTime: stats.text,
      };
    })
    .filter((item) => {
      const frontmatter = item.frontmatter as { published?: boolean };
      return frontmatter.published !== false;
    })
    .sort((a, b) => {
      const dateA = new Date((a.frontmatter as { date: string }).date);
      const dateB = new Date((b.frontmatter as { date: string }).date);
      return dateB.getTime() - dateA.getTime();
    });
}

function getContentBySlug<T>(
  directory: string,
  slug: string
): { slug: string; frontmatter: T; content: string; readingTime: string } | null {
  const fullPath = path.join(contentDirectory, directory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: data as T,
    content,
    readingTime: stats.text,
  };
}

export function getAllPosts(): Post[] {
  return getContentFromDirectory<PostFrontmatter>("blog");
}

export function getPostBySlug(slug: string): Post | null {
  return getContentBySlug<PostFrontmatter>("blog", slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return getContentFromDirectory<CaseStudyFrontmatter>("work");
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  return getContentBySlug<CaseStudyFrontmatter>("work", slug);
}

export async function compileMDXContent(source: string) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
    },
  });
  return content;
}
