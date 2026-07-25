# AIプロンプトログ（2026-07-25 / Issue #107）

## User Request

- PR #106をマージしたため、次のタスクを進める。
- RepositoryをSource of Truthとして継続する。

## Target Issue

https://github.com/mizzz-ivr/RouteGarage/issues/107

## Highest Priority Rule

`docs/ai-protocol/PROMPT.txt`を最優先とする。

## Purpose

Google Maps Platform + Routes APIを組み合わせる場合の適用契約、表示、保存、帰属、監査、プライバシー、障害時の境界を、Google公式一次資料に基づいて整理する。

採用決定、契約、APIキー取得、DB / API設計、Next.js / Expo実装は行わない。

## Repository Sources

- `docs/ai-protocol/PROMPT.txt`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/project-overview.md`
- `docs/architecture/system-overview.md`
- `docs/reviews/map-traffic-provider-combination-comparison.md`
- `docs/policies/traffic-and-orbis-information-policy.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Official Sources

確認日: 2026-07-25

- Routes API Policies and Attributions
  - https://developers.google.com/maps/documentation/routes/policies
- Google Maps Platform Service Specific Terms
  - https://cloud.google.com/maps-platform/terms/maps-service-terms
- Google Maps Platform Core Services Summary
  - https://cloud.google.com/maps-platform/terms/maps-services
- Google Maps Platform SLA
  - https://cloud.google.com/maps-platform/terms/sla
- Place IDs
  - https://developers.google.com/maps/documentation/places/web-service/place-id
- Routes API Web Service Best Practices
  - https://developers.google.com/maps/documentation/routes/web-service-best-practices
- Google Maps Platform Security Guidance
  - https://developers.google.com/maps/api-security-best-practices

## Required Documents

- `docs/reviews/google-routes-contract-storage-attribution-review.md`
- `docs/logs/2026-07-25-issue-107.md`
- `docs/ai-prompts/2026-07-25-issue-107-google-routes-contract-boundaries.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Review Requirements

- 契約主体・請求先住所によるEEA / 非EEA適用区分を確定事項として扱わない
- Google Map表示と地図なし表示の要件を分ける
- 非Google地図との併用禁止を明記する
- Google Maps ContentとRouteGarage独自データを分離する
- Place ID、期限付き緯度経度、保存禁止項目を分類する
- polyline、distance、duration、traffic情報、response全体を長期保存しない
- 監査メタデータ候補はGoogle Maps Content・正確な位置を含めない
- 走行記録とGoogle Routes結果の長期結合を前提にしない
- 帰属、利用規約、プライバシーポリシー要件を整理する
- HTTPS、APIキー制限、request log最小化を要件化する
- SLAとRouteGarageの利用者向けSLOを分離する
- API障害・規約変更時の縮退・停止条件を整理する
- Go / No-Goゲートを定義する

## Safety and Privacy Constraints

- 走行中の注視・操作・能動通知を前提にしない
- ルート情報を安全判断の唯一の根拠にしない
- origin / destination等の正確な位置を通常ログへ保存しない
- Google送信履歴と走行履歴を長期結合しない
- 自宅・職場・生活圏に関係する位置情報の外部送信を別途レビューする
- 取締り回避目的のルート・表示・通知を扱わない
- 判断不能時はNo-Go

## Commercial Constraints

- Google Maps Platformを採用決定しない
- Google Cloud契約、請求設定、見積取得を行わない
- APIキー、トライアル、評価環境を取得しない
- 公開資料を実際の契約許諾と同一視しない
- 採用時は実際の契約主体に適用される文書・版を人間が確認する
- provider選定時は別IssueとADRを作成する

## Implementation Prohibitions

- Maps JavaScript API実装
- Routes API呼び出し
- Navigation SDK実装
- APIキー作成・設定
- DB schema / migration
- API / Auth / Infra / Monitoring設計・実装
- Next.js / Expo実装
- provider adapter実装

## Completion Conditions

- Google公式文書と確認日が記録されている
- 表示、保存、帰属、監査、プライバシー、障害境界が整理されている
- Place ID、期限付き緯度経度、保存禁止項目が区別されている
- 非Google地図との併用を許容していない
- RouteGarage独自データとGoogle Maps Contentの境界がある
- Go / No-Goゲートがある
- C-01は採用決定ではなく条件付き候補・保留としている
- Source of Truth、ログ、handoffが整合する
- 実装、契約、APIキー取得を行っていない
- AI生成内容の人間レビューを明記している

## Validation

- docsのみの差分であること
- 新規Markdownが空でないこと
- Google公式一次資料以外を契約根拠に使用していないこと
- EEA / 非EEAの適用を断定していないこと
- Google Map表示・地図なし表示・非Google地図禁止が矛盾していないこと
- 保存期間と保存禁止項目が安全側であること
- Google Routes結果を長期分析・学習・共通DBへ転用していないこと
- request / responseを通常ログへ保存する設計になっていないこと
- SLAをRouteGarageの保証として転用していないこと
- provider採用・API実装へ進んでいないこと

## Expected PR Title

`docs: Google Routesの契約・保存・帰属境界を整理`
