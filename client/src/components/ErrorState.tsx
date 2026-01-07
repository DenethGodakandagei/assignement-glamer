import React from "react";

export const ErrorState: React.FC<{ message?: string; onRetry: () => void }> = ({
  message,
  onRetry,
}) => (
  <div className="p-4 text-red-600">
    <p>{message || "An error occurred."}</p>
    <button onClick={onRetry} className="underline mt-2">
      Retry
    </button>
  </div>
);
