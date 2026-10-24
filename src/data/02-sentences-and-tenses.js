MODULES.push({
  id: "verbless", en: "Sentences Without a Verb", te: "క్రియ లేని వాక్యాలు", kn: "ಕ್ರಿಯಾಪದ ರಹಿತ ವಾಕ್ಯಗಳು", ta: "வினையில்லா வாக்கியங்கள்",
  src: SRC + "verbless-sentences",
  big: "“That is a house” needs no verb in ⟦many|any of the three⟧⟦one|either language⟧: అది ఇల్లు⟦kn| · ಅದು ಮನೆ⟧⟦ta| · அது வீடு⟧. ⟦ta|Telugu and Tamil turn it⟧⟦!ta|Telugu turns it⟧ into a yes/no question with <b>-ఆ⟦ta| / -ஆ⟧</b>.⟦kn| Written Kannada uses <b>-ಏ</b>, though spoken Kannada also uses -ಆ.⟧",
  sections: [
    { h: "X is Y",
      rows: [
        ["That is a house.", "అది ఇల్లు.", "ಅದು ಮನೆ.", "அது வீடு."],
        ["This is a tree.", "ఇది చెట్టు.", "ಇದು ಮರ.", "இது மரம்."],
        ["He is Rama.", "అతను రాముడు.", "ಅವನು ರಾಮ.", "அவன் ராமன்."],
        ["This (woman) is Kamala.", "ఈమె కమల.", "ಇವಳು ಕಮಲಾ.", "இவள் கமலா."],
        ["That is a cow.", "అది ఆవు.", "ಅದು ಹಸು.", "அது பசு."],
        ["This is a calf.", "ఇది దూడ.", "ಇದು ಕರು.", "இது கன்று."]
      ]
    },
    { h: "Noun + noun (no “of” needed)",
      p: "Put two nouns side by side, as in Telugu.⟦ta| Tamil often doubles the next hard consonant at the join (எருமை + பால் → எருமைப் பால்). This is called <i>sandhi</i>; you will see it everywhere in written Tamil.⟧",
      rows: [
        ["This is a film song.", "ఇది సినిమా పాట.", "ಇದು ಸಿನಿಮಾ ಹಾಡು.", "இது சினிமாப் பாட்டு."],
        ["That is buffalo milk.", "అవి గేదె పాలు.", "ಅದು ಎಮ್ಮೆ ಹಾಲು.", "அது எருமைப் பால்."],
        ["That is the game of cricket.", "అది క్రికెట్ ఆట.", "ಅದು ಕ್ರಿಕೆಟ್ ಆಟ.", "அது கிரிக்கெட் ஆட்டம்."]
      ]
    },
    { h: "Yes / no questions",
      rows: [
        ["Is this a book?", "ఇది పుస్తకమా?", "ಇದು ಪುಸ್ತಕವೇ?", "இது புத்தகமா?"],
        ["Is that an elephant?", "అది ఏనుగా?", "ಅದು ಆನೆಯೇ?", "அது யானையா?"],
        ["Are they college students?", "వాళ్ళు కాలేజీ విద్యార్థులా?", "ಅವರು ಕಾಲೇಜ್ ವಿದ್ಯಾರ್ಥಿಗಳೇ?", "அவர்கள் கல்லூரி மாணவர்களா?"],
        ["Is that a horse or a donkey?", "అది గుర్రమా, గాడిదా?", "ಅದು ಕುದುರೆಯೇ, ಕತ್ತೆಯೇ?", "அது குதிரையா, கழுதையா?"]
      ],
      tip: "Telugu -ం nouns lose ం before -ఆ (పుస్తకం → పుస్తకమా).⟦ta| Tamil -ம் nouns do the same (புத்தகம் → புத்தகமா).⟧⟦kn| Kannada adds a v-glide (ಪುಸ್ತಕವೇ).⟧"
    },
    { h: "Question-word sentences",
      rows: [
        ["What is that?", "అదేమిటి?", "ಅದೇನು?", "அது என்ன?"],
        ["What is the price of that book?", "ఆ పుస్తకం ధర ఎంత?", "ಆ ಪುಸ್ತಕದ ಬೆಲೆ ಎಷ್ಟು?", "அந்தப் புத்தகத்தின் விலை என்ன?"],
        ["Where is the box?", "పెట్టె ఎక్కడ?", "ಪೆಟ್ಟಿಗೆ ಎಲ್ಲಿ?", "பெட்டி எங்கே?"]
      ],
      tip: "“That book”: ⟦kn|Telugu and Kannada say ఆ / ಆ⟧⟦!kn|Telugu says ఆ⟧⟦ta|, but Tamil uses அந்த (“that”) and இந்த (“this”)⟧."
    }
  ]
});

