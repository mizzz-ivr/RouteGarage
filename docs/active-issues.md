# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

詳細な完了履歴はGitHubのclosed Issues、merged PRs、`docs/current-status.md`、`docs/logs/`を正本とする。

## Active

- Issue #113: JARTIC静的レイヤーの出典・加工・鮮度表示要件を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/113
  - PR: https://github.com/mizzz-ivr/RouteGarage/pull/114
  - Status: In Progress / Codex P1指摘10件修正・返信・thread解決済み / 再レビュー待ち
  - Branch: `docs/issue-113-jartic-display-requirements`
  - Scope: 地図、凡例、詳細、履歴、停止、共有・印刷における出典・加工・対象年月・安全状態・プライバシー表示を定義する
  - Current Decision: 要件文書のみ。レイヤー公開・provider採用・実装は保留
  - Data Action: 実データ取得・解析・変換・公開を行わない
  - External Action: 問い合わせ・許諾取得を行わない
  - Implementation: Figma / Next.js / Expo / Maps / DB / API / Auth / Infraを実装しない

## Recently Completed

### Issue #111: JARTICオープンデータの第三者権利台帳と公開判定手順を定義する

- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/112
- Note: 権利台帳、利用方法別判定、失効・再確認、停止・再開、公開／非公開証跡境界を定義。4データセットは未着手 / No-Go。

### Issue #109: Google Maps + JARTICオープンデータの静的レイヤー利用境界を整理する

- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/110
- Note: 月次・静的用途、出典・加工、第三者権利、保存、Google Maps帰属、提供停止境界を整理。

### Issue #107: Google Maps Platform + Routes APIの契約・保存・帰属境界を整理する

- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/108
- Note: Google Routesの表示、保存、帰属、監査、プライバシー、SLA境界を整理。

## C-01 Current Boundaries

| 項目 | 初期方針 |
| --- | --- |
| Google Map上のRoutes結果 | 条件付き候補 |
| 非Google地図との併用 | No-Go |
| Place ID保存 | 長期保存候補 |
| Google出力緯度経度 | 適用契約確認後も最大30暦日の期限付き候補 |
| polyline / distance / duration / traffic情報 | 永続保存しない |
| response全体 | log / DB / analytics / backupへ保存しない |

## C-02 Current Boundaries

| 項目 | 初期方針 |
| --- | --- |
| 交通規制情報 | 基準年月付き静的参照の条件付き候補 |
| 断面交通量情報 | 月次分析・参考表示の条件付き候補 |
| 交通量データ（国土交通省） | 上流由来・第三者権利確認付き候補 |
| 交差点制御情報 | 内部調査候補。公開MVPでは使用しない |
| ライブ交通用途 | No-Go |
| 権利台帳初期状態 | 4データセットすべて未着手 / No-Go |
| Google Maps Datasetsへのアップロード | No-Go / 別途レビュー |

## Issue #113 Current Gates

### 独立状態軸

- 表示可否、鮮度、検証、権利状態を独立保持する。
- 利用者向け状態は4軸から導出する。
- 優先順位は `STOPPED` > `LIMITED` > `DISPLAYABLE`。
- `UNVERIFIED`、`CONFLICTED`、`VERIFICATION_FAILED`では通常表示へ進めない。
- 更新遅延・過去版でも、検証・権利・表示可否を満たさなければ情報本体を非表示にする。

### 固定必須表示

情報本体の表示中は、走行状態にかかわらず次を維持する。

- レイヤー名・データセット名
- 情報源・提供元
- 静的・月次更新情報
- 対象年月・作成基準日
- 提供元更新時点
- 鮮度状態・検証状態
- 制限表示・キャッシュ表示
- 欠落・遅延・誤差・実際との差異の可能性
- 運転判断の唯一根拠にしない旨
- 詳細操作は安全な場所に停車してから行う旨
- JARTIC出典・RouteGarage加工表示

走行中・状態不明・小画面で維持できない場合は項目を省略せず、JARTICレイヤー本体を非表示にする。

### 取得失敗時のキャッシュ

次の7条件をすべて満たす場合だけ制限表示候補とする。

1. 規約・契約上の保存・再表示許可
2. 提供元更新時点を取得済み
3. 事前承認済み有効期限内
4. 契約停止・規約変更・撤回・完全性懸念なし
5. 上流由来・調達経路・検証状態を追跡でき、競合なし
6. 取得失敗中・キャッシュ・提供元更新時点を固定表示可能
7. 制限表示ルール・承認者・承認記録あり

1条件でも不足する場合は`STOPPED`。

### 共有・プライバシー

- 自宅・職場・開始・終了・反復訪問地点周辺の機械的ぼかしを必須とする。
- 道路形状・表示中心・履歴からの生活拠点再推定リスクも確認する。
- 共有前プレビューでぼかし結果・対象範囲・帰属・対象年月を確認する。
- ぼかし解除を公開初期値にしない。
- ぼかし方式が未確定の間、位置・走行履歴を含む共有出力はNo-Go。

### 帰属・アクセシビリティ

- Google Maps帰属とJARTIC出典・加工表示を別責務として扱う。
- Google、JARTIC、RouteGarage由来情報を区別する。
- 状態を色だけで表現しない。
- 権利確認中、非許可、失効、提供停止の地物は描画しない。
- キーボード、スクリーンリーダー、200%ズーム、文字拡大、ライト・ダークモードを確認する。

## Review Status

- Codex P1指摘: 合計10件
- 画面要件本文5件: 修正・返信・解決済み
- Current Status / handoff同期5件: 修正・返信・解決済み
- 主な修正commit:
  - `cefaf2bff7a05ba17eb6e4f32c3a53cf7b714332`
  - `eb4bd83a0d480c5ea459b8501f358d6bec1fa303`
  - `5223a720c536977337823080283d8dc271d2b7c6`
  - `fc51825b0ac4d58522b98a14322af94d6e635a49`
- 再レビュー: 最新headへ依頼する
- 人間・法務・運用・安全・プライバシー・アクセシビリティレビュー: 未完了

## Cross-Cutting Gates

- PRマージやIssue Closeはprovider採用・契約・外部送信の承認ではない。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Go。
- 仕様・契約確定前に実装しない。

## Upcoming Candidates

1. Issue #113のCodex再レビューと人間・法務・運用・安全・プライバシー・アクセシビリティレビュー
2. 原本・変換後・履歴・監査メタデータの保持・削除要件
3. 自宅周辺ぼかしアルゴリズム・距離閾値
4. 実データ候補とファイル・項目単位の第三者権利調査
5. RouteGarage公開利用規約・プライバシーポリシー論点整理
6. Google Maps Platform契約主体・請求先・適用文書確認
7. provider選定ADR・基本設計

## 更新ルール

- Issue作成・Close・優先度変更時に更新する。
- Activeは原則1件に絞る。
- 詳細な履歴はGitHubと`docs/logs/`を参照する。
