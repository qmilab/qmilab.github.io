# QMI Lab
## Quantum & Machine Intelligence Laboratory

# Research Manifesto

*Understanding intelligence. From information to knowledge. From classical to quantum. From approximation to reality.*

**v3.0 — March 2026**
**qmilab.com**

---

## The Founding Question

**How does information become knowledge? And how do we build machines that genuinely understand — not merely predict?**

These two questions, one philosophical and one engineering, are the reason QMI Lab exists. They are deceptively simple. The history of artificial intelligence is, in many ways, a history of mistaking progress on the second question for progress on the first.

Modern AI systems — large language models, vision transformers, multimodal architectures — are extraordinary pattern recognizers. They compress the statistical structure of enormous datasets into parameter spaces and produce outputs that are often indistinguishable from genuine understanding. But they primarily learn statistical structure in observations rather than the full causal or physical processes that generate those observations. They build representations of the world in words and pixels — representations that work remarkably well for many tasks, yet may remain structurally limited in domains where the underlying dynamics are irreducibly quantum.

QMI Lab is founded on the conviction that closing this gap requires two things working in concert:

**First, deeper foundational research into the nature of machine intelligence itself** — how architectures shape what can be learned, how representations constrain what can be understood, how information diffuses and crystallizes into knowledge across languages, modalities, and domains. Much of this research is classical, and valuably so. Understanding what classical methods can and cannot do is prerequisite to knowing where quantum approaches are needed.

**Second, the computational substrate that matches reality's information processing in domains where classical methods reach fundamental limits** — quantum computation. The state space of a 300-qubit system grows exponentially, far beyond what can be tractably enumerated classically. Classical simulation of quantum phenomena scales exponentially in cost. For problems in molecular dynamics, many-body physics, materials science, and quantum chemistry, faithful simulation may ultimately require quantum hardware.

These are not separate research programs. They are one program viewed from two directions. QMI Lab pursues both — with the understanding that the boundary between "classical is sufficient" and "quantum is necessary" is itself a research question, not a settled fact.

---

## What We Believe

**Knowledge is probabilistic and emergent.** Information does not become knowledge through accumulation alone. It diffuses, interacts, and crystallizes into structured understanding through processes we do not yet fully characterize. Whether architectures like Transformers learn transferable, model-like abstractions or primarily compress statistical regularities remains an open and consequential question. Resolving it is prerequisite to building machines that understand.

**Architecture is not neutral.** The choice of computational architecture — Transformer, recurrent, graph, quantum circuit — is not merely an engineering decision. It determines what can be represented, what can be learned, and what remains invisible. The right architecture for a problem depends on the structure of the problem. For certain problem classes, quantum architectures may offer structural advantages that no classical architecture can replicate — but this claim must be demonstrated empirically, not assumed.

**Classical and quantum research must co-evolve.** Quantum machine intelligence cannot be built on weak classical foundations. Advancing QML without deeply understanding classical ML produces hype, not science. Equally, pursuing classical AI without investigating the fundamental limitations of classical computation for certain problem classes may leave important capabilities on the table. Both directions of research are essential, and they inform each other.

**World models are a powerful abstraction, and some may require quantum.** A growing line of research suggests that building models of latent world dynamics — not just models of language, vision, or action in isolation — may be a promising path toward more general intelligence. Classical world models are sufficient for many practical regimes. But for domains where the underlying dynamics are irreducibly quantum — molecular behavior, quantum materials, many-body systems — faithful simulation may require quantum computation. The question of which domains genuinely need quantum world models, and where classical approximations remain adequate, is itself a central research question for QMI Lab.

**Curiosity and experimentation lead to discovery.** QMI Lab is not organized around a single bet or a single timeline. It is organized around questions. Some will lead to publications. Some will lead to commercial applications. Some will lead to new questions. The commitment is to intellectual honesty, rigorous methodology, and the patience to follow research where it leads — including into dead ends, which are themselves informative.

---

## Three Pillars of Research

QMI Lab's research is organized into three pillars. They are not isolated programs — they interact, share methodology, and inform each other. A discovery in one pillar frequently opens questions in another.

Each pillar operates on a different time horizon and holds itself to a different evidentiary standard. This is deliberate: a lab that tries to do everything at the same pace does nothing well.

---

### Pillar I: Foundations of Machine Intelligence
*Time horizon: Current. Standard: Experimental, publish-now.*

