"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignInContent() {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
  
  useEffect(() => {
    if (!session?.accessToken) {
      signIn("keycloak", { callbackUrl });
    }

    if (session?.accessToken) {
      router.push(callbackUrl);
    }
  }, [session, callbackUrl, router]);

  if (!session) {
    return <p>Loading...</p>;
  }

  return <p>Redirecting to login...</p>;
}
