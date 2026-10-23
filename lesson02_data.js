// Builder for Worachon P's Peaceful English Sanctuary - Lesson 02 (Oct 23, 2026)
const fs = require('fs');
const path = require('path');

console.log("Compiling Worachon P's Lesson 02 (23 October 2026) index.html...");

// -----------------------------------------------------------------------------
// 1. VOCABULARY DATABASE (55 Rich Terms, Medical Concepts, Science & Spoken Idioms)
// -----------------------------------------------------------------------------
const VOCAB_DB = {
  "chulalongkorn-day": {
    word: "Chulalongkorn Memorial Day (วันปิยมหาราช)",
    ipa: "/ˌtʃʊ.ləˈlɒŋ.kɔːn məˈmɔː.ri.əl deɪ/",
    pos: "proper noun",
    level: "B2",
    time: "00:29",
    turnId: "turn-6",
    cat: "culture",
    def: "An official national holiday in Thailand celebrated annually on October 23rd commemorating King Chulalongkorn (Rama V).",
    quote: "Worachon (00:29): \"It's called ปิยมหาราช (Chulalongkorn Day), so it's a memorial day for a previous king.\"",
    th: "วันปิยมหาราช (23 ตุลาคม ของทุกปี)"
  },
  "dignified": {
    word: "dignified",
    ipa: "/ˈdɪɡ.nɪ.faɪd/",
    pos: "adjective",
    level: "B2",
    time: "01:19",
    turnId: "turn-9",
    cat: "culture",
    def: "Composed, noble, and commanding serious respect through solemn poise and majestic bearing.",
    quote: "Louie (01:19): \"When I see the pictures of your king and queen, they look strong... they look dignified.\"",
    th: "สง่างาม / ภูมิฐานสมเกียรติ"
  },
  "pith-helmet": {
    word: "pith helmet",
    ipa: "/ˈpɪθ ˌhel.mət/",
    pos: "noun",
    level: "C1",
    time: "01:49",
    turnId: "turn-13",
    cat: "culture",
    def: "A lightweight, rigid sun hat crafted from dried solah pith or cork, traditionally donned with tropical ceremonial uniforms.",
    quote: "Louie (01:49): \"It's a colonial hat for the tropics... your king wears this pith helmet in royal pictures.\"",
    th: "หมวกกะโล่ (หมวกเครื่องแบบพิธีการกันแดดเขตร้อน)"
  },
  "adequate": {
    word: "adequate",
    ipa: "/ˈæd.ə.kwət/",
    pos: "adjective",
    level: "B2",
    time: "04:51",
    turnId: "turn-21",
    cat: "everyday",
    def: "Sufficient, satisfactory, or acceptable in quality or quantity for a particular requirement.",
    quote: "Louie (04:51): \"Fair enough, fair enough... but it's okay, it's quite adequate?\"",
    th: "พอใช้ได้ / เพียงพอต่อความต้องการ"
  },
  "nerdy": {
    word: "nerdy",
    ipa: "/ˈnɜː.di/",
    pos: "adjective",
    level: "B2",
    time: "04:22",
    turnId: "turn-19",
    cat: "everyday",
    def: "Characteristic of an enthusiastic, obsessive dedication to academic or scientific minutiae rather than casual socializing.",
    quote: "Worachon (04:22): \"At first I thought it would be much more nerdy, but it's actually good considering when it was built.\"",
    th: "เนิร์ด / บ้าเรียนอย่างจริงจัง"
  },
  "exceed-expectations": {
    word: "exceed expectations",
    ipa: "/ɪkˈsiːd ˌek.spekˈteɪ.ʃənz/",
    pos: "collocation / phrase",
    level: "C1",
    time: "05:12",
    turnId: "turn-22",
    cat: "idioms",
    def: "To surpass by a significant margin what was anticipated, hoped for, or thought possible.",
    quote: "Louie (05:12): \"What's one destination that exceeded all your expectations and made it special? For me, Lamphun!\"",
    th: "เกินความคาดหมาย / ดีกว่าที่คิดไว้มาก"
  },
  "blow-ones-mind": {
    word: "blow one's mind",
    ipa: "/bləʊ wʌnz maɪnd/",
    pos: "idiom",
    level: "B2",
    time: "05:50",
    turnId: "turn-23",
    cat: "idioms",
    def: "To completely astonish, overwhelm, or impress someone beyond belief.",
    quote: "Louie (05:50): \"The reception I got was outstanding in Lamphun... it completely blew my mind!\"",
    th: "ทำให้ทึ่งอย่างเหลือเชื่อ / อึ้งไปเลย"
  },
  "purely-for-the-joy-of-it": {
    word: "purely for the joy of it",
    ipa: "/ˈpjʊə.li fər ðə dʒɔɪ əv ɪt/",
    pos: "phrase",
    level: "C1",
    time: "06:32",
    turnId: "turn-26",
    cat: "lifestyle",
    def: "Engaged in solely for intrinsic pleasure and delight, without any pragmatic goal, deadline, or extrinsic reward.",
    quote: "Louie (06:32): \"When did you last do something purely for the joy of it, with no goal in mind?\"",
    th: "ทำด้วยความสุขใจล้วนๆ โดยไม่ต้องมีเป้าหมาย"
  },
  "scientific-curiosity": {
    word: "scientific curiosity",
    ipa: "/ˌsaɪənˈtɪf.ɪk ˌkjʊə.riˈɒs.ə.ti/",
    pos: "noun",
    level: "B2",
    time: "06:42",
    turnId: "turn-27",
    cat: "science",
    def: "An inquisitive drive to probe, experiment, and comprehend natural phenomena purely to discover truth.",
    quote: "Worachon (06:42): \"I had a research question in mind and went to the teacher... they gave me permission to join the lab just to solve my curiosity.\"",
    th: "ความใคร่รู้ทางวิทยาศาสตร์"
  },
  "academic-exploration": {
    word: "academic exploration",
    ipa: "/ˌæk.əˈdem.ɪk ˌek.spləˈreɪ.ʃən/",
    pos: "noun",
    level: "C1",
    time: "07:48",
    turnId: "turn-28",
    cat: "science",
    def: "Independent scholarly investigation pursued for intellectual insight rather than mere test scores.",
    quote: "Louie (07:48): \"It's your own personal academic exploration... learning for the joy of learning, not just for a grade.\"",
    th: "การค้นคว้าแสวงหาความรู้ทางวิชาการ"
  },
  "gatekeeper": {
    word: "gatekeeper",
    ipa: "/ˈɡeɪtˌkiː.pər/",
    pos: "noun",
    level: "C1",
    time: "08:13",
    turnId: "turn-32",
    cat: "concepts",
    def: "An editor, institution, or authority controlling access, publication, and quality standards for information.",
    quote: "Louie (08:13): \"Because there are no gatekeepers, we are making a sea of garbage... not everything should be saved.\"",
    th: "ผู้คัดกรอง / ผู้มีอำนาจตรวจสอบก่อนเผยแพร่"
  },
  "barrier-to-entry": {
    word: "barrier to entry",
    ipa: "/ˈbær.i.ər tu ˈen.tri/",
    pos: "noun (economics / media)",
    level: "C1",
    time: "08:13",
    turnId: "turn-32",
    cat: "concepts",
    def: "An obstacle or threshold that prevents or slows immediate entry or publication in a field.",
    quote: "Louie (08:13): \"Anyone can make a YouTube video or Facebook post because there's no barrier to entry.\"",
    th: "อุปสรรคหรือเกณฑ์คัดกรองในการเข้าสู่ระบบ"
  },
  "natural-selection": {
    word: "natural selection",
    ipa: "/ˌnætʃ.ər.əl sɪˈlek.ʃən/",
    pos: "noun (biology / sociology)",
    level: "B2",
    time: "09:56",
    turnId: "turn-34",
    cat: "science",
    def: "The evolutionary differential survival and reproduction of individuals or ideas based on fitness in an environment.",
    quote: "Louie (09:56): \"Genes go through natural selection, and Richard Dawkins showed ideas and memes used to go through natural selection as well.\"",
    th: "การคัดเลือกโดยธรรมชาติ"
  },
  "evolutionary-biologist": {
    word: "evolutionary biologist",
    ipa: "/ˌev.əˈluː.ʃən.ər.i baɪˈɒl.ə.dʒɪst/",
    pos: "noun",
    level: "C1",
    time: "09:56",
    turnId: "turn-34",
    cat: "science",
    def: "A scientist who investigates biological lineage, natural selection, genetics, and adaptation across generations.",
    quote: "Louie (09:56): \"Richard Dawkins is an evolutionary biologist famous for 'The Selfish Gene'.\"",
    th: "นักชีววิทยาวิวัฒนาการ"
  },
  "meme": {
    word: "meme (Dawkins' cultural unit)",
    ipa: "/miːm/",
    pos: "noun",
    level: "B2",
    time: "09:56",
    turnId: "turn-34",
    cat: "concepts",
    def: "An element of a culture or behavior passed from one individual to another by non-genetic means (especially imitation).",
    quote: "Louie (09:56): \"He created the word 'meme' in the 70s to say that not only do genes evolve, but ideas and information do too.\"",
    th: "มีม (หน่วยถ่ายทอดทางความคิดและวัฒนธรรม)"
  },
  "convey": {
    word: "convey (ideas)",
    ipa: "/kənˈveɪ/",
    pos: "verb",
    level: "B2",
    time: "13:09",
    turnId: "turn-39",
    cat: "communication",
    def: "To communicate, express, or transmit complex impressions or philosophical notions clearly to others.",
    quote: "Louie (13:09): \"To convey your ideas to the world... you want your English skill to be just as good as your Thai.\"",
    th: "ถ่ายทอด / สื่อสารความคิด"
  },
  "think-abstractly": {
    word: "think abstractly",
    ipa: "/θɪŋk æbˈstrækt.li/",
    pos: "phrase",
    level: "C1",
    time: "13:12",
    turnId: "turn-40",
    cat: "communication",
    def: "To conceptualize generalized principles, hypotheses, and overarching theories beyond tangible physical objects.",
    quote: "Louie (13:12): \"To think abstractly and see the bigger picture in another language is truly a skill you need for scientific papers.\"",
    th: "คิดเชิงนามธรรม / คิดภาพรวมเชิงทฤษฎี"
  },
  "peer-reviewed-paper": {
    word: "academic paper / journal",
    ipa: "/ˌæk.əˈdem.ɪk ˈpeɪ.pər/",
    pos: "noun",
    level: "B2",
    time: "13:46",
    turnId: "turn-42",
    cat: "science",
    def: "A formal scientific report published in a scholarly journal documenting novel clinical research.",
    quote: "Louie (13:46): \"If you're going to write your paper in English, you want to explore and convey your findings with precision.\"",
    th: "บทความวิจัย / วารสารวิชาการ"
  },
  "ruthless": {
    word: "ruthless",
    ipa: "/ˈruːθ.ləs/",
    pos: "adjective",
    level: "C1",
    time: "14:26",
    turnId: "turn-43",
    cat: "everyday",
    def: "Having or showing no compassion, pity, or compromise in the relentless pursuit of goals.",
    quote: "Louie (14:26): \"My uncle Steve was so mean, so ruthless, so goal-orientated, but unapologetically smart.\"",
    th: "เด็ดขาด / มุ่งมั่นไม่ยอมประนีประนอม"
  },
  "unapologetically": {
    word: "unapologetically",
    ipa: "/ˌʌn.ə.pɒl.əˈdʒet.ɪ.kəl.i/",
    pos: "adverb",
    level: "C2",
    time: "14:26",
    turnId: "turn-43",
    cat: "concepts",
    def: "In a manner that expresses absolute confidence and conviction without seeking approval or offering excuses.",
    quote: "Louie (14:26): \"He was ruthless and demanding, but unapologetically smart in military technology.\"",
    th: "อย่างมั่นใจในตนเองเต็มเปี่ยมโดยไม่ต้องแก้ตัว"
  },
  "guidance-system": {
    word: "guidance system",
    ipa: "/ˈɡaɪ.dəns ˌsɪs.təm/",
    pos: "noun",
    level: "C1",
    time: "14:26",
    turnId: "turn-43",
    cat: "science",
    def: "A computational and sensor apparatus that steers missiles, satellites, or aircraft autonomously toward a target.",
    quote: "Louie (14:26): \"He designed military software and missile guidance systems before the World Wide Web.\"",
    th: "ระบบนำวิถี (ขีปนาวุธ / ยานอวกาศ)"
  },
  "consume-information": {
    word: "consume information",
    ipa: "/kənˈsjuːm ˌɪn.fəˈmeɪ.ʃən/",
    pos: "collocation",
    level: "C1",
    time: "14:26",
    turnId: "turn-43",
    cat: "concepts",
    def: "To read, internalize, and absorb voluminous quantities of books, code, and intellectual data.",
    quote: "Louie (14:26): \"I learned to code, do electronics, and networking just by consuming the information in that one room.\"",
    th: "เสพและซึมซับข้อมูลความรู้"
  },
  "fulfill-a-passion": {
    word: "fulfill a passion",
    ipa: "/fʊlˈfɪl ə ˈpæʃ.ən/",
    pos: "phrase",
    level: "B2",
    time: "17:00",
    turnId: "turn-44",
    cat: "lifestyle",
    def: "To realize, satisfy, and actively manifest an inner dream or long-held childhood fascination.",
    quote: "Worachon (17:00): \"I'm looking for projects that will fulfill my childhood passion of putting physics and chemistry into real-world solutions.\"",
    th: "เติมเต็มความหลงใหล / ทำตามความฝัน"
  },
  "crisp-air": {
    word: "crisp (air)",
    ipa: "/krɪsp/",
    pos: "adjective",
    level: "B2",
    time: "19:34",
    turnId: "turn-49",
    cat: "nature",
    def: "Pleasantly cool, dry, pristine, and invigorating to breathe (characteristic of high alpine climates).",
    quote: "Louie (19:34): \"Switzerland is unbelievably crisp... the air is so clean, the mountains and water are perfect.\"",
    th: "อากาศบริสุทธิ์ เย็นสดชื่นแจ่มใส"
  },
  "vista": {
    word: "vista",
    ipa: "/ˈvɪs.tə/",
    pos: "noun",
    level: "C1",
    time: "20:11",
    turnId: "turn-52",
    cat: "nature",
    def: "A pleasing, panoramic view across an extensive stretch of countryside or sweeping mountain pass.",
    quote: "Louie (20:11): \"In Thailand, you can see the vista... you can see for a long way.\"",
    th: "ทัศนียภาพกว้างไกลสุดสายตา"
  },
  "basin": {
    word: "basin (geographic)",
    ipa: "/ˈbeɪ.sən/",
    pos: "noun",
    level: "B2",
    time: "20:11",
    turnId: "turn-52",
    cat: "nature",
    def: "A natural depression in Earth's surface, typically surrounded by higher mountain slopes like an enclosed cradle.",
    quote: "Louie (20:11): \"Switzerland is surrounded by mountains like a basin... it looks like the land is being held.\"",
    th: "แอ่งแผ่นดิน / หุบแอ่งล้อมรอบด้วยขุนเขา"
  },
  "rigid": {
    word: "rigid (culture / system)",
    ipa: "/ˈrɪdʒ.ɪd/",
    pos: "adjective",
    level: "C1",
    time: "20:56",
    turnId: "turn-53",
    cat: "lifestyle",
    def: "Inflexible, strictly codified, and uncompromising in social conventions and protocol.",
    quote: "Louie (20:56): \"In Vietnam there is a structure... I was used to the system and becoming too rigid.\"",
    th: "เข้มงวด / ยึดติดระเบียบแบบแผนเกินไป"
  },
  "put-into-perspective": {
    word: "put things into perspective",
    ipa: "/pʊt ˈθɪŋz ˈɪn.tu pəˈspek.tɪv/",
    pos: "idiom",
    level: "C1",
    time: "20:56",
    turnId: "turn-53",
    cat: "idioms",
    def: "To judge the relative importance or scale of something objectively within a broader, wiser context.",
    quote: "Louie (20:56): \"Being in Thailand really helps me to put things into perspective: give others a break.\"",
    th: "มองสิ่งต่างๆ ในมุมมองที่กว้างขึ้นและสมดุล"
  },
  "leeway": {
    word: "leeway",
    ipa: "/ˈliː.weɪ/",
    pos: "noun",
    level: "C1",
    time: "20:56",
    turnId: "turn-53",
    cat: "communication",
    def: "The freedom, latitude, or margin allowed for discretionary action or minor deviations.",
    quote: "Louie (20:56): \"You're not a Vietnamese tourist, you're learning, and you should give others leeway.\"",
    th: "ความยืดหยุ่น / การผ่อนปรนให้โอกาส"
  },
  "give-someone-a-break": {
    word: "give someone a break",
    ipa: "/ɡɪv ˈsʌm.wʌn ə breɪk/",
    pos: "idiom",
    level: "B2",
    time: "20:56",
    turnId: "turn-53",
    cat: "idioms",
    def: "To cease criticizing, pressuring, or judging someone harshly.",
    quote: "Louie (20:56): \"You should give others leeway... you should give others a break.\"",
    th: "หยวนๆ ให้ / อย่าไปกดดันเขามาก"
  },
  "gross-anatomy": {
    word: "gross anatomy",
    ipa: "/ɡrəʊs əˈnæt.ə.mi/",
    pos: "noun (medicine)",
    level: "C1",
    time: "22:50",
    turnId: "turn-54",
    cat: "medical",
    def: "The study of macroscopic human anatomy visible to the unassisted naked eye via surgical dissection.",
    quote: "Worachon (22:50): \"In med school, especially the second year, we have gross anatomy and pharmacology to learn.\"",
    th: "มหกายวิภาคศาสตร์ (กายวิภาคระดับตาเปล่า)"
  },
  "pharmacology": {
    word: "pharmacology",
    ipa: "/ˌfɑː.məˈkɒl.ə.dʒi/",
    pos: "noun (medicine)",
    level: "C1",
    time: "22:50",
    turnId: "turn-54",
    cat: "medical",
    def: "The medical discipline studying biochemical drug mechanisms, interactions, dosages, and therapeutic toxicity.",
    quote: "Worachon (22:50): \"We have pharmacology to do, and the exams are very frequent.\"",
    th: "เภสัชวิทยา (วิชาว่าด้วยยาและฤทธิ์ของยา)"
  },
  "memory-consolidation": {
    word: "memory consolidation (sleep cycle)",
    ipa: "/ˈmem.ər.i kənˌsɒl.ɪˈdeɪ.ʃən/",
    pos: "noun (neuroscience)",
    level: "C2",
    time: "23:52",
    turnId: "turn-55",
    cat: "medical",
    def: "The neurological conversion of labile short-term memory traces into stable permanent neocortical storage during sleep.",
    quote: "Louie (23:52): \"In your sleep cycle, you put things to memory—transferring short-term to long-term storage.\"",
    th: "กระบวนการสร้างและจัดเก็บความจำระยะยาวระหว่างหลับ"
  },
  "balancing-act": {
    word: "balancing act",
    ipa: "/ˈbæl.ən.sɪŋ ækt/",
    pos: "idiom",
    level: "C1",
    time: "24:18",
    turnId: "turn-61",
    cat: "idioms",
    def: "A delicate, precarious compromise trying to satisfy competing, contradictory priorities.",
    quote: "Louie (24:18): \"You have to sleep to remember, but you have to study in the first place—it's a balancing act!\"",
    th: "การรักษาสมดุลท่ามกลางภาระหน้าที่อันหลากหลาย"
  },
  "trade-off": {
    word: "trade-off",
    ipa: "/ˈtreɪd.ɒf/",
    pos: "noun",
    level: "B2",
    time: "24:18",
    turnId: "turn-61",
    cat: "concepts",
    def: "A compromise whereby one must forfeit or diminish one desirable quality to secure another.",
    quote: "Louie (24:18): \"Your brain is still developing, so you need sleep... but it's a trade-off, you only have so much time.\"",
    th: "ข้อแลกเปลี่ยน / การยอมเสียอย่างหนึ่งเพื่อให้ได้อีกอย่าง"
  },
  "texture-art": {
    word: "texture art",
    ipa: "/ˈteks.tʃər ɑːt/",
    pos: "noun",
    level: "B2",
    time: "24:58",
    turnId: "turn-65",
    cat: "lifestyle",
    def: "Tactile artwork emphasizing three-dimensional surfaces, mixed impasto mediums, and soothing sensory engagement.",
    quote: "Worachon (24:58): \"I actually love planting plants and doing texture art... they switch my work off and relieve stress.\"",
    th: "ศิลปะพื้นผิวสัมผัส (งานศิลปะบำบัด)"
  },
  "revitalization": {
    word: "revitalization",
    ipa: "/riːˌvaɪ.təl.aɪˈzeɪ.ʃən/",
    pos: "noun",
    level: "C1",
    time: "28:02",
    turnId: "turn-71",
    cat: "lifestyle",
    def: "The infusion of fresh vigour, kinetic vitality, mental stimulation, and renewed dynamism.",
    quote: "Louie (28:02): \"Being around lots of people in a city revitalizes me... watching people trying to be the best version of themselves.\"",
    th: "การฟื้นฟูพลังชีวิตและจิตวิญญาณ"
  },
  "instill-a-drive": {
    word: "instill a drive",
    ipa: "/ɪnˈstɪl ə draɪv/",
    pos: "phrase",
    level: "C1",
    time: "28:02",
    turnId: "turn-71",
    cat: "concepts",
    def: "To implant, cultivate, or inspire a profound, relentless ambition and hunger for excellence.",
    quote: "Louie (28:02): \"It installs a drive... it is truly a joy to live among people that want to excel.\"",
    th: "ปลูกฝังแรงผลักดันและความมุ่งมั่นสู่ความเป็นเลิศ"
  },
  "solitude": {
    word: "solitude",
    ipa: "/ˈsɒl.ɪ.tjuːd/",
    pos: "noun",
    level: "C1",
    time: "30:02",
    turnId: "turn-77",
    cat: "lifestyle",
    def: "The peaceful, enriching condition of being alone without feeling desolate or lonely.",
    quote: "Louie (30:02): \"The good about nature is it does give you solitude... and breathing space to remember the bigger picture.\"",
    th: "ความสงบสันโดษอันรื่นรมย์"
  },
  "breathing-space": {
    word: "breathing space",
    ipa: "/ˈbriː.ðɪŋ speɪs/",
    pos: "idiom",
    level: "B2",
    time: "30:02",
    turnId: "turn-77",
    cat: "idioms",
    def: "A welcome opportunity or interval to rest, pause, regroup, and recover mental clarity.",
    quote: "Louie (30:02): \"Nature gives you breathing space so you don't take your ego so seriously.\"",
    th: "ช่วงเวลาพักหายใจ / พื้นที่ผ่อนคลาย"
  },
  "pain-receptor": {
    word: "pain receptor (nociceptor)",
    ipa: "/peɪn rɪˈsep.tər/",
    pos: "noun (neurobiology)",
    level: "C1",
    time: "33:02",
    turnId: "turn-81",
    cat: "medical",
    def: "A sensory nerve receptor specialized to transmit noxious signals of tissue threat or injury to the spinal cord and brain.",
    quote: "Worachon (33:02): \"Our brain doesn't have its own pain receptors, meaning a neurosurgeon can do surgery while you are awake.\"",
    th: "หน่วยรับความรู้สึกเจ็บปวด (Nociceptor)"
  },
  "awake-craniotomy": {
    word: "awake craniotomy (brain surgery)",
    ipa: "/əˈweɪk ˌkreɪ.niˈɒt.ə.mi/",
    pos: "noun (surgery)",
    level: "C2",
    time: "33:02",
    turnId: "turn-81",
    cat: "medical",
    def: "A neurosurgical procedure performed while the patient is conscious to map functional language and motor centers.",
    quote: "Worachon (33:02): \"The neurosurgeon can simply do surgery on your brain while you are still awake.\"",
    th: "การผ่าตัดเปิดกะโหลกศีรษะขณะผู้ป่วยรู้สึกตัว"
  },
  "occipital-nerve": {
    word: "occipital nerve",
    ipa: "/ɒkˈsɪp.ɪ.təl nɜːv/",
    pos: "noun (anatomy)",
    level: "C2",
    time: "34:15",
    turnId: "turn-87",
    cat: "medical",
    def: "Peripheral nerves originating from the cervical spinal cord branching over the posterior cranium, responsible for occipital headaches.",
    quote: "Worachon (34:15): \"It's the occipital nerve along the back of the skull... the pain you feel on your head actually comes from these nerves.\"",
    th: "เส้นประสาทท้ายทอย (Occipital nerve)"
  },
  "dura-mater": {
    word: "dura mater (meninges)",
    ipa: "/ˌdjʊə.rə ˈmeɪ.tər/",
    pos: "noun (anatomy)",
    level: "C2",
    time: "36:47",
    turnId: "turn-97",
    cat: "medical",
    def: "The tough, fibrous, densely innervated outermost meningeal membrane enveloping the brain and spinal cord.",
    quote: "Worachon (36:47): \"Is it like some dura mater?\" Louie: \"Yes, the brain causes dehydration and tugs on the layers connected to the skull!\"",
    th: "เยื่อดูรา (เยื่อหุ้มสมองชั้นนอกสุดที่รับความเจ็บปวด)"
  },
  "brain-shrinkage": {
    word: "brain shrinkage (dehydration tension)",
    ipa: "/breɪn ˈʃrɪŋ.kɪdʒ/",
    pos: "noun (medical)",
    level: "C1",
    time: "37:03",
    turnId: "turn-98",
    cat: "medical",
    def: "Transient volumetric contraction of cranial parenchyma resulting from severe cellular fluid depletion, exerting mechanical traction on the meninges.",
    quote: "Louie (37:03): \"Alcohol causes dehydration and brain shrinkage, which tugs on the layers connected to the skull.\"",
    th: "การหดตัวของเนื้อเยื่อสมองจากภาวะขาดน้ำ"
  },
  "pyloric-sphincter": {
    word: "pyloric sphincter (stomach closure)",
    ipa: "/paɪˈlɒr.ɪk ˈsfɪŋk.tər/",
    pos: "noun (physiology)",
    level: "C2",
    time: "39:42",
    turnId: "turn-104",
    cat: "medical",
    def: "The muscular ring regulating the propulsion of chyme from the gastric pylorus into the duodenum of the small intestine.",
    quote: "Louie (39:42): \"As soon as you put food in, the stomach closes the entrance to the small intestine, slowing alcohol absorption!\"",
    th: "กล้ามเนื้อหูรูดกระเพาะอาหารส่วนปลาย (Pyloric sphincter)"
  },
  "work-life-balance": {
    word: "work-life balance",
    ipa: "/ˌwɜːk.laɪf ˈbæl.əns/",
    pos: "noun",
    level: "B2",
    time: "41:19",
    turnId: "turn-106",
    cat: "lifestyle",
    def: "An equitable distribution between professional career duties and domestic, familial, and personal restorative life.",
    quote: "Louie (41:19): \"My new boss in Munich said 'No! You work maximum 40 hours—you need work-life balance, this is the law.'\"",
    th: "สมดุลระหว่างชีวิตและการทำงาน"
  },
  "statutory-limit": {
    word: "statutory limit",
    ipa: "/ˈstætʃ.ə.tər.i ˈlɪm.ɪt/",
    pos: "noun (law)",
    level: "C1",
    time: "41:19",
    turnId: "turn-106",
    cat: "lifestyle",
    def: "A legally enforced maximum boundary established by national statute that employers cannot breach.",
    quote: "Louie (41:19): \"You cannot destroy your body and mind just because of work... it was the law in Germany.\"",
    th: "ขีดจำกัดสูงสุดตามที่กฎหมายกำหนด"
  },
  "fundamental-research": {
    word: "fundamental research",
    ipa: "/ˌfʌn.dəˈmen.təl rɪˈsɜːtʃ/",
    pos: "noun (science)",
    level: "C1",
    time: "45:19",
    turnId: "turn-107",
    cat: "science",
    def: "Pure, curiosity-driven scientific investigation conducted to unravel fundamental natural principles without immediate commercial pressure.",
    quote: "Worachon (45:19): \"At UCLA they do fundamental things to solve fundamental unknowns... turning something from impossible to possible.\"",
    th: "การวิจัยพื้นฐานเพื่อความรู้บริสุทธิ์"
  },
  "fiber-optics": {
    word: "fiber optics",
    ipa: "/ˌfaɪ.bər ˈɒp.tɪks/",
    pos: "noun (physics)",
    level: "B2",
    time: "47:39",
    turnId: "turn-108",
    cat: "science",
    def: "Optical technology transmitting information as modulated pulses of light along ultra-pure silica glass strands.",
    quote: "Louie (47:39): \"They knew about lasers, but didn't know how to keep light inside... until they designed fiber optics.\"",
    th: "เส้นใยแก้วนำแสง"
  },
  "total-internal-reflection": {
    word: "total internal reflection",
    ipa: "/ˈtəʊ.təl ɪnˈtɜː.nəl rɪˈflek.ʃən/",
    pos: "noun (optics)",
    level: "C1",
    time: "49:12",
    turnId: "turn-110",
    cat: "science",
    def: "The complete optical reflection of a light beam at the boundary between a denser core and rarer cladding when the angle exceeds the critical angle.",
    quote: "Louie (49:12): \"Because the density of the outside cladding is different, light doesn't diffract out—it bounces and stays inside!\"",
    th: "การสะท้อนกลับหมดของแสงในตัวกลาง"
  },
  "single-mode": {
    word: "single-mode (fiber)",
    ipa: "/ˈsɪŋ.ɡəl məʊd/",
    pos: "noun (telecommunications)",
    level: "C1",
    time: "49:12",
    turnId: "turn-110",
    cat: "science",
    def: "Optical fiber designed with a microscopic core diameter allowing only one light wave mode to propagate over immense distances.",
    quote: "Louie (49:12): \"In networking, we call this single-mode fiber optics.\"",
    th: "เส้นใยแก้วนำแสงโหมดเดี่ยว (Single-mode fiber)"
  },
  "spontaneous": {
    word: "spontaneous",
    ipa: "/spɒnˈteɪ.ni.əs/",
    pos: "adjective",
    level: "B2",
    time: "54:07",
    turnId: "turn-117",
    cat: "everyday",
    def: "Arising from sudden natural impulse or unplanned circumstance rather than premeditated intention.",
    quote: "Louie (54:07): \"There are so many spontaneous events during the day when you're at university.\"",
    th: "เกิดขึ้นโดยไม่คาดหมาย / เกิดขึ้นตามธรรมชาติ"
  },
  "top-of-ones-field": {
    word: "top of one's field",
    ipa: "/tɒp əv wʌnz fiːld/",
    pos: "idiom / phrase",
    level: "C1",
    time: "57:03",
    turnId: "turn-120",
    cat: "idioms",
    def: "The absolute pinnacle, highest stature, or greatest level of achievement in a professional specialization.",
    quote: "Louie (57:03): \"To get to be at the top of your field and specialty... you can definitely do it, enjoy the process!\"",
    th: "จุดสูงสุดในสายอาชีพ / ยอดฝีมือระดับแนวหน้า"
  },
  "wham-bam-thank-you-mam": {
    word: "wham, bam, thank you, ma'am",
    ipa: "/wæm bæm ˌθæŋk juː ˈmæm/",
    pos: "idiom (British informal)",
    level: "C2",
    time: "01:00:10",
    turnId: "turn-126",
    cat: "idioms",
    def: "Completed with lightning speed, brisk decisiveness, and immediate straightforwardness.",
    quote: "Louie (01:00:10): \"Next lesson on Sunday will be very fast—as we say in English, wham, bam, thank you, ma'am!\"",
    th: "ทำอย่างรวดเร็วฉับไว / เสร็จสิ้นในพริบตาเดียว"
  }
};

