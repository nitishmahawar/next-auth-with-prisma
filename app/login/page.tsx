"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col gap-4">
      <h2 className="text-2xl font-medium">Next Auth Login</h2>
      <Button
        variant="outline"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <FcGoogle size={20} className="mr-4" />
        Sign In with Google
      </Button>
    </div>
  );
};

export default LoginPage;
