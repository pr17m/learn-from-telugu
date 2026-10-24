MODULES.push({
  id: "adjectives", en: "Adjectives & Adverbs", te: "విశేషణాలు & క్రియా విశేషణాలు", kn: "ಗುಣವಾಚಕಗಳು ಮತ್ತು ಕ್ರಿಯಾ ವಿಶೇಷಣಗಳು", ta: "பெயரடை & வினையடை",
  src: SRC + "adjectives-and-adverbs",
  big: "Adjectives sit before the noun and never change, as in Telugu. To make an adverb, Telugu adds -గా (కొత్తగా).⟦kn| Kannada adds <b>-ಆಗಿ</b> (ಹೊಸದಾಗಿ).⟧⟦ta| Tamil adds <b>-ஆக</b> (புதிதாக).⟧ ⟦many|All three come⟧⟦one|Both come⟧ from the verb “to become” (అవు⟦kn| / ಆಗು⟧⟦ta| / ஆகு⟧).",
  sections: [
    { h: "Adjective + noun",
      rows: [
        ["new book", "కొత్త పుస్తకం", "ಹೊಸ ಪುಸ್ತಕ", "புதிய புத்தகம்"],
        ["old house", "పాత ఇల్లు", "ಹಳೆಯ ಮನೆ", "பழைய வீடு"],
        ["small room", "చిన్న గది", "ಚಿಕ್ಕ ಕೋಣೆ", "சின்ன அறை"],
        ["big village", "పెద్ద ఊరు", "ದೊಡ್ಡ ಹಳ್ಳಿ", "பெரிய கிராமம்"],
        ["good boy", "మంచి అబ్బాయి", "ಒಳ್ಳೆಯ ಹುಡುಗ", "நல்ல பையன்"]
      ],
      tip: "⟦kn ta|Kannada ಹೊಸ = Tamil புதிய, and Kannada ಹಳೆಯ = Tamil பழைய: Kannada h- matches Tamil p- (see Sound Shortcuts).⟧⟦kn !ta|Kannada ಹಳೆಯ matches Telugu పాత: Kannada h- often stands for Telugu p- (see Sound Shortcuts).⟧⟦ta !kn|Tamil பழைய matches Telugu పాత: same p-, same root (see Sound Shortcuts).⟧"
    },
    { h: "Compound nouns",
      rows: [
        ["brinjal", "వంకాయ", "ಬದನೇಕಾಯಿ", "கத்தரிக்காய்"],
        ["banana", "అరటిపండు", "ಬಾಳೆಹಣ್ಣು", "வாழைப்பழம்"],
        ["headache", "తలనొప్పి", "ತಲೆನೋವು", "தலைவலி"]
      ],
      tip: "Vegetables end in “unripe fruit” in ⟦many|all three⟧⟦one|both⟧: -కాయ⟦kn| · -ಕಾಯಿ⟧⟦ta| · -காய்⟧. Fruits end in “ripe fruit”: -పండు⟦kn| · -ಹಣ್ಣು⟧⟦ta| · -பழம்⟧."
    },
    { h: "A noun of a noun = adjective",
      rows: [
        ["flower garden", "పూల తోట", "ಹೂವಿನ ತೋಟ", "பூந்தோட்டம்"],
        ["the village’s name", "ఊరి పేరు", "ಹಳ್ಳಿಯ ಹೆಸರು", "கிராமத்தின் பெயர்"],
        ["fruit of that tree", "ఆ చెట్టు పండు", "ಆ ಮರದ ಹಣ್ಣು", "அந்த மரத்தின் பழம்"]
      ]
    },
    { h: "Adverbs: -గా⟦kn| · -ಆಗಿ⟧⟦ta| · -ஆக⟧",
      rows: [
        ["newly", "కొత్తగా", "ಹೊಸದಾಗಿ", "புதிதாக"],
        ["well, nicely", "బాగా", "ಚೆನ್ನಾಗಿ", "நன்றாக"],
        ["slowly", "నెమ్మదిగా", "ನಿಧಾನವಾಗಿ", "மெதுவாக"],
        ["quickly", "వేగంగా / త్వరగా", "ಬೇಗ / ವೇಗವಾಗಿ", "வேகமாக / சீக்கிரம்"],
        ["very", "చాలా", "ತುಂಬ / ಬಹಳ", "மிகவும் / ரொம்ப"],
        ["This work is very difficult.", "ఈ పని చాలా కష్టంగా ఉంది.", "ಈ ಕೆಲಸ ತುಂಬ ಕಷ್ಟವಾಗಿದೆ.", "இந்த வேலை மிகவும் கஷ்டமாக இருக்கிறது."],
        ["This is a newly built house.", "ఇది కొత్తగా కట్టిన ఇల్లు.", "ಇದು ಹೊಸದಾಗಿ ಕಟ್ಟಿದ ಮನೆ.", "இது புதிதாகக் கட்டிய வீடு."],
        ["This water is very cold.", "ఈ నీళ్ళు చాలా చల్లగా ఉన్నాయి.", "ಈ ನೀರು ತುಂಬ ತಣ್ಣಗಿದೆ.", "இந்தத் தண்ணீர் மிகவும் குளிர்ச்சியாக இருக்கிறது."]
      ],
      tip: "⟦kn|Kannada often fuses -ಆಗಿ with ಇದೆ: ಕಷ್ಟವಾಗಿ + ಇದೆ → ಕಷ್ಟವಾಗಿದೆ (“is difficult”). Compare Telugu కష్టంగా ఉంది.⟧"
    }
  ]
});

