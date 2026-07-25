# AIプロンプトログ（2026-07-24 / Issue #103）

## User Request

- 次のタスクを進める。
- RepositoryをSource of Truthとして継続する。

## Target Issue

https://github.com/mizzz-ivr/RouteGarage/issues/103

## Highest Priority Rule

`docs/ai-protocol/PROMPT.txt`を最優先とする。

## Purpose

地図基盤候補と交通データ候補の組合せについて、利用条件、技術境界、安全性、プライバシー、運用責任を比較し、後続の問い合わせ・基本設計・ADRに必要なGo / No-Goゲートを定義する。

本Issueでは採用決定、契約、問い合わせ送信、APIキー取得、実装を行わない。

## Repository Sources

- `docs/ai-protocol/PROMPT.txt`
- `docs/project-overview.md`
- `docs/architecture/system-overview.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/reviews/traffic-data-provider-comparison.md`
- `docs/reviews/traffic-orbis-legal-operations-review.md`
- `docs/policies/traffic-and-orbis-information-policy.md`
- `docs/inquiries/provider-submission-register.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## Official Sources

確認日: 2026-07-24

### Google Maps Platform

- Google Maps Platform Service Specific Terms
  - https://cloud.google.com/maps-platform/terms/maps-service-terms
- Routes API Policies and Attributions
  - https://developers.google.com/maps/documentation/routes/policies
- Maps JavaScript API Policies and Attributions
  - https://developers.google.com/maps/documentation/javascript/policies
- Maps JavaScript API Data Layer
  - https://developers.google.com/maps/documentation/javascript/datalayer
- Maps JavaScript API Custom Overlays
  - https://developers.google.com/maps/documentation/javascript/customoverlays
- Maps Datasets API / data-driven styling policies
  - https://developers.google.com/maps/documentation/javascript/dds-datasets/dataset-policies

### JARTIC / VICS

- JARTIC Jシステム
  - https://www.jartic.or.jp/s/service/forcorporation/forcorporation01/
- JARTICオープンデータ
  - https://www.jartic.or.jp/service/opendata/
- VICS 事業者への情報提供
  - https://www.vics.or.jp/center/offering/

### HERE

- HERE Traffic API v7 Introduction
  - https://docs.here.com/traffic-api/docs/introduction-to-here-traffic-api-v7
- HERE Traffic API Flow
  - https://docs.here.com/traffic-api/docs/flow
- HERE Traffic API Incidents
  - https://docs.here.com/traffic-api/docs/incidents-here-traffic-api-v7-concepts
- HERE Terms
  - https://www.here.com/terms
- HERE Platform Terms
  - https://legal.here.com/us-en/terms/here-platform/terms-november-2021

## Compared Configurations

- C-01: Google Maps Platform + Google Routes API
- C-02: Google Maps Platform + JARTICオープンデータ
- C-03: Google Maps Platform + JARTIC Jシステム / VICS
- C-04: Google Maps Platform + HERE Traffic API v7
- C-05: HERE地図基盤 + HERE Traffic API v7
- C-06: 地図非依存backend + 複数交通情報provider adapter

## Required Analysis

- 地図描画、ルート計算、交通原データ、上流由来、安全状態、表示変換、キャッシュ、帰属、障害停止の責務を分離する。
- 同一提供元構成と複数提供元構成を比較する。
- 技術的に表示可能であることと契約上許可されることを区別する。
- Google Routes結果の非Google地図利用制限とキャッシュ制限を反映する。
- Google Maps上のカスタムデータ表示機能を、第三者交通データの利用許諾と誤認しない。
- JARTICオープンデータをライブ交通として扱わない。
- JARTIC Jシステム / VICSのGoogle地図重畳を要問い合わせとする。
- HERE TrafficのGoogle地図重畳を、両社の明示許諾までNo-Goとする。
- HERE地図 + HERE Trafficを同一提供元の条件付き候補として比較する。
- provider adapterが契約制限を回避する仕組みではないことを明記する。
- 原レスポンス、道路ジオメトリ、交通値、地図タイル等を無条件に共通DBへ保存しない。
- 構成ごとのGo / No-Goゲートを定義する。
- 採用判断が必要な事項をADR候補へ分離する。

## Safety and Privacy Constraints

- 走行中の注視・操作・能動通知を前提にしない。
- 情報源、更新時刻、鮮度、検証状態、提供停止を利用者へ表示できることを必須とする。
- 地図と交通情報の位置ずれ・競合を検出できない構成をNo-Goとする。
- 利用者位置情報・走行履歴・識別子を複数providerへ無制限に送信しない。
- 移動式取締り・警察位置のリアルタイム情報を扱わない。
- 取締り回避目的のルート・表示・通知を扱わない。
- 判断不能時はNo-Goとする。

## Commercial Constraints

- 公開製品説明を契約許諾として扱わない。
- 適用契約・版・Subscription Planは採用前に人間が確認する。
- 他社地図重畳、再提供、加工、キャッシュ、帰属は提供元ごとに確認する。
- 提供元回答、契約、見積を公開Repositoryへ保存しない。
- 採用時は別IssueとADRを作成する。

## Implementation Prohibitions

- Google Maps / HERE Maps / Routes / Traffic APIの実装
- Next.js / Expo実装
- DB / API / Auth / Infra / Monitoring設計・実装
- APIキー・トライアル取得
- 地図・ルート・交通providerの採用決定
- 問い合わせ送信、契約、見積取得
- オービス正確座標、接近通知、移動式取締り情報

## Required Documents

- 新規: `docs/reviews/map-traffic-provider-combination-comparison.md`
- 新規: `docs/logs/2026-07-24-issue-103.md`
- 新規: `docs/ai-prompts/2026-07-24-issue-103-map-traffic-combination-comparison.md`
- 更新: `docs/current-status.md`
- 更新: `docs/active-issues.md`
- 更新: `docs/handoff/2026-07-22-next-task-handoff.md`

## Completion Conditions

- 比較対象6構成の責務境界と評価がある。
- 確認済み・要問い合わせ・No-Goが区別されている。
- Google、JARTIC / VICS、HEREの組合せ制約を許諾済みと誤認していない。
- 地図非依存backendで保存可能候補と無条件保存禁止項目を分離している。
- 権利、データ、技術、安全、プライバシー、運用のGo / No-Goゲートがある。
- ADR候補と次の問い合わせ項目が整理されている。
- Source of Truth、ログ、handoffが整合している。
- 実装・契約・送信・採用決定を行っていない。

## Expected PR Title

`docs: 地図基盤と交通データの組合せ制約を比較`
