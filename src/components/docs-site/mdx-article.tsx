import * as React from "react";

type MdxArticleProps = {
  children: React.ReactNode;
};

export function MdxArticle({ children }: MdxArticleProps) {
  return <article className="prose max-w-none p-6">{children}</article>;
}
