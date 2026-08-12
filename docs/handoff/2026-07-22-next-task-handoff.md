# Handoff（2026-08-12 / Issue #138）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Current feature task: Issue #138 / 愛車の整備・給油・走行距離履歴
- Branch: `docs/issue-138-garage-maintenance-history-requirements`
- Phase: Phase 1 / Requirements Definition
- Web foundation implementation remains blocked.
- PR #136 was merged at 2026-08-12 09:08 JST, but ADR-0002 remains `Proposed` on main.
- Issue #139 tracks the resulting governance inconsistency.
- Issue #137 / #135 remain `ai: blocked`.

## Current Feature

Issue #138:
https://github.com/mizzz-ivr/RouteGarage/issues/138

Documents:

- `docs/requirements/garage-maintenance-history-requirements.md`
- `docs/requirements/garage-maintenance-fuel-odometer-invariants.md`
- `docs/requirements/issue-138-mvp-delta.md`
- `docs/screen-design/garage-maintenance-screen-extension.md`

## Product Goal

Garageを車両プロフィールだけの領域から、愛車を継続管理できる個人記録領域へ拡張する。

対象:

- 整備履歴
- 給油履歴
- 走行距離履歴
- 費用集計候補
- 満タン法による区間燃費候補
- ユーザー設定の次回メンテナンス目安

## Maintenance Record

必須:

- 車両
- 実施日
- カテゴリ
- 作業内容

任意:

- 走行距離
- 店舗名/作業者メモ
- 費用
- 個人メモ
- 次回目安日
- 次回目安走行距離

## Fuel Record

必須:

- 車両
- 給油日
- 走行距離
- 給油量
- 満タンフラグ

任意:

- 合計金額
- 単価
- 個人メモ

## Odometer Integrity

- 通常区間は単調非減少。
- 同値は許容。
- 距離逆転は通常記録として無条件確定しない。
- 訂正/メーター交換を通常系列と区別する。
- 過去日付への後追い登録では記録対象日を基準に再評価する。

## Fuel Economy Integrity

初期候補は満タン法。

- 前回有効満タン → 今回有効満タンを1区間とする。
- 途中の部分給油は合算する。
- 前回満タン時の給油量は次区間へ含めない。
- 距離0以下、給油量0以下、距離不整合、メーター交換境界では算出しない。
- 算出不能を0km/Lとして表示しない。
- 元履歴の訂正/削除後に派生値を再評価する。

## Reminder Boundary

次回目安はユーザー設定値のみを扱う。

Do not infer:

- manufacturer recommendation
- safe/unsafe to drive
- inspection compliance
- fault diagnosis

## Authorization / Privacy

- Owner only.
- Public vehicle profile must not expose maintenance/fuel/odometer history.
- No GPS/current-location auto capture.
- Store name is optional; address/coordinates are not required.
- VIN/license plate/inspection document image are not required.

## Screen Delta

Candidates:

- SCR-16 extension: Garage -> Maintenance History
- SCR-31: Maintenance History List
- SCR-32: Maintenance Create/Edit
- SCR-33: Fuel Create/Edit
- SCR-34: Maintenance Detail/Summary

Recheck numbering before Source of Truth integration.

## Out of Scope

- OBD/ECU/dashcam integration
- GPS automatic odometer
- VIN/manufacturer API
- shop reservation/payment
- receipt OCR
- receipt/maintenance image storage
- AI fault/safety diagnosis
- driveability judgment
- legal inspection guarantee
- public sharing of private histories

## Web Foundation Governance

### PR #136

- Merged: 2026-08-12 09:08 JST
- Merge commit: `f20f157b396ccca49210b791849dbaef510c0bad`

### Issue #139

https://github.com/mizzz-ivr/RouteGarage/issues/139

main ADR-0002 is still `Status: Proposed` although the ADR required human review + `Accepted` before PR #136 merge.

Do not infer approval from merge status.

### Issue #137

- Phase 4 / Detail Design
- Open / `ai: blocked`
- Keep blocked until ADR acceptance is reconciled through Issue #139.

### Issue #135

- Phase 5 / Implementation
- Open / `ai: blocked`
- Keep blocked until Issue #139 and #137 are complete.

## Review Required for Issue #138

- Product
- UX
- Garage domain
- Security
- Privacy
- Safety
- Data design
- Operations
- Project owner

Key decisions:

1. Maintenance odometer optional vs required.
2. Fuel odometer required.
3. Full-tank method and partial-fill aggregation.
4. Do not calculate across meter replacement initially.
5. Vehicle archive behavior.
6. Vehicle full-delete + history policy.
7. Whether reminder notifications enter MVP.
8. Whether cost/fuel-economy summaries enter MVP.

## Next Tasks

1. Create and review Issue #138 requirements PR.
2. After approval, integrate MVP/screen delta into Source of Truth.
3. Resolve Issue #139 with human architecture review.
4. If accepted, move ADR-0002 to `Accepted` through a follow-up PR.
5. Unblock and complete Issue #137.
6. Unblock Issue #135 and implement Web foundation + CI.
7. Later move Garage history through screen/basic/detail design before implementation.

## Do Not Proceed Yet

- Do not implement #135 while ADR-0002 is Proposed.
- Do not implement Garage history from Issue #138 alone.
- Do not introduce DB/Auth/Maps/Storage providers.
- Do not acquire API keys.
- Do not use real user location/drive/maintenance records in the public repository.
