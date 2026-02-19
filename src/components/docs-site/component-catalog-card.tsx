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
    <article className="overflow-hidden rounded-xl border border-(--usage-border) bg-white shadow-xs">
      <div className="flex min-h-[160px] items-center justify-center bg-(--usage-background) px-6 py-8">
        {preview}
      </div>
      <div className="p-6">
        <div className="mb-3 inline-flex items-center rounded-full bg-(--usage-background) px-3 py-1 text-xs font-medium text-(--body-text)">
        Component
        </div>
        <h2 className="mb-2 text-2xl font-semibold text-(--body-text)">{name}</h2>
        <p className="mb-6 text-base leading-relaxed text-(--body-text)">{description}</p>
        <div className="flex items-center gap-4 text-sm">
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
