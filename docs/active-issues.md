# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

詳細な完了履歴はGitHubのclosed Issues、merged PRs、`docs/current-status.md`、`docs/logs/`を正本とする。

## Active

- Issue #101: JARTIC / VICS・HERE問い合わせの送信前レビューと送信パッケージを確定する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/101
  - Status: In Progress
  - Scope: 差し込み情報、対象文書版、承認、送信先、証跡保管、送信可否を確定する
  - Branch: `docs/issue-101-provider-submission-review`
  - Current Decision: JARTIC / VICS・HEREともにNo-Go
  - External Action: 問い合わせは送信しない
  - Implementation: 実装・契約・APIキー取得を行わない

## Recently Completed

### Issue #99: JARTIC Jシステム / VICS・HERE向け契約・技術問い合わせ票を作成する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/99
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/100
- Note: 初回問い合わせ文、詳細質問票、共通前提、回答記録・Go / No-Go様式を整備。merged branchは削除済み。

### Issue #97: 交通情報データ提供元候補の利用条件・上流由来・再提供経路を比較する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/97
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/98
- Note: JARTIC、VICS、Google、HERE、TomTomを比較し、問い合わせ候補・構成依存候補・No-Goを整理。

### Issue #93: 交通情報・オービス情報の法務・運用レビューを実施する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/93
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/96
- Note: 走行安全、表示粒度、通知、地域差、利用条件、縮退、訂正・通報・監査のGo / No-Goゲートを整理。

### Issue #91: PR #90レビュー指摘に基づき交通情報の由来・更新時刻要件を修正する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/91
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/92
- Note: 上流由来、更新時刻欠落、競合、キャッシュ縮退、利用者表示を安全側へ修正。

### Issue #89: 交通情報・オービス情報の正確性限界表示と法令・規約適合要件を定義する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/89
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/90
- Note: 交通情報・オービス情報の安全・規約適合要件を定義。

## Upcoming Candidates（高リスク領域優先）

1. 人間による差し込み情報入力と問い合わせ送信の明示承認
2. 初回問い合わせの実送信
3. 提供元回答の証跡保存とGo / No-Go再判定
4. 地図基盤候補と交通データ候補の組合せ制約比較
5. 交通情報・オービス情報の画面詳細設計
6. 提供停止・訂正・通報・監査・事故・苦情対応の運用設計
7. 位置情報・走行履歴の公開制御、保持期間、削除導線の要件詳細化
8. 画像投稿・コミュニティ機能のモデレーション、通報、権利侵害対応要件
9. 利用規約・プライバシーポリシー・問い合わせ導線・監査ログ運用要件

## Current Gates

- PRマージやIssue Closeは外部送信承認ではない。
- 運営主体、担当者、連絡先をAIが推測しない。
- 送信対象文書のcommit SHAを固定する。
- 送信直前に公式窓口・フォーム用途を人間が再確認する。
- プロジェクト、法務、運用、セキュリティ・プライバシー、外部送信の承認を記録する。
- HEREは英語表現レビューを別途記録する。
- 1項目でも未入力・未承認の場合はNo-Goとする。
- 提供元回答、契約、見積、添付資料は公開Repositoryへ保存しない。
- データ提供元、地図基盤、API方式、キャッシュ方式は未確定である。
- 仕様・契約確定前に実装しない。

## 更新ルール

- Issue作成・Close・優先度変更時に更新する。
- 会話やProject Boardだけを正本にしない。
- Activeは原則1件に絞る。
- Recently Completedは、現在の判断に直接影響する直近・高リスクIssueを中心に保持する。
- 詳細な過去履歴はGitHubと`docs/logs/`を参照する。