console.log(`Loaded ${Object.keys(VOCAB_DB).length} vocabulary terms.`);

// Helper functions for inline generation
function v(key, displayWord) {
  const item = VOCAB_DB[key];
  const label = displayWord || (item ? item.word : key);
  return `<span class="vocab-mark" data-vkey="${key}" onclick="inspectVocab('${key}')">${label}</span>`;
}

function fixBadge(actualSpoken, rawMishearing) {
  return `<span class="asr-fix-pill" title="Note-taker misheard '${actualSpoken}' as '${rawMishearing}'">✨ Fixed: "${actualSpoken}" <span class="text-stone-400 font-normal">("${rawMishearing}")</span></span>`;
}

// -----------------------------------------------------------------------------
// 2. ASR FIXES DATA LOG
// -----------------------------------------------------------------------------
const ASR_FIXES = [
  {
    time: "00:29",
    turnId: "turn-6",
    speaker: "Worachon",
    corrected: "วันปิยมหาราช (Chulalongkorn Memorial Day)",
    misheard: "ปิยมหาราชเดย์",
    context: "Note-taker captured phonetics as English loanword 'เดย์' rather than the formal Thai national holiday 'วันปิยมหาราช'."
  },
  {
    time: "01:49",
    turnId: "turn-13",
    speaker: "Louie",
    corrected: "pith helmet",
    misheard: "pit hat",
    context: "Louie showed royal portraits wearing the tropical colonial pith helmet (หมวกกะโล่); ASR heard 'pit hat'."
  },
  {
    time: "03:00",
    turnId: "turn-16",
    speaker: "Louie",
    corrected: "Class aids",
    misheard: "Class A's",
    context: "Louie opening his teaching folder 'D:\\Documents\\class aids'; note-taker transcribed 'Class A's'."
  },
  {
    time: "04:22",
    turnId: "turn-19",
    speaker: "Worachon",
    corrected: "nerdier",
    misheard: "dirtier (Louie's query)",
    context: "Worachon said his medical dorm was less 'nerdy' than expected; Louie playfully double-checked if he said 'dirtier'."
  },
  {
    time: "05:50",
    turnId: "turn-23",
    speaker: "Louie",
    corrected: "Harley-Davidson",
    misheard: "Hardy-Davidson",
    context: "Louie reminiscing about motorbike friends in Lamphun; ASR missed the 'l' in Harley."
  },
  {
    time: "17:00",
    turnId: "turn-44",
    speaker: "Worachon",
    corrected: "teacher in high school",
    misheard: "T-shirt in high school",
    context: "Worachon crediting his inspiring science teacher; speech recognition bizarrely heard 'T-shirt'."
  },
  {
    time: "22:50",
    turnId: "turn-54",
    speaker: "Worachon",
    corrected: "gross anatomy",
    misheard: "grass anatomy",
    context: "Second-year medical curriculum study of macroscopic anatomy (gross anatomy); note-taker transcribed 'grass'."
  },
  {
    time: "28:21",
    turnId: "turn-71",
    speaker: "Louie",
    corrected: "calms / cleanses my soul",
    misheard: "commends my soul",
    context: "Louie describing the pastoral countryside peace; automated note-taker substituted archaic 'commends'."
  },
  {
    time: "30:02",
    turnId: "turn-77",
    speaker: "Louie",
    corrected: "stasis / an oasis in places",
    misheard: "atheist in places",
    context: "Phonetic distortion when Louie discussed peaceful countryside stillness."
  },
  {
    time: "33:02",
    turnId: "turn-81",
    speaker: "Worachon",
    corrected: "pain receptors (nociceptors)",
    misheard: "pain receptions",
    context: "Discussing awake neurosurgery; ASR slipped 'receptions' instead of biological 'receptors'."
  },
  {
    time: "36:47",
    turnId: "turn-97",
    speaker: "Worachon",
    corrected: "dura mater",
    misheard: "some dura mater or",
    context: "Worachon accurately diagnosing the pain-sensitive cranial meningeal layer in tension headaches."
  },
  {
    time: "45:30",
    turnId: "turn-107",
    speaker: "Worachon",
    corrected: "UCLA campus",
    misheard: "you see how a campus",
    context: "Worachon describing his trip to Los Angeles visiting University of California, Los Angeles."
  },
  {
    time: "46:40",
    turnId: "turn-107",
    speaker: "Worachon",
    corrected: "computer chip / microchip",
    misheard: "computer ship",
    context: "Discussing physics breakthroughs and silicon microprocessors; note-taker misheard 'ship'."
  },
  {
    time: "54:35",
    turnId: "turn-118",
    speaker: "Louie",
    corrected: "making money",
    misheard: "being money",
    context: "Louie clarifying that his Vietnamese language goals are driven by business fluency rather than just cash."
  },
  {
    time: "56:56",
    turnId: "turn-119",
    speaker: "Worachon",
    corrected: "pinnacle of my field / top of my specialty",
    misheard: "top point of my space",
    context: "Worachon expressing his ultimate professional vision to reach the global summit of clinical medicine."
  },
  {
    time: "58:33",
    turnId: "turn-124",
    speaker: "Louie",
    corrected: "influenza (the flu)",
    misheard: "influencer",
    context: "Louie referencing Worachon's previous lesson note where the speech-to-text had humorously heard 'influencer'."
  }
];

