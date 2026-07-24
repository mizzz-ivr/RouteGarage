# Handoff（2026-07-24 / Issue #101）

## Summary

- Repositoryの正式な所有者は`mizzz-ivr`。
- PR #100は2026-07-23T23:20:40Zにマージ済み。
- Issue #99はclosed / completed、作業branchは削除済み。
- Issue #101を作成し、送信前レビュー・承認台帳の整備を開始。
- JARTIC / VICS・HEREともに現在判定は`No-Go（要入力・要承認）`。
- 外部問い合わせ、契約、見積取得、APIキー取得、実装は行っていない。

## Current Issue / Branch

- Issue #101: https://github.com/mizzz-ivr/RouteGarage/issues/101
- Branch: `docs/issue-101-provider-submission-review`
- Phase: Phase 1 / Requirements Definition

## Completed Tasks

- PR #100のマージを確認。
- Issue #99の完了を確認し、完了コメントを追加。
- PR #100の作業branch削除を確認。
- 同等のOpen Issueがないことを確認。
- Issue #101とmain基点の作業branchを作成。
- 共通の問い合わせ送信・承認台帳を作成。
- JARTIC / VICS送信前レビュー票を作成。
- HERE送信前レビュー票を作成。
- 未入力・未承認の状態をNo-Goとして明記。
- Issue #101の作業ログ、AIプロンプトログを追加。
- Source of TruthをIssue #99完了、Issue #101進行中へ更新。

## Created Documents

- `docs/inquiries/provider-submission-register.md`
- `docs/inquiries/jartic-vics-submission-review.md`
- `docs/inquiries/here-traffic-api-submission-review.md`
- `docs/logs/2026-07-24-issue-101.md`
- `docs/ai-prompts/2026-07-24-issue-101-provider-submission-review.md`

## Current Decisions

### JARTIC / VICS

`No-Go（要入力・要承認）`

未完了:

- 運営主体、担当者、連絡先
- 送信対象commit SHA
- 公式窓口の送信直前再確認
- プロジェクト、法務、運用、セキュリティ・プライバシー承認
- 外部送信承認
- 回答証跡のアクセス制御された保管先

### HERE

`No-Go（required fields and approvals are incomplete）`

未完了:

- Legal entity、担当者、連絡先
- 送信対象commit SHA
- HERE公式営業窓口の送信直前再確認
- プロジェクト、法務、運用、セキュリティ・プライバシー承認
- 英語表現レビュー
- 外部送信承認
- 回答証跡のアクセス制御された保管先

## Technical Decisions

- PRマージ・Issue Closeと外部送信承認を分離する。
- 初回問い合わせ文の対象commit SHAを承認記録へ固定する。
- 送信直前に公式窓口・フォーム用途を人間が再確認する。
- 運営主体、担当者、連絡先をAIが推測しない。
- 確定値、仮定値、未確定値を区別する。
- 仮定値には根拠、承認者、承認日を記録する。
- JARTIC / VICSとHEREを別々に承認する。
- HEREは英語表現レビューを別に設ける。
- 詳細質問票は初回問い合わせへ添付しない。
- 外部送信の明示承認がない場合はNo-Goとする。
- 提供元回答、契約、見積、添付資料は公開Repositoryへ保存しない。
- 採用時は別IssueとADRを作成する。

## Safety and Privacy Decisions

- 走行中の注視・操作・能動通知を前提にしない。
- 移動式取締り・警察位置のリアルタイム情報を含めない。
- 取締り回避を目的とする表現を含めない。
- 正確なオービス座標・走行中接近通知を許容しない。
- 利用者の実位置、走行履歴、識別子を送信しない。
- APIキー、秘密鍵、トークン、パスワードを送信しない。
- 他社の非公開契約・見積・回答を送信しない。
- 判断不能時はNo-Goとする。

## Approval Gates

1. 運営主体、部署、担当者、連絡先を入力
2. 仮定値の区分・根拠・承認者を記録
3. 初回問い合わせ文の対象commit SHAを固定
4. 送信先・フォーム用途を送信直前に確認
5. プロジェクト承認
6. 法務・契約承認
7. 運用承認
8. セキュリティ・プライバシー承認
9. HERE英語表現レビュー
10. 証跡保管先・責任者・アクセス権限を確定
11. 外部送信の明示承認

1項目でも未完了の場合はNo-Go。

## Rejected Alternatives

- PR #100のマージを外部送信承認として扱う案
- Issue #99 Close後の自動送信
- AIによる運営主体・担当者・連絡先の推測
- 送信対象文書版を記録しない運用
- JARTICとHEREの一括承認
- 提供元回答の公開Repository保存
- AIのみのレビュー・承認

## Risks

- 承認版と実送信版が異なること。
- 送信先URLやフォーム用途が変更されていること。
- 未確定値を確定値として送信すること。
- 担当者の個人情報を公開Repositoryへ過剰に記録すること。
- 回答証跡の保管先・アクセス権限が不十分なこと。
- HERE英語文と日本語承認内容が一致しないこと。
- 詳細質問票を初回問い合わせへ添付すること。
- AIの確認だけで外部送信を許可すること。

## Remaining Tasks

1. mainとの差分、Markdown、No-Go条件を検証する。
2. PRを作成する。
3. 人間レビューを受ける。
4. 運営主体、担当者、連絡先、仮定値、証跡保管責任者を人間が入力する。
5. 対象commit SHAを固定して各承認を取得する。
6. 外部送信は別途明示承認後に実施する。
7. 回答受領後、非公開証跡を保存し、公開可能な要約と参照IDをRepositoryへ記録する。

## Branch Cleanup

削除済み:

- `docs/issue-99-provider-inquiry-templates`

作業中:

- `docs/issue-101-provider-submission-review`

## 注意事項

- AI生成内容は人間レビュー必須。
- 問い合わせは未送信。
- PRマージは送信承認ではない。
- 法的助言、契約判断、採用決定ではない。
- データ提供元、地図基盤、API方式、キャッシュ方式は未確定。
- 仕様・契約確定前に実装しない。