MODULES.push({
  id: "present", en: "The Present Tense", te: "వర్తమాన కాలం", kn: "ವರ್ತಮಾನ ಕಾಲ", ta: "நிகழ்காலம்",
  src: SRC + "the-present-tense",
  big: "Every verb in ⟦many|all three languages⟧⟦one|both languages⟧ ends in a <b>person marker</b> that echoes the pronoun: Telugu వచ్చా<b>డు</b> (వాడు)⟦kn|, Kannada ಬರುತ್ತಾ<b>ನೆ</b> (ಅವನು)⟧⟦ta|, Tamil வருகிறா<b>ன்</b> (அவன்)⟧. Learn the ⟦#langs⟧ endings once and they work on every tense.",
  sections: [
    { h: "Person endings (memorise these)",
      cols: ["", "Telugu", "Kannada", "Tamil"],
      rows: [
        ["I", "-ను", "-ಏನೆ", "-ஏன்"],
        ["we", "-ము / -ం", "-ಏವೆ", "-ஓம்"],
        ["you (casual)", "-వు", "-ಈಯೆ", "-ஆய்"],
        ["you (plural / polite)", "-రు", "-ಈರಿ", "-ஈர்கள்"],
        ["he", "-డు", "-ಆನೆ", "-ஆன்"],
        ["she", "-ది", "-ಆಳೆ", "-ஆள்"],
        ["they / respect", "-రు", "-ಆರೆ", "-ஆர்கள் / -ஆர்"],
        ["it", "-ది", "-ಅದೆ", "-அது"],
        ["they (things)", "-ఆయి", "-ಅವೆ", "-அன"]
      ]
    },
    { h: "“To be” (ఉండు⟦kn| · ಇರು⟧⟦ta| · இரு⟧)",
      rows: [
        ["I am (here)", "నేను ఉన్నాను", "ನಾನು ಇದ್ದೇನೆ", "நான் இருக்கிறேன்"],
        ["we are", "మేము ఉన్నాము", "ನಾವು ಇದ್ದೇವೆ", "நாங்கள் இருக்கிறோம்"],
        ["you are (casual)", "నువ్వు ఉన్నావు", "ನೀನು ಇದ್ದೀಯೆ", "நீ இருக்கிறாய்"],
        ["you are (polite)", "మీరు ఉన్నారు", "ನೀವು ಇದ್ದೀರಿ", "நீங்கள் இருக்கிறீர்கள்"],
        ["he is", "అతను ఉన్నాడు", "ಅವನು ಇದ್ದಾನೆ", "அவன் இருக்கிறான்"],
        ["she is", "ఆమె ఉంది", "ಅವಳು ಇದ್ದಾಳೆ", "அவள் இருக்கிறாள்"],
        ["they are", "వాళ్ళు ఉన్నారు", "ಅವರು ಇದ್ದಾರೆ", "அவர்கள் இருக்கிறார்கள்"],
        ["it is", "అది ఉంది", "ಅದು ಇದೆ", "அது இருக்கிறது"],
        ["they (things) are", "అవి ఉన్నాయి", "ಅವು ಇವೆ", "அவை இருக்கின்றன"]
      ],
      tip: "⟦kn ta|Kannada ಇರು and Tamil இரு are the same verb.⟧⟦kn !ta|Kannada ಇರು is an old Dravidian “be”.⟧⟦ta !kn|Tamil இரு is an old Dravidian “be”.⟧ Telugu has it too, in old and compound forms (ఇరుకు, ఉండిరి)."
    },
    { h: "Describing someone (no verb)",
      p: "Telugu adds a person ending to the noun (నేను విద్యార్థి<b>ని</b>). ⟦#langs⟧ ⟦many|don’t⟧⟦one|doesn’t⟧: the bare noun is enough.",
      rows: [
        ["I am a student.", "నేను విద్యార్థిని.", "ನಾನು ವಿದ್ಯಾರ್ಥಿ.", "நான் மாணவன்."],
        ["We are students.", "మేము విద్యార్థులం.", "ನಾವು ವಿದ್ಯಾರ್ಥಿಗಳು.", "நாங்கள் மாணவர்கள்."],
        ["You are a boy.", "నువ్వు అబ్బాయివి.", "ನೀನು ಹುಡುಗ.", "நீ பையன்."],
        ["He is a good man.", "అతను మంచివాడు.", "ಅವನು ಒಳ್ಳೆಯವನು.", "அவன் நல்லவன்."],
        ["She is a good woman.", "ఆమె మంచిది.", "ಅವಳು ಒಳ್ಳೆಯವಳು.", "அவள் நல்லவள்."],
        ["They are good people.", "వాళ్ళు మంచివాళ్ళు.", "ಅವರು ಒಳ್ಳೆಯವರು.", "அவர்கள் நல்லவர்கள்."],
        ["That is a small one.", "అది చిన్నది.", "ಅದು ಚಿಕ್ಕದು.", "அது சின்னது."],
        ["Those are big ones.", "అవి పెద్దవి.", "ಅವು ದೊಡ್ಡವು.", "அவை பெரியவை."],
        ["That book is mine.", "ఆ పుస్తకం నాది.", "ಆ ಪುಸ್ತಕ ನನ್ನದು.", "அந்தப் புத்தகம் என்னுடையது."]
      ],
      tip: "Telugu మంచివాడు⟦kn| = Kannada ಒಳ್ಳೆಯವನು⟧⟦ta| = Tamil நல்லவன்⟧: adjective + “person” ending, built the same way in ⟦many|all three⟧⟦one|both⟧."
    },
    { h: "Habitual: “I write, I go”",
      p: "Telugu uses -తా- (రాస్తాను) for both habit and future⟦kn|; Kannada does the same with <b>-ುತ್ತ-</b> (ಬರೆಯುತ್ತೇನೆ)⟧.⟦ta| Tamil has a true present tense with <b>-கிற்- / -க்கிற்-</b> (எழுதுகிறேன், படிக்கிறேன்), and often uses the future for habits.⟧",
      rows: [
        ["I write books.", "నేను పుస్తకాలు రాస్తాను.", "ನಾನು ಪುಸ್ತಕಗಳನ್ನು ಬರೆಯುತ್ತೇನೆ.", "நான் புத்தகங்கள் எழுதுகிறேன்."],
        ["We go to our village every year.", "మేము ప్రతి సంవత్సరం మా ఊరికి వెళ్తాము.", "ನಾವು ಪ್ರತಿ ವರ್ಷ ನಮ್ಮ ಊರಿಗೆ ಹೋಗುತ್ತೇವೆ.", "நாங்கள் ஒவ்வொரு வருடமும் எங்கள் ஊருக்குப் போவோம்."],
        ["You read.", "నువ్వు చదువుతావు.", "ನೀನು ಓದುತ್ತೀಯೆ.", "நீ படிக்கிறாய்."],
        ["You (pl.) laugh.", "మీరు నవ్వుతారు.", "ನೀವು ನಗುತ್ತೀರಿ.", "நீங்கள் சிரிக்கிறீர்கள்."],
        ["He (resp.) laughs nicely.", "ఆయన బాగా నవ్వుతారు.", "ಅವರು ಚೆನ್ನಾಗಿ ನಗುತ್ತಾರೆ.", "அவர் நன்றாகச் சிரிக்கிறார்."],
        ["She writes stories.", "ఆమె కథలు రాస్తుంది.", "ಅವಳು ಕಥೆಗಳನ್ನು ಬರೆಯುತ್ತಾಳೆ.", "அவள் கதைகள் எழுதுகிறாள்."],
        ["She lives in Mangaluru.", "ఆమె మంగళూరులో ఉంటుంది.", "ಆಕೆ ಮಂಗಳೂರಿನಲ್ಲಿ ಇರುತ್ತಾಳೆ.", "அவள் மங்களூரில் வசிக்கிறாள்."],
        ["They read books.", "వాళ్ళు పుస్తకాలు చదువుతారు.", "ಅವರು ಪುಸ್ತಕಗಳನ್ನು ಓದುತ್ತಾರೆ.", "அவர்கள் புத்தகங்கள் படிக்கிறார்கள்."],
        ["They buy houses.", "వాళ్ళు ఇళ్ళు కొంటారు.", "ಅವರು ಮನೆಗಳನ್ನು ಕೊಂಡುಕೊಳ್ಳುತ್ತಾರೆ.", "அவர்கள் வீடுகள் வாங்குகிறார்கள்."]
      ],
      tip: "“Our village” excludes the listener here: Telugu మా⟦ta|, Tamil எங்கள்⟧.⟦kn| Kannada uses ನಮ್ಮ for both మా and మన.⟧"
    },
    { h: "Continuous: “I am coming”",
      p: "⟦many|All three build⟧⟦one|Both build⟧ it the same way: verb + “be”. Telugu వస్తు + ఉన్నాను → వస్తున్నాను.⟦kn| Kannada ಬರುತ್ತ + ಇದ್ದೇನೆ → ಬರುತ್ತಿದ್ದೇನೆ.⟧⟦ta| Tamil வந்து + கொண்டு + இருக்கிறேன் → வந்துகொண்டிருக்கிறேன்.⟧",
      rows: [
        ["I am coming.", "నేను వస్తున్నాను.", "ನಾನು ಬರುತ್ತಿದ್ದೇನೆ.", "நான் வந்து|கொண்டிருக்கிறேன்."],
        ["We are playing.", "మేము ఆడుతున్నాము.", "ನಾವು ಆಡುತ್ತಿದ್ದೇವೆ.", "நாங்கள் விளையாடிக்கொண்டிருக்கிறோம்."],
        ["You are going.", "నువ్వు వెళ్తున్నావు.", "ನೀನು ಹೋಗುತ್ತಿದ್ದೀಯೆ.", "நீ போய்க்கொண்டிருக்கிறாய்."],
        ["You (pl.) are buying.", "మీరు కొంటున్నారు.", "ನೀವು ಕೊಂಡುಕೊಳ್ಳುತ್ತಿದ್ದೀರಿ.", "நீங்கள் வாங்கிக்கொண்டிருக்கிறீர்கள்."],
        ["He is reading.", "అతను చదువుతున్నాడు.", "ಅವನು ಓದುತ್ತಿದ್ದಾನೆ.", "அவன் படித்துக்கொண்டிருக்கிறான்."],
        ["She is coming.", "ఆమె వస్తోంది.", "ಅವಳು ಬರುತ್ತಿದ್ದಾಳೆ.", "அவள் வந்து|கொண்டிருக்கிறாள்."],
        ["It is going.", "అది వెళ్తోంది.", "ಅದು ಹೋಗುತ್ತಿದೆ.", "அது போய்க்கொண்டிருக்கிறது."],
        ["They (things) are coming.", "అవి వస్తున్నాయి.", "ಅವು ಬರುತ್ತಿವೆ.", "அவை வந்து|கொண்டிருக்கின்றன."],
        ["They are eating.", "వాళ్ళు తింటున్నారు.", "ಅವರು ತಿನ್ನುತ್ತಿದ್ದಾರೆ.", "அவர்கள் சாப்பிட்டுக்கொண்டிருக்கிறார்கள்."]
      ],
      tip: "⟦ta|In everyday Tamil the simple present (நான் வருகிறேன், “I’m coming”) is more common than the long -கொண்டிருக்கிறேன் form.⟧"
    }
  ]
});

