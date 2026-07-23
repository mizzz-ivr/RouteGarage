# HERE Traffic API 契約・技術問い合わせ票（Issue #99）

- 状態: 送信前ドラフト
- 作成日: 2026-07-23
- 想定送信先: HERE公式営業問い合わせフォーム
- 対象製品: HERE Traffic API v7（Flow / Incidents）
- AI利用: ChatGPT / Codex支援、人間レビュー必須

## 1. Subject draft

Questions regarding commercial use of HERE Traffic API v7 for RouteGarage in Japan

## 2. English inquiry draft

Dear HERE Sales Team,

We are currently defining the requirements for a service called “RouteGarage,” which is intended to help users manage and share driving routes, stopover spots, and trip records.

We are considering displaying traffic incidents, road closures, roadworks, congestion, and related traffic information as reference information that users can review before driving or while safely stopped.

We are evaluating HERE Traffic API v7 for use in Japan. Before proceeding to architecture or implementation, we would like to confirm the applicable commercial, licensing, technical, caching, attribution, and operational conditions.

The project is still in the requirements-definition phase. The number of users, request volume, map provider, supported platforms, caching duration, pricing model, and launch schedule have not yet been finalized. This inquiry is not a commitment to purchase or adopt HERE services.

Could you please provide guidance on the questions below and identify the applicable service terms, contract documents, product documentation, and current versions?

## 3. Product scope and coverage

1. Is HERE Traffic API v7 Flow and Incidents currently available for commercial Web and mobile services targeting users in Japan?
2. What road classes, geographic areas, and traffic-information types are covered in Japan?
3. Are coverage, quality, update frequency, or available fields different by region or road class in Japan?
4. Is there an official coverage document or machine-readable coverage reference that can be used as a contractual or operational source of truth?
5. Are Flow, Incidents, Traffic Vector Tile, and Traffic Raster Tile subject to different contractual or display conditions?
6. Are there product or plan restrictions that would prevent RouteGarage from using Flow and Incidents together?

### Purpose

To avoid inferring current Japanese coverage or product availability from general product descriptions.

### Go / No-Go impact

No-Go until written confirmation of Japanese commercial coverage and applicable product scope is obtained.

## 4. Contracting party and permitted application model

7. Can a RouteGarage-operated backend retrieve HERE Traffic API data and display the results to multiple end users through a Web service and mobile application?
8. Would this use be classified as an end-user application, SaaS, platform, fleet, consumer, or another licensing category?
9. Can development, cloud-hosting, security, and operations subcontractors process the data on behalf of RouteGarage?
10. Are separate contracts or entitlements required for Web, iOS, Android, development, test, staging, and production environments?
11. Can both free and paid RouteGarage users access traffic-derived displays under one agreement?
12. Are there restrictions based on monthly active users, devices, transactions, requests, geographic regions, or customer type?

### Go / No-Go impact

No-Go if multi-user display, backend processing, or required subcontractor access is not contractually permitted.

## 5. Upstream source and provenance

13. Can HERE identify the upstream source category or supplier for traffic information displayed in Japan?
14. Does the API expose source, supplier, authority, publisher, or provenance metadata per record?
15. Can RouteGarage distinguish official announcements, HERE-derived information, third-party supplier information, and inferred or aggregated information?
16. Are there supplier-specific attribution, display, or redistribution restrictions for Japanese data?
17. Does HERE notify customers when an upstream supplier, source, or coverage area changes?
18. Can RouteGarage retain supplier identifiers and provenance metadata for audit purposes?

### Purpose

To satisfy RouteGarage requirements to track upstream origin separately from the acquisition channel.

### Go / No-Go impact

Information whose upstream provenance cannot be traced will not be eligible for normal display.

## 6. End-user display and redistribution

19. May HERE Traffic API data be displayed to multiple RouteGarage users on maps, route-detail screens, lists, and safety-information panels?
20. Is displaying API-derived values from a RouteGarage backend to a client considered permitted end-user display or redistribution?
21. May RouteGarage expose traffic-derived status through its own application API to authenticated clients?
22. May RouteGarage transform the raw values into user-facing categories such as “congested,” “delayed,” “unverified,” or “service unavailable”?
23. May RouteGarage combine HERE information with other licensed traffic sources for conflict detection, verification, or status aggregation?
24. May RouteGarage provide screenshots, print views, shared links, or exported trip summaries containing HERE-derived traffic information?
25. Are there restrictions on showing the same API response or derived information to multiple users?
26. Are there restrictions on downstream partners, embedded widgets, white-label services, or affiliated services?

