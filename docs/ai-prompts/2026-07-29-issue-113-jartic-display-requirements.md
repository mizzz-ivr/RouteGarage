# AIプロンプトログ（2026-07-29 / Issue #113）

## User Request

- 前タスク完了後、次のタスクを進める。
- RepositoryをSource of TruthとしてIssue駆動で継続する。

## Target Issue

https://github.com/mizzz-ivr/RouteGarage/issues/113

## Highest Priority Rule

`docs/ai-protocol/PROMPT.txt`を最優先とする。

## Purpose

JARTICオープンデータの静的・定期更新レイヤーについて、利用者が提供元、加工主体、対象時点、更新・権利・停止状態を誤認しない画面要件を定義する。

本作業は画面要件の文書化までとし、UIモック、コード、地図SDK、実データ取得、provider採用は行わない。

## Repository Sources

- `docs/ai-protocol/PROMPT.txt`
- `docs/reviews/google-maps-jartic-open-data-static-layer-review.md`
- `docs/registers/jartic-open-data-third-party-rights-register.md`
- `docs/policies/traffic-and-orbis-information-policy.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Official Sources

確認日: 2026-07-29

### JARTIC

- 各種情報の提供（オープンデータ）
  - https://www.jartic.or.jp/service/opendata/
- オープンデータ利用規約
  - https://www.jartic.or.jp/d/opendata/riyou_kiyaku.pdf

### Google Maps Platform

- Maps JavaScript API policies and attributions
  - https://developers.google.com/maps/documentation/javascript/policies
- Add a dataset to a map
  - https://developers.google.com/maps/documentation/javascript/dds-datasets/add-dataset-to-map

## Required Document

- `docs/ui/jartic-static-layer-display-requirements.md`
- `docs/logs/2026-07-29-issue-113.md`
- `docs/ai-prompts/2026-07-29-issue-113-jartic-display-requirements.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## UI Requirement Principles

- 月次データをライブ・現在情報として表示しない。
- `最新公開版`を現在月・現在有効・リアルタイムと解釈しない。
- データセット名、静的情報、対象年月、状態を地図表示中に常時確認可能にする。
- JARTIC出典、RouteGarage加工表示、追加帰属を定義する。
- Google Maps標準帰属とJARTIC出典を別責務として扱う。
- Google、JARTIC、RouteGarage由来情報を視覚的・意味的に区別する。
- 出典を詳細画面だけへ隠さない。
- 状態を色だけで表現しない。
- 権利確認中、非許可、失効、提供停止の地物を描画しない。
- Web / 将来モバイルで同じ状態名・意味を使用する。
- 地図、凡例、地物詳細、出典詳細、履歴、停止、共有、印刷を対象とする。

## State Requirements

- 利用可能な静的参照
- 更新遅延
- 過去版・履歴
- 条件付き公開
- 権利確認中
- 提供停止
- データなし
- 取得失敗
- 検証失敗

各状態について、利用者向け名称、地図描画可否、操作可否、主な条件を定義する。

## Safety Constraints

- 走行中に詳細確認、履歴比較、レイヤー切替を促さない。
- 状態不明時は安全側表示とする。
- 静的情報を現在規制として音声案内しない。
- 点滅、強い警告音、自動スクロールだけで状態を伝えない。
- 月次データを安全判断の唯一の根拠にしない。
- 権利・状態不明のデータを警告付きで表示継続しない。

## Accessibility Constraints

- 色だけに依存しない。
- 文字、意味のあるアイコン、アクセシブルネームを使用する。
- キーボード操作、フォーカス順、フォーカス復帰を定義する。
- スクリーンリーダーでレイヤー名、対象年月、状態、注意文を理解できるようにする。
- コントラストはWCAG 2.2 AA相当を目標とする。
- 200%ズーム、文字サイズ拡大、ライト・ダークモードを確認する。
- Google Maps帰属はGoogle公式のアクセシビリティ要件に従う。

## Responsive Constraints

- デスクトップ、タブレット、モバイルを対象にする。
- Google Maps帰属を覆わない。
- 小画面でも静的情報、対象年月、状態を省略しない。
- 出典詳細を折りたたんでも、提供元、対象年月、加工有無、注意文への導線を残す。
- 両方の帰属を表示できない画面サイズではレイヤーNo-Goとする。

## Sharing / Export Constraints

- 共有、スクリーンショット、印刷、エクスポート候補にも出典、対象年月、加工表示、出力日を含める。
- Google Maps標準帰属を画像加工で除去しない。
- 第三者権利台帳でエクスポートが未確認・非許可ならNo-Go。
- 利用者の正確な位置、内部証跡、非公開情報を意図せず含めない。

## Prohibited Expressions

- リアルタイム
- 現在の交通情報
- 最新交通情報
- 現在の渋滞
- 現在通行止め
- 今の規制
- 最新の規制
- 通行可能です
- 安全です
- 常に正確です
- 公式が保証しています

## Implementation Prohibitions

- Figma等の実デザイン作成
- HTML / CSS / React / Next.js / Expo実装
- Google Maps SDK / Maps JavaScript API実装
- JARTICオープンデータの実取得・変換・公開
- Google Maps Datasetsへのアップロード
- APIキー取得
- provider採用決定
- DB / API / 認証 / インフラ設計
- 外部問い合わせ・許諾取得

## Completion Conditions

- 対象画面と画面別必須表示を定義する。
- 常時表示、1操作以内、内部運用を分離する。
- 対象年月、公開更新日、取得日、検証日、権利確認日を分離する。
- JARTIC出典・加工表示・追加帰属を定義する。
- Google Maps帰属とJARTIC出典を分離する。
- 状態モデルと地図描画可否を定義する。
- Web / 将来モバイル、アクセシビリティ、走行状態別要件を定義する。
- 共有・印刷・エクスポートのNo-Go条件を定義する。
- 受け入れ条件とレビュー観点を定義する。
- Source of Truth、ログ、handoffを更新する。
- 実装・provider採用・実データ取得を行わない。

## Validation

- docsのみの差分であること。
- 新規Markdownが空でないこと。
- Source of TruthがIssue #111完了・Issue #113進行中で整合すること。
- 月次データを現在情報へ拡張していないこと。
- 帰属を統合・省略していないこと。
- 色だけに依存していないこと。
- 走行中操作を促していないこと。
- 実装・採用・外部送信へ進んでいないこと。

## Expected PR Title

`docs: JARTIC静的レイヤーの画面表示要件を追加`
