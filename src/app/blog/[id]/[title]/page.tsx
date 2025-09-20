import React from "react";

interface BlogPageProps {
  params: { id: string; title: string };
}

export default function BlogDetail({ params }: BlogPageProps) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{params.title}</h1>
      <p className="mt-2 text-gray-700">ID Artikel: {params.id}</p>
      <p className="mt-4">
        Ini adalah halaman detail untuk artikel <b>{params.title}</b> dengan ID{" "}
        {params.id}.
      </p>
    </div>
  );
}
