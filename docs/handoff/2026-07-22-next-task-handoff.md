# Handoff（2026-07-29 / Issue #113）

## Summary

- Repository: `mizzz-ivr/RouteGarage`
- Issue #113 / PR #114でJARTIC静的レイヤーの画面表示要件を整理中。
- PR #112はマージ済み、Issue #111はcompleted、branchは削除済み。
- PR #114のCodex P1 10件・P2 2件を画面要件とSource of Truthへ反映中。
- 実データ取得、UI実装、provider採用、APIキー取得、外部問い合わせは行っていない。
- JARTIC Jシステム / VICS・HEREへの問い合わせは未承認でNo-Go。

## Current Issue / PR / Branch

- Issue #113: https://github.com/mizzz-ivr/RouteGarage/issues/113
- PR #114: https://github.com/mizzz-ivr/RouteGarage/pull/114
- Branch: `docs/issue-113-jartic-display-requirements`
- Phase: Phase 1 / Requirements Definition（画面設計）

## Main Documents

- `docs/ui/jartic-static-layer-display-requirements.md`
- `docs/logs/2026-07-29-issue-113.md`
- `docs/logs/2026-07-29-pr-114-review-fixes.md`
- `docs/ai-prompts/2026-07-29-issue-113-jartic-display-requirements.md`
- `docs/current-status.md`
- `docs/active-issues.md`

## Current Decision

画面要件の文書化だけを実施する。

次は保留する。

- JARTICレイヤー公開
- Google Maps Platform / JARTIC採用
- 実データ取得・変換・公開
- Figma / Next.js / Expo / Maps実装
- APIキー・契約・外部問い合わせ

権利台帳の4データセットはすべて`未着手 / No-Go`を維持する。

## Independent State Axes

次を独立して保持する。

1. 表示可否
2. 鮮度状態
3. 検証状態
4. 権利状態

利用者向け状態は4軸から導出し、単一コードを4軸の保存値として兼用しない。

優先順位:

`STOPPED` > `LIMITED` > `DISPLAYABLE`

次の場合は情報本体を非表示にする。

- 権利確認中・非許可・失効
- 期限切れ
- 検証未完了・競合・検証失敗
- 契約停止・規約変更後の判断不能
- 安全な表示可否を判断できない

更新遅延・過去版でも、検証・権利・表示可否条件を満たさない場合は表示しない。

## Fixed Display Requirements

JARTIC情報本体を表示する間、走行状態にかかわらず次を固定表示する。

- レイヤー名・データセット名
- 情報源・提供元
- `参考情報`
- `静的・月次更新情報`
- 対象年月・作成基準日
- 提供元更新時点
- 鮮度状態
- 検証状態
- 制限表示・キャッシュ表示の旨
- 欠落・遅延・誤差・実際との差異の可能性
- 本情報のみを運転判断の唯一の根拠にしない旨
- 詳細操作は安全な場所に停車してから行う旨
- JARTIC出典・RouteGarage加工表示

走行中・状態不明・小画面でも項目を省略しない。全項目とGoogle Maps帰属を維持できない場合は、JARTICレイヤー本体を非表示にする。

## Unknown Driving State

走行状態を判定できない場合は走行中と同等の安全側制御を適用し、次を固定表示する。

> 走行状態を確認できないため、安全のため操作を制限中です。

- 詳細、履歴、レイヤー切替等を無効化した理由を文字と支援技術で説明する。
- 固定必須表示と操作制限理由を同時に維持できない場合は情報本体を非表示にする。

## Cache Display Requirements

取得失敗時に旧版・キャッシュを制限表示できるのは、次の7条件をすべて満たす場合に限る。

1. 利用規約・契約で保存・再表示が許可されている。
2. 提供元更新時点を取得済みである。
3. 情報種別ごとに事前承認された有効期限内である。
4. 契約停止、規約変更、提供元の無効化・撤回、改ざん・完全性懸念がない。
5. 上流由来、調達経路、検証状態を追跡でき、競合がない。
6. `現在取得失敗中`、`キャッシュ情報`、`提供元更新時点`を固定表示できる。
7. 制限表示ルール、承認者、承認記録がある。

