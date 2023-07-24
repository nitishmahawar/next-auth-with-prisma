"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const IndexPage = () => {
  const { data: session, status } = useSession();
  return (
    <div className="px-4 py-6 space-y-6">
      <h1 className="text-2xl font-semibold">Protected Page</h1>
      {session ? (
        <div>
          <p>{session.user?.name}</p>
          <p>{session.user?.email}</p>
          <img src={session.user?.image!} alt="" />
        </div>
      ) : (
        <Loader2 size={20} className="animate-spin" />
      )}

      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default IndexPage;
