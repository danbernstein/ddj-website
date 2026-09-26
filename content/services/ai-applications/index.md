---
title: "AI & Custom Applications"
description: "Building custom software and AI tools that augment human judgment and scale specialized expertise across your organization."
draft: false
layout: "case-studies"

stage:
  num: "2"
  name: "Build"

case_studies:
  - title: "Criminal Case Screening with AI-Assisted Evidence Synthesis"
    challenge: "An innocence project reviewed hundreds of case inquiries annually to identify potential wrongful convictions. Screening involved reading lengthy case files, extracting key facts, comparing evidence claims, and summarizing findings in evaluation memos. This work was repetitive but required legal judgment."
    solution:
      - "Identified discrete high-priority tasks that drained resources and were feasible targets for AI assistance"
      - "Built an AI tool to extract more than 100 pieces of information from a new client questionnaire packet"
     # - "Implemented multi-step analysis: fact extraction, timeline reconstruction, evidence gap identification, and comparative analysis against prior cases"
      - "Created AI-generated preliminary screening memos to summarize across volunteer reviews with flagged inconsistencies and potential leads"
      - "Designed attorney review interface to accept/reject AI findings and add judgment-based notes"
      - "Integrated new tools with internal data collection forms to minimize manual data entry"
  #  results:
  #    - text: "Reduced initial screening time per case by 60%"
  #    - text: "Increased consistency of case evaluation across reviewers"
  #    - text: "Surfaced fact patterns and evidence gaps that manual review sometimes missed"
  #    - text: "Enabled senior attorneys to review more cases while focusing on substantive judgment"
    technologies: "Claude API, Clio, agentic workflows, document processing"

  - title: "AI Intake & Referral System Assessment and Modernization"
    challenge: "A housing rights organization serving low-income tenants had built custom AI systems to support intake, triage, and referral workflows, but staffing changes left the systems undocumented and risky. Leadership needed independent assessment of which AI components were working, which needed replacement, and how to navigate vendor transitions without losing functionality. Data fragmentation across systems created gaps in service delivery. There was no oversight of automation failures (text failures, intermittent vendor failures)."
    solution:
      - "Conducted structured discovery interviews with intake and legal staff to understand actual workflows and pain points"
      - "Mapped data flows across systems to identify fragmentation, security risks, and handoff failures"
      - "Assessed custom AI systems: evaluated what was working, what was brittle, and what required replacement"
      - "Migrated critical vector database from failing vendor to Microsoft Azure to restore stability"
      - "Redesigned chatbot-to-human handoff so clients wouldn't be lost between automated triage and live staff"
    results:
      - text: "Stabilized AI systems post-staffing transition without service disruption"
      - text: "Reduced technology costs by consolidating redundant systems"
      - text: "Improved client routing speed—tenants now reach appropriate resources faster"
      - text: "Reduced staff burden by improving automation reliability and transparency"
    technologies: "Microsoft Azure, vector databases, LLM integration, Chatbots"

  - title: "Agentic Content Generation System for International Development Nonprofit"
    challenge: "An international development nonprofit needed staff to generate content from curated internal strategy documents, prior research, and case studies. Their existing AI solution did not receive regular updates nor could it handle ambiguous queries. The bot had zero conversational memory, forcing users to restate context with every query."
    solution:
      - "Diagnosed core issues: static vector database couldn't track updates in documents, chatbot lacked conversational context"
      - "Implemented automated syncing using AWS Lambda cron jobs to identify Google Drive changes and update Pinecone every 15 minutes"
      - "Migrated from Slack bot to OpenWebUI running on AWS Elastic Beanstalk as the frontend and LLM integration layer"
      - "Implemented agentic reasoning with function calling so the AI could decide when to search Pinecone vs. use web search vs. reason from memory"
      - "Built conversational memory so users could have coherent multi-turn conversations instead of isolated queries"
    results:
      - text: "Staff now has a tool they actually use regularly"
      - text: "Reduced time to generate content from curated sources"
      - text: "Improved answer quality by using agentic reasoning to determine the right retrieval strategy"
      - text: "Demonstrated path from basic RAG to genuinely useful agentic AI through iterative refinement"
    technologies: "Pinecone, Google Drive, AWS Lambda, OpenWebUI, Elastic Beanstalk, OpenAI API with function calling, conversational memory"

cta:
  title: "Want to see what AI can do for you?"
  #description: "AI isn't a replacement for judgment—it's a tool to help your specialists do more meaningful work. We build systems that scale what your experts know."
  button_text: "Get in touch"
  button_link: "/contact"
---