MODULES.push({
  id: "past", en: "The Past Tense", te: "భూత కాలం", kn: "ಭೂತ ಕಾಲ", ta: "இறந்தகாலம்",
  src: SRC + "the-past-tense",
  big: "⟦kn|Kannada marks the past with <b>-ದ- / -ಇದ-</b> before the person ending (ಆಡಿದೆ, ಬಂದೆ). ⟧⟦kn ta|Tamil uses⟧⟦ta !kn|Tamil marks the past with⟧⟦ta| <b>-த்- / -ந்த்- / -இன்- / -ட்-</b> (செய்தேன், வந்தேன், போனேன், கேட்டேன்). ⟧Many verbs that are irregular in Telugu are irregular in the same way in ⟦#langs⟧: వచ్చాను⟦kn| · ಬಂದೆ⟧⟦ta| · வந்தேன்⟧.",
  sections: [
    { h: "Full pattern: “play”",
      rows: [
        ["I played", "నేను ఆడాను", "ನಾನು ಆಡಿದೆ(ನು)", "நான் விளையாடினேன்"],
        ["we played", "మేము ఆడాము", "ನಾವು ಆಡಿದೆವು", "நாங்கள் விளையாடினோம்"],
        ["you played", "నువ్వు ఆడావు", "ನೀನು ಆಡಿದೆ", "நீ விளையாடினாய்"],
        ["you (pl.) played", "మీరు ఆడారు", "ನೀವು ಆಡಿದಿರಿ", "நீங்கள் விளையாடினீர்கள்"],
        ["he played", "అతను ఆడాడు", "ಅವನು ಆಡಿದ(ನು)", "அவன் விளையாடினான்"],
        ["she played", "ఆమె ఆడింది", "ಅವಳು ಆಡಿದಳು", "அவள் விளையாடினாள்"],
        ["they played", "వాళ్ళు ఆడారు", "ಅವರು ಆಡಿದರು", "அவர்கள் விளையாடினார்கள்"],
        ["it played", "అది ఆడింది", "ಅದು ಆಡಿತು", "அது விளையாடியது"],
        ["they (things) played", "అవి ఆడాయి", "ಅವು ಆಡಿದುವು", "அவை விளையாடின"]
      ],
      tip: "⟦ta|Tamil ஆடு means “dance / sway”; for games Tamil uses விளையாடு. ⟧⟦kn|Kannada ಆಡು and Telugu ఆడు cover⟧⟦!kn|Telugu ఆడు covers⟧ both “play” and “dance”."
    },
    { h: "Full pattern: “come” (irregular, the same in ⟦many|all three⟧⟦one|both⟧)",
      rows: [
        ["I came", "నేను వచ్చాను", "ನಾನು ಬಂದೆ", "நான் வந்தேன்"],
        ["we came", "మేము వచ్చాము", "ನಾವು ಬಂದೆವು", "நாங்கள் வந்தோம்"],
        ["you came", "నువ్వు వచ్చావు", "ನೀನು ಬಂದೆ", "நீ வந்தாய்"],
        ["you (pl.) came", "మీరు వచ్చారు", "ನೀವು ಬಂದಿರಿ", "நீங்கள் வந்தீர்கள்"],
        ["he came", "అతను వచ్చాడు", "ಅವನು ಬಂದ(ನು)", "அவன் வந்தான்"],
        ["she came", "ఆమె వచ్చింది", "ಅವಳು ಬಂದಳು", "அவள் வந்தாள்"],
        ["they came", "వాళ్ళు వచ్చారు", "ಅವರು ಬಂದರು", "அவர்கள் வந்தார்கள்"],
        ["it came", "అది వచ్చింది", "ಅದು ಬಂದಿತು / ಬಂತು", "அது வந்தது"],
        ["they (things) came", "అవి వచ్చాయి", "ಅವು ಬಂದುವು / ಬಂದವು", "அவை வந்தன"]
      ]
    },
    { h: "Past stems to memorise",
      p: "These are the lesson’s irregular groups.⟦kn ta| Kannada and Tamil often share the stem (ಕಂಡೆ / கண்டேன், ಕೊಂದೆ / கொன்றேன்).⟧",
      rows: [
        ["I became · it became", "నేను అయ్యాను · అది అయింది", "ನಾನು ಆದೆ · ಅದು ಆಯಿತು", "நான் ஆனேன் · அது ஆனது"],
        ["I went", "నేను వెళ్ళాను", "ನಾನು ಹೋದೆ", "நான் போனேன்"],
        ["I ate", "నేను తిన్నాను", "ನಾನು ತಿಂದೆ", "நான் சாப்பிட்டேன்"],
        ["I killed", "నేను చంపాను", "ನಾನು ಕೊಂದೆ", "நான் கொன்றேன்"],
        ["I fell", "నేను పడ్డాను", "ನಾನು ಬಿದ್ದೆ", "நான் விழுந்தேன்"],
        ["I won", "నేను గెలిచాను", "ನಾನು ಗೆದ್ದೆ", "நான் வென்றேன்"],
        ["I saw", "నేను చూశాను", "ನಾನು ಕಂಡೆ / ನೋಡಿದೆ", "நான் கண்டேன் / பார்த்தேன்"],
        ["I did", "నేను చేశాను", "ನಾನು ಮಾಡಿದೆ", "நான் செய்தேன்"],
        ["I read", "నేను చదివాను", "ನಾನು ಓದಿದೆ", "நான் படித்தேன்"],
        ["I heard / asked", "నేను విన్నాను / అడిగాను", "ನಾನು ಕೇಳಿದೆ", "நான் கேட்டேன்"],
        ["I bought", "నేను కొన్నాను", "ನಾನು ಕೊಂಡೆ", "நான் வாங்கினேன்"]
      ],
      tip: "⟦kn ta|Kannada ಕೇಳು and Tamil கேள் each mean⟧⟦kn !ta|Kannada ಕೇಳು means⟧⟦ta !kn|Tamil கேள் means⟧ both “hear” and “ask”. Telugu splits these into విను and అడుగు."
    },
    { h: "Sentences",
      rows: [
        ["He did the work.", "అతను పని చేశాడు.", "ಅವನು ಕೆಲಸ ಮಾಡಿದನು.", "அவன் வேலை செய்தான்."],
        ["We ate at his house.", "మేము అతని ఇంట్లో తిన్నాము.", "ನಾವು ಅವನ ಮನೆಯಲ್ಲಿ ಊಟ ಮಾಡಿದೆವು.", "நாங்கள் அவன் வீட்டில் சாப்பிட்டோம்."],
        ["She bought three books.", "ఆమె మూడు పుస్తకాలు కొంది.", "ಅವಳು ಮೂರು ಪುಸ್ತಕಗಳನ್ನು ಕೊಂಡಳು.", "அவள் மூன்று புத்தகங்கள் வாங்கினாள்."],
        ["They went to Kalaburagi.", "వాళ్ళు కలబురగికి వెళ్ళారు.", "ಅವರು ಕಲಬುರಗಿಗೆ ಹೋದರು.", "அவர்கள் கலபுரகிக்குப் போனார்கள்."] 
      ]
    }
  ]
});

