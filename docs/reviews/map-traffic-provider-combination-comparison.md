# 地図基盤候補と交通データ候補の組合せ制約比較（Issue #103）

- ドキュメント種別: 要件定義〜基本設計前フェーズの比較・調査記録
- 対象Issue: https://github.com/mizzz-ivr/RouteGarage/issues/103
- 関連Issue: Issue #97、Issue #99、Issue #101
- 関連PR: PR #98、PR #100、PR #102
- 確認日: 2026-07-24
- AI利用: ChatGPT支援、人間レビュー必須
- 位置付け: 採用決定、契約判断、法的助言、実装設計ではない

## 1. 目的

地図基盤、ルート計算、交通情報を異なる提供元から組み合わせる場合の、利用条件、技術境界、安全性、プライバシー、運用責任を比較する。

本比較では、公開されている公式資料から確認できた事項と、提供元への問い合わせ・契約確認が必要な事項を分離する。公開資料で確認できない組合せを許諾済みとみなさない。

## 2. Repository前提

- 地図基盤はGoogle Maps Platformを優先候補とするが、未確定である。
- 交通情報候補は、JARTICオープンデータ、JARTIC Jシステム / VICS、Google Maps Platform Routes API、HERE Traffic API v7である。
- 移動式取締り・警察位置のリアルタイム情報はMVP非対象である。
- 走行中の注視・操作・能動通知を前提にしない。
- 情報源、提供元更新時刻、鮮度、検証状態、提供停止を利用者へ示せない構成はNo-Goとする。
- 地図基盤、交通データ、ルート計算、キャッシュの採用は、本Issueでは決定しない。
- 提供元問い合わせは未承認であり、本Issueでは送信しない。

## 3. 比較ステータス

| ステータス | 意味 |
| --- | --- |
| 条件付き候補 | 公開資料から基本的な実現可能性を確認できるが、契約・設計条件を満たす必要がある |
| 用途限定候補 | 特定の情報種別・鮮度・表示方法に限定して検討できる |
| 要問い合わせ | 技術的な組合せは想定できるが、契約・再提供・地図重畳等の許諾を確認できない |
| 現時点No-Go | 安全・権利・契約・運用可否を判断できず、設計前提にできない |
| 非対象 | RouteGarageのMVP要件・安全方針により扱わない |

## 4. 責務境界

組合せにかかわらず、以下を混同しない。

| 責務 | 内容 | 所有主体の候補 |
| --- | --- | --- |
| 地図描画 | ベースマップ、道路、地名、地物、地図UI | 地図提供元 |
| ルート計算 | 経路、距離、所要時間、交通考慮、ポリライン | ルート提供元 |
| 交通原データ | 渋滞、事故、工事、閉鎖、交通流等 | 交通情報提供元 |
| 上流由来 | 行政、道路管理者、センサー、提供者、推定等 | 交通情報提供元から取得しRouteGarageが追跡 |
| 安全状態 | 表示可否、鮮度、検証、競合、提供停止 | RouteGarage。ただし提供元データから許可された範囲で算出 |
| 表示変換 | 利用者向けラベル、注意文言、強調度 | RouteGarage。ただし加工許諾が必要 |
| キャッシュ | 一時保存、期限切れ、削除 | 契約条件に従いRouteGarageが管理 |
| 帰属 | Google Maps、JARTIC、VICS、HERE等の表示 | 各契約・公式ポリシーに従いRouteGarageが実装 |
| 障害・停止 | API障害、規約変更、契約停止、誤情報 | 提供元通知を受けRouteGarageが機能単位で停止 |

## 5. 組合せ一覧

| ID | 地図基盤 | ルート・交通情報 | 初期評価 | 主な理由 |
| --- | --- | --- | --- | --- |
| C-01 | Google Maps Platform | Google Routes API | 条件付き候補 | 同一提供元で表示・帰属を整理しやすいが、Routes APIのキャッシュ・保存・非Google地図併用制限がある |
| C-02 | Google Maps Platform | JARTICオープンデータ | 用途限定候補 | Google MapsはカスタムGeoJSON・オーバーレイを表示でき、JARTICオープンデータは加工・公衆送信可能だが、月次更新でライブ交通用途ではない |
| C-03 | Google Maps Platform | JARTIC Jシステム / VICS | 要問い合わせ | VICS符号型はデジタル道路地図への重畳に適するが、Google地図への重畳・再提供・加工条件は契約確認が必要 |
| C-04 | Google Maps Platform | HERE Traffic API v7 | 現時点No-Go | 両社の公開資料だけでは、HERE TrafficをGoogle地図へ重畳する契約上の許諾と責務分界を確認できない |
| C-05 | HERE地図基盤 | HERE Traffic API v7 | 条件付き候補 | 同一提供元でTraffic APIとHERE地図の統合例があるが、日本向け契約、キャッシュ、再提供、利用者表示、SLAの確認が必要 |
| C-06 | 地図提供元から分離 | 複数交通情報をRouteGarage backendで統合 | 要問い合わせ | adapter境界は設計可能だが、原データの保存・再配布・派生データ作成を提供元中立に行えるとは限らない |