// -----------------------------------------------------------------------------
// 3. STUDENT NATURAL STRENGTHS & PHRASING POLISHES
// -----------------------------------------------------------------------------
const NATURAL_STRENGTHS = [
  {
    quote: "Our brain doesn't have its own pain receptor, meaning that the neurosurgeon can simply do a surgery on your brain while you are still awake.",
    time: "33:02",
    turnId: "turn-81",
    praise: "Exceptional clinical fluency and clear sentence rhythm. Worachon accurately synthesized complex neuroscience into compelling conversational English."
  },
  {
    quote: "Is it like some dura mater?",
    time: "36:47",
    turnId: "turn-97",
    praise: "Sharp medical recall! Instantly identifying the tough, densely innervated meningeal membrane responsible for dehydration traction headaches."
  },
  {
    quote: "They actually do some fundamental things to solve some fundamental unknown... turning something from impossible to possible.",
    time: "45:19",
    turnId: "turn-107",
    praise: "Eloquent philosophical contrast between applied instant-impact research and deep, curiosity-driven pure science."
  },
  {
    quote: "I think like sleep is a very good process for our brain recovery and for the brain to get things into the structured one.",
    time: "24:58",
    turnId: "turn-65",
    praise: "Natural, confident expression of neural memory consolidation and mental recovery through restorative sleep."
  },
  {
    quote: "Seeing someone trying to be the best version of themselves is very enjoyable.",
    time: "28:58",
    turnId: "turn-72",
    praise: "Warm, mature emotional intelligence reflecting on the motivating energy of ambitious city dwellers."
  },
  {
    quote: "I would love to explain my thoughts in a very proper way in English... to get to the top of my field.",
    time: "56:10",
    turnId: "turn-119",
    praise: "Inspiring clarity of purpose and resolute professional ambition to communicate medical breakthroughs on the world stage."
  }
];

