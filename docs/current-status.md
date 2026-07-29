# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition（画面設計含む）
- 開発手法: ウォーターフォール
- AI生成物: 人間レビュー必須
- 現在の主目的: Issue #113として、JARTIC静的レイヤーの出典・加工・鮮度・安全・プライバシー表示要件を定義する

## 進行中

- Issue #113: JARTIC静的レイヤーの出典・加工・鮮度表示要件を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/113
  - PR: https://github.com/mizzz-ivr/RouteGarage/pull/114
  - Branch: `docs/issue-113-jartic-display-requirements`
  - Status: Codex P1指摘対応中 / 人間・法務・運用・安全・プライバシー・アクセシビリティレビュー未完了
  - Current Decision: 要件文書のみ。レイヤー公開・provider採用・実装は保留
  - Data Action: 実データ取得・解析・変換・公開を行わない
  - External Action: 問い合わせ・許諾取得を行わない
  - Implementation: Figma / Next.js / Expo / Maps / DB / API / Auth / Infraを実装しない

## 直近の完了済み

- Issue #111 / PR #112: JARTICオープンデータの第三者権利台帳と公開判定手順
- Issue #109 / PR #110: Google Maps + JARTICオープンデータの静的レイヤー利用境界
- Issue #107 / PR #108: Google Maps Platform + Routes APIの契約・保存・帰属境界
- Issue #103 / PR #106: 地図基盤と交通データの組合せ制約比較
- Issue #101 / PR #102: 交通情報提供元問い合わせの送信前レビュー台帳
- Issue #99 / PR #100: JARTIC / VICS・HERE向け問い合わせ文書
- Issue #97 / PR #98: 交通情報データ提供元候補比較
- Issue #93 / PR #96: 交通情報・オービス情報の法務・運用レビュー
- Issue #18 / PR #19: 走行中操作を助長しないUI/UX方針
- Issue #12 / PR #13: 位置情報・走行履歴データポリシー

詳細はGitHubのclosed Issues、merged PRs、`docs/logs/`を正本とする。

## 地図・交通provider組合せの現在評価

| ID | 構成 | 現在評価 |
| --- | --- | --- |
| C-01 | Google Maps Platform + Google Routes API | 条件付き候補 / 基本設計前提としては保留 |
| C-02 | Google Maps Platform + JARTICオープンデータ | 用途限定候補 / 実データ未確認・権利台帳未着手のため公開No-Go |
| C-03 | Google Maps Platform + JARTIC Jシステム / VICS | 要問い合わせ |
| C-04 | Google Maps Platform + HERE Traffic API v7 | 現時点No-Go |
| C-05 | HERE地図基盤 + HERE Traffic API v7 | 条件付き候補 / 問い合わせ未承認 |
| C-06 | 地図非依存backend + 複数provider adapter | 要問い合わせ |

本評価は採用決定ではない。

## C-01 Google Routesの現在境界

- Routes API結果を地図表示する場合はGoogle Mapを使用する。
- 非Google地図との併用はNo-Go。
- Place IDは長期保存候補。
- Google出力緯度経度は適用契約確認後も最大30暦日の期限付き候補。
- polyline、distance、duration、traffic情報は永続保存しない。
- response全体はlog / DB / analytics / backupへ保存しない。
- Google Routes結果とユーザー実走行記録を同一データとして保存しない。

## C-02 JARTICオープンデータの現在境界

### 用途

| データ種別 | 初期評価 | 用途境界 |
| --- | --- | --- |
| 交通規制情報 | 条件付き候補 | 基準年月時点の静的参照。現在有効な一時・緊急規制として表示しない |
| 断面交通量情報 | 条件付き候補 | 月次分析・参考。現在の渋滞・所要時間として表示しない |
| 交通量データ（国土交通省） | 条件付き候補 | 統計・傾向。上流由来・第三者権利を確認する |
| 交差点制御情報 | 内部調査候補 | 公開MVPでは使用しない |

### 権利台帳

| データセット | 状態 | 公開判定 |
| --- | --- | --- |
| 交通規制情報 | 未着手 | No-Go |
| 断面交通量情報 | 未着手 | No-Go |
| 交通量データ（国土交通省） | 未着手 | No-Go |
| 交差点制御情報 | 未着手 | No-Go |

## Issue #113 状態管理の確定方針

### 独立4軸

画面・API・運用では、次を独立して保持する。

1. 表示可否
2. 鮮度状態
3. 検証状態
4. 権利状態

利用者向け状態は4軸から導出する。優先順位は次とする。

`STOPPED` > `LIMITED` > `DISPLAYABLE`

- 検証が`UNVERIFIED`、`CONFLICTED`、`VERIFICATION_FAILED`の場合、通常表示へ進めない。
- 権利失効・非許可・確認中、期限切れ、契約・規約判断不能、安全判断不能時は`STOPPED`。
- 更新遅延・過去版であっても、検証・権利・表示可否条件を満たさない場合は非表示。
- 単一の利用者向け状態コードを4軸の保存値として兼用しない。

