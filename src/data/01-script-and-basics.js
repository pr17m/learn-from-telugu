// Row format: [meaning, Telugu, Kannada, Tamil, optionalTamilReadingOverride]
// "|" inside Tamil text marks a compound boundary (invisible; only affects the Telugu-script reading).
const SRC = "https://kannadakalike.org/grammar/";
const MODULES = [];

MODULES.push({
  id: "alphabet", en: "The Alphabet", te: "వర్ణమాల", kn: "ಕನ್ನಡ ವರ್ಣಮಾಲೆ", ta: "தமிழ் எழுத்துக்கள்",
  src: SRC + "kannada-alphabet",
  big: "⟦kn|Kannada and Telugu grew from the same script, so every Telugu letter has a Kannada twin in the same position. Learning to read Kannada is mostly learning new shapes for letters you already know.⟧⟦kn ta| ⟧⟦ta|Tamil is a smaller alphabet: one letter often stands for a whole Telugu row (క ఖ గ ఘ are all <b>க</b>), and context tells you how to say it.⟧",
  sections: [
    { h: "Vowels · అచ్చులు⟦kn| · ಸ್ವರಗಳು⟧⟦ta| · உயிர் எழுத்துக்கள்⟧", noRead: true,
      p: "⟦kn|Telugu and Kannada have the same 13 core vowels.⟧⟦kn ta| ⟧⟦ta !kn|Telugu has 13 core vowels. ⟧⟦ta|Tamil has 12: there is no ఋ. Tamil calls vowels <i>uyir</i> (“life”).⟧",
      rows: [
        ["a", "అ", "ಅ", "அ"], ["ā", "ఆ", "ಆ", "ஆ"], ["i", "ఇ", "ಇ", "இ"], ["ī", "ఈ", "ಈ", "ஈ"],
        ["u", "ఉ", "ಉ", "உ"], ["ū", "ఊ", "ಊ", "ஊ"], ["ṛ", "ఋ", "ಋ", "—"], ["e", "ఎ", "ಎ", "எ"],
        ["ē", "ఏ", "ಏ", "ஏ"], ["ai", "ఐ", "ಐ", "ஐ"], ["o", "ఒ", "ಒ", "ஒ"], ["ō", "ఓ", "ಓ", "ஓ"],
        ["au", "ఔ", "ಔ", "ஔ"], ["aṃ (anusvāra)", "అం", "ಅಂ", "—"], ["aḥ (visarga⟦ta| / āytam⟧)", "అః", "ಅಃ", "ஃ"]
      ],
      tip: "Short ఎ/ఒ and long ఏ/ఓ are kept apart in ⟦#langs⟧, just as in Telugu. Hindi speakers struggle with this; you won’t."
    },
    { h: "Structured consonants · వర్గ హల్లులు⟦kn| · ವರ್ಗೀಯ ವ್ಯಂಜನಗಳು⟧", noRead: true,
      p: "⟦kn|Kannada keeps all five Telugu letters in each row.⟧⟦kn ta| ⟧⟦ta|Tamil keeps only the plain stop and the nasal. A Tamil reader decides from position whether க is k or g (see Module 2).⟧",
      rows: [
        ["Velar k-row", "క ఖ గ ఘ ఙ", "ಕ ಖ ಗ ಘ ಙ", "க · · · ங"],
        ["Palatal c-row", "చ ఛ జ ఝ ఞ", "ಚ ಛ ಜ ಝ ಞ", "ச · ஜ · ஞ"],
        ["Retroflex ṭ-row", "ట ఠ డ ఢ ణ", "ಟ ಠ ಡ ಢ ಣ", "ட · · · ண"],
        ["Dental t-row", "త థ ద ధ న", "ತ ಥ ದ ಧ ನ", "த · · · ந"],
        ["Labial p-row", "ప ఫ బ భ మ", "ಪ ಫ ಬ ಭ ಮ", "ப · · · ம"]
      ],
      tip: "⟦ta|ஜ is a Grantha letter, borrowed for Sanskrit and English words. The dots mark letters Tamil does not have.⟧⟦kn !ta|The rows line up letter for letter, so you can read Kannada consonants by position.⟧"
    },
    { h: "Other consonants · అవర్గ హల్లులు⟦kn| · ಅವರ್ಗೀಯ ವ್ಯಂಜನಗಳು⟧", noRead: true,
      p: "⟦kn !ta|These match Telugu letter for letter. Like Telugu, Kannada once had ఱ and ఴ, but both have dropped out of modern use.⟧⟦ta|Tamil has three consonants a Telugu speaker needs to learn as new sounds: <b>ழ</b> (ḻa, the curled “zh” of தமிழ்), <b>ற</b> (a hard trilled r, the same sound as Telugu’s old <b>ఱ</b> బండి ర) and <b>ன</b> (an alveolar n, used mostly inside and at the end of words).⟧",
      rows: [
        ["y", "య", "ಯ", "ய"], ["r", "ర", "ರ", "ர"], ["hard r", "ఱ", "ಱ (old)", "ற"], ["l", "ల", "ಲ", "ல"],
        ["v", "వ", "ವ", "வ"], ["ś", "శ", "ಶ", "ஶ (rare)"], ["ṣ", "ష", "ಷ", "ஷ"], ["s", "స", "ಸ", "ஸ"],
        ["h", "హ", "ಹ", "ஹ"], ["ḷ", "ళ", "ಳ", "ள"], ["ḻ (zh)", "ఴ (old)", "ೞ (old)", "ழ"], ["alveolar n", "—", "—", "ன"],
        ["kṣ", "క్ష", "ಕ್ಷ", "க்ஷ"]
      ],
      tip: "⟦ta|On this site, Tamil ழ is shown in Telugu script as an underlined <span class='zha'>ళ</span>. Say it with the tongue curled back, letting air flow over it, halfway between ళ and ర.⟧"
    },
    { h: "Native digits", noRead: true,
      p: "⟦many|All three languages⟧⟦one|Both languages⟧ have their own digit shapes. Everyday life uses 0–9, but you will see these on old signs, calendars⟦kn| and in Kannada government print⟧⟦!kn| and in print⟧.",
      rows: [
        ["1 2 3 4 5", "౧ ౨ ౩ ౪ ౫", "೧ ೨ ೩ ೪ ೫", "௧ ௨ ௩ ௪ ௫"],
        ["6 7 8 9 0", "౬ ౭ ౮ ౯ ౦", "೬ ೭ ೮ ೯ ೦", "௬ ௭ ௮ ௯ ௦"]
      ]
    }
  ]
});