MODULES.push({
  id: "numerals", en: "Numbers", te: "సంఖ్యలు", kn: "ಅಂಕೆಗಳು", ta: "எண்கள்",
  src: SRC + "numerals",
  big: "⟦kn ta|Kannada and Tamil numbers are close cousins of each other, and many share roots with Telugu⟧⟦kn !ta|Many Kannada numbers share roots with Telugu⟧⟦ta !kn|Many Tamil numbers share roots with Telugu⟧: మూడు⟦kn| / ಮೂರು⟧⟦ta| / மூன்று⟧, ఆరు⟦kn| / ಆರು⟧⟦ta| / ஆறு⟧, నూరు⟦kn| / ನೂರು⟧⟦ta| / நூறு⟧. The teens and tens are where Telugu goes its own way, so drill those.",
  sections: [
    { h: "1 to 10",
      rows: [
        ["1", "ఒకటి", "ಒಂದು", "ஒன்று"], ["2", "రెండు", "ಎರಡು", "இரண்டு"], ["3", "మూడు", "ಮೂರು", "மூன்று"],
        ["4", "నాలుగు", "ನಾಲ್ಕು", "நான்கு"], ["5", "ఐదు", "ಐದು", "ஐந்து"], ["6", "ఆరు", "ಆರು", "ஆறு"],
        ["7", "ఏడు", "ಏಳು", "ஏழு"], ["8", "ఎనిమిది", "ಎಂಟು", "எட்டு"], ["9", "తొమ్మిది", "ಒಂಬತ್ತು", "ஒன்பது"],
        ["10", "పది", "ಹತ್ತು", "பத்து"]
      ]
    },
    { h: "11 to 19",
      p: "⟦kn|Kannada builds teens on ಹದಿ- / ಹನ್- (“ten”).⟧⟦kn ta| Tamil builds them on பதி- / பன்-.⟧⟦ta !kn|Tamil builds teens on பதி- / பன்- (“ten”).⟧ Telugu uses పద- / పన్-: the same root⟦kn|, with Kannada’s h- for p-⟧.",
      rows: [
        ["11", "పదకొండు", "ಹನ್ನೊಂದು", "பதினொன்று"], ["12", "పన్నెండు", "ಹನ್ನೆರಡು", "பன்னிரண்டு"],
        ["13", "పదమూడు", "ಹದಿಮೂರು", "பதின்மூன்று"], ["14", "పద్నాలుగు", "ಹದಿನಾಲ್ಕು", "பதினான்கு"],
        ["15", "పదిహేను", "ಹದಿನೈದು", "பதினைந்து"], ["16", "పదహారు", "ಹದಿನಾರು", "பதினாறு"],
        ["17", "పదిహేడు", "ಹದಿನೇಳು", "பதினேழு"], ["18", "పద్దెనిమిది", "ಹದಿನೆಂಟು", "பதினெட்டு"],
        ["19", "పందొమ్మిది", "ಹತ್ತೊಂಬತ್ತು", "பத்தொன்பது"]
      ]
    },
    { h: "Tens and big numbers",
      rows: [
        ["20", "ఇరవై", "ಇಪ್ಪತ್ತು", "இருபது"], ["30", "ముప్పై", "ಮೂವತ್ತು", "முப்பது"], ["40", "నలభై", "ನಲವತ್ತು", "நாற்பது"],
        ["50", "యాభై", "ಐವತ್ತು", "ஐம்பது"], ["60", "అరవై", "ಅರವತ್ತು", "அறுபது"], ["70", "డెబ్బై", "ಎಪ್ಪತ್ತು", "எழுபது"],
        ["80", "ఎనభై", "ಎಂಬತ್ತು", "எண்பது"], ["90", "తొంభై", "ತೊಂಬತ್ತು", "தொண்ணூறு"], ["100", "వంద / నూరు", "ನೂರು", "நூறு"],
        ["200", "రెండు వందలు", "ಇನ್ನೂರು", "இருநூறு"], ["1,000", "వెయ్యి", "ಸಾವಿರ", "ஆயிரம்"],
        ["1,00,000", "లక్ష", "ಲಕ್ಷ", "லட்சம்"], ["1,00,00,000", "కోటి", "ಕೋಟಿ", "கோடி"]
      ],
      tip: "Telugu tens end in -ఐ (ఇరవై, ముప్పై).⟦kn| Kannada tens end in -ಅತ್ತು (ಇಪ್ಪತ್ತು).⟧⟦ta| Tamil tens end in -பது (இருபது).⟧ Same base number, different “ten” suffix."
    },
    { h: "Joining numbers and fractions",
      rows: [
        ["23", "ఇరవై మూడు", "ಇಪ್ಪತ್ಮೂರು", "இருபத்து மூன்று"],
        ["101", "నూట ఒకటి", "ನೂರ ಒಂದು", "நூற்று ஒன்று"],
        ["122", "నూట ఇరవై రెండు", "ನೂರ ಇಪ್ಪತ್ತೆರಡು", "நூற்று இருபத்திரண்டு"],
        ["1,211", "వెయ్యి రెండు వందల పదకొండు", "ಒಂದು ಸಾವಿರದ ಇನ್ನೂರ ಹನ್ನೊಂದು", "ஆயிரத்து இருநூற்றுப் பதினொன்று"],
        ["half", "అర", "ಅರ್ಧ / -ವರೆ", "அரை"],
        ["quarter", "పావు", "ಕಾಲು", "கால்"],
        ["3½ thousand", "మూడున్నర వేలు", "ಮೂರೂವರೆ ಸಾವಿರ", "மூன்றரை ஆயிரம்"],
        ["2¼ lakh", "రెండుంపావు లక్షలు", "ಎರಡೂಕಾಲು ಲಕ್ಷ", "இரண்டே கால் லட்சம்"]
      ]
    },
    { h: "Numbers with nouns",
      p: "Before a noun, “one” shortens in Telugu⟦ta| and Tamil⟧ (ఒకటి → ఒక⟦ta|, ஒன்று → ஒரு⟧).⟦kn| Kannada keeps ಒಂದು.⟧",
      rows: [
        ["one fruit", "ఒక పండు", "ಒಂದು ಹಣ್ಣು", "ஒரு பழம்"],
        ["two books", "రెండు పుస్తకాలు", "ಎರಡು ಪುಸ್ತಕಗಳು", "இரண்டு புத்தகங்கள்"],
        ["ten people", "పది మంది", "ಹತ್ತು ಜನ", "பத்து பேர்"],
        ["a hundred people", "వంద మంది", "ನೂರು ಜನ", "நூறு பேர்"],
        ["four crore", "నాలుగు కోట్లు", "ನಾಲ್ಕು ಕೋಟಿ", "நான்கு கோடி"]
      ],
      tip: "Counting people uses a special word: Telugu మంది⟦kn|, Kannada ಜನ⟧⟦ta|, Tamil பேர்⟧."
    },
    { h: "Counting people",
      rows: [
        ["one man", "ఒకడు", "ಒಬ್ಬನು", "ஒருவன்"],
        ["one woman", "ఒకతె / ఒకామె", "ಒಬ್ಬಳು", "ஒருத்தி"],
        ["one person (resp.)", "ఒకరు", "ಒಬ್ಬರು", "ஒருவர்"],
        ["two people", "ఇద్దరు", "ಇಬ್ಬರು", "இருவர் / இரண்டு பேர்"],
        ["three people", "ముగ్గురు", "ಮೂವರು", "மூவர் / மூன்று பேர்"],
        ["four people", "నలుగురు", "ನಾಲ್ವರು", "நால்வர் / நான்கு பேர்"],
        ["five people", "ఐదుగురు", "ಐವರು", "ஐவர் / ஐந்து பேர்"]
      ]
    },
    { h: "First, second, third",
      cols: ["", "Telugu -వ", "Kannada -ಅನೆಯ", "Tamil -ஆவது / -ஆம்"],
      rows: [
        ["first book", "మొదటి పుస్తకం", "ಮೊದಲನೆಯ ಪುಸ್ತಕ", "முதல் புத்தகம்"],
        ["second person", "రెండవ వ్యక్తి", "ಎರಡನೆಯ ವ್ಯಕ್ತಿ", "இரண்டாவது நபர்"],
        ["third man", "మూడవ మనిషి", "ಮೂರನೆಯ ಮನುಷ್ಯ", "மூன்றாவது மனிதன்"],
        ["I am the second son.", "నేను రెండవ కొడుకుని.", "ನಾನು ಎರಡನೆಯ ಮಗ.", "நான் இரண்டாவது மகன்."]
      ],
      tip: "“First” has a special word in ⟦many|all three⟧⟦one|both⟧, from “beginning”: మొదలు → మొదటి⟦kn| · ಮೊದಲು → ಮೊದಲನೆಯ⟧⟦ta| · முதல்⟧."
    }
  ]
});

