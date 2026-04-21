// src/app/auth/signin/page.tsx
import type { Metadata } from 'next';
import { Suspense } from "react";
import SignInContent from "./signin-content";

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
};

export default function SignInPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SignInContent />
    </Suspense>
  );
}