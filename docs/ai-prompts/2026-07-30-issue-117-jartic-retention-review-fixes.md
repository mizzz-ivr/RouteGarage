# Issue #117 AIプロンプトログ

- 日付: 2026-07-30
- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/117
- Branch: `docs/issue-117-jartic-retention-review-fixes`
- 利用AI: ChatGPT
- AI生成物: 人間レビュー必須

## 依頼

PR #116の次のタスクを進める。

## 確認した前提

- PR #116はマージ済み。
- Issue #115は完了済み。
- PR #116には未解決review threadが残っている。
- RepositoryはPhase 1 / Requirements Definitionである。
- `AGENTS.md`により、仕様確定前の実装、Issue外の変更、無関係なリファクタリングは禁止されている。
- 実装、実データ処理、provider採用、外部問い合わせはNo-Goである。

## AIへ与えた作業指示

あなたはRouteGarageのシニアPM・テックリード・ソフトウェアアーキテクト・レビュアーとして、PR #116のマージ後状態を確認し、次に進めるべきタスクを安全性・プライバシー・法令配慮・既存方針・レビュー容易性の順で判断してください。

### 必須条件

- GitHub Issue駆動で作業する
- branch名に`codex`を含めない
- Issue、PR、commit、作業ログ、ドキュメントは日本語で記録する
- 1PR 1目的とし、変更差分をレビュー可能な粒度に保つ
- PR #116の未解決review threadを確認する
- 現行`main`へ残る指摘を後続Issue・PRで修正する
- Source of Truthを要件本文と同期する
- 保持期間・削除SLAの具体値を勝手に決めない
- Next.js、Expo、Maps SDK、DB、API、認証、インフラを実装しない
- 実データ取得・変換・保存・削除を行わない
- provider採用、契約、APIキー取得、外部問い合わせを行わない
- AI生成物は人間レビュー必須と明記する

### 対応するレビュー論点

1. 削除確定イベントを期限付きで`DELETION_PENDING`へ遷移する
2. 項目・地物単位の削除を原本・バックアップ・外部保存先へ伝播する
3. バックアップの実失効・不存在確認前に完了証跡を発行しない
4. 保持上限・最低保持期間・再確認期限を分離する
5. 上限・下限競合時は法務No-Goとする
6. 復旧時に必須5台帳を取得・検証し、1つでも不能なら再開No-Goとする
7. `LEGAL_HOLD`解除後に保留中の削除を再開する
8. 再取得拒否記録から正確位置・走行履歴・個人情報を除外する
9. Current Status、Active Issues、handoffを同期する
10. 元PR #116のreview threadへ後続対応を記録する

## AIの判断

新しい機能要件やUI実装へ進む前に、PR #116の未解決P1指摘を後続Issueで解消することを最優先とした。

理由:

- 削除義務が確定したデータを保持し続けられる状態遷移は、権利・安全・プライバシー上の高リスクである。
- バックアップ・復旧・法的保全の欠落は、削除済みデータの再公開につながる。
- Source of Truthの不整合は、後続設計で修正済み要件が欠落する原因になる。
- Repositoryの開発フェーズと`AGENTS.md`により、Next.js / Expo等の実装開始条件を満たしていない。

## 生成・更新対象

- GitHub Issue #117
- `docs/requirements/jartic-static-layer-data-retention-deletion-review-fixes.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/logs/2026-07-30-issue-117.md`
- 本ファイル

## 非対象

- 具体的な保持期間・削除SLA
- 実装コード
- 実データ
- provider採用
- 外部問い合わせ
- 法的助言・契約判断

## レビュー観点

- 削除確定イベントが調査状態へ無期限滞留しないか
- 項目・地物削除が原本を含む全保存先へ伝播するか
- バックアップ予定日時だけで完了扱いしていないか
- 保持上限・最低保持期間の競合をAIや実装担当だけで決めていないか
- 復旧に必要な台帳が一つでも欠けた場合に再開を止められるか
- `LEGAL_HOLD`解除後の削除義務を失わないか
- 再取得拒否記録から生活拠点・走行履歴を推定できないか
- Source of Truthが同一の安全ゲートを示しているか
- 実装・実データ・外部送信へ進んでいないか