MODULES.push({
  id: "causative", en: "Causatives: Making Someone Do", te: "ప్రేరణార్థకం", kn: "ಪ್ರೇರಣಾತ್ಮಕ ಪ್ರತ್ಯಯಗಳು", ta: "பிறவினை",
  src: SRC + "causative-suffixes",
  big: "Telugu makes “cause to do” with <b>-ించు / -పించు</b> (చేయించు, తినిపించు).⟦kn| Kannada has the same thing in <b>-ಇಸು</b> (ಮಾಡಿಸು, ತಿನ್ನಿಸು).⟧⟦ta| Tamil usually says “put to do”: infinitive + <b>வை</b> (செய்ய வை, படிக்க வை).⟧",
  sections: [
    { h: "Verb → make someone do it",
      rows: [
        ["make (someone) play", "ఆడించు", "ಆಡಿಸು", "விளையாட வை"],
        ["make sing", "పాడించు", "ಹಾಡಿಸು", "பாட வை"],
        ["make tell", "చెప్పించు", "ಹೇಳಿಸು", "சொல்ல வை"],
        ["get (it) done", "చేయించు", "ಮಾಡಿಸು", "செய்ய வை"],
        ["make read / educate", "చదివించు", "ಓದಿಸು", "படிக்க வை"],
        ["feed (make eat)", "తినిపించు", "ತಿನ್ನಿಸು", "சாப்பிட வை / ஊட்டு"],
        ["make laugh", "నవ్వించు", "ನಗಿಸು", "சிரிக்க வை"],
        ["make cry", "ఏడిపించు", "ಅಳಿಸು", "அழ வை"],
        ["seat (make sit)", "కూర్చోబెట్టు", "ಕೂರಿಸು", "உட்கார வை"],
        ["make run / drive", "పరిగెత్తించు / నడుపు", "ಓಡಿಸು", "ஓட்டு"]
      ],
      tip: "⟦kn|Kannada ಓಡು “run” → ಓಡಿಸು “drive”.⟧⟦kn ta| ⟧⟦ta|Tamil does it inside the word: ஓடு “run” → ஓட்டு “drive”.⟧"
    },
    { h: "Sanskrit-based verbs",
      p: "⟦kn|Kannada verbs that already end in -ಇಸು (ರಕ್ಷಿಸು) take <b>-ಉವಂತೆ ಮಾಡು</b> (“make it so that…”) instead. ⟧Telugu says -ఏలా చేయు⟦!kn| for verbs that already end in -ించు (రక్షించేలా చేయు)⟧.",
      rows: [
        ["make (someone) protect", "రక్షించేలా చేయు", "ರಕ್ಷಿಸುವಂತೆ ಮಾಡು", "காப்பாற்றச் செய்"],
        ["make (someone) worship", "పూజించేలా చేయు", "ಪೂಜಿಸುವಂತೆ ಮಾಡು", "பூஜை செய்ய வை"]
      ]
    },
    { h: "Sentences",
      rows: [
        ["Make him read.", "అతన్ని చదివించు.", "ಅವನನ್ನು ಓದಿಸು.", "அவனைப் படிக்க வை."],
        ["Make the dog eat.", "కుక్కకి తినిపించు.", "ನಾಯಿಗೆ ತಿನ್ನಿಸು.", "நாயைச் சாப்பிட வை."],
        ["This is my book → These are our books.", "ఇది నా పుస్తకం → ఇవి మా పుస్తకాలు", "ಇದು ನನ್ನ ಪುಸ್ತಕ → ಇವು ನಮ್ಮ ಪುಸ್ತಕಗಳು", "இது என் புத்தகம் → இவை எங்கள் புத்தகங்கள்"],
        ["This is her house.", "ఇది ఆమె ఇల్లు.", "ಇದು ಅವಳ ಮನೆ.", "இது அவளுடைய வீடு."],
        ["This is the bird’s nest.", "ఇది పక్షి గూడు.", "ಇದು ಹಕ್ಕಿಯ ಗೂಡು.", "இது பறவையின் கூடு."]
      ],
      tip: "Telugu గూడు⟦kn|, Kannada ಗೂಡು⟧⟦ta| and Tamil கூடு⟧ ⟦many|all mean⟧⟦one|both mean⟧ “nest”.⟦ta| Tamil writes it with க but says “kūḍu”.⟧"
    }
  ]
});

