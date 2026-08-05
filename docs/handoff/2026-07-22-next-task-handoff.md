# Handoff（2026-08-05 / Issue #126）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 1 / Requirements Definition
- PR #125は2026-08-05にマージ済み、Issue #124はcompleted。
- Issue #126 / PR #127として、JARTIC交通規制情報の項目単位権利・意味・鮮度・安全表示境界をレビュー中。
- 現在判定は`調査中 / No-Go`。
- 公式説明書Ver k_2.1は公開確認・一部予備レビュー済み。
- 全96ページの項目別レビュー、説明書ハッシュ、作成基準日等データ、実ファイルは未確認。
- 実データ取得、外部問い合わせ、契約、実装は行っていない。

## Current Issue / PR / Branch

- Issue #126: https://github.com/mizzz-ivr/RouteGarage/issues/126
- PR #127: https://github.com/mizzz-ivr/RouteGarage/pull/127
- Branch: `docs/issue-126-traffic-regulation-rights-safety`
- Main document: `docs/registers/jartic-traffic-regulation-rights-safety-preflight.md`
- Base register: `docs/registers/jartic-open-data-third-party-rights-register.md`
- Work log: `docs/logs/2026-08-05-issue-126.md`
- AI prompt log: `docs/ai-prompts/2026-08-05-issue-126-traffic-regulation-rights-safety.md`

## PR Status

- State: Open
- Mergeable: true
- PR作成時`main`比較: 6 commits / 6 files / behind 0
- 変更範囲: docsのみ
- AI支援セルフレビュー: COMMENTで記録済み
- Codex自動レビュー: P2指摘2件を反映・返信・解決済み
- 未解決review thread: 0件
- GitHub Actions / commit status: workflow・status checkなし
- 人間の必須レビュー: 未実施

AI支援セルフレビューとCodex指摘対応を、権利確認、法務判断、交通規制解釈、データ品質保証、データ採用の完了とは扱わない。

## Codex Review Fixes

### P2: 公開済み説明書の状態

修正前は正式説明書のURL・版を未確定扱いしていた。

修正後:

- 公式PDF URLを記録
- 文書名、版`k_2.1`、改訂日2025-01-20、96ページを既知証跡として記録
- 一部予備レビュー済みとした
- 全96ページ、別記、全項目・全コードのレビューと文書ハッシュ登録は未完了として分離

### P2: Go解除条件のレビュー領域

次の全領域へ統一した。

- プロダクト
- 法務
- 運用
- 安全
- セキュリティ
- プライバシー
- 交通情報・ナビゲーション領域
- プロジェクト責任者

## Previous Completion

- Issue #124 / PR #125
  - 断面交通量情報の項目単位第三者権利・位置表示境界
  - Merge commit: `c12541038852f84e49614c1cebafbe31c4059260`
  - 結論: `調査中 / No-Go`
- Issue #121 / PR #123
  - JARTIC静的レイヤーの保持期間・再確認期限・削除SLA暫定基準
  - Merge commit: `bc4489fdcff1a9bfad25f12029a0d3fe201763d3`
- Issue #119 / PR #120
  - 生活拠点ぼかし・共有出力・外部キャプチャ保護要件
- Issue #115 / PR #116
  - JARTIC静的レイヤー保持・削除要件
- Issue #113 / PR #114
  - 出典・加工・鮮度・安全・プライバシー表示要件
- Issue #111 / PR #112
  - JARTICオープンデータ第三者権利台帳

PRマージ・Issue Closeは、provider採用、契約、実データ公開、外部問い合わせ、実装開始の承認ではない。

## Official Manual

- 文書: 交通規制情報（拡張版標準フォーマット）説明書
- URL: https://www.jartic.or.jp/d/opendata/typeD_kisei_73_k_2.1.pdf
- 版: `k_2.1`
- 改訂日: 2025-01-20
- ページ数: 96ページ
- 状態: 公開済み / 一部予備レビュー済み / 全項目レビュー未完了
- 文書ハッシュ: 未登録

予備レビュー確認事項:

- 最大73規制種別・170項目へ集約すると説明される。
- CSV仕様と都道府県警察ごとのファイル構成が定義される。
- 点・線・面規制、方向、対象、曜日等のコード表と座標登録方法がある。
- データ更新区分コードにより差分抽出へ対応すると説明される。
- 実際の規制との不一致や未記録規制があり得るため、道路標識・道路標示に従うよう明記される。

## Current Decision

交通規制情報全体を`調査中 / No-Go`とする。

### 概念上の項目群

