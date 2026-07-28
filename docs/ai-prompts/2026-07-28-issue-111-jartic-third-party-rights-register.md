# AIプロンプトログ（2026-07-28 / Issue #111）

## User Request

- PR #110マージ後の次タスクを進める。
- RepositoryをSource of TruthとしてIssue駆動で継続する。

## Target Issue

https://github.com/mizzz-ivr/RouteGarage/issues/111

## Highest Priority Rule

`docs/ai-protocol/PROMPT.txt`を最優先とする。

## Purpose

JARTICオープンデータを保存・加工・公衆送信・地図表示・履歴公開する前に、第三者権利、上流由来、利用条件、表示義務、保存・加工可否を確認し、公開Go / No-Goを再現可能に判定する台帳と手順を定義する。

本Issueでは実データ取得、ファイル解析、許諾取得、外部問い合わせ、採用決定、実装を行わない。

## Repository Sources

- `docs/ai-protocol/PROMPT.txt`
- `docs/reviews/google-maps-jartic-open-data-static-layer-review.md`
- `docs/reviews/map-traffic-provider-combination-comparison.md`
- `docs/policies/traffic-and-orbis-information-policy.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Official Sources

確認日: 2026-07-28

- JARTIC「各種情報の提供（オープンデータ）」
  - https://www.jartic.or.jp/service/opendata/
- JARTICオープンデータ利用規約
  - https://www.jartic.or.jp/d/opendata/riyou_kiyaku.pdf

## Required Document

- `docs/registers/jartic-open-data-third-party-rights-register.md`
- `docs/logs/2026-07-28-issue-111.md`
- `docs/ai-prompts/2026-07-28-issue-111-jartic-third-party-rights-register.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Register Requirements

- データセット全体を一括で確認済みにしない
- 都道府県、原本ファイル、項目、地物、上流提供者単位へ分割できる
- 原本URL、ファイル名、ハッシュ、対象年月、公開更新日、取得日を記録する
- 利用規約URL、確認日、文書ハッシュ候補を記録する
- 説明書・フォーマット版を記録する
- 上流由来、権利者候補、第三者権利の可能性を記録する
- 権利処理済みの明示範囲と追加許諾を記録する
- 保存、加工、公衆送信、地図表示、履歴公開等を独立判定する
- 出典、加工表示、追加帰属、鮮度注意文を記録する
- 状態、公開判定、理由、条件、確認者、承認者、期限を記録する
- 規約・ファイル・説明書・許諾変更時に失効させる
- 権利侵害・安全通報時の一時停止と再開条件を定義する
- 公開Repositoryと非公開証跡を分離する

## State Requirements

- 未着手
- 調査中
- 確認済み
- 条件付き
- 非許可
- 失効・再確認必要

`未着手`、`調査中`、`非許可`、`失効・再確認必要`は公開No-Goとする。

## Freshness Requirements

- 最新公開版は現在月、現在有効、リアルタイムを意味しない
- 対象年月、作成基準日、公開更新日、取得日、権利確認日を分離する
- `最新交通情報`と表示しない
- 月次データを現在の渋滞・事故・閉鎖・緊急規制として扱わない

## Safety and Privacy Constraints

- 権利未確認データを公開しない
- 利用者の位置情報・走行履歴を権利台帳へ保存しない
- 非公開契約・回答・個人情報を公開Repositoryへ保存しない
- 権利侵害・安全影響の可能性が高い通報時は即時一時停止する
- 判断不能時はNo-Go

## Commercial Constraints

- 台帳様式を作るが実データを登録しない
- 第三者権利処理済みと断定しない
- 許諾取得・外部問い合わせを行わない
- データセット・providerを採用決定しない
- 非公開証跡本文を公開Repositoryへ転載しない

## Implementation Prohibitions

- JARTICデータのダウンロード・解析・変換
- Google Maps Datasetsへのアップロード
- Next.js / Expo / Maps実装
- DB / API / Auth / Infra / Monitoring設計・実装
- APIキー・トライアル取得
- 外部問い合わせ・許諾取得
- provider採用決定
- 法的助言・権利の最終判断

## Completion Conditions

- 台帳の管理単位と必須項目がある
- 状態・状態遷移・失効条件がある
- 公開Go / 条件付きGo / No-Goゲートがある
- 初期プレースホルダーがすべて未着手・No-Goである
- 部分公開の厳格な条件がある
- 通報・一時停止・再開手順がある
- 公開Repositoryと非公開証跡の境界がある
- Source of Truth、ログ、handoffが整合する
- 実データ、採用、実装へ進んでいない
- AI生成内容の人間レビューが明記されている

## Validation

- docsのみの差分であること
- 新規Markdownが空でないこと
- データセット一括確認を禁止していること
- `未確認`を許可として扱っていないこと
- 証跡なしで確認済みにできないこと
- 権利状態と鮮度状態を混同していないこと
- 最新公開版を現在情報として扱っていないこと
- 非公開証跡を公開Repositoryへ保存しないこと
- 実データ取得、問い合わせ、採用、実装がないこと

## Expected PR Title

`docs: JARTICオープンデータの第三者権利台帳を追加`