const PHRASING_POLISHES = [
  {
    spoken: "comparing to the years is been built",
    time: "04:22",
    turnId: "turn-19",
    polished: "considering how long ago it was built / relative to when it was constructed",
    why: "Use 'considering how long ago' or 'relative to its age' when evaluating a physical building's condition against its architectural era."
  },
  {
    spoken: "It can just went to the teacher and asked them",
    time: "06:42",
    turnId: "turn-27",
    polished: "I could just go to the teacher and ask them",
    why: "Modal auxiliaries ('could / can') always take the bare infinitive ('go', not past tense 'went')."
  },
  {
    spoken: "it has to be like back into my high school era",
    time: "45:19",
    turnId: "turn-107",
    polished: "dating back to my high school days / back in my high school years",
    why: "While 'era' is popular online, native speakers naturally speak of their 'high school days' or 'college years'."
  },
  {
    spoken: "we have to lose our time... spend our time into studying rather than sleeping",
    time: "22:50",
    turnId: "turn-54",
    polished: "we have to dedicate our nights to studying / trade our sleep for study hours",
    why: "Instead of 'spend into', use 'dedicate time to' or express the conscious sacrifice with 'trade sleep for study hours'."
  },
  {
    spoken: "it is totally changed my mind",
    time: "45:19",
    turnId: "turn-107",
    polished: "it completely shifted my perspective / it totally changed my mind",
    why: "Present perfect active takes 'has': 'it has totally changed my mind' or simple past: 'it completely transformed my perspective'."
  },
  {
    spoken: "get into the top point of my space",
    time: "56:10",
    turnId: "turn-119",
    polished: "reach the pinnacle of my field / reach the very top of my specialty",
    why: "'Pinnacle of my field' or 'top of my specialty' captures the prestigious, international summit of medical achievement."
  }
];

