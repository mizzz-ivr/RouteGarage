# Handoff（2026-07-28 / Issue #111）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- PR #110はマージ済み。
- Issue #109はclosed / completed。
- PR #110の作業branchは削除済み。
- 次の優先作業としてIssue #111を作成。
- JARTICオープンデータの第三者権利台帳・公開判定手順を定義。
- 4データセットの初期状態はすべて`未着手 / No-Go`。
- 実データ取得、解析、第三者問い合わせ、許諾取得、採用決定、実装は行っていない。
- JARTIC Jシステム / VICS・HEREへの問い合わせは未承認でNo-Go。

## Current Issue / Branch

- Issue #111: https://github.com/mizzz-ivr/RouteGarage/issues/111
- Branch: `docs/issue-111-jartic-third-party-rights-register`
- Phase: Phase 1 / Requirements Definition

## Completed Tasks

- PR #110のマージを確認。
- Issue #109の完了を確認。
- PR #110の作業branch削除を確認。
- 同等のOpen Issueがないことを確認。
- Issue #111とmain基点branchを作成。
- JARTIC公式オープンデータページ・利用規約を2026-07-28時点で再確認。
- 第三者権利台帳の管理単位、必須項目、状態、公開判定、失効、停止・再開を定義。
- 最新公開版と現在情報を混同しない鮮度補足を追加。
- 公開Repositoryと非公開証跡の境界を定義。
- Source of Truth、ログ、AIプロンプトログ、handoffを更新。

## Created Documents

- `docs/registers/jartic-open-data-third-party-rights-register.md`
- `docs/logs/2026-07-28-issue-111.md`
- `docs/ai-prompts/2026-07-28-issue-111-jartic-third-party-rights-register.md`

## Updated Documents

- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Official Sources

確認日: 2026-07-28

### JARTIC

- 各種情報の提供（オープンデータ）
  - https://www.jartic.or.jp/service/opendata/
- オープンデータ利用規約
  - https://www.jartic.or.jp/d/opendata/riyou_kiyaku.pdf

確認事項:

- 交通規制情報、断面交通量情報、交通量データ（国土交通省）、交差点制御情報を提供。
- 原則毎月月初に更新。
- 更新前情報は提供元ページから取得できなくなる。
- 更新が遅れる場合がある。
- 掲載対象年月と公開更新日は一致しない場合がある。
- 複製、公衆送信、翻案、商用利用が可能。
- 出典・加工表示が必要。
- 第三者権利は利用者の責任で確認する。
- 権利処理済み範囲が明示されない場合がある。
- データ・規約は変更、移転、削除される場合がある。
- CC BY 4.0と互換性がある。

## Current Decision

JARTICオープンデータの4分類は、実ファイル・項目・権利状態を確認していないため、すべて公開No-Goとする。

| データセット | 状態 | 公開判定 |
| --- | --- | --- |
| 交通規制情報 | 未着手 | No-Go |
| 断面交通量情報 | 未着手 | No-Go |
| 交通量データ（国土交通省） | 未着手 | No-Go |
| 交差点制御情報 | 未着手 | No-Go |

これはJARTICオープンデータの将来的な利用を否定する判断ではなく、証跡・権利範囲・承認前に公開しないための初期状態である。

## Register Management Unit

最低限次を組み合わせてレコードを識別する。

- データセット種別
- 対象年月・作成基準日
- 都道府県・地域
- 原本ファイル名・ハッシュ
- 説明書・フォーマット版
- 項目・カラム・地物
- 上流提供者・権利者候補

次の場合はファイル・項目・地物単位へ分割する。

- 上流提供者・権利者が異なる
- 権利処理済み範囲が限定される
- 一部項目だけ第三者権利の可能性がある
- 地域ごとに説明書・条件が異なる
- 公開可能部分と非公開部分が混在する
- 同一対象年月でファイル差替えが発生した

## Register States

| 状態 | 公開可否 |
| --- | --- |
| 未着手 | No-Go |
| 調査中 | No-Go |
| 確認済み | 全ゲート充足時のみGo候補 |
| 条件付き | 条件を強制できる場合のみGo候補 |
| 非許可 | No-Go |
| 失効・再確認必要 | No-Go |

## Main Gates