MODULES.push({
  id: "future", en: "The Future Tense", te: "భవిష్యత్ కాలం", kn: "ಭವಿಷ್ಯತ್ ಕಾಲ", ta: "எதிர்காலம்",
  src: SRC + "the-future-tense",
  big: "⟦kn|Modern Kannada works like Telugu: one form covers both habit and future (ಮಾಡುತ್ತೇನೆ = చేస్తాను). Add ನಾಳೆ (“tomorrow”) and it is future. ⟧⟦!kn|Telugu uses one form for both habit and future (చేస్తాను). ⟧⟦ta|Tamil has a separate future with <b>-வ்- / -ப்ப்-</b>: செய்வேன் (“I will do”), படிப்பேன் (“I will read”). ⟧For “let’s…”, Telugu -దాం⟦kn| = Kannada -ಓಣ⟧⟦ta| = Tamil -ஓம் / -லாம்⟧.",
  sections: [
    { h: "Full pattern: “do”",
      p: "⟦kn|Kannada has an older literary future (ಮಾಡುವೆನು) that you will meet in books. In speech use the -ುತ್ತ- form.⟧",
      cols: ["", "Telugu", "Kannada (spoken · literary)", "Tamil"],
      rows: [
        ["I will do", "నేను చేస్తాను", "ನಾನು ಮಾಡುತ್ತೇನೆ · ಮಾಡುವೆನು", "நான் செய்வேன்"],
        ["we will do", "మేము చేస్తాము", "ನಾವು ಮಾಡುತ್ತೇವೆ · ಮಾಡುವೆವು", "நாங்கள் செய்வோம்"],
        ["you will do", "నువ్వు చేస్తావు", "ನೀನು ಮಾಡುತ್ತೀಯೆ · ಮಾಡುವೆ", "நீ செய்வாய்"],
        ["you (pl.) will do", "మీరు చేస్తారు", "ನೀವು ಮಾಡುತ್ತೀರಿ · ಮಾಡುವಿರಿ", "நீங்கள் செய்வீர்கள்"],
        ["he will do", "అతను చేస్తాడు", "ಅವನು ಮಾಡುತ್ತಾನೆ · ಮಾಡುವನು", "அவன் செய்வான்"],
        ["she will do", "ఆమె చేస్తుంది", "ಅವಳು ಮಾಡುತ್ತಾಳೆ · ಮಾಡುವಳು", "அவள் செய்வாள்"],
        ["they will do", "వాళ్ళు చేస్తారు", "ಅವರು ಮಾಡುತ್ತಾರೆ · ಮಾಡುವರು", "அவர்கள் செய்வார்கள்"],
        ["it will do", "అది చేస్తుంది", "ಅದು ಮಾಡುತ್ತದೆ · ಮಾಡುವುದು", "அது செய்யும்"],
        ["they (things) will do", "అవి చేస్తాయి", "ಅವು ಮಾಡುತ್ತವೆ · ಮಾಡುವುವು", "அவை செய்யும்"]
      ],
      tip: "⟦ta|Tamil’s neuter future -உம் (செய்யும், வரும்) is also used for general truths: மழை பெய்யும் (“it rains”).⟧"
    },
    { h: "With time words",
      rows: [
        ["tomorrow", "రేపు", "ನಾಳೆ", "நாளை"],
        ["day after tomorrow", "ఎల్లుండి", "ನಾಳಿದ್ದು", "நாளை மறுநாள்"],
        ["I will buy the books tomorrow.", "నేను రేపు పుస్తకాలు కొంటాను.", "ನಾನು ನಾಳೆ ಪುಸ್ತಕಗಳನ್ನು ಕೊಂಡುಕೊಳ್ಳುತ್ತೇನೆ.", "நான் நாளை புத்தகங்கள் வாங்குவேன்."],
        ["Are you going the day after tomorrow?", "మీరు ఎల్లుండి వెళ్తారా?", "ನೀವು ನಾಳಿದ್ದು ಹೋಗುತ್ತೀರಾ?", "நீங்கள் நாளை மறுநாள் போவீர்களா?"],
        ["He (resp.) will come from Hampi.", "ఆయన హంపి నుంచి వస్తారు.", "ಅವರು ಹಂಪಿಯಿಂದ ಬರುತ್ತಾರೆ.", "அவர் ஹம்பியிலிருந்து வருவார்."],
        ["She will read this book.", "ఆమె ఈ పుస్తకం చదువుతుంది.", "ಆಕೆ ಈ ಪುಸ್ತಕ ಓದುತ್ತಾಳೆ.", "அவள் இந்தப் புத்தகத்தைப் படிப்பாள்."],
        ["They will sing two songs.", "వాళ్ళు రెండు పాటలు పాడతారు.", "ಅವರು ಎರಡು ಹಾಡುಗಳನ್ನು ಹಾಡುತ್ತಾರೆ.", "அவர்கள் இரண்டு பாடல்கள் பாடுவார்கள்."],
        ["That book will come tomorrow.", "ఆ పుస్తకం రేపు వస్తుంది.", "ಆ ಪುಸ್ತಕ ನಾಳೆ ಬರುತ್ತದೆ.", "அந்தப் புத்தகம் நாளை வரும்."],
        ["These buses will reach Chennai tomorrow.", "ఈ బస్సులు రేపు చెన్నై చేరుకుంటాయి.", "ಈ ಬಸ್ಸುಗಳು ನಾಳೆ ಚೆನ್ನೈ ತಲುಪುತ್ತವೆ.", "இந்தப் பேருந்துகள் நாளை சென்னையை அடையும்."]
      ]
    },
    { h: "Let’s… (hortative)",
      cols: ["", "Telugu -దాం", "Kannada -ಓಣ", "Tamil -ஓம் / -லாம்"],
      rows: [
        ["Let’s go.", "మనం వెళ్దాం.", "ನಾವು ಹೋಗೋಣ.", "நாம் போவோம். / போகலாம்."],
        ["Let’s read tomorrow.", "రేపు చదువుదాం.", "ನಾವು ನಾಳೆ ಓದೋಣ.", "நாளை படிப்போம்."],
        ["Let’s watch that movie.", "ఆ సినిమా చూద్దాం.", "ನಾವು ಆ ಸಿನಿಮಾ ನೋಡೋಣ.", "அந்தப் படத்தைப் பார்ப்போம்."],
        ["Let all of us sing tomorrow.", "మనమందరం రేపు పాడదాం.", "ನಾವೆಲ್ಲಾ ನಾಳೆ ಹಾಡೋಣ.", "நாம் எல்லோரும் நாளை பாடுவோம்."]
      ],
      tip: "⟦ta|Spoken Tamil’s “let’s go” is போலாம் (pōlām). You will hear it constantly.⟧"
    }
  ]
});