How do architectures shape what can be learned? How does information diffuse into knowledge? What are the representational bottlenecks in current systems? This pillar investigates the classical foundations of machine intelligence — NLP, deep learning, computer vision, physical AI — with emphasis on representation, cross-lingual transfer, and the nature of learned knowledge. Not every project here has a quantum endpoint. Some of the most important questions in intelligence are not quantum questions at all.

This is the pillar where QMI Lab builds its early publication record and establishes immediate credibility. The work here is empirical, reproducible, and designed for present-day evaluation standards in NLP and machine learning.

**Core Questions:**
- Does romanization reveal a shared probabilistic learning space across languages, or does script normalization destroy information that matters?
- How do Transformer architectures shape the knowledge they encode? Is there a fundamental representational bottleneck?
- Can cross-lingual transfer from English LLMs be achieved cheaply through script normalization, and how does this vary with language typology?
- What evaluation methodologies are needed for world models that go beyond next-token prediction?
- What training dynamics, representational transitions, or architectural bottlenecks mark the transition from memorization to more transferable internal structure in neural networks?

---

### Pillar II: Quantum Machine Intelligence
*Time horizon: Near-term. Standard: Benchmark-driven, matched-resource comparisons.*

Where and why do quantum approaches offer genuine advantages for machine learning and AI? This pillar bridges classical AI and quantum computation, investigating hybrid quantum-classical architectures, quantum deep learning, and honest benchmarking of quantum vs. classical methods. The commitment is to scientific rigor: quantum methods must earn their place through fair, explicit, and empirically demonstrated advantage — not assumed superiority.

Every project in this pillar includes strong classical baselines, explicit resource accounting, and evaluation under matched comparison conditions. This is the methodological standard the field increasingly demands, and QMI Lab intends to meet it from the outset.

**Core Questions:**
- Can parameterized quantum circuits provide genuine parameter efficiency in data-scarce regimes, or do classical methods always catch up?
- What encoding strategies (amplitude, angle, basis, IQP) best preserve the information structure of NLP data in quantum systems?
- How do hybrid quantum-classical Transformer architectures compare to fully classical models under matched resource budgets?
- What are the practical limits of quantum machine learning on NISQ hardware, and where does the transition to advantage occur?
- Can quantum-inspired classical methods capture some benefits of quantum approaches without quantum hardware?

---

### Pillar III: Quantum World Models
*Time horizon: Long-horizon. Standard: Agenda-setting, conceptual, and exploratory.*

Can quantum computation enable classes of world models that capture dynamics or state structure that are intractable, lossy, or fundamentally difficult to represent classically? This is the longest-horizon, most ambitious pillar — the convergence of world model research, quantum simulation, and machine intelligence. Classical world models are sufficient for many practical regimes. But for domains where the underlying dynamics are irreducibly quantum, faithful simulation may require quantum hardware. This pillar investigates that frontier — carefully, with honest acknowledgment of what is currently speculative and what is empirically grounded.

The near-term output of this pillar is primarily methodological and conceptual: position papers, taxonomies, evaluation frameworks, benchmark proposals for physically grounded domains, and careful delineation of where quantum world models might offer genuine capabilities beyond classical approaches. Experimental validation will follow as quantum hardware and hybrid methods mature.

**Core Questions:**
- What would a quantum-native world model architecture look like? How does it differ structurally from classical world models?
- Can quantum simulation of physical systems be integrated with learned representations to create hybrid world models?
- What is the minimal quantum resource required to achieve world model capabilities that are provably impossible classically?
- How do we evaluate world models that operate on quantum state spaces rather than classical observations?
- In which specific domains do quantum world models offer genuine advantages over classical approaches, and where do classical approximations remain adequate?

---

## The Larger Scope

QMI Lab studies intelligence, learning, and representation across classical and quantum computational substrates. This scope is deliberately broader than quantum machine learning alone.

Fundamental research in classical ML, deep learning, NLP, computer vision, and physical AI is as important to QMI Lab's mission as quantum approaches. The reason is simple: you cannot know where quantum helps unless you deeply understand where classical methods succeed, fail, and reach their limits. And some of the most important questions about intelligence — how information becomes knowledge, how representations shape understanding, how learning dynamics unfold — are questions that exist independent of the computational substrate.

Equally, QMI Lab is not constrained to QML and QDL narrowly construed. Quantum computing, quantum simulation, and quantum-information-theoretic methods may all prove relevant to intelligence research in ways we do not yet fully understand. The lab's commitment is to follow the questions, not to defend a predetermined technological boundary.