1. 原本URL、ファイル名、ハッシュ、対象年月、地域、版を追跡できる。
2. 上流提供者・権利者候補・第三者権利の可能性を記録できる。
3. 権利処理済み範囲または追加許諾を証跡で確認できる。
4. 保存、加工、公衆送信、地図表示、履歴保存、履歴公開等を独立判定できる。
5. 必須出典、加工表示、追加帰属、鮮度注意文を表示できる。
6. 最新公開版を現在情報として扱わない。
7. 旧版・履歴を現在情報から分離できる。
8. 規約、説明書、ファイル、許諾変更時に失効できる。
9. 権利侵害・誤情報・安全通報時に停止できる。
10. 削除・非公開要求へ対応できる。
11. 法務、運用、安全、プロジェクト責任者が承認した。

1項目でも未確認の場合はNo-Goまたは保留。

## Freshness Clarification

`最新公開版`は次を意味しない。

- 現在月
- 現在有効な規制
- 現在の交通量・渋滞
- リアルタイム情報
- 緊急・一時規制

次を独立管理する。

- 対象年月・作成基準日
- JARTIC公開更新日
- RouteGarage取得日
- RouteGarage検証日
- 権利確認日

利用者向けに`最新交通情報`とは表示しない。

## Evidence Boundaries

### Public Repository

- 台帳様式
- 公開資料URL・確認日
- 公開可能な判定要約
- 証跡参照ID
- 非機密の出典・加工表示文言

### Restricted Storage

- 非公開契約書・回答
- 個人名・個人メール・電話番号
- 非公開の許諾書・見積
- アクセス制御が必要な証拠
- APIキー・秘密鍵・トークン

Repositoryには非公開証跡本文を保存しない。

## Stop / Resume

### Immediate Stop

- 権利侵害の可能性が高い通報
- 誤情報による安全影響
- 出典・加工表示欠落
- 上流提供者・権利者からの停止要請
- 規約変更後の利用可否不明
- 原本と公開データの対応喪失
- ハッシュ・真正性不一致

### Resume Conditions

- 原因と影響範囲を特定
- 権利・安全問題を解消
- 出典・加工表示を修正
- 原本から公開データまで再検証
- 法務、運用、安全、プロジェクト責任者が再開承認

## Safety and Privacy Decisions

- 権利未確認データを公開しない。
- 月次データを現在の交通状況・緊急規制として表示しない。
- 利用者の位置情報・走行履歴を権利台帳へ保存しない。
- 権利未確認部分を欠損補完・推定で公開しない。
- 権利侵害・安全影響の可能性が高い通報時は即時停止する。
- 判断不能時はNo-Goとする。

## Inquiry Status

- JARTIC Jシステム / VICS: `No-Go（外部送信未承認）`
- HERE: `No-Go（external submission not approved）`
- PRマージ・Issue Closeは外部送信承認ではない。
- Issue #111では問い合わせ・許諾取得を行わない。

## Rejected Alternatives

- JARTICオープンデータを一括で権利確認済みとする案
- 商用利用可能だけを公開根拠にする案
- 第三者権利の可能性を推定で`なし`にする案
- 原本ハッシュ・規約版・説明書版なしで承認する案
- 口頭回答だけでGo判定する案
- 権利未確認部分を欠損補完して公開する案
- 非公開証跡を公開Repositoryへ保存する案
- 最新公開版を現在の交通情報として扱う案

## Remaining Tasks

1. mainとの差分、台帳状態、禁止事項を検証する。
2. PRを作成する。
3. AIレビューが利用可能なら依頼する。
4. 人間・法務・運用・安全レビューを受ける。
5. 対象年月、出典、加工表示、更新状態の画面要件を定義する。
6. 原本、変換後、履歴、監査メタデータの保持・削除要件を定義する。
7. 実データ候補の登録は別Issueで行う。
8. provider選定時にADRを作成する。

## Branch Cleanup

削除済み:

- `docs/issue-107-google-routes-contract-boundaries`
- `docs/issue-109-jartic-open-data-static-layer`

作業中:

- `docs/issue-111-jartic-third-party-rights-register`

## 注意事項

- AI生成内容は人間レビュー必須。
- 法的助言、権利確認完了、採用決定ではない。
- 実データを取得していない。
- 第三者へ問い合わせていない。
- Google Maps Platform / JARTICは未採用。
- 仕様・契約確定前に実装しない。
