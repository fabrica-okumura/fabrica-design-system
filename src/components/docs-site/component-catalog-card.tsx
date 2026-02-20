import type { ReactNode } from "react";

type ComponentCatalogCardProps = {
  name: string;
  description: string;
  storybookHref: string;
  preview: ReactNode;
};

export function ComponentCatalogCard({
  name,
  description,
  storybookHref,
  preview,
}: ComponentCatalogCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-(--usage-border) bg-white shadow-xs">
      <div className="flex min-h-[120px] items-center justify-center bg-(--usage-background) px-4 py-4">
        <div className="flex w-full max-w-[220px] items-center justify-center">
          {preview}
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 inline-flex items-center rounded-full bg-(--usage-background) px-2.5 py-0.5 text-[10px] font-medium text-(--body-text)">
          Component
        </div>
        <h2 className="mb-1 text-lg font-semibold text-(--body-text)">{name}</h2>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-(--body-text)">{description}</p>
        <div className="flex items-center gap-4 text-xs">
          <a
            href={storybookHref}
            rel="noreferrer"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            Storybook
          </a>
        </div>
      </div>
    </article>
  );
}
