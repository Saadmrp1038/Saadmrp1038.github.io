---
title: "Trace2Script: A Framework for Web UI Test Script Generation from Natural Language Test Cases"
collection: publications
category: conferences
permalink: /publication/trace2script
excerpt: "Trace2Script is a novel two-stage framework that generates deterministic and maintainable Web UI test scripts from natural language test cases. The system uses an LLM-guided web agent for non-deterministic web traversal, then applies heuristic algorithms to convert traces into robust, executable test scripts."
date: 2026-01-01
venue: 'FSE (Submitted)'
authors: "Saad Mohammad Rafid Pial, Jaid Monwar Chowdhury, Junaed Younus Khan, Rownok Ratul, Anindya Iqbal"
# slidesurl: ''
# paperurl: ''
# bibtexurl: ''
# citation: 'Pial, S. M. R., et al. (2026). &quot;Agentic Framework for Natural Language Web UI Test Case Translation.&quot; <i>FSE 2026 (Soon to be submitted)</i>.'
---

Automatic Web UI testing is essential for rapid regression testing within continuous development cycles. However, test scripts of- ten rely on UI object locators that must be updated when DOM elements change, making test script maintenance a brittle and time- consuming process. While recent LLM-based approaches promise automation, they produce non-deterministic and unreliable code that is often error-prone and fails to execute. To address these chal- lenges, we introduce Trace2Script. Its novel two-stage architecture generates deterministic and maintainable test scripts from natural language by decoupling the non-deterministic web traversal phase from the deterministic script generation phase. Trace2Script uses an LLM-guided web agent to execute natural language instructions and capture raw interaction traces, including initially fragile loca- tors (e.g., absolute XPaths). A heuristic, rule-based algorithm then processes this trace, converting it into a deterministic executable test script with robust, human-readable locators. We evaluated Trace2Script on 445 test cases from 19 production websites. It suc- cessfully executed 84% of these cases, and for all correctly executed traces, it deterministically generated the corresponding robust test scripts. This automated process reduces test generation time by 10x compared to manual efforts. Furthermore, an industry survey with engineers from five organizations confirmed that the gener- ated scripts meet professional standards across multiple metrics, demonstrating the effectiveness of our hybrid approach.