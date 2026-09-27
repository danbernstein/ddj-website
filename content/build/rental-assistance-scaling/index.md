---
title: "Emergency Rental Assistance Program Infrastructure Scaling"
description: "Scaling from 5,000 to 100,000 applicants without a proportional increase in staff."
draft: false
type: "poster"
layout: "case-study"

stage:
  num: "2"
  name: "Build"

org: "Memphis nonprofit"
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

cta:
  title: "Build Solutions That Actually Solve Problems"
  description: "The right data foundation frees your staff from manual work and gives leadership visibility. We design systems for growth."
  button_text: "Get in touch"
  button_link: "/contact"
---