MODULES.push({
  id: "cases", en: "Cases", te: "విభక్తులు", kn: "ವಿಭಕ್ತಿಗಳು", ta: "வேற்றுமை",
  src: SRC + "cases",
  big: "Telugu adds postpositions such as -ని, -కి, -లో, -తో to nouns. ⟦#langs⟧ ⟦many|do the same, with their⟧⟦one|does the same, with its⟧ own small set of endings. The most useful three: <b>to</b> = -కి⟦kn| · -ಗೆ/-ಕ್ಕೆ⟧⟦ta| · -க்கு⟧; <b>in</b> = -లో⟦kn| · -ಅಲ್ಲಿ⟧⟦ta| · -இல்⟧; <b>object</b> = -ని⟦kn| · -ಅನ್ನು⟧⟦ta| · -ஐ⟧.",
  sections: [
    { h: "The case endings",
      cols: ["", "Telugu", "Kannada", "Tamil"],
      rows: [
        ["Nominative (subject)", "— (ప్రథమా)", "— / -ಉ (ಪ್ರಥಮಾ)", "— (எழுவாய்)"],
        ["Accusative (object)", "-ని / -ను", "-ಅನ್ನು", "-ஐ"],
        ["Instrumental (by, with)", "-తో / -చేత", "-ಇಂದ", "-ஆல்"],
        ["Dative (to, for)", "-కి / -కు", "-ಗೆ / -ಇಗೆ / -ಕ್ಕೆ", "-க்கு / -உக்கு"],
        ["Ablative (from)", "-నుంచి / -నుండి", "-ಇಂದ", "-இலிருந்து / -இடமிருந்து"],
        ["Genitive (of, ’s)", "oblique / -యొక్క", "-ಅ", "-இன் / -உடைய"],
        ["Locative (in, at)", "-లో / -మీద", "-ಅಲ್ಲಿ / -ಒಳಗೆ", "-இல் / -இடம்"],
        ["Sociative (together with)", "-తో", "ಜೊತೆ / -ಒಡನೆ", "-உடன் / -ஓடு"],
        ["Vocative (O …!)", "-ఆ / -ఓ", "-ಆ / -ಏ", "-ஏ / -ஆ"]
      ],
      tip: "⟦kn|Kannada -ಇಂದ means both “by” and “from”. ⟧⟦kn ta|Tamil splits them⟧⟦ta !kn|Tamil uses two different endings⟧⟦ta|: -ஆல் for “by” and -இலிருந்து for “from”.⟧"
    },
    { h: "One noun through every case: “tree”",
      rows: [
        ["tree", "చెట్టు", "ಮರ", "மரம்"],
        ["the tree (object)", "చెట్టును", "ಮರವನ್ನು", "மரத்தை"],
        ["by the tree", "చెట్టుతో", "ಮರದಿಂದ", "மரத்தால்"],
        ["to the tree", "చెట్టుకు", "ಮರಕ್ಕೆ", "மரத்துக்கு"],
        ["from the tree", "చెట్టు నుంచి", "ಮರದಿಂದ", "மரத்திலிருந்து"],
        ["of the tree", "చెట్టు (యొక్క)", "ಮರದ", "மரத்தின்"],
        ["in the tree", "చెట్టులో", "ಮರದಲ್ಲಿ", "மரத்தில்"],
        ["O tree!", "ఓ చెట్టా!", "ಮರವೇ!", "மரமே!"]
      ],
      tip: "⟦ta|Tamil -ம் nouns switch to a -த்த்- stem before endings (மரம் → மரத்தில்), much as Telugu ఇల్లు becomes ఇంటి- (ఇంటికి). ⟧⟦kn !ta|Telugu ఇల్లు becomes ఇంటి- before endings (ఇంటికి). ⟧⟦kn|Kannada neuter -a nouns use -ದ-, -ವ- or -ಕ್ಕ-.⟧"
    },
    { h: "A person through every case: “Rama”",
      rows: [
        ["Rama", "రాముడు", "ರಾಮ", "ராமன்"],
        ["Rama (object)", "రాముడిని", "ರಾಮನನ್ನು", "ராமனை"],
        ["to Rama", "రాముడికి", "ರಾಮನಿಗೆ", "ராமனுக்கு"],
        ["Rama’s", "రాముడి", "ರಾಮನ", "ராமனின் / ராமனுடைய"],
        ["with Rama", "రాముడితో", "ರಾಮನ ಜೊತೆ", "ராமனுடன்"],
        ["O Rama!", "రామా!", "ರಾಮಾ!", "ராமா!"]
      ],
      tip: "⟦kn|Kannada human nouns in -a add -ನ- before an ending (ರಾಮ → ರಾಮನನ್ನು), the way Telugu adds -డి- (రాముడిని).⟧"
    },
    { h: "Pronouns in the cases",
      cols: ["", "Telugu", "Kannada", "Tamil"],
      rows: [
        ["me · to me · my", "నన్ను · నాకు · నా", "ನನ್ನನ್ನು · ನನಗೆ · ನನ್ನ", "என்னை · எனக்கு · என்"],
        ["us · to us · our", "మమ్మల్ని · మాకు · మా", "ನಮ್ಮನ್ನು · ನಮಗೆ · ನಮ್ಮ", "எங்களை · எங்களுக்கு · எங்கள்"],
        ["you · to you · your", "నిన్ను · నీకు · నీ", "ನಿನ್ನನ್ನು · ನಿನಗೆ · ನಿನ್ನ", "உன்னை · உனக்கு · உன்"],
        ["you (pl.) · to you · your", "మిమ్మల్ని · మీకు · మీ", "ನಿಮ್ಮನ್ನು · ನಿಮಗೆ · ನಿಮ್ಮ", "உங்களை · உங்களுக்கு · உங்கள்"],
        ["him · to him · his", "అతన్ని · అతనికి · అతని", "ಅವನನ್ನು · ಅವನಿಗೆ · ಅವನ", "அவனை · அவனுக்கு · அவனுடைய"],
        ["her · to her · her", "ఆమెను · ఆమెకు · ఆమె", "ಅವಳನ್ನು · ಅವಳಿಗೆ · ಅವಳ", "அவளை · அவளுக்கு · அவளுடைய"],
        ["it · to it · its", "దాన్ని · దానికి · దాని", "ಅದನ್ನು · ಅದಕ್ಕೆ · ಅದರ", "அதை · அதற்கு · அதன்"],
        ["them · to them · their", "వాళ్ళని · వాళ్ళకి · వాళ్ళ", "ಅವರನ್ನು · ಅವರಿಗೆ · ಅವರ", "அவர்களை · அவர்களுக்கு · அவர்களுடைய"]
      ],
      tip: "⟦kn|Kannada pronouns shorten the long vowel, just like Telugu: నేను → నన్ను, ನಾನು → ನನ್ನನ್ನು. ⟧⟦ta !kn|Telugu pronouns shorten the long vowel: నేను → నన్ను. ⟧⟦ta|Tamil changes the vowel: நான் → என்னை, நீ → உன்னை.⟧"
    },
    { h: "Cases in sentences",
      rows: [
        ["He wrote with a pen.", "అతను పెన్నుతో రాశాడు.", "ಅವನು ಪೆನ್ನಿಂದ ಬರೆದನು.", "அவன் பேனாவால் எழுதினான்."],
        ["It is not possible for him.", "ఇది అతని వల్ల కాదు.", "ಇದು ಅವನಿಂದ ಆಗುವುದಿಲ್ಲ.", "இது அவனால் முடியாது."],
        ["He came from Mysuru.", "అతను మైసూరు నుంచి వచ్చాడు.", "ಅವನು ಮೈಸೂರಿನಿಂದ ಬಂದನು.", "அவன் மைசூரிலிருந்து வந்தான்."],
        ["We get knowledge from books.", "పుస్తకాల నుంచి మనకు జ్ఞానం వస్తుంది.", "ಪುಸ್ತಕಗಳಿಂದ ನಮಗೆ ಜ್ಞಾನ ಸಿಗುತ್ತದೆ.", "புத்தகங்களிலிருந்து நமக்கு அறிவு கிடைக்கிறது."],
        ["with father", "నాన్నతో", "ತಂದೆಯ ಜೊತೆ", "அப்பாவுடன்"],
        ["father’s word", "నాన్న మాట", "ತಂದೆಯ ಮಾತು", "அப்பாவின் சொல்"],
        ["cow’s milk", "ఆవు పాలు", "ಹಸುವಿನ ಹಾಲು", "பசுவின் பால்"],
        ["in the house", "ఇంట్లో", "ಮನೆಯಲ್ಲಿ", "வீட்டில்"],
        ["inside the house", "ఇంటి లోపల", "ಮನೆಯೊಳಗೆ", "வீட்டுக்குள்ளே"],
        ["I have money (with me).", "నా దగ్గర డబ్బు ఉంది.", "ನನ್ನಲ್ಲಿ ಹಣ ಇದೆ.", "என்னிடம் பணம் இருக்கிறது."],
        ["I will come by tomorrow.", "నేను రేపటిలోగా వస్తాను.", "ನಾನು ನಾಳೆಯೊಳಗೆ ಬರುತ್ತೇನೆ.", "நான் நாளைக்குள் வருவேன்."],
        ["O sister!", "అక్కా!", "ಅಕ್ಕಾ!", "அக்கா!"],
        ["O teacher!", "గురువుగారూ!", "ಗುರುಗಳೇ!", "குருவே!"]
      ],
      tip: "“I have” is “with me there is” in ⟦many|all three⟧⟦one|both⟧: నా దగ్గర ఉంది⟦kn| · ನನ್ನಲ್ಲಿ ಇದೆ⟧⟦ta| · என்னிடம் இருக்கிறது⟧."
    }
  ]
});

