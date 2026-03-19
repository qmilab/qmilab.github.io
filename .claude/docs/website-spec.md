# QMI Lab Website Specification

## Content Strategy: Three Layers

| Layer | Where | Time to understand | Purpose |
|-------|-------|-------------------|---------|
| **Layer 1** | Hero section | 8-12 seconds | Who we are, one sentence |
| **Layer 2** | Scroll down the page | 1-2 minutes | Research pillars, current projects, how to collaborate |
| **Layer 3** | /manifesto | 10-15 minutes | Full intellectual vision, principles, Year One plan |

Most visitors read Layer 1-2. The manifesto exists for the 5% who are seriously considering collaboration or found us through a paper.

---

## Phase 1: Single Page + Manifesto (Launch)

### Navigation (anchor links)

```
QMI Lab    Research    Publications    Collaborate    Manifesto
```

"QMI Lab" scrolls to top. "Manifesto" links to /manifesto. Others are anchor links on the main page.

### Page Sections (top to bottom)

#### 1. Hero

```
QMI Lab
Quantum & Machine Intelligence Laboratory

An independent research lab studying intelligence, learning,
and representation across classical and quantum computation.

Founded by Nandan · Principal Researcher
```

Two buttons: "Explore Research" (→ #research) and "Read the Manifesto" (→ /manifesto)

#### 2. Short Intro (2 paragraphs max)

QMI Lab investigates how machine intelligence emerges from representation, architecture, and learning dynamics. Our work spans classical machine learning, quantum machine learning, and long-horizon research on world models.

We focus on rigorous, publication-oriented research: empirical work in machine intelligence, benchmark-driven studies in quantum AI, and agenda-setting work at the frontier of quantum world models.

#### 3. Research Pillars (3 cards)

Each card shows: pillar number, title, time horizon tag, 2-3 sentence scope, 3-4 representative questions.

**Pillar I: Foundations of Machine Intelligence**
Current · Experimental · Publish-now

Representation, cross-lingual transfer, world-model evaluation, and learning dynamics. This is where QMI Lab builds its early publication record through empirical and reproducible work designed for present-day evaluation standards in NLP and machine learning.

Representative questions:
- How do architectures shape learned representations?
- Can script normalization support efficient cross-lingual transfer?
- What evaluation methodologies work for world models beyond next-token prediction?
- What training dynamics support more transferable internal structure?

**Pillar II: Quantum Machine Intelligence**
Near-term · Benchmark-driven · Matched-resource comparisons

Hybrid quantum-classical architectures, matched-resource benchmarking, and honest tests of quantum advantage. Every project includes strong classical baselines, explicit resource accounting, and evaluation under matched comparison conditions.

Representative questions:
- Do parameterized quantum circuits offer parameter efficiency in data-scarce regimes?
- How do encoding strategies affect information preservation in quantum systems?
- How do hybrid quantum-classical Transformer systems compare against classical alternatives?
- Where do the practical limits of NISQ-era quantum ML actually lie?

**Pillar III: Quantum World Models**
Long-horizon · Conceptual + methodological

Quantum simulation, world-model structure, and evaluation in physically grounded domains. Near-term outputs are methodological and conceptual: taxonomies, evaluation frameworks, benchmark proposals, and position papers.

Representative questions:
- What might a quantum-native world model architecture look like?
- How can quantum simulation interact with learned representations?
- How should quantum-state world models be evaluated?
- In which specific domains might quantum world models offer advantages?

#### 4. Current Projects

3-4 entries, each tagged with pillar:

- **Hybrid quantum-classical Transformer fine-tuning for NLP** [Pillar II] — in progress
- **Cross-lingual transfer through romanization** [Pillar I] — in preparation
- **Toward Quantum World Models: A Research Agenda** [Pillar III] — planned
- **World model evaluation methodology** [Pillar I / III] — planned

#### 5. Publications

Structured list, initially showing "in preparation" entries:

```
Publications

2026

· Hybrid quantum-classical Transformer fine-tuning for NLP
  Nandan · Pillar II · In preparation

· Cross-lingual transfer through romanization
  Nandan · Pillar I · In preparation
```

#### 6. Collaborate

**Who we work with:** University researchers, student co-authors, independent researchers, technical affiliates, aligned industry partners.

**What collaboration looks like:** Co-authored papers, affiliate research, benchmark development, research seminars, exploratory projects.

**What we look for:** Methodological rigor, openness to classical baselines, interest in publishable work, alignment with one of the three pillars.

**What QMI Lab brings:** Research direction, experimental infrastructure, cross-disciplinary framing, publication focus.

**Areas of interest:** NLP and representation learning, quantum computing and simulation, world models and evaluation methodology, benchmark design for quantum/classical comparison.

CTA: "Interested in collaborating? hello@qmilab.com"

#### 7. Footer

- hello@qmilab.com
- GitHub: github.com/qmilab
- X: @qmilab (pending handle resolution)
- "QMI Lab is an independent research organization. Quantputation is a company. They share a founder and inform each other, but serve different purposes."
- Link to Quantputation / QubitHub

### Manifesto Page (/manifesto)

Full v3 manifesto, cleanly formatted. At top: "Prefer the short version? ← Back to main site"

---

## Phase 2: Multi-Page Expansion (Post-First-Publication)

When content justifies it, expand to:
- /research — full pillar descriptions, methodology standards, active + completed projects
- /publications — filterable list (preprints, workshop papers, position papers, benchmarks)
- /people — when affiliates or core team join
- /about — split from main page if getting long
- /blog or /notes — research notes, essays

**Rule: every page must have real content before it exists.**

---

## Design Direction

- **NOT a startup landing page.** No gradients, no hero images, no animations.
- **NOT a documentation site.** No sidebar navigation, no Starlight/Docusaurus aesthetics.
- **IS a research lab site.** Clean typography, generous whitespace, muted palette, professional.
- **References:** MILA (mila.quebec), DeepMind research pages, OpenAI research pages — but simpler and smaller.
- **Mobile-responsive** but desktop-first (researchers primarily browse on desktop).

---

## Brand Assets

- **Domain:** qmilab.com
- **Email:** hello@qmilab.com
- **GitHub:** github.com/qmilab
- **X:** @qmilab (pending)
- **LinkedIn tagline:** "Research at the intersection of quantum computing and machine intelligence."
- **GitHub org description:** "Quantum & Machine Intelligence Laboratory — research in classical ML, quantum machine learning, and quantum world models. Open code, open science."
