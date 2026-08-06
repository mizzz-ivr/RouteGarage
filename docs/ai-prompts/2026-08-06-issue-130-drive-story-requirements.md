# AIプロンプトログ: Issue #130

## 基本情報

- Date: 2026-08-06
- Repository: `mizzz-ivr/RouteGarage`
- Issue: #130
- Branch: `docs/issue-130-drive-story-requirements`
- AI利用目的: 要件整理、文書作成、整合性確認、レビュー補助

## ユーザー依頼

> もっと機能を追加したい。次のタスク進めて
> ストーリー機能とか

## AIへの作業指示

- 日本語で記録する。
- PR #129 / Issue #128の完了状態を確認する。
- 既存MVP、画面一覧、画面遷移、位置情報・安全方針と整合させる。
- 一般SNSの仕様をそのまま模倣しない。
- RouteGarage向けの24時間ストーリーとして目的・対象・対象外を定義する。
- 通常投稿、走行記録、ストーリーの責務を分離する。
- 24時間表示と物理削除・証跡保持を分離する。
- ライフサイクル状態と公開状態を分離する。
- `STOPPED`を最優先とする。
- 現在地自動付与、正確座標、走行中投稿をNo-Goとする。
- EXIF除去、映り込み、生活拠点、スクリーンショット残存を扱う。
- 通報・非表示・管理者停止・期限切れ後の案件継続を扱う。
- 返信、DM、コメント、リアクション、閲覧者一覧、動画等は対象外とする。
- 実画像・実位置情報・非公開データを取得・保存しない。
- 実装、provider選定、APIキー取得、外部送信へ進まない。
- 正常系、異常系、境界値、回帰、セキュリティ、運用のテスト観点を含める。
- Source of Truth、作業ログ、handoffを同期する。
- AI生成物は人間レビュー必須とする。

## AI生成物

- `docs/requirements/drive-story-requirements.md`
- `docs/requirements/mvp-requirements.md`への追記
- `docs/screen-design/screen-list.md`への画面追加
- `docs/screen-design/screen-flow.md`への導線追加
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/logs/2026-08-06-issue-130.md`
- 本ファイル

## AIが確定していない事項

- 法的な最終保持期間・削除義務
- 画像容量・解像度・投稿数上限
- モデレーション体制・SLA
- ストーリーミュートの初期リリース範囲
- 文字だけ投稿可否
- 閲覧数提供可否
- API・DB・CDN・ストレージ方式
- 公開版採用・実装開始

## レビュー上の注意

本ログはAI支援の再現性・監査性を確保するための記録であり、プロダクト、安全、法務、セキュリティ、プライバシー、運用、モデレーション上の承認を意味しない。