### Go / No-Go impact

No-Go unless end-user display, backend-to-client delivery, and required derived status display are explicitly permitted.

## 7. Map display and combination with other providers

27. Can HERE Traffic API data be displayed on a map supplied by a third-party map provider?
28. If permitted, which map providers or categories are allowed or prohibited?
29. Must HERE Traffic API be used together with HERE Map Rendering, HERE SDK, or another HERE base map?
30. Can geometry returned by the Traffic API be transformed to another map projection or road network for display?
31. Can HERE data be overlaid with JARTIC or other separately licensed data when the sources remain identifiable?
32. What attribution and visual separation are required when combining HERE data with another provider’s map or traffic information?
33. Are there restrictions on using HERE traffic information in route calculations performed by a non-HERE routing engine?

### Go / No-Go impact

A proposed map-provider combination is No-Go until both HERE and the map provider explicitly permit the combination.

## 8. Processing and derived data

34. May RouteGarage normalize, categorize, translate, summarize, deduplicate, or aggregate HERE traffic records?
35. May RouteGarage calculate freshness, verification, conflict, display-permission, or service-health status from HERE metadata?
36. May RouteGarage compare HERE information with other licensed sources to detect inconsistencies?
37. May RouteGarage create non-reversible aggregate metrics, operational statistics, or quality measurements?
38. Which outputs are considered prohibited derivative data, substitute products, repositories, or competitive datasets?
39. Does the restriction differ between raw response fields, geometry, traffic speeds, jam factor, incident descriptions, and derived categories?
40. Is machine-learning training, model evaluation, or embedding creation using HERE traffic content prohibited or separately licensed?

## 9. Caching, storage, backup, and deletion

41. Which Traffic API responses may be cached, and what Cache-Control or contract rules apply?
42. Is server-side caching permitted for reducing duplicate requests from multiple RouteGarage users?
43. What is the maximum permitted cache duration for Flow, Incidents, Vector Tile, and Raster Tile data?
44. May cached data be displayed during a temporary acquisition failure if it is clearly labeled with the provider update time and cache status?
45. May RouteGarage retain historical responses for audit, incident investigation, user support, or quality analysis?
46. May RouteGarage store only metadata such as record IDs, provider update times, request results, display decisions, and hashes after the content expires?
47. Are backup, disaster-recovery, logging, development, test, or security-analysis copies permitted?
48. What data must be deleted when it expires, is withdrawn, a supplier changes, a contract ends, or the service terms change?
49. What deletion period and evidence of deletion are required?
50. Are there product-specific caching rules that differ from general HERE platform terms?

### Go / No-Go impact

No-Go if cache, audit, expiry, and deletion obligations cannot be implemented reliably.

## 10. Attribution and end-user terms

51. What HERE attribution, logo, copyright, supplier attribution, links, or disclaimers must be displayed?
52. Where and how must attribution be displayed in Web and mobile applications?
53. Are there minimum size, language, permanence, or proximity requirements?
54. Must RouteGarage include HERE-specific clauses in its terms of service or privacy notice?
55. Are there prohibited statements that could imply HERE guarantees the completeness or accuracy of traffic information?
56. Are supplier-specific attributions returned in the API, and must they be shown per record or per screen?
57. Can RouteGarage display that information has been processed or categorized by RouteGarage without implying HERE produced the derived status?

## 11. Timestamps, corrections, withdrawal, and lifecycle

58. Which timestamps represent observation, publication, update, start, end, verification, correction, and withdrawal?
59. Can RouteGarage receive stable record identifiers and revision information for deduplication and audit?
60. How are corrected, cancelled, expired, withdrawn, or invalid records represented?
61. Does HERE provide change feeds, delta updates, invalidation notifications, or supplier withdrawal notifications?
62. How should RouteGarage detect that previously retrieved information must no longer be displayed?
63. Are there cases where an incident may remain technically available but should be treated as stale or invalid?
64. What documentation defines the semantics and reliability of each lifecycle field?