MODULES.push({
  id: "modal", en: "May, Can, Must, If", te: "వివిధ క్రియా రూపాలు", kn: "ಕ್ರಿಯಾ ಪದಗಳ ವಿವಿಧ ರೂಪಗಳು", ta: "வினை வடிவங்கள்",
  src: SRC + "the-potential-obligative-and-conditional-verbs",
  big: "These four forms line up neatly. <b>may</b> = -వచ్చు⟦kn| · -ಬಹುದು⟧⟦ta| · -லாம்⟧. <b>can</b> = -గలను⟦kn| · -ಬಲ್ಲೆ⟧⟦ta| · (-ஆல்) முடியும்⟧. <b>must</b> = -ఆలి⟦kn| · -ಬೇಕು⟧⟦ta| · -வேண்டும்⟧. <b>if</b> = -తే⟦kn| · -ದರೆ⟧⟦ta| · -ஆல்⟧.⟦kn ta| Kannada ಬೇಕು and Tamil வேண்டும் are the same word (b ↔ v).⟧",
  sections: [
    { h: "May (permission, possibility)",
      rows: [
        ["You may go.", "నువ్వు వెళ్ళవచ్చు.", "ನೀನು ಹೋಗಬಹುದು.", "நீ போகலாம்."],
        ["You may come.", "నువ్వు రావచ్చు.", "ನೀನು ಬರಬಹುದು.", "நீ வரலாம்."],
        ["He may read.", "అతను చదవవచ్చు.", "ಅವನು ಓದಬಹುದು.", "அவன் படிக்கலாம்."],
        ["She may be there.", "ఆమె ఉండవచ్చు.", "ಅವಳು ಇರಬಹುದು.", "அவள் இருக்கலாம்."],
        ["I may do (it).", "నేను చేయవచ్చు.", "ನಾನು ಮಾಡಬಹುದು.", "நான் செய்யலாம்."]
      ],
      tip: "⟦kn|Telugu -వచ్చు and Kannada -ಬಹುದು both literally mean “it may come” (వచ్చు ← రా, ಬಹುದು ← ಬರು).⟧⟦!kn|Telugu -వచ్చు literally means “it may come” (వచ్చు ← రా).⟧"
    },
    { h: "Can (ability)",
      p: "⟦kn|Kannada ಬಲ್ಲ takes person endings, like Telugu గల.⟧⟦kn ta| ⟧⟦ta|Tamil puts the doer in the instrumental (என்னால், “by me”) and uses முடியும் (“it is possible”). Compare Telugu నా వల్ల అవుతుంది.⟧",
      rows: [
        ["I can come.", "నేను రాగలను.", "ನಾನು ಬರಬಲ್ಲೆ.", "என்னால் வர முடியும்."],
        ["You can do (it).", "నువ్వు చేయగలవు.", "ನೀನು ಮಾಡಬಲ್ಲೆ.", "உன்னால் செய்ய முடியும்."],
        ["He can read.", "అతను చదవగలడు.", "ಅವನು ಓದಬಲ್ಲ.", "அவனால் படிக்க முடியும்."],
        ["She can come.", "ఆమె రాగలదు.", "ಅವಳು ಬರಬಲ್ಲಳು.", "அவளால் வர முடியும்."],
        ["They can speak well.", "వాళ్ళు బాగా మాట్లాడగలరు.", "ಅವರು ಚೆನ್ನಾಗಿ ಮಾತಾಡಬಲ್ಲರು.", "அவர்களால் நன்றாகப் பேச முடியும்."]
      ]
    },
    { h: "Must, should, want",
      rows: [
        ["You should do (it).", "నువ్వు చేయాలి.", "ನೀನು ಮಾಡಬೇಕು.", "நீ செய்ய வேண்டும்."],
        ["They should come.", "వాళ్ళు రావాలి.", "ಅವರು ಬರಬೇಕು.", "அவர்கள் வர வேண்டும்."],
        ["She should read.", "ఆమె చదవాలి.", "ಅವಳು ಓದಬೇಕು.", "அவள் படிக்க வேண்டும்."],
        ["I must read (no choice).", "నేను చదవాల్సిందే.", "ನಾನು ಓದಲೇಬೇಕು.", "நான் படித்தே ஆக வேண்டும்."],
        ["You must come.", "నువ్వు రావాల్సిందే.", "ನೀನು ಬರಲೇಬೇಕು.", "நீ வந்தே ஆக வேண்டும்."],
        ["You (pl.) must go.", "మీరు వెళ్ళాల్సిందే.", "ನೀವು ಹೋಗಲೇಬೇಕು.", "நீங்கள் போயே ஆக வேண்டும்."],
        ["I want (it).", "నాకు కావాలి.", "ನನಗೆ ಬೇಕು.", "எனக்கு வேண்டும்."],
        ["I don’t want (it).", "నాకు వద్దు.", "ನನಗೆ ಬೇಡ.", "எனக்கு வேண்டாம்."]
      ],
      tip: "“Must” is made stronger with -ఏ⟦kn| / -ಏ⟧⟦ta| / -ஏ⟧ in ⟦many|all three⟧⟦one|both⟧: రావాల్సిందే⟦kn|, ಬರಲೇಬೇಕು⟧⟦ta|, வந்தே ஆக வேண்டும்⟧.⟦ta| Spoken Tamil shortens வேண்டும் to -ணும் (செய்யணும்).⟧"
    },
    { h: "If, only if, even if",
      cols: ["", "Telugu -తే · -తేనే · -నా", "Kannada -ದರೆ · -ದರೇನೇ · -ದರೂ", "Tamil -ஆல் · -ஆல்தான் · -ஆலும்"],
      rows: [
        ["If you do it, I’ll watch.", "నువ్వు చేస్తే నేను చూస్తాను.", "ನೀನು ಮಾಡಿದರೆ ನಾನು ನೋಡುತ್ತೇನೆ.", "நீ செய்தால் நான் பார்ப்பேன்."],
        ["If he comes, I’ll go.", "అతను వస్తే నేను వెళ్తాను.", "ಅವನು ಬಂದರೆ ನಾನು ಹೋಗುತ್ತೇನೆ.", "அவன் வந்தால் நான் போவேன்."],
        ["It’s good if you read books.", "నువ్వు పుస్తకాలు చదివితే మంచిది.", "ನೀನು ಪುಸ್ತಕ ಓದಿದರೆ ಒಳ್ಳೆಯದು.", "நீ புத்தகம் படித்தால் நல்லது."],
        ["If you call, he will come.", "నువ్వు పిలిస్తే అతను వస్తాడు.", "ನೀನು ಕರೆದರೆ ಅವನು ಬರುತ್ತಾನೆ.", "நீ கூப்பிட்டால் அவன் வருவான்."],
        ["We’ll give only if they ask.", "వాళ్ళు అడిగితేనే మేము ఇస్తాము.", "ಅವರು ಕೇಳಿದರೇನೇ ನಾವು ಕೊಡುತ್ತೇವೆ.", "அவர்கள் கேட்டால்தான் நாங்கள் கொடுப்போம்."],
        ["He’ll buy a house only if I do.", "నేను ఇల్లు కొంటేనే అతను కొంటాడు.", "ನಾನು ಮನೆಯನ್ನು ಕೊಂಡುಕೊಂಡರೇನೇ ಅವನು ಕೊಂಡುಕೊಳ್ಳುತ್ತಾನೆ.", "நான் வீடு வாங்கினால்தான் அவன் வாங்குவான்."],
        ["Even if you call, he won’t come.", "నువ్వు పిలిచినా అతను రాడు.", "ನೀನು ಕರೆದರೂ ಅವನು ಬರುವುದಿಲ್ಲ.", "நீ கூப்பிட்டாலும் அவன் வரமாட்டான்."]
      ],
      tip: "Telugu adds -తే to the verb stem (వస్తే, చదివితే). ⟦#langs⟧ ⟦many|add their ending⟧⟦one|adds its ending⟧ to the past stem: ⟦kn|ಬಂದ + ರೆ⟧⟦kn ta|, ⟧⟦ta|வந்த + ால்⟧. If you know the past, you know the conditional."
    }
  ]
});

