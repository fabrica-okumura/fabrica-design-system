---
name: boundary-rules
description: 再利用資産とA専用docs資産の配置境界を適用する。配置先判断、同期対象判定、ディレクトリ移動の相談時に使う。
---

# 境界ルール

## トリガー
- 新規ファイルの配置先を相談されたとき。
- Bリポへ同期すべき変更かを判断するとき。
- `src/components`、`src/styles`、`src/app`、`content` に変更が入るとき。

## 手順
1. 変更を次のどちらかに分類する。
   - 再利用資産（プロダクト側でも使う）
   - A専用docs資産
2. 責務に沿って配置する。
   - 再利用資産: `src/components/ui`、`src/components/layout`、`src/styles`、`src/tokens`、`src/lib`
   - A専用docs資産: `src/app/**`、`src/components/docs-site/**`、`content/**`、docs専用CSSは `src/app/**` または `src/components/docs-site/**`
3. 迷う場合は利便性より境界の明確さを優先する。
4. 人向けの境界ルールが変わったら `README.md` も更新する。

## ガードレール
- A専用docsのスタイルを `src/styles/**` に置かない。
- docs専用コンポーネントを再利用ディレクトリに混在させない。
