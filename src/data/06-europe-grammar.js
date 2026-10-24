// Spanish / Italian / French path: verbs, questions, prepositions, possessives and the Word Shortcuts bonus page.
// Row format and prose markup: see 04-europe.js.

EU_MODULES.push({
  id: "eu-present", en: "Present Tense: Regular Verbs", te: "వర్తమాన కాలం", es: "El presente", it: "Il presente", fr: "Le présent",
  big: "You already know the hardest idea. Like Telugu, every verb ends in a <b>person marker</b> that tells you who is doing it: Telugu మాట్లాడతా<b>ను</b> · మాట్లాడతా<b>వు</b>⟦es|, Spanish habl<b>o</b> · habl<b>as</b>⟧⟦it|, Italian parl<b>o</b> · parl<b>i</b>⟧⟦fr|, French je parl<b>e</b> · tu parl<b>es</b>⟧. Learn one set of endings and it works for hundreds of verbs. The big change is word order: the verb moves from the end of the sentence to the middle.",
  sections: [
    { h: "Person endings (memorise these)", noRead: true,
      p: "The ending is added to the stem: drop the infinitive ending (⟦es|habl-ar⟧⟦es it|, ⟧⟦it|parl-are⟧⟦fr es|, ⟧⟦fr it !es|, ⟧⟦fr|parl-er⟧) and add the person ending, just as Telugu adds -ను, -వు, -డు to మాట్లాడతా-.",
      cols: ["", "Telugu", "Spanish -ar", "Italian -are", "French -er"],
      rows: [
        ["I", "-ను", "-o", "-o", "-e"],
        ["you (casual)", "-వు", "-as", "-i", "-es"],
        ["he / she", "-డు / -ది", "-a", "-a", "-e"],
        ["we", "-ము / -ం", "-amos", "-iamo", "-ons"],
        ["you all", "-రు", "-an (ustedes)", "-ate (voi)", "-ez (vous)"],
        ["they", "-రు", "-an", "-ano", "-ent"]
      ],
      tip: "Telugu can drop the pronoun because the ending already says who: వస్తాను alone means “I will come”.⟦es| Spanish works the same way: hablo alone means “I speak”.⟧⟦it es| Italian too: parlo alone means “I speak”.⟧⟦it !es| Italian works the same way: parlo alone means “I speak”.⟧⟦fr| French cannot: -e, -es and -ent are silent, so parle, parles and parlent all sound like “పార్ల్”. Always say je, tu, il.⟧"
    },
    { h: "One verb in full: speak",
      rows: [
        ["I speak", "నేను మాట్లాడతాను", "yo hablo", "io parlo", ["je parle", "జ్ పార్ల్"]],
        ["you speak (casual)", "నువ్వు మాట్లాడతావు", "tú hablas", "tu parli", ["tu parles", "తు పార్ల్"]],
        ["he speaks", "అతను మాట్లాడతాడు", "él habla", ["lui parla", "లుయి పార్లా"], ["il parle", "ఇల్ పార్ల్"]],
        ["she speaks", "ఆమె మాట్లాడుతుంది", "ella habla", "lei parla", ["elle parle", "ఎల్ పార్ల్"]],
        ["we speak", "మేము మాట్లాడతాము", "nosotros hablamos", "noi parliamo", ["nous parlons", "నూ పార్లొం"]],
        ["you all speak", "మీరు మాట్లాడతారు", "ustedes hablan", "voi parlate", ["vous parlez", "వూ పార్లే"]],
        ["they speak", "వాళ్ళు మాట్లాడతారు", "ellos hablan", "loro parlano", ["ils parlent", "ఇల్ పార్ల్"]]
      ],
      tip: "Telugu uses మీరు both for “you all” and for one person you respect.⟦es| Spanish does the same with usted (one person, polite) and ustedes (many). In Spain, friends say vosotros habláis for “you all”.⟧⟦it| Italian uses voi for “you all” and Lei (literally “she”) for one person you respect.⟧⟦fr| French vous covers both, exactly like మీరు.⟧"
    },
    { h: "Common verbs: infinitive · I form",
      p: "The infinitive is the dictionary form, like Telugu -ఉట (మాట్లాడుట).⟦es| Spanish verbs end in -ar, -er or -ir.⟧⟦it| Italian verbs end in -are, -ere or -ire.⟧⟦fr| French verbs end in -er, -ir or -re; the -er ones are fully regular.⟧",
      rows: [
        ["speak", "మాట్లాడు · మాట్లాడతాను", "hablar · hablo", "parlare · parlo", ["parler · je parle", "పార్లే · జ్ పార్ల్"]],
        ["work", "పని చేయు · పని చేస్తాను", "trabajar · trabajo", "lavorare · lavoro", ["travailler · je travaille", "త్రావాయే · జ్ త్రావాయ్"]],
        ["eat", "తిను · తింటాను", "comer · como", "mangiare · mangio", ["manger · je mange", "మాంజే · జ్ మాంజ్"]],
        ["live (reside)", "నివసించు · నివసిస్తాను", "vivir · vivo", "abitare · abito", ["habiter · j’habite", "అబితే · జాబిత్"]],
        ["buy", "కొను · కొంటాను", "comprar · compro", "comprare · compro", ["acheter · j’achète", "అష్తే · జాషెత్"]],
        ["wait", "ఎదురుచూడు · ఎదురుచూస్తాను", "esperar · espero", "aspettare · aspetto", ["attendre · j’attends", "అతాంద్ర్ · జాతాం"]],
        ["learn", "నేర్చుకో · నేర్చుకుంటాను", "aprender · aprendo", "imparare · imparo", ["apprendre · j’apprends", "అప్రాంద్ర్ · జాప్రాం"]],
        ["open", "తెరువు · తెరుస్తాను", "abrir · abro", "aprire · apro", ["ouvrir · j’ouvre", "ఊవ్రీర్ · జూవ్ర్"]],
        ["finish", "ముగించు · ముగిస్తాను", "terminar · termino", "finire · finisco", ["finir · je finis", "ఫినీర్ · జ్ ఫిని"]],
        ["sleep", "నిద్రపో · నిద్రపోతాను", "dormir · duermo", "dormire · dormo", ["dormir · je dors", "దొర్మీర్ · జ్ దొర్"]]
      ],
      tip: "⟦fr|French je becomes j’ before a vowel or silent h: j’habite, j’attends. ⟧⟦es|Some Spanish verbs change their stem vowel when it is stressed: dormir → duermo, querer → quiero. ⟧⟦it|Many Italian -ire verbs add -isc-: finire → finisco, capire → capisco. ⟧Telugu has its own stem changes (తిను → తింటాను), so this will feel familiar."
    },
    { h: "Word order: the verb moves to the middle",
      p: "Telugu puts the verb last: subject, object, verb. ⟦#langs⟧ ⟦one|puts⟧⟦many|put⟧ it in the middle: subject, verb, object, the same order as English.",
      rows: [
        ["I drink coffee.", "నేను కాఫీ తాగుతాను.", "Yo bebo café.", "Io bevo il caffè.", ["Je bois du café.", "జ్ బ్వా దు కాఫే."]],
        ["Ravi reads a book.", "రవి పుస్తకం చదువుతాడు.", ["Ravi lee un libro.", "రవి లేఏ ఉన్ లిబ్రో."], ["Ravi legge un libro.", "రవి లేజ్జే ఉన్ లిబ్రో."], ["Ravi lit un livre.", "రవి లి అం లీవ్ర్."]],
        ["We eat rice.", "మేము అన్నం తింటాము.", "Comemos arroz.", "Mangiamo riso.", ["Nous mangeons du riz.", "నూ మాంజొం దు రి."]],
        ["She works in Hyderabad.", "ఆమె హైదరాబాద్‌లో పని చేస్తుంది.", ["Ella trabaja en Hyderabad.", "ఏయా త్రాబాహా ఏన్ హైదరాబాద్."], ["Lei lavora a Hyderabad.", "లేయి లావోరా ఆ హైదరాబాద్."], ["Elle travaille à Hyderabad.", "ఎల్ త్రావాయ్ ఆ హైదరాబాద్."]],
        ["They buy vegetables.", "వాళ్ళు కూరగాయలు కొంటారు.", "Ellos compran verduras.", "Loro comprano verdure.", ["Ils achètent des légumes.", "ఇల్జాషెత్ దే లేగ్యూమ్."]],
        ["Do you live here?", "నువ్వు ఇక్కడ ఉంటావా?", ["¿Vives aquí?", "¿బిబేస్ ఆకి?"], ["Abiti qui?", "ఆబితి క్వి?"], ["Tu habites ici ?", "తు అబిత్ ఇసి?"]]
      ],
      tip: "Build the sentence in Telugu, then pick up the verb and put it right after the subject: నేను | కాఫీ | తాగుతాను → I | drink | coffee."
    },
    { h: "Right now: “I am speaking”",
      p: "Telugu -ఉతున్నాను is for something happening at this moment.⟦es| Spanish uses estar + -ando / -iendo.⟧⟦it| Italian uses stare + -ando / -endo.⟧⟦fr| French has no separate form: it uses the plain present, or être en train de (“to be in the middle of”) for emphasis.⟧",
      rows: [
        ["I am speaking", "నేను మాట్లాడుతున్నాను", "estoy hablando", "sto parlando", ["je parle / je suis en train de parler", "జ్ పార్ల్ / జ్ స్వి జాం త్రం ద పార్లే"]],
        ["she is eating", "ఆమె తింటోంది", "ella está comiendo", "lei sta mangiando", ["elle mange", "ఎల్ మాంజ్"]],
        ["we are waiting", "మేము ఎదురుచూస్తున్నాము", "estamos esperando", "stiamo aspettando", ["nous attendons", "నూజాతాందొం"]],
        ["what are you doing?", "నువ్వు ఏం చేస్తున్నావు?", "¿Qué estás haciendo?", "Cosa stai facendo?", ["Qu’est-ce que tu fais ?", "కెస్క తు ఫే?"]]
      ]
    }
  ]
});