MODULES.push({
  id: "questions", en: "Questions & Negatives", te: "ప్రశ్నార్థకాలు & వ్యతిరేకం", kn: "ಪ್ರಶ್ನಾರ್ಥಕ ಪದಗಳು", ta: "வினாச்சொற்கள் & எதிர்மறை",
  src: SRC + "the-interrogatives",
  big: "Telugu has a neat “that / this / which” system: అక్కడ / ఇక్కడ / ఎక్కడ.⟦ta| Tamil has exactly the same one: அங்கே / இங்கே / எங்கே.⟧⟦kn| Kannada uses ಅಲ್ಲಿ / ಇಲ್ಲಿ / ಎಲ್ಲಿ.⟧ For negatives, ⟦many|all three keep⟧⟦one|both keep⟧ two words apart: “not there” (లేదు⟦kn| · ಇಲ್ಲ⟧⟦ta| · இல்லை⟧) and “not so” (కాదు⟦kn| · ಅಲ್ಲ⟧⟦ta| · அல்ல⟧).",
  sections: [
    { h: "The a- / i- / e- system",
      cols: ["", "Telugu (that · this · which)", "Kannada", "Tamil"],
      rows: [
        ["there · here · where", "అక్కడ · ఇక్కడ · ఎక్కడ", "ಅಲ್ಲಿ · ಇಲ್ಲಿ · ಎಲ್ಲಿ", "அங்கே · இங்கே · எங்கே"],
        ["then · now · when", "అప్పుడు · ఇప్పుడు · ఎప్పుడు", "ಆಗ · ಈಗ · ಯಾವಾಗ", "அப்போது · இப்போது · எப்போது"],
        ["that much · this much · how much", "అంత · ఇంత · ఎంత", "ಅಷ್ಟು · ಇಷ್ಟು · ಎಷ್ಟು", "அவ்வளவு · இவ்வளவு · எவ்வளவு"],
        ["that way · this way · how", "అలా · ఇలా · ఎలా", "ಹಾಗೆ · ಹೀಗೆ · ಹೇಗೆ", "அப்படி · இப்படி · எப்படி"],
        ["that · this · which (adj.)", "ఆ · ఈ · ఏ", "ಆ · ಈ · ಯಾವ", "அந்த · இந்த · எந்த"]
      ]
    },
    { h: "Other question words",
      rows: [
        ["what?", "ఏమిటి? / ఏం?", "ಏನು?", "என்ன?"],
        ["why?", "ఎందుకు?", "ಏಕೆ? / ಯಾಕೆ?", "ஏன்?"],
        ["who?", "ఎవరు?", "ಯಾರು?", "யார்?"],
        ["how many?", "ఎన్ని?", "ಎಷ್ಟು?", "எத்தனை?"],
        ["What do you want?", "మీకు ఏం కావాలి?", "ನಿಮಗೇನು ಬೇಕು?", "உங்களுக்கு என்ன வேண்டும்?"],
        ["Why did you come here?", "ఇక్కడికి ఎందుకు వచ్చావు?", "ಇಲ್ಲಿಗೆ ಏಕೆ ಬಂದೆ?", "இங்கே ஏன் வந்தாய்?"],
        ["How far are you going?", "ఎంత దూరం వెళ్తున్నారు?", "ಎಷ್ಟು ದೂರ ಹೋಗುತ್ತಿದ್ದೀರಿ?", "எவ்வளவு தூரம் போகிறீர்கள்?"],
        ["Where are you going?", "ఎక్కడికి వెళ్తున్నారు?", "ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?", "எங்கே போகிறீர்கள்?"],
        ["How are you?", "ఎలా ఉన్నారు?", "ಹೇಗಿದ್ದೀರಿ?", "எப்படி இருக்கிறீர்கள்?"],
        ["Who are they?", "వాళ్ళు ఎవరు?", "ಅವರು ಯಾರು?", "அவர்கள் யார்?"],
        ["What is your name?", "మీ పేరు ఏమిటి?", "ನಿಮ್ಮ ಹೆಸರೇನು?", "உங்கள் பெயர் என்ன?"]
      ]
    },
    { h: "Yes / no: add -ఆ⟦kn| · -ಆ / -ಏ⟧⟦ta| · -ஆ⟧",
      rows: [
        ["Will he (resp.) come today?", "ఆయన ఈరోజు వస్తారా?", "ಅವರು ಈ ದಿನ ಬರುತ್ತಾರೆಯೇ?", "அவர் இன்று வருவாரா?"],
        ["Do you read books?", "నువ్వు పుస్తకాలు చదువుతావా?", "ನೀನು ಪುಸ್ತಕ ಓದುತ್ತೀಯಾ?", "நீ புத்தகம் படிக்கிறாயா?"],
        ["Which is your home town? Mangaluru?", "మీ సొంత ఊరు ఏది? మంగళూరా?", "ನಿಮ್ಮ ಸ್ವಂತ ಊರು ಯಾವುದು? ಮಂಗಳೂರೇ?", "உங்கள் சொந்த ஊர் எது? மங்களூரா?"]
      ]
    },
    { h: "Not there (లేదు⟦kn| · ಇಲ್ಲ⟧⟦ta| · இல்லை⟧)",
      p: "Good news for Telugu speakers: Telugu లేదు changes with the person (లేను, లేవు, లేడు, లేరు).⟦kn ta| Kannada ಇಲ್ಲ and Tamil இல்லை never change.⟧⟦kn !ta| Kannada ಇಲ್ಲ never changes.⟧⟦ta !kn| Tamil இல்லை never changes.⟧",
      rows: [
        ["The book is with me.", "ఆ పుస్తకం నా దగ్గర ఉంది.", "ಆ ಪುಸ್ತಕ ನನ್ನ ಬಳಿ ಇದೆ.", "அந்தப் புத்தகம் என்னிடம் இருக்கிறது."],
        ["The book is not with me.", "ఆ పుస్తకం నా దగ్గర లేదు.", "ಆ ಪುಸ್ತಕ ನನ್ನ ಬಳಿ ಇಲ್ಲ.", "அந்தப் புத்தகம் என்னிடம் இல்லை."],
        ["There are houses there.", "అక్కడ ఇళ్ళు ఉన్నాయి.", "ಅಲ್ಲಿ ಮನೆಗಳಿವೆ.", "அங்கே வீடுகள் இருக்கின்றன."],
        ["There are no houses there.", "అక్కడ ఇళ్ళు లేవు.", "ಅಲ್ಲಿ ಮನೆಗಳಿಲ್ಲ.", "அங்கே வீடுகள் இல்லை."],
        ["He is not at home.", "అతను ఇంట్లో లేడు.", "ಅವನು ಮನೆಯಲ್ಲಿಲ್ಲ.", "அவன் வீட்டில் இல்லை."],
        ["I know.", "నాకు తెలుసు.", "ನನಗೆ ಗೊತ್ತು.", "எனக்குத் தெரியும்."],
        ["I don’t know.", "నాకు తెలియదు.", "ನನಗೆ ಗೊತ್ತಿಲ್ಲ.", "எனக்குத் தெரியாது."]
      ]
    },
    { h: "Not so (కాదు⟦kn| · ಅಲ್ಲ⟧⟦ta| · அல்ல⟧)",
      rows: [
        ["That book is mine.", "ఆ పుస్తకం నాది.", "ಆ ಪುಸ್ತಕ ನನ್ನದು.", "அந்தப் புத்தகம் என்னுடையது."],
        ["That book is not mine.", "ఆ పుస్తకం నాది కాదు.", "ಆ ಪುಸ್ತಕ ನನ್ನದಲ್ಲ.", "அந்தப் புத்தகம் என்னுடையது அல்ல."],
        ["That is not a good village.", "అది మంచి ఊరు కాదు.", "ಅದು ಒಳ್ಳೆಯ ಊರಲ್ಲ.", "அது நல்ல ஊர் அல்ல."]
      ],
      tip: "⟦ta|In everyday Tamil, இல்லை often replaces அல்ல too: என்னுடையது இல்லை.⟧"
    },
    { h: "Negative verbs",
      p: "Future and habit: Telugu has its own negative endings (రాను, రాడు).⟦kn| Kannada adds <b>-ಉವುದಿಲ್ಲ</b> (spoken -ಅಲ್ಲ: ಬರಲ್ಲ).⟧⟦ta| Tamil adds <b>மாட்டு-</b> with person endings (வரமாட்டேன்).⟧ Past: ⟦many|all three use⟧⟦one|both use⟧ infinitive + “not”: రాలేదు⟦kn| · ಬರಲಿಲ್ಲ⟧⟦ta| · வரவில்லை⟧.",
      rows: [
        ["I won’t play today.", "నేను ఈరోజు ఆడను.", "ನಾನು ಇವತ್ತು ಆಡುವುದಿಲ್ಲ.", "நான் இன்று விளையாட மாட்டேன்."],
        ["He will not come tomorrow.", "అతను రేపు రాడు.", "ಅವನು ನಾಳೆ ಬರುವುದಿಲ್ಲ.", "அவன் நாளை வரமாட்டான்."],
        ["He doesn’t walk.", "అతను నడవడు.", "ಅವನು ನಡೆಯುವುದಿಲ್ಲ.", "அவன் நடப்பதில்லை."],
        ["I did not read that book.", "నేను ఆ పుస్తకం చదవలేదు.", "ನಾನು ಆ ಪುಸ್ತಕ ಓದಲಿಲ್ಲ.", "நான் அந்தப் புத்தகத்தைப் படிக்கவில்லை."],
        ["She did not come to my house.", "ఆమె మా ఇంటికి రాలేదు.", "ಅವಳು ನಮ್ಮ ಮನೆಗೆ ಬರಲಿಲ್ಲ.", "அவள் எங்கள் வீட்டுக்கு வரவில்லை."],
        ["I was not at home.", "నేను ఇంట్లో లేను.", "ನಾನು ಮನೆಯಲ್ಲಿ ಇರಲಿಲ್ಲ.", "நான் வீட்டில் இருக்கவில்லை."]
      ]
    },
    { h: "Don’t! (prohibitive)",
      cols: ["", "Telugu -కు · -కండి", "Kannada -ಬೇಡ · -ಬೇಡಿ", "Tamil -ஆதே · -ஆதீர்கள்"],
      rows: [
        ["Do the work well.", "పని బాగా చేయండి.", "ಕೆಲಸ ಚೆನ್ನಾಗಿ ಮಾಡಿ.", "வேலையை நன்றாகச் செய்யுங்கள்."],
        ["Don’t do the work.", "పని చేయకండి.", "ಕೆಲಸ ಮಾಡಬೇಡಿ.", "வேலையைச் செய்யாதீர்கள்."],
        ["Come to our house.", "మా ఇంటికి రా.", "ನಮ್ಮ ಮನೆಗೆ ಬಾ.", "எங்கள் வீட்டுக்கு வா."],
        ["Don’t come to our house.", "మా ఇంటికి రాకు.", "ನಮ್ಮ ಮನೆಗೆ ಬರಬೇಡ.", "எங்கள் வீட்டுக்கு வராதே."],
        ["Don’t laugh at me.", "నన్ను చూసి నవ్వకు.", "ನನ್ನನ್ನು ನೋಡಿ ನಗಬೇಡ.", "என்னைப் பார்த்துச் சிரிக்காதே."]
      ],
      tip: "⟦kn|Kannada “don’t” is literally “not needed”: ಮಾಡಬೇಡ = ಮಾಡ + ಬೇಡ. Telugu says it the same way in చేయవద్దు.⟧⟦!kn|Telugu can say “don’t” as “not needed”: చేయవద్దు = చేయ + వద్దు.⟧"
    },
    { h: "Not-done (negative participle)",
      rows: [
        ["work he didn’t do", "అతను చేయని పని", "ಅವನು ಮಾಡದ ಕೆಲಸ", "அவன் செய்யாத வேலை"],
        ["the book she didn’t read", "ఆమె చదవని పుస్తకం", "ಅವಳು ಓದದ ಪುಸ್ತಕ", "அவள் படிக்காத புத்தகம்"]
      ]
    }
  ]
});

