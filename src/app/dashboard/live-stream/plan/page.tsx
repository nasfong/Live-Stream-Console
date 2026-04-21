import type { Metadata } from 'next';
import PageContainer from "@/components/features/layouts/page-container";

export const metadata: Metadata = {
  title: 'Plan',
  description: 'Manage your live stream plan',
};

export default function Page() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Plan</h1>
        <p className="text-muted-foreground">Manage your live stream plan</p>
      </div>
    </PageContainer>
  )
}
