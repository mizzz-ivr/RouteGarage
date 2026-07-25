# Google Maps Platform + Routes API 契約・保存・帰属境界レビュー（Issue #107）

- ドキュメント種別: 要件定義〜基本設計前フェーズの契約・運用境界レビュー
- 対象Issue: https://github.com/mizzz-ivr/RouteGarage/issues/107
- 関連Issue: Issue #103
- 関連PR: PR #106
- 確認日: 2026-07-25
- AI利用: ChatGPT支援、人間レビュー必須
- 位置付け: 採用決定、契約判断、法的助言、実装設計ではない

## 1. 目的

Google Maps PlatformとRoutes APIを同一提供元構成で利用する場合の、表示、保存、帰属、監査、プライバシー、障害時の境界を整理する。

本レビューは、公開されているGoogle公式資料から確認できた事項と、実際の契約主体・請求先・契約版を確認しなければ判断できない事項を分離する。

Google Maps PlatformはRouteGarageの優先候補だが未確定である。本Issueでは採用、契約、APIキー取得、設計、実装を行わない。

## 2. 参照した公式資料

確認日はいずれも2026-07-25。

| 資料 | URL | 確認した主な内容 |
| --- | --- | --- |
| Policies and attributions for Routes API | https://developers.google.com/maps/documentation/routes/policies | キャッシュ例外、地図表示、帰属、利用規約・プライバシーポリシー要件 |
| Google Maps Platform Service Specific Terms | https://cloud.google.com/maps-platform/terms/maps-service-terms | Routes APIの地図なし利用、非Google地図との併用禁止、緯度経度の一時キャッシュ、Google IDの保存 |
| Google Maps Platform Core Services Summary | https://cloud.google.com/maps-platform/terms/maps-services | Routes APIがCore Serviceに含まれること |
| Google Maps Platform SLA | https://cloud.google.com/maps-platform/terms/sla | Covered Serviceに対するSLO、除外条件、クレジット請求条件 |
| Place IDs | https://developers.google.com/maps/documentation/places/web-service/place-id | Place IDの保存と定期的な更新推奨 |
| Routes API Web Service Best Practices | https://developers.google.com/maps/documentation/routes/web-service-best-practices | HTTPS、リトライ、リクエスト処理上の注意 |
| Google Maps Platform security guidance | https://developers.google.com/maps/api-security-best-practices | APIキー制限、認証情報管理、不正利用防止 |

### 2.1 適用契約に関する注意

Routes APIポリシーは、請求先住所がEEA内かEEA外かで参照すべき規約が異なるとしている。

RouteGarageの契約主体、請求先住所、販売代理店経由の有無は未確定である。このため、本レビューではEEA外向けの現行Service Specific Termsを暫定参照するが、採用判断時には実際の契約主体へ適用される文書・版を人間が確認する。

公開ページの内容は将来変更される可能性がある。PRマージ時点の確認結果を恒久的な契約許諾として扱わない。

## 3. 確認できた契約・表示境界

### 3.1 Google Mapを使う表示

- Routes API結果を地図上へ表示する場合はGoogle Map上へ表示する。
- Google Mapが標準で表示する帰属を削除、非表示、改変、遮蔽しない。
- Google Maps ContentとRouteGarage独自情報、ユーザー投稿、JARTIC等の非Google情報を、境界、背景、余白、ラベル等で視覚的に区別する。
- Googleが第三者提供元の帰属を返す場合は、Google Mapsだけでなく指定された第三者帰属も表示する。

### 3.2 地図なし表示

- Routes APIのGoogle Maps Contentは、対応するGoogle MapなしでもCustomer Application内で利用できる。
- 地図なしで表示する場合も、Google Mapsの帰属をGoogle Maps Contentと同じ視覚コンテナ内または近接位置へ表示する。
- 帰属が見えない、読めない、他社情報の出典と誤認される表示はNo-Goとする。

### 3.3 非Google地図

- Routes APIのGoogle Maps Contentを非Google地図と組み合わせて使用しない。
- HERE、Mapbox、MapLibre、OpenStreetMap等の非Google地図へ、Routes APIのポリライン、ルート、所要時間、交通情報を重畳する構成はNo-Goとする。
- 非Google地図とGoogle Routesのテキストカードを同一のルート判断機能として組み合わせる構成も、契約上の「in conjunction」に該当しないことを確認できないためNo-Goとする。

