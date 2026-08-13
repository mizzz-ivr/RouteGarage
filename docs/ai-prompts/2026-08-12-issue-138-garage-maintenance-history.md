# AI利用ログ: Issue #138 愛車メンテナンス履歴要件

## 日付

2026-08-12

## 依頼

ユーザーから、RouteGarageへさらに機能・コンテンツを追加し、次タスクを進めるよう依頼された。

## Repository確認

AIは作業前に以下を確認した。

- PR #136は2026-08-12 09:08 JSTにmerged。
- mainのADR-0002は`Status: Proposed`。
- Issue #137は`ai: blocked`。
- Issue #135は`ai: blocked`。
- 既存MVPのGarageは車両名/年式/メモ/カスタム自由記述が中心。
- 整備/給油/走行距離に関するOpen Issueは検索上見つからなかった。

## AIが実施した判断

Web基盤実装を開始すると既存の工程・ADR承認ゲートに抵触するため、Issue #135を実装せず、独立して進行可能なPhase 1要件としてGarage履歴機能を選定した。

同時に、PR #136マージ後のADR状態不整合を放置しないためIssue #139を作成した。

## 作成した要件

- 整備履歴
- 給油履歴
- 走行距離整合性
- 満タン法による燃費候補
- 次回メンテナンス目安
- 履歴一覧/絞り込み/集計候補
- Owner-only authorization
- 車両アーカイブ/削除の検討点

## 重要なAI判断境界

### 燃費

AIは燃費を常に算出する要件にはしなかった。

成立条件を満たす場合だけ候補値を表示し、以下は算出不能とする。

- 前回満タンなし
- 距離0以下
- 給油量0以下
- 距離不整合
- メーター交換境界
- 訂正処理中

### メーター交換

累積距離補正式は勝手に確定せず、後続設計へ保留した。

### 整備安全

AI故障診断、走行可否、安全/危険判定、車検適合保証はスコープ外とした。

### プライバシー

履歴は本人限定とし、公開車両プロフィールから整備費用/給油/走行距離を公開しない要件とした。

## AIが確定していない事項

- decimal精度
- 燃費丸め桁数
- メーター交換後の累積距離補正
- 車両完全削除の保持期間/SLA
- notification provider
- DB/API/Auth方式
- 集計キャッシュ
- exact UI component design

## 実装非実施

Issue #138は要件定義のため、以下は実施していない。

- application code
- package dependency
- DB schema
- API endpoint
- Auth implementation
- provider SDK
- external API call
- real user data

## Human Review Required

- Maintenance odometerを任意のままとするか
- Fuel odometerを必須とするか
- 満タン法/部分給油合算
- meter replacementをまたぐ燃費を算出しない判断
- vehicle archive
- vehicle deletion/history retention
- reminder通知のMVP採否
- cost/fuel economy summaryのMVP採否
- privacy/safety/data integrity

AI生成内容だけで正本統合・詳細設計・実装開始へ進まない。
