# Current Status

## 現在状態

- Repository: `mizzz-ivr/RouteGarage`
- 開発フェーズ: Phase 1 / Requirements Definition
- 開発手法: ウォーターフォール
- AI生成物: 人間レビュー必須
- 現在の主目的: Issue #124 / PR #125として、一般道路の「断面交通量情報」の項目単位第三者権利と位置表示境界を公開資料から予備調査する
- 実装、実データ取得、有料データ購入、provider採用、APIキー取得、契約、外部問い合わせ: 未実施

## 進行中

- Issue #124: https://github.com/mizzz-ivr/RouteGarage/issues/124
- PR #125: https://github.com/mizzz-ivr/RouteGarage/pull/125
- Branch: `docs/issue-124-section-traffic-rights`
- Main document: `docs/registers/jartic-section-traffic-volume-rights-preflight.md`
- Base register: `docs/registers/jartic-open-data-third-party-rights-register.md`
- Scope: 項目群、上流由来、第三者権利候補、交通管理リンク依存、地点位置・DRM依存、利用方法別No-Go、追加証跡
- Current Decision: 断面交通量情報は`調査中 / No-Go`
- Data Action: JARTIC ZIP / CSV、位置情報、概要版・詳細版を取得・保存・解析しない
- Implementation: Next.js / Expo / Maps SDK / DB / API / Auth / Infra / Storageを実装しない

## 実行状態

- Issue #124: Open
- PR #125: Open / mergeable / 人間レビュー待ち
- Branch: 作成済み
- 項目単位予備調査: 作成済み
- 作業ログ・AIプロンプトログ: 作成済み
- Source of Truth: 同期済み
- PR作成時の`main`比較: 6 commits / 6 files / behind 0
- 未解決review thread: 0件
- AI支援セルフレビュー: COMMENTで記録済み / 文書整合性ブロッカーなし
- Codex自動レビュー: コメントなし / 未実施
- GitHub Actions / commit status: workflow・status checkなし
- 人間・法務・運用・安全・セキュリティ・プライバシーレビュー: 未実施

## 直近の完了済み

- Issue #121 / PR #123: JARTIC静的レイヤーの保持期間・再確認期限・削除SLA暫定基準
  - Merge commit: `bc4489fdcff1a9bfad25f12029a0d3fe201763d3`
  - Merged at: 2026-08-04 09:50 JST
- Issue #119 / PR #120: 生活拠点ぼかし・共有出力・外部キャプチャ保護要件
  - Merge commit: `8c3fc97cdd10dc3ce5ba0f78c7cee41a0e2c3a5b`
- Issue #117 / PR #118: 保持・削除レビュー指摘対応
- Issue #115 / PR #116: JARTIC静的レイヤー保持・削除要件
- Issue #113 / PR #114: 出典・加工・鮮度・安全・プライバシー表示要件
- Issue #111 / PR #112: JARTICオープンデータ第三者権利台帳

## JARTIC権利台帳

| データセット | 状態 | 公開判定 | 補足 |
| --- | --- | --- | --- |
| 交通規制情報 | 未着手 | No-Go | ファイル・項目調査未実施 |
| 断面交通量情報 | 調査中 | No-Go | Issue #124 / PR #125で公開資料プレフライトをレビュー中 |
| 交通量データ（国土交通省） | 未着手 | No-Go | API規約・項目調査未実施 |
| 交差点制御情報 | 未着手 | No-Go | 交通管理リンク・位置情報依存の調査未実施 |

## Issue #124で確認した公開資料上の事実

### JARTIC

- 断面交通量は各都道府県警察が車両感知器等で収集した情報である。
- リンク番号の詳細・最新情報は日本交通管理技術協会を参照するよう案内される。
- 原則毎月月初更新で、更新前情報は取得できなくなる。
- 利用規約は複製・公衆送信・加工・商用利用を認める。
- 出典表示・加工表示が必要である。
- 第三者権利は利用者責任で確認・許諾取得する必要がある。

### 日本交通管理技術協会

- JARTIC断面交通量情報の地点はリンク番号とリンク終端距離で表される。
- リンクは同協会が著作権を持つ交通管理リンクであると説明される。
- 地点位置のPDF・緯度経度・シェープファイルを別途提供する。
- 位置情報提供には一般財団法人日本デジタル道路地図協会の全国デジタル道路データベースも関係する。
- 概要版は用途限定、詳細版A・Bは有料提供である。

