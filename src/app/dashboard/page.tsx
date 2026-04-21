import type { Metadata } from 'next';
import PageContainer from "@/components/features/layouts/page-container";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your dashboard',
};

export default function Page() {
  return (
    <PageContainer>
      Dashboard Page
    </PageContainer>
  )
}
