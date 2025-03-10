"use client";

import { Suspense } from "react";
import Destination from "../components/Destination";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Suspense fallback={<p>Loading...</p>}>
        <Destination />
      </Suspense>
    </div>
  );
}
