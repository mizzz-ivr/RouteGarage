# Issue #119 AIプロンプトログ

- 日付: 2026-07-31
- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/119
- Repository: `mizzz-ivr/RouteGarage`
- Branch: `docs/issue-119-location-privacy-capture`
- AI支援: ChatGPT
- AI生成物: 人間レビュー必須

## 依頼

PR #118マージ後の次タスクを進める。

## AIへ与えた作業方針

1. RepositoryのIssue・PR・Source of Truthを確認する。
2. PR #118とIssue #117の完了を確認する。
3. Open Issueがない場合、記録済みの後続候補から安全に進められる次タスクを選定する。
4. 仕様確定前の実装、実位置情報取得、provider採用、外部送信を行わない。
5. 次タスクはIssue起点とし、1PR 1目的を維持する。
6. ブランチ名に`codex`を含めない。
7. PR、Issue、コミット、作業ログを日本語で記録する。
8. 位置情報・走行履歴・生活拠点を公開Repository・一般ログへ保存しない。
9. ぼかし距離等の具体値を勝手に確定しない。
10. Web / iOS / Androidの外部キャプチャ保護能力を同一視しない。
11. 公式資料を確認し、検知・抑止・アプリスイッチャー保護・印刷対策を分離する。
12. AI生成内容は人間レビュー必須とする。

## 確認したRepository文書

- `AGENTS.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/policies/location-and-drive-log-data-policy.md`
- `docs/policies/driving-safety-ui-policy.md`
- `docs/ui/jartic-static-layer-display-requirements.md`
- `docs/requirements/jartic-static-layer-data-retention-deletion-requirements.md`
- `docs/requirements/jartic-static-layer-data-retention-deletion-review-fixes.md`

## 確認した外部公式資料

確認日: 2026-07-31

### Expo

- https://docs.expo.dev/versions/latest/sdk/screen-capture/

確認目的:

- スクリーンショット・画面録画抑止候補
- スクリーンショット検知候補
- iOSアプリスイッチャー保護候補
- Androidバージョン別の検知権限差

### Android

- https://developer.android.com/reference/android/view/WindowManager.LayoutParams#FLAG_SECURE

確認目的:

- secure Windowのスクリーンショット・非セキュアディスプレイ保護候補

### iOS

- https://developer.apple.com/documentation/uikit/uiscenecapturestate
- https://developer.apple.com/documentation/uikit/uiscreen/captureddidchangenotification

確認目的:

- 録画・ミラーリング等のcapture state検知候補
- 旧`UIScreen.isCaptured`依存を避け、後続設計時に最新APIを再確認する必要性

### Web

- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Printing

確認目的:

- `@media print`
- 印刷専用スタイルシート
- `beforeprint` / `afterprint`

## タスク選定

次の候補を比較した。

### 候補A: データ分類ごとの具体的保持期間・削除SLA

- provider、契約、権利台帳、法務判断、バックアップ構成への依存が大きい。
- 現時点で具体値を確定すると、既存のNo-Go方針に反する可能性がある。

### 候補B: 生活拠点ぼかし・外部キャプチャ保護

- 既存ポリシー・Issue #113で後続Issue化されている。
- 実装・実データなしで要件境界を定義できる。
- Web / iOS / Androidの能力差を実装前に整理する安全上の優先度が高い。

推奨・採用: 候補B

## 作成したIssue

- Issue #119: 生活拠点ぼかし・共有出力・外部キャプチャ保護要件を定義する

## 作成したBranch

- `docs/issue-119-location-privacy-capture`

## 作成・更新するファイル

- `docs/requirements/location-privacy-blur-capture-protection-requirements.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/logs/2026-07-31-issue-119.md`
- `docs/ai-prompts/2026-07-31-issue-119-location-privacy-capture.md`

## 主要判断

- WebでOSスクリーンショット・画面収録を確実に防げる前提を置かない。
- 公開・共有可能画面は通常表示自体をプライバシーセーフにする。
- キャプチャ抑止、キャプチャ検知、アプリスイッチャー保護を独立状態とする。
- 検知可能でも抑止済みとは扱わない。
- 保護失敗・不明・利用不可時は、精密情報非表示、粗粒度表示、概要表示、出力ブロックの順でフォールバックする。
- 開始・終了地点だけでなく、道路形状、時刻、反復、複数記録、地名、EXIF等からの再推定を評価する。
- ぼかし距離等の具体値は未確定とし、匿名・合成データを用いた後続評価と人間承認で決定する。
- 実利用者の位置情報・走行履歴をテストに使用しない。

## 非対象

- 具体的なぼかし閾値
- 生活拠点推定・経路変換アルゴリズム実装
- Next.js / Expo / Maps SDK実装
- キャプチャ保護ライブラリ導入
- DB / API / Auth / Infra / Storage実装
- 実位置情報・実走行履歴処理
- provider採用
- 外部問い合わせ
- 法的助言・最終文言

## 人間レビューで確認する点

- 機微地点・機微パターンの分類が十分か
- `PRIVACY_REDUCED`の成立条件が弱すぎないか
- Webで通常表示安全化を必須とする判断が妥当か
- iOS / Androidの能力を過信していないか
- キャプチャ失敗時のフォールバックが安全側か
- 共有前プレビューと出力一致要件が十分か
- 一般ログ・監査メタデータへ機微情報が混入しないか
- 具体値を未確定のままGoとしていないか
- 帰属・走行安全・保持削除要件を弱めていないか

## 注意

本ログはAIによる法的・技術的保証ではない。公式資料の内容、対象OS・ライブラリ・ブラウザの挙動は後続設計・実装・リリース前に再確認し、人間が承認する。
