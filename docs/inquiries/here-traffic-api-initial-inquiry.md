# HERE Traffic API 初回問い合わせ文（Issue #99）

- Status: Pre-submission draft
- Created: 2026-07-23
- Intended recipient: HERE official sales contact
- Detailed questionnaire: `docs/inquiries/here-traffic-api-contract-technical-inquiry.md`
- AI-assisted, human review required

## Subject

Commercial availability and licensing questions for HERE Traffic API v7 in Japan

## Initial inquiry draft

Dear HERE Sales Team,

We are currently defining requirements for a service called “RouteGarage,” intended to help users manage and share driving routes, stopover spots, and trip records.

We are considering displaying traffic incidents, road closures, roadworks, congestion, and related information as reference information that users can review before driving or while safely stopped, through a Web service and possible future mobile applications.

The project is still in the requirements-definition phase. User volume, request volume, map provider, platforms, cache duration, pricing model, and launch schedule have not been finalized. This inquiry is not a commitment to purchase or adopt HERE services.

Before proceeding to architecture or implementation, could you please advise on the following points regarding HERE Traffic API v7 Flow and Incidents?

1. Current commercial availability and coverage for Web and mobile services targeting users in Japan
2. Covered road classes, regions, traffic-information types, and update characteristics in Japan
3. Permitted multi-user display and delivery from a RouteGarage backend to authenticated clients
4. Permitted transformation into user-facing categories, summaries, freshness status, and conflict status
5. Conditions for comparing or combining HERE information with other separately licensed traffic sources
6. Conditions for displaying HERE traffic information on a third-party base map or using it with a non-HERE routing engine
7. Caching, temporary display during acquisition failures, historical or audit storage, backup, expiry, and deletion requirements
8. Required HERE and supplier attribution, end-user terms, links, logos, and disclaimers
9. Availability of upstream-source or supplier metadata, provider update timestamps, corrections, withdrawals, invalidation, and stable identifiers
10. Applicable SLA, service-health notifications, support, emergency escalation, and actions required during outages or contract changes
11. Privacy and security conditions, including whether end-user precise location, trip history, device identifiers, or personal data must be sent to HERE
12. Appropriate commercial plan, evaluation environment, information required for a preliminary quotation, and the applicable contract documents and current versions

Where possible, please identify the applicable service terms, product terms, order form, SLA, privacy terms, product documentation, and any supplier-specific conditions for Japanese traffic data.

After reviewing the initial response, we may submit a more detailed technical and contractual questionnaire through the appropriate contact.

Thank you for your assistance.

## Internal fields before submission

- Legal entity / operator: To be completed
- Contact person: To be completed
- Contact email: To be completed
- Service status: Requirements-definition phase
- Estimated users: Not finalized; any estimate requires human approval
- Estimated requests: Not finalized; any estimate requires human approval
- Target area: Japan; detailed regions not finalized
- Platforms: Web; possible future mobile applications
- Map provider: Not selected
- Expected launch date: Not finalized

## Follow-up routing

- If a commercial account representative is assigned:
  - Adjust the detailed questionnaire to the proposed product and contract
- If a technical or legal contact is assigned:
  - Send only the relevant sections of the detailed questionnaire
- If Japanese coverage is not confirmed in writing:
  - Keep the candidate at No-Go / hold
- If the proposed model requires transmitting user location or identifiers:
  - Create a separate privacy-requirements Issue before evaluation
- If the applicable contract documents and versions are not identified:
  - Do not make a Go decision

## Do not submit when

- Human review is incomplete
- Legal entity or contact details are missing
- Unfinalized assumptions are presented as final values
- Actual user data, credentials, or confidential information are included
- The use case includes real-time mobile-enforcement or police-location information
- Explicit approval to contact the provider has not been obtained
