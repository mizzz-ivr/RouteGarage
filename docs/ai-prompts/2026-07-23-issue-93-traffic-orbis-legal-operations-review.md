# AIプロンプトログ（2026-07-23 / Issue #93）

## 対象

- Repository: https://github.com/mizzz-dev/RouteGarage
- Issue: https://github.com/mizzz-dev/RouteGarage/issues/93
- Branch: `docs/issue-93-traffic-orbis-legal-operations-review`

## 使用した指示

ユーザー指示:

> マージした、次のタスク進めて

Repository指示:

- `docs/ai-protocol/PROMPT.txt`
- 日本語GitHub運用
- ウォーターフォール・Issue駆動
- 仕様確定前実装禁止
- AI生成物の人間レビュー必須
- 安全性・プライバシー優先
- 商用運用を見据えたDoD

## 解釈した目的

PR #92 / Issue #91完了後のSource of Truthを同期し、次の優先作業である交通情報・オービス情報の法務・運用レビューを開始する。

## 実施プロンプト

RouteGarage開発プロトコルに従い、Issue #93「交通情報・オービス情報の法務・運用レビューを実施する」を進める。

### 必須参照

- `docs/requirements/mvp-requirements.md`
- `docs/policies/driving-safety-ui-policy.md`
- `docs/policies/traffic-and-orbis-information-policy.md`
- `docs/risks/risks.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`
- 警察庁、都道府県警察、JARTIC等の公式一次資料

### 実施内容

1. PR #92マージ、Issue #91完了を確認する。
2. Issue #91へ完了記録を追加する。
3. Issue #93をSource of Truth上のActiveにする。
4. 交通情報・オービス情報について次をレビューする。
   - 走行中の画面注視・操作
   - 情報の正確性、完全性、更新遅延、競合
   - 表示粒度
   - 通知・音声案内
   - 固定式・移動式・ユーザー投稿情報
   - 地域差
   - 利用規約、再配布、加工、キャッシュ、帰属
   - 提供停止、訂正、通報、監査
5. 各判断を以下へ区分する。
   - 確定要件
   - 条件付き許容候補
   - MVP禁止
   - 要専門確認
6. 法的助言や適法性の最終判断をしない。
7. 公的資料で確認できない事項を推測で許容しない。
8. 実装コード・技術選定を変更しない。
9. 作業ログ、AIプロンプトログ、handoffを保存する。
10. 人間レビュー前提のPRを作成する。

### 禁止事項

- Next.js / Expo実装
- DB / API / Auth / Infra設計
- データ提供元の採用決定
- 正確座標・通知距離・鮮度閾値の数値確定
- オービス通知アプリが存在することを適法性の根拠にすること
- JARTICウェブページのスクレイピング再表示を許容すること
- 取締り回避を助長する文言・ルート・通知を許容すること
- AIレビューだけで完了とすること

## 参照した公式資料

確認日: 2026-07-23

- 警察庁「やめよう！運転中のスマートフォン・携帯電話等使用」
- 警察庁「交通安全運動の推進」
- 警察庁「都道府県警察本部リンク」
- 警視庁「速度取締指針」
- 千葉県警察「千葉県警察速度管理指針について」
- 神奈川県警察「速度取締り指針」
- JARTIC「利用規約」
- JARTIC「各種情報の提供（オープンデータ）」

## AIによる主要判断

- 走行中注視・操作を誘発する通知はMVP禁止。
- 一般的な安全運転注意は許容。
- 地域・路線単位の粗い表示は条件付き候補。
- 正確座標、接近音声通知は要専門確認・未承認。
- 移動式リアルタイム情報、ユーザー投稿型正確地点、回避ルートはMVP禁止。
- JARTIC一般ウェブページの無断再表示・転載・改変を禁止。
- 地域別取締り運用を全国一律と断定しない。
- 判断不能時はNo-Go。

## 人間レビューで確認する点

- 公的資料の解釈が過剰でないか。
- 「法務レビュー済み」と誤認される表現がないか。
- 条件付き許容候補が実質的な採用決定になっていないか。
- 走行中注視・取締り回避を助長する余地がないか。
- JARTICウェブ利用規約と個別オープンデータ条件を混同していないか。
- 地域差を法律差と断定していないか。
- データ提供元・技術スタックを確定していないか。

## 出力先

- `docs/reviews/traffic-orbis-legal-operations-review.md`
- `docs/logs/2026-07-23-issue-93.md`
- `docs/current-status.md`
- `docs/active-issues.md`
- `docs/handoff/2026-07-22-next-task-handoff.md`

## 注意

本ログはAI支援内容の追跡用であり、法的助言、法務承認、人間レビューの代替ではない。