This breadth is intentional but disciplined. Each pillar has a clear time horizon and evidentiary standard. The lab publishes in Pillar I now, benchmarks rigorously in Pillar II, and sets agendas carefully in Pillar III. Breadth without depth is superficiality. QMI Lab earns its breadth through the quality of its work in each pillar.

---

## Relationship to Quantputation

QMI Lab and Quantputation share a founder and a conviction: that quantum computation will matter deeply in some domains of modeling, simulation, and intelligence. They serve different purposes.

**Quantputation** is a commercial company. Its mission is to make quantum technologies accessible, affordable, and portable. Its first product, QubitHub, is a developer infrastructure platform. Quantputation ships products, serves customers, and builds a business. Its timeframe is quarters and years.

**QMI Lab** is a research laboratory. Its mission is to understand intelligence — through both classical and quantum lenses. It publishes openly, collaborates broadly, and pursues questions wherever they lead. Its timeframe is years and decades.

The relationship between them is upstream/downstream. QMI Lab's research outputs flow into Quantputation when commercially relevant; Quantputation's practical challenges flow back to QMI Lab as research questions grounded in real-world usage.

Neither entity is a subset of the other. QMI Lab is a research organization; Quantputation is a company. They inform each other, but they serve different purposes and operate on different time horizons.

---

## Year One: Publications & Credibility

QMI Lab's first-year priority is establishing credibility through rigorous publications. The publication roadmap is structured to plant the flag, build momentum, and attract collaborators.

### Publication Targets (2026–2027)

**ArXiv preprints:** The primary vehicle for establishing QMI Lab's identity. Each preprint carries the "QMI Lab" affiliation. Goal: 3–4 preprints in Year 1.

**Workshop submissions:** NeurIPS, ICLR, EMNLP, and ACL workshops. These are credibility signals and networking opportunities. Goal: 2–3 workshop submissions, with acceptance as the desired outcome.

**Full venue submissions:** EACL, EMNLP, or equivalent. Longer-horizon, higher bar. Goal: 1 full-venue submission by the end of Year 1.

### Research Sequence

**First (in progress):** Hybrid quantum-classical Transformer fine-tuning for NLP. PennyLane + HuggingFace, PQC classification head on frozen pretrained model, SST-2 and few-shot benchmarks. This is the most advanced project and the first to carry the QMI Lab name. *[Pillar II — benchmark-driven]*

**Second:** Cross-lingual transfer through romanization. Five-language comparison (Japanese, Hindi, Mandarin, Korean, Vietnamese), three training conditions per language, QLoRA fine-tuning on Llama 3.1 8B. ArXiv target: mid-2026. *[Pillar I — experimental]*

**Third:** Quantum world models — a position paper. "Toward Quantum World Models: A Research Agenda." Establishes QMI Lab's intellectual territory in Pillar III without requiring full experimental results. Identifies specific domains where quantum world models may offer genuine advantages over classical approaches. Suitable for a NeurIPS or ICLR workshop. *[Pillar III — agenda-setting]*

**Fourth:** World model evaluation methodology. The evaluation gap is the highest-leverage contribution opportunity in world models research. A rigorous evaluation framework paper positions QMI Lab as a methodological contributor, not just a model builder. *[Pillar I / III — bridging]*

---

## Collaboration Model

QMI Lab is designed for collaboration from day one. Intelligence research benefits from diverse perspectives, and the intersection of quantum computing and AI is too broad for any single researcher to cover alone.

### Co-Authorship & University Partnerships

QMI Lab actively seeks co-authors from university research groups, particularly in quantum computing, NLP, and world models. The model: QMI Lab brings the research vision, experimental infrastructure, and cross-disciplinary perspective. University collaborators bring domain depth, student researchers, and institutional resources. Publications carry joint affiliations.

### Visiting Researchers & Affiliates

QMI Lab offers affiliate positions to researchers who wish to contribute to specific projects without full-time commitment. Visiting researchers (including virtual visitors) can collaborate on publications, share compute resources, and participate in QMI Lab's research seminars. The affiliation is lightweight: no employment relationship, shared IP on joint work, open publication by default.

### Core Research Team

As resources permit, QMI Lab intends to build a small core team of 2–3 researchers in the first 12–18 months. These would be researchers whose interests align with QMI Lab's three pillars and who bring complementary expertise — for instance, a quantum physicist with interest in ML, or an NLP researcher curious about quantum representations. The core team works on QMI Lab's primary research threads while maintaining freedom to pursue their own questions within the lab's scope.

