# HERE Traffic API 初回問い合わせ 送信前レビュー票（Issue #101）

- Created: 2026-07-24
- Target document: `docs/inquiries/here-traffic-api-initial-inquiry.md`
- Detailed questionnaire: `docs/inquiries/here-traffic-api-contract-technical-inquiry.md`
- Current decision: `No-Go (required fields and approvals are incomplete)`
- AI-assisted, human review required

## 1. Submission purpose

Confirm the official commercial, legal, and technical contact for HERE Traffic API v7 and identify the applicable documents and conditions for Japanese coverage, multi-user display, processing, third-party map display, caching, attribution, SLA, security, and privacy.

The initial inquiry is not a purchase commitment, quotation request, trial request, or adoption decision.

## 2. Destination review

| Item | Value | Status | Reviewer | Review date |
| --- | --- | --- | --- | --- |
| Provider | HERE Technologies | Confirmed |  |  |
| Contact type | Official sales / product inquiry | Must be rechecked before submission |  |  |
| Contact URL | `https://www.here.com/contact` | Must be rechecked before submission |  |  |
| Product | HERE Traffic API v7 Flow / Incidents | Confirmed as inquiry scope |  |  |
| Region | Japan | Inquiry assumption |  |  |
| Assigned sales contact | Not assigned | Incomplete |  |  |
| Legal / technical contact | Not assigned | Incomplete |  |  |

A human reviewer must verify the current official URL, form purpose, and product routing immediately before submission. Do not submit when the official commercial contact cannot be confirmed.

## 3. Submission document set

| Document | Purpose | Submission status | Commit SHA | Reviewer |
| --- | --- | --- | --- | --- |
| `here-traffic-api-initial-inquiry.md` | Initial sales inquiry | Submission candidate | To be entered |  |
| `traffic-data-provider-inquiry-common.md` | Internal assumptions | Do not submit by default | To be entered |  |
| `here-traffic-api-contract-technical-inquiry.md` | Detailed follow-up | Do not submit initially | To be entered |  |
| `provider-submission-register.md` | Internal approval register | Do not submit | To be entered |  |
| `traffic-data-provider-response-record.md` | Response record | Do not submit | To be entered |  |

## 4. Required sender information

Actual information must be entered by a human. AI must not infer or generate real contact details.

| Item | Value | Status | Verification method |
| --- | --- | --- | --- |
| Legal entity / operator | To be completed | Incomplete | Verify official legal information |
| Department | To be completed | Incomplete | Verify internally |
| Contact person | To be completed | Incomplete | Actual responsible person only |
| Contact email | To be completed | Incomplete | Confirm that replies can be received |
| Phone number | Optional / to be confirmed | Incomplete | Enter only when required |
| Service status | To be completed | Incomplete | Distinguish private planning / development / production |
| Service URL | Enter `Not publicly available` if unpublished | Incomplete | Do not invent a URL |
| Estimated users | Not finalized | Incomplete | Use only approved assumptions |
| Estimated requests | Not finalized | Incomplete | Use only approved assumptions |
| Target area | Japan; detailed regions not finalized | Assumption | Mark as non-final |
| Platforms | Web; possible future mobile | Assumption | Not a final architecture decision |
| Map provider | Not selected | Fixed | Keep explicitly unselected |
| Expected launch | Not finalized | Incomplete | Do not estimate without approval |

## 5. Draft review

### Facts and assumptions

- [ ] RouteGarage is described as being in the requirements-definition phase
- [ ] User volume, request volume, map provider, and launch schedule are stated as not finalized
- [ ] The inquiry is not presented as a purchase or adoption commitment
- [ ] Japanese availability is requested rather than assumed
- [ ] Public product descriptions are not treated as contractual permission
- [ ] Flow and Incidents are the only product scope for the initial inquiry

### Inquiry coverage

- [ ] Current Japanese commercial availability and coverage are requested
- [ ] Multi-user Web and future mobile display are requested
- [ ] Backend-to-client delivery is requested
- [ ] Transformation, categorization, and conflict status are requested
- [ ] Combination with separately licensed sources is requested
- [ ] Third-party base map and non-HERE routing use are requested
- [ ] Caching, audit storage, expiry, and deletion are requested
- [ ] Attribution and end-user terms are requested
- [ ] Upstream source, supplier, timestamps, correction, and withdrawal are requested
- [ ] SLA, service health, escalation, and suspension are requested
- [ ] User-location and personal-data requirements are requested
- [ ] Commercial plan, evaluation route, and applicable document versions are requested
- [ ] The detailed questionnaire is not attached to the initial inquiry

### Safety and privacy

- [ ] The use case is limited to review before driving or while safely stopped
- [ ] The inquiry does not encourage interaction while driving
- [ ] Real-time police or mobile-enforcement information is excluded
- [ ] Enforcement avoidance is not described as a purpose
- [ ] Exact speed-camera coordinates or approach alerts are not requested
- [ ] Actual user locations, trip histories, or identifiers are not included

### Confidentiality and security

- [ ] No API keys, tokens, secrets, or passwords are included
- [ ] No third-party contracts, quotations, or non-public responses are included
- [ ] No internal vulnerabilities or sensitive architecture details are included
- [ ] Personal sender information is limited to the minimum required fields

### Language and representation

- [ ] The English text accurately represents the approved Japanese assumptions
- [ ] Terms such as `commercial availability`, `permitted`, and `applicable terms` are used as questions, not conclusions
- [ ] No wording implies that HERE guarantees traffic accuracy or safety
- [ ] No wording implies that RouteGarage is already a HERE customer

## 6. Approval record

| Approval area | Approver | Approval date | Target commit SHA | Decision | Comment |
| --- | --- | --- | --- | --- | --- |
| Project | To be completed |  | To be completed | Not approved |  |
| Legal / contract | To be completed |  | To be completed | Not approved |  |
| Operations | To be completed |  | To be completed | Not approved |  |
| Security / privacy | To be completed |  | To be completed | Not approved |  |
| English wording | To be completed |  | To be completed | Not approved |  |
| External submission | To be completed |  | To be completed | Not approved |  |

## 7. Submission decision

### Current decision

`No-Go`

### Reasons

- Legal entity, contact person, and email are incomplete
- Target commit SHA is not fixed
- Official HERE contact routing has not been rechecked immediately before submission
- Project, legal, operations, security, privacy, and English reviews are incomplete
- Explicit external-submission approval is missing
- Controlled evidence storage has not been confirmed

### Conditions for Go candidate

- [ ] Complete all required sender information
- [ ] Record assumptions, evidence, and approvers
- [ ] Fix the target document commit SHA
- [ ] Recheck the official HERE sales contact immediately before submission
- [ ] Complete all draft-review items
- [ ] Complete all approval areas
- [ ] Confirm controlled evidence storage
- [ ] Record explicit external-submission approval

## 8. Post-submission record

Leave blank before submission.

- Submission date and time:
- Sender:
- Destination URL:
- Target document commit SHA:
- Case / ticket number:
- Automatic response reference ID:
- Controlled evidence reference ID:
- Expected response date:
- Status: Not submitted

## 9. Follow-up routing

- If a sales owner is assigned, select only the relevant sections of the detailed questionnaire.
- If Japanese coverage is not confirmed in writing, keep HERE at `No-Go / hold`.
- If third-party map display is restricted, record the permitted combinations and create a separate comparison Issue.
- If user location or persistent identifiers are required, create a separate privacy-requirements Issue before evaluation.
- If applicable contract documents and versions are not identified, do not make a Go decision.
- Do not store HERE responses, attachments, contracts, or quotations in the public Repository.
