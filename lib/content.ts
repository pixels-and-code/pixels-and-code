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
  linked?: boolean;
  heroImage?: string;
}

export interface AppFrontmatter {
  name: string;
  tagline: string;
  date: string;
  excerpt: string;
  icon: string;
  /** A phone screenshot for the list of apps */
  cover: string;
  /** Two phone screenshots for the top of the case study */
  hero: string[];
  /** Above the name on the case study, e.g. "iOS app" (the default) */
  label?: string;
  platforms: string[];
  tags: string[];
  /** Shown beside any store links until every store has one, e.g. "In App Review" */
  status?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  supportUrl?: string;
  privacyUrl?: string;
  published?: boolean;
}

export interface App {
  slug: string;
  frontmatter: AppFrontmatter;
  content: string;
  readingTime: string;
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

export function getAllApps(): App[] {
  return getContentFromDirectory<AppFrontmatter>("apps");
}

export function getAppBySlug(slug: string): App | null {
  return getContentBySlug<AppFrontmatter>("apps", slug);
}

export async function compileMDXContent(
  source: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: Record<string, React.ComponentType<any>> = mdxComponents
) {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: false,
    },
  });
  return content;
}