// -----------------------------------------------------------------------------
// 4. TRANSCRIPT TURNS BUILDER
// -----------------------------------------------------------------------------
const TRANSCRIPT_TURNS = [
  // CHAPTER I
  {
    id: "turn-1",
    chapterId: "chap-1",
    chapterTitle: "Chapter I • Royal Ceremonial Attire, Chulalongkorn Day & The Connect 4 Grid (00:00 – 04:12)",
    speaker: "Louie",
    time: "00:00",
    html: `So I was late to the last lesson, very slow, so I was put back—sorry about that. And how are you today? How are you feeling, better?`
  },
  {
    id: "turn-2",
    speaker: "Worachon",
    time: "00:11",
    html: `Yeah, yeah, I'm feeling better!`
  },
  {
    id: "turn-3",
    speaker: "Louie",
    time: "00:12",
    html: `Good!`
  },
  {
    id: "turn-4",
    speaker: "Worachon",
    time: "00:13",
    html: `Today is my rest day. It's actually a vacation... like, it's actually a national holiday here in Thailand, so I can take a rest.`
  },
  {
    id: "turn-5",
    speaker: "Louie",
    time: "00:24",
    html: `Oh! What kind of national holiday is it?`
  },
  {
    id: "turn-6",
    speaker: "Worachon",
    time: "00:29",
    html: `Um, it's called ${fixBadge("วันปิยมหาราช", "ปิยมหาราชเดย์")}—${v("chulalongkorn-day", "Chulalongkorn Day")}. It's a memorial day for a previous king.`
  },
  {
    id: "turn-7",
    speaker: "Louie",
    time: "01:07",
    html: `When I'm in Thailand and I see the pictures of your king and your queen, right? Your queen as well?`
  },
  {
    id: "turn-8",
    speaker: "Worachon",
    time: "01:18",
    html: `Oh, yeah, yeah.`
  },
  {
    id: "turn-9",
    speaker: "Louie",
    time: "01:19",
    html: `They look strong... they look ${v("dignified", "dignified")}. Whereas in England, they look old—they look like they're going to fall over! But your royal family's pictures are very nice. They stand at an angle like this, and they have their ${fixBadge("pith helmet", "pit hat")}. Do you know what a ${v("pith-helmet", "pith helmet")} is?`
  },
  {
    id: "turn-10",
    speaker: "Worachon",
    time: "01:48",
    html: `No.`
  },
  {
    id: "turn-11",
    speaker: "Louie",
    time: "01:49",
    html: `I'll show you. It's a colonial hat for the tropics. As soon as you see it, you'll recognize it—I'll share my screen now.`
  },
  {
    id: "turn-12",
    speaker: "Worachon",
    time: "02:13",
    html: `Oh, I see!`
  },
  {
    id: "turn-13",
    speaker: "Louie",
    time: "02:16",
    html: `Yeah, your king wears this ${v("pith-helmet", "pith helmet")} and your queen in pictures. I think he looks very nice in it, a very dignified look. Okay, let's get rid of this and do a quick warm-up! Let me grab ${fixBadge("Class aids", "Class A's")} from my files... do you know Connect 4?`
  },
  {
    id: "turn-14",
    speaker: "Worachon",
    time: "03:37",
    html: `Uh, no... oh, Connect 4, yes! I know this game.`
  },
  {
    id: "turn-15",
    speaker: "Louie",
    time: "03:53",
    html: `You have to get 4 in a row. What column would you like: 1, 2, 3, 4, 5, or 6?`
  },
  {
    id: "turn-16",
    speaker: "Worachon",
    time: "04:11",
    html: `3.`
  },

  // CHAPTER II
  {
    id: "turn-17",
    chapterId: "chap-2",
    chapterTitle: "Chapter II • Medical Dormitories, Pure Joy in Science & The Meme Evolution (04:13 – 13:46)",
    speaker: "Louie",
    time: "04:13",
    html: `Column 3: <em>What's a place that completely surprised you, totally different from what you expected?</em>`
  },
  {
    id: "turn-18",
    speaker: "Worachon",
    time: "04:22",
    html: `I would say it's my faculty dorm—the Faculty of Medicine dorm. At first I thought it would be much more ${v("nerdy", "nerdy")}, but it's actually good ${fixBadge("considering when it was built", "comparing to the years is been built")}.`
  },
  {
    id: "turn-19",
    speaker: "Louie",
    time: "04:47",
    html: `So you thought it was going to be ${fixBadge("nerdier", "dirtier")}?`
  },
  {
    id: "turn-20",
    speaker: "Worachon",
    time: "04:50",
    html: `Yeah, yeah!`
  },
  {
    id: "turn-21",
    speaker: "Louie",
    time: "04:51",
    html: `Fair enough, fair enough! But it's ${v("adequate", "adequate")}. Okay, it's my go, I'm going number 4: <em>What's one destination that ${v("exceed-expectations", "exceeded all your expectations")} and what made it special?</em> You're not going to believe my answer: not Bangkok, but <strong>Lamphun</strong>! In Lamphun the people, the food, the reception—I made so many friends with the ${fixBadge("Harley-Davidson", "Hardy-Davidson")} community there. It completely ${v("blow-ones-mind", "blew my mind")}. Now I want to learn Thai so I can speak with my friends in Lamphun! Which number would you like next?`
  },
  {
    id: "turn-22",
    speaker: "Worachon",
    time: "06:30",
    html: `Number 6, please.`
  },
  {
    id: "turn-23",
    speaker: "Louie",
    time: "06:32",
    html: `Number 6: <em>When did you last do something ${v("purely-for-the-joy-of-it", "purely for the joy of it")}, with no goal in mind?</em>`
  },
  {
    id: "turn-24",
    speaker: "Worachon",
    time: "06:42",
    html: `The last time I did something just for the joy of it was back in high school. There was no need to set a goal. If I had a scientific question in mind, ${fixBadge("I could just go to the teacher", "It can just went to the teacher")} and they would give me permission to join the lab just to solve my ${v("scientific-curiosity", "curiosity")}. There was no need to publish, no requirement to end the project—unlike now where everything needs a set goal to get permission.`
  },
  {
    id: "turn-25",
    speaker: "Louie",
    time: "07:48",
    html: `It's your own personal ${v("academic-exploration", "academic exploration")}. You don't have to learn it for a grade—you're just learning for the joy of learning. That truly is a gift you have. Now my turn, number 3: <em>What's an opinion or belief you hold that most people around you don't share?</em> I believe social media has a fatal problem: <strong>we do not have a garbage can</strong>. Anyone can post on YouTube or Facebook because there's no ${v("barrier-to-entry", "barrier to entry")} and no ${v("gatekeeper", "gatekeepers")}. Everything is saved, creating a sea of garbage. But not everything should be saved! Do you know Richard Dawkins?`
  },
  {
    id: "turn-26",
    speaker: "Worachon",
    time: "09:55",
    html: `No.`
  },
  {
    id: "turn-27",
    speaker: "Louie",
    time: "09:56",
    html: `He is an ${v("evolutionary-biologist", "evolutionary biologist")} who wrote <em>The Selfish Gene</em> and <em>The God Delusion</em>. In the 70s, he coined the word ${v("meme", "meme")}. He explained that just as genes go through ${v("natural-selection", "natural selection")}, ideas and memes used to go through natural selection too. Bad ideas used to disappear. But on the internet today, even bad ideas never disappear. The internet's greatest gift is also our curse.`
  },
  {
    id: "turn-28",
    speaker: "Worachon",
    time: "12:11",
    html: `Number 4.`
  },
  {
    id: "turn-29",
    speaker: "Louie",
    time: "12:13",
    html: `Number 4: <em>If you could spend a whole year mastering any one skill, what would it be and why?</em>`
  },
  {
    id: "turn-30",
    speaker: "Worachon",
    time: "12:22",
    html: `Obviously English communication skill. In my medical specialty it takes much longer, but in order to speak to the world and convey my opinions to the world, English is a very important skill to have.`
  },

  // CHAPTER III
  {
    id: "turn-31",
    chapterId: "chap-3",
    chapterTitle: "Chapter III • Early Mentors, Uncle Steve's Room & Alpine Vistas (13:47 – 24:43)",
    speaker: "Louie",
    time: "13:09",
    html: `To ${v("convey", "convey your ideas")} to the world! That is a huge challenge, because to ${v("think-abstractly", "think abstractly")} and see the bigger picture in another language is truly a skill you need for ${v("peer-reviewed-paper", "scientific papers")}. If you write in English, you want your skill to explore and convey ideas just as comfortably as Thai.`
  },
  {
    id: "turn-32",
    speaker: "Worachon",
    time: "13:46",
    html: `Papers, yes.`
  },
  {
    id: "turn-33",
    speaker: "Louie",
    time: "14:26",
    html: `My turn on number 2: <em>Who had the biggest influence on your passions?</em> For me, my Uncle Steve. He was so mean, so ${v("ruthless", "ruthless")}, so goal-orientated, but ${v("unapologetically", "unapologetically")} smart! He designed military ${v("guidance-system", "guidance systems")} for missiles. In his room at my grandparents' house were books from all over the world. From age 5, before the internet, I learned to code, do electronics, and networking just by ${v("consume-information", "consuming the information")} in that room. His wanderlust in Asia inspired me. May I ask who had the biggest influence on you?`
  },
  {
    id: "turn-34",
    speaker: "Worachon",
    time: "17:00",
    html: `Actually, ${fixBadge("my teacher in high school", "my T-shirt in high school")}. I didn't originally want to be a doctor, but my high school teacher loved to invent things and put physics and chemistry into real-world solutions. I would love to bring that into my med school study and find projects that ${v("fulfill-a-passion", "fulfill my childhood passion")}.`
  },
  {
    id: "turn-35",
    speaker: "Louie",
    time: "18:09",
    html: `Your childhood passion of using science to invent solutions. On Monday I have a meeting with doctors who are going to tell me what company makes those orthopedic materials in Thailand, which is really cool. Where would you like to go next?`
  },
  {
    id: "turn-36",
    speaker: "Worachon",
    time: "18:43",
    html: `Um, 5.`
  },
  {
    id: "turn-37",
    speaker: "Louie",
    time: "18:45",
    html: `5: <em>Describe your ideal travel experience. Who are you with and where are you going?</em>`
  },
  {
    id: "turn-38",
    speaker: "Worachon",
    time: "18:55",
    html: `I would love to go to Switzerland with my parents—both my dad and mom. I would love it to be a month off where we don't have to do any work or coursework, just enjoy traveling.`
  },
  {
    id: "turn-39",
    speaker: "Louie",
    time: "19:23",
    html: `Switzerland is beautiful! The word 'fresh' describes it—it is unbelievably ${v("crisp-air", "crisp")}, the air and water are pristine. In Thailand you can see the wide ${v("vista", "vista")}, but Switzerland is surrounded by high mountains like a giant ${v("basin", "basin")}, as if the land is being cradled in hands. You will love it.`
  },
  {
    id: "turn-40",
    speaker: "Louie",
    time: "20:56",
    html: `My go, number 4: <em>What's something you've been slowly getting better at lately?</em> For me, I've been learning Vietnamese, but recently I became too Vietnamese! In Vietnam there's a strict hierarchy where everyone knows their role at the dinner table. When I came to Thailand, I was getting too ${v("rigid", "rigid")}. My Thai friends chilled me out. Being in Thailand helps me ${v("put-into-perspective", "put things into perspective")}: you should give others ${v("leeway", "leeway")} and ${v("give-someone-a-break", "give others a break")}. What about you?`
  },
  {
    id: "turn-41",
    speaker: "Worachon",
    time: "22:50",
    html: `I think I've been getting better at sleeping late! Before this, I went to bed very early. But after entering med school, especially second year, we have ${v("gross-anatomy", "gross anatomy")} ${fixBadge("(gross anatomy)", "(grass anatomy)")} and ${v("pharmacology", "pharmacology")}. The exams are frequent, so ${fixBadge("we dedicate our nights to studying", "we have to spend our time into studying")} rather than sleeping.`
  },
  {
    id: "turn-42",
    speaker: "Louie",
    time: "23:52",
    html: `You have to be careful, because during your ${v("memory-consolidation", "sleep cycle")} your brain consolidates memory from short-term to long-term! It's a ${v("balancing-act", "balancing act")} and a difficult ${v("trade-off", "trade-off")} when your brain is still developing.`
  },

  // CHAPTER IV
  {
    id: "turn-43",
    chapterId: "chap-4",
    chapterTitle: "Chapter IV • Decompressing Minds, Creative Art & Urban Energy vs Solitude (24:44 – 32:44)",
    speaker: "Worachon",
    time: "24:44",
    html: `It's my turn, number 2.`
  },
  {
    id: "turn-44",
    speaker: "Louie",
    time: "24:51",
    html: `Number 2: <em>How do you switch off from work and stress and recharge creatively?</em>`
  },
  {
    id: "turn-45",
    speaker: "Worachon",
    time: "24:58",
    html: `I love growing plants and doing ${v("texture-art", "texture art")}. These therapeutic activities switch my work off and relieve stress. And simply getting enough sleep—sleep is an essential process for brain recovery and organizing thoughts into a structured state.`
  },
  {
    id: "turn-46",
    speaker: "Louie",
    time: "25:58",
    html: `For me, I love movies. In four weeks, I'm heading to the film festival at the universities in Hanoi. Other people's creativity inspires me and refreshes my own drive. Now my turn, number 3: <em>How do you feel in nature versus in a city? Which recharges you more?</em>`
  },
  {
    id: "turn-47",
    speaker: "Louie",
    time: "28:02",
    html: `Being in a city recharges me more. Being around people's ambition ${v("revitalization", "revitalizes")} me and ${v("instill-a-drive", "instills a drive")}. In the countryside I can get lazy. But nature does offer ${v("solitude", "solitude")} and ${v("breathing-space", "breathing space")} to remember the bigger picture and not take one's ego so seriously. How about you?`
  },
  {
    id: "turn-48",
    speaker: "Worachon",
    time: "28:58",
    html: `I feel the same way—I love the word ${v("revitalization", "revitalization")}. Seeing someone trying to be the best version of themselves is very enjoyable. But having grown up in rural Thailand, I also appreciate the way people live in the countryside.`
  },

  // CHAPTER V
  {
    id: "turn-49",
    chapterId: "chap-5",
    chapterTitle: "Chapter V • The Brain's Pain Paradox, Alcohol Physiology & German Work-Life Balance (32:45 – 45:18)",
    speaker: "Worachon",
    time: "32:45",
    html: `Number 5.`
  },
  {
    id: "turn-50",
    speaker: "Louie",
    time: "32:48",
    html: `Number 5: <em>What's the most interesting or surprising thing you've learned in the past year?</em>`
  },
  {
    id: "turn-51",
    speaker: "Worachon",
    time: "33:02",
    html: `One fact that really surprised me is that our brain doesn't have its own ${v("pain-receptor", "pain receptors")}. This means a neurosurgeon can perform an ${v("awake-craniotomy", "awake surgery on your brain")} while you are still fully conscious!`
  },
  {
    id: "turn-52",
    speaker: "Louie",
    time: "33:34",
    html: `Fascinating! So why do people get headaches?`
  },
  {
    id: "turn-53",
    speaker: "Worachon",
    time: "34:15",
    html: `The pain comes from the nerves outside—like the ${v("occipital-nerve", "occipital nerve")} along the back of the skull. Different headache types originate from these surrounding nerves and vascular mechanisms.`
  },
  {
    id: "turn-54",
    speaker: "Louie",
    time: "35:01",
    html: `Do you know why alcohol causes hangovers? In England running cocktail bars, I had to undergo strict licensing training. Alcohol causes dehydration and ${v("brain-shrinkage", "brain shrinkage")}, which pulls on the connecting tissue layers.`
  },
  {
    id: "turn-55",
    speaker: "Worachon",
    time: "36:47",
    html: `Is it like the ${v("dura-mater", "dura mater")}?`
  },
  {
    id: "turn-56",
    speaker: "Louie",
    time: "37:03",
    html: `Exactly! The dehydrated brain shrinks and tugs mechanically on the ${v("dura-mater", "dura mater layers")} anchored to the skull. And where is alcohol absorbed? People think the stomach, but it's mostly absorbed in the small intestine. When you eat food, the ${v("pyloric-sphincter", "stomach entrance closes")}, slowing down the rate of alcohol passing into the small intestine!`
  },
  {
    id: "turn-57",
    speaker: "Louie",
    time: "41:19",
    html: `Number 2: <em>Has traveling ever completely changed your perspective?</em> When I was young in England, I worked 100 hours a week without sleeping. When I transferred to Munich, Germany, my new boss strictly stopped me: 'No! You work a maximum of 40 hours—this is the ${v("statutory-limit", "law")}. You must have ${v("work-life-balance", "work-life balance")}.' Seeing my German coworkers have rich family lives changed me forever. How about you?`
  },

  // CHAPTER VI
  {
    id: "turn-58",
    chapterId: "chap-6",
    chapterTitle: "Chapter VI • UCLA Fundamental Research, Fiber Optics & Reaching the Top of the Field (45:19 – 01:00:36)",
    speaker: "Worachon",
    time: "45:19",
    html: `When I visited the ${fixBadge("UCLA campus", "you see how a campus")} in Los Angeles, I visited a lab and it completely changed my perspective on research. In Thailand, research is often expected to deliver an instant societal impact. But in the US and UK, they conduct ${v("fundamental-research", "fundamental research")} to solve basic unknowns—turning things from impossible to possible, like the physics behind the ${fixBadge("computer chip", "computer ship")}. That inspired me to learn for pure curiosity.`
  },
  {
    id: "turn-59",
    speaker: "Louie",
    time: "47:39",
    html: `That's a profound lesson. Like ${v("fiber-optics", "fiber optics")}! Scientists knew laser theory, but light would diffract out whenever the glass bent. Then they developed cladding with a different refractive index, enabling ${v("total-internal-reflection", "total internal reflection")} where the light bounces and stays trapped inside—what we call ${v("single-mode", "single-mode fiber")}. Basic research made global communication possible!`
  },
  {
    id: "turn-60",
    speaker: "Louie",
    time: "52:41",
    html: `Number 6: <em>What does a truly fulfilling day look like for you from start to finish?</em>`
  },
  {
    id: "turn-61",
    speaker: "Worachon",
    time: "52:55",
    html: `A perfect day is waking up with a fresh mind and heart, having my scheduled plans unfold smoothly, and going to bed early. Currently at university, so many ${v("spontaneous", "spontaneous events")} arise that I constantly have to readjust my schedule.`
  },
  {
    id: "turn-62",
    speaker: "Louie",
    time: "54:35",
    html: `My personal goal is to speak Vietnamese at a standard where I can navigate complex business culture and be respected by native speakers. What is your driving personal goal?`
  },
  {
    id: "turn-63",
    speaker: "Worachon",
    time: "56:10",
    html: `My big goal is communicating fluently in English so I can explain my medical and scientific thoughts with precision to the world, and ${fixBadge("reach the pinnacle of my field", "get into the top point of my space")}.`
  },
  {
    id: "turn-64",
    speaker: "Louie",
    time: "57:03",
    html: `To be at the ${v("top-of-ones-field", "top of your field")} and specialty! You can definitely do it—enjoy the process. And Connect 4: I win! Haha!`
  },
  {
    id: "turn-65",
    speaker: "Louie",
    time: "58:04",
    html: `I will send your notes over. Next lesson on Sunday is 30 minutes, so we'll do fast-response recall—as we say in English: ${v("wham-bam-thank-you-mam", "wham, bam, thank you, ma'am")}! Enjoy your holiday evening, and see you Sunday!`
  },
  {
    id: "turn-66",
    speaker: "Worachon",
    time: "01:00:34",
    html: `Thank you, Louie! See you Sunday, bye-bye!`
  }
];

