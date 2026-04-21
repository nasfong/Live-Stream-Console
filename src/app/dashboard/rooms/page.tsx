import type { Metadata } from 'next';
import PageContainer from "@/components/features/layouts/page-container";

export const metadata: Metadata = {
  title: 'Rooms',
  description: 'Manage your live stream rooms',
};

export default function Page() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Rooms</h1>
        <p className="text-muted-foreground">Manage your live stream rooms</p>
      </div>
    </PageContainer>
  )
}
