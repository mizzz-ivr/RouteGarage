# Active Issues

## 目的

RouteGarageの進行中Issueを、AI/人間の双方が短時間で把握できるように整理する。

詳細な完了履歴はGitHubのclosed Issues、merged PRs、`docs/current-status.md`、`docs/logs/`を正本とする。

## Active

- Issue #99: JARTIC Jシステム / VICS・HERE向け契約・技術問い合わせ票を作成する
  - URL: https://github.com/mizzz-ivr/RouteGarage/issues/99
  - Status: In Progress
  - Scope: 共通前提、JARTIC / VICS問い合わせ票、HERE問い合わせ票、回答記録、Go / No-Go判定、送信前レビューゲートを整備する
  - Branch: `docs/issue-99-provider-inquiry-templates`
  - External Action: 問い合わせは送信しない
  - Implementation: 実装・契約・APIキー取得を行わない

## Recently Completed

### Issue #97: 交通情報データ提供元候補の利用条件・上流由来・再提供経路を比較する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/97
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/98
- Note: JARTIC、VICS、Google、HERE、TomTomを比較し、問い合わせ候補・構成依存候補・No-Goを整理。merged branchは削除済み。

### Issue #93: 交通情報・オービス情報の法務・運用レビューを実施する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/93
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/96
- Note: 走行安全、表示粒度、通知、地域差、利用条件、縮退、訂正・通報・監査のGo / No-Goゲートを整理。

### Issue #91: PR #90レビュー指摘に基づき交通情報の由来・更新時刻要件を修正する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/91
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/92
- Note: 上流由来と調達経路、表示可否・鮮度・検証状態、更新時刻欠落、競合、キャッシュ縮退、利用者表示を安全側へ修正。

### Issue #89: 交通情報・オービス情報の正確性限界表示と法令・規約適合要件を定義する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/89
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/90
- Note: 交通情報・オービス情報の安全・規約適合要件を定義。

### Issue #18: 走行中操作を助長しないUI/UX詳細方針を定義する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/18
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/19
- Note: 走行中の注視・操作を前提にしないUI/UX方針を定義。

### Issue #12: 位置情報・走行履歴データポリシーを定義する

- URL: https://github.com/mizzz-ivr/RouteGarage/issues/12
- Status: Completed
- Related PR: https://github.com/mizzz-ivr/RouteGarage/pull/13
- Note: 位置情報・走行履歴の高リスクデータ方針を定義。

## Upcoming Candidates（高リスク領域優先）

1. 問い合わせ票の人間レビューと、明示承認後の提供元問い合わせ
2. 提供元回答の証跡保存とGo / No-Go再判定
3. 地図基盤候補と交通データ候補の組合せ制約比較
4. 交通情報・オービス情報の画面詳細設計
5. 提供停止・訂正・通報・監査・事故・苦情対応の運用設計
6. 位置情報・走行履歴の公開制御、保持期間、削除導線の要件詳細化
7. 画像投稿・コミュニティ機能のモデレーション、通報、権利侵害対応要件
8. 利用規約・プライバシーポリシー・問い合わせ導線・監査ログ運用要件

## Current Gates

- 問い合わせ文面は送信前ドラフトである。
- 送信にはプロジェクト、法務、運用、セキュリティの人間レビューが必要である。
- 回答が曖昧、口頭のみ、適用文書・版不明の場合はGo判定しない。
- 提供元回答に転載・二次利用制限がある場合は公開Repositoryへ回答本文を保存しない。
- データ提供元、地図基盤、API方式、キャッシュ方式は未確定である。
- 仕様・契約確定前に実装しない。

## 更新ルール

- Issue作成・Close・優先度変更時に更新する。
- 会話やProject Boardだけを正本にしない。
- Activeは原則1件に絞る。
- Recently Completedは、現在の判断に直接影響する直近・高リスクIssueを中心に保持する。
- 詳細な過去履歴はGitHubと`docs/logs/`を参照する。