EU_MODULES.push({
  id: "eu-irregular", en: "Everyday Irregular Verbs", te: "ముఖ్యమైన క్రియలు", es: "Verbos irregulares", it: "Verbi irregolari", fr: "Verbes irréguliers",
  big: "The verbs you use most are the irregular ones: <b>have, go, do, want, can</b>. Their endings are still the usual person endings; only the stem jumps around. Learn these few tables by heart, the way you once learnt Telugu రా → వచ్చాను.",
  sections: [
    { h: "“To have”",
      p: "Telugu has no verb “have”. It says <b>నా దగ్గర ఉంది</b> (“near me there is”) or <b>నాకు ఉంది</b>. ⟦#langs⟧ ⟦one|has⟧⟦many|have⟧ a real verb for it, and you will use it constantly.",
      rows: [
        ["I have", "నా దగ్గర ఉంది", "yo tengo", "io ho", ["j’ai", "జే"]],
        ["you have (casual)", "నీ దగ్గర ఉంది", "tú tienes", "tu hai", ["tu as", "తు ఆ"]],
        ["he / she has", "అతని / ఆమె దగ్గర ఉంది", "él / ella tiene", ["lui / lei ha", "లుయి / లేయ్ ఆ"], ["il / elle a", "ఇల్ / ఎల్ ఆ"]],
        ["we have", "మా దగ్గర ఉంది", "nosotros tenemos", "noi abbiamo", ["nous avons", "నూజావొం"]],
        ["you all have", "మీ దగ్గర ఉంది", "ustedes tienen", "voi avete", ["vous avez", "వూజావే"]],
        ["they have", "వాళ్ళ దగ్గర ఉంది", "ellos tienen", "loro hanno", ["ils ont", "ఇల్జొం"]]
      ],
      tip: "Some Telugu నాకు sentences use “have”: నాకు ఆకలిగా ఉంది = ⟦es|tengo hambre⟧⟦es it|, ⟧⟦it|ho fame⟧⟦fr es|, ⟧⟦fr it !es|, ⟧⟦fr|j’ai faim⟧ (“I have hunger”). The same goes for thirst, fever and age."
    },
    { h: "“To go”",
      rows: [
        ["I go", "నేను వెళ్తాను", "voy", "vado", ["je vais", "జ్ వే"]],
        ["you go (casual)", "నువ్వు వెళ్తావు", "vas", "vai", ["tu vas", "తు వా"]],
        ["he / she goes", "అతను వెళ్తాడు / ఆమె వెళ్తుంది", "va", "va", ["il / elle va", "ఇల్ / ఎల్ వా"]],
        ["we go", "మేము వెళ్తాము", "vamos", "andiamo", ["nous allons", "నూజాలొం"]],
        ["you all go", "మీరు వెళ్తారు", "van", "andate", ["vous allez", "వూజాలే"]],
        ["they go", "వాళ్ళు వెళ్తారు", "van", "vanno", ["ils vont", "ఇల్ వొం"]]
      ],
      tip: "⟦es|Spanish ir (voy, vas, va)⟧⟦es it|, ⟧⟦it|Italian andare (vado, vai, va)⟧⟦fr es|, ⟧⟦fr it !es|, ⟧⟦fr|French aller (vais, vas, va)⟧⟦many|: all start with v- in the short forms⟧. Think of Telugu వెళ్ళు: the v- is your anchor."
    },
    { h: "“To do / to make”",
      rows: [
        ["I do", "నేను చేస్తాను", "hago", "faccio", ["je fais", "జ్ ఫే"]],
        ["you do (casual)", "నువ్వు చేస్తావు", "haces", "fai", ["tu fais", "తు ఫే"]],
        ["he / she does", "అతను చేస్తాడు / ఆమె చేస్తుంది", "hace", "fa", ["il / elle fait", "ఇల్ / ఎల్ ఫే"]],
        ["we do", "మేము చేస్తాము", "hacemos", "facciamo", ["nous faisons", "నూ ఫజొం"]],
        ["you all do", "మీరు చేస్తారు", "hacen", "fate", ["vous faites", "వూ ఫెత్"]],
        ["they do", "వాళ్ళు చేస్తారు", "hacen", "fanno", ["ils font", "ఇల్ ఫొం"]]
      ],
      tip: "Telugu makes verbs out of nouns with చేయు: స్నానం చేయు, సహాయం చేయు. This verb does the same job in many phrases: “do homework”, “make a call”, and the weather: ⟦es|hace calor⟧⟦es it|, ⟧⟦it|fa caldo⟧⟦fr es|, ⟧⟦fr it !es|, ⟧⟦fr|il fait chaud⟧ = “it is hot” (literally “it makes heat”)."
    },
    { h: "Want, can, must + a second verb",
      p: "Telugu glues the ability or need onto the verb: తిన<b>గలను</b>, తిన<b>ాలి</b>, తిన<b>ాలని ఉంది</b>. Here the helper is its own verb and the main verb follows it in the infinitive.",
      rows: [
        ["I want to eat.", "నాకు తినాలని ఉంది.", "Quiero comer.", "Voglio mangiare.", ["Je veux manger.", "జ్ వొ మాంజే."]],
        ["I can come.", "నేను రాగలను.", "Puedo venir.", "Posso venire.", ["Je peux venir.", "జ్ పొ వనీర్."]],
        ["I must go.", "నేను వెళ్ళాలి.", "Tengo que irme.", "Devo andare.", ["Je dois partir.", "జ్ ద్వా పార్తీర్."]],
        ["Do you want tea?", "నీకు టీ కావాలా?", "¿Quieres té?", "Vuoi del tè?", ["Tu veux du thé ?", "తు వొ దు తే?"]],
        ["Can you help me?", "మీరు నాకు సహాయం చేయగలరా?", "¿Me puede ayudar?", ["Mi può aiutare?", "మి పువో ఆయుతారే?"], ["Vous pouvez m’aider ?", "వూ పువే మేదే?"]],
        ["We have to work.", "మేము పని చేయాలి.", "Tenemos que trabajar.", "Dobbiamo lavorare.", ["Nous devons travailler.", "నూ దవొం త్రావాయే."]],
        ["I don’t know how to swim.", "నాకు ఈత రాదు.", "No sé nadar.", "Non so nuotare.", ["Je ne sais pas nager.", "జ్ న సే పా నాజే."]]
      ],
      tip: "Reverse the Telugu order: తిన + గలను → “can” + “eat”. The helper comes first, the action second."
    },
    { h: "Other “I” forms worth memorising",
      p: "These verbs are irregular mostly in the “I” form. Learn the “I” form; the rest are close to regular.",
      rows: [
        ["I come", "నేను వస్తాను", "vengo", "vengo", ["je viens", "జ్ వ్యం"]],
        ["I say", "నేను చెప్తాను", "digo", "dico", ["je dis", "జ్ ది"]],
        ["I give", "నేను ఇస్తాను", "doy", "do", ["je donne", "జ్ దొన్"]],
        ["I see", "నేను చూస్తాను", ["veo", "బేయో"], "vedo", ["je vois", "జ్ వ్వా"]],
        ["I know (a fact)", "నాకు తెలుసు", "sé", "so", ["je sais", "జ్ సే"]],
        ["I put", "నేను పెడతాను", "pongo", "metto", ["je mets", "జ్ మే"]],
        ["I go out", "నేను బయటకు వెళ్తాను", "salgo", "esco", ["je sors", "జ్ సొర్"]],
        ["I drink", "నేను తాగుతాను", "bebo", "bevo", ["je bois", "జ్ బ్వా"]]
      ]
    }
  ]
});

