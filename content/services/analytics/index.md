---
title: "Analytics & Reporting"
description: "Turning organizational data into reliable insights that inform decisions and demonstrate impact to funders."
draft: false
layout: "case-studies"

stage:
  num: "1"
  name: "Advise"

case_studies:
  - title: "Data Quality Foundation & Intake Analytics"
    challenge: "A legal services organization had reliable data in some LegalServer fields but discretionary fields were inconsistently used across offices. Development staff had low confidence in intake and outcomes data. A single paralegal bottlenecked all data requests. Reports existed but staff didn't trust them. Funders asked for nuanced data that the organization couldn't reliably answer."
    solution:
      - "Conducted foundational data quality assessment across key LegalServer fields (intake, case acceptance, outcomes, time tracking)"
      - "Documented which fields were complete, which were optional but inconsistently used, and which were missing definitions"
      - "Established data governance roles—distinguishing technical system administration from ongoing data stewardship"
      - "Created simple, stand-alone analyses (intake completion rates, time from contact to disposition, rejection patterns by case type)"
      - "Sequenced analysis intentionally: start simple to build confidence, then layer in complexity as data literacy grew"
    results:
      - text: "Identified that intake data quality was adequate for analysis—no system replacement needed"
      - text: "Built staff confidence in data through transparent methodology and clear limitations"
      - text: "Distributed data literacy across team rather than concentrating in one person"
      - text: "Enabled Development to answer funder questions with credible data"
    technologies: "LegalServer data audit, SQL queries, data completeness analysis, documentation frameworks"

  - title: "Homeless Services Multi-Provider Benchmarking"
    challenge: "A state housing agency funded 24 service providers using a shared HMIS. Individual providers had limited visibility into outcomes or how their performance compared to peers. The state couldn't benchmark across providers or regions. Reporting was manual, inconsistent, and didn't surface equity gaps."
    solution:
      - "Mapped data across providers to identify common data points and regional differences"
      - "Developed client journey analysis to track people from outreach through housing and exit follow-up"
      - "Created provider-specific dashboards showing client flow, outcomes by program type, and length-of-stay metrics"
      - "Implemented equity analysis to identify whether services were reaching target populations equally"
      - "Built comparative reports to show peer performance without naming individuals"
    results:
      - text: "Enabled providers to see outcomes data previously buried in HMIS reports"
      - text: "Identified regional performance variations that drove policy discussions"
      - text: "Revealed equity gaps in service access that shaped outreach strategy"
      - text: "Reduced manual reporting effort by 40% through automated dashboards"
    technologies: "HMIS data extraction, SQL analysis, Google Sheets/Looker dashboards, comparative benchmarking, equity metrics"

  - title: "Case Acceptance & Staffing Capacity Analytics"
    challenge: "Managing attorneys at a multi-office legal services organization made case acceptance decisions based on professional judgment and informal capacity conversations. There was no shared understanding of which case types took longest, how caseload varied by office, or whether specialized cases could be centralized. Proposals and budgeting relied on anecdote rather than data."
    solution:
      - "Analyzed case acceptance data to identify patterns: which case types were most frequently rejected, which took longest to resolve, which generated the most follow-up"
      - "Computed time-to-disposition by case type and office to reveal true capacity bottlenecks"
      - "Assessed historical impact of prior case acceptance policy changes to evaluate effectiveness"
      - "Examined internal referral patterns to identify informal specialization and quantify centralization opportunities"
      - "Built staff-facing reports that surfaced findings without appearing to second-guess professional judgment"
    results:
      - text: "Revealed that 3 case types consumed 40% of staff time but represented 15% of cases"
      - text: "Quantified impact of prior case acceptance policy changes with data, not opinion"
      - text: "Provided evidence for conversations about centralization vs. regional capacity"
      - text: "Enabled informed staffing and budget decisions"
    technologies: "LegalServer case data, time tracking analysis, comparative case type analysis, historical policy impact assessment"

cta:
  title: "Let Your Data Tell the Story"
  description: "You're already collecting the data. We help you understand what it's actually saying—and what it means for your organization."
  button_text: "Get in touch"
  button_link: "/contact"
---