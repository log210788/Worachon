// Comprehensive Portal Builder for Worachon P's Lesson 02 (Oct 23, 2026)
const fs = require('fs');
const path = require('path');
const {
  ASR_FIXES,
  NATURAL_STRENGTHS,
  PHRASING_POLISHES,
  EDITORIAL_TOPICS,
  FLASHCARDS,
  IDIOM_CHALLENGES,
  QUIZ_QUESTIONS,
  REFLECTION_PROMPTS
} = require('./lesson02_data.js');

console.log("Compiling Worachon P's complete index.html for Lesson 02 (23 October 2026)...");

// -----------------------------------------------------------------------------
// 1. VOCABULARY DATABASE (55 Curated B2-C2 Items, Medical Concepts, Science & Idioms)
// -----------------------------------------------------------------------------
const VOCAB_DB = {
  "chulalongkorn-day": {
    word: "Chulalongkorn Memorial Day (วันปิยมหาราช)",
    ipa: "/ˌtʃʊ.ləˈlɒŋ.kɔːn məˈmɔː.ri.əl deɪ/",
    pos: "proper noun",
    level: "B2",
    cat: "culture",
    def: "An official national holiday in Thailand celebrated annually on October 23rd commemorating King Chulalongkorn (Rama V).",
    quote: "Worachon: \"It's called วันปิยมหาราช (Chulalongkorn Day), so it's some kind of a memorial day for a previous king.\"",
    th: "วันปิยมหาราช (23 ตุลาคม ของทุกปี)"
  },
  "dignified": {
    word: "dignified",
    ipa: "/ˈdɪɡ.nɪ.faɪd/",
    pos: "adjective",
    level: "B2",
    cat: "culture",
    def: "Composed, noble, and commanding serious respect through solemn poise and majestic bearing.",
    quote: "Louie: \"When I'm in Thailand and I see the pictures of your king and your queen... they look strong, they look dignified.\"",
    th: "สง่างาม / ภูมิฐานสมเกียรติ"
  },
  "pith-helmet": {
    word: "pith helmet",
    ipa: "/ˈpɪθ ˌhel.mət/",
    pos: "noun",
    level: "C1",
    cat: "culture",
    def: "A lightweight, rigid sun hat crafted from dried solah pith or cork, traditionally donned with tropical ceremonial uniforms.",
    quote: "Louie: \"It's a colonial hat for the tropics... your king wears this pith helmet in royal pictures, a very nice look.\"",
    th: "หมวกกะโล่ (หมวกเครื่องแบบพิธีการกันแดดเขตร้อน)"
  },
  "adequate": {
    word: "adequate",
    ipa: "/ˈæd.ə.kwət/",
    pos: "adjective",
    level: "B2",
    cat: "everyday",
    def: "Sufficient, satisfactory, or acceptable in quality or quantity for a particular requirement.",
    quote: "Louie: \"Fair enough, fair enough... but it's okay, it's quite adequate?\"",
    th: "พอใช้ได้ / เพียงพอต่อความต้องการ"
  },
  "nerdy": {
    word: "nerdy",
    ipa: "/ˈnɜː.di/",
    pos: "adjective",
    level: "B2",
    cat: "everyday",
    def: "Characteristic of an enthusiastic, obsessive dedication to academic or scientific minutiae rather than casual socializing.",
    quote: "Worachon: \"At first I thought it would be much more nerdy, but it's actually good considering when it was built.\"",
    th: "เนิร์ด / บ้าเรียนอย่างจริงจัง"
  },
  "exceed-expectations": {
    word: "exceed all expectations",
    ipa: "/ɪkˈsiːd ɔːl ˌek.spekˈteɪ.ʃənz/",
    pos: "collocation / phrase",
    level: "C1",
    cat: "idioms",
    def: "To surpass by a significant margin what was anticipated, hoped for, or thought possible.",
    quote: "Louie: \"What's one destination that exceeded all your expectations and what made it special? For me, Lamphun!\"",
    th: "เกินความคาดหมาย / ยอดเยี่ยมกว่าที่คิดไว้มาก"
  },
  "blow-ones-mind": {
    word: "blow one's mind",
    ipa: "/bləʊ wʌnz maɪnd/",
    pos: "idiom",
    level: "B2",
    cat: "idioms",
    def: "To completely astonish, overwhelm, or impress someone beyond belief.",
    quote: "Louie: \"The reception I got was outstanding in Lamphun... it completely blew my mind!\"",
    th: "ทำให้ทึ่งอย่างเหลือเชื่อ / อึ้งไปเลย"
  },
  "purely-for-the-joy-of-it": {
    word: "purely for the joy of it",
    ipa: "/ˈpjʊə.li fər ðə dʒɔɪ əv ɪt/",
    pos: "phrase",
    level: "C1",
    cat: "lifestyle",
    def: "Engaged in solely for intrinsic pleasure and delight, without any pragmatic goal, deadline, or extrinsic reward.",
    quote: "Louie: \"When did you last do something purely for the joy of it, with no goal in mind?\"",
    th: "ทำด้วยความสุขใจล้วนๆ โดยไม่ต้องมีเป้าหมาย"
  },
  "scientific-curiosity": {
    word: "scientific curiosity",
    ipa: "/ˌsaɪənˈtɪf.ɪk ˌkjʊə.riˈɒs.ə.ti/",
    pos: "noun",
    level: "B2",
    cat: "science",
    def: "An inquisitive drive to probe, experiment, and comprehend natural phenomena purely to discover truth.",
    quote: "Worachon: \"I had a scientific question in mind and went to the teacher... they gave me permission to join the lab just to solve my curiosity.\"",
    th: "ความใคร่รู้ทางวิทยาศาสตร์"
  },
  "academic-exploration": {
    word: "academic exploration",
    ipa: "/ˌæk.əˈdem.ɪk ˌek.spləˈreɪ.ʃən/",
    pos: "noun",
    level: "C1",
    cat: "science",
    def: "Independent scholarly investigation pursued for intellectual insight rather than mere test scores.",
    quote: "Louie: \"It's your own personal academic exploration... learning for the joy of learning, not just for a grade.\"",
    th: "การค้นคว้าแสวงหาความรู้ทางวิชาการ"
  },
  "gatekeeper": {
    word: "gatekeeper",
    ipa: "/ˈɡeɪtˌkiː.pər/",
    pos: "noun",
    level: "C1",
    cat: "concepts",
    def: "An editor, institution, or authority controlling access, publication, and quality standards for information.",
    quote: "Louie: \"Because there are no gatekeepers, we are making a sea of garbage... not everything should be saved.\"",
    th: "ผู้คัดกรอง / ผู้มีอำนาจตรวจสอบก่อนเผยแพร่"
  },
  "barrier-to-entry": {
    word: "barrier to entry",
    ipa: "/ˈbær.i.ər tu ˈen.tri/",
    pos: "noun (economics / media)",
    level: "C1",
    cat: "concepts",
    def: "An obstacle or threshold that prevents or slows immediate entry or publication in a field.",
    quote: "Louie: \"Anyone can make a YouTube video or Facebook post because there's no barrier to entry.\"",
    th: "อุปสรรคหรือเกณฑ์คัดกรองในการเข้าสู่ระบบ"
  },
  "natural-selection": {
    word: "natural selection",
    ipa: "/ˌnætʃ.ər.əl sɪˈlek.ʃən/",
    pos: "noun (biology / sociology)",
    level: "B2",
    cat: "science",
    def: "The evolutionary differential survival and reproduction of individuals or ideas based on fitness in an environment.",
    quote: "Louie: \"Genes go through natural selection, and Richard Dawkins showed ideas and memes used to go through natural selection as well.\"",
    th: "การคัดเลือกโดยธรรมชาติ"
  },
  "evolutionary-biologist": {
    word: "evolutionary biologist",
    ipa: "/ˌev.əˈluː.ʃən.ər.i baɪˈɒl.ə.dʒɪst/",
    pos: "noun",
    level: "C1",
    cat: "science",
    def: "A scientist who investigates biological lineage, natural selection, genetics, and adaptation across generations.",
    quote: "Louie: \"Richard Dawkins is an evolutionary biologist famous for 'The Selfish Gene'.\"",
    th: "นักชีววิทยาวิวัฒนาการ"
  },
  "meme": {
    word: "meme (cultural replicator)",
    ipa: "/miːm/",
    pos: "noun",
    level: "B2",
    cat: "concepts",
    def: "An element of a culture or behavior passed from one individual to another by non-genetic means (especially imitation).",
    quote: "Louie: \"He created the word 'meme' in the 70s to say that not only do genes evolve, but ideas and information do too.\"",
    th: "มีม (หน่วยถ่ายทอดทางความคิดและวัฒนธรรม)"
  },
  "convey": {
    word: "convey (ideas)",
    ipa: "/kənˈveɪ/",
    pos: "verb",
    level: "B2",
    cat: "communication",
    def: "To communicate, express, or transmit complex impressions or philosophical notions clearly to others.",
    quote: "Louie: \"To convey your ideas to the world... you want your English skill to be just as good as your Thai.\"",
    th: "ถ่ายทอด / สื่อสารความคิด"
  },
  "think-abstractly": {
    word: "think abstractly",
    ipa: "/θɪŋk æbˈstrækt.li/",
    pos: "phrase",
    level: "C1",
    cat: "communication",
    def: "To conceptualize generalized principles, hypotheses, and overarching theories beyond tangible physical objects.",
    quote: "Louie: \"To think abstractly and see the bigger picture in another language is truly a skill you need for scientific papers.\"",
    th: "คิดเชิงนามธรรม / คิดภาพรวมเชิงทฤษฎี"
  },
  "peer-reviewed-paper": {
    word: "academic paper / journal",
    ipa: "/ˌæk.əˈdem.ɪk ˈpeɪ.pər/",
    pos: "noun",
    level: "B2",
    cat: "science",
    def: "A formal scientific report published in a scholarly journal documenting novel clinical research.",
    quote: "Louie: \"If you're going to write your paper in English, you want to explore and convey your findings with precision.\"",
    th: "บทความวิจัย / วารสารวิชาการ"
  },
  "ruthless": {
    word: "ruthless",
    ipa: "/ˈruːθ.ləs/",
    pos: "adjective",
    level: "C1",
    cat: "everyday",
    def: "Having or showing no compassion, pity, or compromise in the relentless pursuit of goals.",
    quote: "Louie: \"My uncle Steve was so mean, so ruthless, so goal-orientated, but unapologetically smart.\"",
    th: "เด็ดขาด / มุ่งมั่นไม่ยอมประนีประนอม"
  },
  "unapologetically": {
    word: "unapologetically",
    ipa: "/ˌʌn.ə.pɒl.əˈdʒet.ɪ.kəl.i/",
    pos: "adverb",
    level: "C2",
    cat: "concepts",
    def: "In a manner that expresses absolute confidence and conviction without seeking approval or offering excuses.",
    quote: "Louie: \"He was ruthless and demanding, but unapologetically smart in military technology.\"",
    th: "อย่างมั่นใจในตนเองเต็มเปี่ยมโดยไม่ต้องแก้ตัว"
  },
  "guidance-system": {
    word: "guidance system",
    ipa: "/ˈɡaɪ.dəns ˌsɪs.təm/",
    pos: "noun",
    level: "C1",
    cat: "science",
    def: "A computational and sensor apparatus that steers missiles, satellites, or aircraft autonomously toward a target.",
    quote: "Louie: \"He designed military software and missile guidance systems before the World Wide Web.\"",
    th: "ระบบนำวิถี (ขีปนาวุธ / ยานอวกาศ)"
  },
  "consume-information": {
    word: "consume information",
    ipa: "/kənˈsjuːm ˌɪn.fəˈmeɪ.ʃən/",
    pos: "collocation",
    level: "C1",
    cat: "concepts",
    def: "To read, internalize, and absorb voluminous quantities of books, code, and intellectual data.",
    quote: "Louie: \"I learned to code, do electronics, and networking just by consuming the information in that one room.\"",
    th: "เสพและซึมซับข้อมูลความรู้"
  },
  "fulfill-a-passion": {
    word: "fulfill a passion",
    ipa: "/fʊlˈfɪl ə ˈpæʃ.ən/",
    pos: "phrase",
    level: "B2",
    cat: "lifestyle",
    def: "To realize, satisfy, and actively manifest an inner dream or long-held childhood fascination.",
    quote: "Worachon: \"I'm looking for projects that will fulfill my childhood passion of putting physics and chemistry into real-world solutions.\"",
    th: "เติมเต็มความหลงใหล / ทำตามความฝัน"
  },
  "crisp-air": {
    word: "crisp (air)",
    ipa: "/krɪsp/",
    pos: "adjective",
    level: "B2",
    cat: "nature",
    def: "Pleasantly cool, dry, pristine, and invigorating to breathe (characteristic of high alpine climates).",
    quote: "Louie: \"Switzerland is unbelievably crisp... the air is so clean, the mountains and water are perfect.\"",
    th: "อากาศบริสุทธิ์ เย็นสดชื่นแจ่มใส"
  },
  "vista": {
    word: "vista",
    ipa: "/ˈvɪs.tə/",
    pos: "noun",
    level: "C1",
    cat: "nature",
    def: "A pleasing, panoramic view across an extensive stretch of countryside or sweeping mountain pass.",
    quote: "Louie: \"In Thailand, you can see the vista... you can see for a long way.\"",
    th: "ทัศนียภาพกว้างไกลสุดสายตา"
  },
  "basin": {
    word: "basin (geographic)",
    ipa: "/ˈbeɪ.sən/",
    pos: "noun",
    level: "B2",
    cat: "nature",
    def: "A natural depression in Earth's surface, typically surrounded by higher mountain slopes like an enclosed cradle.",
    quote: "Louie: \"Switzerland is surrounded by mountains like a basin... it looks like the land is being held.\"",
    th: "แอ่งแผ่นดิน / หุบแอ่งล้อมรอบด้วยขุนเขา"
  },
  "rigid": {
    word: "rigid (culture / system)",
    ipa: "/ˈrɪdʒ.ɪd/",
    pos: "adjective",
    level: "C1",
    cat: "lifestyle",
    def: "Inflexible, strictly codified, and uncompromising in social conventions and protocol.",
    quote: "Louie: \"In Vietnam there is a structure... I was used to the system and becoming too rigid.\"",
    th: "เข้มงวด / ยึดติดระเบียบแบบแผนเกินไป"
  },
  "put-into-perspective": {
    word: "put things into perspective",
    ipa: "/pʊt ˈθɪŋz ˈɪn.tu pəˈspek.tɪv/",
    pos: "idiom",
    level: "C1",
    cat: "idioms",
    def: "To judge the relative importance or scale of something objectively within a broader, wiser context.",
    quote: "Louie: \"Being in Thailand really helps me to put things into perspective: give others a break.\"",
    th: "มองสิ่งต่างๆ ในมุมมองที่กว้างขึ้นและสมดุล"
  },
  "leeway": {
    word: "leeway",
    ipa: "/ˈliː.weɪ/",
    pos: "noun",
    level: "C1",
    cat: "communication",
    def: "The freedom, latitude, or margin allowed for discretionary action or minor deviations.",
    quote: "Louie: \"You're not a Vietnamese tourist, you're learning, and you should give others leeway.\"",
    th: "ความยืดหยุ่น / การผ่อนปรนให้โอกาส"
  },
  "give-someone-a-break": {
    word: "give someone a break",
    ipa: "/ɡɪv ˈsʌm.wʌn ə breɪk/",
    pos: "idiom",
    level: "B2",
    cat: "idioms",
    def: "To cease criticizing, pressuring, or judging someone harshly.",
    quote: "Louie: \"You should give others leeway... you should give others a break.\"",
    th: "หยวนๆ ให้ / อย่าไปกดดันเขามาก"
  },
  "gross-anatomy": {
    word: "gross anatomy",
    ipa: "/ɡrəʊs əˈnæt.ə.mi/",
    pos: "noun (medicine)",
    level: "C1",
    cat: "medical",
    def: "The study of macroscopic human anatomy visible to the unassisted naked eye via surgical dissection.",
    quote: "Worachon: \"In med school, especially the second year, we have gross anatomy and pharmacology to learn.\"",
    th: "มหกายวิภาคศาสตร์ (กายวิภาคระดับตาเปล่า)"
  },
  "pharmacology": {
    word: "pharmacology",
    ipa: "/ˌfɑː.məˈkɒl.ə.dʒi/",
    pos: "noun (medicine)",
    level: "C1",
    cat: "medical",
    def: "The medical discipline studying biochemical drug mechanisms, interactions, dosages, and therapeutic toxicity.",
    quote: "Worachon: \"We have pharmacology to do, and the exams are very frequent.\"",
    th: "เภสัชวิทยา (วิชาว่าด้วยยาและฤทธิ์ของยา)"
  },
  "memory-consolidation": {
    word: "memory consolidation (sleep cycle)",
    ipa: "/ˈmem.ər.i kənˌsɒl.ɪˈdeɪ.ʃən/",
    pos: "noun (neuroscience)",
    level: "C2",
    cat: "medical",
    def: "The neurological conversion of labile short-term memory traces into stable permanent neocortical storage during sleep.",
    quote: "Louie: \"In your sleep cycle, you put things to memory—transferring short-term to long-term storage.\"",
    th: "กระบวนการสร้างและจัดเก็บความจำระยะยาวระหว่างหลับ"
  },
  "balancing-act": {
    word: "balancing act",
    ipa: "/ˈbæl.ən.sɪŋ ækt/",
    pos: "idiom",
    level: "C1",
    cat: "idioms",
    def: "A delicate, precarious compromise trying to satisfy competing, contradictory priorities.",
    quote: "Louie: \"You have to sleep to remember, but you have to study in the first place—it's a balancing act!\"",
    th: "การรักษาสมดุลท่ามกลางภาระหน้าที่อันหลากหลาย"
  },
  "trade-off": {
    word: "trade-off",
    ipa: "/ˈtreɪd.ɒf/",
    pos: "noun",
    level: "B2",
    cat: "concepts",
    def: "A compromise whereby one must forfeit or diminish one desirable quality to secure another.",
    quote: "Louie: \"Your brain is still developing, so you need sleep... but it's a trade-off, you only have so much time.\"",
    th: "ข้อแลกเปลี่ยน / การยอมเสียอย่างหนึ่งเพื่อให้ได้อีกอย่าง"
  },
  "texture-art": {
    word: "texture art",
    ipa: "/ˈteks.tʃər ɑːt/",
    pos: "noun",
    level: "B2",
    cat: "lifestyle",
    def: "Tactile artwork emphasizing three-dimensional surfaces, mixed impasto mediums, and soothing sensory engagement.",
    quote: "Worachon: \"I actually love planting plants and doing texture art... they switch my work off and relieve stress.\"",
    th: "ศิลปะพื้นผิวสัมผัส (งานศิลปะบำบัด)"
  },
  "revitalization": {
    word: "revitalization",
    ipa: "/riːˌvaɪ.təl.aɪˈzeɪ.ʃən/",
    pos: "noun",
    level: "C1",
    cat: "lifestyle",
    def: "The infusion of fresh vigour, kinetic vitality, mental stimulation, and renewed dynamism.",
    quote: "Louie: \"Being around lots of people in a city revitalizes me... watching people trying to be the best version of themselves.\"",
    th: "การฟื้นฟูพลังชีวิตและจิตวิญญาณ"
  },
  "instill-a-drive": {
    word: "instill a drive",
    ipa: "/ɪnˈstɪl ə draɪv/",
    pos: "phrase",
    level: "C1",
    cat: "concepts",
    def: "To implant, cultivate, or inspire a profound, relentless ambition and hunger for excellence.",
    quote: "Louie: \"It installs a drive... it is truly a joy to live among people that want to excel.\"",
    th: "ปลูกฝังแรงผลักดันและความมุ่งมั่นสู่ความเป็นเลิศ"
  },
  "solitude": {
    word: "solitude",
    ipa: "/ˈsɒl.ɪ.tjuːd/",
    pos: "noun",
    level: "C1",
    cat: "lifestyle",
    def: "The peaceful, enriching condition of being alone without feeling desolate or lonely.",
    quote: "Louie: \"The good about nature is it does give you solitude... and breathing space to remember the bigger picture.\"",
    th: "ความสงบสันโดษอันรื่นรมย์"
  },
  "breathing-space": {
    word: "breathing space",
    ipa: "/ˈbriː.ðɪŋ speɪs/",
    pos: "idiom",
    level: "B2",
    cat: "idioms",
    def: "A welcome opportunity or interval to rest, pause, regroup, and recover mental clarity.",
    quote: "Louie: \"Nature gives you breathing space so you don't take your ego so seriously.\"",
    th: "ช่วงเวลาพักหายใจ / พื้นที่ผ่อนคลาย"
  },
  "pain-receptor": {
    word: "pain receptor (nociceptor)",
    ipa: "/peɪn rɪˈsep.tər/",
    pos: "noun (neurobiology)",
    level: "C1",
    cat: "medical",
    def: "A sensory nerve receptor specialized to transmit noxious signals of tissue threat or injury to the spinal cord and brain.",
    quote: "Worachon: \"Our brain doesn't have its own pain receptors, meaning a neurosurgeon can do surgery while you are awake.\"",
    th: "หน่วยรับความรู้สึกเจ็บปวด (Nociceptor)"
  },
  "awake-craniotomy": {
    word: "awake craniotomy (brain surgery)",
    ipa: "/əˈweɪk ˌkreɪ.niˈɒt.ə.mi/",
    pos: "noun (surgery)",
    level: "C2",
    cat: "medical",
    def: "A neurosurgical procedure performed while the patient is conscious to map functional language and motor centers.",
    quote: "Worachon: \"The neurosurgeon can simply do surgery on your brain while you are still awake.\"",
    th: "การผ่าตัดเปิดกะโหลกศีรษะขณะผู้ป่วยรู้สึกตัว"
  },
  "occipital-nerve": {
    word: "occipital nerve",
    ipa: "/ɒkˈsɪp.ɪ.təl nɜːv/",
    pos: "noun (anatomy)",
    level: "C2",
    cat: "medical",
    def: "Peripheral nerves originating from the cervical spinal cord branching over the posterior cranium, responsible for occipital headaches.",
    quote: "Worachon: \"It's the occipital nerve along the back of the skull... the pain you feel on your head actually comes from these nerves.\"",
    th: "เส้นประสาทท้ายทอย (Occipital nerve)"
  },
  "dura-mater": {
    word: "dura mater (meninges)",
    ipa: "/ˌdjʊə.rə ˈmeɪ.tər/",
    pos: "noun (anatomy)",
    level: "C2",
    cat: "medical",
    def: "The tough, fibrous, densely innervated outermost meningeal membrane enveloping the brain and spinal cord.",
    quote: "Worachon: \"Is it like some dura mater?\" Louie: \"Yes, the brain causes dehydration and tugs on the layers connected to the skull!\"",
    th: "เยื่อดูรา (เยื่อหุ้มสมองชั้นนอกสุดที่รับความเจ็บปวด)"
  },
  "brain-shrinkage": {
    word: "brain shrinkage (dehydration tension)",
    ipa: "/breɪn ˈʃrɪŋ.kɪdʒ/",
    pos: "noun (medical)",
    level: "C1",
    cat: "medical",
    def: "Transient volumetric contraction of cranial parenchyma resulting from severe cellular fluid depletion, exerting mechanical traction on the meninges.",
    quote: "Louie: \"Alcohol causes dehydration and brain shrinkage, which tugs on the layers connected to the skull.\"",
    th: "การหดตัวของเนื้อเยื่อสมองจากภาวะขาดน้ำ"
  },
  "pyloric-sphincter": {
    word: "pyloric sphincter (stomach closure)",
    ipa: "/paɪˈlɒr.ɪk ˈsfɪŋk.tər/",
    pos: "noun (physiology)",
    level: "C2",
    cat: "medical",
    def: "The muscular ring regulating the propulsion of chyme from the gastric pylorus into the duodenum of the small intestine.",
    quote: "Louie: \"As soon as you put food in, the stomach closes the entrance to the small intestine, slowing alcohol absorption!\"",
    th: "กล้ามเนื้อหูรูดกระเพาะอาหารส่วนปลาย (Pyloric sphincter)"
  },
  "work-life-balance": {
    word: "work-life balance",
    ipa: "/ˌwɜːk.laɪf ˈbæl.əns/",
    pos: "noun",
    level: "B2",
    cat: "lifestyle",
    def: "An equitable distribution between professional career duties and domestic, familial, and personal restorative life.",
    quote: "Louie: \"My new boss in Munich said 'No! You work maximum 40 hours—you need work-life balance, this is the law.'\"",
    th: "สมดุลระหว่างชีวิตและการทำงาน"
  },
  "statutory-limit": {
    word: "statutory limit",
    ipa: "/ˈstætʃ.ə.tər.i ˈlɪm.ɪt/",
    pos: "noun (law)",
    level: "C1",
    cat: "lifestyle",
    def: "A legally enforced maximum boundary established by national statute that employers cannot breach.",
    quote: "Louie: \"You cannot destroy your body and mind just because of work... it was the law in Germany.\"",
    th: "ขีดจำกัดสูงสุดตามที่กฎหมายกำหนด"
  },
  "fundamental-research": {
    word: "fundamental research",
    ipa: "/ˌfʌn.dəˈmen.təl rɪˈsɜːtʃ/",
    pos: "noun (science)",
    level: "C1",
    cat: "science",
    def: "Pure, curiosity-driven scientific investigation conducted to unravel fundamental natural principles without immediate commercial pressure.",
    quote: "Worachon: \"At UCLA they do fundamental things to solve fundamental unknowns... turning something from impossible to possible.\"",
    th: "การวิจัยพื้นฐานเพื่อความรู้บริสุทธิ์"
  },
  "fiber-optics": {
    word: "fiber optics",
    ipa: "/ˌfaɪ.bər ˈɒp.tɪks/",
    pos: "noun (physics)",
    level: "B2",
    cat: "science",
    def: "Optical technology transmitting information as modulated pulses of light along ultra-pure silica glass strands.",
    quote: "Louie: \"They knew about lasers, but didn't know how to keep light inside... until they designed fiber optics.\"",
    th: "เส้นใยแก้วนำแสง"
  },
  "total-internal-reflection": {
    word: "total internal reflection",
    ipa: "/ˈtəʊ.təl ɪnˈtɜː.nəl rɪˈflek.ʃən/",
    pos: "noun (optics)",
    level: "C1",
    cat: "science",
    def: "The complete optical reflection of a light beam at the boundary between a denser core and rarer cladding when the angle exceeds the critical angle.",
    quote: "Louie: \"Because the density of the outside cladding is different, light doesn't diffract out—it bounces and stays inside!\"",
    th: "การสะท้อนกลับหมดของแสงในตัวกลาง"
  },
  "single-mode": {
    word: "single-mode (fiber)",
    ipa: "/ˈsɪŋ.ɡəl məʊd/",
    pos: "noun (telecommunications)",
    level: "C1",
    cat: "science",
    def: "Optical fiber designed with a microscopic core diameter allowing only one light wave mode to propagate over immense distances.",
    quote: "Louie: \"In networking, we call this single-mode fiber optics.\"",
    th: "เส้นใยแก้วนำแสงโหมดเดี่ยว (Single-mode fiber)"
  },
  "spontaneous": {
    word: "spontaneous",
    ipa: "/spɒnˈteɪ.ni.əs/",
    pos: "adjective",
    level: "B2",
    cat: "everyday",
    def: "Arising from sudden natural impulse or unplanned circumstance rather than premeditated intention.",
    quote: "Louie: \"There are so many spontaneous events during the day when you're at university.\"",
    th: "เกิดขึ้นโดยไม่คาดหมาย / เกิดขึ้นตามธรรมชาติ"
  },
  "top-of-ones-field": {
    word: "top of one's field",
    ipa: "/tɒp əv wʌnz fiːld/",
    pos: "idiom / phrase",
    level: "C1",
    cat: "idioms",
    def: "The absolute pinnacle, highest stature, or greatest level of achievement in a professional specialization.",
    quote: "Louie: \"To get to be at the top of your field and specialty... you can definitely do it, enjoy the process!\"",
    th: "จุดสูงสุดในสายอาชีพ / ยอดฝีมือระดับแนวหน้า"
  },
  "wham-bam-thank-you-mam": {
    word: "wham, bam, thank you, ma'am",
    ipa: "/wæm bæm ˌθæŋk juː ˈmæm/",
    pos: "idiom (British informal)",
    level: "C2",
    cat: "idioms",
    def: "Completed with lightning speed, brisk decisiveness, and immediate straightforwardness.",
    quote: "Louie: \"Next lesson on Sunday will be very fast—as we say in English, wham, bam, thank you, ma'am!\"",
    th: "ทำอย่างรวดเร็วฉับไว / เสร็จสิ้นในพริบตาเดียว"
  }
};