## 4. キャッシュ・保存境界

Google公式資料は、Routes APIコンテンツの大部分にキャッシュ制限があることを示し、例外としてPlace IDを保存可能としている。

EEA外向け現行Service Specific Termsでは、Routes APIから得た緯度・経度を最大30暦日、一時キャッシュでき、期間経過後は削除する必要がある。

明示的な保存許可を確認できない値は、保存可能と推測しない。

### 4.1 保存分類

| データ項目 | 初期分類 | RouteGarageでの扱い | 理由・注意 |
| --- | --- | --- | --- |
| Place ID | 保存候補 | 長期保存可能な識別子候補 | Google IDのキャッシュ例外。古いIDは更新確認が必要 |
| Routes API出力の緯度・経度 | 期限付き一時保存 | 最大30暦日を上限候補とし、自動削除を必須化 | 暫定参照しているEEA外向け現行Service Specific Termsに明示あり |
| 入力としてユーザー自身が登録した緯度・経度 | RouteGarageデータ候補 | 本人同意、目的、保持期間、公開範囲に従い別管理 | Google出力をコピーした値と混同しない |
| encodedPolyline / geoJsonLinestring | 保存しない | レスポンス処理中・表示セッション内のみ | 保存許可を確認できず、道路形状データベース化につながる |
| distanceMeters | 保存しない | 表示セッション内のみ | 明示的なキャッシュ許可を確認できない |
| duration / staticDuration | 保存しない | 表示セッション内のみ | 長期履歴・分析への利用許諾を確認できない |
| traffic-aware duration / speed reading intervals | 保存しない | 表示セッション内のみ | 交通履歴データベース・派生統計を作成しない |
| routeLabels / travelAdvisory | 保存しない | 表示セッション内のみ | 明示的な保存許可を確認できない |
| tollInfo / localizedValues | 保存しない | 表示セッション内のみ | 料金・表示内容の更新性と保存許諾が未確認 |
| ルート候補全体のJSONレスポンス | 保存しない | ログ、DB、分析基盤、バックアップへ保存しない | Google Maps Contentの代替データベース化を避ける |
| レスポンス本文のハッシュ | 要確認 | 初期段階では保存しない | 同一結果の追跡・再識別に利用できる可能性がある |
| HTTPステータス / Googleのエラー分類 | 運用メタデータ候補 | 正確な位置やレスポンス本文を含めず保存候補 | RouteGarage生成の障害監視情報として別管理 |
| RouteGarage内部request ID | 運用メタデータ候補 | ランダムIDとして保存候補 | Googleレスポンスを復元できないことが条件 |
| リクエスト日時 / レイテンシ /再試行回数 | 運用メタデータ候補 | 個人・位置情報を除去して保存候補 | SLA・障害調査用。保持期間を別途定義 |
| 使用SKU / quota結果 /課金集計 | 運用メタデータ候補 | 集計値として保存候補 | 正確な位置・ユーザー単位の行動履歴と結合しない |
| origin / destinationの生リクエスト | 原則保存しない | Google送信ログへ残さない | 正確な位置情報・検索条件の漏えいを防ぐ |

### 4.2 30日キャッシュを採用する場合の必須条件

緯度・経度の30日キャッシュを設計候補に含める場合でも、以下を満たすまで実装しない。

- 契約主体に適用されるService Specific Termsで同じ許可を確認する
- `source=google_routes`を付与し、RouteGarage独自座標と分離する
- `cached_at`、`expires_at`、`deletion_status`を持つ
- 30暦日より短い保持期間を初期値とする
- 期限切れ後の利用、バックアップ残存、分析転用を防止する
- 削除ジョブ、バックアップ削除、障害時の手動削除手順を定義する
- エンドユーザーをまたいだ共有キャッシュの可否を法務レビューする

本IssueではDB項目や削除ジョブを設計しない。

## 5. RouteGarage独自データとの境界

### 5.1 長期保存候補

以下はRouteGarage側が独立して作成・取得し、Google Maps Contentをコピー・再構成していない場合に限り、長期保存候補とする。

- ユーザーが入力したルート名
- ユーザーが入力したメモ・タグ
- 旅程の作成日時・更新日時
- RouteGarage内部ID
- ユーザーが明示的に登録した出発・到着・経由地点
- 公開範囲、共有設定、削除状態
- ルート再計算が必要であることを示すRouteGarage独自フラグ
- Google Maps Contentを含まない障害・監査メタデータ

