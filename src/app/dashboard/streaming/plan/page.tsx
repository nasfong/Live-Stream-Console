import type { Metadata } from 'next';
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: 'Streaming Plans',
  description: 'Upgrade your streaming capabilities with our plans',
};

export default function StreamingPlanPage() {
  return (
    <div className="space-y-6">
      <Heading 
        title="Streaming Plans" 
        description="Upgrade your streaming capabilities with our plans" 
      />
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        <p>Plans coming soon</p>
      </div>
    </div>
  );
}
