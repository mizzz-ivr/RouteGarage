# AIプロンプトログ（2026-07-24 / Issue #101）

## User Request

- PR #100をマージしたため、次のタスクを進める。
- RepositoryをSource of Truthとして継続する。

## Target Issue

https://github.com/mizzz-ivr/RouteGarage/issues/101

## Highest Priority Rule

`docs/ai-protocol/PROMPT.txt`を最優先とする。

## Purpose

JARTIC / VICSおよびHEREへの初回問い合わせについて、送信前レビュー項目、差し込み情報、承認記録、証跡保存、送信可否判定を確定する。

本作業では問い合わせを実送信しない。

## Repository Sources

- `docs/ai-protocol/PROMPT.txt`
- `docs/inquiries/traffic-data-provider-inquiry-common.md`
- `docs/inquiries/jartic-vics-initial-inquiry.md`
- `docs/inquiries/jartic-vics-contract-technical-inquiry.md`
- `docs/inquiries/here-traffic-api-initial-inquiry.md`
- `docs/inquiries/here-traffic-api-contract-technical-inquiry.md`
- `docs/inquiries/traffic-data-provider-response-record.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Required Documents

- `docs/inquiries/provider-submission-register.md`
- `docs/inquiries/jartic-vics-submission-review.md`
- `docs/inquiries/here-traffic-api-submission-review.md`
- `docs/logs/2026-07-24-issue-101.md`
- `docs/ai-prompts/2026-07-24-issue-101-provider-submission-review.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Review Requirements

- PRマージと外部送信承認を分離する
- Issue Closeと外部送信承認を分離する
- 運営主体、担当者、連絡先をAIが推測しない
- 未入力項目を`要入力`または`未確定`として残す
- 確定値と仮定値を区別する
- 仮定値には根拠、承認者、承認日を記録する
- 送信本文のcommit SHAを承認対象として固定する
- 送信直前に公式窓口・フォーム用途を人間が確認する
- 初回問い合わせと詳細質問票を分離する
- JARTICとHEREを別々に承認する
- HEREは英語表現レビューを分離する
- プロジェクト、法務、運用、セキュリティ・プライバシー、外部送信の承認を記録する
- 外部送信の明示承認がない場合はNo-Goとする
- 証跡保管先、保管責任者、アクセス制御を確認する
- 提供元回答、契約、見積、添付資料を公開Repositoryへ保存しない

## Safety and Privacy Constraints

- 走行中の注視・操作・能動通知を前提にしない
- 移動式取締り・警察位置のリアルタイム情報を含めない
- 取締り回避を目的とする表現を含めない
- 正確なオービス座標・走行中接近通知を許容しない
- 利用者の実位置・走行履歴・識別子を送信しない
- APIキー・秘密鍵・トークン・パスワードを送信しない
- 他社の非公開契約・見積・回答を送信しない
- 判断不能時はNo-Go

## Commercial Constraints

- 問い合わせを実送信しない
- 電話連絡を行わない
- 契約、見積、料金交渉、APIキー取得を行わない
- 提供元回答を受領済みと扱わない
- データ提供元・地図基盤を採用しない
- AIのみの承認を認めない

## Implementation Prohibitions

- Next.js / Expo実装
- API / DB / Auth / Infra / Monitoring設計・実装
- APIキー・トライアル取得
- データ提供元・地図基盤の採用決定
- 問い合わせフォーム・メール送信
- 契約締結・見積取得
- 法的助言・契約条項の最終判断

## Completion Conditions

- 共通の送信・承認台帳がある
- JARTIC / VICSの送信前レビュー票がある
- HEREの送信前レビュー票がある
- 未入力状態がNo-Goとして記録されている
- 送信対象文書、commit SHA、差し込み情報を記録できる
- 承認者、承認日、対象版を記録できる
- 送信直前の公式窓口確認がある
- 外部送信の明示承認欄がある
- 送信後の日時、送信者、受付番号、証跡参照IDを記録できる
- 回答証跡の非公開保管ルールがある
- Source of Truth、ログ、handoffが整合する
- 実装・契約・送信を行っていない

## Validation

- docsのみの差分であること
- 新規Markdownが空でないこと
- JARTIC / VICSとHEREを別に管理していること
- 初回問い合わせ文と詳細質問票を混同していないこと
- 未入力値を実在情報で補完していないこと
- すべての必須承認が未完了の状態でNo-Goになっていること
- 送信後記録が空欄・未送信であること
- 個人情報・認証情報・非公開契約情報を含まないこと
- AI生成物の人間レビューを明記していること

## Expected PR Title

`docs: 交通情報提供元問い合わせの送信前レビュー台帳を追加`