ユーザー入力地点がGoogle Places等の候補選択を経由した場合は、Places API側の保存条件を別途確認する。表示名、住所、カテゴリ等を「ユーザー入力」とみなして無条件に保存しない。

### 5.2 長期保存しない情報

- Google Routesが生成した道路形状・ポリライン
- Google Routesが返した距離、所要時間、交通情報の履歴
- Google Routesの結果から作成した長期交通統計
- Google Routesの結果を再配信するための共通ルートDB
- Google Routes結果を別providerへ移植するための変換データ
- Google Maps Contentを学習データ、評価データ、検索インデックス、埋め込みへ変換したもの

### 5.3 走行記録との関連付け

RouteGarageの走行記録はユーザー自身の計測データとして別管理する。

- Google Routesの予定ルートと実走行軌跡を同一データとして保存しない
- 実走行軌跡からGoogle Routesポリラインを逆算・復元しない
- Google Routesの距離・所要時間を長期比較指標として保存しない
- 「Google Routesで計算した」というprovider種別と計算日時を残す場合も、結果を復元できない最小メタデータに限定する
- 予定値と実績値の比較機能は、保存許諾を確認するまで要件化しない

## 6. 帰属・UI要件

### 6.1 共通要件

- 新規実装では`Google Maps`ロゴまたは指定された`Google Maps`テキストを使用する
- 帰属を削除、隠蔽、ぼかし、改変しない
- Google Maps ContentとRouteGarage独自コンテンツを視覚的に区別する
- Google Mapsの帰属をRouteGarage独自データやJARTIC等の出典として誤認させない
- Googleが第三者帰属を提供する場合は当該表示も含める
- アクセシビリティ上のコントラストとラベルを確保する

### 6.2 画面単位の初期方針

| 画面・表示 | 初期方針 |
| --- | --- |
| Google Map上のルート表示 | Google Map標準帰属を維持し、追加コンテンツの出所を分離表示 |
| 地図なしのルート概要カード | 同じカードまたは直近にGoogle Maps帰属を表示 |
| ルート候補比較 | 各候補がGoogle Maps Contentであることを利用者が識別できる構造にする |
| 履歴一覧 | 保存済みGoogle結果を表示しない。RouteGarage独自情報だけを表示 |
| エクスポート・共有画像 | Google Maps Contentを含む場合の許諾を確認できるまでNo-Go |
| 非Google地図を含む画面 | Google Routes結果を同一機能として表示しない |

本Issueではピクセル単位のUI設計を行わない。

## 7. 利用規約・プライバシー要件

Routes APIを利用するCustomer Applicationは、一般公開された利用規約とプライバシーポリシーを用意し、Googleの規約・プライバシーポリシーへの参照を含める必要がある。

RouteGarageでは少なくとも次を明記する必要がある。

- Google Maps Platformを利用する機能
- Googleへ送信する情報の種類と目的
- 出発地、目的地、経由地、現在地等の位置情報の扱い
- GoogleとRouteGarageの責任範囲
- ルート・交通情報の完全性、最新性、到達可能性を保証しないこと
- 走行前または安全な場所に停車中の利用を前提とすること
- API障害・規約変更・契約停止時に機能を停止・縮退すること
- Google Maps ContentとRouteGarage独自データの保持期間が異なること

具体的な利用規約・プライバシーポリシー文面は別Issueで作成する。

## 8. セキュリティ・プライバシー境界

### 8.1 APIリクエスト

- APIキーや認証情報をRepository、client log、エラーメッセージへ記録しない
- HTTPSを必須とする
- APIキーには用途に応じたapplication restrictionとAPI restrictionを設定する
- server-side呼び出しを採用する場合も、位置情報を含むrequest bodyを通常ログへ保存しない
- リトライは指数バックオフを用い、障害時の大量再送を防ぐ

### 8.2 位置情報最小化

- 現在地を送信する機能と、ユーザーが手動指定した地点を送信する機能を区別する
- RouteGarageが保存済みの正確位置を、ルート再計算のたびに自動送信する設計を初期前提にしない
- 自宅・職場・生活圏を推定できる地点は、Google送信の必要性、同意、代替手段を別途レビューする
- Googleへの送信履歴とRouteGarageの走行履歴をユーザー単位で長期結合しない

