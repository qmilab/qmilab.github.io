# Conversation Summary: Organizational Architecture & QMI Lab Founding
**Date:** March 19, 2026
**Context:** Strategic planning session for dividing four research projects across company entities, culminating in the creation of QMI Lab as an independent research laboratory.

---

## Background

Nandan has four active research projects:
1. **Romanization as cross-lingual transfer** — Building LLMs for non-English languages using romanization to discover a common probabilistic learning space across languages
2. **World Models research** — Investigating world models as a better way to define the world than NLP-based models alone
3. **Quantum Machine Learning for NLP Transformers** — Building Transformer optimization using QML/QDL tools (PennyLane, HuggingFace)
4. **Quantum Computing for World Models** — Novel long-term research into building world models with quantum technologies

He also has two companies:
- **Machinise** (machinise.com) — 4 co-founders + 3 engineers. Product: **MachineCraft**, an enterprise AI platform with a Workflow Engine (shipped) and Agent Engine (planned). Built on Langflow, with FastAPI + React + PostgreSQL + Kubernetes. Features: visual workflow builder, 100+ components, 22 LLM providers, deploy-anywhere architecture, encrypted credential management, audit logging. Most team members are not from ML/research (two sales professionals in Japan and France, one banking IT, one CV engineer).
- **Quantputation** (quantputation.com) — Solopreneur venture focused on making quantum technologies accessible, affordable, and portable. First product: **QubitHub** (qubithub.co), a developer infrastructure layer for quantum computing (circuit discovery, sharing, execution, benchmarking). MVP deployed with 50 curated circuits, browser-based execution, 5 visualizations, enterprise features, CLI/SDK, 390 tests. Infrastructure cost: $12/month.

---

## Key Decisions Made

### 1. Three-Entity Architecture (Final)

| Entity | Focus | Projects | Role |
|--------|-------|----------|------|
| **Machinise** | Enterprise AI products | MachineCraft | Product company — workflow automation, agent orchestration, compliance |
| **Quantputation** | Quantum developer infrastructure | QubitHub | Commercial vehicle — makes quantum tech accessible, affordable, portable |
| **QMI Lab** | Foundational research | All 4 research projects | Independent research lab — upstream of both companies |

### 2. QMI Lab Is Independent, NOT a Division of Quantputation

Early in the conversation, QMI Lab was proposed as a division within Quantputation (like FAIR within Meta). This was revised after Nandan articulated QMI Lab's scope — which is broader than Quantputation's and includes classical AI research that may never touch quantum. QMI Lab is the intellectual upstream; Quantputation is one downstream consumer.

**The flow:**
- QMI Lab → Quantputation: Research outputs flow into Quantputation when commercially relevant; publications validate Quantputation's thesis
- Quantputation → QMI Lab: Practical challenges from QubitHub feed back as research questions
- QMI Lab → Machinise: Occasional, if cross-lingual or world model research becomes relevant to enterprise AI
- Machinise operates independently with its own team and product direction

### 3. QMI Lab Full Name: "Quantum & Machine Intelligence Laboratory"

The ampersand version was chosen over "Quantum Machine Intelligence Laboratory" because:
- It makes explicit that quantum and machine intelligence are two converging fields being studied together, not a single compound concept
- It better accommodates Pillar I (classical ML research) without forcing everything to sound quantum-first
- It avoids implying a mature field called "Quantum Machine Intelligence" with settled boundaries
- Same acronym (QMI Lab), same domain (qmilab.com)

### 4. Jurisdiction Recommendations

- **QMI Lab:** Switzerland (Swiss GmbH) — research ecosystem (ETH, EPFL), lightweight bureaucracy, "Swiss research lab" brand prestige, IP-favorable patent box regimes, neutral collaboration space
- **Quantputation:** Japan — existing operations, lean GK structure, METI quantum strategy
- **Machinise:** Already registered (assumed Japan)

Final decision still pending from Nandan.

---

## Documents Produced

### QMI Lab Research Manifesto (v3.0 — Final)

**Files:** `qmi_lab_research_manifesto_v3.md` and `qmi_lab_research_manifesto_v3.docx`

v3 is a surgical precision pass on v2, based on external review (ChatGPT). No structural changes — 17 targeted edits focused on precision, defensibility, and methodological language. ChatGPT's final verdict: "This is now good enough to ship... it has crossed the line from 'interesting founder manifesto' into credible lab positioning." The recommendation is to **stop revising the manifesto and move to execution.**

A research manifesto (NOT a V2MOM — research labs need manifestos, not business plans) structured as:

1. **The Founding Question** — "How does information become knowledge? And how do we build machines that genuinely understand — not merely predict?"

2. **What We Believe** — Five convictions:
   - Knowledge is probabilistic and emergent
   - Architecture is not neutral
   - Classical and quantum research must co-evolve
   - World models are a powerful abstraction, and some may require quantum
   - Curiosity and experimentation lead to discovery