// -----------------------------------------------------------------------------
// 5. EDITORIAL TOPICS (Tab 4)
// -----------------------------------------------------------------------------
const EDITORIAL_TOPICS = [
  {
    tag: "Evolutionary Biology & Digital Culture",
    time: "09:56",
    border: "border-t-autumn-500",
    title: "The Meme Evolution & The Internet's Missing Gatekeepers",
    p1: "In 1976, Oxford evolutionary biologist Richard Dawkins published <em>The Selfish Gene</em>, introducing the concept of a <strong>meme</strong>—a cultural replicator (an idea, melody, catchphrase, or fashion) undergoing natural selection analogous to genetic DNA.",
    p2: "As Louie observed during the Connect 4 dialogue, the pre-internet era featured organic friction and editorial gatekeepers that allowed unviable or harmful ideas to fade away. Today's digital web lacks a 'garbage can': algorithms preserve and amplify bad ideas indefinitely, bypassing natural intellectual selection."
  },
  {
    tag: "Neuroscience & Clinical Physiology",
    time: "33:02",
    border: "border-t-sage-500",
    title: "The Brain's Pain Paradox: Awake Craniotomies & Dura Mater Tension",
    p1: "One of medical science's most striking paradoxes is that brain parenchyma entirely lacks nociceptors (pain receptors). Neurosurgeons routinely conduct <strong>awake craniotomies</strong>, conversing with patients while mapping eloquent language and motor cortices in real time without intracranial distress.",
    p2: "Why do headaches exist? As Worachon astutely noted, cranial pain originates extracranially via peripheral nerves (like the occipital nerve) and the richly innervated <strong>dura mater</strong>. In dehydration and hangovers, cellular shrinkage pulls mechanically on these sensitive anchoring meninges."
  },
  {
    tag: "Scientific Epistemology & Optics",
    time: "45:19",
    border: "border-t-autumn-500",
    title: "Fundamental Inquiry vs Instant Impact: From UCLA to Single-Mode Fiber",
    p1: "During his high school visit to UCLA laboratories, Worachon witnessed the profound dichotomy between applied research (pressured to deliver immediate economic utility) and <strong>fundamental research</strong> (probing pure scientific unknowns without immediate financial goals).",
    p2: "Louie illustrated this through the development of <strong>fiber optics</strong>: theoretical laser physics remained constrained until engineers designed glass cladding with differing refractive indices, creating <strong>total internal reflection</strong>. Curious, non-commercial inquiry laid the bedrock for all global modern communications."
  },
  {
    tag: "Comparative Sociology & Wellbeing",
    time: "41:19",
    border: "border-t-sage-500",
    title: "Work-Life Equilibrium Across Cultures: London, Munich & Bangkok",
    p1: "Louie shared his pivotal career transformation: moving from London's relentless 100-hour corporate grind to Munich, Germany, where statutory labor laws strictly capped work at 40 hours. Witnessing colleagues nurture vibrant family lives shattered the toxic illusion that perpetual exhaustion equates to merit.",
    p2: "Similarly, experiencing Thailand's relaxed warmth helped temper the rigid social hierarchies of Vietnam. Taking a step back provides the essential <strong>breathing space</strong> to calibrate priorities, foster emotional empathy, and build sustainable, high-performing careers."
  }
];

