"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const IndexPage = () => {
  const { data: session, status } = useSession();
  return (
    <div className="px-4 py-6 space-y-6">
      <h1 className="text-2xl font-semibold">Protected Page</h1>
      {session ? (
        <div className="flex items-center gap-x-2">
          <Image
            className="object-cover w-10 h-10 rounded-full"
            src={session.user?.image!}
            height={100}
            width={100}
            alt="image"
          />

          <div>
            <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              {session.user?.name}
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {session.user?.email}
            </p>
          </div>
        </div>
      ) : (
        <Loader2 size={20} className="animate-spin" />
      )}
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default IndexPage;
