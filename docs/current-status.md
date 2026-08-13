# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- Current feature task: Issue #138 / PR #140
- Feature: 愛車の整備・給油・走行距離履歴
- Branch: `docs/issue-138-garage-maintenance-history-requirements`
- Phase: Phase 1 / Requirements Definition（機能要件の並行作業）
- AI生成物: 人間レビュー必須
- DB/API/UI実装: 未着手

## Current Feature Issue / PR

- Issue #138: https://github.com/mizzz-ivr/RouteGarage/issues/138
- PR #140: https://github.com/mizzz-ivr/RouteGarage/pull/140
- Requirements: `docs/requirements/garage-maintenance-history-requirements.md`
- Fuel/Odometer invariants: `docs/requirements/garage-maintenance-fuel-odometer-invariants.md`
- Codex review clarifications: `docs/requirements/issue-138-review-clarifications.md`
- MVP delta: `docs/requirements/issue-138-mvp-delta.md`
- Screen delta: `docs/screen-design/garage-maintenance-screen-extension.md`

## Product Goal

ガレージを車両プロフィールだけの機能から、愛車を継続的に管理できる個人記録へ拡張する。

ユーザーが以下を車両単位で記録・振り返りできる状態を定義する。

- 整備履歴
- 給油履歴
- 走行距離履歴
- 入力済み費用の集計候補
- 十分なデータがある場合の区間燃費
- ユーザー設定の次回メンテナンス目安

本機能は故障診断、整備安全診断、車検適合保証、走行可否判定を行わない。

## Feature Scope

### 整備履歴

必須:

- 対象車両
- 実施日
- 整備カテゴリ
- 作業内容

任意:

- 走行距離
- 店舗名/作業者メモ
- 費用
- 個人メモ
- 次回目安日
- 次回目安走行距離

### 給油履歴

必須:

- 対象車両
- 給油日
- 走行距離
- 給油量
- 満タンフラグ

任意:

- 合計金額
- 単価
- 個人メモ

### 走行距離

- 通常区間は単調非減少。
- 同値は許容。
- 距離逆転を通常記録として黙って確定しない。
- 訂正/メーター交換等を通常系列と区別する。
- 距離整合性不明時は燃費・距離目安を断定表示しない。

### 燃費

初期候補は満タン法。

- 前回満タンから今回満タンまでを1区間とする。
- 途中の部分給油を合算する。
- 同一日の複数給油は日付だけで順序を推測せず、同日内の論理順序を確定できる場合だけ区間へ含める。
- `created_at`、DB ID、UUID、API到着順を実際の給油順の代替にしない。
- 同日内順序を確定できない場合は、その記録を含む区間を算出不能とする。
- 前回満タンがない場合は算出しない。
- 距離が逆転している区間は算出しない。
- メーター交換をまたぐ区間は補正仕様確定前は算出しない。
- 算出不能を0km/Lとして表示しない。

### 次回目安

- ユーザーが日付/走行距離を任意設定する。
- システムは入力済み有効値との比較結果だけを表示する。
- 「目安が近い」は近接閾値未定義のためIssue #138のMVP対象外とする。
- MVPでは未超過、日付超過、距離超過、両方超過、判定不能を候補とする。
- メーカー推奨値を自動生成しない。
- 「安全」「危険」「走行不可」等の診断をしない。

## Authorization / Privacy

- 履歴は本人限定。
- 公開車両プロフィールから整備費用・給油・走行距離履歴を取得できない。
- 公開プロフィールの正常レスポンスやserialized props/client stateにも非公開メンテナンス情報を含めない。
- 公開ストーリーの車両参照にも非公開メンテナンス情報を含めない。
- ID直指定で他ユーザーの履歴を取得できない。
- GPS/現在地を自動取得しない。
- 店舗住所/座標を必須にしない。
- VIN、ナンバープレート、車検証画像をMVPで要求しない。

## Codex Review Hardening

PR #140のCodexレビューで以下を追加した。

1. **P1: 公開車両プロフィール経由の漏えいテスト不足**
   - 公開プロフィール/公開ストーリーの正常閲覧経路でも、整備費用・給油・走行距離・燃費・次回目安・メモをレスポンスへ含めない必須テストを追加。
2. **P1: 同日給油記録の順序未定義**
   - `給油日 + 同日内論理順序`で完全順序を定義する要件を追加。
   - 順序不明区間は燃費算出不能。