## 6. C-01: Google Maps Platform + Google Routes API

### 6.1 確認済み

- Routes APIは交通を考慮したルート、所要時間、交通情報付きポリラインを提供する。
- Routes API結果を地図上へ表示する場合はGoogle Map上へ表示する必要がある。
- Routes API結果は地図なしで表示できるが、Google Mapsの帰属表示が必要である。
- Routes APIのGoogle Maps Contentを非Google地図と組み合わせて使用してはならない。
- 大部分のGoogle Maps Contentはキャッシュ・保存制限を受ける。Place IDは例外として保存可能である。
- Google Maps Contentと非Googleコンテンツは、利用者が出所を識別できるよう視覚的に区別する必要がある。

### 6.2 RouteGarageでの境界

- Google Routesのルート・所要時間・交通ポリラインをGoogle Mapへ表示する構成に限定する。
- Google Routes結果をRouteGarage独自の提供元中立道路データベースへ恒久保存しない。
- RouteGarage独自のブックマーク、ユーザー入力、公開範囲、安全状態はGoogle Maps Contentと分離する。
- ルート結果の有効期間、再計算、キャッシュ対象をGoogleの現行契約・レスポンスヘッダーに従って定義する。
- Google Routesの交通情報を他社地図へ表示する構成はNo-Goとする。

### 6.3 未確認

- 日本の請求先・契約形態に適用される最終契約版。
- RouteGarageが必要とする監査メタデータの保存可能範囲。
- 走行記録とGoogle Routes結果を関連付ける際の保存境界。
- Traffic-aware polylineからRouteGarage独自の長期交通統計を作成できるか。

### 6.4 初期判定

`条件付き候補`

Google地図とGoogle Routesを同一画面・同一契約境界で使う場合に限り、基本設計候補として比較を継続できる。採用決定ではない。

## 7. C-02: Google Maps Platform + JARTICオープンデータ

### 7.1 確認済み

- Maps JavaScript APIは、任意の地理データ、GeoJSON、マーカー、ポリライン、ポリゴン、カスタムオーバーレイをGoogle Map上へ表示できる。
- Google Maps上で非Googleコンテンツを扱う場合、Google Maps Contentと非Googleコンテンツの出所を誤認させず、帰属を妨げない必要がある。
- JARTICオープンデータは、商用利用、複製、公衆送信、編集・加工が可能である。
- JARTICオープンデータを加工した場合は、出典と加工した事実を表示し、JARTIC等が加工後データを作成したように表示してはならない。
- JARTICオープンデータは原則月次更新で、更新前情報が取得できなくなる場合がある。

### 7.2 RouteGarageでの境界

- 交通規制、交通量、交差点制御等の静的・定期更新レイヤーに限定する。
- 現在の渋滞、事故、閉鎖、所要時間を示すライブ交通レイヤーとして扱わない。
- Google Mapsの帰属とJARTICの出典・加工表示を別々に明示する。
- JARTICデータの更新対象期間、提供元更新日、RouteGarage取得日を分離する。
- Googleへデータをアップロードする方式を採る場合は、JARTICデータを共有・提供する権利とGoogle側の公開範囲を別途確認する。

### 7.3 未確認

- Google Maps Datasets API等へJARTICデータをアップロードする場合の公開範囲と削除手順。
- JARTICデータ中の第三者権利を含む項目の扱い。
- RouteGarageが必要とする履歴保存期間と、更新前データの保存可否。

### 7.4 初期判定

`用途限定候補`

静的・定期更新情報として、出典・加工・更新日を明示できる場合のみ検討する。

## 8. C-03: Google Maps Platform + JARTIC Jシステム / VICS

### 8.1 確認済み

- Jシステムは、渋滞、事故・工事、所要時間、入口・出口閉鎖、SA・PA等の道路交通情報をオンライン提供する。
- テキスト型、簡易図型、VICS符号型がある。
- VICS符号型はデジタル道路地図への重畳表示に適した形式である。
- VICS符号型の利用には、JARTICとの利用関係に加えてVICSセンターとの技術開示契約が必要である。
- Google Maps JavaScript APIはカスタムデータ・オーバーレイを技術的に表示できる。

### 8.2 公開資料だけでは確認できない

- Google Maps上へのJシステム / VICS情報の重畳許諾。
- VICS道路リンクとGoogle道路ネットワークの対応付け・変換許諾。
- RouteGarage backendから複数利用者への配信・再提供条件。
- 原データの加工、要約、状態判定、競合検出の許諾。
- キャッシュ、履歴、バックアップ、削除義務。
- JARTIC / VICSとGoogle Maps双方の帰属を同一画面に表示する条件。
- 障害、訂正、撤回、契約停止時の責務分界。