MODULES.push({
  id: "vowel-signs", en: "Vowel Signs & Reading Rules", te: "గుణింతాలు", kn: "ಕಾಗುಣಿತ", ta: "உயிர்மெய் எழுத்துக்கள்",
  src: SRC + "additional-features-of-kannada-alphabet",
  big: "⟦kn|Kannada ಕಾಗುಣಿತ works like Telugu గుణింతం: one consonant, 13 vowel signs, in the same order.⟧⟦kn ta| ⟧⟦ta|Tamil’s உயிர்மெய் (“life + body”) works ⟧⟦kn ta|the same way⟧⟦ta !kn|like Telugu గుణింతం⟧⟦ta|, but three signs (ெ ே ை) sit <b>to the left</b> of the consonant, and the u/ū signs change shape from letter to letter.⟧",
  sections: [
    { h: "The k-row in ⟦many|three⟧⟦one|two⟧ scripts", noRead: true,
      p: "Read across: ⟦kn|the Kannada row is a letter-for-letter match of the Telugu row.⟧⟦!kn|each Telugu syllable sits next to its Tamil form.⟧",
      rows: [
        ["ka kā ki kī", "క కా కి కీ", "ಕ ಕಾ ಕಿ ಕೀ", "க கா கி கீ"],
        ["ku kū kṛ", "కు కూ కృ", "ಕು ಕೂ ಕೃ", "கு கூ —"],
        ["ke kē kai", "కె కే కై", "ಕೆ ಕೇ ಕೈ", "கெ கே கை"],
        ["ko kō kau", "కొ కో కౌ", "ಕೊ ಕೋ ಕೌ", "கொ கோ கௌ"],
        ["k (no vowel)", "క్", "ಕ್", "க்"]
      ],
      tip: "The Telugu pollu ్⟦kn ta|, the Kannada ್ and the Tamil dot ் (puḷḷi) all⟧⟦kn !ta| and the Kannada ್ both⟧⟦ta !kn| and the Tamil dot ் (puḷḷi) both⟧ mean “no vowel”.⟦ta| Tamil uses the dot constantly because it never stacks letters into conjuncts.⟧"
    },
    { h: "Tamil u / ū signs: learn these by sight", noRead: true, only: "ta",
      p: "In Telugu⟦kn| and Kannada⟧ the u-sign looks the same on every letter. In Tamil it fuses with the letter, so learn these as whole shapes.",
      rows: [
        ["ku ṅu cu ñu ṭu ṇu", "కు ఙు చు ఞు టు ణు", "ಕು ಙು ಚು ಞು ಟು ಣು", "கு ஙு சு ஞு டு ணு"],
        ["tu nu pu mu yu ru", "తు ను పు ము యు రు", "ತು ನು ಪು ಮು ಯು ರು", "து நு பு மு யு ரு"],
        ["lu vu ḻu ḷu ṟu ṉu", "లు వు ఴు ళు ఱు ను", "ಲು ವು ೞು ಳು ಱು —", "லு வு ழு ளு று னு"],
        ["kū cū ṭū tū pū mū", "కూ చూ టూ తూ పూ మూ", "ಕೂ ಚೂ ಟೂ ತೂ ಪೂ ಮೂ", "கூ சூ டூ தூ பூ மூ"]
      ]
    },
    { h: "How Tamil decides k or g, t or d", only: "ta",
      p: "Since Tamil writes క and గ with one letter, pronunciation follows simple rules. Our Telugu-script readings apply them for you.",
      rows: [
        ["Word start → hard (k, t, p) · leg", "కాలు", "ಕಾಲು", "கால்"],
        ["Word start → hard · milk", "పాలు", "ಹಾಲು", "பால்"],
        ["Doubled → hard · elder sister", "అక్క", "ಅಕ್ಕ", "அக்கா"],
        ["Doubled → hard · father", "నాన్న", "ಅಪ್ಪ", "அப்பா"],
        ["After a nasal → soft (g, d, b) · ball", "బంతి", "ಚೆಂಡು", "பந்து"],
        ["After a nasal → soft · gold", "బంగారం", "ಚಿನ್ನ", "தங்கம்"],
        ["Between vowels → soft · son", "కొడుకు", "ಮಗ", "மகன்"],
        ["Between vowels → soft · sing", "పాడు", "ಹಾಡು", "பாடு"]
      ],
      tip: "Initial ச is usually “s” (சரி sari, செய் sey), though some words such as சின்ன and சென்னை are said with “ch”. Between vowels ச is “s” (பசு pasu)."
    },
    { h: "Visual differences: Telugu vs Kannada", noRead: true, only: "kn",
      p: "Kannada letters drop the Telugu tick-mark (తలకట్టు) and use a flat headstroke instead. A few pairs look different enough to practise:",
      rows: [
        ["ē / ī", "ఏ ఈ", "ಏ ಈ", "ஏ ஈ"],
        ["ra / la / va", "ర ల వ", "ರ ಲ ವ", "ர ல வ"],
        ["ja / ña / ṇa", "జ ఞ ణ", "ಜ ಞ ಣ", "ஜ ஞ ண"],
        ["dha / bha / ha", "ధ భ హ", "ಧ ಭ ಹ", "— — ஹ"],
        ["kī (long i sign)", "కీ", "ಕೀ", "கீ"]
      ]
    }
  ]
});