3. **P1: 日付訂正/整備削除時の再評価テスト不足**
   - 給油日、同日順序、走行距離付き整備記録の日付/距離訂正、整備記録削除を派生値再評価の必須ケースへ追加。
4. **P2: 「目安が近い」の閾値未定義**
   - Issue #138のMVP表示対象から除外。
   - 将来追加時は日付/距離閾値、設定主体、優先順位、通知抑制を別要件で定義する。

上記は `docs/requirements/issue-138-review-clarifications.md` を規範補足とする。正本統合時に元要件・不変条件へ統合し、重複を解消する。

## Added Screen Delta

候補:

- SCR-16拡張: ガレージ管理から履歴へ
- SCR-31候補: 愛車メンテナンス履歴一覧
- SCR-32候補: 整備記録作成/編集
- SCR-33候補: 給油記録作成/編集
- SCR-34候補: メンテナンス履歴詳細/集計

正本統合時に他deltaとの採番競合を再確認する。

## Out of Scope

- OBD/ECU/ドラレコ連携
- GPS自動走行距離取得
- VIN/メーカーAPI
- 店舗予約/決済
- レシートOCR
- 整備画像/レシート画像保存
- AI故障診断・整備安全診断
- 走行可否判定
- 車検適合保証
- 他ユーザーへの履歴公開

## PR #140 Status

- State: Open
- Mergeable: true
- Draft: false
- Latest confirmed compare before this status commit: 14 commits / 10 files / behind 0
- Changes: docs only
- AI支援セルフレビュー: COMMENT済み
- Codex review: COMMENTED
- Codex findings: P1 3件 / P2 1件
- Codex findings: 全件対応・返信・Resolve済み
- Unresolved review threads: 0
- GitHub Actions / commit status: workflow・status checkなし（最新headで再確認要）
- Human review: 未完了

workflow/statusが存在しない場合はCI通過とは扱わない。Codexレビュー対応済みでも人間レビューの代替とは扱わない。

## Web Foundation Status

### PR #136

- State: Merged
- Merged at: 2026-08-12 09:08 JST
- Merge commit: `f20f157b396ccca49210b791849dbaef510c0bad`

### Governance inconsistency

mainの`docs/adr/ADR-0002-web-application-foundation.md`は現在も`Status: Proposed`。

PR #136では「人間レビュー後、同一PRでAcceptedへ変更してからマージ」を必須条件としていたため、マージ済みという事実だけでADR承認済みとは扱わない。

- Issue #139: https://github.com/mizzz-ivr/RouteGarage/issues/139
- Priority: Critical
- Purpose: ADR-0002承認状態と実装ゲートの整合

## Implementation Gates

### Issue #139

- ADR-0002の人間レビュー・承認状態を整合する。
- Acceptedがmainへ入るまではIssue #137をunblockしない。

### Issue #137

- Phase 4 / Detail Design
- Open / `ai: blocked`
- Web基盤のファイル構成、package scripts、security header、unit/E2E、GitHub Actions詳細を定義する。

### Issue #135

- Phase 5 / Implementation
- Open / `ai: blocked`
- Issue #139と#137完了後に初めて実装開始可否を判断する。

実装予定:

- Next.js / TypeScript / Tailwind bootstrap
- root layout / landing
- 走行中操作禁止の安全表示
- error / not-found
- `.env.example`
- lint / typecheck / unit test / build / E2E
- GitHub Actions

## Do Not Proceed

以下はまだ開始しない。

- `Proposed`のADRを承認済み扱いして#137/#135をunblock
- Webアプリ実装
- DB / ORM
- Auth provider
- Maps SDK / geolocation
- Storage / CDN
- 実位置/実走行履歴
- 外部provider/API key取得
- AI整備診断

## Required Review for Issue #138

- プロダクト
- UX
- ガレージ領域
- セキュリティ
- プライバシー
- 安全
- データ設計
- 運用
- プロジェクト責任者

## Next Steps

1. PR #140の人間レビューを受ける。
2. 走行距離逆転/メーター交換/満タン法/同日給油順序/車両削除方針を人間判断する。
3. 承認後、MVP・画面正本へdeltaとレビュー補足を統合する。
4. Issue #139でADR-0002の承認状態を整合する。
5. ADR Accepted後にIssue #137を進める。
6. Issue #137完了後にIssue #135でWeb基盤を実装する。