### 8.3 初期判定

`要問い合わせ`

技術的な表示機能が存在しても契約上の許諾を意味しない。JARTIC / VICSとGoogle双方の書面確認が揃うまで基本設計前提にしない。

## 9. C-04: Google Maps Platform + HERE Traffic API v7

### 9.1 確認済み

- HERE Traffic API v7は、リアルタイムの交通流とインシデントをJSONで提供する。
- Flowは道路区間ごとの速度・jam factor等を提供し、Incidentsは事故、工事、閉鎖等の事象を提供する。
- Google Maps JavaScript APIは技術的にカスタム地理データを重畳できる。
- Google Mapsのポリシーは、Google Maps Contentと非Googleコンテンツを利用者が識別できるようにすることを求める。

### 9.2 公開資料だけでは確認できない

- HERE TrafficをGoogle Mapへ重畳する契約上の許諾。
- HERE Trafficの位置参照・ジオメトリをGoogle道路ネットワークへ変換する許諾。
- HERE TrafficをRouteGarage backendで複数利用者へ配信する条件。
- キャッシュ、状態変換、複数情報源との競合検出、長期監査保存の条件。
- HERE・Google双方の帰属を同一画面で満たす方法。
- Google地図とHERE Trafficのずれ・不一致に対する責任分界。
- 日本向けTrafficデータの上流由来・サプライヤー条件。

### 9.3 初期判定

`現時点No-Go`

両提供元から、第三者地図重畳、利用者表示、加工、キャッシュ、帰属について書面許諾を得るまで採用候補にしない。

## 10. C-05: HERE地図基盤 + HERE Traffic API v7

### 10.1 確認済み

- HERE Traffic API v7はFlowとIncidentsを提供する。
- HEREはTraffic Vector TileをHERE Maps API for JavaScriptへ統合する例を公開している。
- HEREの公開Platform Termsには、HERE Content上へ第三者コンテンツを重畳する場合、非HEREコンテンツの出所を正しい帰属で区別する条件が示されている。
- HEREの公開Termsにはキャッシュ・保存制限があり、契約プラン、レスポンスヘッダー、地域により条件が異なる。
- HEREサービスへ利用者の個人データを送る場合、エンドユーザー条項・プライバシー通知等が必要になる場合がある。

### 10.2 RouteGarageでの境界

- HERE地図とHERE Trafficを同じ提供元境界で使用する構成として比較する。
- JARTIC等の第三者情報を追加する場合は、非HEREコンテンツとして出所を区別し、JARTIC側の重畳・再提供許諾も確認する。
- 日本向けTrafficのキャッシュ・保存期間は、公開Termsの一般例ではなく、適用契約・Subscription Plan・レスポンスヘッダーで確定する。
- Web、mobile、serverごとのapp ID、契約、料金、利用者データ送信を確認する。

### 10.3 未確認

- RouteGarageに適用される現行HERE契約・Subscription Plan。
- 日本向けFlow / Incidentsの商用利用、サプライヤー条件、帰属。
- 複数利用者へのbackend配信、派生状態、監査保存の許諾。
- SLA、障害通知、契約停止時の削除・停止義務。

### 10.4 初期判定

`条件付き候補`

同一提供元構成として比較を継続できるが、契約・日本データ・キャッシュ・プライバシーの書面確認が必要である。

## 11. C-06: 地図非依存backend + 複数交通情報

### 11.1 目的

地図UIと交通情報の契約・障害を分離するため、provider adapterを設け、RouteGarage側で安全状態を統一管理する構成を検討する。

### 11.2 許容する境界候補

- provider ID
- 上流由来区分
- 取得時刻
- 提供元更新時刻
- 契約上許可された安定ID
- 表示可否
- 鮮度状態
- 検証状態
- 提供停止理由
- API取得成否
- 規約・契約版参照ID
- 公開Repositoryに含めない証跡保管先参照ID

### 11.3 無条件には保存しないもの

- 提供元の原レスポンス全文
- 道路ジオメトリ・ポリライン
- 交通速度・jam factor・事象詳細
- 地図タイル・画像
- 契約で許可されていない派生データ
- 取得した1レスポンスを複数利用者へ使い回すためのキャッシュ
- 提供元コンテンツから作成した代替交通データベース

### 11.4 重要条件

- provider adapterは契約制限を回避する仕組みではない。
- 各providerのデータは、保存、加工、再配布、期限、削除を個別に管理する。
- 複数providerの情報が競合した場合、一方を自動的に正しいと推測しない。
- 契約・上流由来・更新時刻を確認できない情報は提供停止とする。
- 地図提供元を切り替えても、別提供元コンテンツをそのまま移植できるとは限らない。

