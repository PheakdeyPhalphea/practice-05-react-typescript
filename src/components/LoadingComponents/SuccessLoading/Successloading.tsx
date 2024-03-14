"use client";

import { Spinner } from "flowbite-react";

export default function SuccessLoadingComponent() {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="text-center">
        <Spinner color="success" aria-label="Success spinner example" />
      </div>
    </div>
  );
}