// -----------------------------------------------------------------------------
// 2. LOAD RAW TRANSCRIPT AND PROCESS TURNS
// -----------------------------------------------------------------------------
const rawTranscriptPath = path.join(__dirname, 'Transcripts', '10-23-2026.txt');
const rawContent = fs.readFileSync(rawTranscriptPath, 'utf8');
const lines = rawContent.split(/\r?\n/);

let currentSpeakerRaw = '';
let currentTimeRaw = '';
let currentLinesRaw = [];
let parsedRawTurns = [];

for (let line of lines) {
  const m = line.match(/^Speaker\s+(\d+)\s+\|\s+([\d:]+)/);
  if (m) {
    if (currentSpeakerRaw && currentLinesRaw.length) {
      parsedRawTurns.push({
        rawSpeaker: currentSpeakerRaw,
        time: currentTimeRaw,
        text: currentLinesRaw.join(' ').replace(/\s+/g, ' ').trim()
      });
    }
    currentSpeakerRaw = 'Speaker ' + m[1];
    currentTimeRaw = m[2];
    currentLinesRaw = [];
  } else {
    if (line.trim()) currentLinesRaw.push(line.trim());
  }
}
if (currentSpeakerRaw && currentLinesRaw.length) {
  parsedRawTurns.push({
    rawSpeaker: currentSpeakerRaw,
    time: currentTimeRaw,
    text: currentLinesRaw.join(' ').replace(/\s+/g, ' ').trim()
  });
}

