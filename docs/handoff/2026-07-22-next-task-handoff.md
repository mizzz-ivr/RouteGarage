# Handoff（2026-08-04 / Issue #124）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Phase: Phase 1 / Requirements Definition
- PR #123は2026-08-04にマージ済み。
- Issue #121はcompleted。
- Issue #124 / PR #125として、一般道路の「断面交通量情報」の項目単位第三者権利・位置表示境界を公開資料から予備調査中。
- 現在判定は`調査中 / No-Go`。
- 実データ取得、有料データ購入、外部問い合わせ、契約、実装は行っていない。

## Current Issue / PR / Branch

- Issue #124: https://github.com/mizzz-ivr/RouteGarage/issues/124
- PR #125: https://github.com/mizzz-ivr/RouteGarage/pull/125
- Branch: `docs/issue-124-section-traffic-rights`
- Main document: `docs/registers/jartic-section-traffic-volume-rights-preflight.md`
- Base register: `docs/registers/jartic-open-data-third-party-rights-register.md`
- Work log: `docs/logs/2026-08-04-issue-124.md`
- AI prompt log: `docs/ai-prompts/2026-08-04-issue-124-section-traffic-rights.md`

## PR Status

- State: Open
- Mergeable: true
- PR作成時の`main`比較: 6 commits / 6 files / behind 0
- 変更範囲: docsのみ
- 未解決review thread: 0件
- AI支援セルフレビュー: COMMENTで記録済み / 文書整合性ブロッカーなし
- Codex自動レビュー: コメントなし / 未実施
- GitHub Actions / commit status: workflow・status checkなし
- 人間・法務・運用・安全・セキュリティ・プライバシーレビュー: 未実施

AI支援セルフレビューを、権利確認、法務判断、利用許諾、データ採用の完了とは扱わない。

## Previous Completion

- Issue #121 / PR #123
  - JARTIC静的レイヤーの保持期間・再確認期限・削除SLA暫定基準
  - Merge commit: `bc4489fdcff1a9bfad25f12029a0d3fe201763d3`
- Issue #119 / PR #120
  - 生活拠点ぼかし・共有出力・外部キャプチャ保護要件
  - Merge commit: `8c3fc97cdd10dc3ce5ba0f78c7cee41a0e2c3a5b`
- Issue #117 / PR #118
  - 保持・削除レビュー指摘対応
- Issue #115 / PR #116
  - JARTIC静的レイヤー保持・削除要件
- Issue #111 / PR #112
  - JARTICオープンデータ第三者権利台帳

PRマージ・Issue Closeは、provider採用、契約、実データ公開、外部問い合わせ、実装開始の承認ではない。

## Official Sources Checked

確認日: 2026-08-04

### JARTIC

- https://www.jartic.or.jp/service/opendata/
- https://www.jartic.or.jp/d/opendata/riyou_kiyaku.pdf

確認事項:

- 断面交通量は各都道府県警察が車両感知器等で収集した情報である。
- リンク番号の詳細・最新情報は日本交通管理技術協会を参照するよう案内される。
- 各情報は原則毎月月初に更新される。
- 更新前情報は公開ページから取得できなくなる。
- 複製、公衆送信、加工、商用利用が可能とされる。
- 出典表示・加工表示が必要である。
- 第三者権利は利用者責任で確認・許諾取得する必要がある。
- 第三者権利部分が明確に特定されていない場合がある。

### 日本交通管理技術協会

- https://www.tmt.or.jp/research/index9.html
- https://www.tmt.or.jp/research/index3.html

確認事項:

- JARTIC断面交通量情報の計測地点は「リンク番号」と「リンク終端からの距離」で表される。
- リンクは同協会が作成・管理し、著作権を持つ交通管理リンクであると説明される。
- 地点位置のPDF地図、緯度経度CSV、シェープファイルを別途提供する。
- 位置情報提供は日本デジタル道路地図協会との協同事業である。
- 概要版は用途限定である。
- 詳細版A・Bは有料提供である。

## Rights Preflight Categories

### 観測・識別

- 時刻
- 情報源コード
- 計測地点番号
- 計測地点名称相当
- 断面交通量

現在判定: 項目別の権利処理済み範囲が未確認のため`調査中 / No-Go`。

### 地域参照

- 2次メッシュコード

現在判定: 根拠・利用条件未確認のため`未確認 / No-Go`。

### 交通管理リンク参照

- リンク区分
- リンク番号
- リンク終端からの距離
- リンクバージョン

現在判定: 第三者権利ありの可能性が高く`No-Go`。

リンク番号を非表示で内部結合だけに使用する場合も、権利確認なしに許可扱いしない。

### 地点位置派生

- 概要版PDF地図
- 詳細版PDF地図
- 緯度経度CSV
- シェープファイル
- 独自変換した位置情報