MODULES.push({
  id: "clusters", en: "Consonant Clusters", te: "సంయుక్తాక్షరాలు / ఒత్తులు", kn: "ಒತ್ತಕ್ಷರಗಳು", ta: "மெய்யெழுத்துத் தொடர்",
  src: SRC + "consonant-clusters",
  big: "⟦kn|Kannada writes clusters exactly like Telugu: the second consonant drops below as an ఒత్తు (ಒತ್ತು).⟧⟦kn ta| ⟧⟦ta|Tamil never stacks. It writes the first consonant with a dot (்) and puts the next letter beside it: క్క → க்க.⟧",
  sections: [
    { h: "Doubled and joined consonants",
      rows: [
        ["elder sister", "అక్క", "ಅಕ್ಕ", "அக்கா"],
        ["mother", "అమ్మ", "ಅಮ್ಮ", "அம்மா"],
        ["elder brother", "అన్న", "ಅಣ್ಣ", "அண்ணன்"],
        ["salt", "ఉప్పు", "ಉಪ್ಪು", "உப்பு"],
        ["eye", "కన్ను", "ಕಣ್ಣು", "கண்"],
        ["oil", "నూనె", "ಎಣ್ಣೆ", "எண்ணெய்"],
        ["account", "లెక్క", "ಲೆಕ್ಕ", "கணக்கு"],
        ["Krishna", "కృష్ణ", "ಕೃಷ್ಣ", "கிருஷ்ணன்"],
        ["moon", "చంద్రుడు", "ಚಂದ್ರ", "சந்திரன்"]
      ],
      tip: "⟦kn|Kannada often has ṇṇ (ಣ್ಣ) where Telugu has nn (న్న): ಅಣ್ಣ / అన్న, ಹಣ್ಣು / పండు.⟧⟦kn ta| Tamil agrees with Kannada: அண்ணன்.⟧⟦ta !kn|Tamil often has ṇṇ (ண்ண) where Telugu has nn (న్న): அண்ணன் / అన్న.⟧"
    },
    { h: "Anusvāra (ం⟦kn| / ಂ⟧)⟦ta| vs. Tamil’s written nasals⟧",
      p: "Telugu⟦kn| and Kannada⟧ write⟦!kn|s⟧ ం before any consonant.⟦ta| Tamil has no ం in native words: it writes the matching nasal with a dot.⟧",
      rows: [
        ["five (Sanskrit)", "పంచ", "ಪಂಚ", "பஞ்ச"],
        ["throat", "కంఠం", "ಕಂಠ", "கண்டம்"],
        ["sandalwood", "చందనం", "ಚಂದನ", "சந்தனம்"],
        ["pillar", "స్తంభం", "ಸ್ತಂಭ", "தூண்"],
        ["red", "ఎరుపు", "ಕೆಂಪು", "சிவப்பு"]
      ]
    },
    { h: "Visarga, ṛ and borrowed sounds",
      p: "Visarga (ః) appears only in Sanskrit words in ⟦#langs+te⟧.⟦ta| Tamil rewrites Sanskrit sounds to fit its own letters, and has no f, so English ‘f’ becomes ப (or ஃப in careful spelling).⟧⟦kn !ta| Kannada keeps ṛ (ಋ) and borrowed sounds like f (ಫ) just as Telugu does.⟧",
      rows: [
        ["sorrow", "దుఃఖం", "ದುಃಖ", "துக்கம்"],
        ["sage", "ఋషి", "ಋಷಿ", "ரிஷி"],
        ["season", "ఋతువు", "ಋತು", "பருவம்"],
        ["bank", "బ్యాంకు", "ಬ್ಯಾಂಕ್", "வங்கி"],
        ["coffee", "కాఫీ", "ಕಾಫಿ", "காபி", "కాపి"]
      ]
    },
    { h: "Starter words from the lesson",
      rows: [
        ["wave", "అల", "ಅಲೆ", "அலை"], ["this", "ఇది", "ಇದು", "இது"], ["river", "నది", "ನದಿ", "நதி / ஆறு"],
        ["swim", "ఈదు", "ಈಜು", "நீந்து"], ["village", "ఊరు", "ಊರು", "ஊர்"], ["hundred", "వంద / నూరు", "ನೂರು", "நூறு"],
        ["seven", "ఏడు", "ಏಳು", "ஏழு"], ["one", "ఒకటి", "ಒಂದು", "ஒன்று"], ["wall", "గోడ", "ಗೋಡೆ", "சுவர்"],
        ["wind", "గాలి", "ಗಾಳಿ", "காற்று"], ["place", "చోటు / జాగా", "ಜಾಗ", "இடம்"], ["head", "తల", "ತಲೆ", "தலை"],
        ["money", "డబ్బు", "ದುಡ್ಡು", "பணம் / காசு"], ["fox", "నక్క", "ನರಿ", "நரி"], ["word", "మాట", "ಮಾತು", "சொல்"],
        ["tree", "చెట్టు", "ಮರ", "மரம்"], ["unripe fruit", "కాయ", "ಕಾಯಿ", "காய்"], ["debt", "అప్పు", "ಸಾಲ", "கடன்"],
        ["milk", "పాలు", "ಹಾಲು", "பால்"]
      ],
      tip: "Spot the patterns: Telugu -a =⟦kn| Kannada -e⟧⟦kn ta| =⟧⟦ta| Tamil -ai⟧ (తల⟦kn| / ತಲೆ⟧⟦ta| / தலை⟧). Telugu p- =⟦kn| Kannada h-⟧⟦kn ta| =⟧⟦ta| Tamil p-⟧ (పాలు⟦kn| / ಹಾಲು⟧⟦ta| / பால்⟧). The Sound Shortcuts page lists more."
    }
  ]
});

