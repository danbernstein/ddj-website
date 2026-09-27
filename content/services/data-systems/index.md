---
title: "Case Management Systems"
description: "Building secure, scalable data foundations that organizations can rely on for years to come."
draft: false
layout: "case-studies"

stage:
  num: "2"
  name: "Build"

case_studies:
  - title: "Legal Services Organization Case Management Migration & Consolidation"
    challenge: "A housing rights organization using Clio for case management faced high licensing costs, inflexible workflows, and difficulty integrating with other tools. Multiple outdated WordPress sites duplicated content and created maintenance burden. Staff couldn't see integrated client intake and case outcomes data. Reporting required manual data export."
    solution:
      - "Designed and executed migration strategy from Clio to LegalServer with phased cutover to minimize disruption"
      - "Removed duplicate software subscriptions that had accumulated over years"
      - "Created Looker dashboards to surface case trends, client demographics, and service outcomes in real time"
      - "Implemented automated reporting for funders and internal leadership"
    results:
      - text: "Reduced annual software costs by 35% through consolidation and better licensing"
      - text: "Simplified reporting and internal referrals through consolidation in LegalServer"
      - text: "Improved self-service reporting capabilities"
    technologies: "LegalServer, Looker, WordPress migration"

  - title: "Emergency Rental Assistance Program Infrastructure Scaling"
    challenge: "A Memphis nonprofit launched an emergency rental assistance program that grew from 5,000 applicants in early COVID to 100,000+ within two years. Their initial Google Sheets and manual processes couldn't scale to meet the rising community needs. Staff spent hours manually searching court records across county systems. Data entry errors cascaded through the program. Leadership lacked visibility into program performance."
    solution:
      - "Migrated from Google Sheets to Airtable as primary case management system"
      - "Built Python web scraping pipelines to automatically pull eviction records from court system"
      - "Implemented Zapier automation to trigger SMS outreach and case prioritization based on court dates"
      - "Created AWS Lambda functions to sync data with external CRMs without requiring server management"
      - "Built Airtable-based dashboards showing application volume and case status"
    results:
      - text: "Scaled to handle 100,000 applicants without proportional staff increases"
      - text: "Eliminated manual court record lookups to save staff time"
      - text: "Reduced case processing time from days to hours through automated prioritization"
      - text: "Improved program visibility; leadership could see real-time spending and case outcomes"
    technologies: "Airtable, Python web scraping, AWS Lambda, Zapier, Automated data pipelines"

  - title: "State Homeless Services Data Ecosystem Assessment & Vision"
    challenge: "Connecticut Department of Housing managed a state-wide Homelessness Management Information System (HMIS) used by 24+ service providers. The system wasn't meeting user needs. Providers had implemented Smartsheet workarounds to fill gaps, creating duplicate data entry. Poor visibility into client flow created bottlenecks. State lacked clear picture of service reach and equity gaps. Leadership didn't know whether to modify current system, revert to vendor defaults, or rebid the platform."
    solution:
      - "Conducted 28 structured interviews with 46 stakeholders across providers to understand actual workflows and pain points"
      - "Mapped client journeys from outreach through housing placement and exit"
      - "Identified technical issues (mobile interface, data entry burden, limited customization) and process issues (disconnected entry points, poor inter-provider visibility)"
      - "Assessed current HMIS configuration against best practices and organizational needs"
      - "Benchmarked against 7 other states/CoCs (Nevada, Allegheny County, Boston, Austin, Denver, Houston, Maine) to understand platform options and costs"
      - "Developed strategic decision framework comparing modification, reversion, and replacement options"
    results:
      - text: "Provided clear decision framework for $500K+ platform investment decision"
      - text: "Identified that issues were primarily UX and integration, not fundamental platform limitation"
      - text: "Comparative analysis showed cost and staffing implications of each platform option"
      - text: "Equipped leadership to align 24 providers on technical strategy going forward"
    technologies: "Multi-provider HMIS assessment, stakeholder interview synthesis, competitive platform benchmarking, user experience analysis, decision framework development"


cta:
  title: "Build Solutions That Actually Solve Problems"
  description: "The right data foundation frees your staff from manual work and gives leadership visibility. We design systems for growth."
  button_text: "Get in touch"
  button_link: "/contact"
---