MODULES.push({
  id: "participles", en: "Participles", te: "క్త్వార్థకం & విశేషణ క్రియలు", kn: "ಕೃದಂತಗಳು", ta: "எச்சங்கள்",
  src: SRC + "participles",
  big: "Telugu chains actions with the -ఇ form: వెళ్ళి చూడు (“go and see”). ⟦#langs⟧ ⟦many|chain them⟧⟦one|chains them⟧ the same way: ⟦kn|ಹೋಗಿ ನೋಡು⟧⟦kn ta| · ⟧⟦ta|போய்ப் பார்⟧. The “who did / which is” form also matches: నేను తిన్న పండు⟦kn| · ನಾನು ತಿಂದ ಹಣ್ಣು⟧⟦ta| · நான் சாப்பிட்ட பழம்⟧.",
  sections: [
    { h: "Having done… (adverbial participle)",
      rows: [
        ["having played", "ఆడి", "ಆಡಿ", "விளையாடி"],
        ["having done", "చేసి", "ಮಾಡಿ", "செய்து"],
        ["having sung", "పాడి", "ಹಾಡಿ", "பாடி"],
        ["having climbed", "ఎక్కి", "ಹತ್ತಿ", "ஏறி"],
        ["having gone", "వెళ్ళి", "ಹೋಗಿ", "போய்"],
        ["having read", "చదివి", "ಓದಿ", "படித்து"],
        ["having believed", "నమ్మి", "ನಂಬಿ", "நம்பி"],
        ["having become", "అయి", "ಆಗಿ", "ஆகி"],
        ["having put", "వేసి", "ಹಾಕಿ", "போட்டு"],
        ["having closed", "మూసి", "ಮುಚ್ಚಿ", "மூடி"],
        ["having asked / heard", "అడిగి / విని", "ಕೇಳಿ", "கேட்டு"],
        ["having searched", "వెతికి", "ಹುಡುಕಿ", "தேடி"],
        ["having bought", "కొని", "ಕೊಂಡು", "வாங்கி"],
        ["having seen", "చూసి", "ಕಂಡು / ನೋಡಿ", "கண்டு / பார்த்து"],
        ["having eaten", "తిని", "ತಿಂದು / ಉಂಡು", "தின்று / சாப்பிட்டு"],
        ["having said (= “that…”)", "అని", "ಎಂದು / ಅಂತ", "என்று"],
        ["having killed", "చంపి", "ಕೊಂದು", "கொன்று"],
        ["having come", "వచ్చి", "ಬಂದು", "வந்து"],
        ["having brought", "తెచ్చి", "ತಂದು", "கொண்டு|வந்து"],
        ["having stayed", "ఉండి", "ಇದ್ದು", "இருந்து"],
        ["having won", "గెలిచి", "ಗೆದ್ದು", "வென்று"],
        ["having fallen", "పడి", "ಬಿದ್ದು", "விழுந்து"],
        ["having opened", "తెరిచి", "ತೆರೆದು", "திறந்து"],
        ["having called", "పిలిచి", "ಕರೆದು", "கூப்பிட்டு"],
        ["having washed", "కడిగి", "ತೊಳೆದು", "கழுவி"],
        ["having beaten", "కొట్టి", "ಹೊಡೆದು", "அடித்து"],
        ["having stopped (sth.)", "ఆపి", "ನಿಲ್ಲಿಸಿ", "நிறுத்தி"],
        ["having laughed", "నవ్వి", "ನಕ್ಕು", "சிரித்து"],
        ["having given", "ఇచ్చి", "ಕೊಟ್ಟು", "கொடுத்து"],
        ["having left", "వదిలి / విడిచి", "ಬಿಟ್ಟು", "விட்டு"],
        ["having stood", "నిలబడి", "ನಿಂತು", "நின்று"],
        ["having sat", "కూర్చుని", "ಕುಳಿತು", "உட்கார்ந்து"]
      ],
      tip: "Quotative “that”: Telugu అని⟦kn| = Kannada ಎಂದು (spoken ಅಂತ)⟧⟦ta| = Tamil என்று (spoken -ன்னு)⟧. వస్తాను అని చెప్పాడు⟦kn| · ಬರುತ್ತೇನೆ ಎಂದು ಹೇಳಿದ⟧⟦ta| · வருவேன் என்று சொன்னான்⟧."
    },
    { h: "Chaining actions",
      rows: [
        ["He plays well and wins.", "అతను బాగా ఆడి గెలుస్తాడు.", "ಅವನು ಚೆನ್ನಾಗಿ ಆಡಿ ಗೆಲ್ಲುತ್ತಾನೆ.", "அவன் நன்றாக விளையாடி வெல்வான்."],
        ["She trusts him and gives money.", "అతన్ని నమ్మి ఆమె డబ్బు ఇస్తుంది.", "ಅವನನ್ನು ನಂಬಿ ಆಕೆ ಹಣ ಕೊಡುತ್ತಾಳೆ.", "அவனை நம்பி அவள் பணம் கொடுப்பாள்."],
        ["I’ll come tomorrow and go to their house.", "నేను రేపు వచ్చి వాళ్ళ ఇంటికి వెళ్తాను.", "ನಾನು ನಾಳೆ ಬಂದು ಅವರ ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ.", "நான் நாளை வந்து அவர்கள் வீட்டுக்குப் போவேன்."],
        ["I’ll write a book and send it to you.", "నేను పుస్తకం రాసి మీకు పంపిస్తాను.", "ನಾನು ಪುಸ್ತಕ ಬರೆದು ನಿಮಗೆ ಕಳುಹಿಸುತ್ತೇನೆ.", "நான் புத்தகம் எழுதி உங்களுக்கு அனுப்புவேன்."],
        ["Go there and see her.", "అక్కడికి వెళ్ళి ఆమెను చూడు.", "ಅಲ್ಲಿಗೆ ಹೋಗಿ ಅವಳನ್ನು ನೋಡು.", "அங்கே போய் அவளைப் பார்."],
        ["Finish that work and come.", "ఆ పని చేసి రా.", "ಆ ಕೆಲಸ ಮಾಡಿ ಬಾ.", "அந்த வேலையைச் செய்துவிட்டு வா."],
        ["Bring her along.", "ఆమెను తీసుకురా.", "ಅವಳನ್ನು ಕರೆದುಕೊಂಡು ಬಾ.", "அவளை அழைத்துக்கொண்டு வா."]
      ]
    },
    { h: "Which / who did… (adjectival participle)",
      cols: ["", "Telugu (past · present)", "Kannada (past · present)", "Tamil (past · present)"],
      rows: [
        ["played · plays", "ఆడిన · ఆడే", "ಆಡಿದ · ಆಡುವ", "விளையாடிய · விளையாடும்"],
        ["did · does", "చేసిన · చేసే", "ಮಾಡಿದ · ಮಾಡುವ", "செய்த · செய்யும்"],
        ["went · goes", "వెళ్ళిన · వెళ్ళే", "ಹೋದ · ಹೋಗುವ", "போன · போகும்"],
        ["came · comes", "వచ్చిన · వచ్చే", "ಬಂದ · ಬರುವ", "வந்த · வரும்"],
        ["became · becomes", "అయిన · అయ్యే", "ಆದ · ಆಗುವ", "ஆன · ஆகும்"],
        ["ate · eats", "తిన్న · తినే", "ತಿಂದ · ತಿನ್ನುವ", "சாப்பிட்ட · சாப்பிடும்"],
        ["bought · buys", "కొన్న · కొనే", "ಕೊಂಡ · ಕೊಳ್ಳುವ", "வாங்கிய · வாங்கும்"],
        ["searched · searches", "వెతికిన · వెతికే", "ಹುಡುಕಿದ · ಹುಡುಕುವ", "தேடிய · தேடும்"],
        ["drove · drives", "నడిపిన · నడిపే", "ಓಡಿಸಿದ · ಓಡಿಸುವ", "ஓட்டிய · ஓட்டும்"]
      ]
    },
    { h: "In sentences",
      rows: [
        ["This is the fruit I ate.", "ఇది నేను తిన్న పండు.", "ಇದು ನಾನು ತಿಂದ ಹಣ್ಣು.", "இது நான் சாப்பிட்ட பழம்."],
        ["This is the work he did.", "ఇది ఆయన చేసిన పని.", "ಇದು ಆತ ಮಾಡಿದ ಕೆಲಸ.", "இது அவர் செய்த வேலை."],
        ["This is the book she reads.", "ఇది ఆమె చదివే పుస్తకం.", "ಇದು ಅವಳು ಓದುವ ಪುಸ್ತಕ.", "இது அவள் படிக்கும் புத்தகம்."],
        ["She is the one who played tennis.", "టెన్నిస్ ఆడింది ఆమే.", "ಅವಳೇ ಟೆನಿಸ್ ಆಡಿದವಳು.", "அவள்தான் டென்னிஸ் விளையாடியவள்."]
      ],
      tip: "Emphasis “she herself”: ⟦kn|Telugu and Kannada both add -ఏ / -ಏ (ఆమే, ಅವಳೇ)⟧⟦!kn|Telugu adds -ఏ (ఆమే)⟧⟦ta|. Tamil uses -தான் (அவள்தான்)⟧."
    }
  ]
});
