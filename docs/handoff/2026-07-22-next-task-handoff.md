# Handoff（2026-07-31 / Issue #119）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- PR #118は2026-07-31にマージ済み。
- Issue #117は`completed`。
- Issue #119を作成し、生活拠点ぼかし・共有出力・外部キャプチャ保護要件を定義した。
- PR #120を作成し、要件文書、作業ログ、AIプロンプトログ、Source of Truthをレビュー可能な状態へ同期した。
- PR #120は`open / mergeable`、review thread 0件、workflow・commit status checkなし。
- Codexレビューは利用上限のため実施できていない。
- 実位置情報・実走行履歴、実装コード、provider採用、APIキー取得、外部問い合わせは扱っていない。
- JARTIC Jシステム / VICS・HEREへの問い合わせは未承認でNo-Go。

## Current Issue / PR / Branch

- Issue #119: https://github.com/mizzz-ivr/RouteGarage/issues/119
- PR #120: https://github.com/mizzz-ivr/RouteGarage/pull/120
- Branch: `docs/issue-119-location-privacy-capture`
- Phase: Phase 1 / Requirements Definition
- Main document: `docs/requirements/location-privacy-blur-capture-protection-requirements.md`

## Previous Completion

- Issue #117 / PR #118
  - PR #116の保持・削除レビュー指摘を反映
  - Merge commit: `f452af33b9677c2b66d8b160f0b913dec57e54fe`
  - Issue: completed
  - PR #116 review thread: 12件すべて解決済み
- Issue #115 / PR #116
  - JARTIC静的レイヤー候補の保持・削除要件
  - Merge commit: `0c1b67f5a849a74f90e00ce7f9f1c338ccacbfe5`
- Issue #113 / PR #114
  - JARTIC静的レイヤーの出典・加工・鮮度・安全・プライバシー表示要件
- Issue #111 / PR #112
  - JARTICオープンデータ第三者権利台帳
- Issue #109 / PR #110
  - JARTIC静的レイヤー利用境界

PRマージ・Issue Closeは、Google Maps Platform / JARTIC採用、実データ公開、外部問い合わせ、実装開始の承認ではない。

## Task Selection

具体的保持期間・削除SLAは、provider、契約、権利台帳、法務判断、バックアップ構成への依存が大きいため、現時点で具体値を確定しない。

生活拠点ぼかし・外部キャプチャ保護は、既存の位置情報ポリシーとIssue #113で後続Issue化されており、実装・実データなしで安全境界を定義できるため優先した。

## Current Decision

Issue #119では要件と検証ゲートだけを定義する。

次を保留する。

- ぼかし距離・時間・訪問回数・滞在時間の具体値
- 生活拠点・反復訪問の検出アルゴリズム
- 経路切り詰め・粗粒度化方式
- 再推定リスクの合格基準
- Next.js / Expo / Maps SDK実装
- `expo-screen-capture`等のライブラリ採用・導入
- 対象iOS / Androidバージョン・端末
- DB・API・認証・ストレージ・監視
- 実位置情報・実走行履歴の取得・保存・変換
- provider採用、契約、APIキー取得、外部問い合わせ
- 法的助言・プライバシーポリシー最終文言

## Issue #119 Requirements

### 1. 位置分類

- `EXACT_PRIVATE`: 正確な現在位置、原GPS、正確な開始終了地点、原走行軌跡
- `SENSITIVE_DERIVED`: 生活拠点候補、反復訪問、長時間滞在、推定自宅・職場
- `PRIVACY_REDUCED`: 承認済み変換後の経路・地域・地点
- `PUBLIC_NON_LOCATION`: 位置を含まない公開可能な概要

分類不能時は`EXACT_PRIVATE`相当とする。

### 2. 再推定リスク

次を単独・組合せで評価する。

- 開始・終了地点
- 道路形状・一本道・袋小路
- 反復訪問・長時間滞在
- 時刻・曜日
- 複数走行記録の共通端点
- 地図中心・ズーム・地名・ランドマーク
- EXIF・説明文・施設名・プロフィール・車両情報

単純な座標丸め・円表示だけで安全と扱わない。

### 3. プライバシー変換

- 機微地点周辺の経路除去
- 端点切り詰め
- 地域・道路区分への粗粒度化
- 複数点の集約
- 公開用経路と本人用経路の分離
- 表示中心・ズーム・ラベルの安全化
- EXIF・位置メタデータ除去

正確な開始・終了地点を公開しない。

複数記録を組み合わせても生活拠点を推定しにくいことを確認する。

変換後に経路の公開価値が成立しない場合は、位置を含まない概要だけを候補とする。

### 4. 具体値

ぼかし距離・時間・訪問回数等は本Issueで確定しない。

後続設計では、都市・郊外・過疎地域、道路トポロジー、複数記録の再推定、公開範囲、共有解像度、合成・匿名データによる攻撃者視点評価を用いる。

具体値には、プロダクト、プライバシー、セキュリティ、法務の人間承認を必要とする。

### 5. Web

- OSスクリーンショット・画面収録の確実な抑止を前提にしない。
- 公開・共有可能画面は通常表示の時点でプライバシーセーフにする。
- 右クリック禁止、キー操作禁止、透かし、注意文を最低保護基準の代替にしない。
- 印刷・PDFでは印刷専用表示または`@media print`で機微情報を除外する。

### 6. iOS / Android

独立能力:

1. キャプチャ抑止
2. キャプチャ検知
3. アプリスイッチャー・バックグラウンド保護

