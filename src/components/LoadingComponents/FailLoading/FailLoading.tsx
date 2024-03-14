"use client";

import { Spinner } from "flowbite-react";

export default function FailLoadingComponent() {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="text-center">
        <Spinner color="failure" aria-label="Failure spinner example" />
      </div>
    </div>
  );
}
