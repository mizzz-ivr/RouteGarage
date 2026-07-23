# AIプロンプトログ（2026-07-23 / Issue #99）

## User Request

- PR #98をマージしたため、次のタスクを進める。
- Build Web Apps / Visualizeを利用する。
- RepositoryをSource of Truthとして継続する。

## Target Issue

https://github.com/mizzz-ivr/RouteGarage/issues/99

## Highest Priority Rule

`docs/ai-protocol/PROMPT.txt`を最優先とする。

## Purpose

JARTIC Jシステム / VICSおよびHEREに対し、契約・技術・再提供・加工・キャッシュ・帰属・SLA・停止条件を確認する問い合わせ文書を作成する。

問い合わせを実送信せず、人間レビュー後に使用できる初回問い合わせ文、詳細質問票、回答記録・Go / No-Go判定様式をRepositoryへ保存する。

## Repository Sources

- `docs/ai-protocol/PROMPT.txt`
- `docs/reviews/traffic-data-provider-comparison.md`
- `docs/reviews/traffic-orbis-legal-operations-review.md`
- `docs/policies/traffic-and-orbis-information-policy.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Official Sources

確認日: 2026-07-23

- JARTIC Jシステム
  - https://www.jartic.or.jp/s/service/forcorporation/forcorporation01/
- JARTICお問い合わせフォーム
  - https://www.jartic.or.jp/contact/
- VICS 事業者への情報提供
  - https://www.vics.or.jp/center/offering/
- VICSお問い合わせ
  - https://www.vics.or.jp/contact/
- HERE Traffic API v7
  - https://docs.here.com/traffic-api/docs/introduction-to-here-traffic-api-v7
- HERE Contact
  - https://www.here.com/contact
- HERE Get Started
  - https://www.here.com/get-started

## Required Documents

### 共通

- `docs/inquiries/traffic-data-provider-inquiry-common.md`
- `docs/inquiries/traffic-data-provider-response-record.md`

### JARTIC / VICS

- `docs/inquiries/jartic-vics-initial-inquiry.md`
- `docs/inquiries/jartic-vics-contract-technical-inquiry.md`

### HERE

- `docs/inquiries/here-traffic-api-initial-inquiry.md`
- `docs/inquiries/here-traffic-api-contract-technical-inquiry.md`

### Source of Truth / Logs

- `docs/logs/2026-07-23-issue-99.md`
- `docs/ai-prompts/2026-07-23-issue-99-provider-inquiry-templates.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Inquiry Workflow

1. 共通前提を人間が確認する。
2. 初回問い合わせ文へ運営主体・担当者・連絡先と承認済み仮定値を入力する。
3. プロジェクト、法務、運用、セキュリティが送信前レビューする。
4. 明示承認後に公式の法人・営業窓口へ初回問い合わせを送信する。
5. 正式な営業・契約・技術窓口と適用文書を確認する。
6. 詳細質問票から必要な章だけを選び、追加質問する。
7. 回答をアクセス制御された保管先へ保存する。
8. Repositoryには公開可能な要約と証跡参照IDを記録する。
9. 回答記録様式を使ってGo / No-Goを再判定する。

## Inquiry Requirements

- 初回問い合わせは各提供元12項目程度に限定する
- 詳細質問票を初回フォームへ一括送信しない
- RouteGarageのサービス概要と想定利用形態を説明する
- 未確定事項を確定済みと記載しない
- 契約主体、利用者表示、公衆送信、再提供を確認する
- 上流由来、更新時刻、訂正、撤回、無効化を確認する
- 加工、統合、状態判定、他社地図重畳を確認する
- キャッシュ、保存、履歴、バックアップ、削除義務を確認する
- 帰属、ロゴ、エンドユーザー条項を確認する
- SLA、障害通知、規約変更、契約停止、緊急連絡を確認する
- セキュリティ、位置情報外部送信、プライバシー条件を確認する
- 料金・契約手続・評価環境を確認する
- 回答の適用文書、版、有効期限、権限を記録できるようにする

## Safety and Privacy Constraints

- 走行中の注視・操作・能動通知を前提にしない
- 移動式取締り・警察位置のリアルタイム情報を対象にしない
- 正確オービス座標・走行中接近通知を許容しない
- 利用者の位置情報・走行履歴・識別子を送信する前提を置かない
- 必要な外部送信は別Issueで同意・最小化・保持・削除を定義する
- 判断不能時はNo-Go

## Commercial Constraints

- 問い合わせ文書を作るが送信しない
- 契約、見積、料金交渉、APIキー取得を行わない
- 回答本文の公開可否を確認せずRepositoryへ掲載しない
- AI要約だけで契約・採用判断しない
- 提供元の正式書面と適用契約を人間が確認する

## Implementation Prohibitions

- Next.js / Expo実装
- API / DB / Auth / Infra / Monitoring設計・実装
- APIキー・トライアル取得
- データ提供元・地図基盤の採用決定
- 問い合わせの実送信
- 契約締結・見積取得
- 法的助言・契約条項の最終判断

## Completion Conditions

- 共通前提文書がある
- JARTIC / VICSの初回問い合わせ文と詳細質問票がある
- HEREの初回問い合わせ文と詳細質問票がある
- 回答記録・Go / No-Go様式がある
- 公式窓口と送信先制約が記録されている
- 初回問い合わせと追加質問の分岐が明確である
- 質問の確認目的とGo / No-Go影響が明確である
- 送信前人間レビューゲートがある
- Source of Truth、ログ、handoffが整合する
- 実装・契約・送信を行っていない

## Validation

- docsのみの差分であること
- 新規Markdownが空でないこと
- 初回問い合わせと詳細質問が分離されていること
- 公式資料で確認済みの事項と要問い合わせ事項を混同していないこと
- JARTICとVICSの責務分界を断定していないこと
- VICS一般問い合わせフォームを営利目的の送信先にしていないこと
- HEREへの問い合わせがTraffic API v7に限定されていること
- 未確定の利用者数・エリア・地図基盤を確定していないこと
- 安全・プライバシー制約を弱めていないこと
- 回答の二次利用制限を考慮していること
- AI生成物の人間レビューを明記していること

## Expected PR Title

`docs: 交通情報提供元向け契約・技術問い合わせ票を追加`
