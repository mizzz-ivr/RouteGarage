# AI利用ログ: Issue #134 Webアプリ基盤基本設計

## 日付

2026-08-10

## 依頼

ユーザーから「もっと機能やコンテンツを追加していきたい。次の実装タスク進めて。必要な作業があれば教えて。」と依頼された。

## AIが実施した判断

Repository状態を確認し、実装コードが存在しないこと、README上の技術スタックが候補であること、AGENTS.mdで設計Issue完了が実装開始条件になっていることを確認した。

そのため未確定仕様をコードで補完せず、次の順で進めた。

1. Webアプリ基盤の基本設計Issue #134を作成。
2. 後続実装Issue #135をBlocked状態で作成。
3. Next.js / React / TypeScript / App Router / Tailwind / Node.js 24 LTS / npmをWeb MVP基盤の採用候補として設計。
4. DB/Auth/Maps/Storage/Hostingは未選定のままadapter境界へ分離。
5. Server Component既定、Client Component最小化を設計。
6. lint/typecheck/test/build/E2E/CIを初期品質ゲートとして設計。
7. 安全・プライバシー・secret管理の初期ガードレールを設計。
8. PR #136を作成しAI支援セルフレビューを記録。
9. `docs/01_development_process.md`を再照合し、基本設計と実装の間にPhase 4詳細設計が必要であることを確認。
10. Issue #137を詳細設計・テスト仕様Issueとして作成し、Issue #135を#134 / #137の両方にBlockedとした。

## 外部確認

技術情報は2026-08-10時点の公式一次資料を確認した。

- Next.js: App Router / Getting Started / navigation documentation
- Tailwind CSS: framework guides
- Node.js: releases / LTS status

## 使用したAI支援知識

Vercel EngineeringのReact / Next.js best practicesを参照し、次を設計へ反映した。

- Server Component中心
- Client Component最小化
- client bundleへ不要データを渡さない
- provider依存を境界化する
- waterfallや不要なclient-side処理を避ける方向性

## AIが確定していないもの

- Next.js / React / Tailwindの正確なpackage version
- DB / ORM
- Auth provider
- Maps provider
- Storage / CDN
- Hosting
- CSP詳細
- Observability

package versionは実装直前に公式stableを再確認し、lockfileで固定する設計とした。

## 実装非実施

Issue #134は基本設計Issueのため、AIはアプリケーションコードやdependencyを追加していない。

Issue #137も詳細設計Issueとして実装コードを混在させない。

実コードは#134 / PR #136と#137が人間レビュー・mainマージされた後、Issue #135でのみ開始する。

## Human Review Required

- 技術選定
- Node/runtime方針
- directory / dependency boundary
- security baseline
- testing / CI方針
- Issue #137の詳細設計開始可否
- Issue #135の実装開始可否

AI生成物のみでIssue #134を承認したり、Issue #137 / #135のBlockedを解除しない。
