import React from "react";
import { useParams } from "react-router-dom";

export default function NavigateLoading() {
  const { categoryId } = useParams();
  return (
    <main className="main">
      <span className="loader"></span>
    </main>
  );
}