MODULES.push({
  id: "imperative", en: "Commands (Imperative)", te: "విధ్యర్థకం", kn: "ಆಜ್ಞಾರ್ಥಕ ರೂಪಗಳು", ta: "ஏவல் வினை",
  src: SRC + "imperative-mood",
  big: "You already do this in Telugu: the bare verb is a casual command (చదువు) and adding -ండి makes it plural or polite (చదవండి). ⟦kn|Kannada adds <b>-ಇ / -ಇರಿ</b> (ಓದು → ಓದಿ).⟧⟦kn ta| ⟧⟦ta|Tamil adds <b>-உங்கள்</b>, said <b>-ங்க</b> in speech (படி → படியுங்கள் → படிங்க). That -ங்க feels just like Telugu -ండి.⟧",
  sections: [
    { h: "The endings",
      cols: ["", "Telugu", "Kannada", "Tamil"],
      rows: [
        ["casual / singular", "stem: చదువు", "stem: ಓದು", "stem: படி"],
        ["plural / polite", "-ండి: చదవండి", "-ಇ: ಓದಿ", "-உங்கள்: படியுங்கள்"],
        ["extra polite", "దయచేసి చదవండి", "-ಇರಿ: ಓದಿರಿ", "தயவுசெய்து படியுங்கள்"],
        ["stems ending in i / e", "రాయి → రాయండి", "ಬರೆ → ಬರೆಯಿರಿ", "குடி → குடியுங்கள்"]
      ],
      tip: "⟦ta|“Please” is the same idea in Telugu and Tamil: దయ + చేసి = தயவு + செய்து (“having done kindness”).⟧⟦kn ta| Kannada says ದಯವಿಟ್ಟು.⟧⟦kn !ta|“Please” in Kannada is ದಯವಿಟ್ಟು, where Telugu says దయచేసి.⟧"
    },
    { h: "Common verbs: singular · plural",
      rows: [
        ["read", "చదువు · చదవండి", "ಓದು · ಓದಿ", "படி · படியுங்கள்"],
        ["do", "చెయ్యి · చేయండి", "ಮಾಡು · ಮಾಡಿ", "செய் · செய்யுங்கள்"],
        ["see / look", "చూడు · చూడండి", "ನೋಡು · ನೋಡಿ", "பார் · பாருங்கள்"],
        ["give", "ఇవ్వు · ఇవ్వండి", "ಕೊಡು · ಕೊಡಿ", "கொடு · கொடுங்கள்"],
        ["tell / say", "చెప్పు · చెప్పండి", "ಹೇಳು · ಹೇಳಿ", "சொல் · சொல்லுங்கள்"],
        ["ask", "అడుగు · అడగండి", "ಕೇಳು · ಕೇಳಿ", "கேள் · கேளுங்கள்"],
        ["search", "వెతుకు · వెతకండి", "ಹುಡುಕು · ಹುಡುಕಿ", "தேடு · தேடுங்கள்"],
        ["lie down", "పడుకో · పడుకోండి", "ಮಲಗು · ಮಲಗಿ", "படு · படுங்கள்"],
        ["believe", "నమ్ము · నమ్మండి", "ನಂಬು · ನಂಬಿ", "நம்பு · நம்புங்கள்"],
        ["go", "వెళ్ళు · వెళ్ళండి", "ಹೋಗು · ಹೋಗಿ", "போ · போங்கள்"],
        ["stay / be", "ఉండు · ఉండండి", "ಇರು · ಇರಿ", "இரு · இருங்கள்"],
        ["sit", "కూర్చో · కూర్చోండి", "ಕೂರು · ಕೂರಿ", "உட்கார் · உட்காருங்கள்"],
        ["write", "రాయి · రాయండి", "ಬರೆ · ಬರೆಯಿರಿ", "எழுது · எழுதுங்கள்"],
        ["learn", "నేర్చుకో · నేర్చుకోండి", "ಕಲಿ · ಕಲಿಯಿರಿ", "கற்றுக்கொள் · கற்றுக்கொள்ளுங்கள்"],
        ["drink", "తాగు · తాగండి", "ಕುಡಿ · ಕುಡಿಯಿರಿ", "குடி · குடியுங்கள்"],
        ["bathe", "స్నానం చెయ్యి · చేయండి", "ಸ್ನಾನ ಮಾಡು · ಸ್ನಾನ ಮಾಡಿ", "குளி · குளியுங்கள்"],
        ["scold", "తిట్టు · తిట్టండి", "ಬೈ · ಬೈಯಿರಿ", "திட்டு · திட்டுங்கள்"]
      ]
    },
    { h: "Irregular: come and bring",
      p: "“Come” is irregular in ⟦#langs+te⟧, and in the same way: a short singular (రా⟦kn| / ಬಾ⟧⟦ta| / வா⟧) and a longer plural.",
      rows: [
        ["come", "రా · రండి", "ಬಾ · ಬನ್ನಿ", "வா · வாருங்கள் (வாங்க)"],
        ["bring", "తీసుకురా · తీసుకురండి", "ತಾ · ತನ್ನಿ", "கொண்டு வா · கொண்டு வாருங்கள்"],
        ["give (to me)", "ఇవ్వు", "ಕೊಡು", "தா · தாருங்கள்"]
      ],
      tip: "⟦kn ta|False friend: Kannada ತಾ means “bring”, but Tamil தா means “give (me)”.⟧⟦kn !ta|Kannada ತಾ is a one-syllable “bring”, much shorter than Telugu తీసుకురా.⟧⟦ta !kn|Tamil தா means “give (me)”, not “bring”.⟧"
    },
    { h: "Sanskrit verbs: Telugu -ించు⟦kn| = Kannada -ಇಸು⟧",
      p: "Telugu turns Sanskrit nouns into verbs with -ించు⟦kn|; Kannada uses -ಇಸು in exactly the same slots. Swap the ending and you have the Kannada verb⟧.⟦ta| Tamil usually prefers a native verb or noun + செய் (“do”).⟧",
      rows: [
        ["protect", "రక్షించు", "ರಕ್ಷಿಸು", "காப்பாற்று"],
        ["worship", "పూజించు", "ಪೂಜಿಸು", "பூஜை செய்"],
        ["forgive", "క్షమించు", "ಕ್ಷಮಿಸು", "மன்னி"],
        ["begin", "ప్రారంభించు", "ಪ್ರಾರಂಭಿಸು", "தொடங்கு"],
        ["think", "ఆలోచించు", "ಯೋಚಿಸು", "யோசி"]
      ]
    }
  ]
});

