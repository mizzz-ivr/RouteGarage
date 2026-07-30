# Active Issues

## Active

- Issue #113: JARTIC静的レイヤーの出典・加工・鮮度表示要件を定義する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/113
  - PR: https://github.com/mizzz-ivr/RouteGarage/pull/114
  - Status: In Progress / Codex指摘13件対応中
  - Branch: `docs/issue-113-jartic-display-requirements`
  - Current Decision: 要件文書のみ。実データ、provider採用、UI実装、外部問い合わせは保留

## Current Gates

### 独立状態軸

- 表示可否、鮮度、検証、権利を独立保持する。
- 利用者向け状態は4軸から導出する。
- `STOPPED` > `LIMITED` > `DISPLAYABLE`。
- 検証未完了・競合・検証失敗、権利失効、期限切れ、安全判断不能時は情報本体を非表示にする。

### 固定必須表示

情報本体表示中は走行状態にかかわらず次を固定表示する。

- 情報源・提供元
- `参考情報`
- 静的・月次更新情報
- 対象年月・提供元更新時点
- 鮮度・検証状態
- 制限・キャッシュ表示
- 情報限界と安全注意
- JARTIC出典・RouteGarage加工表示

維持できない画面では情報本体を非表示にする。

### 状態不明時

- `走行状態を確認できないため、安全のため操作を制限中です`を固定表示する。
- 操作無効化理由を文字と支援技術で説明する。

### キャッシュ表示

旧版・キャッシュ表示は、契約許可、提供元更新時点、承認済み期限、停止・撤回・完全性、由来・検証追跡、固定警告、承認記録の7条件すべてを満たす場合だけ候補とする。

### 共有・外部キャプチャ

- アプリ内共有前に生活拠点ぼかしとプレビューを必須とする。
- ブラウザ印刷では印刷専用表示・印刷CSSで正確位置・履歴を除去する。
- OS標準スクリーンショット・画面収録をアプリ内共有処理だけで防げると仮定しない。
- 正確位置・履歴表示には、通常表示マスク、または検証済みキャプチャ保護と安全なフォールバックを必須とする。
- Webで上記を満たさない場合、正確位置・履歴とJARTICレイヤーの同時表示はNo-Go。

## Review Status

- Codex P1: 11件
- Codex P2: 2件
- P1 10件・P2 2件: 修正・返信・thread解決済み
- 外部キャプチャP1: 画面要件・Current Status・handoff・Active Issueへ反映済み。返信・thread解決後に再レビュー
- 人間・法務・運用・安全・プライバシー・アクセシビリティレビュー: 未完了

## Recently Completed

- Issue #111 / PR #112: 第三者権利台帳
- Issue #109 / PR #110: JARTIC静的レイヤー利用境界
- Issue #107 / PR #108: Google Routes契約・保存・帰属境界

## Upcoming

1. PR #114の再レビューと人間レビュー
2. 原本・変換後・履歴・監査メタデータの保持・削除要件
3. 生活拠点ぼかし・外部キャプチャ保護の具体化
4. 実データ候補の第三者権利調査
5. provider選定ADR・基本設計

## Cross-Cutting Gates

- 権利台帳4データセットは未着手 / No-Go。
- JARTIC / VICS・HEREへの問い合わせは未承認でNo-Go。
- PRマージ・Issue Closeはprovider採用・契約・外部送信承認ではない。
- 仕様・契約確定前に実装しない。
