import Link from "next/link";

import { Heading } from "@/components/ui/heading";
import { SectionContainer } from "@/components/ui/section-container";
import { Text } from "@/components/ui/text";

type GuideItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

const guideItems: GuideItem[] = [
  {
    title: "Design Principles",
    description:
      "デザイン上で目指すべき指針を言語化し、誰でも迷わずにFabricaらしい表現ができる状態をつくります。",
    href: "/principles",
    cta: "Learn More",
  },
  {
    title: "Getting Started",
    description:
      "導入手順、利用フロー、最初に押さえるべき考え方をまとめています。",
    href: "/getting-started",
    cta: "Read Guide",
  },
  {
    title: "Foundations",
    description:
      "タイポグラフィ、カラー、スペーシングなど、デザインの最小単位を定義した土台です。",
    href: "/foundations",
    cta: "Explore",
  },
  {
    title: "Components",
    description:
      "組み合わせによる迅速なプロダクト構築を支えるコンポーネント群です。実装例と利用方法を確認できます。",
    href: "/components",
    cta: "Explore",
  },
];

export default function Home() {
  return (
    <main className="space-y-8 p-6 md:p-8">
      <section className="space-y-4 rounded-xl border border-(--usage-border) bg-white p-6 md:p-8">
        <Text size="sm" className="font-medium text-muted-foreground">
          Fabrica Design System
        </Text>
        <Heading variant="h1">Design Systems for Digital Products</Heading>
        <Text size="lg" className="max-w-3xl text-muted-foreground">
          プロダクトを一貫した体験で届けるために、原則・基盤・コンポーネントを整理し、
          チーム全体で再利用できる仕組みとして提供します。
        </Text>
      </section>

      <section className="space-y-4">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {guideItems.map((item) => (
            <SectionContainer key={item.title} className="space-y-3 p-5">
              <Heading variant="h4">{item.title}</Heading>
              <Text size="sm" className="text-muted-foreground">
                {item.description}
              </Text>
              <Link
                href={item.href}
                className="inline-flex text-sm font-medium text-primary underline-offset-2 hover:underline"
              >
                {item.cta}
              </Link>
            </SectionContainer>
          ))}
        </div>
      </section>
    </main>
  );
}
