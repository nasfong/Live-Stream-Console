import type { Metadata } from 'next';
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: 'Live Stream Plans',
  description: 'Choose the perfect plan for your live streaming needs',
};

export default function LiveStreamPlanPage() {
  return (
    <div className="space-y-6">
      <Heading 
        title="Live Stream Plans" 
        description="Choose the perfect plan for your live streaming needs" 
      />
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        <p>Plans coming soon</p>
      </div>
    </div>
  );
}
