import type { Metadata } from 'next';
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: 'Streaming Analytics',
  description: 'Monitor and analyze your streaming performance metrics',
};

export default function StreamingAnalyticsPage() {
  return (
    <div className="space-y-6">
      <Heading 
        title="Streaming Analytics" 
        description="Monitor and analyze your streaming performance metrics" 
      />
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        <p>Analytics data coming soon</p>
      </div>
    </div>
  );
}
