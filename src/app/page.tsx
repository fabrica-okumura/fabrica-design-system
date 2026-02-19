"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog"
import { AspectRatio } from "../components/ui/aspect-ratio"
import { Badge } from "../components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"
import { Button } from "../components/ui/button"
import { Heading } from "../components/ui/heading"
import { SectionContainer } from "../components/ui/section-container"
import { Gap } from "@/components/layout/gap"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { Checkbox } from "../components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "../components/ui/field"
import { Icon } from "../components/ui/icon"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../components/ui/input-group"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  NativeSelect,
  NativeSelectOption,
} from "../components/ui/native-select"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { ScrollArea } from "../components/ui/scroll-area"
import { Separator } from "../components/ui/separator"
import { Skeleton } from "../components/ui/skeleton"
import { Switch } from "../components/ui/switch"
import { toast } from "sonner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Text } from "../components/ui/text"
import { TextLink } from "../components/ui/text-link"
import { Textarea } from "../components/ui/textarea"
import { Toggle } from "../components/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip"

const sections = [
  "Accordion",
  "Alert Dialog",
  "Aspect Ratio",
  "Badge",
  "Breadcrumb",
  "Button",
  "Card",
  "Carousel",
  "Checkbox",
  "Dialog",
  "Field",
  "Gap",
  "Heading",
  "Icon",
  "Input Group",
  "Input",
  "Label",
  "Native Select",
  "Pagination",
  "Select",
  "Radio Group",
  "Scroll Area",
  "Separator",
  "Skeleton",
  "Sonner",
  "Switch",
  "Table",
  "Tabs",
  "Text",
  "Text Link",
  "Textarea",
  "Toggle",
  "Tooltip",
]

function getSectionId(sectionName: string) {
  return sectionName.toLowerCase().replace(/\s+/g, "-")
}