EU_MODULES.push({
  id: "eu-past", en: "The Past Tense", te: "భూత కాలం", es: "El pasado", it: "Il passato", fr: "Le passé",
  big: "Telugu has one everyday past: తిన్నాను. ⟦it|Italian builds its everyday past like English “I have eaten”: <b>ho mangiato</b>. ⟧⟦fr it|French does the same: <b>j’ai mangé</b>. ⟧⟦fr !it|French builds its everyday past like English “I have eaten”: <b>j’ai mangé</b>. ⟧⟦es|Spanish mostly uses a one-word past with its own endings: <b>comí</b>. ⟧For “used to” and “was doing” there is a second past⟦many|, in every one of them⟧, and Telugu has it too: తినేవాడిని.",
  sections: [
    { h: "Past participles",
      p: "The participle is the “-ed” form. Telugu’s closest match is the adjective form తిన్న (“eaten”).⟦es| Spanish: -ar → -ado, -er / -ir → -ido.⟧⟦it| Italian: -are → -ato, -ere → -uto, -ire → -ito.⟧⟦fr| French: -er → -é, -ir → -i.⟧",
      rows: [
        ["spoken", "మాట్లాడిన", "hablado", "parlato", ["parlé", "పార్లే"]],
        ["eaten", "తిన్న", "comido", "mangiato", ["mangé", "మాంజే"]],
        ["finished", "ముగించిన", "terminado", "finito", ["fini", "ఫిని"]],
        ["sold", "అమ్మిన", "vendido", "venduto", ["vendu", "వాందు"]],
        ["done / made", "చేసిన", "hecho", "fatto", ["fait", "ఫే"]],
        ["said", "చెప్పిన", "dicho", "detto", ["dit", "ది"]],
        ["seen", "చూసిన", "visto", "visto", ["vu", "వు"]],
        ["written", "రాసిన", "escrito", "scritto", ["écrit", "ఎక్రి"]],
        ["opened", "తెరిచిన", "abierto", "aperto", ["ouvert", "ఊవెర్"]],
        ["taken", "తీసుకున్న", "tomado", "preso", ["pris", "ప్రి"]]
      ]
    },
    { h: "“I ate”",
      p: "⟦es|Spanish adds past endings straight onto the stem (com-í, com-iste). ⟧⟦it|Italian uses avere (have) + participle: ho mangiato. ⟧⟦fr|French uses avoir (have) + participle: j’ai mangé. ⟧Either way, the person is marked on the verb, just as in Telugu తిన్నా<b>ను</b>.",
      rows: [
        ["I ate", "నేను తిన్నాను", "comí", "ho mangiato", ["j’ai mangé", "జే మాంజే"]],
        ["you ate (casual)", "నువ్వు తిన్నావు", "comiste", "hai mangiato", ["tu as mangé", "తు ఆ మాంజే"]],
        ["he / she ate", "అతను తిన్నాడు / ఆమె తిన్నది", "comió", "ha mangiato", ["il / elle a mangé", "ఇల్ / ఎల్ ఆ మాంజే"]],
        ["we ate", "మేము తిన్నాము", "comimos", "abbiamo mangiato", ["nous avons mangé", "నూజావొం మాంజే"]],
        ["you all ate", "మీరు తిన్నారు", "comieron", "avete mangiato", ["vous avez mangé", "వూజావే మాంజే"]],
        ["they ate", "వాళ్ళు తిన్నారు", "comieron", "hanno mangiato", ["ils ont mangé", "ఇల్జొం మాంజే"]],
        ["I spoke", "నేను మాట్లాడాను", "hablé", "ho parlato", ["j’ai parlé", "జే పార్లే"]],
        ["she bought", "ఆమె కొన్నది", "compró", "ha comprato", ["elle a acheté", "ఎలా అష్తే"]]
      ],
      tip: "⟦es|Spanish -ar verbs: hablé, hablaste, habló, hablamos, hablaron. The accent on the last vowel matters: hablo = I speak, habló = he spoke. ⟧⟦!es|Change only the helper (I have, you have, …) and keep the participle as it is: the hard work is already done in the “to have” table. ⟧"
    },
    { h: "Going, coming, being born",
      p: "⟦it|Italian uses essere (be) instead of avere for verbs of motion and change: sono andato. ⟧⟦fr|French uses être (be) instead of avoir for these verbs: je suis allé. ⟧⟦es|Spanish has no such split; these verbs take the one-word past like any other. ⟧",
      rows: [
        ["I went", "నేను వెళ్ళాను", ["fui", "ఫుయి"], "sono andato / andata", ["je suis allé(e)", "జ్ స్వి ఆలే"]],
        ["she came", "ఆమె వచ్చింది", "vino", "è venuta", ["elle est venue", "ఎలే వను"]],
        ["he came", "అతను వచ్చాడు", "vino", "è venuto", ["il est venu", "ఇలే వను"]],
        ["we arrived", "మేము చేరుకున్నాము", "llegamos", "siamo arrivati", ["nous sommes arrivés", "నూ సొమ్ జారివే"]],
        ["he left", "అతను బయలుదేరాడు", "salió", "è partito", ["il est parti", "ఇలే పార్తి"]],
        ["they stayed", "వాళ్ళు ఉండిపోయారు", "se quedaron", "sono rimasti", ["ils sont restés", "ఇల్ సొం రెస్తే"]],
        ["I was born", "నేను పుట్టాను", "nací", "sono nato / nata", ["je suis né(e)", "జ్ స్వి నే"]]
      ],
      tip: "Telugu marks the doer’s gender in the past: వచ్చా<b>డు</b> / వచ్చిం<b>ది</b>.⟦it| Italian does it on the participle when the helper is essere: è venut<b>o</b> (he) / è venut<b>a</b> (she).⟧⟦fr| French does it in writing: il est venu / elle est venu<b>e</b>, though both sound the same.⟧⟦es| Spanish does not: vino means both “he came” and “she came”.⟧"
    },
    { h: "“Used to” and “was doing”",
      p: "Telugu -ఏవాడిని / -ఏదాన్ని is for habits in the past (చిన్నప్పుడు క్రికెట్ ఆడేవాడిని). The imperfect does exactly this job (⟦es|Spanish -aba / -ía⟧⟦es it|, ⟧⟦it|Italian -avo / -evo⟧⟦fr es|, ⟧⟦fr it !es|, ⟧⟦fr|French -ais⟧). It also sets the scene: “it was raining”, “I was a child”.",
      rows: [
        ["I used to play", "నేను ఆడేవాడిని", "jugaba", "giocavo", ["je jouais", "జ్ జూఏ"]],
        ["we used to live in Chennai", "మేము చెన్నైలో ఉండేవాళ్ళం", ["vivíamos en Chennai", "బివియామోస్ ఏన్ చెన్నై"], ["abitavamo a Chennai", "ఆబితావామో ఆ చెన్నై"], ["nous habitions à Chennai", "నూజాబితియొం ఆ షెన్నై"]],
        ["it was raining", "వర్షం పడుతూ ఉంది", "llovía", "pioveva", ["il pleuvait", "ఇల్ ప్లొవే"]],
        ["when I was a child", "నేను చిన్నప్పుడు", "cuando era niño", "quando ero bambino", ["quand j’étais enfant", "కాం జేతే ఆంఫాం"]],
        ["she was reading", "ఆమె చదువుతూ ఉంది", ["ella leía", "ఏయా లేయీయా"], "lei leggeva", ["elle lisait", "ఎల్ లీజే"]],
        ["I wanted", "నాకు కావాలనిపించింది", "quería", "volevo", ["je voulais", "జ్ వూలే"]]
      ]
    }
  ]
});