## 項目群別の現在判定

| 項目群 | 主な項目候補 | 現在判定 |
| --- | --- | --- |
| 観測・識別 | 時刻、情報源コード、計測地点番号、名称相当、断面交通量 | 項目別権利処理範囲未確認 / No-Go |
| 地域参照 | 2次メッシュコード | 根拠・利用条件未確認 / No-Go |
| 交通管理リンク参照 | リンク区分、リンク番号、リンク終端距離、リンクバージョン | 第三者権利ありの可能性が高い / No-Go |
| 地点位置派生 | PDF地図、緯度経度、シェープファイル | 別契約・別権利確認必要 / No-Go |

## 利用方法別の現在判定

- JARTIC ZIP / CSV取得: No-Go
- 原本・正規化保存: No-Go
- 数値集計: 将来の条件付き候補だが現時点No-Go
- 数値のみの表示: 現時点No-Go
- Google Map等への地点・リンク表示: No-Go
- 緯度経度変換: No-Go
- 履歴保存・履歴公開: No-Go
- CSV / GeoJSON等のエクスポート: No-Go
- Google Maps Datasets等へのアップロード: No-Go

`条件付き候補`は許可ではない。実ファイル・説明書・ハッシュ・項目別権利証跡と人間承認が揃うまで実行しない。

## 追加確認が必要な事項

- JARTIC正式説明書のURL・版・文書ハッシュ
- 対象月・地域・原本ファイル名・原本ハッシュ
- 公開ページ参考表No.4の正式項目名
- 項目別の上流由来と第三者権利処理済み範囲
- リンク参照項目の保存・加工・公衆送信可否
- 日本交通管理技術協会の詳細版A・Bの完全なライセンス条件
- 日本デジタル道路地図協会の権利・帰属・利用条件
- リンク項目を除外した部分利用・集約利用の可否

外部問い合わせ・購入は別Issueで承認後に行う。

## 横断No-Go

- 判断不能な項目を公開Goにする。
- JARTIC利用規約だけで第三者権利処理済みと判断する。
- リンク番号を単なる数値として権利確認対象外にする。
- 有料・用途限定の位置情報を無断で取得・転用・再生成する。
- 実データ・位置情報・非公開証跡を公開Repositoryへ保存する。
- Google Maps Datasets等へアップロードする。
- PRマージ・Issue Closeをprovider採用・法務承認・実装開始と扱う。
- AIだけで権利・許諾・契約判断を確定する。

## 未完了・次の優先作業

1. PR #125の人間・法務・運用・安全・セキュリティ・プライバシーレビューを受ける。
2. 公開資料の読み取り、項目群、No-Go境界に関する指摘を反映する。
3. 最新headのreview thread、mergeability、workflow/statusを再確認する。
4. 問題がなければPRマージ・Issue完了・branch削除確認を行う。
5. 追加証跡取得・問い合わせ・購入の要否を別Issueで判断する。
6. 次のデータセットとして交差点制御情報または交通規制情報を調査する。
7. 公開利用規約・プライバシーポリシー論点を整理する。
8. provider選定ADR・基本設計へ進む前提を評価する。

## 触ってはいけない箇所

- JARTIC ZIP / CSV取得・解析・保存
- 日本交通管理技術協会の概要版・詳細版取得・購入
- 実利用者の位置情報・走行履歴取得
- 公開Repositoryへのデータ本体・位置・非公開証跡保存
- Google Maps Datasets等へのアップロード
- Next.js / Expo / Maps SDK / DB / API / Infra実装
- APIキー・トライアル取得
- provider採用決定
- 外部問い合わせ・許諾申請・契約
- AIだけによる権利・法務判断

## 誤操作記録

2026-08-04、GitHubコネクタ操作中に`main`直下へ一時ファイル`tmp`を誤作成した。

- 作成コミット: `86a71b1f458efe3c2614ccea8bdbd204f3a531fd`
- 削除コミット: `bc3f13063cddcb2d251972b4e02a9763ac47d9f6`

ファイルは直ちに削除し、要件・実データ・実装には使用していない。

## Branch Cleanup

- `docs/issue-121-retention-sla-baseline`: PR #123マージ後の削除確認対象
- `docs/issue-124-section-traffic-rights`: PRマージ後の削除確認対象
