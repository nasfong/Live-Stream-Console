import type { Metadata } from 'next';
import PageContainer from "@/components/features/layouts/page-container";

export const metadata: Metadata = {
  title: 'Streaming List',
  description: 'Manage your live stream list',
};

export default function Page() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Streaming List</h1>
        <p className="text-muted-foreground">Manage your live stream list</p>
      </div>
    </PageContainer>
  )
}