現在判定: 別契約・別権利確認が必要で`No-Go`。

## Current Use Decisions

| 利用方法 | 現在判定 |
| --- | --- |
| JARTIC ZIP / CSV取得 | No-Go |
| 原本保存 | No-Go |
| 正規化保存 | No-Go |
| 数値集計 | 将来の条件付き候補だが現時点No-Go |
| 数値のみの表示 | No-Go |
| Google Map等への地点表示 | No-Go |
| 緯度経度変換 | No-Go |
| 履歴保存・履歴公開 | No-Go |
| 生CSV・GeoJSONエクスポート | No-Go |
| 集約値エクスポート | 将来の条件付き候補だが現時点No-Go |
| Google Maps Datasetsアップロード | No-Go |

`条件付き候補`は許可ではない。

## Missing Evidence

### JARTIC

- 正式説明書URL・版・文書ハッシュ
- 対象月・地域・原本ファイル名・原本ハッシュ
- 公開ページ参考表No.4の正式項目名
- 項目別の上流由来・第三者権利処理済み範囲
- リンク参照項目の保存・加工・公衆送信可否
- 項目除外・集約利用の可否

### 日本交通管理技術協会

- 概要版の完全な利用条件
- 詳細版A・Bの購入規約・ライセンス
- 保存・加工・公衆送信・商用利用・再配布条件
- Google Maps等への重畳条件
- 必須帰属・表示義務
- 契約終了・更新・削除義務

### 日本デジタル道路地図協会

- 全国デジタル道路データベースの関与範囲
- 地図・位置データの権利・帰属・利用条件
- RouteGarageでの表示・派生・再配布条件

外部問い合わせ・購入は別Issueで承認後に行う。

## Go Candidate Preconditions

1. 調査対象の地域・対象月・ファイルを人間が承認する。
2. 取得前の保持・削除・非公開保管方法を承認する。
3. JARTIC説明書と実ファイルの版・ハッシュを登録する。
4. 項目別の上流由来・権利処理範囲を確認する。
5. 日本交通管理技術協会・日本デジタル道路地図協会の条件を確認する。
6. 部分利用の技術的分離と削除伝播を検証する。
7. 出典・加工表示・対象年月・非リアルタイム注意を確定する。
8. 法務、運用、安全、セキュリティ、プライバシー、プロジェクト責任者が承認する。

1つでも判断不能ならNo-Goを維持する。

## Current Safety / Privacy / Retention Gates

- 月次データをリアルタイム・現在情報として表示しない。
- 表示可否、鮮度、検証、権利を独立状態で管理する。
- 表示停止を物理削除より先に行う。
- 原本から派生物・キャッシュ・バックアップ・外部保存先まで削除を伝播する。
- バックアップ実失効前に削除完了証跡を発行しない。
- 正確位置・生活拠点・走行履歴を公開前提で扱わない。
- Webでは外部キャプチャ完全防止を前提にしない。
- 実データ・非公開証跡を公開Repositoryへ保存しない。

## Source of Truth Files

- `docs/registers/jartic-section-traffic-volume-rights-preflight.md`
- `docs/registers/jartic-open-data-third-party-rights-register.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- `docs/logs/2026-08-04-issue-124.md`
- `docs/ai-prompts/2026-08-04-issue-124-section-traffic-rights.md`

## External Workspaces

- Linear Project: https://linear.app/mizzzjp/project/routegarage-71286ad9056c
  - 無料Issue上限により個別Linear Issueは作成しない。
  - GitHub Issue #124を実行タスクの正本とする。
- Notion Hub: https://app.notion.com/p/3ad7322f39fa81e9be8fe370b4140720
  - Issue #124 / PR #125を現在タスクとして同期する。

## Remaining Tasks

1. PR #125の人間・法務・運用・安全・セキュリティ・プライバシーレビューを受ける。
2. 公開資料の読み取り、項目群、No-Go境界に関する指摘を反映する。
3. 最新headのmergeability、workflow/status、未解決review threadを再確認する。
4. 問題がなければPRマージ・Issue完了・branch削除を確認する。
5. 追加証跡・問い合わせ・購入の別Issue化を判断する。
6. 次のデータセット調査へ進む。

## Notes

- AI生成内容は人間レビュー必須。
- 本書は法的助言・権利確認完了・利用許諾ではない。
- 実データ、有料データ、非公開証跡、実装、外部送信は行っていない。
- 仕様・契約・法務判断・技術構成確定前に実装しない。

## Mistake Recovery

2026-08-04、GitHubコネクタ操作中に`main`直下へ一時ファイル`tmp`を誤作成した。

- 作成コミット: `86a71b1f458efe3c2614ccea8bdbd204f3a531fd`
- 削除コミット: `bc3f13063cddcb2d251972b4e02a9763ac47d9f6`

直ちに削除済みで、要件・実データ・実装には使用していない。
