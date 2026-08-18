# Issue #150 AI作業指示

## 目的

RouteGarageのドライブ前チェックリスト・持ち物テンプレート機能を、走行中操作・安全保証・provider先取りを避けながら要件定義する。

## 必須前提

- 日本語で記録する。
- 本IssueはPhase 1要件定義。アプリコード、DB、API、Auth、Maps、Storage、Weather、OBD、Notification providerを実装しない。
- `docs/policies/driving-safety-ui-policy.md`の停止時利用原則を弱めない。
- 標準テンプレート、個人テンプレート、今回のチェックを別責務として扱う。
- `CHECKED`を安全、正常、整備済み、法的適合、走行可能へ変換しない。
- GPS/現在地を要求しない。
- 実ユーザーデータや実位置情報を使用しない。
- AI生成物は人間レビュー必須。

## 変更対象

- `docs/requirements/drive-prep-checklist-requirements.md`
- `docs/requirements/issue-150-mvp-delta.md`
- `docs/screen-design/drive-prep-checklist-screen-extension.md`
- `docs/content/drive-prep-checklist-content-guidelines.md`
- Source of Truth / log / handoff関連

## レビュー重点

1. テンプレート更新で既存チェックが壊れないか
2. 0項目を100%完了扱いしていないか
3. `CHECKED`が安全保証へ読み替えられないか
4. 走行中操作を促していないか
5. Weather/GPS/OBD/Notificationを暗黙導入していないか
6. 個人テンプレート/チェックが公開経路へ漏れないか
7. Garage整備履歴やDrive Planの責務を奪っていないか
8. 320px/a11y/キーボード操作を後続設計へ引き継いでいるか

## 実装ゲート

要件レビュー → canonical統合 → 基本設計 → 詳細設計/テスト仕様 → Phase 5実装の順を守る。

Web基盤PR #148がmainへ反映されるまで本機能のPhase 5実装へ進まない。
