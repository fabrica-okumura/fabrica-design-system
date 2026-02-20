---
name: skill-authoring-governance
description: 人向けREADME方針とAI向け実行ルールを混在させずにSkillを作成・保守する。SKILL.mdの新規作成、更新、レビュー時に使う。
---

# Skill作成ガバナンス

## 目的
運用ルールの責務を分離し、README・AGENTS・Skills の重複と矛盾を防ぐ。

## 必須の分離ルール
1. チーム方針は `README.md` に書く（背景・責務・境界）。
2. AI共通ルールは `AGENTS.md` に書く（全タスク共通の前提）。
3. AIの実行手順は `.cursor/skills/**/SKILL.md` に書く（判断・手順・確認）。
4. 同じルール全文を README/AGENTS/Skills に重複記載しない。

## 命名ルール
- 名前は小文字の kebab-case にする。
- `a-` / `b-` のようなリポジトリ接頭辞は使わない。
- `helper` のような曖昧名ではなく、責務が分かる具体名にする。

## SKILL.md テンプレート
最小構成は以下を使う。

```markdown
---
name: skill-name
description: 何をするSkillか、いつ使うかを書く。
---

# Skill名

## トリガー
- ...

## 手順
1. ...
2. ...

## ガードレール
- ...
```

## ガードレール
- SKILL.md は簡潔に保つ。
- 1 Skill 1責務を優先する。
- 既存Skillと責務が重なる場合は、統合またはスコープ縮小する。