MODULES.push({
  id: "spoken", en: "Written vs Spoken", te: "గ్రాంథికం & వ్యావహారికం", kn: "ಲಿಖಿತ ಮತ್ತು ಆಡು ಮಾತಿನ ರೀತಿಗಳು", ta: "எழுத்துத் தமிழ் & பேச்சுத் தமிழ்",
  src: SRC + "the-written-and-spoken-styles",
  big: "You know this split from Telugu: చేస్తున్నాను is written, చేస్తున్నా is spoken.⟦kn| Kannada’s gap is small and regular: vowels drop (ಬರುತ್ತಾನೆ → ಬರ್ತಾನೆ).⟧⟦kn ta| Tamil’s gap is the widest of the three: books say வருகிறேன், people say வர்றேன்.⟧⟦ta !kn| Tamil’s gap is much wider: books say வருகிறேன், people say வர்றேன்.⟧ Learn written forms to read, spoken forms to talk.",
  sections: [
    { h: "Verbs: written → spoken",
      cols: ["", "Telugu", "Kannada", "Tamil"],
      rows: [
        ["he comes", "వస్తాడు", "ಬರುತ್ತಾನೆ → ಬರ್ತಾನೆ", "வருகிறான் → வர்றான்"],
        ["she does", "చేస్తుంది", "ಮಾಡುತ್ತಾಳೆ → ಮಾಡ್ತಾಳೆ", "செய்கிறாள் → செய்யறா"],
        ["I will do", "చేస్తాను → చేస్తా", "ಮಾಡುತ್ತೇನೆ → ಮಾಡ್ತೀನಿ", "செய்வேன் → செய்வேன் / பண்றேன்"],
        ["I did", "చేశాను → చేశా", "ಮಾಡಿದೆನು → ಮಾಡ್ದೆ", "செய்தேன் → செஞ்சேன்"],
        ["he laughs", "నవ్వుతాడు", "ನಗುತ್ತಾನೆ → ನಗ್ತಾನೆ", "சிரிக்கிறான் → சிரிக்கறான்"],
        ["he writes", "రాస్తాడు", "ಬರೆಯುತ್ತಾನೆ → ಬರೀತಾನೆ", "எழுதுகிறான் → எழுதுறான்"],
        ["let it come", "రానీ", "ಬರಲಿ → ಬರ್ಲಿ", "வரட்டும்"],
        ["sit", "కూర్చో", "ಕುಳಿತುಕೊಳ್ಳು → ಕೂತ್ಕೋ", "உட்கார் → உக்காரு"],
        ["bring (it)", "తీసుకురా", "ತೆಗೆದುಕೊಂಡು ಬಾ → ತಗೊಂಡ್ಬಾ", "எடுத்துக்கொண்டு வா → எடுத்துட்டு வா"],
        ["to do", "చేయడానికి", "ಮಾಡುವುದಕ್ಕೆ → ಮಾಡೋಕ್ಕೆ", "செய்வதற்கு → செய்யறதுக்கு"],
        ["it’s not possible for me", "నా వల్ల కాదు", "ನನ್ನಿಂದ ಆಗುವುದಿಲ್ಲ → ನನ್ನಿಂದಾಗೋಲ್ಲ", "என்னால் முடியாது → என்னால முடியாது"]
      ]
    },
    { h: "Words and nouns: written → spoken",
      rows: [
        ["not needed", "వద్దు", "ಬೇಡ → ಬ್ಯಾಡ", "வேண்டாம் → வேணாம்"],
        ["needed", "కావాలి", "ಬೇಕು", "வேண்டும் → வேணும்"],
        ["why", "ఎందుకు", "ಏಕೆ → ಯಾಕೆ", "ஏன்"],
        ["how", "ఎలా", "ಹೇಗೆ → ಹೆಂಗೆ", "எப்படி → எப்டி"],
        ["that way", "అలా", "ಹಾಗೆ → ಹಂಗೆ", "அப்படி → அப்டி"],
        ["very", "చాలా", "ಬಹಳ → ಬಾಳ", "மிகவும் → ரொம்ப"],
        ["boy", "అబ్బాయి", "ಹುಡುಗನು → ಹುಡ್ಗ", "பையன்"],
        ["girls", "అమ్మాయిలు", "ಹುಡುಗಿಯರು → ಹುಡ್ಗೀರು", "பெண்கள் → பொண்ணுங்க"],
        ["children", "పిల్లలు", "ಮಕ್ಕಳು → ಮಕ್ಳು", "குழந்தைகள் → கொழந்தைங்க"],
        ["in the house", "ఇంటిలో → ఇంట్లో", "ಮನೆಯಲ್ಲಿ → ಮನೇಲಿ", "வீட்டில் → வீட்ல"],
        ["on the wall", "గోడ మీద", "ಗೋಡೆಯ ಮೇಲೆ → ಗೋಡೇಮೇಲೆ", "சுவரின் மேல் → செவுத்து மேல"],
        ["to the child", "పిల్లకి", "ಮಗುವಿಗೆ → ಮಗೀಗೆ", "குழந்தைக்கு → கொழந்தைக்கு"]
      ]
    },
    { h: "Sentences: written → spoken",
      rows: [
        ["He came.", "అతను వచ్చాడు → వాడొచ్చాడు", "ಅವನು ಬಂದನು → ಅವನ್ ಬಂದ", "அவன் வந்தான் → அவன் வந்தான்"],
        ["I saw the girl.", "నేను అమ్మాయిని చూశాను → చూశా", "ಹುಡುಗಿಯನ್ನು ನೋಡಿದೆನು → ಹುಡುಗೀನ ನೋಡ್ದೆ", "நான் பெண்ணைப் பார்த்தேன் → பொண்ணப் பாத்தேன்"],
        ["I ate the fruit.", "నేను పండు తిన్నాను → తిన్నా", "ಹಣ್ಣನ್ನು ತಿಂದೆನು → ಹಣ್ಣು ತಿಂದೆ", "நான் பழம் சாப்பிட்டேன் → பழம் சாப்ட்டேன்"],
        ["I came from Mysuru.", "నేను మైసూరు నుండి వచ్చాను → మైసూర్నుంచి వచ్చా", "ಮೈಸೂರಿನಿಂದ ಬಂದೆನು → ಮೈಸೂರಿಂದ ಬಂದೆ", "நான் மைசூரிலிருந்து வந்தேன் → மைசூர்லேர்ந்து வந்தேன்"]
      ],
      tip: "⟦ta|Five Tamil speech rules cover most of it: -கிறேன் → -றேன், -இல் → -ல, -ஐ → -அ, -கள் → -ங்க, and final -ம் is half-swallowed (மரம் ≈ “marõ”).⟧"
    }
  ]
});