EU_MODULES.push({
  id: "eu-future", en: "The Future & “Going To”", te: "భవిష్యత్ కాలం", es: "El futuro", it: "Il futuro", fr: "Le futur",
  big: "Telugu uses one form for “I come” and “I will come”: వస్తాను. ⟦#langs⟧ ⟦one|has⟧⟦many|have⟧ a real future tense, and it is easy: take the <b>whole infinitive</b> and add an ending (⟦es|hablar + é = hablaré⟧⟦es it|, ⟧⟦it|parlare → parler + ò = parlerò⟧⟦fr es|, ⟧⟦fr it !es|, ⟧⟦fr|parler + ai = parlerai⟧). In everyday speech people also use “going to” or simply the present with a time word, just like Telugu.",
  sections: [
    { h: "The future endings",
      rows: [
        ["I will speak", "నేను మాట్లాడతాను", "hablaré", "parlerò", ["je parlerai", "జ్ పార్లరే"]],
        ["you will speak (casual)", "నువ్వు మాట్లాడతావు", "hablarás", "parlerai", ["tu parleras", "తు పార్లరా"]],
        ["he / she will speak", "అతను మాట్లాడతాడు", "hablará", "parlerà", ["il parlera", "ఇల్ పార్లరా"]],
        ["we will speak", "మేము మాట్లాడతాము", "hablaremos", "parleremo", ["nous parlerons", "నూ పార్లరొం"]],
        ["you all will speak", "మీరు మాట్లాడతారు", "hablarán", "parlerete", ["vous parlerez", "వూ పార్లరే"]],
        ["they will speak", "వాళ్ళు మాట్లాడతారు", "hablarán", "parleranno", ["ils parleront", "ఇల్ పార్లరొం"]]
      ],
      tip: "The endings are the present of “to have” stuck onto the infinitive: “I have to speak” became “I will speak”.⟦es| Compare hablar-é with he (I have).⟧⟦it| Compare parler-ò with ho (I have).⟧⟦fr| Compare parler-ai with j’ai.⟧"
    },
    { h: "Irregular future stems",
      p: "The endings never change. Only a few common verbs shorten the infinitive.",
      rows: [
        ["I will have", "నా దగ్గర ఉంటుంది", "tendré", "avrò", ["j’aurai", "జోరే"]],
        ["I will be", "నేను ఉంటాను", "seré / estaré", "sarò", ["je serai", "జ్ సరే"]],
        ["I will go", "నేను వెళ్తాను", "iré", "andrò", ["j’irai", "జిరే"]],
        ["I will do", "నేను చేస్తాను", "haré", "farò", ["je ferai", "జ్ ఫరే"]],
        ["I will come", "నేను వస్తాను", "vendré", "verrò", ["je viendrai", "జ్ వ్యందరే"]],
        ["I will be able to", "నేను చేయగలను", "podré", "potrò", ["je pourrai", "జ్ పురే"]],
        ["I will want", "నాకు కావాలి", "querré", "vorrò", ["je voudrai", "జ్ వూద్రే"]]
      ]
    },
    { h: "“Going to” + verb",
      p: "Telugu -బోతున్నాను (తినబోతున్నాను) is the closest match.⟦es| Spanish says ir a + infinitive: voy a comer.⟧⟦fr| French says aller + infinitive: je vais manger. This is the most common way to talk about the future in speech.⟧⟦it| Italian has no “going to”: it uses the plain present (domani parto) or stare per for “about to”.⟧",
      rows: [
        ["I’m going to eat.", "నేను తినబోతున్నాను.", "Voy a comer.", "Sto per mangiare.", ["Je vais manger.", "జ్ వే మాంజే."]],
        ["We’re going to travel.", "మేము ప్రయాణం చేయబోతున్నాము.", "Vamos a viajar.", "Stiamo per partire.", ["Nous allons voyager.", "నూజాలొం వ్వాయాజే."]],
        ["It’s going to rain.", "వర్షం పడబోతోంది.", "Va a llover.", "Sta per piovere.", ["Il va pleuvoir.", "ఇల్ వా ప్లొవ్వార్."]],
        ["I’ll call you.", "నేను నీకు ఫోన్ చేస్తాను.", "Te voy a llamar.", "Ti chiamo.", ["Je vais t’appeler.", "జ్ వే తాప్లే."]],
        ["What are you going to do?", "నువ్వు ఏం చేయబోతున్నావు?", "¿Qué vas a hacer?", "Cosa farai?", ["Qu’est-ce que tu vas faire ?", "కెస్క తు వా ఫెర్?"]]
      ]
    },
    { h: "Time words for the future",
      rows: [
        ["tomorrow", "రేపు", "mañana", "domani", ["demain", "దమం"]],
        ["day after tomorrow", "ఎల్లుండి", "pasado mañana", "dopodomani", ["après-demain", "అప్రే దమం"]],
        ["tonight", "ఈ రాత్రి", "esta noche", "stasera", ["ce soir", "స స్వార్"]],
        ["later", "తర్వాత", "más tarde", ["più tardi", "ప్యూ తార్ది"], ["plus tard", "ప్లు తార్"]],
        ["soon", "త్వరలో", "pronto", "presto", ["bientôt", "బ్యంతో"]],
        ["next week", "వచ్చే వారం", "la semana que viene", "la settimana prossima", ["la semaine prochaine", "లా స్మెన్ ప్రొషెన్"]],
        ["next year", "వచ్చే సంవత్సరం", "el año que viene", ["l’anno prossimo", "లాన్నో ప్రోస్సిమో"], ["l’année prochaine", "లానే ప్రొషెన్"]]
      ],
      tip: "As in Telugu (రేపు వెళ్తాను), the present plus a time word is enough in speech:⟦es| mañana voy⟧⟦es it|,⟧⟦it| domani vado⟧⟦fr es|,⟧⟦fr it !es|,⟧⟦fr| demain je pars⟧."
    }
  ]
});