### 11.5 初期判定

`要問い合わせ`

アーキテクチャ上は推奨候補だが、保存するフィールドと派生状態を提供元契約ごとに承認する必要がある。

## 12. 組合せ別Go / No-Goゲート

次をすべて満たす構成のみ、基本設計候補へ進める。

### 12.1 権利・契約

- [ ] 地図表示の契約主体・適用規約・版を特定した
- [ ] 交通情報の契約主体・適用規約・版を特定した
- [ ] Web / mobile / backend利用が許可される
- [ ] 複数利用者への表示・公衆送信・backend配信が許可される
- [ ] 他社地図への重畳または同一提供元利用が明示的に許可される
- [ ] 必要な加工、状態判定、競合検出が許可される
- [ ] 必須帰属、ロゴ、リンク、エンドユーザー条項を実装できる

### 12.2 データ・キャッシュ

- [ ] 上流由来、提供元更新時刻、訂正、撤回、無効化を追跡できる
- [ ] キャッシュ対象、期間、有効期限、再表示条件を特定した
- [ ] 履歴・監査メタデータの保存範囲を特定した
- [ ] 契約終了・規約変更・提供停止時の削除義務を実施できる
- [ ] 代替データベース作成や無許可の再配布にならない

### 12.3 技術

- [ ] 道路リンク・位置参照・座標変換の責任主体を特定した
- [ ] 地図と交通データのずれを検出・停止できる
- [ ] provider単位・地域単位・情報種別単位で停止できる
- [ ] 障害時に推測データで補完しない
- [ ] RouteGarage安全状態を提供元コンテンツと区別できる

### 12.4 安全・プライバシー

- [ ] 情報源、更新時刻、鮮度、検証状態、提供停止を利用者へ表示できる
- [ ] 走行中の注視・操作・能動通知を前提にしない
- [ ] 利用者位置情報・走行履歴・識別子の送信先と目的を特定した
- [ ] 送信データを最小化できる
- [ ] 必要な同意、プライバシー通知、保持・削除を実装できる
- [ ] 移動式取締り・警察位置リアルタイム情報を扱わない

### 12.5 運用

- [ ] 各提供元のSLA、障害通知、サポート、緊急連絡を確認した
- [ ] 複数提供元間の責任分界を定義した
- [ ] 規約変更・契約停止時の機能停止手順を定義した
- [ ] 提供元回答・契約・見積をアクセス制御された場所へ保存できる
- [ ] 法務、運用、セキュリティ・プライバシー、プロジェクト責任者が承認した

1項目でも判断できない場合は`No-Go`または`保留`とする。

## 13. 構成別の次アクション

| 構成 | 次アクション |
| --- | --- |
| C-01 Google + Google Routes | Googleの適用契約・キャッシュ・監査保存範囲を確認する |
| C-02 Google + JARTIC Open Data | 静的レイヤー用途、第三者権利、履歴保存、帰属UIをレビューする |
| C-03 Google + JARTIC / VICS | Issue #101の送信パッケージへGoogle地図重畳・位置参照変換の質問を反映する |
| C-04 Google + HERE Traffic | HERE・Google双方へ第三者地図重畳の書面確認ができるまでNo-Goを維持する |
| C-05 HERE + HERE Traffic | HEREの適用契約、日本データ、キャッシュ、backend配信、SLAを問い合わせる |
| C-06 provider adapter | 保存フィールド・派生状態・削除単位を基本設計Issueで定義し、契約ごとにレビューする |

## 14. ADR候補

本IssueではADRを作成しない。次の判断を行う場合にADRを作成する。

- 地図プロバイダーの採用
- ルート計算プロバイダーの採用
- 交通情報プロバイダーの採用
- 同一提供元構成と複数提供元構成の選択
- provider adapterと保存境界の採用
- 地図・交通データの障害時縮退方式

## 15. 現時点の推奨

採用決定ではなく、調査順序として以下を推奨する。

1. C-01 Google Maps + Google Routesを同一提供元の基準構成として、契約・保存・帰属条件を確認する。
2. C-02 Google Maps + JARTICオープンデータを静的レイヤー用途として分離評価する。
3. C-03 Google Maps + JARTIC / VICSは、JARTIC / VICSへの問い合わせ承認後に重畳・再提供・位置参照変換を確認する。
4. C-05 HERE + HERE Trafficを同一提供元の代替構成として契約問い合わせ対象にする。
5. C-04 Google Maps + HERE Trafficは、両社の明示許諾が得られるまでNo-Goを維持する。
6. C-06 provider adapterは、採用provider確定後に契約制限を反映した基本設計として定義する。

## 16. 参照した公式資料

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

公開Termsの版が実際の契約に適用されるとは限らない。採用判断では、契約時点の適用文書・版・Subscription Planを人間が確認する。