## 12. SLA, service health, and emergency support

65. Which SLA, availability, latency, and support commitments apply to Traffic API v7 for the proposed use?
66. Are planned maintenance, outages, degradation, delayed feeds, missing suppliers, or regional coverage issues published through a status service?
67. Can service-health events be consumed programmatically?
68. What notification is provided when an upstream data source or supplier is unavailable?
69. Is there a support channel for safety-critical incorrect traffic information or widespread data issues?
70. What support hours, severity levels, response targets, and escalation paths apply?
71. What actions must RouteGarage take during an outage, contract suspension, license change, or data-integrity concern?
72. Can HERE suspend a region, product, supplier, or data category independently, and how is this communicated?

## 13. Security and privacy

73. What authentication, key-management, IP-restriction, encryption, and credential-rotation requirements apply?
74. Can credentials be used only from a RouteGarage backend rather than distributed to clients?
75. Does use of the Traffic API require sending end-user precise location, trip history, device identifiers, or personal data to HERE?
76. Can RouteGarage query by geographic area without transmitting a persistent user or device identifier?
77. What telemetry, usage logs, IP addresses, coordinates, and account data does HERE process for API requests?
78. What data-processing terms, subprocessor information, international transfer terms, and retention periods apply?
79. Are additional consent or privacy-notice requirements imposed on RouteGarage end users?
80. What incident-notification and cooperation duties apply to security or personal-data incidents?

### Safety and privacy constraint

RouteGarage does not intend to provide mobile enforcement or real-time police-location information and does not intend to send user trip-history data unless separately reviewed and approved.

## 14. Pricing, plans, and evaluation

81. Which HERE plan or commercial agreement is appropriate for the proposed multi-user Web and mobile service?
82. How are Flow, Incidents, Vector Tile, and Raster Tile requests counted and priced?
83. Are pricing and licensing affected by users, devices, applications, environments, regions, tiles, requests, or stored output?
84. Are development, trial, proof-of-concept, or sandbox environments available?
85. Are trial outputs subject to different display, caching, or redistribution restrictions?
86. What information is required for a preliminary quotation?
87. What is the typical process and lead time from inquiry to production use?
88. Is a security, architecture, legal, or use-case review required before commercial approval?

## 15. Requested response format

Where possible, please provide or identify:

- The applicable service terms, product terms, order form, SLA, privacy terms, and current versions
- The specific provision or product document supporting each response
- Supplier-specific restrictions for Japanese traffic data
- Conditions that require an enterprise or custom agreement
- The validity period of the response
- The appropriate follow-up contact for legal, technical, security, and pricing questions

## 16. Internal fields to complete before submission

- Legal entity / operator: To be completed
- Contact person: To be completed
- Contact email: To be completed
- Service status: Requirements-definition phase
- Estimated users: Not finalized
- Estimated requests: Not finalized
- Target area: Japan; detailed regions not finalized
- Platforms: Web; possible future mobile applications
- Map provider: Not selected
- Expected launch date: Not finalized
- Data retention requirement: Not finalized and subject to contract

## 17. Japanese internal summary

HEREへの問い合わせでは、以下を最優先で書面確認する。

1. 日本向けFlow / Incidentsの現行カバレッジ
2. 複数利用者へのWeb・モバイル表示
3. RouteGarageバックエンドからクライアントへの配信
4. 他社地図への重畳
5. 加工・状態判定・複数情報源との競合検出
6. キャッシュ・履歴・監査メタデータ・削除義務
7. 上流由来・サプライヤー表示
8. 更新時刻・訂正・撤回・無効化
9. SLA・障害・契約停止時の停止手順
10. 利用者位置情報・API利用ログのプライバシー条件

## 18. Official references

- HERE Traffic API v7 documentation
  - https://docs.here.com/traffic-api/docs/introduction-to-here-traffic-api-v7
- HERE contact / sales form
  - https://www.here.com/contact
- HERE get started
  - https://www.here.com/get-started