export default function Home() {
  return (
    <main className="min-h-screen space-y-6 bg-(--usage-background) p-6">
      <div id="navigation" className="bg-gray-200 p-5 sticky top-[10rem] z-30">
        <Heading variant="h2">
          コンポーネント一覧
        </Heading>
        <nav>
          <Gap row wrap gap="sm">
            {sections.map((section) => (
              <TextLink key={section} href={`#${getSectionId(section)}`}>
                {section}
              </TextLink>
            ))}
          </Gap>
        </nav>
      </div>

      <SectionContainer id={getSectionId("Accordion")}>
        <Heading variant="h3">
          Accordion
        </Heading>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>セクション 1</AccordionTrigger>
            <AccordionContent>
              これはアコーディオンのデモです。開閉動作を確認してください。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>セクション 2</AccordionTrigger>
            <AccordionContent>
              他のセクションも同様に動作します。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionContainer>

      <SectionContainer id={getSectionId("Alert Dialog")}>
        <Heading variant="h3">
          Alert Dialog
        </Heading>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">削除ダイアログを開く</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>本当に削除しますか？</AlertDialogTitle>
              <AlertDialogDescription>
                この操作は取り消せません。対象のデータが完全に削除されます。
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>キャンセル</AlertDialogCancel>
              <AlertDialogAction>削除する</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SectionContainer>

      <SectionContainer id={getSectionId("Aspect Ratio")}>
        <Heading variant="h3">
          Aspect Ratio
        </Heading>
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center rounded-md border border-dashed border-(--usage-border) bg-(--usage-preview-bg)"
        >
          <span className="text-sm text-muted-foreground">
            16:9 の枠に収まるコンテンツ
          </span>
        </AspectRatio>
      </SectionContainer>

      <SectionContainer id={getSectionId("Badge")}>
        <Heading variant="h3">
          Badge
        </Heading>
        <Gap row wrap gap="sm">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Breadcrumb")}>
        <Heading variant="h3">
          Breadcrumb
        </Heading>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">ダッシュボード</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>設定</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </SectionContainer>

      <SectionContainer id={getSectionId("Button")}>
        <Heading variant="h3">
          Button
        </Heading>
        <div className="space-y-8">
          <div>
            <div className="mb-2 text-sm">Variant</div>
            <Gap row wrap gap="sm">
              <Button variant="default">Default</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="neutral">Neutral</Button>
              <Button variant="destructive">Destructive</Button>
            </Gap>
          </div>
          <div>
            <div className="mb-2 text-sm">Size</div>
            <Gap row wrap gap="sm">
              <Button size="default">Medium (M)</Button>
              <Button size="sm">Small (S)</Button>
            </Gap>
          </div>
          <div>
            <div className="mb-2 text-sm">With Icon</div>
            <Gap row wrap gap="sm">
              <Button>
                <Icon name="folder" />
                フォルダ
              </Button>
              <Button variant="accent">
                <Icon name="search" />
                検索
              </Button>
              <Button variant="neutral">
                <Icon name="plus" />
                追加
              </Button>
              <Button variant="destructive">
                削除
                <Icon name="trashbox" />
              </Button>
            </Gap>
          </div>
          <div>
            <div className="mb-2 text-sm">Icon Only</div>
            <Gap row wrap gap="sm">
              <Button size="icon">
                <Icon name="search" />
              </Button>
              <Button size="icon-sm">
                <Icon name="search" />
              </Button>
              <Button size="icon" variant="accent">
                <Icon name="folder" />
              </Button>
              <Button size="icon-sm" variant="neutral">
                <Icon name="plus" />
              </Button>
            </Gap>
          </div>
          <div>
            <div className="mb-2 text-sm">Disabled</div>
            <Gap row wrap gap="sm">
              <Button disabled>Disabled</Button>
              <Button variant="accent" disabled>
                Disabled
              </Button>
              <Button variant="neutral" disabled>
                Disabled
              </Button>
              <Button variant="destructive" disabled>
                Disabled
              </Button>
            </Gap>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id={getSectionId("Card")}>
        <Heading variant="h3">
          Card
        </Heading>
        <Card>
          <CardHeader>
            <CardTitle>カードタイトル</CardTitle>
            <CardDescription>カードの説明文です。</CardDescription>
          </CardHeader>
          <CardContent>カードの内容がここに表示されます。</CardContent>
          <CardFooter>フッター</CardFooter>
        </Card>
      </SectionContainer>

      <SectionContainer id={getSectionId("Carousel")}>
        <Heading variant="h3">
          Carousel
        </Heading>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
                <span className="text-4xl font-semibold">1</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
                <span className="text-4xl font-semibold">2</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
                <span className="text-4xl font-semibold">3</span>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </SectionContainer>

      <SectionContainer id={getSectionId("Checkbox")}>
        <Heading variant="h3">
          Checkbox
        </Heading>
        <Gap gap="sm">
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox-1" />
            <Label htmlFor="checkbox-1">チェックボックス 1</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox-2" defaultChecked />
            <Label htmlFor="checkbox-2">チェックボックス 2</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox-3" disabled />
            <Label htmlFor="checkbox-3">無効化されたチェックボックス</Label>
          </div>
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Dialog")}>
        <Heading variant="h3">
          Dialog
        </Heading>
        <Dialog>
          <DialogTrigger asChild>
            <Button>ダイアログを開く</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>ダイアログのタイトル</DialogTitle>
              <DialogDescription>
                ダイアログの説明文がここに表示されます。
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="neutral">キャンセル</Button>
              <Button>確認</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SectionContainer>

      <SectionContainer id={getSectionId("Field")}>
        <Heading variant="h3">
          Field
        </Heading>
        <Field>
          <FieldLabel>フィールドラベル</FieldLabel>
          <FieldContent>
            <Input placeholder="入力してください" />
            <FieldDescription>補足説明がここに表示されます。</FieldDescription>
          </FieldContent>
        </Field>
      </SectionContainer>

      <SectionContainer id={getSectionId("Gap")}>
        <Heading variant="h3">
          Gap
        </Heading>
        <div className="space-y-8">
          <div>
            <div className="mb-2 text-sm">縦方向（デフォルト）</div>
            <Gap gap="sm">
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 1</div>
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 2</div>
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 3</div>
            </Gap>
          </div>
          <div>
            <div className="mb-2 text-sm">横方向（row）</div>
            <Gap row gap="sm">
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 1</div>
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 2</div>
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 3</div>
            </Gap>
          </div>
          <div>
            <div className="mb-2 text-sm">横方向＋折り返し（row wrap）</div>
            <Gap row wrap gap="sm">
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 1</div>
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 2</div>
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 3</div>
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 4</div>
              <div className="bg-muted rounded-md px-4 py-2 text-sm">アイテム 5</div>
            </Gap>
          </div>
          <div>
            <div className="mb-2 text-sm">異なるgapサイズ</div>
            <span className="text-sm">2xs</span>
            <Gap gap="2xs">
              <div className="bg-muted rounded-md px-3 py-1.5 text-xs">アイテム</div>
              <div className="bg-muted rounded-md px-3 py-1.5 text-xs">アイテム</div>
            </Gap>
            <span className="text-sm">xs</span>
            <Gap gap="xs">
              <div className="bg-muted rounded-md px-3 py-1.5 text-xs">アイテム</div>
              <div className="bg-muted rounded-md px-3 py-1.5 text-xs">アイテム</div>
            </Gap>
            <span className="text-sm">sm</span>
            <Gap gap="sm">
              <div className="bg-muted rounded-md px-3 py-1.5 text-xs">アイテム</div>
              <div className="bg-muted rounded-md px-3 py-1.5 text-xs">アイテム</div>
            </Gap>
            <span className="text-sm">md</span>
            <Gap gap="md">
              <div className="bg-muted rounded-md px-3 py-1.5 text-xs">アイテム</div>
              <div className="bg-muted rounded-md px-3 py-1.5 text-xs">アイテム</div>
            </Gap>
            <span className="text-sm">lg</span>
            <Gap gap="lg">
              <div className="bg-muted rounded-md px-3 py-1.5 text-xs">アイテム</div>
              <div className="bg-muted rounded-md px-3 py-1.5 text-xs">アイテム</div>
            </Gap>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id={getSectionId("Heading")}>
        <Heading variant="h3">
          Heading
        </Heading>
        <Gap gap="md">
          <div>
            <div className="mb-2 text-sm">page_title</div>
            <Heading variant="page_title">ページタイトル</Heading>
          </div>
          <div>
            <div className="mb-2 text-sm">h1</div>
            <Heading variant="h1">見出し 1</Heading>
          </div>
          <div>
            <div className="mb-2 text-sm">h2</div>
            <Heading variant="h2">見出し 2</Heading>
          </div>
          <div>
            <div className="mb-2 text-sm">h3</div>
            <Heading variant="h3">見出し 3</Heading>
          </div>
          <div>
            <div className="mb-2 text-sm">h4</div>
            <Heading variant="h4">見出し 4</Heading>
          </div>
          <div>
            <div className="mb-2 text-sm">h5</div>
            <Heading variant="h5">見出し 5</Heading>
          </div>
          <div>
            <div className="mb-2 text-sm">h6</div>
            <Heading variant="h6" asChild>
              <h6>
                見出し 6
              </h6>
            </Heading>
          </div>
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Icon")}>
        <Heading variant="h3">
          Icon
        </Heading>
        <Gap row wrap gap="sm">
          <Icon name="ai" />
          <Icon name="archivebox" />
          <Icon name="arrow-back-left" />
          <Icon name="arrow-close" />
          <Icon name="arrow-down" />
          <Icon name="arrow-go-left" />
          <Icon name="arrow-go-right" />
          <Icon name="arrow-goup" />
          <Icon name="arrow-left-neutral" />
          <Icon name="arrow-left" />
          <Icon name="arrow-open" />
          <Icon name="arrow-right" />
          <Icon name="arrow-up" />
          <Icon name="back" />
          <Icon name="bell" />
          <Icon name="blanc" />
          <Icon name="calculator" />
          <Icon name="calendar" />
          <Icon name="car" />
          <Icon name="chain" />
          <Icon name="change-search" />
          <Icon name="change" />
          <Icon name="checkmark" />
          <Icon name="circle-cross" />
          <Icon name="circle-minus" />
          <Icon name="circle-plus" />
          <Icon name="circle-settle" />
          <Icon name="clip" />
          <Icon name="clock" />
          <Icon name="copy" />
          <Icon name="cross" />
          <Icon name="customer-management" />
          <Icon name="dots-horizontal" />
          <Icon name="dots-vertical-2line" />
          <Icon name="dots-vertical" />
          <Icon name="download" />
          <Icon name="error" />
          <Icon name="eye-off" />
          <Icon name="eye" />
          <Icon name="filter" />
          <Icon name="folder-plus" />
          <Icon name="folder" />
          <Icon name="gantt" />
          <Icon name="garage" />
          <Icon name="good" />
          <Icon name="graph" />
          <Icon name="history" />
          <Icon name="info" />
          <Icon name="list-plus" />
          <Icon name="list-settle" />
          <Icon name="list" />
          <Icon name="login" />
          <Icon name="logout" />
          <Icon name="mail" />
          <Icon name="maximize" />
          <Icon name="message" />
          <Icon name="minimize" />
          <Icon name="minus" />
          <Icon name="money" />
          <Icon name="multiple-documents" />
          <Icon name="option-plus" />
          <Icon name="padlock" />
          <Icon name="pencil" />
          <Icon name="play" />
          <Icon name="plus" />
          <Icon name="print" />
          <Icon name="question" />
          <Icon name="reload" />
          <Icon name="search" />
          <Icon name="send-outline" />
          <Icon name="settings" />
          <Icon name="share" />
          <Icon name="sorting" />
          <Icon name="spanner" />
          <Icon name="star-outline" />
          <Icon name="stop" />
          <Icon name="tips" />
          <Icon name="trashbox" />
          <Icon name="user-plus" />
          <Icon name="zoom" />
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Input Group")}>
        <Heading variant="h3">
          Input Group
        </Heading>
        <InputGroup>
          <InputGroupAddon>
            <span>@</span>
          </InputGroupAddon>
          <InputGroupInput placeholder="username" />
        </InputGroup>
      </SectionContainer>

      <SectionContainer id={getSectionId("Input")}>
        <Heading variant="h3">
          Input
        </Heading>
        <Gap gap="sm">
          <Input placeholder="通常の入力欄" />
          <Input type="email" placeholder="メールアドレス" />
          <Input type="password" placeholder="パスワード" />
          <Input disabled placeholder="無効化された入力欄" />
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Label")}>
        <Heading variant="h3">
          Label
        </Heading>
        <Gap gap="sm">
          <div>
            <Label htmlFor="input-1">ラベル 1</Label>
            <Input id="input-1" placeholder="入力してください" />
          </div>
          <div>
            <Label htmlFor="input-2">ラベル 2</Label>
            <Input id="input-2" placeholder="入力してください" />
          </div>
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Native Select")}>
        <Heading variant="h3">
          Native Select
        </Heading>
        <NativeSelect>
          <NativeSelectOption value="">選択してください</NativeSelectOption>
          <NativeSelectOption value="option1">オプション 1</NativeSelectOption>
          <NativeSelectOption value="option2">オプション 2</NativeSelectOption>
          <NativeSelectOption value="option3">オプション 3</NativeSelectOption>
        </NativeSelect>
      </SectionContainer>

      <SectionContainer id={getSectionId("Select")}>
        <Heading variant="h3">
          Select
        </Heading>
        <Gap gap="sm">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">オプション 1</SelectItem>
              <SelectItem value="option2">オプション 2</SelectItem>
              <SelectItem value="option3">オプション 3</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="option2">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">オプション 1</SelectItem>
              <SelectItem value="option2">オプション 2</SelectItem>
              <SelectItem value="option3">オプション 3</SelectItem>
            </SelectContent>
          </Select>
          <Select disabled>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="無効化されたセレクト" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">オプション 1</SelectItem>
              <SelectItem value="option2">オプション 2</SelectItem>
            </SelectContent>
          </Select>
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Pagination")}>
        <Heading variant="h3">
          Pagination
        </Heading>
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
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </SectionContainer>

      <SectionContainer id={getSectionId("Radio Group")}>
        <Heading variant="h3">
          Radio Group
        </Heading>
        <RadioGroup defaultValue="option1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="radio-1" />
            <Label htmlFor="radio-1">オプション 1</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="radio-2" />
            <Label htmlFor="radio-2">オプション 2</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option3" id="radio-3" disabled />
            <Label htmlFor="radio-3" className="opacity-50">
              無効化されたオプション
            </Label>
          </div>
        </RadioGroup>
      </SectionContainer>

      <SectionContainer id={getSectionId("Scroll Area")}>
        <Heading variant="h3">
          Scroll Area
        </Heading>
        <ScrollArea className="h-32 w-full rounded-md border border-(--usage-border) p-4">
          <div className="space-y-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="text-sm">
                スクロール可能なコンテンツ {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SectionContainer>

      <SectionContainer id={getSectionId("Separator")}>
        <Heading variant="h3">
          Separator
        </Heading>
        <div className="space-y-4">
          <div>
            <div className="mb-2 text-sm">水平セパレーター</div>
            <Separator />
          </div>
          <div className="flex h-5 items-center gap-4">
            <span className="text-sm">左</span>
            <Separator orientation="vertical" />
            <span className="text-sm">右</span>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id={getSectionId("Skeleton")}>
        <Heading variant="h3">
          Skeleton
        </Heading>
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <Skeleton className="h-24 w-full" />
        </div>
      </SectionContainer>

      <SectionContainer id={getSectionId("Sonner")}>
        <Heading variant="h3">
          Sonner
        </Heading>
        <Gap row wrap gap="sm">
          <Button
            onClick={() => toast.success("成功しました！")}
          >
            成功トースト
          </Button>
          <Button
            onClick={() => toast.error("エラーが発生しました")}
            variant="destructive"
          >
            エラートースト
          </Button>
          <Button
            onClick={() => toast.info("情報をお知らせします")}
            variant="neutral"
          >
            情報トースト
          </Button>
          <Button
            onClick={() => toast.warning("警告です")}
            variant="neutral"
          >
            警告トースト
          </Button>
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Switch")}>
        <Heading variant="h3">
          Switch
        </Heading>
        <Gap gap="sm">
          <div className="flex items-center gap-2">
            <Switch id="switch-1" />
            <Label htmlFor="switch-1">スイッチ 1</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="switch-2" defaultChecked />
            <Label htmlFor="switch-2">スイッチ 2（デフォルトON）</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="switch-3" disabled />
            <Label htmlFor="switch-3" className="opacity-50">
              無効化されたスイッチ
            </Label>
          </div>
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Table")}>
        <Heading variant="h3">
          Table
        </Heading>
        <Table>
          {/* <TableCaption>サンプルテーブル</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>名前</TableHead>
              <TableHead>ステータス</TableHead>
              <TableHead>メール</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>田中太郎</TableCell>
              <TableCell>アクティブ</TableCell>
              <TableCell>tanaka@example.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>佐藤花子</TableCell>
              <TableCell>アクティブ</TableCell>
              <TableCell>sato@example.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>鈴木一郎</TableCell>
              <TableCell>非アクティブ</TableCell>
              <TableCell>suzuki@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </SectionContainer>

      <SectionContainer id={getSectionId("Tabs")}>
        <Heading variant="h3">
          Tabs
        </Heading>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">タブ 1</TabsTrigger>
            <TabsTrigger value="tab2">タブ 2</TabsTrigger>
            <TabsTrigger value="tab3">タブ 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            タブ 1 のコンテンツがここに表示されます。
          </TabsContent>
          <TabsContent value="tab2">
            タブ 2 のコンテンツがここに表示されます。
          </TabsContent>
          <TabsContent value="tab3">
            タブ 3 のコンテンツがここに表示されます。
          </TabsContent>
        </Tabs>
      </SectionContainer>

      <SectionContainer id={getSectionId("Text")}>
        <Heading variant="h3">
          Text
        </Heading>
        <Gap gap="sm">
          <Text size="xs">Extra Small Text</Text>
          <Text size="sm">Small Text</Text>
          <Text size="base">Base Text</Text>
          <Text size="lg">Large Text</Text>
          <Text size="xl">Extra Large Text</Text>
          <Text size="2xl">2X Large Text</Text>
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Text Link")}>
        <Heading variant="h3">
          Text Link
        </Heading>
        <Gap gap="sm">
          <TextLink href="#">通常のリンク</TextLink>
          <TextLink href="#" border="underline">
            下線付きリンク
          </TextLink>
          <TextLink href="#" icon="arrow-right" iconPosition="right">
            アイコン付きリンク
          </TextLink>
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Textarea")}>
        <Heading variant="h3">
          Textarea
        </Heading>
        <Gap gap="sm">
          <Textarea placeholder="テキストエリアに入力してください" />
          <Textarea
            placeholder="無効化されたテキストエリア"
            disabled
          />
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Toggle")}>
        <Heading variant="h3">
          Toggle
        </Heading>
        <Gap row wrap gap="sm">
          <Toggle>Toggle</Toggle>
          <Toggle variant="outline">Outline Toggle</Toggle>
          <Toggle size="sm">Small</Toggle>
          <Toggle size="lg">Large</Toggle>
        </Gap>
      </SectionContainer>

      <SectionContainer id={getSectionId("Tooltip")}>
        <Heading variant="h3">
          Tooltip
        </Heading>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="neutral">ホバーしてください</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>これはツールチップです</p>
          </TooltipContent>
        </Tooltip>
      </SectionContainer>

    </main>
  )
}
