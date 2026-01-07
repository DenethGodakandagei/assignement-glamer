import React from "react";

export const EmptyState: React.FC<{ message?: string }> = ({ message }) => (
  <div className="p-4 text-gray-500">{message || "No results found."}</div>
);