MODULES.push({
  id: "pronouns", en: "Pronouns", te: "సర్వనామాలు", kn: "ಸರ್ವನಾಮ", ta: "பிரதிப்பெயர்கள்",
  src: SRC + "pronoun",
  big: "Telugu⟦ta| and Tamil both⟧ ha⟦ta|ve⟧⟦!ta|s⟧ two words for “we”: one that includes the listener (మనం⟦ta| / நாம்⟧) and one that excludes them (మేము⟦ta| / நாங்கள்⟧).⟦kn| Kannada has only ನಾವು for both.⟧ ⟦#langs⟧ also give⟦one|s⟧ women their own pronoun and verb ending (⟦kn|ಅವಳು ಬಂದಳು⟧⟦kn ta|, ⟧⟦ta|அவள் வந்தாள்⟧). In Telugu, ఆమె takes the neuter ending (ఆమె వచ్చింది).",
  sections: [
    { h: "Personal pronouns",
      rows: [
        ["I", "నేను", "ನಾನು", "நான்"],
        ["you (casual)", "నువ్వు / నీవు", "ನೀನು", "நீ"],
        ["we (not you)", "మేము", "ನಾವು", "நாங்கள்"],
        ["we (including you)", "మనం", "ನಾವು", "நாம்"],
        ["you (plural / polite)", "మీరు", "ನೀವು", "நீங்கள்"],
        ["you (very respectful)", "తమరు / మీరు", "ತಾವು", "தாங்கள்"],
        ["oneself", "తాను / తను", "ತಾನು", "தான்"]
      ],
      tip: "Telugu తమరు⟦kn ta|, Kannada ತಾವು and Tamil தாங்கள் all⟧⟦kn !ta| and Kannada ತಾವು both⟧⟦ta !kn| and Tamil தாங்கள் both⟧ come from the reflexive “self” and are used for “you, sir”."
    },
    { h: "That one · this one (demonstratives)",
      p: "⟦#langs+te⟧ ⟦many|all⟧⟦one|both⟧ use a- for “that” and i- for “this”. Learn the a- column and you get the i- column free.",
      rows: [
        ["he (casual)", "వాడు", "ಅವನು", "அவன்"],
        ["he (neutral)", "అతను", "ಆತ", "அவன் / அவர்"],
        ["she", "ఆమె", "ಅವಳು / ಆಕೆ", "அவள்"],
        ["it", "అది", "ಅದು", "அது"],
        ["they / he, she (respect)", "వాళ్ళు / వారు / ఆయన", "ಅವರು", "அவர்கள் / அவர்"],
        ["those (things)", "అవి", "ಅವು", "அவை"],
        ["this man", "వీడు / ఇతను", "ಇವನು / ಈತ", "இவன்"],
        ["this woman", "ఈమె", "ಇವಳು / ಈಕೆ", "இவள்"],
        ["this (thing)", "ఇది", "ಇದು", "இது"],
        ["these people", "వీళ్ళు / వీరు", "ಇವರು", "இவர்கள்"],
        ["these (things)", "ఇవి", "ಇವು", "இவை"]
      ],
      tip: "Register works the way you expect from Telugu: ⟦kn|ಅವನು⟧⟦kn ta| / ⟧⟦ta|அவன்⟧ ⟦many|are⟧⟦one|is⟧ like వాడు (friends, children), and ⟦kn|ಅವರು⟧⟦kn ta| / ⟧⟦ta|அவர்⟧ ⟦many|are⟧⟦one|is⟧ like ఆయన / వారు (anyone you respect).⟦kn| ಆತ / ಆಕೆ sit in the middle, like అతను / ఆమె.⟧"
    },
    { h: "Who? What?",
      rows: [
        ["who", "ఎవరు", "ಯಾರು", "யார்"],
        ["who (man, rude)", "ఎవడు", "ಯಾವನು", "எவன்"],
        ["who (woman, rude)", "ఎవతె", "ಯಾವಳು", "எவள்"],
        ["what", "ఏమిటి / ఏం", "ಏನು", "என்ன"],
        ["which one", "ఏది", "ಯಾವುದು", "எது"]
      ]
    }
  ]
});