### Open by Default

QMI Lab's research is published openly. Code and data are shared whenever possible. The lab's credibility comes from the quality of its work, not from proprietary advantage. This openness is both a value and a strategy: it attracts collaborators, builds trust, and accelerates the field.

---

## Research Principles

**1. Intellectual honesty above all.** If a quantum method underperforms a classical baseline, we say so. If a research direction leads nowhere, we publish the negative result. The field needs honest benchmarks more than it needs optimistic claims. QMI Lab's reputation is built on trust, and trust is built on honesty.

**2. Rigor earns the right to speculate.** Ambitious claims about quantum advantage, world models, or the nature of intelligence are only credible when supported by rigorous methodology. We earn the right to make bold claims by doing careful science. Pillar III's long-horizon ambitions are disciplined by Pillar I's empirical work and Pillar II's benchmark-driven rigor.

**3. Classical foundations before quantum aspirations.** Every quantum ML project at QMI Lab includes strong classical baselines. Every claim of quantum advantage is tested against strong classical alternatives under explicitly stated comparison conditions and matched resource assumptions. This is not caution — it is the only way to know whether quantum helps.

**4. Questions over answers.** The lab is organized around questions, not around technologies or techniques. A good question outlasts any particular approach to answering it. When a research thread stalls, we ask whether we are pursuing the right question, not just the right method.

**5. Breadth through depth.** QMI Lab's scope is deliberately broad. But breadth without depth is superficiality. Each project is pursued with the depth required for publication-quality results. Each pillar operates on a clear time horizon with an appropriate evidentiary standard. We would rather publish two rigorous papers than five mediocre ones.

---

## The Long View

QMI Lab exists because the most important questions about intelligence cannot be answered by any single field, any single architecture, or any single computational paradigm.

Understanding how information becomes knowledge. Understanding how machines can move beyond surface prediction toward more structured, transferable, and model-based forms of competence. Understanding where classical computation is sufficient and where quantum computation becomes necessary. These are questions that span decades, not quarters.

The lab is small today. It may remain small, or it may grow. Its value is not measured in headcount or funding, but in the quality of the questions it asks and the rigor of the answers it produces.

> *"Nature isn't classical, dammit, and if you want to make a simulation of nature, you'd better make it quantum mechanical, and by golly it's a wonderful problem, because it doesn't look so easy."*
> — Richard Feynman, 1981

It doesn't look so easy. That's precisely why it's worth doing.

---

**QMI Lab — Quantum & Machine Intelligence Laboratory**
**qmilab.com**

---

## Changelog

- **v3.0 (March 2026):** Surgical precision pass based on external review. Opening paragraph: replaced "do not model" with "primarily learn statistical structure in observations rather than the full causal or physical processes" (less categorical). 300-qubit sentence: replaced popular-science framing with research-register language. "What We Believe": sharpened "shape knowledge" to "learn transferable, model-like abstractions" (more operationally legible); replaced "the field is converging" with "a growing line of research suggests" (less declarative). Pillar I: softened "top NLP and ML venues" to "present-day evaluation standards"; replaced abstract "how does information become knowledge" question with concrete "training dynamics, representational transitions, architectural bottlenecks" formulation. Pillar II: tightened rigor commitment language; added "explicit resource accounting" and "matched comparison conditions" to methodological standard. Pillar III: replaced "fundamentally inaccessible" with "intractable, lossy, or fundamentally difficult to represent" (three levels of claim); expanded near-term deliverables to include taxonomies, evaluation frameworks, and benchmark proposals. "Larger Scope": narrowed quantum technology scope from "full spectrum" to "quantum computing, quantum simulation, and quantum-information-theoretic methods." Quantputation section: shortened conviction sentence and compressed final paragraph. Year One: changed "Target" to "Goal" throughout (less KPI, more research planning). Principle 2: made pillar grounding sentence more specific. Principle 3: replaced "best available classical method" with "strong classical alternatives under explicitly stated comparison conditions." "The Long View": replaced "genuine understanding" with "more structured, transferable, and model-based forms of competence" (less metaphysical). Cover subtitle and closing line preserved from v2 (manifesto register appropriate for bookends).
- **v2.0 (March 2026):** Incorporated external review feedback. Softened absolutist quantum-world-model claims. Dropped "Human Intelligence" scope expansion. Added time horizon and evidentiary standard markers to all three pillars. Reduced ontological flourish in body sections.
- **v1.0 (March 2026):** Initial draft.