// -----------------------------------------------------------------------------
// 6. PRACTICE FLASHCARDS (Tab 5)
// -----------------------------------------------------------------------------
const FLASHCARDS = [
  {
    type: "British Spoken Idiom",
    front: "wham, bam, thank you, ma'am",
    ipa: "/wæm bæm ˌθæŋk juː ˈmæm/",
    example: "\"Sunday's 30-minute lesson will be very fast: wham, bam, thank you, ma'am!\"",
    back: "ทำอย่างรวดเร็วฉับไว / รวดเดียวจบโดยไม่เสียเวลา",
    origin: "A classic informal English expression denoting something executed swiftly, decisively, and with maximum efficiency."
  },
  {
    type: "Perspective Idiom",
    front: "put things into perspective",
    ipa: "/pʊt ˈθɪŋz ˈɪn.tu pəˈspek.tɪv/",
    example: "\"Being in Thailand really helps me put things into perspective: give others a break.\"",
    back: "มองสิ่งต่างๆ ในมุมมองที่กว้างขึ้นและสมดุล",
    origin: "Evaluating challenges relative to the broader picture rather than obsessing over minor irritations."
  },
  {
    type: "Colloquial Idiom",
    front: "blow one's mind",
    ipa: "/bləʊ wʌnz maɪnd/",
    example: "\"The warm hospitality in Lamphun completely blew my mind!\"",
    back: "ทำให้ทึ่ง / ประหลาดใจจนอึ้งไปเลย",
    origin: "Expressing overwhelming awe, pleasant shock, or admiration for an extraordinary experience."
  },
  {
    type: "Spoken Idiom",
    front: "give someone a break",
    ipa: "/ɡɪv ˈsʌm.wʌn ə breɪk/",
    example: "\"You're still learning the language, so give yourself a break!\"",
    back: "ผ่อนปรนให้ / อย่าไปกดดันหรือตำหนิตัวเองหรือคนอื่นมากเกินไป",
    origin: "Offering leniency, compassion, or stopping relentless criticism."
  },
  {
    type: "Lifestyle Phrase",
    front: "purely for the joy of it",
    ipa: "/ˈpjʊə.li fər ðə dʒɔɪ əv ɪt/",
    example: "\"In high school, I joined the laboratory purely for the joy of it, with no publication quotas.\"",
    back: "ทำด้วยความสุขใจล้วนๆ โดยไม่ต้องมีผลตอบแทนหรือเป้าหมายบังคับ",
    origin: "Engaging in an activity for intrinsic delight rather than external grades or profit."
  },
  {
    type: "Professional Idiom",
    front: "balancing act",
    ipa: "/ˈbæl.ən.sɪŋ ækt/",
    example: "\"Balancing sleep and grueling anatomy exams is a constant balancing act in medical school.\"",
    back: "การรักษาสมดุลท่ามกลางภาระหน้าที่หลายอย่าง",
    origin: "Metaphor from circus tightrope walkers managing precarious opposing forces."
  },
  {
    type: "Conceptual Term",
    front: "trade-off",
    ipa: "/ˈtreɪd.ɒf/",
    example: "\"Sacrificing sleep for higher exam scores is a dangerous trade-off.\"",
    back: "ข้อแลกเปลี่ยน / การยอมเสียอย่างหนึ่งเพื่อได้อีกอย่าง",
    origin: "An inevitable compromise where gaining one benefit requires forfeiting another."
  },
  {
    type: "Restorative Idiom",
    front: "breathing space",
    ipa: "/ˈbriː.ðɪŋ speɪs/",
    example: "\"Retreating to nature provides the breathing space needed to decompress.\"",
    back: "ช่วงเวลาหรือพื้นที่ให้ได้พักผ่อนหายใจ",
    origin: "A physical or mental pause allowing someone to recover equilibrium."
  },
  {
    type: "Ambition Idiom",
    front: "top of one's field",
    ipa: "/tɒp əv wʌnz fiːld/",
    example: "\"Mastering English communication will allow Worachon to reach the top of his field.\"",
    back: "จุดสูงสุดในสายอาชีพ / ยอดฝีมือระดับแนวหน้า",
    origin: "The highest attainable zenith in a professional discipline."
  },
  {
    type: "Formal Collocation",
    front: "exceed all expectations",
    ipa: "/ɪkˈsiːd ɔːl ˌek.spekˈteɪ.ʃənz/",
    example: "\"My journey to northern Thailand exceeded all my expectations.\"",
    back: "เกินความคาดหมาย / ยอดเยี่ยมกว่าที่คาดคิดไว้มาก",
    origin: "Surpassing anticipated thresholds in quality, warmth, or success."
  },
  {
    type: "Descriptive Adjective",
    front: "dignified",
    ipa: "/ˈdɪɡ.nɪ.faɪd/",
    example: "\"The royal portrait in ceremonial dress was remarkably dignified.\"",
    back: "สง่างาม / ภูมิฐานสมเกียรติ",
    origin: "Characterized by grave noble poise commanding instinctive respect."
  },
  {
    type: "Adjective",
    front: "spontaneous",
    ipa: "/spɒnˈteɪ.ni.əs/",
    example: "\"University life is filled with spontaneous events that alter your daily plan.\"",
    back: "เกิดขึ้นอย่างฉับพลันตามธรรมชาติ / ไม่ได้วางแผนไว้ล่วงหน้า",
    origin: "Occurring by natural impulse without premeditated scheduling."
  }
];

