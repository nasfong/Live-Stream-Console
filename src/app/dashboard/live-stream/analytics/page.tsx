import type { Metadata } from 'next';
import PageContainer from "@/components/features/layouts/page-container";
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: 'Live Stream Analytics',
  description: 'View analytics and performance metrics for your live streams',
};

export default function LiveStreamAnalyticsPage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <Heading 
          title="Live Stream Analytics" 
          description="View analytics and performance metrics for your live streams" 
        />
        <div className="rounded-lg border p-8 text-center text-muted-foreground">
          <p>Analytics data coming soon</p>
        </div>
      </div>
    </PageContainer>
  );
}
