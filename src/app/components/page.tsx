"use client";

import ComponentsIntro from "../../../content/components/index.mdx";
import ButtonDoc from "../../../content/components/button.mdx";
import SwitchDoc from "../../../content/components/switch.mdx";

export default function ComponentsPage() {
  return (
    <article className="space-y-10 p-6">
      <ComponentsIntro />
      <section>
        <ButtonDoc />
      </section>
      <section>
        <SwitchDoc />
      </section>
    </article>
  );
}
