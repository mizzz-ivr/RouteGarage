# Active Issues

## Active

- Issue #124: 断面交通量情報の項目単位第三者権利と位置表示境界を整理する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/124
  - PR: https://github.com/mizzz-ivr/RouteGarage/pull/125
  - Branch: `docs/issue-124-section-traffic-rights`
  - Status: In Progress / PR #125人間レビュー待ち
  - Main document: `docs/registers/jartic-section-traffic-volume-rights-preflight.md`
  - Base register: `docs/registers/jartic-open-data-third-party-rights-register.md`
  - Scope: 項目群、上流由来、第三者権利候補、交通管理リンク・地点位置・DRM依存、利用方法別No-Go、追加証跡
  - Current Decision: 断面交通量情報は`調査中 / No-Go`
  - Data Action: JARTIC ZIP / CSV、有料位置情報を取得・保存・解析しない
  - External Action: 問い合わせ、許諾申請、購入、契約を行わない
  - Implementation: Next.js / Expo / Maps SDK / DB / API / Auth / Infraを実装しない

## Issue #124 Current Gates

### 公開資料上の関係主体

- 各都道府県警察: 車両感知器等による断面交通量の収集主体
- 警察庁: 都道府県警察情報の取りまとめ主体
- JARTIC: 断面交通量情報の公開主体
- 日本交通管理技術協会: 交通管理リンクDBの作成・管理主体で、リンクの著作権を持つと説明
- 日本デジタル道路地図協会: 地点位置情報の地図・位置データ提供に関係する主体

### 項目群別判定

| 項目群 | 項目候補 | 状態 | 公開判定 |
| --- | --- | --- | --- |
| 観測・識別 | 時刻、情報源コード、計測地点番号、名称相当、断面交通量 | 調査中 | No-Go |
| 地域参照 | 2次メッシュコード | 未確認 | No-Go |
| 交通管理リンク参照 | リンク区分、リンク番号、リンク終端距離、リンクバージョン | 第三者権利ありの可能性が高い | No-Go |
| 地点位置派生 | PDF地図、緯度経度、シェープファイル | 別契約・別権利確認必要 | No-Go |

### 利用方法別判定

- JARTIC ZIP / CSV取得: No-Go
- 原本・正規化保存: No-Go
- 数値集計: 将来の条件付き候補だが現時点No-Go
- 数値のみの画面表示: No-Go
- Google Map等への地点・リンク表示: No-Go
- 緯度経度変換: No-Go
- 履歴保存・履歴公開: No-Go
- 生CSV・GeoJSON等のエクスポート: No-Go
- Google Maps Datasetsアップロード: No-Go

### No-Go理由

- 実ファイル名、対象月、地域、原本ハッシュがない。
- JARTIC正式説明書の版・ハッシュを確認していない。
- 項目別の上流由来・権利処理済み範囲が不明である。
- 交通管理リンク参照項目の保存・加工・公衆送信条件が不明である。
- 日本交通管理技術協会の位置情報提供条件を完全確認していない。
- 日本デジタル道路地図協会の権利・利用条件を確認していない。
- 項目除外後の部分利用・集約利用を安全に分離できるか未確認である。

### 再確認期限

- 確認日: 2026-08-04
- 再確認期限: 2026-09-03
- 前倒し条件: JARTICまたは関係団体の公開資料変更を検知した場合は即時再確認
- 期限超過時: `失効・再確認必要 / No-Go`

### 部分利用の最低条件

- 実ファイル・説明書・規約版・ハッシュを台帳登録する。
- 項目定義・欠損条件・版互換性を確認する。
- 項目別の上流由来・第三者権利処理範囲を確認する。
- リンク参照項目が出力・ログ・キャッシュ・バックアップへ残らないことを検証する。
- 計測地点番号・名称・メッシュから位置を再推定できないことを確認する。
- 出典・加工表示・対象年月・非リアルタイム注意を確定する。
- 人間・法務・運用・安全・セキュリティレビューを完了する。

## Recently Completed

- Issue #121 / PR #123: JARTIC静的レイヤーの保持期間・再確認期限・削除SLA暫定基準
  - Merge commit: `bc4489fdcff1a9bfad25f12029a0d3fe201763d3`
- Issue #119 / PR #120: 生活拠点ぼかし・共有出力・外部キャプチャ保護要件
  - Merge commit: `8c3fc97cdd10dc3ce5ba0f78c7cee41a0e2c3a5b`
- Issue #117 / PR #118: 保持・削除レビュー指摘対応
- Issue #115 / PR #116: JARTIC静的レイヤーの保持・削除要件
- Issue #113 / PR #114: 出典・加工・鮮度・安全・プライバシー表示要件
- Issue #111 / PR #112: 第三者権利台帳

## Review Status

- Issue #124: Open
- PR #125: Open / mergeable
- 最終想定`main`比較: 13 commits / 6 files / behind 0
- 変更範囲: docsのみ
- Codexレビュー: P2指摘1件を反映済み
- Codex P2対応: 再確認期限を2026-09-03へ具体化
- Codex review thread: 1件解決済み / 未解決0件
- AI支援セルフレビュー: COMMENTで記録済み
- GitHub Actions / commit status: workflow・status checkなし
- 実データ・有料データ・非公開証跡: なし
- 実装・外部送信: なし
- 人間・法務・運用・安全・セキュリティ・プライバシーレビュー: 未実施

## Upcoming

1. PR #125の人間・法務・運用・安全・セキュリティ・プライバシーレビューを受ける。
2. 公開資料の読み取り、項目群、No-Go境界に関する指摘を反映する。
3. 最新headのreview thread、mergeability、workflow/statusを再確認する。
4. 問題がなければPRマージ・Issue完了・branch削除確認を行う。
5. 追加証跡取得・問い合わせ・購入を別Issueで承認するか判断する。
6. 次の権利調査対象を選定する。
7. 公開利用規約・プライバシーポリシー論点を整理する。
8. provider選定ADR・基本設計の前提を評価する。

## Cross-Cutting Gates

- 交通規制情報、国交省交通量、交差点制御情報は未着手 / No-Go。
- 断面交通量情報は調査中 / No-Go。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Go。
- 公開Repositoryへのデータ本体・位置情報・走行履歴・非公開証跡保存はNo-Go。
- Google Maps Datasets等へのアップロードはNo-Go。
- 実利用者の位置・走行履歴を要件テストへ使用しない。
- PRマージ・Issue Closeはprovider採用・契約・実装・外部送信承認ではない。
- 仕様・契約・法務判断・技術構成確定前に実装しない。
- AI生成物は人間レビュー必須。

## 誤操作記録

2026-08-04、GitHubコネクタ操作中に`main`へ一時ファイル`tmp`を誤作成したが、直ちに削除した。

- 作成コミット: `86a71b1f458efe3c2614ccea8bdbd204f3a531fd`
- 削除コミット: `bc3f13063cddcb2d251972b4e02a9763ac47d9f6`

実作業・要件・データには使用していない。