MODULES.push({
  id: "nouns", en: "Nouns: Gender & Plurals", te: "నామవాచకాలు", kn: "ನಾಮಪದ", ta: "பெயர்ச்சொல்",
  src: SRC + "noun",
  big: "Like Telugu, the noun itself never shows gender; meaning does. Telugu splits the world into మహత్తు (men) and అమహత్తు (women + everything else). ⟦kn|Kannada uses three genders: masculine, feminine, neuter.⟧⟦kn ta| ⟧⟦ta|Tamil splits into உயர்திணை (people) and அஃறிணை (things).⟧ Plurals are easy: Telugu -లు⟦kn| ≈ Kannada -ಗಳು / -ರು⟧⟦ta| ≈ Tamil -கள்⟧.",
  sections: [
    { h: "Plural endings",
      cols: ["", "Telugu", "Kannada", "Tamil"],
      rows: [
        ["things, animals", "-లు", "-ಗಳು", "-கள்"],
        ["people", "-లు", "-ರು / -ಯರು", "-கள் / -அர்கள்"],
        ["kin (sister, brother)", "-లు", "-ಅಂದಿರು", "-கள்"],
        ["Sanskrit -ం nouns", "-ం → -ాలు", "-ಗಳು", "-ம் → -ங்கள்"]
      ]
    },
    { h: "Singular → plural",
      rows: [
        ["king", "రాజు → రాజులు", "ರಾಜ → ರಾಜರು", "அரசன் → அரசர்கள்"],
        ["boy", "అబ్బాయి → అబ్బాయిలు", "ಹುಡುಗ → ಹುಡುಗರು", "பையன் → பையன்கள்"],
        ["girl", "అమ్మాయి → అమ్మాయిలు", "ಹುಡುಗಿ → ಹುಡುಗಿಯರು", "பெண் → பெண்கள்"],
        ["elder sister", "అక్క → అక్కలు", "ಅಕ್ಕ → ಅಕ್ಕಂದಿರು", "அக்கா → அக்காக்கள்"],
        ["younger brother", "తమ్ముడు → తమ్ముళ్ళు", "ತಮ್ಮ → ತಮ್ಮಂದಿರು", "தம்பி → தம்பிகள்"],
        ["elephant", "ఏనుగు → ఏనుగులు", "ಆನೆ → ಆನೆಗಳು", "யானை → யானைகள்"],
        ["book", "పుస్తకం → పుస్తకాలు", "ಪುಸ್ತಕ → ಪುಸ್ತಕಗಳು", "புத்தகம் → புத்தகங்கள்"],
        ["flower", "పువ్వు → పువ్వులు", "ಹೂವು → ಹೂಗಳು", "பூ → பூக்கள்"],
        ["house", "ఇల్లు → ఇళ్ళు", "ಮನೆ → ಮನೆಗಳು", "வீடு → வீடுகள்"],
        ["child (irregular)", "పిల్ల → పిల్లలు", "ಮಗು → ಮಕ್ಕಳು", "குழந்தை → குழந்தைகள்"]
      ],
      tip: "⟦kn ta|False friend: Kannada ಮಕ್ಕಳು means “children”, but Tamil மக்கள் means “people”.⟧⟦kn !ta|Kannada ಮಕ್ಕಳು means “children”, like Telugu పిల్లలు.⟧⟦ta !kn|Watch out: Tamil மக்கள் means “people”, not “children”.⟧"
    },
    { h: "Nouns that don’t count",
      p: "Mass nouns have one form. Watch out: Telugu treats water as plural (నీళ్ళు ఉన్నాయి); ⟦#langs⟧ treat⟦one|s⟧ it as singular (⟦kn|ನೀರು ಇದೆ⟧⟦kn ta|, ⟧⟦ta|தண்ணீர் இருக்கிறது⟧).",
      rows: [
        ["water", "నీళ్ళు", "ನೀರು", "தண்ணீர்"],
        ["rice (raw)", "బియ్యం", "ಅಕ್ಕಿ", "அரிசி"],
        ["paddy", "వడ్లు", "ಭತ್ತ", "நெல்"],
        ["green gram dal", "పెసరపప్పు", "ಹೆಸರುಬೇಳೆ", "பாசிப்பருப்பு"],
        ["salt", "ఉప్పు", "ಉಪ್ಪು", "உப்பு"]
      ]
    },
    { h: "Respect and counting people",
      p: "Plural forms show respect, just like Telugu గారు / వారు.",
      rows: [
        ["respected teacher", "గురువుగారు", "ಗುರುಗಳು", "குருநாதர் / ஆசிரியர்"],
        ["Mr Ramu (respect)", "రాము గారు", "ರಾಮು ಅವರು", "ராமு அவர்கள்"],
        ["one person", "ఒకరు", "ಒಬ್ಬರು", "ஒருவர்"],
        ["two people", "ఇద్దరు", "ಇಬ್ಬರು", "இருவர்"]
      ]
    },
    { h: "Family words",
      rows: [
        ["mother", "అమ్మ / తల్లి", "ಅಮ್ಮ / ತಾಯಿ", "அம்மா / தாய்"],
        ["father", "నాన్న / తండ్రి", "ಅಪ್ಪ / ತಂದೆ", "அப்பா / தந்தை"],
        ["elder brother", "అన్నయ్య", "ಅಣ್ಣ", "அண்ணன் / அண்ணா"],
        ["younger brother", "తమ్ముడు", "ತಮ್ಮ", "தம்பி"],
        ["elder sister", "అక్క", "ಅಕ್ಕ", "அக்கா"],
        ["younger sister", "చెల్లెలు", "ತಂಗಿ", "தங்கை"],
        ["son", "కొడుకు", "ಮಗ", "மகன்"],
        ["daughter", "కూతురు", "ಮಗಳು", "மகள்"],
        ["grandfather", "తాత", "ತಾತ / ಅಜ್ಜ", "தாத்தா"],
        ["grandmother", "అవ్వ / నాయనమ్మ", "ಅಜ್ಜಿ", "பாட்டி"],
        ["maternal uncle", "మామయ్య", "ಮಾವ", "மாமா"],
        ["father’s sister", "అత్త", "ಅತ್ತೆ", "அத்தை"],
        ["son-in-law", "అల్లుడు", "ಅಳಿಯ", "மருமகன்"]
      ]
    }
  ]
});