EU_MODULES.push({
  id: "eu-questions", en: "Questions & Negatives", te: "ప్రశ్నలు & వ్యతిరేకం", es: "Preguntas y negación", it: "Domande e negazione", fr: "Questions et négation",
  big: "Telugu builds questions and negatives with endings: వస్తావ<b>ా</b>? · రా<b>ను</b> · రా<b>లేదు</b>. Here they are separate words at the front: a question word goes first, and “not” goes right before the verb⟦fr| (French wraps the verb: ne … pas)⟧.",
  sections: [
    { h: "Question words",
      rows: [
        ["what", "ఏమిటి / ఏం", "qué", "che / cosa", ["quoi / que", "క్వా / క"]],
        ["who", "ఎవరు", "quién", "chi", ["qui", "కి"]],
        ["where", "ఎక్కడ", "dónde", "dove", ["où", "ఊ"]],
        ["when", "ఎప్పుడు", "cuándo", "quando", ["quand", "కాం"]],
        ["why", "ఎందుకు", "por qué", "perché", ["pourquoi", "పూర్క్వా"]],
        ["how", "ఎలా", "cómo", "come", ["comment", "కొమాం"]],
        ["how much / many", "ఎంత / ఎన్ని", "cuánto", "quanto", ["combien", "కొంబ్యం"]],
        ["which", "ఏది / ఏ", "cuál", "quale", ["quel / quelle", "కెల్"]]
      ],
      tip: "Telugu keeps the question word in place: నువ్వు <b>ఎక్కడ</b> ఉన్నావు? Here it jumps to the front: <b>where</b> are you?⟦es| Spanish writes an upside-down ¿ at the start of every question.⟧"
    },
    { h: "Yes / no questions",
      p: "Telugu adds -ఆ to the end (వస్తావా?).⟦es| In Spanish you just raise your voice at the end: ¿Vienes?⟧⟦it| In Italian you just raise your voice at the end: Vieni?⟧⟦fr| In French you can raise your voice (Tu viens ?) or put est-ce que in front (Est-ce que tu viens ?).⟧",
      rows: [
        ["Are you coming?", "నువ్వు వస్తావా?", "¿Vienes?", "Vieni?", ["Tu viens ?", "తు వ్యం?"]],
        ["Is it far?", "అది దూరమా?", "¿Está lejos?", "È lontano?", ["C’est loin ?", "సే ల్వం?"]],
        ["Do you speak English?", "మీరు ఇంగ్లీష్ మాట్లాడతారా?", "¿Habla inglés?", "Parla inglese?", ["Vous parlez anglais ?", "వూ పార్లే ఆంగ్లే?"]],
        ["Is there a bus?", "బస్సు ఉందా?", ["¿Hay un autobús?", "¿ఆయ్ ఉన్ ఆవుతోబుస్?"], ["C’è un autobus?", "చే ఉన్ ఆవుతోబుస్?"], ["Il y a un bus ?", "ఇలియా అం బుస్?"]],
        ["Did you eat?", "నువ్వు తిన్నావా?", "¿Comiste?", "Hai mangiato?", ["Tu as mangé ?", "తు ఆ మాంజే?"]],
        ["Is this yours?", "ఇది నీదా?", "¿Es tuyo?", "È tuo?", ["C’est à toi ?", "సే తా త్వా?"]]
      ],
      tip: "Telugu -ఆ and a rising voice do the same job. If you forget the grammar, say the sentence and lift your voice at the end: you will be understood."
    },
    { h: "Saying “not”",
      p: "Telugu puts the negative inside the verb ending: తింటాను → తినను, తిన్నాను → తినలేదు.⟦es| Spanish puts no in front of the verb.⟧⟦it| Italian puts non in front of the verb.⟧⟦fr| French puts ne before the verb and pas after it.⟧",
      rows: [
        ["I don’t know.", "నాకు తెలియదు.", "No sé.", "Non lo so.", ["Je ne sais pas.", "జ్ న సే పా."]],
        ["I’m not coming.", "నేను రాను.", "No vengo.", "Non vengo.", ["Je ne viens pas.", "జ్ న వ్యం పా."]],
        ["I didn’t eat.", "నేను తినలేదు.", "No comí.", "Non ho mangiato.", ["Je n’ai pas mangé.", "జ్ నే పా మాంజే."]],
        ["It’s not here.", "అది ఇక్కడ లేదు.", ["No está aquí.", "నో ఏస్తా ఆకి."], ["Non è qui.", "నోన్ ఏ క్వి."], ["Ce n’est pas ici.", "స నే పా ఇసి."]],
        ["I don’t want it.", "నాకు అది వద్దు.", "No lo quiero.", "Non lo voglio.", ["Je ne le veux pas.", "జ్ న ల వొ పా."]],
        ["Don’t go!", "వెళ్ళకు!", "¡No vayas!", "Non andare!", ["Ne pars pas !", "న పార్ పా!"]]
      ],
      tip: "⟦fr|In everyday French the ne often disappears: Je sais pas. ⟧Telugu has separate negatives for different tenses (రాను, రాలేదు, రావద్దు). Here one word covers them all."
    },
    { h: "Never, nothing, nobody",
      p: "Telugu pairs ఎవరూ, ఏమీ, ఎప్పుడూ with a negative verb: ఎవరూ రాలేదు. ⟦#langs⟧ ⟦one|does⟧⟦many|do⟧ the same double negative⟦fr|, with French dropping pas: ne … rien, ne … jamais⟧.",
      rows: [
        ["never", "ఎప్పుడూ … లేదు", "nunca", "mai", ["jamais", "జామే"]],
        ["nothing", "ఏమీ … లేదు", "nada", "niente", ["rien", "ర్యం"]],
        ["nobody", "ఎవరూ … లేరు", "nadie", "nessuno", ["personne", "పెర్సొన్"]],
        ["not yet", "ఇంకా లేదు", "todavía no", "non ancora", ["pas encore", "పా జాంకొర్"]],
        ["I never eat meat.", "నేను ఎప్పుడూ మాంసం తినను.", "Nunca como carne.", "Non mangio mai carne.", ["Je ne mange jamais de viande.", "జ్ న మాంజ్ జామే ద వ్యాంద్."]],
        ["I see nothing.", "నాకు ఏమీ కనిపించడం లేదు.", ["No veo nada.", "నో బేయో నాదా."], "Non vedo niente.", ["Je ne vois rien.", "జ్ న వ్వా ర్యం."]],
        ["Nobody came.", "ఎవరూ రాలేదు.", "No vino nadie.", "Non è venuto nessuno.", ["Personne n’est venu.", "పెర్సొన్ నే వను."]]
      ],
      tip: "English avoids “I don’t see nothing”, but Telugu loves it (ఏమీ + కనిపించడం లేదు), and so ⟦one|does⟧⟦many|do⟧ ⟦#langs⟧."
    }
  ]
});