// -----------------------------------------------------------------------------
// 7. IDIOM GYM CHALLENGES (Scenario Matcher)
// -----------------------------------------------------------------------------
const IDIOM_CHALLENGES = [
  {
    id: 1,
    scenario: "You have a packed 30-minute study review where you intend to cover key concepts at lightning speed without any lingering small talk.",
    options: ["trade-off", "wham, bam, thank you, ma'am", "breathing space"],
    correct: "wham, bam, thank you, ma'am",
    explanation: "<strong>'Wham, bam, thank you, ma'am'</strong> perfectly captures a brisk, no-nonsense, ultra-rapid session delivered with maximum efficiency!"
  },
  {
    id: 2,
    scenario: "A friend is getting stressed over a minor scheduling glitch at work. You remind them that in five years this will not matter at all.",
    options: ["blow one's mind", "put things into perspective", "balancing act"],
    correct: "put things into perspective",
    explanation: "<strong>'Put things into perspective'</strong> means stepping back to assess the situation within a broader, calmer context."
  },
  {
    id: 3,
    scenario: "You decide to spend your Sunday afternoon painting or sketching purely because you enjoy the colors, with no intention of selling or showing it.",
    options: ["purely for the joy of it", "trade-off", "statutory limit"],
    correct: "purely for the joy of it",
    explanation: "<strong>'Purely for the joy of it'</strong> celebrates intrinsic delight without deadlines, grades, or financial motives."
  },
  {
    id: 4,
    scenario: "A medical resident is feeling guilty for making a minor clerical slip after working a 14-hour shift. A senior doctor encourages them to be kinder to themselves.",
    options: ["give someone a break", "exceed all expectations", "guidance system"],
    correct: "give someone a break",
    explanation: "<strong>'Give someone a break'</strong> means easing up on criticism and showing understanding during stressful periods."
  },
  {
    id: 5,
    scenario: "Juggling demanding laboratory experiments, clinical hospital rounds, and regular sleep feels like walking a tightrope where dropping one ball upsets everything.",
    options: ["dignified", "balancing act", "breathing space"],
    correct: "balancing act",
    explanation: "A <strong>'balancing act'</strong> describes juggling contradictory, demanding priorities to maintain stability."
  },
  {
    id: 6,
    scenario: "You aim to present your medical research at international symposiums so that your discoveries are recognized at the highest global levels.",
    options: ["top of one's field", "spontaneous", "wham, bam, thank you, ma'am"],
    correct: "top of one's field",
    explanation: "Reaching the <strong>'top of one's field'</strong> signifies reaching the preeminent pinnacle of your professional specialty."
  }
];

// -----------------------------------------------------------------------------
// 8. CONTEXT QUIZ (6 Questions)
// -----------------------------------------------------------------------------
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Why can neurosurgeons perform complex surgical operations on the brain while the patient is awake?",
    options: [
      "The brain tissue has no nociceptors (pain receptors) of its own.",
      "The skull prevents all electrical signals from reaching the neck.",
      "Alcohol in the bloodstream temporarily numbs intracranial nerves.",
      "The occipital nerve eliminates the need for anesthesia."
    ],
    correctIndex: 0,
    explanation: "Brain parenchyma contains no sensory pain receptors (nociceptors), permitting awake craniotomies to map critical speech and motor pathways."
  },
  {
    id: 2,
    question: "What actually generates the painful sensation in tension and dehydration headaches?",
    options: [
      "Direct swelling of the cerebral cortex.",
      "Traction and mechanical pulling on the dura mater and occipital nerves due to fluid loss.",
      "Instant digestion of alcohol inside the stomach lining.",
      "Lack of sensory gatekeepers inside the brainstem."
    ],
    correctIndex: 1,
    explanation: "Cranial pain stems from extracranial nerves and mechanical traction on the richly innervated dura mater as dehydrated brain tissue contracts."
  },
  {
    id: 3,
    question: "What distinction did Worachon observe between fundamental research and applied research during his UCLA visit?",
    options: [
      "Fundamental research focuses exclusively on pharmaceutical marketing.",
      "Applied research solves purely theoretical physics without instruments.",
      "Fundamental research solves basic unknowns to expand knowledge, whereas applied research targets immediate societal/economic impact.",
      "There is no difference between the two approaches in Western universities."
    ],
    correctIndex: 2,
    explanation: "Fundamental research unravels core natural unknowns (turning the impossible into the possible), while applied research focuses on immediate practical deliverables."
  },
  {
    id: 4,
    question: "What physical mechanism allows light to travel through optical fibers without escaping when the cable bends?",
    options: [
      "Single-mode diffraction through open glass pores.",
      "Total internal reflection caused by differing refractive indices between core and cladding.",
      "Spontaneous memory consolidation of light waves.",
      "High electrical voltage applied along the cable length."
    ],
    correctIndex: 1,
    explanation: "A higher refractive index core surrounded by lower index cladding creates total internal reflection, reflecting light back into the fiber core."
  },
  {
    id: 5,
    question: "What was Richard Dawkins' original definition of a 'meme' in 1976?",
    options: [
      "A funny picture with text shared on social media apps.",
      "A cultural unit of ideas or behaviors undergoing natural selection analogous to genes.",
      "An algorithm that gatekeeps internet servers.",
      "A medical term describing neural recovery during sleep."
    ],
    correctIndex: 1,
    explanation: "Dawkins defined a meme as a unit of cultural transmission (ideas, skills, tunes) that propagates and evolves through imitation and selection."
  },
  {
    id: 6,
    question: "What profound work-life revelation did Louie experience when transferring from England to Munich, Germany?",
    options: [
      "He had to work 120 hours a week to keep his visa.",
      "Strict 40-hour statutory laws prioritized rest and family life, proving overwork isn't the only path to excellence.",
      "His coworkers were not allowed to take annual vacations.",
      "Companies in Germany do not believe in productivity."
    ],
    correctIndex: 1,
    explanation: "German statutory labor limits capped work at 40 hours, opening Louie's eyes to the sustainable power of work-life balance."
  }
];

// -----------------------------------------------------------------------------
// 9. REFLECTION PROMPTS (Next Lesson)
// -----------------------------------------------------------------------------
const REFLECTION_PROMPTS = [
  {
    title: "The Rapid-Recall Mindset",
    prompt: "For Sunday's brisk 30-minute lesson ('wham, bam, thank you, ma'am'), what is one medical concept or case study you can summarize in under 90 seconds in clear English?"
  },
  {
    title: "Balancing Curiosity with Deadlines",
    prompt: "Reflecting on your UCLA visit, how can you maintain a sense of pure scientific joy and curiosity while managing the rigid demands and frequent exam cycles of medical school?"
  },
  {
    title: "Communicating on the Global Stage",
    prompt: "Louie shared his goal of achieving high-level cultural fluency in Vietnamese business. What specific clinical or academic milestones will mark your ascent to the top of your specialty?"
  }
];

console.log("Ready to generate HTML...");
module.exports = {
  VOCAB_DB,
  ASR_FIXES,
  NATURAL_STRENGTHS,
  PHRASING_POLISHES,
  TRANSCRIPT_TURNS,
  EDITORIAL_TOPICS,
  FLASHCARDS,
  IDIOM_CHALLENGES,
  QUIZ_QUESTIONS,
  REFLECTION_PROMPTS
};
