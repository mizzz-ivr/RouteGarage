# Handoff（2026-07-23 / Issue #93）

## Summary

- PR #92は2026-07-23にマージ済み。
- Issue #91はclosed / completed。
- Issue #91へ完了コメントを追加済み。
- 次の高リスク作業としてIssue #93を作成。
- 交通情報・オービス情報の法務・運用レビューを実施中。
- 実装コード・技術選定変更なし。

## Current Issue / Branch

- Issue #93: https://github.com/mizzz-dev/RouteGarage/issues/93
- Title: 交通情報・オービス情報の法務・運用レビューを実施する
- Branch: `docs/issue-93-traffic-orbis-legal-operations-review`
- Phase: Phase 1 / Requirements Definition

## Completed Tasks

- PR #92のマージを確認。
- Issue #91の完了を確認。
- Issue #91へ完了記録を追加。
- Issue #93を作成。
- main基点の作業branchを作成。
- 公的機関・公式提供元の一次資料を確認。
- `docs/reviews/traffic-orbis-legal-operations-review.md` を追加。
- Issue #93の作業ログを追加。
- Issue #93のAIプロンプトログを追加。

## Review Findings

### 走行中操作

- 車両停止時を除く画面注視・操作を前提にしない。
- 詳細確認・入力・再読込は安全な場所へ停車後に行う。
- 走行中の通知タップやポップアップをMVPで採用しない。

### JARTIC

- 一般公開ウェブページの無断第三者表示、公衆送信、転載、改変、類似サービス流用を前提にしない。
- ウェブページのスクレイピング再表示を禁止。
- オープンデータ・契約データは個別条件を確認する。

### オービス表示

- 一般的な安全運転注意は許容。
- 地域・路線単位の粗い注意は条件付き候補。
- 正確座標は法務・提供元・地域運用・ストア審査確認まで未承認。
- 移動式リアルタイム情報、ユーザー投稿型正確地点、回避ルートはMVP禁止。

### 通知

- 走行中のプッシュ通知・ポップアップはMVP禁止。
- 正確地点接近時の音声通知は要専門確認・MVP未採用。
- 一般的な事前注意は条件付き候補。

### 地域差

- 都道府県・警察署単位で事故実態等に応じた速度取締り指針が策定される。
- 公表重点路線だけで取締り範囲を断定しない。
- 対象地域、基準日、発表主体を保持する。

## Technical Decisions

- 本レビューを法的助言・適法性の最終判断として扱わない。
- 判断を確定要件、条件付き許容候補、MVP禁止、要専門確認に区分する。
- 判断不能時はNo-Goとする。
- 正確座標・接近通知・音声通知を本Issueで採用しない。
- データ提供元採用前に再配布、加工、キャッシュ、帰属、停止条件を確認する。
- Next.js / Expo / DB / API / Auth / Infraを確定しない。

## Risks

- 公的資料の確認結果を法務承認と誤認すること。
- JARTICの一般ウェブ規約と個別データ提供条件を混同すること。
- 地域別運用差を全国一律と断定すること。
- 安全運転目的の文言でも、正確地点・通知が取締り回避や画面注視を助長すること。
- ユーザー投稿の位置・時刻・識別子から移動履歴を推測できること。
- 提供停止・訂正・通報・監査の責任者が未確定のまま実装へ進むこと。

## Remaining Tasks

1. `docs/current-status.md` をIssue #91完了・Issue #93進行中へ更新する。
2. `docs/active-issues.md` をIssue #93 Activeへ更新する。
3. docs検証を実行する。
4. PRを作成する。
5. Codexレビューと人間レビューを受ける。
6. マージ後にIssue #93を完了する。
7. merged branchのcleanupを確認する。

## Suggested Next Actions

- Issue #93のレビュー文書とSource of Truthを人間レビュー可能なPRにする。
- 次の候補はデータ提供元候補の利用条件・上流由来・再提供経路比較。
- 交通情報・オービス情報の実装IssueはGo / No-Goゲート完了まで作成しない。

## Branch Cleanup

削除候補:

- `docs/issue-87-source-of-truth-sync`
- `docs/issue-89-traffic-orbis-requirements`
- `docs/issue-91-traffic-source-freshness-fix`

作業中:

- `docs/issue-93-traffic-orbis-legal-operations-review`

## 注意事項

- AI生成内容は人間レビュー必須。
- 法的助言ではない。
- 公的資料で確認できない事項を推測で許容しない。
- データ提供元・通知・正確座標・実装方式は未確定。
- 仕様確定前に実装しない。