EU_MODULES.push({
  id: "eu-prepositions", en: "Prepositions: Telugu Postpositions Turned Around", te: "విభక్తి ప్రత్యయాలు", es: "Preposiciones", it: "Preposizioni", fr: "Prépositions",
  big: "Telugu glues the relation to the <b>end</b> of the noun: ఇంటి<b>లో</b>, ఢిల్లీ<b>కి</b>, అమ్మ<b>తో</b>. ⟦#langs⟧ ⟦one|puts⟧⟦many|put⟧ a separate little word in <b>front</b> of the noun instead. Read the Telugu backwards and you have it: ఇంట్లో = house + in → “in the house”.",
  sections: [
    { h: "The core list",
      rows: [
        ["in", "-లో", "en", "in", ["dans / en", "దాం / ఆం"]],
        ["to", "-కి / -కు", "a", "a", ["à", "ఆ"]],
        ["from", "-నుండి", "de / desde", "da", ["de", "ద"]],
        ["of", "-యొక్క / -ది", "de", "di", ["de", "ద"]],
        ["with", "-తో", "con", "con", ["avec", "అవెక్"]],
        ["for", "-కోసం", "para", "per", ["pour", "పూర్"]],
        ["without", "-లేకుండా", "sin", "senza", ["sans", "సాం"]],
        ["on", "-మీద", "en / sobre", "su", ["sur", "సుర్"]],
        ["under", "-కింద", "debajo de", "sotto", ["sous", "సూ"]],
        ["until", "-వరకు", "hasta", "fino a", ["jusqu’à", "జుస్కా"]],
        ["near", "-దగ్గర", "cerca de", "vicino a", ["près de", "ప్రే ద"]],
        ["after", "-తర్వాత", "después de", "dopo", ["après", "అప్రే"]],
        ["before", "-ముందు", "antes de", "prima di", ["avant", "అవాం"]]
      ],
      tip: "Telugu -కి and -లో cover a lot of ground, and so do these short words. Learn them in phrases (“in the house”, “to Delhi”) rather than one by one."
    },
    { h: "In a phrase",
      rows: [
        ["in the house", "ఇంట్లో", "en la casa", "in casa", ["à la maison", "ఆ లా మేజొం"]],
        ["to Delhi", "ఢిల్లీకి", "a Delhi", ["a Delhi", "ఆ దేల్లి"], ["à Delhi", "ఆ దేలి"]],
        ["from Mumbai", "ముంబై నుండి", "de Mumbai", "da Mumbai", ["de Mumbai", "ద ముంబై"]],
        ["with my mother", "మా అమ్మతో", "con mi madre", "con mia madre", ["avec ma mère", "అవెక్ మా మెర్"]],
        ["for you", "నీ కోసం", "para ti", "per te", ["pour toi", "పూర్ త్వా"]],
        ["by bus", "బస్సులో", ["en autobús", "ఏన్ ఆవుతోబుస్"], ["in autobus", "ఇన్ ఆవుతోబుస్"], ["en bus", "ఆం బుస్"]],
        ["on the table", "బల్ల మీద", "en la mesa", "sul tavolo", ["sur la table", "సుర్ లా తాబ్ల్"]],
        ["until tomorrow", "రేపటి వరకు", "hasta mañana", "fino a domani", ["jusqu’à demain", "జుస్కా దమం"]],
        ["coffee without sugar", "చక్కెర లేని కాఫీ", "café sin azúcar", "caffè senza zucchero", ["café sans sucre", "కాఫే సాం సుక్ర్"]]
      ]
    },
    { h: "Preposition + “the” melt together",
      p: "Telugu melts words at the joint: ఇల్లు + లో = ఇంట్లో. The same thing happens when a preposition meets “the”.⟦es| Spanish has only two: a + el = al, de + el = del.⟧⟦it| Italian melts almost all of them: in + il = nel, di + il = del, a + il = al, su + il = sul, da + il = dal.⟧⟦fr| French: à + le = au, de + le = du, à + les = aux, de + les = des.⟧",
      rows: [
        ["to the (one)", "-కి", "al", "al", ["au", "ఓ"]],
        ["of / from the (one)", "-ది / -నుండి", "del", "del / dal", ["du", "దు"]],
        ["in the", "-లో", "en el", "nel", ["dans le", "దాం ల"]],
        ["on the", "-మీద", "en el / sobre el", "sul", ["sur le", "సుర్ ల"]],
        ["to the (many)", "-లకి", "a los", "ai", ["aux", "ఓ"]],
        ["of the (many)", "-ల యొక్క", "de los", "dei", ["des", "దే"]],
        ["I go to the market.", "నేను బజారుకి వెళ్తాను.", "Voy al mercado.", "Vado al mercato.", ["Je vais au marché.", "జ్ వే ఓ మార్షే."]]
      ]
    },
    { h: "Spanish “a” for people", only: "es",
      p: "Telugu marks a person who receives the action with -ని / -ను: రవి<b>ని</b> చూశాను. Spanish does the same with a small <b>a</b> in front of a person: Veo <b>a</b> Ravi. Things don’t get it: Veo la casa.",
      rows: [
        ["I see Ravi.", "నేను రవిని చూస్తాను.", ["Veo a Ravi.", "బేయో ఆ రవి."], ["Vedo Ravi.", "వేదో రవి."], ["Je vois Ravi.", "జ్ వ్వా రవి."]],
        ["I call my mother.", "నేను మా అమ్మని పిలుస్తాను.", "Llamo a mi madre.", "Chiamo mia madre.", ["J’appelle ma mère.", "జాపెల్ మా మెర్."]],
        ["I know Lakshmi.", "నాకు లక్ష్మి తెలుసు.", ["Conozco a Lakshmi.", "కోనోస్కో ఆ లక్ష్మి."], ["Conosco Lakshmi.", "కోనోస్కో లక్ష్మి."], ["Je connais Lakshmi.", "జ్ కొనే లక్ష్మి."]],
        ["I see the house.", "నేను ఇల్లు చూస్తాను.", ["Veo la casa.", "బేయో లా కాసా."], "Vedo la casa.", ["Je vois la maison.", "జ్ వ్వా లా మేజొం."]]
      ]
    }
  ]
});