3. **Three Pillars of Research** (each with distinct time horizon and evidentiary standard):
   - **Pillar I: Foundations of Machine Intelligence** — Current, experimental, publish-now. Classical ML/DL/NLP/CV. Includes romanization research, world model evaluation, Transformer knowledge representation. Not every project has a quantum endpoint.
   - **Pillar II: Quantum Machine Intelligence** — Near-term, benchmark-driven, matched-resource comparisons. Hybrid quantum-classical architectures, QML/QDL, honest benchmarking. Every project includes strong classical baselines.
   - **Pillar III: Quantum World Models** — Long-horizon, agenda-setting, conceptual and exploratory. Quantum simulation meets learned representations. Near-term output is position papers and research agendas; experimental validation follows as hardware matures.

4. **The Larger Scope** — "QMI Lab studies intelligence, learning, and representation across classical and quantum computational substrates." Broader than QML alone. Classical research is as important as quantum approaches.

5. **Relationship to Quantputation** — Upstream/downstream, complementary not hierarchical. Neither is a subset of the other.

6. **Year One: Publications & Credibility** — Targets: 3-4 ArXiv preprints, 2-3 workshop papers, 1 full venue submission. Sequence: QML+NLP paper first (Pillar II), romanization second (Pillar I), quantum world models position paper third (Pillar III), world model evaluation fourth (Pillar I/III).

7. **Collaboration Model** — Co-authorship with universities, visiting researchers/affiliates, core team of 2-3 when resources permit, open by default.

8. **Research Principles** — Intellectual honesty above all; rigor earns the right to speculate; classical foundations before quantum aspirations; questions over answers; breadth through depth.

**v3 key changes from v2 (surgical precision edits):**
- Opening: replaced "do not model" with "primarily learn statistical structure" (less categorical)
- 300-qubit sentence: replaced popular-science framing with research-register language
- "What We Believe": sharpened "shape knowledge" to "learn transferable, model-like abstractions"
- World models paragraph: "field is converging" → "a growing line of research suggests"
- Pillar I: "top venues" → "present-day evaluation standards"; last question made concrete (training dynamics, representational transitions)
- Pillar II: added "explicit resource accounting" and "matched comparison conditions"
- Pillar III: "fundamentally inaccessible" → "intractable, lossy, or fundamentally difficult"; expanded deliverables to include taxonomies, evaluation frameworks, benchmark proposals
- Larger Scope: narrowed quantum tech from "full spectrum" to "quantum computing, quantum simulation, quantum-information-theoretic methods"
- Quantputation section: compressed (shorter conviction sentence, shorter closing paragraph)
- Year One: "Target" → "Goal" throughout
- Principles: more specific pillar grounding; stronger methodology language
- Long View: "genuine understanding" → "more structured, transferable, and model-based forms of competence"
- Cover subtitle and closing line preserved (manifesto register appropriate for bookends)

**v2 key changes from v1 (based on external review):**
- Softened absolutist quantum-world-model claims to defensible positions ("may be necessary for certain irreducibly quantum domains" not "the complete world model requires quantum")
- Dropped "Human Intelligence" scope expansion (was decorative, not operational)
- Added time horizon + evidentiary standard markers to all three pillars
- Reduced ontological flourish in body sections (~15% more restraint)
- Added matched-resource-budget language reflecting QDL review standards
- Revised Pillar III's fifth question to focus on domain-specificity of quantum advantage

### Quantputation V2MOM (v2.0)

**File:** `quantputation_v2mom_v2.md`

Revised from v1.0 to reflect the QMI Lab separation. Key changes:

- **New section:** "The Research Foundation: QMI Lab" added to Company Introduction
- **Vision revised:** From "build AI-quantum systems" to "serve as the commercial bridge that brings quantum-AI research from the lab to the developer"
- **Value 3 updated:** References QMI Lab's open publication
- **M2 completely rewritten:** Was "Build the quantum-AI research and product capability" → Now "Productize quantum-AI research through QubitHub" (pure research moved to QMI Lab; Quantputation focuses on commercialization)
- **M6 added:** "Establish and maintain the Quantputation–QMI Lab partnership" — formalizes the upstream/downstream relationship
- **O4 updated:** QMI Lab as talent attractor
- **O7 rewritten:** From "Proving the quantum-AI thesis" → "Demonstrating the quantum-AI convergence commercially" (QMI Lab owns scientific proof; Quantputation owns commercial proof)
- **Measures updated:** Replaced "research publications" with "QMI Lab research outputs integrated into QubitHub: 5+ reference implementations"
- **Brief Version updated:** Introduces QMI Lab alongside QubitHub

The three thesis convictions, mission statement, M1/M3/M4, and commercial measures are unchanged.

---

## Brand & Online Presence

### QMI Lab

