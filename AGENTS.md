# AGENTS.md

このファイルは、`fabrica-design-system` で AI が常に守る共通ルールです。

## ルールの役割分担

- `README.md`: 人向けの方針（目的、責務、境界、運用モデル）
- `AGENTS.md`: AI共通ルール（全タスク共通で守る前提）
- `.cursor/skills/**/SKILL.md`: AIの具体手順（トリガー、手順、ガードレール）

同じ内容を重複記載せず、README/AGENTS/Skills を補完関係で運用します。

## 共通ルール

1. Aリポの責務は「デザインシステム本体 + docs」。Bリポ配布は同期前提で扱う。
2. 再利用資産と docs 専用資産の境界を崩さない（同期境界を尊重する）。
3. 同期対象ファイルの正本は Aリポとして扱い、Bリポ側の直接恒久修正を前提にしない。
4. 実行手順や判断が必要な場合は、該当 Skill を優先して適用する。
5. 人向け方針を追加・更新する場合は README、AI実行ルールは Skills に記載する。

## 主なSkills

- `boundary-rules`
- `a-repo-only-components`
- `mdx-docs-authoring`
- `storybook-mdx-generation`
- `storybook-docs-sync`
- `release-sync-playbook`
- `skill-authoring-governance`
