import type { Metadata } from 'next';
import PageContainer from "@/components/features/layouts/page-container";

export const metadata: Metadata = {
  title: 'Analytics',
  description: 'View analytics and performance metrics for your live streams',
};

export default function Page() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">View analytics and performance metrics for your live streams</p>
      </div>
    </PageContainer>
  )
}