const SOUNDS = {
  id: "sounds", en: "Sound Shortcuts", te: "ధ్వని సూత్రాలు", kn: "ಧ್ವನಿ ಸೂತ್ರಗಳು", ta: "ஒலி விதிகள்",
  big: "⟦#langs+te⟧ come from one Dravidian parent, so words shifted in regular ways. Learn these patterns and you can often guess ⟦kn ta|a Kannada or Tamil⟧⟦kn !ta|a Kannada⟧⟦ta !kn|a Tamil⟧ word from the Telugu one.",
  sections: [
    { h: "⟦kn|Kannada h- = ⟧Telugu⟦ta| / Tamil⟧ p-⟦!kn| (shared roots)⟧",
      rows: [
        ["milk", "పాలు", "ಹಾಲು", "பால்"], ["tiger", "పులి", "ಹುಲಿ", "புலி"], ["snake", "పాము", "ಹಾವು", "பாம்பு"],
        ["song", "పాట", "ಹಾಡು", "பாட்டு"], ["ten", "పది", "ಹತ್ತು", "பத்து"], ["name", "పేరు", "ಹೆಸರು", "பெயர்"],
        ["flower", "పువ్వు", "ಹೂವು", "பூ"], ["tooth", "పన్ను / పల్లు", "ಹಲ್ಲು", "பல்"], ["cow", "ఆవు / పశువు", "ಹಸು", "பசு"],
        ["old", "పాత", "ಹಳೆಯ", "பழைய"], ["new", "కొత్త", "ಹೊಸ", "புதிய"]
      ],
      tip: "⟦kn|This holds for native Dravidian words. Sanskrit and English loans keep p- in Kannada (ಪುಸ್ತಕ, ಪೆನ್ನು).⟧⟦!kn|Telugu and Tamil both keep the old p- in native words.⟧ In the last two rows the Telugu word is unrelated⟦kn ta|; the match is between Kannada and Tamil⟧."
    },
    { h: "Kannada b- = Tamil v-", only: "kn ta",
      rows: [
        ["come!", "రా", "ಬಾ", "வா"], ["butter", "వెన్న", "ಬೆಣ್ಣೆ", "வெண்ணெய்"], ["silver", "వెండి", "ಬೆಳ್ಳಿ", "வெள்ளி"],
        ["root", "వేరు", "ಬೇರು", "வேர்"], ["bow", "విల్లు", "ಬಿಲ್ಲು", "வில்"], ["banana plant", "అరటి", "ಬಾಳೆ", "வாழை"],
        ["fall", "పడు", "ಬೀಳು", "விழு"], ["needed", "కావాలి", "ಬೇಕು", "வேண்டும்"], ["not needed", "వద్దు", "ಬೇಡ", "வேண்டாம்"]
      ],
      tip: "Telugu usually keeps v- (వెన్న, వెండి, వేరు, విల్లు, వల), so Tamil v- words often look familiar."
    },
    { h: "Telugu -a⟦kn| = Kannada -e⟧⟦ta| = Tamil -ai⟧",
      rows: [
        ["head", "తల", "ತಲೆ", "தலை"], ["wave", "అల", "ಅಲೆ", "அலை"], ["net", "వల", "ಬಲೆ", "வலை"],
        ["art", "కళ", "ಕಲೆ", "கலை"], ["father’s sister", "అత్త", "ಅತ್ತೆ", "அத்தை"], ["price", "వెల", "ಬೆಲೆ", "விலை"]
      ]
    },
    { h: "Telugu ḍ⟦kn| ≈ Kannada ḷ⟧⟦ta| ≈ Tamil ḻ⟧",
      rows: [
        ["seven", "ఏడు", "ಏಳು", "ஏழு"], ["hen", "కోడి", "ಕೋಳಿ", "கோழி"], ["fruit", "పండు", "ಹಣ್ಣು", "பழம்"],
        ["shade", "నీడ", "ನೆರಳು", "நிழல்"], ["Tamil", "తమిళం", "ತಮಿಳು", "தமிழ்", { only: "ta" }]
      ]
    },
    { h: "Tamil drops the final -u", only: "ta",
      rows: [
        ["village", "ఊరు", "ಊರು", "ஊர்"], ["water", "నీరు", "ನೀರು", "நீர்"], ["eye", "కన్ను", "ಕಣ್ಣು", "கண்"],
        ["leg", "కాలు", "ಕಾಲು", "கால்"], ["hand", "చెయ్యి", "ಕೈ", "கை"], ["salt", "ఉప్పు", "ಉಪ್ಪು", "உப்பு"]
      ],
      tip: "Exception: Tamil keeps -u after doubled consonants (உப்பு, பத்து)."
    },
    { h: "Telugu -ం⟦kn| = Kannada -a⟧⟦ta| = Tamil -ம்⟧",
      rows: [
        ["book", "పుస్తకం", "ಪುಸ್ತಕ", "புத்தகம்"], ["village", "గ్రామం", "ಗ್ರಾಮ", "கிராமம்"], ["country", "దేశం", "ದೇಶ", "தேசம்"],
        ["knowledge", "జ్ఞానం", "ಜ್ಞಾನ", "ஞானம்"], ["time", "సమయం", "ಸಮಯ", "சமயம் / நேரம்"]
      ]
    },
    { h: "False friends",
      cols: ["Word", "Telugu meaning", "Kannada meaning", "Tamil meaning"],
      noRead: true,
      rows: [
        ["makkaḷ", "—", "ಮಕ್ಕಳು = children", "மக்கள் = people"],
        ["tā", "తే / తీసుకురా = bring", "ತಾ = bring", "தா = give (me)"],
        ["vēḷa / vēlai", "వేళ = time", "ಕೆಲಸ = work", "வேலை = work"],
        ["āḍu", "ఆడు = play", "ಆಡು = play", "ஆடு = dance (also: goat)"],
        ["kēḷ", "విను / అడుగు", "ಕೇಳು = hear, ask", "கேள் = hear, ask"],
        ["kaḍe / kaḍai", "—", "ಕಡೆ = side, direction", "கடை = shop"]
      ]
    }
  ]
};
