---
title: "AI Agent for Internal Knowledge Retrieval"
description: "Replacing a memoryless chatbot with an agent that decides how to answer instead of guessing."
draft: false
type: "poster"
layout: "case-study"

stage:
  num: "2"
  name: "Build"

org: "International development nonprofit"
challenge: "An international development nonprofit needed staff to generate content from curated internal strategy documents, prior research, and case studies. Their existing AI solution did not receive regular updates nor could it handle ambiguous queries. The bot had zero conversational memory, forcing users to restate context with every query."
solution:
  - "Diagnosed core issues: static vector database couldn't track updates in documents, chatbot lacked conversational context"
  - "Implemented automated syncing using AWS Lambda cron jobs to identify Google Drive changes and update Pinecone every 15 minutes"
  - "Migrated from Slack bot to OpenWebUI running on AWS Elastic Beanstalk as the frontend and LLM integration layer"
  - "Implemented agentic reasoning with function calling so the AI could decide when to search Pinecone vs. use web search vs. reason from memory"
  - "Built conversational memory so users could have coherent multi-turn conversations instead of isolated queries"
results:
  - text: "Improved answer quality by using agentic reasoning to determine the right retrieval strategy"
  - text: "Demonstrated path from basic RAG to genuinely useful agentic AI through iterative refinement"
  - text: "Reduced time to generate content from curated sources"
technologies: "Pinecone, Google Drive, AWS Lambda, OpenWebUI, Elastic Beanstalk, OpenAI API, Function calling, Conversational memory"

cta:
  title: "Want to see what AI can do for you?"
  button_text: "Get in touch"
  button_link: "/contact"
---
