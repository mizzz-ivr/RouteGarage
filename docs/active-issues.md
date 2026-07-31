# Active Issues

## Active

- Issue #119: 生活拠点ぼかし・共有出力・外部キャプチャ保護要件を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/119
  - Branch: `docs/issue-119-location-privacy-capture`
  - Status: In Progress / 要件文書作成・Source of Truth同期中
  - Scope: 機微地点・機微パターン分類、プライバシー変換、共有前プレビュー、Web印刷、iOS / Androidキャプチャ保護、失敗時フォールバック、テストマトリクス
  - Current Decision: 要件定義のみ。ぼかし具体値、アルゴリズム、ライブラリ、対象OS、実装は未確定
  - Data Action: 実位置情報・実走行履歴を取得・保存・変換しない
  - External Action: provider問い合わせ・契約・APIキー取得を行わない
  - Implementation: Next.js / Expo / Maps SDK / DB / API / Auth / Infra / Storageを実装しない

## Issue #119 Current Gates

### 位置分類

- `EXACT_PRIVATE`: 正確な現在位置、原GPS、正確な開始終了地点、非公開走行軌跡
- `SENSITIVE_DERIVED`: 生活拠点候補、反復訪問地点、長時間滞在地点、推定自宅・職場
- `PRIVACY_REDUCED`: 承認済み変換後の経路・地域・地点
- `PUBLIC_NON_LOCATION`: 位置を含まない公開可能な概要

分類不能な情報は`EXACT_PRIVATE`相当として扱う。

### 再推定リスク

- 開始・終了座標だけでなく道路形状、端点、時刻、反復訪問、複数記録の重ね合わせを評価する。
- 地図中心、ズーム、ラベル、地名、画像EXIF、説明文、施設名からの推定を評価する。
- 単純な座標丸め・円表示だけで`PRIVACY_REDUCED`と扱わない。
- 再推定リスクを評価できない場合は経路公開No-Go。

### プライバシー変換

- 機微地点周辺の経路除去・切り詰め・粗粒度化・集約を後続設計候補とする。
- 正確な開始・終了地点を公開しない。
- 複数公開記録を組み合わせても生活拠点を推定しにくいことを確認する。
- 変換後に公開価値が成立しない場合は経路を公開せず概要情報だけを候補とする。
- ぼかし距離・時間・訪問回数等の具体値は未確定とする。

### Web

- OSスクリーンショット・画面収録を確実に抑止できる前提を置かない。
- 公開・共有可能画面は通常表示の時点でプライバシーセーフにする。
- 右クリック禁止、キー操作禁止、透かし、注意文だけを安全対策として扱わない。
- 印刷・PDFでは印刷専用表示または`@media print`で機微情報を除外する。

### iOS / Android

- キャプチャ抑止、キャプチャ検知、アプリスイッチャー保護を独立状態として扱う。
- 検知可能でも抑止済みとは扱わない。
- 対象OS・端末・画面状態で実機検証する前に保護済みと判断しない。
- 保護利用不可・失敗・状態不明時はプライバシーセーフ表示へフォールバックする。

### 共有・印刷・エクスポート

- 共有前プレビューと実出力へ同じデータ版・変換版・描画条件を適用する。
- URL、OGP、サムネイル、HTML、クライアントデータへ原座標を埋め込まない。
- 一般エクスポートへ精密位置・原走行軌跡を含めない。
- 削除・取消・公開範囲変更を共有URL・OGP・キャッシュへ伝播する。

### 失敗時

1. 精密位置・機微情報を非表示
2. 承認済み`PRIVACY_REDUCED`へ切替
3. 位置を含まない概要だけ表示
4. 表示・共有・印刷・エクスポートをブロック

警告表示だけで精密情報を継続表示しない。

### 監査・データ最小化

- 精密座標、原走行軌跡、生活拠点候補値、非変換画像を一般ログ・公開Repositoryへ保存しない。
- テストには実利用者データを使わず、承認済みの合成・匿名データを使用する。
- プレビュー版・出力版の一致、変換ポリシー版、能力状態、結果を最小監査メタデータ候補とする。

## Recently Completed

- Issue #117 / PR #118: PR #116の保持・削除レビュー指摘対応
  - Merge commit: `f452af33b9677c2b66d8b160f0b913dec57e54fe`
  - Issue: completed
  - PR #116 review thread: 12件すべて解決済み
- Issue #115 / PR #116: JARTIC静的レイヤーの保持・削除要件
  - Merge commit: `0c1b67f5a849a74f90e00ce7f9f1c338ccacbfe5`
- Issue #113 / PR #114: JARTIC静的レイヤーの出典・加工・鮮度・安全・プライバシー表示要件
- Issue #111 / PR #112: 第三者権利台帳
- Issue #109 / PR #110: JARTIC静的レイヤー利用境界
- Issue #107 / PR #108: Google Routes契約・保存・帰属境界

## Review Status

- Issue #119: Open
- 要件文書: 作成済み
- Source of Truth同期: 進行中
- 公式資料確認: Expo / Android / iOS / Web印刷を確認済み
- 実装・実データ・外部送信: なし
- 人間・法務・運用・安全・セキュリティ・プライバシー・アクセシビリティ・各プラットフォームレビュー: 未実施

## Upcoming

1. Issue #119のSource of Truth・handoff・記録同期
2. Issue #119のPR作成とレビュー
3. レビュー指摘反映、未解決thread・mergeability・status確認
4. 問題がなければPRマージ・Issue完了・branch削除確認
5. データ分類ごとの具体的保持期間・再確認期限・削除SLA
6. 実データ候補のファイル・項目単位第三者権利調査
7. 公開利用規約・プライバシーポリシー論点整理
8. provider選定ADR・基本設計

## Cross-Cutting Gates

- 権利台帳4データセットは未着手 / No-Go。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Go。
- 公開Repositoryへのデータ本体・位置情報・走行履歴・非公開証跡保存はNo-Go。
- Google Maps Datasets等へのアップロードはNo-Go。
- 実利用者の位置・走行履歴を要件テストへ使用しない。
- PRマージ・Issue Closeはprovider採用・契約・実装・外部送信承認ではない。
- 仕様・契約・法務判断・技術構成確定前に実装しない。
- AI生成物は人間レビュー必須。
