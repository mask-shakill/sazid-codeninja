import Link from "next/link";
import React from "react";

const Articles = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl border-b-2 ">All Articles</h1>

      <div className="mt-6">
        <Link
          href={"/dashboard/articles/add-article"}
          className="bg-blue-500 px-6 py-1 rounded"
        >
          Add Articles
        </Link>
      </div>
    </div>
  );
};

export default Articles;
