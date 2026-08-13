# Active Issues

## Active

### Issue #138 / PR #140: 愛車の整備・給油・走行距離履歴機能の要件定義

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/138
- PR: https://github.com/mizzz-ivr/RouteGarage/pull/140
- Branch: `docs/issue-138-garage-maintenance-history-requirements`
- Phase: Phase 1 / Requirements Definition
- Status: PR Review
- Priority: High
- Area: Garage

成果物:

- `docs/requirements/garage-maintenance-history-requirements.md`
- `docs/requirements/garage-maintenance-fuel-odometer-invariants.md`
- `docs/requirements/issue-138-mvp-delta.md`
- `docs/screen-design/garage-maintenance-screen-extension.md`

主要スコープ:

- 整備履歴
- 給油履歴
- 走行距離整合性
- 満タン法による燃費候補
- ユーザー設定の次回メンテナンス目安
- 車両別履歴一覧/絞り込み/集計候補

主要ガードレール:

- 履歴は本人限定
- GPS/OBD/VIN自動連携なし
- AI故障診断/整備安全診断なし
- 走行中入力を促さない
- 距離逆転を通常データとして黙って確定しない
- 算出不能燃費を0km/Lと表示しない

### Issue #139: ADR-0002承認状態と実装ゲート整合

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/139
- Priority: Critical
- Area: Architecture / Project Management
- Status: Open / `ai: blocked`

背景:

- PR #136は2026-08-12 09:08 JSTにmainへマージ済み。
- mainのADR-0002は`Status: Proposed`のまま。
- ADR自身はマージ前の人間レビューと`Accepted`遷移を必須条件としていた。

方針:

- PRマージ済みという理由だけでADR承認済み扱いしない。
- 人間レビューで承認できる場合、フォローアップPRで`Accepted`へ更新する。
- Acceptedがmainへ入るまでIssue #137をunblockしない。
- Issue #137完了までIssue #135をunblockしない。

### Issue #137: Webアプリ基盤初期実装の詳細設計・テスト仕様

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/137
- Phase: Phase 4 / Detail Design
- Status: **Blocked by Issue #139 / ADR-0002 acceptance**
- Labels: `ai: blocked`, `ai: human-review-required`

詳細化予定:

- 初期作成ファイル一覧
- Node / package / npm scripts
- landing / safety / error / 404 acceptance
- env / security headers
- Vitest / RTL cases
- Playwright smoke cases
- GitHub Actions trigger / jobs / failure behavior

### Issue #135: Webアプリ基盤を初期実装し、PR品質ゲートを構築する

- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/135
- Phase: Phase 5 / Implementation
- Status: **Blocked by Issue #139 / #137**
- Labels: `ai: blocked`, `ai: human-review-required`

実装予定:

- Next.js / TypeScript / Tailwind bootstrap
- root layout / landing
- 安全注意表示
- error / not-found fallback
- `.env.example`
- lint / typecheck / unit test / build / E2E smoke
- GitHub Actions quality gate

## Recently Completed

### Issue #134 / PR #136: Webアプリ基盤の技術選定・基本設計

- PR #136 merged: 2026-08-12 09:08 JST
- Merge commit: `f20f157b396ccca49210b791849dbaef510c0bad`
- ただしADR-0002はmain上で`Proposed`のため、承認状態はIssue #139で整合する。

### その他

- Issue #132 / PR #133: テーマ別ドライブコレクション・訪問進捗要件
- Issue #130 / PR #131: 24時間ドライブストーリー
- Issue #128 / PR #129: 行きたいスポット・ドライブプラン

## Issue #138 Review Decisions

人間レビューで特に確認する。

1. 整備記録の走行距離を任意のままとするか。
2. 給油記録では走行距離を必須とするか。
3. 満タン法で部分給油を合算するルール。
4. メーター交換をまたぐ燃費を初期MVPでは算出しない方針。
5. 車両アーカイブを追加するか。
6. 車両完全削除時に履歴をどう扱うか。
7. 次回目安をWeb内通知へ接続するか。
8. 費用集計/燃費推移をMVPへ含めるか。

## Cross-Cutting Gates

- Issue #138の承認だけでDB/API/UI実装へ進まない。
- `Proposed` ADRのままIssue #137/#135を開始しない。
- provider未選定SDKを先行導入しない。
- 実位置・実走行履歴・実ユーザー画像をfixtureへ使用しない。
- geolocation / camera / microphoneをWeb基盤から要求しない。
- secretsをRepositoryへ保存しない。
- CI成功を人間レビューの代替にしない。
- 整備履歴を安全診断・車検保証へ拡張しない。

## Upcoming

1. PR #140の人間レビューを受ける。
2. Issue #138承認後、MVP・画面正本へdeltaを統合する。
3. Issue #139でADR-0002の承認状態を整合する。
4. ADR Accepted後にIssue #137をunblockする。
5. Issue #137の詳細設計完了後にIssue #135をunblockする。
6. Issue #135でWeb基盤/品質ゲートを実装する。
7. Garage履歴機能は要件→画面→基本設計→詳細設計→実装の順で後続Issue化する。