1条件でも不足する場合は`STOPPED`。有効期限内でも撤回・完全性懸念・権利失効・安全判断不能時は停止する。

## Attribution Boundaries

- Google Maps標準帰属を削除、非表示、隠蔽、改変しない。
- JARTIC出典・RouteGarage加工表示をGoogle Maps帰属とは別に管理する。
- Google MapsロゴだけでJARTIC出典を代替しない。
- JARTIC出典をGoogleがJARTIC情報を提供・保証したように配置しない。
- Google、JARTIC、RouteGarage由来情報を視覚的・意味的に区別する。

## Driving Safety Requirements

- 月次データを現在の渋滞・事故・閉鎖・所要時間・緊急規制として表示しない。
- 情報本体を表示する場合は、走行中も全固定必須表示を維持する。
- 全固定必須表示を維持できない場合は情報本体を非表示にする。
- 走行中に詳細展開、履歴比較、レイヤー切替を促さない。
- 静的情報を現在規制として音声案内しない。
- 点滅・強い警告音・自動スクロールだけで状態を伝えない。

## Sharing / Privacy Requirements

共有・スクリーンショット・印刷・エクスポート前に次を必須とする。

- 自宅・職場・走行開始地点・走行終了地点・反復訪問地点周辺への機械的ぼかし
- 現在位置マーカーだけでなく、道路形状・表示中心・履歴からの生活拠点再推定リスク確認
- 共有前プレビューで、ぼかし結果・対象範囲・帰属・対象年月を確認
- ぼかし解除を公開初期値にしない
- ぼかし後も再推定リスクが残る旨を表示

ぼかしアルゴリズム・距離閾値が未確定の間、位置・走行履歴を含む共有出力はNo-Go。

## Accessibility Requirements

- 状態を色だけで表現しない。
- 状態名、意味のあるアイコン、スクリーンリーダー向けラベルを併用する。
- `参考情報`と状態不明時の操作制限理由を読み上げる。
- キーボード操作、論理的フォーカス順、フォーカス復帰を要件化する。
- コントラストはWCAG 2.2 AA相当を目標とする。
- 200%ズーム、文字拡大、ライト・ダークモードを確認する。
- 小画面で必須表示と両方の帰属を維持できない場合は情報本体を非表示にする。

## Review Findings and Fixes

Codexレビュー指摘は合計12件。

### P1: 10件

1. 4状態軸を独立させる
2. 旧版・キャッシュに7条件を課す
3. 固定安全注意を追加する
4. 共有前の生活拠点ぼかし・プレビューを必須化する
5. 走行中も固定必須表示を省略しない
6. Current Statusへ検証軸を同期する
7. Current Statusへ固定安全表示を同期する
8. handoffへキャッシュ7条件を同期する
9. handoffへ走行中の全固定必須表示を同期する
10. handoffへ生活拠点ぼかしを同期する

### P2: 2件

11. 固定領域へ`参考情報`を明示する
12. 走行状態不明時に`安全のため操作を制限中`を固定表示する

修正ログ:

- `docs/logs/2026-07-29-pr-114-review-fixes.md`

## Inquiry Status

- JARTIC Jシステム / VICS: `No-Go（外部送信未承認）`
- HERE: `No-Go（external submission not approved）`
- PRマージ・Issue Closeは外部送信承認ではない。

## Remaining Tasks

1. P2 2件への返信・thread解決を完了する。
2. 最新headでCodex再レビューを受ける。
3. 未解決review threadが0件であることを確認する。
4. 人間・法務・運用・安全・プライバシー・アクセシビリティレビューを受ける。
5. 問題がなければPR #114をマージする。
6. 後続で原本・変換後・履歴・監査メタデータの保持・削除要件を定義する。
7. 自宅周辺ぼかしアルゴリズム・距離閾値を別Issueで具体化する。

## Branch Cleanup

削除済み:

- `docs/issue-111-jartic-third-party-rights-register`

作業中:

- `docs/issue-113-jartic-display-requirements`

## 注意事項

- AI生成内容は人間レビュー必須。
- 法的助言・provider採用決定ではない。
- UIモック・実装は行っていない。
- 実データ取得・加工・公開は行っていない。
- Google Maps Platform / JARTICは未採用。
- 仕様・契約確定前に実装しない。