- 識別・版管理
- 規制内容
- 位置・範囲
- 方向・適用関係
- 時間・有効性
- 根拠・管理

公式説明書に具体項目はあるが、全体レビュー・実ファイル照合未完了のためRouteGarageの確定仕様にはしない。

### 独立安全ゲート

- 権利
- フォーマット版
- 鮮度
- 意味
- 位置・範囲
- 方向
- 対象車両・例外
- 時間・有効性
- 重複・矛盾・廃止
- 表示可否
- ルート探索・通行可否判定への利用可否
- 停止状態

`STOPPED`を最優先する。

## Current Use Decisions

| 利用方法 | 現在判定 |
| --- | --- |
| ZIP / CSV取得 | No-Go |
| 原本・正規化保存 | No-Go |
| 統計集計 | 将来の条件付き候補だが現在No-Go |
| 参考一覧表示 | No-Go |
| 地図・ルート表示 | No-Go |
| ルート探索・通行可否判定 | No-Go |
| 安全運転支援 | No-Go |
| 履歴保存・公開 | No-Go |
| CSV / GeoJSON等エクスポート | No-Go |
| 外部Mapsデータセット登録 | No-Go |

`条件付き候補`は許可ではない。

## Safety No-Go

- 説明書が公開済みであることだけで実データ利用をGoにしない。
- 月次データを現在有効・リアルタイムな規制として案内しない。
- 方向不明を両方向へ拡張しない。
- 対象車両不明を全車両へ拡張しない。
- 終了日時不明を無期限へ拡張しない。
- 位置不明を近隣道路へスナップしない。
- 欠損・矛盾を推定補完してルート探索へ使わない。
- 現地標識・道路標示・警察官等の指示よりアプリを優先させない。
- 表示用途の承認をルート用途へ流用しない。

## Recheck Deadline

- 確認日: 2026-08-05
- 再確認期限: 2026-09-04
- 前倒し条件: JARTIC、警察庁、関連公開資料の変更検知時
- 期限超過時: `失効・再確認必要 / No-Go`

## Missing Evidence

- 公式説明書PDFのハッシュと取得日時
- 全96ページ、別記1・別記2の項目別レビュー
- 作成基準日等データの構造・版・ハッシュ
- 対象月・都道府県・原本ファイル・原本ハッシュ
- 実項目名、型、必須・任意、欠損・不明値の実ファイル照合
- 規制種別、位置、方向、対象、期間、例外の全定義と適用規則
- 更新・廃止・訂正・重複・矛盾の扱い
- 項目別の第三者権利・原典
- 表示・ルート探索・公衆送信・再配布条件
- 交通情報提供指針との適用関係

外部問い合わせ・実データ取得は別Issueで承認後に行う。

## Go Candidate Preconditions

1. 対象都道府県・対象月・利用目的を人間が承認する。
2. 公式説明書全体・作成基準日等データを確認し、版・ハッシュを登録する。
3. 取得前の非公開保管、保持、削除、アクセス権を承認する。
4. 実ファイルの原本ハッシュと系譜を登録する。
5. 項目・コード・欠損・不明値・版互換性を確認する。
6. 項目別の上流由来と第三者権利を確認する。
7. 位置・方向・対象・期間・例外の完全性と矛盾検査を定義する。
8. 月次スナップショットを現在情報と分離する。
9. 表示用途、ルート用途、安全運転支援用途を別々に承認する。
10. 全必須レビュー領域が承認する。

一つでも不明ならNo-Goを維持する。

## Source of Truth Files

- `docs/registers/jartic-traffic-regulation-rights-safety-preflight.md`
- `docs/registers/jartic-open-data-third-party-rights-register.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/logs/2026-08-05-issue-126.md`
- `docs/ai-prompts/2026-08-05-issue-126-traffic-regulation-rights-safety.md`

## Remaining Tasks

1. PR #127の必須レビューを受ける。
2. 公式説明書・公開資料・安全No-Go境界に関する指摘を反映する。
3. 最新headのmergeability、workflow/status、未解決review threadを再確認する。
4. 問題がなければPRマージ・Issue完了・branch削除を確認する。
5. 公式説明書全体・作成基準日等データ・実ファイル確認を別Issueで承認するか判断する。
6. 次のデータセット調査へ進む。

## Notes

- AI生成内容は人間レビュー必須。
- 本書は法的助言、権利確認、交通規制解釈、利用許諾ではない。
- 実データ、非公開証跡、実装、外部送信は扱っていない。
- 仕様・契約・法務判断・技術構成確定前に実装しない。
