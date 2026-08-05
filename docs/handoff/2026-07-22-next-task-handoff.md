# Handoff（2026-08-05 / Issue #126）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 1 / Requirements Definition
- PR #125は2026-08-05にマージ済み。
- Issue #124はcompleted。
- Issue #126として、JARTIC交通規制情報の項目単位権利・意味・鮮度・安全表示境界を公開資料から予備調査中。
- 現在判定は`調査中 / No-Go`。
- 実データ取得、正式説明書取得、外部問い合わせ、契約、実装は行っていない。

## Current Issue / Branch

- Issue #126: https://github.com/mizzz-ivr/RouteGarage/issues/126
- Branch: `docs/issue-126-traffic-regulation-rights-safety`
- Main document: `docs/registers/jartic-traffic-regulation-rights-safety-preflight.md`
- Base register: `docs/registers/jartic-open-data-third-party-rights-register.md`
- Work log: `docs/logs/2026-08-05-issue-126.md`
- AI prompt log: `docs/ai-prompts/2026-08-05-issue-126-traffic-regulation-rights-safety.md`

## Current Status

- Issue #126: Open
- PR: 未作成
- 変更範囲: docsのみ
- 人間・法務・運用・安全・セキュリティ・プライバシー・交通情報領域レビュー: 未実施

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

## Official Sources Checked

確認日: 2026-08-05

### JARTIC

- https://www.jartic.or.jp/service/opendata/
- https://www.jartic.or.jp/d/opendata/riyou_kiyaku.pdf

確認事項:

- 各都道府県警察が保有する交通規制DBを拡張版標準フォーマットへ変換して公開する。
- 都道府県単位のZIPとして提供する。
- 作成基準日・版は「作成基準日等データ」で確認する必要がある。
- 公開説明上の版は`拡張版_K_2.1`である。
- 原則毎月月初更新で、更新前情報は取得できなくなる。
- 複製、公衆送信、加工、商用利用に関する一般説明がある。
- 出典・加工表示が必要である。
- 第三者権利は利用者責任で確認する必要がある。

### 警察庁・SIP

- https://www.npa.go.jp/bureau/traffic/seibi2/kisei/kisei.html
- https://www.npa.go.jp/bureau/traffic/seibi2/kisei/mokuteki/mokuteki.html
- https://www.npa.go.jp/bureau/traffic/seibi2/shinsei-todokede/jouhou/jouhou-hp.html
- https://www.jstage.jst.go.jp/article/sipadusreport/2022/1/2022_67/_article/-char/ja/

確認事項:

- 拡張版標準フォーマットは警察庁がSIP第2期調査研究で取りまとめた。
- 自動運転・安全運転支援での活用、規制方向情報の追加、構造課題解決、精度向上が目的と説明される。
- 交通規制は危険防止、交通の安全と円滑、交通公害防止を目的とする。
- 交通情報提供事業者には正確かつ適切な提供と交通安全への配慮が求められる。

## Current Decision

交通規制情報全体を`調査中 / No-Go`とする。

### 概念上の項目群

正式項目名ではない。

- 識別・版管理
- 規制内容
- 位置・範囲
- 方向・適用関係
- 時間・有効性
- 根拠・管理

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

- 正式説明書の直接URL・版・公開日・ハッシュ
- 作成基準日等データの構造・版管理方法
- 対象月・都道府県・原本ファイル・原本ハッシュ
- 実項目名、型、必須・任意、欠損・不明値
- 規制種別、位置、方向、対象、期間、例外の定義
- 座標系・地物参照・区間方向
- 更新・廃止・訂正・重複・矛盾の扱い
- 項目別の第三者権利・原典
- 表示・ルート探索・公衆送信・再配布条件
- 交通情報提供指針との適用関係

外部問い合わせ・実データ取得は別Issueで承認後に行う。

## Go Candidate Preconditions

1. 対象都道府県・対象月・利用目的を人間が承認する。
2. 正式説明書・作成基準日等データの版・ハッシュを登録する。
3. 取得前の非公開保管、保持、削除、アクセス権を承認する。
4. 実ファイルの原本ハッシュと系譜を登録する。
5. 項目・コード・欠損・不明値・版互換性を確認する。
6. 項目別の上流由来・第三者権利を確認する。
7. 位置・方向・対象・期間・例外の完全性と矛盾検査を定義する。
8. 月次スナップショットを現在情報と分離する。
9. 表示用途、ルート用途、安全運転支援用途を別々に承認する。
10. 法務、運用、安全、セキュリティ、プライバシー、交通情報領域、プロジェクト責任者が承認する。

一つでも不明ならNo-Goを維持する。

## Current Safety / Privacy / Retention Gates

- 表示可否、鮮度、意味、位置、方向、対象、時間、権利を独立管理する。
- 表示停止を物理削除より先に行う。
- 原本から派生物・キャッシュ・バックアップ・外部保存先まで削除を伝播する。
- バックアップ実失効前に削除完了証跡を発行しない。
- 正確位置・生活拠点・走行履歴を公開前提で扱わない。
- Webでは外部キャプチャ完全防止を前提にしない。
- 実データ・非公開証跡を公開Repositoryへ保存しない。

## Source of Truth Files

- `docs/registers/jartic-traffic-regulation-rights-safety-preflight.md`
- `docs/registers/jartic-open-data-third-party-rights-register.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/logs/2026-08-05-issue-126.md`
- `docs/ai-prompts/2026-08-05-issue-126-traffic-regulation-rights-safety.md`

## Remaining Tasks

1. `main`との差分・変更範囲を確認する。
2. PRを作成する。
3. Codexレビュー・AI支援セルフレビューを実施する。
4. 指摘をSource of Truthへ反映する。
5. 人間・法務・運用・安全・セキュリティ・プライバシー・交通情報領域レビューを受ける。
6. 問題がなければPRマージ・Issue完了・branch削除を確認する。
7. 正式説明書・実ファイル取得を別Issueで承認するか判断する。
8. 次のデータセット調査へ進む。

## Notes

- AI生成内容は人間レビュー必須。
- 本書は法的助言、権利確認、交通規制解釈、利用許諾ではない。
- 実データ、正式説明書、非公開証跡、実装、外部送信は扱っていない。
- 仕様・契約・法務判断・技術構成確定前に実装しない。
