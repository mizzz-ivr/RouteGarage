# AI利用ログ: Issue #141 ドライブ振り返り・統計ダッシュボード

## 日付

2026-08-13

## 対象

- Repository: `mizzz-ivr/RouteGarage`
- Issue: #141
- Branch: `docs/issue-141-drive-review-dashboard-requirements`

## 依頼目的

Web基盤実装がIssue #139 / #137待ちでBlockedの間もプロダクト価値を増やすため、既存走行記録を使った本人向け振り返り・統計機能を要件化する。

## AIへ与えた主要制約

- 日本語で作業する
- ウォーターフォール工程を維持する
- DB/API/UI実装を先行しない
- 未選定providerを導入しない
- 実ユーザーデータを使用しない
- 本人限定をMVP既定とする
- 速度/距離/時間の競争を追加しない
- 正確な生活拠点を推測しない
- AIレビューは人間レビューを代替しない
- PR/Issue/commitは日本語
- branch名に`codex`を含めない

## AIが生成した成果物

- `docs/requirements/drive-review-dashboard-requirements.md`
- `docs/requirements/drive-review-dashboard-metrics-invariants.md`
- `docs/requirements/issue-141-mvp-delta.md`
- `docs/screen-design/drive-review-dashboard-screen-extension.md`
- `docs/content/drive-review-dashboard-content-guidelines.md`
- `docs/logs/2026-08-13-issue-141.md`
- Current Status / Active Issues / Handoff更新

## AIが補助した判断

### 1. 指標の分母

平均走行距離の分母を全走行記録数ではなく、距離入力済み有効走行記録件数とする候補を定義した。

### 2. 欠損

距離未入力、0km、算出不能、対象0件を別状態とした。

### 3. 二重計上

走行記録本体と訪問/車両参照等の複数経路から同一走行記録を重複加算しない不変条件を定義した。

### 4. プライバシー

頻出地点をそのまま可視化すると生活拠点推測につながるため、正確地点ランキングを対象外とした。

### 5. コンテンツ

「もっと走ろう」「自己ベスト」等の競争/煽動表現を避け、振り返り中心のコピーへ限定した。

## 人間レビュー必須事項

- 任意期間フィルター
- 0件月の表示
- 粗いエリア集計
- 過去の思い出セクション
- 車両アーカイブ後の表示名
- 将来の統計共有
- タイムゾーン/期間境界
- 集計性能/派生値保持方式

## 禁止された自動判断

AIだけで以下を確定しない。

- DB/API設計
- Auth方式
- chart library
- 外部analytics provider
- 位置情報粒度
- 統計共有仕様
- ADR-0002のAccepted遷移
- Issue #137/#135のBlocked解除