- **Domain:** qmilab.com (registered) + qmilab.org (recommended as redirect/defensive)
- **X/Twitter:** @qmilab (available but hitting client error on handle change; auto-assigned @LabQmi51021 — keep dormant until handle change succeeds). Fallback: @QMI_Lab
- **LinkedIn tagline:** "Research at the intersection of quantum computing and machine intelligence."
- **GitHub org description:** "Quantum & Machine Intelligence Laboratory — research in classical ML, quantum machine learning, and quantum world models. Open code, open science."
- **GitHub README:** Three-pillar summary with principles line: "Open by default. Classical baselines before quantum claims. Questions over answers."

### Naming Hierarchy

- **Quantputation** — the company. Tagline: "Compute in the language of reality."
- **QMI Lab** — the research lab. Full: "Quantum & Machine Intelligence Laboratory."
- **QubitHub** — the first product. "The developer infrastructure layer for quantum computing."

---

## The Flywheel

```
QMI Lab publishes research
    → validates Quantputation's thesis
        → Quantputation fundraises & builds QubitHub
            → QubitHub surfaces practical challenges
                → feeds research questions back to QMI Lab
                    → QMI Lab investigates & publishes
                        → cycle continues
```

Machinise operates independently. MachineCraft could eventually integrate quantum capabilities via QubitHub's API (product partnership, not research overlap).

---

## Open Items / Next Steps

1. **QMI Lab Website:** Complete Astro project scaffolded (`qmilab-website.tar.gz`). Claude Code-ready with `CLAUDE.md` and `.claude/docs/` containing all reference documents. Needs: `npm install`, design refinement, deployment to hosting (Vercel/Netlify/GitHub Pages recommended). Phase 1 is single-page + manifesto; Phase 2 (multi-page) after first publication.
2. **X handle:** @qmilab showing as available but throwing client error. Try again after 24 hours; try different device/browser; try API if developer access available.
3. **Jurisdiction:** Final decision on Switzerland vs Japan vs EU for QMI Lab and Quantputation registration.
4. **Quantputation V2MOM .docx:** Markdown version produced; .docx version not yet created.
5. **First publication:** QML+NLP paper (Pillar II) is the highest priority — first artifact to carry the QMI Lab name.
6. **Collaboration sequencing:** Months 1-4 focus on first publication; months 4-8 seek co-authors deliberately; months 8-12 open affiliate positions and begin core team search.

---

## QMI Lab Website Project

**Framework:** Astro (static-first, content-driven)
**Archive:** `qmilab-website.tar.gz`

### Project Structure
```
qmilab-website/
├── CLAUDE.md                           # Claude Code project context
├── README.md                           # Repository README
├── .claude/docs/
│   ├── manifesto-v3.md                 # Full manifesto (reference)
│   ├── quantputation-v2mom-v2.md       # V2MOM (reference)
│   ├── org-architecture-summary.md     # Entity architecture context
│   └── website-spec.md                 # Website content plan & spec
├── .gitignore
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── public/
│   ├── favicon.svg                     # QMI favicon
│   └── robots.txt
└── src/
    ├── content/
    │   ├── config.ts                   # Publications collection schema
    │   └── publications/               # Markdown per paper
    │       ├── qml-transformer-nlp.md
    │       └── romanization-cross-lingual.md
    ├── pages/
    │   ├── index.astro                 # Single-page site (Phase 1)
    │   └── manifesto.astro             # Full v3 manifesto page
    ├── layouts/
    │   └── Base.astro                  # Shared layout, nav, footer
    ├── components/
    │   ├── Hero.astro
    │   ├── PillarCard.astro
    │   ├── PublicationEntry.astro
    │   └── CollaborateCTA.astro
    └── styles/
        └── global.css                  # Design system, CSS custom properties
```

### Website Strategy: Three Content Layers
1. **Hero (8-12 seconds):** Lab name, one-sentence value proposition
2. **Scroll down (1-2 minutes):** Research pillars, current projects, collaboration info
3. **Manifesto page (10-15 minutes):** Full intellectual vision for deep engagement

### Phase 1 (Launch): Single page + manifesto
### Phase 2 (Post-first-publication): Expand to multi-page when content justifies it

---

## Key Principles Established

- **Research labs need manifestos, not V2MOMs.** V2MOMs are business planning tools. QMI Lab's planning documents are: Research Manifesto (vision), Publication Roadmap (execution), Collaboration Framework (engagement).
- **QMI Lab is upstream of both companies.** All four research projects originate in QMI Lab. Commercial entities consume outputs downstream.
- **Intellectual honesty is non-negotiable.** Quantum methods must earn their place through demonstrated advantage, not assumed superiority. Every QML project includes strong classical baselines.
- **Breadth is earned through depth.** Three pillars with distinct time horizons and evidentiary standards. The lab doesn't try to do everything at the same pace.
- **Sequence ruthlessly.** The biggest risk is advancing all four projects simultaneously and producing four mediocre papers instead of one excellent one.