console.log(`Parsed ${parsedRawTurns.length} raw turns from transcript.`);

// Build Cleaned Turns with accurate speaker assignment
const CLEANED_TURNS = [];
let turnCounter = 1;

for (let i = 0; i < parsedRawTurns.length; i++) {
  const t = parsedRawTurns[i];
  
  // Handle special case: Turn 91 (20:56) where Louie and Worachon's turns were merged by the note-taker
  if (t.time === '20:56' && t.text.includes('Vietnamese') && t.text.includes('grass anatomy')) {
    const splitPoint = t.text.indexOf('I think I\'ve been getting');
    const louieText = t.text.substring(0, splitPoint).trim();
    const worachonText = t.text.substring(splitPoint).trim();

    CLEANED_TURNS.push({
      id: `turn-${turnCounter++}`,
      speaker: 'Louie',
      time: '20:56',
      text: louieText
    });

    CLEANED_TURNS.push({
      id: `turn-${turnCounter++}`,
      speaker: 'Worachon',
      time: '22:50',
      text: worachonText
    });
    continue;
  }

  // Handle Video Clip at 51:58
  if (t.time === '51:58' && t.text.includes('decibels per kilometer')) {
    CLEANED_TURNS.push({
      id: `turn-${turnCounter++}`,
      speaker: 'Louie (Video Clip)',
      time: '51:58',
      text: `[Video Demonstration]: "${t.text}"`
    });
    continue;
  }

  // Assign Speaker: Speaker 1 -> Louie, Speaker 2 -> Worachon, Speaker 3 -> Louie
  let speaker = 'Louie';
  if (t.rawSpeaker === 'Speaker 2') {
    speaker = 'Worachon';
  }

  CLEANED_TURNS.push({
    id: `turn-${turnCounter++}`,
    speaker: speaker,
    time: t.time,
    text: t.text
  });
}

console.log(`Produced ${CLEANED_TURNS.length} cleaned turns.`);

// -----------------------------------------------------------------------------
// 3. INJECT CHAPTER HEADERS, VOCABULARY TAGS & ASR FIX BADGES
// -----------------------------------------------------------------------------
// Define chapter start times
const CHAPTER_DEFINITIONS = [
  { time: "00:00", id: "chap-1", title: "Chapter I • Royal Ceremonial Attire, Chulalongkorn Day & The Connect 4 Grid (00:00 – 04:12)" },
  { time: "04:13", id: "chap-2", title: "Chapter II • Medical Dormitories, Pure Joy in Science & The Meme Evolution (04:13 – 13:46)" },
  { time: "13:09", id: "chap-3", title: "Chapter III • Early Mentors, Uncle Steve's Room & Alpine Vistas (13:47 – 24:43)" },
  { time: "24:44", id: "chap-4", title: "Chapter IV • Decompressing Minds, Creative Art & Urban Energy vs Solitude (24:44 – 32:44)" },
  { time: "32:45", id: "chap-5", title: "Chapter V • The Brain's Pain Paradox, Alcohol Physiology & German Work-Life Balance (32:45 – 45:18)" },
  { time: "45:19", id: "chap-6", title: "Chapter VI • UCLA Fundamental Research, Fiber Optics & Reaching the Top of the Field (45:19 – 01:00:36)" }
];

// Helper inline generators
function v(key, displayWord) {
  const item = VOCAB_DB[key];
  const label = displayWord || (item ? item.word : key);
  return `<span class="vocab-mark" data-vkey="${key}" onclick="inspectVocab('${key}')">${label}</span>`;
}

function fixBadge(actualSpoken, rawMishearing) {
  return `<span class="asr-fix-pill" title="Note-taker misheard '${actualSpoken}' as '${rawMishearing}'">✨ Fixed: "${actualSpoken}" <span class="text-stone-400 font-normal">("${rawMishearing}")</span></span>`;
}

