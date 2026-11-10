import { Container } from "@/components/ui";

// Rolecast's pages (the App Store links to them): one column of prose, like a blog post.
// No fade-in: these have to be readable even if the scripts never run.
export default function RolecastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="min-h-screen pb-20 pt-32 md:pb-32 md:pt-40">
      <Container size="sm">{children}</Container>
    </article>
  );
}
