"use client";

import type { ReactNode } from "react";

import { ComponentCatalogCard } from "@/components/docs-site/component-catalog-card";
import { Gap } from "@/components/layout/gap";
import { PageHeader } from "@/components/layout/page-header";
import { PageTopButton } from "@/components/layout/page-top-button";
import { SectionContainer } from "@/components/layout/section-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Heading } from "@/components/ui/heading";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import { TextLink } from "@/components/ui/text-link";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

export default function ComponentsPage() {
  const componentItems = [
    {
      name: "Gap",
      description: "要素間の余白を制御するレイアウトコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/layout-gap--docs",
    },
    {
      name: "PageHeader",
      description: "ページ上部に表示するヘッダーコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/layout-pageheader--docs",
    },
    {
      name: "PageTopButton",
      description: "ページ上部に戻るためのフローティングボタンです。",
      storybookHref:
        "http://localhost:6006/?path=/docs/layout-pagetopbutton--docs",
    },
    {
      name: "Accordion",
      description: "折りたたみ可能なコンテンツを段階的に表示するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-accordion--docs",
    },
    {
      name: "AlertDialog",
      description: "破壊的操作の確認に使用するダイアログコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-alertdialog--docs",
    },
    {
      name: "AspectRatio",
      description: "表示領域のアスペクト比を固定するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-aspectratio--docs",
    },
    {
      name: "Badge",
      description: "短いステータスや分類ラベルを表示するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-badge--docs",
    },
    {
      name: "Breadcrumb",
      description: "階層ナビゲーションを表示するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-breadcrumb--docs",
    },
    {
      name: "Button",
      description: "基本的なアクション実行用コンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-button--docs",
    },
    {
      name: "Card",
      description: "情報をまとまりで表示するカードコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-card--docs",
    },
    {
      name: "Carousel",
      description: "スライド表示を行うカルーセルコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-carousel--docs",
    },
    {
      name: "Checkbox",
      description: "オン/オフを選択するチェックボックスコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-checkbox--docs",
    },
    {
      name: "Dialog",
      description: "モーダル表示を行うダイアログコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-dialog--docs",
    },
    {
      name: "Field",
      description: "フォーム要素のラベルや説明を構成するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-field--docs",
    },
    {
      name: "Heading",
      description: "見出しテキストを表現するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-heading--docs",
    },
    {
      name: "Icon",
      description: "アイコンを表示するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-icon--docs",
    },
    {
      name: "Input",
      description: "1行テキスト入力用のコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-input--docs",
    },
    {
      name: "InputGroup",
      description: "入力欄と補助要素を組み合わせるコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-inputgroup--docs",
    },
    {
      name: "Label",
      description: "フォーム要素に対応するラベルコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-label--docs",
    },
    {
      name: "NativeSelect",
      description: "ネイティブ select をスタイルするコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-nativeselect--docs",
    },
    {
      name: "Pagination",
      description: "ページ切り替え UI を表示するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-pagination--docs",
    },
    {
      name: "RadioGroup",
      description: "単一選択を行うラジオグループコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-radiogroup--docs",
    },
    {
      name: "ScrollArea",
      description: "スクロール領域を提供するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-scrollarea--docs",
    },
    {
      name: "SectionContainer",
      description: "セクション単位で内容を囲むコンポーネントです。",
      storybookHref:
        "http://localhost:6006/?path=/docs/layout-sectioncontainer--docs",
    },
    {
      name: "Select",
      description: "カスタムセレクト UI を提供するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-select--docs",
    },
    {
      name: "Separator",
      description: "要素間の区切り線を表示するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-separator--docs",
    },
    {
      name: "Skeleton",
      description: "ローディング時のプレースホルダーコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-skeleton--docs",
    },
    {
      name: "Sonner",
      description: "トースト通知を表示するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-sonner--docs",
    },
    {
      name: "Switch",
      description: "オン/オフ状態を切り替えるトグルコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-switch--docs",
    },
    {
      name: "Table",
      description: "表形式データを表示するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-table--docs",
    },
    {
      name: "Tabs",
      description: "タブ切り替え UI を提供するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-tabs--docs",
    },
    {
      name: "Text",
      description: "本文テキストのスタイルを提供するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-text--docs",
    },
    {
      name: "TextLink",
      description: "テキストリンクを表示するコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-textlink--docs",
    },
    {
      name: "Textarea",
      description: "複数行入力用のコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-textarea--docs",
    },
    {
      name: "Toggle",
      description: "状態を保持できるトグルボタンコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-toggle--docs",
    },
    {
      name: "Tooltip",
      description: "補足情報を表示するツールチップコンポーネントです。",
      storybookHref: "http://localhost:6006/?path=/docs/ui-tooltip--docs",
    },
  ];

  const previewMap: Record<string, ReactNode> = {
    Gap: (
      <Gap row gap="sm">
        <div className="h-6 w-6 rounded border border-primary/30 bg-primary/20" />
        <div className="h-6 w-6 rounded border border-primary/30 bg-primary/20" />
        <div className="h-6 w-6 rounded border border-primary/30 bg-primary/20" />
      </Gap>
    ),
    PageHeader: (
      <div className="w-full overflow-hidden rounded-md border">
        <PageHeader />
      </div>
    ),
    PageTopButton: <PageTopButton className="static right-auto bottom-auto size-10" />,
    Accordion: (
      <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-[260px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>配送について</AccordionTrigger>
          <AccordionContent>通常配送は2-4営業日です。</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    AlertDialog: (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="sm">
            削除
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>確認</AlertDialogTitle>
            <AlertDialogDescription>この操作は取り消せません。</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="neutral" size="sm">
              キャンセル
            </Button>
            <Button size="sm">削除</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
    AspectRatio: (
      <div className="w-[160px]">
        <AspectRatio ratio={16 / 9} className="rounded border bg-primary/10">
          <div className="flex h-full items-center justify-center text-xs font-medium text-primary">
            16:9
          </div>
        </AspectRatio>
      </div>
    ),
    Badge: (
      <div className="flex gap-2">
        <Badge>New</Badge>
        <Badge variant="secondary">Beta</Badge>
      </div>
    ),
    Breadcrumb: (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
    Button: <Button>保存</Button>,
    Card: (
      <Card className="w-full max-w-[260px] py-4">
        <CardHeader className="px-4">
          <CardTitle className="text-sm">カード</CardTitle>
        </CardHeader>
        <CardContent className="px-4 text-sm">コンテンツ</CardContent>
      </Card>
    ),
    Carousel: (
      <Carousel opts={{ loop: true }} className="w-[180px]">
        <CarouselContent>
          <CarouselItem>
            <div className="h-16 rounded border bg-muted text-center leading-[4rem] text-sm">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-16 rounded border bg-muted text-center leading-[4rem] text-sm">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-16 rounded border bg-muted text-center leading-[4rem] text-sm">3</div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-1 size-7" size="icon-sm" />
        <CarouselNext className="right-1 size-7" size="icon-sm" />
      </Carousel>
    ),
    Checkbox: (
      <div className="flex items-center gap-2">
        <Checkbox id="preview-checkbox" defaultChecked />
        <Label htmlFor="preview-checkbox">同意する</Label>
      </div>
    ),
    Dialog: (
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">開く</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ダイアログ</DialogTitle>
            <DialogDescription>説明テキスト</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    ),
    Field: (
      <Field className="w-full max-w-[260px]">
        <FieldLabel htmlFor="preview-field">名前</FieldLabel>
        <FieldContent>
          <Input id="preview-field" placeholder="山田 太郎" />
          <FieldDescription>必須項目です。</FieldDescription>
        </FieldContent>
      </Field>
    ),
    Heading: <Heading variant="h3">見出し</Heading>,
    Icon: <Icon name="search" />,
    Input: <Input className="w-[180px]" placeholder="入力してください" />,
    InputGroup: (
      <InputGroup className="w-[220px]">
        <InputGroupAddon>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="username" />
      </InputGroup>
    ),
    Label: (
      <div className="grid gap-1 text-left">
        <Label htmlFor="preview-label">メール</Label>
        <Input id="preview-label" className="w-[180px]" placeholder="name@example.com" />
      </div>
    ),
    NativeSelect: (
      <NativeSelect className="w-[180px]" defaultValue="tokyo">
        <NativeSelectOption value="osaka">大阪</NativeSelectOption>
        <NativeSelectOption value="tokyo">東京</NativeSelectOption>
      </NativeSelect>
    ),
    Pagination: (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
    RadioGroup: (
      <RadioGroup defaultValue="a" className="w-full max-w-[180px]">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r-a" value="a" />
          <Label htmlFor="r-a">A</Label>
        </div>
      </RadioGroup>
    ),
    ScrollArea: (
      <ScrollArea className="h-20 w-[180px] rounded border p-2">
        <div className="space-y-2 text-sm">
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
          <p>item 4</p>
        </div>
      </ScrollArea>
    ),
    SectionContainer: (
      <SectionContainer className="w-full max-w-[220px] p-3 text-sm">セクション</SectionContainer>
    ),
    Select: (
      <Select defaultValue="tokyo">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="osaka">大阪</SelectItem>
          <SelectItem value="tokyo">東京</SelectItem>
        </SelectContent>
      </Select>
    ),
    Separator: (
      <div className="w-[180px]">
        <Separator />
      </div>
    ),
    Skeleton: <Skeleton className="h-4 w-[180px]" />,
    Sonner: (
      <div>
        <Button size="sm" onClick={() => toast.success("通知を表示しました")}>
          Show Toast
        </Button>
        <Toaster />
      </div>
    ),
    Switch: <Switch label="通知を有効化" defaultChecked />,
    Table: (
      <div className="w-[220px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>項目</TableHead>
              <TableHead>値</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>A</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
    Tabs: (
      <Tabs defaultValue="a" className="w-[180px]">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
        <TabsContent value="a" className="text-sm">
          コンテンツA
        </TabsContent>
        <TabsContent value="b" className="text-sm">
          コンテンツB
        </TabsContent>
      </Tabs>
    ),
    Text: <Text>本文テキスト</Text>,
    TextLink: <TextLink href="#">詳細を見る</TextLink>,
    Textarea: <Textarea className="w-[180px]" placeholder="内容を入力" rows={3} />,
    Toggle: <Toggle>Bold</Toggle>,
    Tooltip: (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="neutral">
            Hover
          </Button>
        </TooltipTrigger>
        <TooltipContent>補足情報</TooltipContent>
      </Tooltip>
    ),
  };

  const layoutItems = componentItems.filter((item) =>
    item.storybookHref.includes("/docs/layout-"),
  );
  const uiItems = componentItems.filter((item) =>
    item.storybookHref.includes("/docs/ui-"),
  );

  return (
    <section className="space-y-10 p-6">
      <header className="space-y-3">
        <h1 className="text-5xl font-semibold tracking-tight">Components</h1>
        <p className="max-w-3xl text-base leading-relaxed text-(--body-text)">
          各コンポーネントの詳細は Storybook で確認します。
        </p>
      </header>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Layout</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {layoutItems.map((item) => (
              <ComponentCatalogCard
                key={item.name}
                name={item.name}
                description={item.description}
                storybookHref={item.storybookHref}
                preview={previewMap[item.name]}
              />
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">UI</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {uiItems.map((item) => (
              <ComponentCatalogCard
                key={item.name}
                name={item.name}
                description={item.description}
                storybookHref={item.storybookHref}
                preview={previewMap[item.name]}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
