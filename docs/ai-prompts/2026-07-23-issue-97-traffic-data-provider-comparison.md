# AIプロンプトログ（2026-07-23 / Issue #97）

## 対象

- Repository: https://github.com/mizzz-ivr/RouteGarage
- Issue: https://github.com/mizzz-ivr/RouteGarage/issues/97
- Branch: `docs/issue-97-traffic-data-provider-comparison`

## 使用した指示

ユーザー指示:

> マージした。次のタスク進めて

Repository指示:

- `docs/ai-protocol/PROMPT.txt`
- 日本語GitHub運用
- ウォーターフォール・Issue駆動
- 仕様確定前実装禁止
- AI生成物の人間レビュー必須
- 安全性・プライバシー優先
- 商用運用を見据えたDoD

## 解釈した目的

PR #96 / Issue #93完了後のSource of Truthを同期し、次の優先作業である交通情報データ提供元候補の利用条件・上流由来・再提供経路比較を開始する。

## 実施プロンプト

RouteGarage開発プロトコルに従い、Issue #97「交通情報データ提供元候補の利用条件・上流由来・再提供経路を比較する」を進める。

### 必須参照

- `docs/policies/traffic-and-orbis-information-policy.md`
- `docs/reviews/traffic-orbis-legal-operations-review.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- JARTIC、VICS、Google、HERE、TomTomの公式一次資料

### 実施内容

1. PR #96のマージとIssue #93の完了を確認する。
2. Issue #93へ完了記録を追加する。
3. merged branchの削除状態を確認する。
4. Repositoryの正式所有者・URLを確認する。
5. Issue #97を作成し、Source of Truth上のActiveにする。
6. 候補ごとに次を比較する。
   - 提供主体・契約主体
   - 上流由来・調達経路・再提供経路
   - 日本国内のカバレッジ・情報種別
   - 商用利用・第三者表示・再配布
   - 加工・統合・派生データ
   - キャッシュ・保存・削除義務
   - 帰属・ロゴ・リンク・サプライヤー表記
   - 更新時刻・遅延・訂正・撤回
   - 規約変更・契約停止・障害時の停止
   - 未確認事項と確認先
7. 公開資料で確認できない事項を推測で許容しない。
8. データ提供元を採用しない。
9. APIキー取得、契約、技術選定、実装へ進まない。
10. 作業ログ、AIプロンプトログ、handoffを保存する。
11. 人間レビュー前提のPRを作成する。

### 禁止事項

- Next.js / Expo実装
- DB / API / Auth / Infra設計・実装
- データ提供元の採用決定
- APIキー取得、契約、見積依頼
- 公開製品ページを契約上の許諾とみなすこと
- 一般ウェブ規約と個別データ規約を混同すること
- 上流由来不明の情報を表示可能と判断すること
- キャッシュ・加工・再提供を暗黙に許容すること
- 移動式取締り・警察位置のリアルタイム情報を候補に含めること
- AIレビューだけで完了とすること

## 参照した公式資料

確認日: 2026-07-23

### JARTIC / VICS

- JARTIC「各種情報の提供（オープンデータ）」
- JARTIC「オープンデータ利用規約」
- JARTIC「Jシステム」
- VICSセンター「事業者への情報提供」

### Google

- Google Maps Platform「Routes API 交通オプション」
- Google Maps Platform Terms of Service

### HERE

- HERE Traffic API v7概要
- HERE Traffic API v7カバレッジ
- HERE Platform Terms
- HERE Acceptable Use Policy

### TomTom

- Traffic API概要
- Traffic API Market Coverage
- Pricing
- Terms and conditions

## AIによる主要判断

- JARTICオープンデータは静的・定期更新データの`用途限定候補`。
- JARTIC Jシステム / VICSは国内ライブ交通情報の`優先問い合わせ候補`。
- Google Routes APIはGoogle地図・ルート基盤と一体でのみ検討する`構成依存候補`。
- HERE Traffic APIは日本Flow / Incidentsの`優先問い合わせ候補`。
- TomTom Traffic APIは現行日本カバレッジ確認まで`現時点No-Go`。
- 一般ウェブページのスクレイピングは候補にしない。
- 上流由来、再提供、加工、キャッシュ、帰属、停止条件を確認できない候補はNo-Go。
- 移動式取締り・警察位置のリアルタイム情報は比較対象外。
- 本比較で採用順位・技術スタックを確定しない。

## 人間レビューで確認する点

- 公式資料の解釈が過剰でないか。
- 公開資料と契約上の許諾を混同していないか。
- JARTIC一般サイト、オープンデータ、Jシステム、VICSを区別できているか。
- Googleを提供元中立データ基盤用途に許容していないか。
- HEREのキャッシュ・再提供条件を許諾済みと誤認していないか。
- TomTomの日本対応を別製品から推測していないか。
- 上流由来・更新時刻・訂正・撤回の確認項目が不足していないか。
- 走行安全・取締り回避防止要件を弱めていないか。
- データ提供元・技術スタックを確定していないか。

## 出力先

- `docs/reviews/traffic-data-provider-comparison.md`
- `docs/logs/2026-07-23-issue-97.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## 注意

本ログはAI支援内容の追跡用であり、法的助言、契約判断、法務承認、データ提供元採用、人間レビューの代替ではない。
