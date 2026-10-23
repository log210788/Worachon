# 🍂 Worachon's English Sanctuary & Learning Hub
### Interactive Cleaned Transcripts, Medical & Scientific Lexicon, and Idiom Practice Portals

**Student:** Worachon P. (Bangkok, Thailand 🇹🇭)  
**Tutor:** Louie (Lewis O'Shea)  
**Atmosphere:** Autumn Sanctuary • Kensington Bath Stone, Winchester Mist & Twilight Study  
**GitHub Pages Deployment:** [https://log210788.github.io/Worachon/](https://log210788.github.io/Worachon/)

---

## 🌟 Multi-Lesson Course Navigation

Worachon can seamlessly access both lessons directly through the top **Course Archive Switcher Bar** on GitHub Pages:

| Lesson | Date | Primary Themes & Scientific Discussions | Access Link |
| :--- | :--- | :--- | :--- |
| **Lesson 02 (Latest)** | **23 October 2026** | **Wan Piyamaharaj (ปิยมหาราช) & Pith Helmets, Richard Dawkins' Memes & Digital Gatekeepers, The Brain's Pain Paradox & Awake Craniotomies, Dura Mater Traction, Pyloric Sphincter & Alcohol Kinetics, Munich Work-Life Equilibrium, UCLA Fundamental Research vs Instant Impact, Fiber Optic Refractive Cladding.** | [**Launch Lesson 02 (index.html)**](./index.html) • [Direct Link](./lesson_10-23-2026.html) |
| **Lesson 01** | **22 October 2026** | **Orthopedic Prosthetics, Microbial Biology (Living Bacteria vs Viral Agents), Continental Plate Tectonics & Tsunamis, English Idiom Studio (Raining Cats & Dogs, Break a Leg, Last Straw, Silver Linings), Emotional Resilience Through Adversity.** | [**Launch Lesson 01**](./lesson_10-22-2026.html) |

---

## 🏛️ Core Features of Each Interactive Lesson Web App

Each single-file lesson application (`index.html`, `lesson_10-23-2026.html`, `lesson_10-22-2026.html`) integrates the 8 architectural pillars from `TEMPLATE_INSTRUCTIONS_FOR_AI.md`:

1. **Full Chronological Cleaned Transcript:**
   - 6 structured chapters per lesson with exact timestamps (`00:00` to end).
   - **Forensic Speaker Attribution:** Completely resolves automated note-taker speaker swaps, merges, and anonymous `Speaker 2` labels so Louie's voice and Worachon's voice are properly distinguished.
   - Interactive search bar, speaker filter toggles (All, Louie, Worachon), and per-turn Web Speech audio synthesis.

2. **Forensic Speech-to-Text Corrections (`fixBadge`):**
   - Automated speech-to-text mishearings (e.g., *"ปิยมหาราชเดย์"* → *"วันปิยมหาราช"*, *"pit hat"* → *"pith helmet"*, *"grass anatomy"* → *"gross anatomy"*, *"T-shirt in high school"* → *"teacher in high school"*, *"computer ship"* → *"computer chip"*, *"influencer"* → *"influenza"*, *"Cassandra"* → *"cats and dogs"*, *"the last store"* → *"the last straw"*) are highlighted with toggleable badges that can be displayed or hidden at will.

3. **50+ Inline Vocabulary Markers & Sticky Spotlight (`v`):**
   - Graded CEFR B2–C2 vocabulary across medicine, physics, neuroscience, philosophy, and colloquial idioms.
   - IPA phonetics, Thai translations (`th`), definitions, spoken lesson quotes, and Tippy.js hover popovers.
   - Dual-inspection: hover for a swift glance or click to populate the sticky right-hand spotlight panel.

4. **Searchable Vocabulary & Idioms Dictionary Tab:**
   - Filterable card grid by category pills (*Idioms & Sayings*, *Medical & Neuroscience*, *Optics & Biology*, *Lifestyle & Concepts*) and CEFR levels.
   - Interactive `🕒 MM:SS ↗` jump buttons that switch to the transcript, smoothly scroll to the turn, and pulse the line with a golden glow.

5. **Natural Strengths & Gentle Phrasing Tab:**
   - **Your Natural Strengths:** 6 celebrated high-level expressions Worachon used naturally in conversation to build confidence.
   - **Gentle Phrasing Polishes:** 6 encouraging, constructive phrase upgrades (*"In the moment spoken"* → *"Natural native polish"*).
   - **ASR Correction Log:** Detailed breakdown of automated speech-to-text stumbling points.

6. **Science, Culture & Life Philosophy Editorial Tab:**
   - 4 deep editorial cards exploring the concepts discussed in the lesson.

7. **Peaceful Practice Sanctuary & Idiom Gym:**
   - **Interactive Flippable Flashcard Deck:** 10–12 cards with sound pronunciation, usage examples, and Thai translations on flip.
   - **The Idiom Gym (Scenario Matcher):** 6 real-world conversational challenges with instant feedback and canvas confetti.
   - **Context Quiz:** 6 interactive multiple-choice questions with score tracking and confetti celebrations.
   - **Peaceful Reflection Prompts:** 3 thought-provoking speaking/writing topics for the next lesson.
   - **Preply Lesson Summary Clipboard Export:** Instant button to copy a friendly progress message for Preply chat.

8. **Calming Atmosphere & Sensory Controls:**
   - 3 Peaceful Themes: *Kensington Bath Stone*, *Winchester Mist*, and *Twilight Warm Study*.
   - Built-in procedural Web Audio API soundscape synthesizer (*Autumn Breeze*, *Soft Rain*, *Warm Study Hearth*) with no external media dependencies.
   - HTML5 Canvas ambient falling autumn leaves animation with adjustable speed modes (*Gentle*, *Breeze*, *Still*).
   - Web Speech audio synthesis with 0.85× slow and 1.0× natural speed control.

---

## 📁 Repository Structure

```text
Worachon P/
├── .nojekyll                   # Bypasses GitHub Pages Jekyll processing
├── README.md                   # Repository documentation and course index
├── push.bat                    # Windows deployment helper script
├── index.html                  # Default GitHub Pages landing page (Lesson 02 Latest)
├── lesson_10-23-2026.html      # Lesson 02 interactive portal (23 October 2026)
├── lesson_10-22-2026.html      # Lesson 01 interactive portal (22 October 2026)
├── lesson02_data.js            # Raw curated dataset for Lesson 02
├── build_portal.js             # Initial compiler script
└── Transcripts/
    ├── 10-22-2026.txt          # Raw transcript: Lesson 01 (53m 24s)
    └── 10-23-2026.txt          # Raw transcript: Lesson 02 (1h 00m 36s)
```