## 9. SLA・障害・規約変更

- Routes APIはGoogle Maps Platform Core Services Summaryに掲載されている
- Google Maps Platform SLAはCovered Serviceに対して月間99.9%のSLOを示している
- 実際のSLA適用、クレジット、除外、請求手続は契約主体と利用プランを確認する
- 5xx以外の失敗、quota制限、不正なrequest、Customer側障害等はSLA対象外となる可能性がある
- Google側の稼働率だけをRouteGarageの利用者向け可用性保証に転用しない

### 9.1 RouteGarageの縮退要件

- API失敗時に保存済みルート結果を無期限再表示しない
- 再計算不能、交通情報取得不能、結果の鮮度不明を区別する
- Google Routesが停止した場合でも、ユーザーのメモ、旅程名、独自スポット等のRouteGarageデータは閲覧可能にする候補
- Google Maps Contentを表示できない場合は、帰属だけを残した空表示ではなく、機能停止状態を明確に示す
- 規約変更時にGoogle関連機能だけを停止できるfeature flag・運用手順を後続設計で検討する

## 10. Go / No-Goゲート

以下をすべて満たすまで、C-01を基本設計の確定前提にしない。

### 契約

- [ ] 契約主体・請求先住所・販売代理店経由の有無を確定
- [ ] 適用されるTerms of Service、Service Specific Terms、Policiesの文書名・版を記録
- [ ] EEA / 非EEAの適用区分を確認
- [ ] 法務担当がRoutes APIの利用形態をレビュー

### 表示・帰属

- [ ] 地図表示はGoogle Mapに限定
- [ ] 非Google地図との併用を防止
- [ ] 地図なし表示のGoogle Maps帰属を設計
- [ ] Google Maps Contentと独自・第三者コンテンツを視覚的に分離
- [ ] 第三者帰属を表示できる領域を確保

### 保存・削除

- [ ] Place ID以外の長期保存を許可済みと扱わない
- [ ] Google出力緯度経度の30日以内削除を実装・監査できる設計
- [ ] polyline、distance、duration、traffic情報を永続化しない設計
- [ ] backup、log、analytics、debug dumpへの混入防止
- [ ] RouteGarage独自データとGoogle Maps Contentを物理・論理的に分離

### プライバシー・セキュリティ

- [ ] 公開利用規約・プライバシーポリシーを用意
- [ ] 位置情報の送信目的・同意・保持を定義
- [ ] APIキー制限、HTTPS、秘密情報管理を設計
- [ ] 正確な位置を通常ログへ記録しない
- [ ] 自宅・職場・生活圏推定リスクをレビュー

### 運用

- [ ] quota、障害、5xx、timeout、規約変更を監視する要件
- [ ] Google関連機能だけを停止できる縮退方針
- [ ] 利用者へ再計算不能・交通情報不能・鮮度不明を区別表示
- [ ] SLAの適用範囲とRouteGarageの利用者向けSLOを分離
- [ ] プロジェクト責任者、法務、運用、セキュリティ・プライバシー担当が承認

1項目でも未確認の場合は`保留`または`No-Go`とする。

## 11. 初期判定

`条件付き候補を維持 / 基本設計前提としては保留`

理由:

- 同一提供元構成として、Google Map上のRoutes API表示と地図なし表示の基本条件を公式資料で確認できた
- 非Google地図との併用禁止を明確にできた
- Place IDと期限付き緯度経度以外の保存境界は安全側に定義できた
- 契約主体、適用文書版、監査メタデータの保存範囲、利用規約・プライバシー文面、削除運用が未確定

本判定はGoogle Maps Platform / Routes APIの採用決定ではない。

## 12. 後続候補

1. C-01レビューの人間確認と修正
2. C-02 Google Maps + JARTICオープンデータの静的レイヤー・帰属・履歴保存レビュー
3. Google Maps Platformを採用候補として絞る場合の契約主体・請求・適用文書確認
4. 地図・ルートprovider選定ADR
5. provider確定後のadapter・保存境界基本設計
6. RouteGarage利用規約・プライバシーポリシー論点整理

## 13. ADR

本IssueではADRを作成しない。

Google Maps Platform / Routes APIの採用、技術構成、DB、API、認証、インフラを決定していないため、ADRは後続のprovider選定Issueで作成する。