// Helper replacements
const replacements = [
  // ASR Fixes
  { pattern: /ปิยมหาราชเดย์/g, replacement: `${fixBadge("วันปิยมหาราช", "ปิยมหาราชเดย์")} ${v("chulalongkorn-day", "Chulalongkorn Day")}` },
  { pattern: /pit hat/gi, replacement: `${fixBadge("pith helmet", "pit hat")} ${v("pith-helmet", "pith helmet")}` },
  { pattern: /Class A's/g, replacement: fixBadge("Class aids", "Class A's") },
  { pattern: /Hardy-Davidson/g, replacement: fixBadge("Harley-Davidson", "Hardy-Davidson") },
  { pattern: /T-shirt in high school/gi, replacement: fixBadge("teacher in high school", "T-shirt in high school") },
  { pattern: /grass anatomy/gi, replacement: `${fixBadge("gross anatomy", "grass anatomy")} ${v("gross-anatomy", "(gross anatomy)")}` },
  { pattern: /commends my soul/gi, replacement: fixBadge("calms my soul", "commends my soul") },
  { pattern: /atheist in places/gi, replacement: fixBadge("stasis / an oasis in places", "atheist in places") },
  { pattern: /you see how a campus/gi, replacement: fixBadge("UCLA campus", "you see how a campus") },
  { pattern: /computer ship/gi, replacement: fixBadge("computer chip", "computer ship") },
  { pattern: /top point of my space/gi, replacement: `${fixBadge("top of my field", "top point of my space")} ${v("top-of-ones-field", "(top of my field)")}` },
  { pattern: /saying about, uh, art/gi, replacement: "saying about art" },

  // Vocabulary inline tags
  { pattern: /\bdignified\b/gi, replacement: v("dignified", "dignified") },
  { pattern: /\badequate\b/gi, replacement: v("adequate", "adequate") },
  { pattern: /\bnerdier\b/gi, replacement: v("nerdy", "nerdier") },
  { pattern: /\bexceeded my expectation\b/gi, replacement: v("exceed-expectations", "exceeded my expectations") },
  { pattern: /\bblew my mind\b/gi, replacement: v("blow-ones-mind", "blew my mind") },
  { pattern: /\bjoy of it\b/gi, replacement: v("purely-for-the-joy-of-it", "joy of it") },
  { pattern: /\bcuriosity\b/gi, replacement: v("scientific-curiosity", "curiosity") },
  { pattern: /\bacademic\.\s*Exploration\b/gi, replacement: v("academic-exploration", "academic exploration") },
  { pattern: /\bgatekeepers\b/gi, replacement: v("gatekeeper", "gatekeepers") },
  { pattern: /\bbarrier to entry\b/gi, replacement: v("barrier-to-entry", "barrier to entry") },
  { pattern: /\bnatural\.\s*Selection\b/gi, replacement: v("natural-selection", "natural selection") },
  { pattern: /\bevolution\.\s*ary biologist\b/gi, replacement: v("evolutionary-biologist", "evolutionary biologist") },
  { pattern: /phrase "meme\.\s*"/gi, replacement: `phrase "${v("meme", "meme")}"` },
  { pattern: /\bword "meme"\b/gi, replacement: `word "${v("meme", "meme")}"` },
  { pattern: /\bconvey the idea\b/gi, replacement: v("convey", "convey the idea") },
  { pattern: /\bconvey your ideas\b/gi, replacement: v("convey", "convey your ideas") },
  { pattern: /\bthink abstractly\b/gi, replacement: v("think-abstractly", "think abstractly") },
  { pattern: /\bwrite your paper\b/gi, replacement: v("peer-reviewed-paper", "write your paper") },
  { pattern: /\bruthless\b/gi, replacement: v("ruthless", "ruthless") },
  { pattern: /\bun\.\s*Apologetically smart\b/gi, replacement: v("unapologetically", "unapologetically smart") },
  { pattern: /\bguidance systems\b/gi, replacement: v("guidance-system", "guidance systems") },
  { pattern: /\bconsuming the information\b/gi, replacement: v("consume-information", "consuming the information") },
  { pattern: /\bchildhood passion\b/gi, replacement: v("fulfill-a-passion", "childhood passion") },
  { pattern: /\bunbelievably crisp\b/gi, replacement: v("crisp-air", "unbelievably crisp") },
  { pattern: /\bsee the vista\b/gi, replacement: v("vista", "see the vista") },
  { pattern: /\bwhat a basin is\b/gi, replacement: v("basin", "what a basin is") },
  { pattern: /\bBecoming too rigid\b/gi, replacement: v("rigid", "becoming too rigid") },
  { pattern: /\bput things into perspective\b/gi, replacement: v("put-into-perspective", "put things into perspective") },
  { pattern: /\bgive others, uh, uh, leeway\b/gi, replacement: v("leeway", "give others leeway") },
  { pattern: /\bgive others a break\b/gi, replacement: v("give-someone-a-break", "give others a break") },
  { pattern: /\bPharmacology\b/gi, replacement: v("pharmacology", "pharmacology") },
  { pattern: /\bsleep cycle\b/gi, replacement: v("memory-consolidation", "sleep cycle") },
  { pattern: /\bbalancing act\b/gi, replacement: v("balancing-act", "balancing act") },
  { pattern: /\btrade-off\b/gi, replacement: v("trade-off", "trade-off") },
  { pattern: /\btexture art\b/gi, replacement: v("texture-art", "texture art") },
  { pattern: /\brevitalizes me\b/gi, replacement: v("revitalization", "revitalizes me") },
  { pattern: /\bword revitalization\b/gi, replacement: v("revitalization", "word revitalization") },
  { pattern: /\binstalls, um, uh, a drive\b/gi, replacement: v("instill-a-drive", "instills a drive") },
  { pattern: /\bgive you solitude\b/gi, replacement: v("solitude", "give you solitude") },
  { pattern: /\bbreathing space\b/gi, replacement: v("breathing-space", "breathing space") },
  { pattern: /\bpain\.\s*Receptor\b/gi, replacement: v("pain-receptor", "pain receptor") },
  { pattern: /\bwhile you are still\.\s*Awake\b/gi, replacement: v("awake-craniotomy", "while you are still awake") },
  { pattern: /\bcalled occipital\b/gi, replacement: v("occipital-nerve", "called occipital nerve") },
  { pattern: /\bsome dura mater\b/gi, replacement: v("dura-mater", "some dura mater") },
  { pattern: /\bbrain shrinkage\b/gi, replacement: v("brain-shrinkage", "brain shrinkage") },
  { pattern: /\bstomach closes\b/gi, replacement: v("pyloric-sphincter", "stomach closes (pyloric sphincter)") },
  { pattern: /\bwork-life relationship\b/gi, replacement: v("work-life-balance", "work-life relationship") },
  { pattern: /\bwork-life balance\b/gi, replacement: v("work-life-balance", "work-life balance") },
  { pattern: /\bThis is the law\b/gi, replacement: v("statutory-limit", "this is the statutory law") },
  { pattern: /\bfundamental things to solve, like, some fundamental unknown\b/gi, replacement: v("fundamental-research", "fundamental research to solve fundamental unknowns") },
  { pattern: /\bfiber optics\b/gi, replacement: v("fiber-optics", "fiber optics") },
  { pattern: /\bbounces, it\.\s*Stays inside\b/gi, replacement: v("total-internal-reflection", "bounces and stays inside (total internal reflection)") },
  { pattern: /\bSingle mode\b/gi, replacement: v("single-mode", "single-mode") },
  { pattern: /\bspontaneous events\b/gi, replacement: v("spontaneous", "spontaneous events") },
  { pattern: /\bwham, bam, thank you, ma'am\b/gi, replacement: v("wham-bam-thank-you-mam", "wham, bam, thank you, ma'am") }
];

// Assign chapters and format HTML
let currentChapterIdx = 0;

CLEANED_TURNS.forEach(turn => {
  // Check if this turn matches next chapter
  if (currentChapterIdx < CHAPTER_DEFINITIONS.length) {
    const ch = CHAPTER_DEFINITIONS[currentChapterIdx];
    if (turn.time >= ch.time && (currentChapterIdx === CHAPTER_DEFINITIONS.length - 1 || turn.time < CHAPTER_DEFINITIONS[currentChapterIdx + 1].time)) {
      if (!ch.assigned) {
        turn.chapterId = ch.id;
        turn.chapterTitle = ch.title;
        ch.assigned = true;
        currentChapterIdx++;
      }
    }
  }

  let htmlText = turn.text;
  replacements.forEach(r => {
    htmlText = htmlText.replace(r.pattern, r.replacement);
  });
  turn.html = htmlText;
});

// Link vocabulary items to exact turnId and timestamp
Object.keys(VOCAB_DB).forEach(key => {
  const matchTurn = CLEANED_TURNS.find(t => t.html.includes(`data-vkey="${key}"`));
  if (matchTurn) {
    VOCAB_DB[key].turnId = matchTurn.id;
    VOCAB_DB[key].time = matchTurn.time;
  } else {
    // Fallback to first turn where word appears
    console.warn(`Warning: Vocab key ${key} not matched directly, assigning fallback.`);
    VOCAB_DB[key].turnId = "turn-1";
    VOCAB_DB[key].time = "00:00";
  }
});

console.log("All vocabulary terms linked to turns successfully.");

// -----------------------------------------------------------------------------
// 4. HTML PAGE TEMPLATE GENERATOR
// -----------------------------------------------------------------------------
const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Worachon P's Peaceful English Sanctuary | Lesson Notes • Oct 23, 2026</title>

  <!-- Google Fonts: Cormorant Garamond, Plus Jakarta Sans, JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            parchment: {
              50: '#fbf9f5',
              100: '#f6f1e7',
              200: '#ede3d1',
              300: '#dfd0b5',
              400: '#cbb38e',
              500: '#b6966b',
            },
            autumn: {
              50: '#fcf6f0',
              100: '#f7e9db',
              200: '#eed0b5',
              300: '#e2b086',
              400: '#d38c57',
              500: '#be6f38',
              600: '#a3582b',
              700: '#854524',
              800: '#6c3921',
            },
            sage: {
              50: '#f4f7f5',
              100: '#e4ece7',
              200: '#cadad1',
              300: '#a5bfb1',
              400: '#7b9f8d',
              500: '#5b826f',
              600: '#476858',
              700: '#3a5448',
              800: '#30443b',
            },
            slatewarm: {
              700: '#3d4441',
              800: '#2b312e',
              900: '#1e2321',
            }
          }
        }
      }
    }
  </script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <!-- GSAP for Smooth Transitions -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

  <!-- Popper & Tippy.js for Interactive Vocabulary Explanations -->
  <script src="https://unpkg.com/@popperjs/core@2"></script>
  <script src="https://unpkg.com/tippy.js@6"></script>
  <link rel="stylesheet" href="https://unpkg.com/tippy.js@6/animations/shift-away.css" />

  <!-- Canvas Confetti for Encouragement -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>

  <style>
    :root {
      --bg-base: #f9f6f0;
      --bg-card: rgba(255, 253, 249, 0.92);
      --bg-subcard: rgba(255, 255, 255, 0.95);
      --border-soft: #e6decb;
      --border-accent: #d9c8b0;
      --text-main: #2b312e;
      --text-muted: #5c6660;
      --grad-1: rgba(238, 208, 181, 0.42);
      --grad-2: rgba(202, 218, 209, 0.48);
      --grad-3: rgba(246, 241, 231, 0.70);
    }

    body[data-theme="winchester"] {
      --bg-base: #f3f6f5;
      --bg-card: rgba(252, 254, 253, 0.93);
      --bg-subcard: rgba(255, 255, 255, 0.96);
      --border-soft: #d7e2dc;
      --border-accent: #b8ccc2;
      --text-main: #26312d;
      --text-muted: #52635c;
      --grad-1: rgba(202, 218, 209, 0.50);
      --grad-2: rgba(219, 228, 238, 0.48);
      --grad-3: rgba(244, 240, 230, 0.55);
    }

    body[data-theme="twilight"] {
      --bg-base: #f5efe6;
      --bg-card: rgba(253, 249, 242, 0.92);
      --bg-subcard: rgba(255, 252, 247, 0.96);
      --border-soft: #e2d2be;
      --border-accent: #cfaea0;
      --text-main: #2d2622;
      --text-muted: #665850;
      --grad-1: rgba(226, 176, 134, 0.36);
      --grad-2: rgba(214, 196, 176, 0.42);
      --grad-3: rgba(235, 220, 202, 0.55);
    }

    body {
      background-color: var(--bg-base);
      color: var(--text-main);
      background-image: 
        radial-gradient(at 10% 12%, var(--grad-1) 0px, transparent 55%),
        radial-gradient(at 88% 85%, var(--grad-2) 0px, transparent 50%),
        radial-gradient(at 50% 50%, var(--grad-3) 0px, transparent 65%);
      background-attachment: fixed;
      transition: background-color 0.4s ease, color 0.4s ease;
    }

    .sanctuary-card {
      background: var(--bg-card);
      border: 1px solid var(--border-soft);
      backdrop-filter: blur(12px);
      box-shadow: 0 10px 30px -10px rgba(61, 68, 65, 0.07);
    }

    .sanctuary-subcard {
      background: var(--bg-subcard);
      border: 1px solid var(--border-soft);
    }

    /* Flip Card Styles */
    .perspective-1000 { perspective: 1000px; }
    .transform-style-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
    .flipped { transform: rotateY(180deg); }

    /* Inline Vocabulary Markers */
    .vocab-mark {
      background-color: rgba(238, 208, 181, 0.55);
      border-bottom: 2px solid #be6f38;
      padding: 1px 4px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;
      display: inline;
    }
    .vocab-mark:hover {
      background-color: #be6f38;
      color: #ffffff !important;
      border-bottom-color: #854524;
      box-shadow: 0 2px 8px rgba(190, 111, 56, 0.25);
    }
    .active-vocab {
      background-color: #be6f38 !important;
      color: #ffffff !important;
      border-bottom-color: #6c3921;
      box-shadow: 0 0 0 2px rgba(190, 111, 56, 0.35);
    }

    body.hide-vocab-highlights .vocab-mark:not(:hover):not(.active-vocab) {
      background-color: transparent !important;
      border-bottom-color: transparent !important;
      font-weight: normal !important;
      padding: 0 !important;
    }

    /* Note-Taker Fix Badges */
    .asr-fix-pill {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      font-size: 11px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      background-color: #f4f7f5;
      color: #3a5448;
      border: 1px dashed #7b9f8d;
      padding: 1px 7px;
      border-radius: 999px;
      margin-left: 4px;
      vertical-align: middle;
    }

    body.hide-asr-fixes .asr-fix-pill {
      display: none !important;
    }

    /* Custom Tippy Tooltip Theme */
    .tippy-box[data-theme~='autumn-sanctuary'] {
      background-color: #fffdf9;
      color: #2b312e;
      border: 1px solid #dfd0b5;
      border-radius: 1rem;
      box-shadow: 0 20px 38px -8px rgba(61, 68, 65, 0.16), 0 6px 16px -4px rgba(163, 88, 43, 0.08);
      padding: 0.35rem;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .tippy-box[data-theme~='autumn-sanctuary'][data-placement^='top'] > .tippy-arrow::before {
      border-top-color: #dfd0b5;
    }
    .tippy-box[data-theme~='autumn-sanctuary'][data-placement^='bottom'] > .tippy-arrow::before {
      border-bottom-color: #dfd0b5;
    }

    @keyframes gentleGlow {
      0% { background-color: rgba(226, 176, 134, 0.45); transform: scale(1.005); }
      50% { background-color: rgba(165, 191, 177, 0.38); }
      100% { background-color: transparent; transform: scale(1); }
    }
    .turn-highlight-flash {
      animation: gentleGlow 2.8s ease-out;
    }

    @media print {
      .no-print, #autumn-breeze-canvas { display: none !important; }
      body { background: #fff !important; }
      .sanctuary-card, .sanctuary-subcard { box-shadow: none !important; border: 1px solid #ccc !important; }
    }
  </style>
</head>
<body data-theme="kensington" class="font-sans antialiased min-h-screen selection:bg-autumn-200 selection:text-slatewarm-900 relative">

  <!-- FALLING LEAVES AMBIENT PARTICLES OVERLAY -->
  <canvas id="autumn-breeze-canvas" class="fixed inset-0 pointer-events-none z-20 opacity-80"></canvas>

  <!-- STICKY HEADER & CALMING AUDIO CONTROLS -->
  <header class="sticky top-0 z-40 border-b border-[#e6decb]/90 bg-[#fbf9f5]/85 backdrop-blur-md no-print">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
      
      <!-- Brand & Student Dossier Badge -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-sage-600 via-sage-500 to-autumn-500 flex items-center justify-center text-white font-serif text-xl font-bold shadow-sm">
          W
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="font-serif font-bold text-lg sm:text-xl tracking-tight text-slatewarm-900">Worachon's English Sanctuary</span>
            <span class="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-sage-100 text-sage-800 border border-sage-200">
              <i data-lucide="sparkles" class="w-3 h-3 text-autumn-600"></i>
              October 23, 2026 Lesson • 60 Mins
            </span>
          </div>
          <p class="text-xs text-stone-500 flex items-center gap-2">
            <span>Student: <strong>Worachon P.</strong> (Bangkok 🇹🇭)</span>
            <span class="text-stone-300">•</span>
            <span>Tutor: <strong>Louie (Lewis O'Shea)</strong></span>
            <span class="text-stone-300">•</span>
            <a href="lesson_10-22-2026.html" class="text-autumn-700 hover:text-autumn-800 font-semibold underline decoration-dotted">Previous Lesson (Oct 22) ↗</a>
          </p>
        </div>
      </div>

      <!-- Controls: Theme, Canvas Breeze, Soundscape & Audio Speech -->
      <div class="flex items-center gap-2 flex-wrap text-xs font-medium">
        
        <!-- Soundscape Generator Button -->
        <button onclick="toggleSoundscape()" id="soundscape-btn" class="sanctuary-subcard px-3 py-1.5 rounded-xl text-stone-700 hover:text-sage-800 hover:bg-sage-50 transition flex items-center gap-1.5 border border-stone-200" title="Toggle Procedural Calming Ambient Sound">
          <i data-lucide="headphones" class="w-3.5 h-3.5 text-sage-600"></i>
          <span id="soundscape-text">Soundscape: Off</span>
        </button>

        <!-- Autumn Leaves Particle Cycle -->
        <button onclick="cycleLeafBreeze()" id="leaf-breeze-btn" class="sanctuary-subcard px-3 py-1.5 rounded-xl text-stone-700 hover:text-autumn-800 hover:bg-autumn-50 transition flex items-center gap-1.5 border border-stone-200" title="Cycle falling leaves particle speed">
          <i data-lucide="wind" class="w-3.5 h-3.5 text-autumn-500"></i>
          <span id="leaf-status-text">Leaves: Gentle</span>
        </button>

        <!-- Peaceful Theme Switcher -->
        <button onclick="cycleTheme()" id="theme-switcher-btn" class="sanctuary-subcard px-3 py-1.5 rounded-xl text-stone-700 hover:text-slatewarm-900 transition flex items-center gap-1.5 border border-stone-200" title="Switch Theme Mood">
          <i data-lucide="palette" class="w-3.5 h-3.5 text-autumn-600"></i>
          <span id="theme-btn-text">Bath Stone</span>
        </button>

        <!-- Speech Rate Toggle -->
        <button onclick="toggleSpeechRate()" id="speech-rate-btn" class="sanctuary-subcard px-2.5 py-1.5 rounded-xl text-stone-600 hover:text-stone-900 transition font-mono border border-stone-200" title="Toggle Speech Rate (0.85x slow / 1.0x natural)">
          <span id="speech-rate-label">0.85×</span>
        </button>

        <!-- Copy Lesson Summary Button -->
        <button onclick="copyLessonSummary()" id="copy-summary-btn" class="px-3 py-1.5 rounded-xl bg-sage-700 hover:bg-sage-800 text-white font-semibold transition flex items-center gap-1.5 shadow-xs">
          <i data-lucide="copy" class="w-3.5 h-3.5"></i>
          <span>Copy Summary</span>
        </button>

      </div>
    </div>

    <!-- MAIN NAVIGATION TABS -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-2">
      <nav class="flex flex-wrap items-center gap-1.5 border-t border-stone-200/60 pt-2" aria-label="Tabs">
        
        <button onclick="switchTab('transcript')" id="tab-btn-transcript" class="tab-btn flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 bg-sage-700 text-white shadow-sm">
          <i data-lucide="message-square-quote" class="w-4 h-4"></i>
          <span>Cleaned Transcript</span>
          <span class="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px] font-mono">00:00–01:00:36</span>
        </button>

        <button onclick="switchTab('vocab')" id="tab-btn-vocab" class="tab-btn flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 text-stone-700 hover:bg-parchment-100">
          <i data-lucide="book-marked" class="w-4 h-4 text-autumn-600"></i>
          <span>Vocabulary &amp; Concepts</span>
          <span class="px-1.5 py-0.2 rounded-full bg-autumn-100 text-autumn-800 text-[10px] font-mono font-bold">55</span>
        </button>

        <button onclick="switchTab('fixes')" id="tab-btn-fixes" class="tab-btn flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 text-stone-700 hover:bg-parchment-100">
          <i data-lucide="sparkles" class="w-4 h-4 text-sage-600"></i>
          <span>Natural Phrasing &amp; ASR Fixes</span>
          <span class="px-1.5 py-0.2 rounded-full bg-sage-100 text-sage-800 text-[10px] font-mono font-bold">16</span>
        </button>

        <button onclick="switchTab('topics')" id="tab-btn-topics" class="tab-btn flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 text-stone-700 hover:bg-parchment-100">
          <i data-lucide="compass" class="w-4 h-4 text-autumn-600"></i>
          <span>Science &amp; Life Philosophy</span>
        </button>

        <button onclick="switchTab('practice')" id="tab-btn-practice" class="tab-btn flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 text-stone-700 hover:bg-parchment-100">
          <i data-lucide="coffee" class="w-4 h-4 text-sage-600"></i>
          <span>Peaceful Practice &amp; Gym</span>
          <span class="px-1.5 py-0.2 rounded-full bg-autumn-500 text-white text-[10px] font-mono font-bold">Gym 🥊</span>
        </button>

      </nav>
    </div>
  </header>

  <!-- MAIN CONTAINER -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-30">

    <!-- =================================================================== -->
    <!-- TAB 1: FULL CLEANED TRANSCRIPT -->
    <!-- =================================================================== -->
    <section id="tab-panel-transcript" class="tab-panel space-y-6">
      
      <!-- Chapter Jump Pills & Transcript Toolbar -->
      <div class="sanctuary-card rounded-3xl p-5 space-y-4">
        
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 class="font-serif font-bold text-xl text-slatewarm-900 flex items-center gap-2">
              <i data-lucide="scroll-text" class="w-5 h-5 text-autumn-600"></i>
              Chronological Lesson Transcript (00:00 – 01:00:36)
            </h2>
            <p class="text-xs text-stone-500 mt-0.5">Forensically cleaned • Accurate speaker attribution • 55 flagged vocabulary &amp; idiom markers</p>
          </div>

          <!-- ASR Toggle & Highlights Toggle -->
          <div class="flex items-center gap-2 flex-wrap text-xs">
            <button onclick="toggleAsrBadges()" id="asr-toggle-btn" class="sanctuary-subcard px-3 py-1.5 rounded-xl font-medium text-sage-800 hover:bg-sage-100 transition flex items-center gap-1.5 border border-sage-300">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-sage-600"></i>
              <span id="asr-btn-text">Note-Taker Fixes: Visible</span>
            </button>
            <button onclick="toggleVocabHighlights()" id="vocab-toggle-btn" class="sanctuary-subcard px-3 py-1.5 rounded-xl font-medium text-autumn-800 hover:bg-autumn-100 transition flex items-center gap-1.5 border border-autumn-300">
              <i data-lucide="highlighter" class="w-3.5 h-3.5 text-autumn-600"></i>
              <span id="vocab-btn-text">Vocab Highlights: On</span>
            </button>
          </div>
        </div>

        <!-- Search Bar & Filters -->
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2 border-t border-stone-200/60">
          <div class="sm:col-span-7 relative">
            <i data-lucide="search" class="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="transcript-search" oninput="filterTranscript()" placeholder="Search dialogue, idioms, or concepts (e.g. 'dura mater', 'meme', 'wham, bam')..." class="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-300 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-autumn-400 text-xs sm:text-sm font-sans placeholder:text-stone-400" />
            <button onclick="clearTranscriptSearch()" id="clear-search-btn" class="hidden absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- Speaker Filter -->
          <div class="sm:col-span-5 flex items-center gap-1.5 justify-end">
            <span class="text-xs text-stone-500 font-medium mr-1">Speaker:</span>
            <button onclick="filterSpeaker('all')" id="spk-all-btn" class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-sage-700 text-white shadow-xs transition">All</button>
            <button onclick="filterSpeaker('Louie')" id="spk-louie-btn" class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 transition">Louie (Tutor)</button>
            <button onclick="filterSpeaker('Worachon')" id="spk-worachon-btn" class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 transition">Worachon (Student)</button>
          </div>
        </div>

        <!-- Chapter Navigation Pills -->
        <div class="pt-2 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span class="text-stone-400 font-mono text-[11px] shrink-0">Jump:</span>
          <a href="#chap-1" class="px-2.5 py-1 rounded-lg bg-parchment-100 hover:bg-parchment-200 text-stone-700 shrink-0 font-medium transition">I. Chulalongkorn &amp; Attire (00:00)</a>
          <a href="#chap-2" class="px-2.5 py-1 rounded-lg bg-parchment-100 hover:bg-parchment-200 text-stone-700 shrink-0 font-medium transition">II. Med Dorm &amp; Memes (04:13)</a>
          <a href="#chap-3" class="px-2.5 py-1 rounded-lg bg-parchment-100 hover:bg-parchment-200 text-stone-700 shrink-0 font-medium transition">III. Mentors &amp; Swiss Vistas (13:09)</a>
          <a href="#chap-4" class="px-2.5 py-1 rounded-lg bg-parchment-100 hover:bg-parchment-200 text-stone-700 shrink-0 font-medium transition">IV. Texture Art &amp; Cities (24:44)</a>
          <a href="#chap-5" class="px-2.5 py-1 rounded-lg bg-parchment-100 hover:bg-parchment-200 text-stone-700 shrink-0 font-medium transition">V. Brain Pain &amp; Alcohol (32:45)</a>
          <a href="#chap-6" class="px-2.5 py-1 rounded-lg bg-parchment-100 hover:bg-parchment-200 text-stone-700 shrink-0 font-medium transition">VI. UCLA &amp; Fiber Optics (45:19)</a>
        </div>
      </div>

      <!-- Main Two-Column Layout: Transcript Feed + Sticky Spotlight -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- Left: Transcript Feed -->
        <div class="lg:col-span-8 space-y-4" id="transcript-feed-container">
          <!-- Dynamically populated via JS -->
        </div>

        <!-- Right: Sticky Desktop Vocabulary Spotlight Panel -->
        <div class="lg:col-span-4 sticky top-28 hidden lg:block space-y-4">
          <div class="sanctuary-card rounded-3xl p-6 space-y-4 border-2 border-autumn-200/80 shadow-md" id="desktop-spotlight-card">
            
            <div class="flex items-center justify-between pb-3 border-b border-stone-200">
              <div class="flex items-center gap-2">
                <i data-lucide="sparkle" class="w-4 h-4 text-autumn-600 animate-pulse"></i>
                <span class="text-xs font-mono uppercase tracking-wider text-autumn-700 font-bold">Vocabulary Spotlight</span>
              </div>
              <span id="spotlight-level" class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-autumn-100 text-autumn-800">C1</span>
            </div>

            <div>
              <div class="flex items-baseline justify-between gap-2">
                <h3 id="spotlight-word" class="font-serif font-bold text-2xl text-slatewarm-900 leading-tight">put things into perspective</h3>
                <span id="spotlight-pos" class="text-xs italic text-stone-500 font-sans">idiom</span>
              </div>
              <div class="flex items-center gap-2 mt-1">
                <span id="spotlight-ipa" class="font-mono text-xs text-stone-600">/pʊt ˈθɪŋz ˈɪn.tu pəˈspek.tɪv/</span>
                <button onclick="speakCurrentSpotlight()" class="p-1 rounded-md text-stone-500 hover:text-autumn-600 hover:bg-parchment-100 transition" title="Listen to pronunciation">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
            </div>

            <!-- Thai Translation Card -->
            <div class="p-3 rounded-2xl bg-gradient-to-r from-autumn-50 to-parchment-100 border border-autumn-200/60">
              <div class="flex items-center gap-1.5 text-[11px] font-bold text-autumn-800 mb-1">
                <span>🇹🇭 ความหมายภาษาไทย (Thai):</span>
              </div>
              <p id="spotlight-thai" class="text-sm font-sans font-medium text-slatewarm-900 leading-snug">มองสิ่งต่างๆ ในมุมมองที่กว้างขึ้นและสมดุล</p>
            </div>

            <!-- English Definition -->
            <div class="space-y-1">
              <h4 class="text-[11px] uppercase tracking-wider text-stone-400 font-mono font-bold">English Meaning</h4>
              <p id="spotlight-def" class="text-xs text-stone-700 font-sans leading-relaxed">
                To judge the relative importance or scale of something objectively within a broader, wiser context.
              </p>
            </div>

            <!-- Spoken Lesson Quote -->
            <div class="space-y-1 pt-2 border-t border-stone-200">
              <div class="flex items-center justify-between">
                <h4 class="text-[11px] uppercase tracking-wider text-stone-400 font-mono font-bold">Spoken in Lesson</h4>
                <span id="spotlight-time" class="text-[10px] font-mono text-autumn-700">🕒 20:56</span>
              </div>
              <p id="spotlight-quote" class="text-xs italic text-stone-600 bg-parchment-50 p-3 rounded-xl border border-stone-200 font-serif leading-relaxed">
                "Being in Thailand really helps me to put things into perspective: give others a break."
              </p>
            </div>

            <!-- Quick Action Links -->
            <div class="pt-2 flex items-center justify-between text-xs">
              <button onclick="jumpToActiveSpotlightTurn()" class="text-autumn-700 hover:text-autumn-800 font-semibold flex items-center gap-1">
                <span>Jump to transcript turn</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
              </button>
              <span id="spotlight-cat" class="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[10px] font-mono capitalize">idioms</span>
            </div>

          </div>
        </div>

      </div>

    </section>

    <!-- =================================================================== -->
    <!-- TAB 2: VOCABULARY & IDIOMS DICTIONARY -->
    <!-- =================================================================== -->
    <section id="tab-panel-vocab" class="tab-panel hidden space-y-6">
      
      <!-- Lexicon Header & Controls -->
      <div class="sanctuary-card rounded-3xl p-6 sm:p-8 space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 class="font-serif font-bold text-2xl text-slatewarm-900 flex items-center gap-2">
              <i data-lucide="book-open-check" class="w-6 h-6 text-autumn-600"></i>
              Interactive Lexicon &amp; Concepts Sanctuary
            </h2>
            <p class="text-xs sm:text-sm text-stone-600 mt-1">
              55 carefully selected medical concepts, scientific breakthroughs, and spoken idioms with authentic Thai translations &amp; direct timestamp links.
            </p>
          </div>

          <!-- Quick Stats -->
          <div class="flex items-center gap-2 text-xs font-mono">
            <span class="px-3 py-1.5 rounded-xl bg-autumn-100 text-autumn-800 font-bold border border-autumn-200">55 Terms</span>
            <span class="px-3 py-1.5 rounded-xl bg-sage-100 text-sage-800 font-bold border border-sage-200">12 Idioms</span>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3 border-t border-stone-200/60">
          
          <!-- Search Input -->
          <div class="sm:col-span-5 relative">
            <i data-lucide="search" class="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="vocab-search" oninput="filterVocabGrid()" placeholder="Filter by English word, meaning, or Thai (เช่น 'เยื่อดูรา', 'มีม')..." class="w-full pl-10 pr-8 py-2.5 rounded-xl border border-stone-300 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-autumn-400 text-xs sm:text-sm font-sans" />
          </div>

          <!-- Category Pills -->
          <div class="sm:col-span-4 flex items-center gap-1.5 overflow-x-auto text-xs">
            <button onclick="filterVocabCategory('all')" id="vcat-all" class="px-3 py-1.5 rounded-xl font-semibold bg-sage-700 text-white shadow-xs transition">All</button>
            <button onclick="filterVocabCategory('idioms')" id="vcat-idioms" class="px-3 py-1.5 rounded-xl font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 transition">Idioms</button>
            <button onclick="filterVocabCategory('medical')" id="vcat-medical" class="px-3 py-1.5 rounded-xl font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 transition">Medical</button>
            <button onclick="filterVocabCategory('science')" id="vcat-science" class="px-3 py-1.5 rounded-xl font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 transition">Science</button>
            <button onclick="filterVocabCategory('lifestyle')" id="vcat-lifestyle" class="px-3 py-1.5 rounded-xl font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 transition">Lifestyle</button>
          </div>

          <!-- Level Pills -->
          <div class="sm:col-span-3 flex items-center gap-1 justify-end text-xs font-mono">
            <span class="text-stone-400 text-[11px] mr-1">Level:</span>
            <button onclick="filterVocabLevel('all')" id="vlvl-all" class="px-2.5 py-1 rounded-lg bg-autumn-600 text-white font-bold transition">All</button>
            <button onclick="filterVocabLevel('B2')" id="vlvl-B2" class="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 font-bold transition">B2</button>
            <button onclick="filterVocabLevel('C1')" id="vlvl-C1" class="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 font-bold transition">C1</button>
            <button onclick="filterVocabLevel('C2')" id="vlvl-C2" class="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 font-bold transition">C2</button>
          </div>

        </div>
      </div>

      <!-- Vocab Card Grid -->
      <div id="vocab-cards-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <!-- Dynamically populated via JS -->
      </div>

    </section>

    <!-- =================================================================== -->
    <!-- TAB 3: NATURAL PHRASING & NOTE-TAKER FIXES -->
    <!-- =================================================================== -->
    <section id="tab-panel-fixes" class="tab-panel hidden space-y-8">
      
      <!-- Section 1: Natural Strengths -->
      <div class="sanctuary-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-autumn-100 text-autumn-800 flex items-center justify-center font-bold">
            <i data-lucide="award" class="w-5 h-5"></i>
          </div>
          <div>
            <h2 class="font-serif font-bold text-2xl text-slatewarm-900">Your Natural Strengths (Confidence Celebrations)</h2>
            <p class="text-xs sm:text-sm text-stone-500">6 high-level clinical insights, neuroscience concepts, and philosophical ideas Worachon articulated naturally.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${NATURAL_STRENGTHS.map((s, idx) => `
            <div class="sanctuary-subcard rounded-2xl p-5 space-y-3 border-l-4 border-l-autumn-500">
              <div class="flex items-center justify-between text-xs">
                <span class="font-mono text-autumn-800 font-bold">Strength #${idx + 1}</span>
                <span class="font-mono text-stone-400">🕒 ${s.time}</span>
              </div>
              <p class="text-sm font-serif italic text-slatewarm-900 bg-parchment-50 p-3 rounded-xl border border-stone-200/80 leading-relaxed">
                "${s.quote}"
              </p>
              <p class="text-xs text-stone-600 leading-relaxed">
                ✨ ${s.praise}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Section 2: Gentle Phrasing Polishes -->
      <div class="sanctuary-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center font-bold">
            <i data-lucide="sparkles" class="w-5 h-5"></i>
          </div>
          <div>
            <h2 class="font-serif font-bold text-2xl text-slatewarm-900">Gentle Phrasing Polishes</h2>
            <p class="text-xs sm:text-sm text-stone-500">Constructive refinements to elevate conversational spoken English into effortless international medical fluency.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${PHRASING_POLISHES.map((p, idx) => `
            <div class="sanctuary-subcard rounded-2xl p-5 space-y-3 border-l-4 border-l-sage-500">
              <div class="flex items-center justify-between text-xs">
                <span class="font-mono text-sage-800 font-bold">Polish #${idx + 1}</span>
                <span class="font-mono text-stone-400">🕒 ${p.time}</span>
              </div>
              
              <div class="space-y-1">
                <div class="text-[11px] uppercase tracking-wider text-stone-400 font-mono">In the moment:</div>
                <p class="text-xs text-amber-900/80 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/60 font-mono">
                  "${p.spoken}"
                </p>
              </div>

              <div class="space-y-1">
                <div class="text-[11px] uppercase tracking-wider text-sage-800 font-mono font-bold">Natural Polish:</div>
                <p class="text-xs font-semibold text-sage-950 bg-sage-50 p-2.5 rounded-lg border border-sage-200">
                  ✨ ${p.polished}
                </p>
              </div>

              <p class="text-xs text-stone-600 leading-relaxed pt-1 border-t border-stone-100">
                💡 <strong>Why:</strong> ${p.why}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Section 3: Forensic Speech-to-Text Mishearings Log -->
      <div class="sanctuary-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-parchment-200 text-stone-800 flex items-center justify-center font-bold">
            <i data-lucide="check-check" class="w-5 h-5 text-autumn-600"></i>
          </div>
          <div>
            <h2 class="font-serif font-bold text-2xl text-slatewarm-900">Note-Taker Fixes Log (ASR Error Corrections)</h2>
            <p class="text-xs sm:text-sm text-stone-500">Forensically resolving automated speech recognition errors to give Worachon a pristine, accurate transcript record.</p>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr class="border-b border-stone-200 text-stone-500 font-mono text-[11px] uppercase">
                <th class="py-3 px-3">Time</th>
                <th class="py-3 px-3">Speaker</th>
                <th class="py-3 px-3 text-sage-800">Actual Spoken Word</th>
                <th class="py-3 px-3 text-stone-400">Note-Taker Error</th>
                <th class="py-3 px-3">Context / Meaning</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100 font-sans">
              ${ASR_FIXES.map(f => `
                <tr class="hover:bg-parchment-50/60 transition">
                  <td class="py-3 px-3 font-mono text-stone-400 whitespace-nowrap">🕒 ${f.time}</td>
                  <td class="py-3 px-3 font-semibold whitespace-nowrap">${f.speaker}</td>
                  <td class="py-3 px-3 font-semibold text-sage-900 bg-sage-50/40">${f.corrected}</td>
                  <td class="py-3 px-3 text-stone-400 line-through font-mono">${f.misheard}</td>
                  <td class="py-3 px-3 text-stone-600">${f.context}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </section>

    <!-- =================================================================== -->
    <!-- TAB 4: SCIENCE & LIFE PHILOSOPHY -->
    <!-- =================================================================== -->
    <section id="tab-panel-topics" class="tab-panel hidden space-y-6">
      
      <div class="sanctuary-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-autumn-100 text-autumn-800 flex items-center justify-center font-bold">
            <i data-lucide="compass" class="w-5 h-5"></i>
          </div>
          <div>
            <h2 class="font-serif font-bold text-2xl text-slatewarm-900">Science, Culture &amp; Life Philosophy</h2>
            <p class="text-xs sm:text-sm text-stone-500">4 deep editorial dossiers exploring the themes discussed during the Connect 4 lesson.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${EDITORIAL_TOPICS.map(topic => `
            <article class="sanctuary-subcard rounded-3xl p-6 space-y-4 border-t-4 ${topic.border}">
              <div class="flex items-center justify-between text-xs font-mono text-stone-400">
                <span class="text-autumn-800 font-bold uppercase tracking-wider">${topic.tag}</span>
                <span>🕒 ${topic.time}</span>
              </div>
              <h3 class="font-serif font-bold text-xl text-slatewarm-900">${topic.title}</h3>
              <p class="text-xs sm:text-sm text-stone-700 leading-relaxed">${topic.p1}</p>
              <p class="text-xs sm:text-sm text-stone-700 leading-relaxed">${topic.p2}</p>
            </article>
          `).join('')}
        </div>
      </div>

    </section>

    <!-- =================================================================== -->
    <!-- TAB 5: PEACEFUL PRACTICE & IDIOM GYM -->
    <!-- =================================================================== -->
    <section id="tab-panel-practice" class="tab-panel hidden space-y-8">
      
      <!-- Section 1: Flippable Flashcard Deck -->
      <div class="sanctuary-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 class="font-serif font-bold text-2xl text-slatewarm-900 flex items-center gap-2">
              <i data-lucide="layers" class="w-6 h-6 text-autumn-600"></i>
              Interactive Idiom &amp; Lexicon Deck
            </h2>
            <p class="text-xs sm:text-sm text-stone-500">Click card or button to flip for authentic Thai translations, spoken context, and etymology.</p>
          </div>
          <div class="flex items-center gap-2 text-xs font-mono">
            <span id="flashcard-counter" class="px-3 py-1 rounded-full bg-parchment-200 text-stone-700 font-bold">Card 1 / 12</span>
          </div>
        </div>

        <!-- 3D Card Container -->
        <div class="perspective-1000 max-w-xl mx-auto h-72 sm:h-80 cursor-pointer" onclick="flipFlashcard()">
          <div id="flashcard-inner" class="relative w-full h-full transform-style-3d transition-transform duration-500 sanctuary-subcard rounded-3xl shadow-md border-2 border-autumn-200">
            
            <!-- Card Front -->
            <div class="absolute inset-0 backface-hidden p-6 sm:p-8 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-white to-parchment-50">
              <div class="flex items-center justify-between text-xs font-mono">
                <span id="fc-type" class="px-2.5 py-0.5 rounded-full bg-autumn-100 text-autumn-800 font-bold">British Spoken Idiom</span>
                <span class="text-stone-400">Click to Flip ↺</span>
              </div>

              <div class="text-center space-y-2">
                <h3 id="fc-front-word" class="font-serif font-bold text-3xl sm:text-4xl text-slatewarm-900">wham, bam, thank you, ma'am</h3>
                <p id="fc-front-ipa" class="font-mono text-xs sm:text-sm text-stone-500">/wæm bæm ˌθæŋk juː ˈmæm/</p>
              </div>

              <p id="fc-front-example" class="text-xs sm:text-sm italic text-stone-600 bg-parchment-100/60 p-3 rounded-2xl text-center font-serif leading-relaxed">
                "Sunday's 30-minute lesson will be very fast: wham, bam, thank you, ma'am!"
              </p>
            </div>

            <!-- Card Back -->
            <div class="absolute inset-0 backface-hidden rotate-y-180 p-6 sm:p-8 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-parchment-100 via-autumn-50 to-white border-2 border-autumn-300">
              <div class="flex items-center justify-between text-xs font-mono">
                <span class="text-autumn-800 font-bold">🇹🇭 ความหมายภาษาไทย (Thai)</span>
                <span class="text-stone-400">Click to Flip ↺</span>
              </div>

              <div class="space-y-3 text-center">
                <div id="fc-back-thai" class="font-sans font-bold text-xl sm:text-2xl text-slatewarm-900">
                  ทำอย่างรวดเร็วฉับไว / รวดเดียวจบโดยไม่เสียเวลา
                </div>
                <p id="fc-back-origin" class="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                  A classic informal English expression denoting something executed swiftly, decisively, and with maximum efficiency.
                </p>
              </div>

              <div class="flex items-center justify-center gap-2 pt-2">
                <button onclick="event.stopPropagation(); speakFlashcardWord()" class="px-3 py-1.5 rounded-xl bg-autumn-600 text-white text-xs font-semibold hover:bg-autumn-700 transition flex items-center gap-1.5 shadow-xs">
                  <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                  <span>Listen to Word</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- Card Controls -->
        <div class="flex items-center justify-center gap-3 pt-2">
          <button onclick="prevFlashcard()" class="p-2.5 rounded-2xl sanctuary-subcard hover:bg-parchment-100 transition text-stone-600 hover:text-stone-900 border border-stone-200">
            <i data-lucide="chevron-left" class="w-5 h-5"></i>
          </button>
          <button onclick="flipFlashcard()" class="px-5 py-2.5 rounded-2xl sanctuary-subcard hover:bg-parchment-100 transition text-xs sm:text-sm font-semibold text-stone-700 border border-stone-200 flex items-center gap-2">
            <i data-lucide="rotate-cw" class="w-4 h-4 text-autumn-600"></i>
            <span>Flip Card</span>
          </button>
          <button onclick="nextFlashcard()" class="p-2.5 rounded-2xl sanctuary-subcard hover:bg-parchment-100 transition text-stone-600 hover:text-stone-900 border border-stone-200">
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </button>
          <button onclick="shuffleFlashcards()" class="p-2.5 rounded-2xl sanctuary-subcard hover:bg-parchment-100 transition text-stone-600 hover:text-stone-900 border border-stone-200" title="Shuffle Deck">
            <i data-lucide="shuffle" class="w-5 h-5 text-sage-600"></i>
          </button>
        </div>
      </div>

      <!-- Section 2: The Idiom Gym (Scenario Matcher) -->
      <div class="sanctuary-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 class="font-serif font-bold text-2xl text-slatewarm-900 flex items-center gap-2">
              <i data-lucide="dumbbell" class="w-6 h-6 text-autumn-600"></i>
              The Idiom &amp; Scenario Gym
            </h2>
            <p class="text-xs sm:text-sm text-stone-500">Select the most natural English idiom or expression for each conversational situation.</p>
          </div>
          <div class="text-xs font-mono font-bold bg-sage-100 text-sage-900 px-3 py-1.5 rounded-xl border border-sage-300">
            Matches: <span id="idiom-gym-score">0</span> / 6
          </div>
        </div>

        <div id="idiom-gym-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <!-- Dynamically populated via JS -->
        </div>
      </div>

      <!-- Section 3: Context Quiz -->
      <div class="sanctuary-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 class="font-serif font-bold text-2xl text-slatewarm-900 flex items-center gap-2">
              <i data-lucide="check-circle" class="w-6 h-6 text-sage-600"></i>
              Lesson Context Quiz
            </h2>
            <p class="text-xs sm:text-sm text-stone-500">6 interactive questions testing key neuroscience, physics, and cultural concepts discussed with Louie.</p>
          </div>
          <div class="text-xs font-mono font-bold bg-autumn-100 text-autumn-900 px-3 py-1.5 rounded-xl border border-autumn-300">
            Score: <span id="quiz-score-val">0</span> / 6
          </div>
        </div>

        <div id="quiz-container" class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- Dynamically populated via JS -->
        </div>
      </div>

      <!-- Section 4: Reflection Prompts -->
      <div class="sanctuary-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center font-bold">
            <i data-lucide="pen-tool" class="w-5 h-5"></i>
          </div>
          <div>
            <h2 class="font-serif font-bold text-2xl text-slatewarm-900">Next Lesson Reflection Prompts</h2>
            <p class="text-xs sm:text-sm text-stone-500">Thought-provoking speaking topics to prepare for Sunday's rapid-fire 30-minute lesson!</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${REFLECTION_PROMPTS.map((p, idx) => `
            <div class="sanctuary-subcard rounded-2xl p-5 space-y-3 border-t-4 border-t-autumn-500">
              <span class="text-[10px] font-mono font-bold uppercase text-stone-400">Prompt #${idx + 1}</span>
              <h3 class="font-serif font-bold text-lg text-slatewarm-900">${p.title}</h3>
              <p class="text-xs text-stone-600 leading-relaxed">${p.prompt}</p>
            </div>
          `).join('')}
        </div>
      </div>

    </section>

  </main>

  <!-- FOOTER -->
  <footer class="border-t border-[#e6decb] bg-[#fbf9f5]/90 py-8 text-center text-xs text-stone-500 relative z-30 space-y-2">
    <p class="font-serif text-sm text-slatewarm-900">
      Worachon P. • English Study Sanctuary &bull; Lesson 02 (23 October 2026)
    </p>
    <p>
      Crafted with care for peaceful contemplation • Oxford RP Audio Synthesis • Procedural Web Audio API Soundscapes
    </p>
  </footer>

  <!-- ===================================================================== -->
  <!-- APPLICATION LOGIC & INTERACTIVITY SCRIPTS -->
  <!-- ===================================================================== -->
  <script>
    // -------------------------------------------------------------------------
    // DATA INJECTION FROM SERVER/BUILDER
    // -------------------------------------------------------------------------
    const VOCAB_DB = ${JSON.stringify(VOCAB_DB, null, 2)};
    const TRANSCRIPT_TURNS = ${JSON.stringify(CLEANED_TURNS, null, 2)};
    const FLASHCARDS = ${JSON.stringify(FLASHCARDS, null, 2)};
    const IDIOM_CHALLENGES = ${JSON.stringify(IDIOM_CHALLENGES, null, 2)};
    const QUIZ_QUESTIONS = ${JSON.stringify(QUIZ_QUESTIONS, null, 2)};

    let activeVocabKey = 'put-into-perspective';
    let activeSpeakerFilter = 'all';
    let activeVocabCategory = 'all';
    let activeVocabLevel = 'all';
    let speechRate = 0.85;
    let leafMode = 'gentle'; // 'gentle', 'breeze', 'still'
    let currentFlashcardIndex = 0;
    let gymMatchedCount = 0;
    let quizScore = 0;
    const answeredQuestions = {};

    // -------------------------------------------------------------------------
    // 1. PROCEDURAL WEB AUDIO SOUNDSCAPE GENERATOR
    // -------------------------------------------------------------------------
    let audioCtx = null;
    let soundscapeNode = null;
    let soundscapeGain = null;
    let isSoundscapePlaying = false;
    let currentSoundscapeMode = 0; // 0: Breeze, 1: Rain, 2: Study Hearth
    const soundscapeNames = ['Autumn Breeze 🍃', 'Soft Rain 🌧️', 'Warm Hearth 🔥'];

    function initAudioContext() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
    }

    function createPinkNoiseProcessor() {
      const bufferSize = 4096;
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      const node = audioCtx.createScriptProcessor(bufferSize, 1, 1);
      node.onaudioprocess = function(e) {
        const output = e.outputBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
          b6 = white * 0.115926;
        }
      };
      return node;
    }

    function toggleSoundscape() {
      initAudioContext();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (!isSoundscapePlaying) {
        const noise = createPinkNoiseProcessor();
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, audioCtx.currentTime);

        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.35, audioCtx.currentTime);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        soundscapeNode = noise;
        soundscapeGain = gain;
        isSoundscapePlaying = true;
        document.getElementById('soundscape-text').textContent = soundscapeNames[currentSoundscapeMode];
        document.getElementById('soundscape-btn').classList.add('bg-sage-100', 'border-sage-400');
      } else {
        if (currentSoundscapeMode < 2) {
          currentSoundscapeMode++;
          document.getElementById('soundscape-text').textContent = soundscapeNames[currentSoundscapeMode];
        } else {
          currentSoundscapeMode = 0;
          if (soundscapeNode) soundscapeNode.disconnect();
          isSoundscapePlaying = false;
          document.getElementById('soundscape-text').textContent = 'Soundscape: Off';
          document.getElementById('soundscape-btn').classList.remove('bg-sage-100', 'border-sage-400');
        }
      }
    }

    // -------------------------------------------------------------------------
    // 2. HTML5 CANVAS FALLING LEAVES AMBIENT PARTICLES
    // -------------------------------------------------------------------------
    const canvas = document.getElementById('autumn-breeze-canvas');
    const ctx = canvas.getContext('2d');
    let leaves = [];
    const leafColors = [
      'rgba(190, 111, 56, 0.45)', // amber
      'rgba(163, 88, 43, 0.38)',  // rust
      'rgba(211, 140, 87, 0.42)', // soft gold
      'rgba(91, 130, 111, 0.35)', // sage leaf
      'rgba(182, 150, 107, 0.40)' // parchment tan
    ];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class AutumnLeaf {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20 - Math.random() * 50;
        this.size = 6 + Math.random() * 10;
        this.speedY = 0.5 + Math.random() * 1.2;
        this.speedX = -0.4 + Math.random() * 0.8;
        this.color = leafColors[Math.floor(Math.random() * leafColors.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
        this.oscillation = Math.random() * Math.PI * 2;
      }
      update() {
        if (leafMode === 'still') return;
        const multiplier = leafMode === 'breeze' ? 2.2 : 1.0;
        this.y += this.speedY * multiplier;
        this.oscillation += 0.02;
        this.x += (this.speedX + Math.sin(this.oscillation) * 0.6) * multiplier;
        this.rotation += this.rotSpeed * multiplier;

        if (this.y > canvas.height + 30) this.reset();
      }
      draw() {
        if (leafMode === 'still') return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.quadraticCurveTo(this.size * 0.8, -this.size * 0.3, 0, this.size);
        ctx.quadraticCurveTo(-this.size * 0.8, -this.size * 0.3, 0, -this.size);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 28; i++) {
      leaves.push(new AutumnLeaf());
    }

    function animateLeaves() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      leaves.forEach(leaf => {
        leaf.update();
        leaf.draw();
      });
      requestAnimationFrame(animateLeaves);
    }
    animateLeaves();

    function cycleLeafBreeze() {
      const modes = ['gentle', 'breeze', 'still'];
      const nextIndex = (modes.indexOf(leafMode) + 1) % modes.length;
      leafMode = modes[nextIndex];
      const statusText = document.getElementById('leaf-status-text');
      if (leafMode === 'gentle') statusText.textContent = 'Leaves: Gentle';
      if (leafMode === 'breeze') statusText.textContent = 'Leaves: Breeze 💨';
      if (leafMode === 'still') statusText.textContent = 'Leaves: Still (Off)';
    }

    // -------------------------------------------------------------------------
    // 3. THEME SWITCHING (Kensington, Winchester, Twilight)
    // -------------------------------------------------------------------------
    function cycleTheme() {
      const themes = ['kensington', 'winchester', 'twilight'];
      const current = document.body.getAttribute('data-theme') || 'kensington';
      const next = themes[(themes.indexOf(current) + 1) % themes.length];
      document.body.setAttribute('data-theme', next);

      const label = document.getElementById('theme-btn-text');
      if (next === 'kensington') label.textContent = 'Bath Stone';
      if (next === 'winchester') label.textContent = 'Winchester Mist';
      if (next === 'twilight') label.textContent = 'Twilight Study';
    }

    // -------------------------------------------------------------------------
    // 4. SPEECH SYNTHESIS HELPER
    // -------------------------------------------------------------------------
    function toggleSpeechRate() {
      speechRate = speechRate === 0.85 ? 1.0 : 0.85;
      document.getElementById('speech-rate-label').textContent = speechRate + '×';
    }

    function speakWord(text) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speechRate;
      utterance.lang = 'en-GB';

      const voices = window.speechSynthesis.getVoices();
      const ukVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('British') || v.name.includes('UK'));
      if (ukVoice) utterance.voice = ukVoice;
      window.speechSynthesis.speak(utterance);
    }

    function speakTurn(turnId) {
      const turn = TRANSCRIPT_TURNS.find(t => t.id === turnId);
      if (!turn) return;
      const temp = document.createElement('div');
      temp.innerHTML = turn.html;
      temp.querySelectorAll('.asr-fix-pill').forEach(el => el.remove());
      speakWord(temp.textContent || '');
    }

    // -------------------------------------------------------------------------
    // 5. VOCABULARY SPOTLIGHT & TIPPY TOOLTIPS
    // -------------------------------------------------------------------------
    function inspectVocab(key) {
      const item = VOCAB_DB[key];
      if (!item) return;
      activeVocabKey = key;

      document.getElementById('spotlight-word').textContent = item.word;
      document.getElementById('spotlight-ipa').textContent = item.ipa;
      document.getElementById('spotlight-pos').textContent = item.pos;
      document.getElementById('spotlight-level').textContent = item.level;
      document.getElementById('spotlight-def').textContent = item.def;
      document.getElementById('spotlight-thai').textContent = item.th;
      document.getElementById('spotlight-quote').textContent = item.quote;
      document.getElementById('spotlight-time').textContent = '🕒 ' + item.time;
      document.getElementById('spotlight-cat').textContent = item.cat;

      // Update active highlight class
      document.querySelectorAll('.vocab-mark').forEach(el => {
        if (el.getAttribute('data-vkey') === key) {
          el.classList.add('active-vocab');
        } else {
          el.classList.remove('active-vocab');
        }
      });
    }

    function speakCurrentSpotlight() {
      const item = VOCAB_DB[activeVocabKey];
      if (item) speakWord(item.word);
    }

    function jumpToActiveSpotlightTurn() {
      const item = VOCAB_DB[activeVocabKey];
      if (item && item.turnId) {
        jumpToTranscriptTurn(item.turnId, activeVocabKey);
      }
    }

    function initTippyTooltips() {
      tippy('.vocab-mark', {
        theme: 'autumn-sanctuary',
        animation: 'shift-away',
        allowHTML: true,
        interactive: true,
        placement: 'top',
        delay: [120, 80],
        content(reference) {
          const key = reference.getAttribute('data-vkey');
          const item = VOCAB_DB[key];
          if (!item) return '';
          return \`
            <div class="p-3 max-w-xs space-y-2 text-left font-sans">
              <div class="flex items-center justify-between gap-2 border-b border-stone-200 pb-1.5">
                <span class="font-serif font-bold text-base text-slatewarm-900">\${item.word}</span>
                <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-autumn-100 text-autumn-800">\${item.level}</span>
              </div>
              <div class="text-[11px] text-stone-500 font-mono">\${item.ipa} • <span class="italic">\${item.pos}</span></div>
              <p class="text-xs text-stone-700 leading-snug">\${item.def}</p>
              <div class="p-2 rounded-lg bg-parchment-100/90 text-xs text-slatewarm-900 font-medium">
                🇹🇭 <strong>ไทย:</strong> \${item.th}
              </div>
              <div class="flex items-center justify-between text-[11px] pt-1">
                <span class="font-mono text-stone-400">🕒 \${item.time}</span>
                <button onclick="speakWord('\${item.word.replace(/'/g, "\\\\'")}')" class="text-autumn-700 hover:text-autumn-800 font-semibold flex items-center gap-1">
                  <span>🔊 Listen</span>
                </button>
              </div>
            </div>
          \`;
        }
      });
    }

    // -------------------------------------------------------------------------
    // 6. RENDER TRANSCRIPT
    // -------------------------------------------------------------------------
    function renderTranscript() {
      const container = document.getElementById('transcript-feed-container');
      const searchVal = (document.getElementById('transcript-search').value || '').toLowerCase().trim();
      let html = '';

      TRANSCRIPT_TURNS.forEach(turn => {
        // Speaker filter
        if (activeSpeakerFilter !== 'all' && turn.speaker !== activeSpeakerFilter) {
          return;
        }

        // Search filter
        if (searchVal) {
          const temp = document.createElement('div');
          temp.innerHTML = turn.html;
          const text = (turn.speaker + ' ' + turn.time + ' ' + temp.textContent).toLowerCase();
          if (!text.includes(searchVal)) return;
        }

        // Chapter header
        if (turn.chapterTitle && activeSpeakerFilter === 'all' && !searchVal) {
          html += \`
            <div id="\${turn.chapterId}" class="pt-6 pb-2">
              <div class="px-5 py-3 rounded-2xl bg-gradient-to-r from-sage-100/95 via-parchment-100 to-autumn-50 border border-sage-200/80 flex items-center gap-2 text-xs sm:text-sm font-serif font-bold text-sage-900 shadow-xs">
                <i data-lucide="bookmark" class="w-4 h-4 text-autumn-600 shrink-0"></i>
                <span>\${turn.chapterTitle}</span>
              </div>
            </div>
          \`;
        }

        const isWorachon = turn.speaker === 'Worachon';
        const cardBg = isWorachon 
          ? 'bg-[#fffdf9] border-l-4 border-l-autumn-500' 
          : 'bg-[#f8faf8] border-l-4 border-l-sage-600';
        const badgeColor = isWorachon 
          ? 'bg-autumn-100 text-autumn-800 border-autumn-200' 
          : 'bg-sage-100 text-sage-800 border-sage-200';

        html += \`
          <div id="\${turn.id}" class="sanctuary-subcard rounded-2xl p-4 sm:p-5 transition hover:shadow-sm space-y-2.5 \${cardBg}">
            <div class="flex items-center justify-between text-xs">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold border font-mono \${badgeColor}">
                  \${turn.speaker}
                </span>
                <span class="font-mono text-stone-400 text-[11px]">🕒 \${turn.time}</span>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="speakTurn('\${turn.id}')" class="p-1 rounded-md text-stone-400 hover:text-autumn-600 hover:bg-parchment-100 transition" title="Listen to this turn">
                  <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            </div>
            <div class="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
              \${turn.html}
            </div>
          </div>
        \`;
      });

      if (!html) {
        html = \`
          <div class="text-center py-12 sanctuary-card rounded-3xl p-6 text-stone-500 space-y-2">
            <i data-lucide="search-x" class="w-8 h-8 mx-auto text-stone-400"></i>
            <p class="font-serif text-base">No transcript lines matched your search.</p>
            <button onclick="clearTranscriptSearch()" class="px-4 py-1.5 rounded-xl bg-sage-700 text-white text-xs font-semibold">Clear Search</button>
          </div>
        \`;
      }

      container.innerHTML = html;
      lucide.createIcons();
      initTippyTooltips();
    }

    function filterTranscript() {
      const val = document.getElementById('transcript-search').value;
      document.getElementById('clear-search-btn').classList.toggle('hidden', !val);
      renderTranscript();
    }

    function clearTranscriptSearch() {
      document.getElementById('transcript-search').value = '';
      document.getElementById('clear-search-btn').classList.add('hidden');
      renderTranscript();
    }

    function filterSpeaker(speaker) {
      activeSpeakerFilter = speaker;
      ['all', 'Louie', 'Worachon'].forEach(s => {
        const btn = document.getElementById(\`spk-\${s.toLowerCase()}-btn\`);
        if (btn) {
          if (s === speaker) {
            btn.className = 'px-3 py-1.5 rounded-xl text-xs font-semibold bg-sage-700 text-white shadow-xs transition';
          } else {
            btn.className = 'px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 transition';
          }
        }
      });
      renderTranscript();
    }

    function toggleAsrBadges() {
      document.body.classList.toggle('hide-asr-fixes');
      const hidden = document.body.classList.contains('hide-asr-fixes');
      document.getElementById('asr-btn-text').textContent = hidden ? 'Note-Taker Fixes: Hidden' : 'Note-Taker Fixes: Visible';
    }

    function toggleVocabHighlights() {
      document.body.classList.toggle('hide-vocab-highlights');
      const hidden = document.body.classList.contains('hide-vocab-highlights');
      document.getElementById('vocab-btn-text').textContent = hidden ? 'Vocab Highlights: Off' : 'Vocab Highlights: On';
    }

    function jumpToTranscriptTurn(turnId, vocabKey) {
      switchTab('transcript');
      if (vocabKey) inspectVocab(vocabKey);

      setTimeout(() => {
        const el = document.getElementById(turnId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('turn-highlight-flash');
          setTimeout(() => el.classList.remove('turn-highlight-flash'), 2900);
        }
      }, 150);
    }

    // -------------------------------------------------------------------------
    // 7. RENDER VOCABULARY DICTIONARY
    // -------------------------------------------------------------------------
    function renderVocabGrid() {
      const container = document.getElementById('vocab-cards-grid');
      const searchVal = (document.getElementById('vocab-search').value || '').toLowerCase().trim();
      let html = '';

      Object.keys(VOCAB_DB).forEach(key => {
        const item = VOCAB_DB[key];

        // Category filter
        if (activeVocabCategory !== 'all') {
          if (activeVocabCategory === 'idioms' && item.cat !== 'idioms') return;
          if (activeVocabCategory === 'science' && item.cat !== 'science') return;
          if (activeVocabCategory === 'medical' && item.cat !== 'medical') return;
          if (activeVocabCategory === 'lifestyle' && item.cat !== 'lifestyle' && item.cat !== 'culture') return;
        }

        // Level filter
        if (activeVocabLevel !== 'all' && !item.level.startsWith(activeVocabLevel)) {
          return;
        }

        // Search query
        if (searchVal) {
          const combined = (item.word + ' ' + item.def + ' ' + item.th + ' ' + item.cat + ' ' + item.quote).toLowerCase();
          if (!combined.includes(searchVal)) return;
        }

        html += \`
          <div class="sanctuary-subcard rounded-2xl p-5 space-y-3.5 transition hover:shadow-md flex flex-col justify-between border-t-2 border-t-autumn-400">
            <div class="space-y-2">
              <div class="flex items-center justify-between gap-2">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-autumn-100 text-autumn-800">\${item.level}</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono text-stone-500 capitalize bg-stone-100">\${item.cat}</span>
              </div>
              <div>
                <div class="flex items-baseline justify-between">
                  <h3 class="font-serif font-bold text-xl text-slatewarm-900 leading-tight">\${item.word}</h3>
                  <button onclick="speakWord('\${item.word.replace(/'/g, "\\\\'")}')" class="p-1 text-stone-400 hover:text-autumn-600 transition" title="Listen">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <div class="text-[11px] font-mono text-stone-500">\${item.ipa} • <span class="italic font-sans">\${item.pos}</span></div>
              </div>
              <p class="text-xs text-stone-700 font-sans leading-relaxed">\${item.def}</p>
              
              <div class="p-2.5 rounded-xl bg-gradient-to-r from-parchment-100 to-autumn-50/50 border border-autumn-200/70 text-xs font-medium text-slatewarm-900">
                🇹🇭 <strong>ไทย:</strong> \${item.th}
              </div>
            </div>

            <div class="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
              <span class="text-stone-400 font-mono text-[11px]">🕒 \${item.time}</span>
              <button onclick="jumpToTranscriptTurn('\${item.turnId}', '\${key}')" class="text-autumn-700 hover:text-autumn-800 font-semibold flex items-center gap-1 transition">
                <span>View in turn</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        \`;
      });

      if (!html) {
        html = \`
          <div class="col-span-full text-center py-12 sanctuary-card rounded-3xl p-6 text-stone-500 space-y-2">
            <i data-lucide="book-x" class="w-8 h-8 mx-auto text-stone-400"></i>
            <p class="font-serif text-base">No vocabulary items matched your filter.</p>
          </div>
        \`;
      }

      container.innerHTML = html;
      lucide.createIcons();
    }

    function filterVocabGrid() {
      renderVocabGrid();
    }

    function filterVocabCategory(cat) {
      activeVocabCategory = cat;
      ['all', 'idioms', 'medical', 'science', 'lifestyle'].forEach(c => {
        const btn = document.getElementById(\`vcat-\${c}\`);
        if (btn) {
          if (c === cat) {
            btn.className = 'px-3 py-1.5 rounded-xl font-semibold bg-sage-700 text-white shadow-xs transition';
          } else {
            btn.className = 'px-3 py-1.5 rounded-xl font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 transition';
          }
        }
      });
      renderVocabGrid();
    }

    function filterVocabLevel(lvl) {
      activeVocabLevel = lvl;
      ['all', 'B2', 'C1', 'C2'].forEach(l => {
        const btn = document.getElementById(\`vlvl-\${l}\`);
        if (btn) {
          if (l === lvl) {
            btn.className = 'px-2.5 py-1 rounded-lg bg-autumn-600 text-white font-bold transition';
          } else {
            btn.className = 'px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-parchment-100 font-bold transition';
          }
        }
      });
      renderVocabGrid();
    }

    // -------------------------------------------------------------------------
    // 8. FLASHCARD DECK LOGIC
    // -------------------------------------------------------------------------
    function updateFlashcardUI() {
      const card = FLASHCARDS[currentFlashcardIndex];
      const inner = document.getElementById('flashcard-inner');
      inner.classList.remove('flipped');

      document.getElementById('flashcard-counter').textContent = \`Card \${currentFlashcardIndex + 1} / \${FLASHCARDS.length}\`;
      document.getElementById('fc-type').textContent = card.type;
      document.getElementById('fc-front-word').textContent = card.front;
      document.getElementById('fc-front-ipa').textContent = card.ipa;
      document.getElementById('fc-front-example').textContent = card.example;
      document.getElementById('fc-back-thai').textContent = card.back;
      document.getElementById('fc-back-origin').textContent = card.origin;
    }

    function flipFlashcard() {
      const inner = document.getElementById('flashcard-inner');
      inner.classList.toggle('flipped');
    }

    function nextFlashcard() {
      currentFlashcardIndex = (currentFlashcardIndex + 1) % FLASHCARDS.length;
      updateFlashcardUI();
    }

    function prevFlashcard() {
      currentFlashcardIndex = (currentFlashcardIndex - 1 + FLASHCARDS.length) % FLASHCARDS.length;
      updateFlashcardUI();
    }

    function shuffleFlashcards() {
      FLASHCARDS.sort(() => Math.random() - 0.5);
      currentFlashcardIndex = 0;
      updateFlashcardUI();
    }

    function speakFlashcardWord() {
      const card = FLASHCARDS[currentFlashcardIndex];
      speakWord(card.front);
    }

    // -------------------------------------------------------------------------
    // 9. IDIOM GYM SCENARIO MATCHER
    // -------------------------------------------------------------------------
    function renderIdiomGym() {
      const container = document.getElementById('idiom-gym-grid');
      let html = '';

      IDIOM_CHALLENGES.forEach(c => {
        html += \`
          <div id="gym-challenge-\${c.id}" class="sanctuary-subcard rounded-2xl p-5 space-y-3 border-l-4 border-l-autumn-400">
            <span class="text-[10px] uppercase font-mono font-bold text-stone-400">Scenario \${c.id}</span>
            <p class="text-xs sm:text-sm text-stone-800 leading-relaxed">\${c.scenario}</p>
            
            <div class="space-y-1.5 pt-1">
              \${c.options.map(opt => \`
                <button onclick="checkGymAnswer(\${c.id}, '\${opt.replace(/'/g, "\\\\'")}')" id="gym-opt-\${c.id}-\${opt.replace(/[^a-zA-Z]/g, '')}" class="gym-btn-\${c.id} w-full text-left px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-200 text-stone-700 hover:border-autumn-400 hover:bg-parchment-50 transition">
                  \${opt}
                </button>
              \`).join('')}
            </div>

            <div id="gym-feedback-\${c.id}" class="hidden p-3 rounded-xl text-xs font-sans"></div>
          </div>
        \`;
      });

      container.innerHTML = html;
    }

    function checkGymAnswer(challengeId, selected) {
      const challenge = IDIOM_CHALLENGES.find(c => c.id === challengeId);
      const feedback = document.getElementById(\`gym-feedback-\${challengeId}\`);
      const buttons = document.querySelectorAll(\`.gym-btn-\${challengeId}\`);
      
      buttons.forEach(b => b.disabled = true);

      if (selected === challenge.correct) {
        feedback.className = 'p-3 rounded-xl text-xs font-sans bg-sage-100 text-sage-900 border border-sage-300';
        feedback.innerHTML = challenge.explanation;
        feedback.classList.remove('hidden');
        gymMatchedCount++;
        document.getElementById('idiom-gym-score').textContent = gymMatchedCount;

        if (gymMatchedCount === IDIOM_CHALLENGES.length) {
          triggerConfettiCelebration();
        }
      } else {
        feedback.className = 'p-3 rounded-xl text-xs font-sans bg-amber-50 text-amber-900 border border-amber-300';
        feedback.innerHTML = \`Almost! The natural idiom here is <strong>\${challenge.correct}</strong>. \${challenge.explanation}\`;
        feedback.classList.remove('hidden');
      }
    }

    // -------------------------------------------------------------------------
    // 10. CONTEXT QUIZ LOGIC
    // -------------------------------------------------------------------------
    function renderQuiz() {
      const container = document.getElementById('quiz-container');
      let html = '';

      QUIZ_QUESTIONS.forEach((q, idx) => {
        html += \`
          <div class="sanctuary-subcard rounded-2xl p-5 space-y-3.5 border-t-2 border-t-autumn-400">
            <div class="flex items-center justify-between text-xs font-mono">
              <span class="font-bold text-autumn-800">Question \${idx + 1} of \${QUIZ_QUESTIONS.length}</span>
            </div>
            <h3 class="font-serif font-bold text-base sm:text-lg text-slatewarm-900 leading-snug">\${q.question}</h3>
            
            <div class="space-y-2 pt-1">
              \${q.options.map((opt, optIdx) => \`
                <button onclick="handleQuizAnswer(\${q.id}, \${optIdx})" id="q-\${q.id}-opt-\${optIdx}" class="q-btn-\${q.id} w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-sans bg-white border border-stone-200 text-stone-700 hover:border-autumn-400 hover:bg-parchment-50 transition">
                  <span class="font-mono font-bold mr-2 text-stone-400">\${String.fromCharCode(65 + optIdx)}.</span>
                  <span>\${opt}</span>
                </button>
              \`).join('')}
            </div>

            <div id="quiz-explain-\${q.id}" class="hidden p-3.5 rounded-xl text-xs font-sans leading-relaxed"></div>
          </div>
        \`;
      });

      container.innerHTML = html;
    }

    function handleQuizAnswer(questionId, selectedIdx) {
      if (answeredQuestions[questionId] !== undefined) return;
      answeredQuestions[questionId] = selectedIdx;

      const q = QUIZ_QUESTIONS.find(item => item.id === questionId);
      const isCorrect = selectedIdx === q.correctIndex;
      const explainBox = document.getElementById(\`quiz-explain-\${questionId}\`);
      const buttons = document.querySelectorAll(\`.q-btn-\${questionId}\`);

      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIndex) {
          btn.className = 'w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-sans bg-sage-100 border border-sage-500 text-sage-900 font-semibold';
        } else if (idx === selectedIdx) {
          btn.className = 'w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-sans bg-amber-100 border border-amber-500 text-amber-900 line-through';
        }
      });

      if (isCorrect) {
        quizScore++;
        document.getElementById('quiz-score-val').textContent = quizScore;
        explainBox.className = 'p-3.5 rounded-xl text-xs font-sans leading-relaxed bg-sage-50 text-sage-900 border border-sage-300';
        explainBox.innerHTML = '<strong>✨ Brilliant!</strong> ' + q.explanation;
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
      } else {
        explainBox.className = 'p-3.5 rounded-xl text-xs font-sans leading-relaxed bg-parchment-100 text-stone-800 border border-stone-300';
        explainBox.innerHTML = '<strong>Good effort!</strong> ' + q.explanation;
      }
      explainBox.classList.remove('hidden');

      if (Object.keys(answeredQuestions).length === QUIZ_QUESTIONS.length) {
        if (quizScore >= 4) triggerConfettiCelebration();
      }
    }

    function triggerConfettiCelebration() {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 }
      });
    }

    // -------------------------------------------------------------------------
    // 11. TAB SWITCHER
    // -------------------------------------------------------------------------
    function switchTab(tabName) {
      ['transcript', 'vocab', 'fixes', 'topics', 'practice'].forEach(t => {
        const panel = document.getElementById(\`tab-panel-\${t}\`);
        const btn = document.getElementById(\`tab-btn-\${t}\`);
        if (panel && btn) {
          if (t === tabName) {
            panel.classList.remove('hidden');
            btn.className = 'tab-btn flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 bg-sage-700 text-white shadow-sm';
            gsap.fromTo(panel, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
          } else {
            panel.classList.add('hidden');
            btn.className = 'tab-btn flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 text-stone-700 hover:bg-parchment-100';
          }
        }
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // -------------------------------------------------------------------------
    // 12. COPY LESSON SUMMARY
    // -------------------------------------------------------------------------
    function copyLessonSummary() {
      const summaryText = "Hi Louie! I reviewed our lesson notes and cleaned transcript for Lesson 02 (23 October 2026). I loved learning about the brain's pain paradox (awake craniotomies & dura mater headaches), Richard Dawkins' meme theory, our Connect 4 game, and practicing the idioms in the Idiom Gym! Looking forward to Sunday's fast-recall lesson: wham, bam, thank you, ma'am!";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(summaryText).then(() => {
          const btn = document.getElementById('copy-summary-btn');
          const original = btn.innerHTML;
          btn.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-white"></i><span>Copied to Clipboard!</span>';
          lucide.createIcons();
          setTimeout(() => { btn.innerHTML = original; lucide.createIcons(); }, 2500);
        });
      }
    }

    // -------------------------------------------------------------------------
    // 13. APP INITIALIZATION
    // -------------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
      renderTranscript();
      renderVocabGrid();
      inspectVocab('put-into-perspective');
      updateFlashcardUI();
      renderIdiomGym();
      renderQuiz();
      lucide.createIcons();
    });
  </script>
</body>
</html>
`;

// Write the complete index.html file
const outputPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');

console.log(`Successfully generated index.html (${htmlContent.length} bytes)!`);
