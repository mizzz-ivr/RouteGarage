# Handoff（2026-07-29 / Issue #113）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Issue #113 / PR #114でJARTIC静的レイヤーの画面表示要件を整理中。
- Codex指摘はP1 11件・P2 2件、合計13件。
- 実データ取得、UI実装、provider採用、APIキー取得、外部問い合わせは行っていない。
- JARTIC Jシステム / VICS・HEREへの問い合わせは未承認でNo-Go。

## Current Issue / PR / Branch

- Issue #113: https://github.com/mizzz-ivr/RouteGarage/issues/113
- PR #114: https://github.com/mizzz-ivr/RouteGarage/pull/114
- Branch: `docs/issue-113-jartic-display-requirements`
- Phase: Phase 1 / Requirements Definition（画面設計）

## Current Decision

要件文書だけを対象とし、次を保留する。

- JARTICレイヤー公開
- Google Maps Platform / JARTIC採用
- 実データ取得・変換・公開
- Figma / Next.js / Expo / Maps実装
- APIキー・契約・外部問い合わせ

権利台帳の4データセットはすべて`未着手 / No-Go`を維持する。

## Independent State Axes

次を独立して保持する。

1. 表示可否
2. 鮮度状態
3. 検証状態
4. 権利状態

利用者向け状態は4軸から導出する。

`STOPPED` > `LIMITED` > `DISPLAYABLE`

検証未完了・競合・検証失敗、権利失効、期限切れ、安全判断不能時は情報本体を非表示にする。

## Fixed Display Requirements

情報本体表示中は走行状態にかかわらず次を固定表示する。

- レイヤー名・データセット名
- 情報源・提供元
- `参考情報`
- `静的・月次更新情報`
- 対象年月・作成基準日
- 提供元更新時点
- 鮮度状態・検証状態
- 制限表示・キャッシュ表示
- 欠落・遅延・誤差・実際との差異の可能性
- 運転判断の唯一根拠にしない旨
- 詳細操作は安全な場所に停車してから行う旨
- JARTIC出典・RouteGarage加工表示

維持できない画面では情報本体を非表示にする。

## Unknown Driving State

- 走行中と同等の安全側制御を適用する。
- `走行状態を確認できないため、安全のため操作を制限中です`を固定表示する。
- 操作無効化理由を文字と支援技術で説明する。

## Cache Display Requirements

取得失敗時の旧版・キャッシュ表示は次の7条件すべての充足時だけ。

1. 規約・契約上の保存・再表示許可
2. 提供元更新時点を取得済み
3. 事前承認済み有効期限内
4. 契約停止・規約変更・撤回・完全性懸念なし
5. 上流由来・調達経路・検証状態を追跡でき、競合なし
6. 取得失敗中・キャッシュ・提供元更新時点を固定表示可能
7. 制限表示ルール・承認者・承認記録あり

1条件でも不足する場合は`STOPPED`。

## Sharing and Capture Privacy

### アプリ内出力

- 自宅・職場・開始・終了・反復訪問地点周辺の機械的ぼかし
- 道路形状・表示中心・履歴からの再推定リスク確認
- 共有前プレビュー
- ぼかし解除を公開初期値にしない
- 再推定リスクが残る旨の表示

ぼかし方式未確定の間、位置・走行履歴を含む出力はNo-Go。

### ブラウザ印刷

- 印刷専用表示または印刷CSSで正確位置・履歴・生活拠点候補を除去する。
- 印刷プレビューでぼかし、帰属、対象年月、提供元更新時点を確認する。
- 対象ブラウザごとに検証する。
- 安全な印刷結果を保証できない画面では印刷をNo-Goにする。

### OS標準キャプチャ

- OS標準スクリーンショット・画面収録を確実に検知・抑止できると仮定しない。
- アプリ内共有時だけのぼかしで安全要件を満たしたと扱わない。
- 正確位置・履歴を表示する場合は、通常表示時点のマスク、または検証済みキャプチャ保護とプライバシーセーフ表示へのフォールバックを必須とする。
- Webで上記を満たさない場合、正確位置・履歴とJARTICレイヤーの同時表示はNo-Go。
- 注意文やキャプチャ検知だけに依存しない。

## Attribution and Accessibility

- Google Maps帰属とJARTIC出典・加工表示を別責務として扱う。
- Google、JARTIC、RouteGarage由来情報を区別する。
- 状態を色だけで表現しない。
- 必須表示と両方の帰属を維持できない画面では情報本体を非表示にする。
- キーボード、スクリーンリーダー、200%ズーム、文字拡大、ライト・ダークモードを確認する。

## Review Findings

- P1 10件・P2 2件: 修正・返信・thread解決済み
- 外部キャプチャP1 1件: 画面要件・Current Status・handoffへ反映済み。返信・thread解決後に再レビュー
- 修正ログ: `docs/logs/2026-07-29-pr-114-review-fixes.md`

## Inquiry Status

- JARTIC Jシステム / VICS: No-Go（外部送信未承認）
- HERE: No-Go（external submission not approved）
- PRマージ・Issue Closeは外部送信承認ではない。

## Remaining Tasks

1. 外部キャプチャP1へ返信し、threadを解決する。
2. 最新headでCodex再レビューを受ける。
3. 人間・法務・運用・安全・プライバシー・アクセシビリティレビューを受ける。
4. 問題がなければPR #114をマージする。
5. 原本・変換後・履歴・監査メタデータの保持・削除要件を定義する。
6. 生活拠点ぼかし・キャプチャ保護を別Issueで具体化する。

## 注意事項

- AI生成内容は人間レビュー必須。
- 法的助言・provider採用決定ではない。
- UIモック・実装は行っていない。
- 仕様・契約確定前に実装しない。
