"use client";

import ComponentsIntro from "../../../content/components/index.mdx";
import ButtonDoc from "../../../content/components/button.mdx";
import SwitchDoc from "../../../content/components/switch.mdx";
import { MdxArticle } from "@/components/docs-site/mdx-article";

export default function ComponentsPage() {
  return (
    <MdxArticle>
      <ComponentsIntro />
      <section>
        <ButtonDoc />
      </section>
      <section>
        <SwitchDoc />
      </section>
    </MdxArticle>
  );
}
