"use client";

import { ComponentCatalogCard } from "@/components/docs-site/component-catalog-card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function ComponentsPage() {
  const componentItems = [
    {
      name: "Button",
      description: "基本的なアクション実行用コンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-button--docs",
      preview: (
        <div className="flex items-center justify-center">
          <Button>保存</Button>
        </div>
      ),
    },
    {
      name: "Switch",
      description: "オン/オフ状態を切り替えるトグルコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-switch--docs",
      preview: (
        <div className="flex items-center justify-center">
          <Switch label="通知を有効化" defaultChecked />
        </div>
      ),
    },
  ];

  return (
    <section className="space-y-10 p-6">
      <header className="space-y-3">
        <h1 className="text-5xl font-semibold tracking-tight">Components</h1>
        <p className="max-w-3xl text-base leading-relaxed text-(--body-text)">
          各コンポーネントの詳細は Storybook で確認します。
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {componentItems.map((item) => (
          <ComponentCatalogCard
            key={item.name}
            name={item.name}
            description={item.description}
            storybookHref={item.storybookHref}
            preview={item.preview}
          />
        ))}
      </div>
    </section>
  );
}