検知できても抑止済みとは扱わない。

公式API・ライブラリが存在しても、対象OS・端末・画面状態・ミラーリング・画面共有・バックグラウンドの実機検証前に保護済みと判断しない。

### 7. フォールバック

1. 精密位置・機微情報を非表示
2. 承認済み`PRIVACY_REDUCED`へ切替
3. 位置を含まない概要だけ表示
4. 画面・共有・印刷・エクスポートをブロック

警告表示だけで精密情報を継続表示しない。

### 8. 共有前プレビュー

最低限次を確認する。

- 出力種別・公開範囲
- 変換後の地図・経路・地点
- マスクされた対象
- 表示中心・ズーム・地名・時刻粒度
- 帰属・対象時点・参考情報
- プライバシー変換版
- 再推定リスクがゼロではない旨

プレビューと実出力のデータ版・変換版・描画条件が不一致なら出力No-Go。

### 9. URL・OGP・印刷・エクスポート

- URL、OGP、サムネイル、HTML、クライアントデータへ原座標を含めない。
- 印刷・PDFへ精密位置・原走行軌跡を含めない。
- 一般エクスポートへ`EXACT_PRIVATE`・`SENSITIVE_DERIVED`を含めない。
- 削除・取消・公開範囲変更を共有URL・OGP・キャッシュへ伝播する。

### 10. 監査・データ最小化

保存候補:

- 不透明な内部ID
- 公開範囲
- プライバシー分類
- 変換ポリシー版
- プレビュー・実出力一致結果
- キャプチャ能力状態
- 対象OS・アプリ・ブラウザ版
- 結果・失敗理由区分・参照ID

保存禁止:

- 正確な緯度・経度
- 原走行軌跡
- 生活拠点候補の座標・名称
- 非変換画像
- 位置付きEXIF
- 復元可能な位置断片

## Official References

確認日: 2026-07-31

- Expo ScreenCapture: https://docs.expo.dev/versions/latest/sdk/screen-capture/
- Android `FLAG_SECURE`: https://developer.android.com/reference/android/view/WindowManager.LayoutParams#FLAG_SECURE
- iOS `UISceneCaptureState`: https://developer.apple.com/documentation/uikit/uiscenecapturestate
- iOS capture notification: https://developer.apple.com/documentation/uikit/uiscreen/captureddidchangenotification
- Web printing: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Printing

公式APIの存在を完全保護保証として扱わない。

## Test Matrix

### データ・再推定

- 単一記録の開始・終了・道路形状
- 複数記録の共通端点・時間帯
- 都市・郊外・過疎地域
- 一本道・袋小路・単独施設
- 短距離走行
- EXIF・地名・説明・時刻・ID
- 表示中心・ズーム・サムネイル

### Web

- 通常表示
- 印刷プレビュー
- PDF保存
- 印刷CSS無効・読込失敗
- JavaScript無効・イベント未発火
- OGP・検索・キャッシュ

### iOS / Android

- スクリーンショット
- 画面収録・画面共有
- ミラーリング・外部表示候補
- アプリスイッチャー・最近使ったアプリ
- バックグラウンド・中断
- マルチウィンドウ候補
- 保護API利用不可・失敗
- アプリ再起動・画面遷移

### 共有・取消

- プレビューと出力の一致
- 公開範囲変更後の再プレビュー
- 削除・取消後のURL・OGP・キャッシュ停止
- 帰属・対象時点・安全注意の維持

実利用者データを使用せず、承認済みの合成・匿名データを使用する。

## Source of Truth Files

- `docs/requirements/location-privacy-blur-capture-protection-requirements.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/logs/2026-07-31-issue-119.md`
- `docs/ai-prompts/2026-07-31-issue-119-location-privacy-capture.md`

## External Workspaces

- Linear Project: https://linear.app/mizzzjp/project/routegarage-71286ad9056c
  - Issue #119 / PR #120へ同期済み
  - 無料Issue上限のためGitHub Issue #119を実行タスクの正本とする
- Notion Hub: https://app.notion.com/p/3ad7322f39fa81e9be8fe370b4140720
  - Issue #119 / PR #120、要件・レビューゲートへ同期済み

## Review Status

- Issue #119: Open
- PR #120: Open / mergeable
- `main`比較: 9 commits / 6 files / behind 0
- 変更範囲: docsのみ
- PR #120 review thread: 0件
- PR #120 submitted review: 0件
- GitHub Actions / commit status: workflow・status checkなし
- Codexレビュー: 利用上限のため未実施
- 人間・法務・運用・安全・セキュリティ・プライバシー・アクセシビリティ・各プラットフォームレビュー: 未実施

## Remaining Tasks

1. AI支援セルフレビュー結果をPR #120へ参考コメントとして記録する。
2. 人間・法務・運用・安全・セキュリティ・プライバシー・アクセシビリティ・各プラットフォームレビューを受ける。
3. 指摘があれば同一branchで修正する。
4. 問題がなければPRをマージする。
5. Issue #119のcompletedとbranch削除を確認する。
6. 後続候補として具体的保持期間・削除SLA、第三者権利調査、公開規約論点を開始する。

## 注意事項

- AI生成内容は人間レビュー必須。
- 法的助言・プライバシー影響評価の最終結論ではない。
- 公式APIの存在を完全保護保証として扱わない。
- 実位置情報・実走行履歴・実装・外部送信は行っていない。
- ぼかし距離等の具体値を確定していない。
- 仕様・法務判断・技術検証確定前に実装しない。
