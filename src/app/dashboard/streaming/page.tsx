import type { Metadata } from 'next';
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: 'Streaming',
  description: 'Manage your streaming sessions',
};

export default function StreamingPage() {
  return (
    <div className="space-y-6">
      <Heading 
        title="Streaming" 
        description="Manage your streaming sessions and configurations" 
      />
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        <p>Streaming content coming soon</p>
      </div>
    </div>
  );
}