EU_MODULES.push({
  id: "eu-possessives", en: "This, That, My, Your", te: "ఇది, అది, నా, నీ", es: "Demostrativos y posesivos", it: "Dimostrativi e possessivi", fr: "Démonstratifs et possessifs",
  big: "Telugu ఈ, ఆ, నా, నీ never change. Here they <b>agree with the noun</b> that follows, in gender and number, like adjectives do. And “my” agrees with the thing owned, not with the owner: “her father” uses the masculine form because <i>father</i> is masculine.",
  sections: [
    { h: "This and that",
      rows: [
        ["this (+ noun)", "ఈ", "este / esta", "questo / questa", ["ce / cette", "స / సెత్"]],
        ["that (+ noun)", "ఆ", "ese / esa", "quel / quella", ["ce … -là", "స … లా"]],
        ["these", "ఈ (…లు)", "estos / estas", "questi / queste", ["ces", "సే"]],
        ["those", "ఆ (…లు)", "esos / esas", "quei / quelle", ["ces … -là", "సే … లా"]],
        ["this (thing)", "ఇది", "esto", "questo", ["ceci / ça", "సెసి / సా"]],
        ["that (thing)", "అది", "eso", "quello", ["cela / ça", "సలా / సా"]]
      ],
      tip: "Telugu ఈ / ఆ and ఇది / అది split “this” the same way: one form before a noun, another standing alone.⟦fr| Everyday French uses ça for both “this” and “that” when it stands alone.⟧"
    },
    { h: "With a noun",
      rows: [
        ["this book", "ఈ పుస్తకం", "este libro", "questo libro", ["ce livre", "స లీవ్ర్"]],
        ["this house", "ఈ ఇల్లు", "esta casa", "questa casa", ["cette maison", "సెత్ మేజొం"]],
        ["these days", "ఈ రోజులు", "estos días", "questi giorni", ["ces jours", "సే జూర్"]],
        ["that man", "ఆ మనిషి", "ese hombre", ["quell’uomo", "క్వేల్ వోమో"], ["cet homme-là", "సెతొమ్ లా"]],
        ["What is this?", "ఇది ఏమిటి?", "¿Qué es esto?", ["Che cos’è questo?", "కే కోసే క్వేస్తో?"], ["Qu’est-ce que c’est ?", "కెస్క సే?"]],
        ["I want that one.", "నాకు అది కావాలి.", "Quiero ese.", "Voglio quello.", ["Je veux celui-là.", "జ్ వొ సల్వీ లా."]]
      ]
    },
    { h: "My, your, his, her",
      p: "⟦es|Spanish su means his, her, its, their and your (polite): context decides. ⟧⟦it|Italian puts “the” in front: la mia casa (“the my house”), but drops it with one family member: mia madre. ⟧⟦fr|French sa and son both mean “his” or “her”: sa mère is his mother or her mother. ⟧",
      rows: [
        ["my", "నా", "mi / mis", "mio / mia", ["mon / ma / mes", "మొం / మా / మే"]],
        ["your (casual)", "నీ", "tu / tus", "tuo / tua", ["ton / ta / tes", "తొం / తా / తే"]],
        ["his / her", "అతని / ఆమె", "su / sus", "suo / sua", ["son / sa / ses", "సొం / సా / సే"]],
        ["our", "మా / మన", "nuestro / nuestra", "nostro / nostra", ["notre / nos", "నొత్ర్ / నో"]],
        ["your (plural / polite)", "మీ", "su (usted) / vuestro", "vostro / Suo", ["votre / vos", "వొత్ర్ / వో"]],
        ["their", "వాళ్ళ", "su / sus", "loro", ["leur / leurs", "లొర్"]]
      ],
      tip: "Telugu says మా అమ్మ (“our mother”) even when talking about your own mother. In these languages “my mother” is normal."
    },
    { h: "In use",
      rows: [
        ["my mother", "మా అమ్మ", "mi madre", "mia madre", ["ma mère", "మా మెర్"]],
        ["my father", "మా నాన్న", "mi padre", "mio padre", ["mon père", "మొం పెర్"]],
        ["her brother", "ఆమె సోదరుడు", "su hermano", "suo fratello", ["son frère", "సొం ఫ్రెర్"]],
        ["our house", "మా ఇల్లు", "nuestra casa", "la nostra casa", ["notre maison", "నొత్ర్ మేజొం"]],
        ["your friends", "నీ స్నేహితులు", "tus amigos", "i tuoi amici", ["tes amis", "తే జామి"]],
        ["Whose is this?", "ఇది ఎవరిది?", "¿De quién es esto?", "Di chi è questo?", ["C’est à qui ?", "సే తా కి?"]],
        ["It’s mine.", "అది నాది.", "Es mío.", "È mio.", ["C’est à moi.", "సే తా మ్వా."]]
      ],
      tip: "Telugu నాది (“mine”) comes from నా + ది. ⟦es|Spanish mío⟧⟦es it|, ⟧⟦it|Italian mio⟧⟦fr es|, ⟧⟦fr it !es|, ⟧⟦fr|French à moi⟧ ⟦one|does⟧⟦many|do⟧ the same job."
    }
  ]
});