### 固定必須表示

JARTIC情報本体を表示する間、走行状態にかかわらず次を固定表示する。

- レイヤー名・データセット名
- 情報源・提供元
- `静的・月次更新情報`
- 対象年月・作成基準日
- 提供元更新時点
- 鮮度状態
- 検証状態
- 制限表示・キャッシュ表示の旨
- 欠落・遅延・誤差・実際の状況との差異の可能性
- 本情報のみを運転判断の唯一の根拠にしない旨
- 詳細操作は安全な場所に停車してから行う旨
- JARTIC出典・RouteGarage加工表示

走行中・状態不明・小画面で上記を維持できない場合は、項目を省略せずJARTICレイヤー本体を非表示にする。

### 取得失敗時の旧版・キャッシュ

次の7条件をすべて満たす場合だけ`LIMITED`候補とする。

1. 規約・契約上の保存・再表示許可
2. 提供元更新時点を取得済み
3. 事前承認済みキャッシュ有効期限内
4. 契約停止、規約変更、撤回、無効化、改ざん・完全性懸念なし
5. 上流由来、調達経路、検証状態を追跡でき、競合なし
6. `現在取得失敗中`、`キャッシュ情報`、`提供元更新時点`を固定表示可能
7. 制限表示ルール、承認者、承認記録あり

1条件でも不足する場合は`STOPPED`。有効期限内でも撤回、完全性懸念、権利失効、安全判断不能時は停止する。

### 共有・生活拠点プライバシー

共有・スクリーンショット・印刷・エクスポート前に次を必須とする。

- 自宅・職場・走行開始地点・走行終了地点・反復訪問地点周辺への機械的ぼかし
- 現在位置マーカーだけでなく、道路形状・表示中心・履歴からの生活拠点再推定リスク確認
- 共有前プレビューで、ぼかし結果・対象範囲・帰属・対象年月を確認
- ぼかし解除を公開初期値にしない
- ぼかし後も再推定リスクが残る旨を表示

ぼかしアルゴリズム・距離閾値が未確定の間、位置・走行履歴を含む共有出力はNo-Go。

### 帰属・アクセシビリティ

- Google Maps帰属とJARTIC出典・RouteGarage加工表示を別責務として扱う。
- Google、JARTIC、RouteGarage由来情報を区別する。
- 状態を色だけで表現しない。
- Google Maps帰属を削除、非表示、隠蔽、改変しない。
- 必須表示と両方の帰属を維持できない画面ではJARTICレイヤーを表示しない。
- キーボード、スクリーンリーダー、200%ズーム、文字拡大、ライト・ダークモードを確認する。

## PR #114 レビュー状況

- Codex P1指摘: 合計10件（本文・Source of Truth同期を含む）
- 本文指摘5件: 修正・返信・thread解決済み
- Source of Truth指摘5件: 本commitで同期修正
- 修正ログ: `docs/logs/2026-07-29-pr-114-review-fixes.md`
- 人間・法務・運用・安全・プライバシー・アクセシビリティレビュー: 未完了

## 問い合わせ送信ゲート

| 提供元 | 現在判定 | 主な理由 |
| --- | --- | --- |
| JARTIC Jシステム / VICS | No-Go | 運営主体・担当者・対象commit・承認・証跡・外部送信承認が未完了 |
| HERE Traffic API v7 | No-Go | 上記に加え、英語表現と日本向け契約条件が未確認 |

PRマージやIssue Closeは外部送信承認ではない。

## 未完了

- Issue #113の再レビューと人間・法務・運用・安全・プライバシー・アクセシビリティレビュー
- 原本・変換後・履歴・監査メタデータの保持・削除要件
- 実データ候補の選定とファイル・項目単位の第三者権利調査
- 自宅周辺ぼかしアルゴリズム・距離閾値
- Google Maps Datasets等へのアップロード可否
- RouteGarage公開利用規約・プライバシーポリシー論点
- Google Maps Platform契約主体・請求先・適用文書版
- provider選定ADR・基本設計
- DB / API / 認証 / 地図連携設計
- Next.js / Expo初期構築

## 触ってはいけない箇所

- JARTIC実データの取得・解析・変換・公開
- Google Maps Datasetsへのアップロード
- 第三者への問い合わせ・許諾取得
- Figma等の実デザイン作成
- Next.js / Expo / Maps SDK実装
- DB / API / 認証 / インフラ実装
- APIキー・トライアル取得
- provider採用決定
- 外部問い合わせ送信

## 次の優先作業

1. PR #114のCodex再レビューと人間レビューを完了する。
2. 原本・変換後・履歴・監査メタデータの保持・削除要件を定義する。
3. 自宅周辺ぼかし要件を別Issueで具体化する。
4. 実データ候補の第三者権利調査を行う。
5. 公開利用規約・プライバシーポリシー論点を整理する。

## Branch Cleanup

- `docs/issue-111-jartic-third-party-rights-register`: 削除済み
- `docs/issue-113-jartic-display-requirements`: PRマージ後に削除確認
