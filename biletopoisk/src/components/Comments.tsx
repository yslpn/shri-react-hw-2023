"use client";

import React from "react";
import { Comment } from "@/components/Comment";
import { useQuery } from "@tanstack/react-query";
import { getCommentsForMovie } from "@/lib/api";

function Comments({ filmId }: { filmId: string }) {
  const comments = useQuery([filmId, "comments"], getCommentsForMovie);

  return (
    <div className="flex flex-col gap-6">
      {comments.isSuccess ? (
        comments.data?.map(({ id, name, text, rating }) => {
          return <Comment key={id} name={name} text={text} rating={rating} />;
        })
      ) : (
        <div className="flex flex-col p-6 bg-white rounded-lg">
          <div className="text-3xl">Загрузка комментариев...</div>
        </div>
      )}
    </div>
  );
}

export default Comments;