const EU_BONUS = {
  id: "eu-cognates", en: "Word Shortcuts", te: "పద సూత్రాలు", es: "Atajos de palabras", it: "Scorciatoie di parole", fr: "Raccourcis de mots",
  big: "⟦#langs⟧ ⟦one|grew⟧⟦many|all grew⟧ out of Latin, and English borrowed thousands of Latin words. So you already know many words through English: you just need the regular sound changes. Some words even go back to the same ancestor as Sanskrit, and you know them through Telugu.",
  sections: [
    { h: "1 · English -tion",
      rows: [
        ["nation", "దేశం", "nación", "nazione", ["nation", "నాస్యొం"]],
        ["information", "సమాచారం", "información", "informazione", ["information", "ఆంఫొర్మాస్యొం"]],
        ["station", "స్టేషన్", "estación", "stazione", ["station", "స్తాస్యొం"]],
        ["education", "విద్య", "educación", "educazione", ["éducation", "ఎదుకాస్యొం"]],
        ["situation", "పరిస్థితి", "situación", "situazione", ["situation", "సితువాస్యొం"]],
        ["attention", "శ్రద్ధ", "atención", "attenzione", ["attention", "అతాంస్యొం"]]
      ],
      tip: "English -tion = ⟦es|Spanish -ción⟧⟦es it|, ⟧⟦it|Italian -zione⟧⟦fr es|, ⟧⟦fr it !es|, ⟧⟦fr|French -tion (said “-స్యొం”)⟧. Hundreds of words follow this rule."
    },
    { h: "2 · English -ty",
      rows: [
        ["university", "విశ్వవిద్యాలయం", "universidad", "università", ["université", "యునివెర్సితే"]],
        ["liberty", "స్వేచ్ఛ", "libertad", "libertà", ["liberté", "లిబెర్తే"]],
        ["quality", "నాణ్యత", "calidad", "qualità", ["qualité", "కాలితే"]],
        ["society", "సమాజం", "sociedad", "società", ["société", "సొస్యేతే"]],
        ["reality", "వాస్తవం", "realidad", "realtà", ["réalité", "రేఆలితే"]],
        ["city", "నగరం", "ciudad", "città", ["cité", "సితే"]]
      ],
      tip: "English -ty = ⟦es|Spanish -dad⟧⟦es it|, ⟧⟦it|Italian -tà⟧⟦fr es|, ⟧⟦fr it !es|, ⟧⟦fr|French -té⟧. Telugu -తనం and -త (నాణ్యత) do a similar job, turning a quality into a noun."
    },
    { h: "3 · English -ly = Telugu -గా",
      rows: [
        ["really", "నిజంగా", "realmente", "realmente", ["réellement", "రేఎల్మాం"]],
        ["quickly", "వేగంగా", "rápidamente", "rapidamente", ["rapidement", "రాపిద్మాం"]],
        ["normally", "సాధారణంగా", "normalmente", "normalmente", ["normalement", "నొర్మాల్మాం"]],
        ["certainly", "ఖచ్చితంగా", "ciertamente", "certamente", ["certainement", "సెర్తెన్మాం"]],
        ["finally", "చివరకు", "finalmente", "finalmente", ["finalement", "ఫినాల్మాం"]]
      ],
      tip: "Telugu makes adverbs with -గా: వేగం → వేగంగా. Here the ending is ⟦es|-mente⟧⟦it !es|-mente⟧⟦fr es|, or ⟧⟦fr it !es|, or ⟧⟦fr|French -ment⟧, added to the feminine adjective."
    },
    { h: "4 · Latin cl-, pl-, fl-",
      p: "⟦es|Spanish turned these into ll- (said య). ⟧⟦it|Italian turned them into chi-, pi-, fi-. ⟧⟦fr|French mostly kept them as they were. ⟧",
      rows: [
        ["key", "తాళంచెవి", "llave", "chiave", ["clé", "క్లే"]],
        ["full", "నిండు", "lleno", "pieno", ["plein", "ప్లం"]],
        ["flame", "మంట", "llama", "fiamma", ["flamme", "ఫ్లామ్"]],
        ["square (town)", "కూడలి", "plaza", "piazza", ["place", "ప్లాస్"]],
        ["to cry", "ఏడ్చు", "llorar", "piangere", ["pleurer", "ప్లొరే"]]
      ]
    },
    { h: "5 · Cousins of Sanskrit words",
      p: "Latin and Sanskrit are distant cousins, so some very old words match the Sanskrit words that Telugu uses. The Telugu column shows the Sanskrit-origin word.",
      rows: [
        ["mother", "మాత", "madre", "madre", ["mère", "మెర్"]],
        ["father", "పిత", "padre", "padre", ["père", "పెర్"]],
        ["name", "నామం", "nombre", "nome", ["nom", "నొం"]],
        ["new", "నవ", "nuevo", "nuovo", ["nouveau", "నూవో"]],
        ["nose", "నాసిక", "nariz", "naso", ["nez", "నే"]],
        ["tooth", "దంతం", "diente", "dente", ["dent", "దాం"]],
        ["three", "త్రి", "tres", "tre", ["trois", "త్ర్వా"]],
        ["seven", "సప్త", "siete", "sette", ["sept", "సెత్"]],
        ["ten", "దశ", "diez", "dieci", ["dix", "దిస్"]],
        ["night", "నక్తం", "noche", "notte", ["nuit", "న్వి"]]
      ],
      tip: "Look for the consonant skeleton: మాత / m-d-r, దంత / d-n-t, సప్త / s-p-t or s-t. The vowels moved; the consonants stayed."
    },
    { h: "6 · False friends with English",
      cols: ["Looks like English", "Telugu meaning", "Spanish meaning", "Italian meaning", "French meaning"],
      noRead: true,
      rows: [
        ["library", "గ్రంథాలయం", "librería = bookshop", "libreria = bookshop", "librairie = bookshop"],
        ["actually", "నిజానికి", "actualmente = nowadays", "attualmente = currently", "actuellement = currently"],
        ["embarrassed", "సిగ్గుపడిన", "embarazada = pregnant", "—", "—"],
        ["sensible", "తెలివైన", "sensible = sensitive", "sensibile = sensitive", "sensible = sensitive"],
        ["parents", "తల్లిదండ్రులు", "parientes = relatives", "parenti = relatives", "parents = parents, relatives"],
        ["camera", "కెమెరా", "cámara = camera", "camera = bedroom", "caméra = video camera"],
        ["eventually", "చివరకు", "eventualmente = possibly", "eventualmente = possibly", "éventuellement = possibly"],
        ["preservative", "నిల్వ పదార్థం", "preservativo = condom", "preservativo = condom", "préservatif = condom"]
      ]
    }
  ]
};
