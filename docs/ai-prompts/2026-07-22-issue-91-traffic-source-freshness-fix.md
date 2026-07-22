# AIプロンプトログ（2026-07-22 / Issue #91）

## Target Issue

https://github.com/mizzz-dev/RouteGarage/issues/91

## 作業目的

PR #90マージ後のレビュー指摘に基づき、交通情報の上流データ由来・調達経路・更新時刻要件を安全側へ修正する。

## 前提

- PR #90はマージ済み。
- Issue #89はclosed / completed。
- PR #90のレビュー後修正コミットはmainへ入っていない。
- 修正はmain基点の新規branch・PRで行う。
- AI生成物は人間レビュー必須。

## 参照docs

- `docs/ai-protocol/PROMPT.txt`
- `docs/requirements/mvp-requirements.md`
- `docs/policies/traffic-and-orbis-information-policy.md`
- `docs/policies/driving-safety-ui-policy.md`
- `docs/current-status.md`
- `docs/active-issues.md`

## 修正内容

- 上流データ由来と調達経路を別軸に分離する。
- 上流由来を公式発表、ユーザー投稿、派生・推定、不明で排他的に分類する。
- 契約経路を情報の正確性・検証済み状態の根拠にしない。
- 提供元最終更新時刻がない情報を最新扱いしない。
- RouteGarage受信時刻を上流更新時刻の代替にしない。
- 更新時刻欠落時を未検証、遅延、提供停止へ保守的に分類する。

## 実装禁止事項

- Next.js / Expo実装
- DB/API/Auth/Infra設計・実装
- データ提供元の確定
- 鮮度閾値の数値決定
- mainへの直接コミット
- 法的助言の断定

## 作成・更新対象

- `docs/policies/traffic-and-orbis-information-policy.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/logs/2026-07-22-issue-91.md`
- `docs/ai-prompts/2026-07-22-issue-91-traffic-source-freshness-fix.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## 完了条件

- PR #90レビュー2件の論点が要件へ反映されている。
- Source of TruthがIssue #91進行中を示す。
- 実装コード・技術選定変更なし。
- レビュー可能な独立PRが作成される。
