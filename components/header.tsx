"use client";

import Image from "next/image";

import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export function Header() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <></>;
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">

        <div className="ml-auto flex items-center space-x-4"></div>
        <div className=""> <UserButton /> </div>
      </div>
    </div>
  );
}
