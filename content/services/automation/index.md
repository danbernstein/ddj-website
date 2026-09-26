---
title: "Process Design & Systems Thinking"
description: "Uncovering workflow bottlenecks, aligning operations with organizational priorities, and building sustainable processes that scale."
draft: false
layout: "case-studies"

stage:
  num: "2"
  name: "Build"

case_studies:
  - title: "Criminal Case Management Workflow Integration"
    challenge: "An innocence project managing hundreds of pending wrongful conviction cases had fragmented workflows across multiple systems. Staff spent hours manually syncing information across systems, creating data inconsistencies and delays. No visibility into where cases were in the pipeline or which volunteers were productive."
    solution:
      - "Conducted process mapping interviews with staff to understand current workflows from intake through case acceptance and litigation"
      - "Documented pain points: redundant data entry, poor visibility into caseload status, poor documentation practices"
      - "Designed integrations between Clio, Trello, and a Wordpress intake system to eliminate manual syncing"
      - "Built a streamlined automated volunteer management system in Trello that scaled to over 500 contributors"
      - "Built Gravity forms to capture critical information during case handling to improve service delivery continuity"
      - "Brought systems in-house rather than relying on external vendors to enable ongoing customization"
    results:
      - text: "Eliminated manual data syncing between Clio, Trello, and intake system"
      - text: "Reduced time for case intake and volunteer assignment from days to hours"
      - text: "Improved volunteer engagement through clearer task visibility and communication"
      - text: "Staff visibility into full caseload status enabled better capacity planning"
    technologies: "Clio, Trello, Zapier, WordPress, custom code (Python, JavaScript), process mapping"

  - title: "Data Collection for Strategic Advocacy"
    challenge: "The strategic advocacy arm of a state-wide legal aid provider wanted to expand their court watch program to observe due process violations in high-volume eviction courts."
    solution:
      - "Developed webscraping software to collect upcoming case and hearing information."
      - "Developed software to systematically identify all housing code enforcement issues in recent years and compile details about each violation."
      - "Combine eviction and code enforcement data with rental registry data to identify which landlords are using eviction to sidestep improving housing conditions."
    technologies: "Custom code (Python)"

cta:
  title: "Map Your Operations. Find Your Leverage Points."
  description: "Most organizations know something feels inefficient. We help you see exactly where, why, and what to fix first."
  button_text: "Get in touch"
  button_link: "/contact"
---