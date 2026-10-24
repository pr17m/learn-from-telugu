// Spanish / Italian / French path, part 1: sounds, first words, nouns, adjectives, numbers, phrases.
// Row format: [meaning, Telugu, Spanish, Italian, French] (see 04-europe.js).

EU_MODULES.push({
  id: "eu-sounds", en: "Sounds & Spelling", te: "ఉచ్చారణ & అక్షరక్రమం", es: "Sonidos y ortografía", it: "Suoni e ortografia", fr: "Sons et orthographe",
  big: "No new script this time: ⟦#langs⟧ ⟦one|uses⟧⟦many|use⟧ the same Roman letters as English. The work is learning how each letter sounds, and here Telugu is a real advantage. Vowels are pure, steady sounds, like Telugu అ/ఆ, ఎ/ఏ, ఇ, ఒ/ఓ, ఉ, not the gliding vowels of English. ⟦es|Spanish is spelled almost exactly as it is said, like Telugu.⟧ ⟦it es|Italian is too, and it holds double consonants long, just like Telugu ఒత్తులు.⟧⟦it !es|Italian is spelled almost exactly as it is said, and it holds double consonants long, just like Telugu ఒత్తులు.⟧ ⟦fr|French is the odd one out: many final letters are silent and some vowels are nasal, so always check the Telugu reading.⟧",
  sections: [
    { h: "Vowels: say them the Telugu way",
      p: "Every vowel keeps one steady sound. Read the Telugu line under each word and it will come out right.⟦fr| French also has vowels Telugu lacks, such as the u of <i>lune</i> (say ఈ with rounded lips) and nasal vowels, covered below.⟧",
      rows: [
        ["house · a = ఆ", "ఇల్లు", "casa", "casa", ["maison", "మెజోం"]],
        ["sea · a", "సముద్రం", "mar", "mare", ["mer", "మేర్"]],
        ["green · e = ఏ", "ఆకుపచ్చ", "verde", "verde", ["vert", "వేర్"]],
        ["wine · i = ఇ", "వైన్", "vino", "vino", ["vin", "వెం"]],
        ["name · o = ఓ", "పేరు", "nombre", "nome", ["nom", "నోం"]],
        ["moon · u = ఉ", "చంద్రుడు", "luna", "luna", ["lune", "లూన్"]],
        ["day", "రోజు", "día", "giorno", ["jour", "జూర్"]]
      ],
      tip: "English spelling teaches you to say “o” as “ow” and “e” as “ee”. Forget that here and read the letters the way you read Telugu: one letter, one steady sound."
    },
    { h: "Same word, different spelling rules",
      p: "Most of these words come from one Latin word, which each language spells by its own rules. The rules are few. ⟦es|<b>Spanish:</b> c before e/i is స, g before e/i and j are a breathy హ, h is silent, ll is య, ñ is న్య.⟧ ⟦it|<b>Italian:</b> c before e/i is చ and g before e/i is జ; ch and gh are a hard క and గ; gn is న్య, gli is ల్య; h is silent.⟧ ⟦fr|<b>French:</b> c before e/i is స, g before e/i and j are జ (a soft “zh”), ch is ష, gn is న్య, and final consonants are usually silent.⟧",
      rows: [
        ["city", "నగరం", "ciudad", "città", ["cité", "సితే"]],
        ["people", "ప్రజలు", "gente", "gente", ["gens", "జాం"]],
        ["chocolate", "చాక్లెట్", "chocolate", "cioccolato", ["chocolat", "షొకొలా"]],
        ["key", "తాళంచెవి", "llave", "chiave", ["clé", "క్లే"]],
        ["night", "రాత్రి", "noche", "notte", ["nuit", "న్వీ"]],
        ["son", "కొడుకు", "hijo", "figlio", ["fils", "ఫిస్"]],
        ["year", "సంవత్సరం", "año", "anno", ["an", "ఆం"]],
        ["mountain", "కొండ", "montaña", "montagna", ["montagne", "మొంతాన్య్"]],
        ["water", "నీళ్ళు", "agua", "acqua", ["eau", "ఓ"]],
        ["thing", "వస్తువు", "cosa", "cosa", ["chose", "షోజ్"]]
      ],
      tip: "The న్య sound of ñ and gn is the same one Telugu has in words like అన్యాయం, written there as a cluster."
    },
    { h: "Long consonants, just like Telugu", only: "it",
      p: "Italian holds a double consonant longer, exactly like Telugu ఒత్తులు (అక్క, అమ్మ, అత్త). Get it wrong and you say a different word: <i>sete</i> is thirst, <i>sette</i> is seven. The Telugu readings show the doubling.⟦es| Spanish has no long consonants; its only double letter, rr, is a rolled r.⟧⟦fr| French writes double letters but says them single.⟧",
      rows: [
        ["thirst", "దాహం", "sed", "sete", ["soif", "స్వాఫ్"]],
        ["seven", "ఏడు", "siete", "sette", ["sept", "సెత్"]],
        ["dear", "ప్రియమైన", "querido", "caro", ["cher", "షేర్"]],
        ["cart", "బండి", "carro", "carro", ["chariot", "షారియో"]],
        ["ninth", "తొమ్మిదవ", "noveno", "nono", ["neuvième", "నొవియెమ్"]],
        ["grandfather", "తాత", "abuelo", "nonno", ["grand-père", "గ్రాం-పేర్"]],
        ["hair (on the head)", "జుట్టు", "pelo", "capello", ["cheveux", "షెవూ"]],
        ["hat", "టోపీ", "sombrero", "cappello", ["chapeau", "షాపో"]]
      ]
    },
    { h: "Silent endings and nasal vowels", only: "fr",
      p: "Two habits make French look harder than it sounds. Most final consonants are not said (<i>petit</i> is పతీ), and a vowel before n or m often becomes nasal: the n itself disappears and the vowel goes through the nose. The Telugu readings write nasal vowels with ం; say it lightly, without a full న్ or మ్.",
      rows: [
        ["bread", "రొట్టె", "pan", "pane", ["pain", "పెం"]],
        ["good", "మంచి", "bueno", "buono", ["bon", "బోం"]],
        ["hand", "చెయ్యి", "mano", "mano", ["main", "మెం"]],
        ["time", "సమయం", "tiempo", "tempo", ["temps", "తాం"]],
        ["small", "చిన్న", "pequeño", "piccolo", ["petit", "పతీ"]],
        ["they speak", "వాళ్ళు మాట్లాడతారు", "hablan", "parlano", ["ils parlent", "ఇల్ పార్ల్"]],
        ["Paris", "పారిస్", "París", "Parigi", ["Paris", "పారీ"]]
      ],
      tip: "The -ent ending of French verbs for “they” is always silent: <i>ils parlent</i> sounds exactly like <i>il parle</i>. Telugu speakers expect every letter to be said, so this is the habit to unlearn."
    }
  ]
});

EU_MODULES.push({
  id: "eu-greetings", en: "Greetings & Polite Words", te: "పలకరింపులు & మర్యాద పదాలు", es: "Saludos y cortesía", it: "Saluti e cortesia", fr: "Salutations et politesse",
  big: "Greetings are fixed phrases, so learn them whole, the way you learned నమస్కారం and ఎలా ఉన్నారు? Like Telugu, ⟦one|this language has⟧⟦many|these languages have⟧ a casual and a polite way to talk to someone, and the greeting you choose already shows which one you are using, just as ఎలా ఉన్నావు? and ఎలా ఉన్నారు? do.",
  sections: [
    { h: "Hello and goodbye",
      rows: [
        ["hello", "నమస్కారం / హలో", "hola", ["ciao / salve", "చావ్ / సాల్వే"], ["bonjour / salut", "బొంజూర్ / సాలూ"]],
        ["good morning", "శుభోదయం", "buenos días", "buongiorno", ["bonjour", "బొంజూర్"]],
        ["good evening", "శుభ సాయంత్రం", "buenas tardes", "buonasera", ["bonsoir", "బొంస్వార్"]],
        ["good night", "శుభ రాత్రి", "buenas noches", "buonanotte", ["bonne nuit", "బొన్ న్వీ"]],
        ["goodbye", "వెళ్ళొస్తాను", "adiós", "arrivederci", ["au revoir", "ఓ ర్వార్"]],
        ["bye (casual)", "బై / ఉంటాను", ["chao", "చావ్"], ["ciao", "చావ్"], ["salut", "సాలూ"]],
        ["see you later", "మళ్ళీ కలుద్దాం", "hasta luego", "a dopo", ["à plus tard", "ఆ ప్లూ తార్"]],
        ["see you tomorrow", "రేపు కలుద్దాం", "hasta mañana", "a domani", ["à demain", "ఆ దమెం"]]
      ],
      tip: "Like Telugu వెళ్ళొస్తాను (“I'll go and come back”), the goodbyes here look forward to the next meeting: “until later”, “until tomorrow”, “to seeing again”.⟦it| Italian <i>ciao</i> works for both hello and bye, but only with friends, like హాయ్.⟧"
    },
    { h: "How are you?",
      p: "The casual question uses the “you” of friends (నువ్వు), the polite one the “you” of respect (మీరు).",
      rows: [
        ["How are you? (casual)", "ఎలా ఉన్నావు?", "¿Cómo estás?", "Come stai?", ["Comment ça va ?", "కొమాం సా వా?"]],
        ["How are you? (polite)", "ఎలా ఉన్నారు?", "¿Cómo está usted?", "Come sta?", ["Comment allez-vous ?", "కొమాం తాలే-వూ?"]],
        ["I'm fine, thanks", "బాగున్నాను, ధన్యవాదాలు", "Bien, gracias", "Bene, grazie", ["Bien, merci", "బియెం, మెర్సీ"]],
        ["And you? (casual)", "మరి నువ్వు?", "¿Y tú?", "E tu?", ["Et toi ?", "ఏ త్వా?"]],
        ["And you? (polite)", "మరి మీరు?", "¿Y usted?", "E Lei?", ["Et vous ?", "ఏ వూ?"]],
        ["so-so", "పర్లేదు", "más o menos", "così così", ["comme ci, comme ça", "కొమ్ సీ, కొమ్ సా"]],
        ["not well", "బాగాలేదు", "mal", "male", ["pas bien", "పా బియెం"]]
      ]
    },
    { h: "Magic words",
      rows: [
        ["please", "దయచేసి", "por favor", "per favore", ["s'il vous plaît", "సిల్ వూ ప్లే"]],
        ["thank you", "ధన్యవాదాలు", "gracias", "grazie", ["merci", "మెర్సీ"]],
        ["thank you very much", "చాలా ధన్యవాదాలు", "muchas gracias", "grazie mille", ["merci beaucoup", "మెర్సీ బోకూ"]],
        ["you're welcome", "పర్వాలేదు", "de nada", "prego", ["de rien", "ద రియెం"]],
        ["sorry / excuse me", "క్షమించండి", "perdón / disculpe", "scusi", ["pardon / excusez-moi", "పార్దోం / ఎక్స్‌క్యూజే-మ్వా"]],
        ["yes", "అవును", "sí", "sì", ["oui", "వీ"]],
        ["no", "కాదు / లేదు", "no", "no", ["non", "నోం"]],
        ["OK", "సరే", "vale / de acuerdo", ["va bene / d'accordo", "వా బేనే / దాక్కోర్దో"], ["d'accord", "దకోర్"]]
      ],
      tip: "“Please” here literally means “for a favour” or “if it pleases you”: the same idea as Telugu దయచేసి, “having done a kindness”."
    },
    { h: "Meeting someone",
      rows: [
        ["What is your name? (casual)", "నీ పేరు ఏమిటి?", "¿Cómo te llamas?", "Come ti chiami?", ["Comment tu t'appelles ?", "కొమాం తూ తాపెల్?"]],
        ["What is your name? (polite)", "మీ పేరు ఏమిటి?", "¿Cómo se llama usted?", "Come si chiama?", ["Comment vous appelez-vous ?", "కొమాం వూ జాప్లే-వూ?"]],
        ["My name is Ravi", "నా పేరు రవి", ["Me llamo Ravi", "మే యామో రవి"], "Mi chiamo Ravi", ["Je m'appelle Ravi", "జ మాపెల్ రవి"]],
        ["Nice to meet you", "మిమ్మల్ని కలవడం సంతోషం", "Mucho gusto", "Piacere", ["Enchanté", "ఆంషాంతే"]],
        ["I am from India", "నేను భారతదేశం నుండి వచ్చాను", "Soy de la India", ["Vengo dall'India", "వేంగో దాల్లిందియా"], ["Je viens d'Inde", "జ వియెం దెంద్"]],
        ["Do you speak English?", "మీరు ఇంగ్లీషు మాట్లాడతారా?", "¿Habla usted inglés?", "Parla inglese?", ["Parlez-vous anglais ?", "పార్లే-వూ ఆంగ్లే?"]],
        ["I don't understand", "నాకు అర్థం కాలేదు", "No entiendo", "Non capisco", ["Je ne comprends pas", "జ న కొంప్రాం పా"]],
        ["Slowly, please", "నెమ్మదిగా, దయచేసి", "Más despacio, por favor", "Più piano, per favore", ["Plus lentement, s'il vous plaît", "ప్లూ లాంత్మాం, సిల్ వూ ప్లే"]]
      ],
      tip: "None of these say “my name is”. They say “I call myself”, close to the Telugu నన్ను రవి అంటారు (“they call me Ravi”)."
    }
  ]
});

EU_MODULES.push({
  id: "eu-pronouns", en: "Pronouns & “To Be”", te: "సర్వనామాలు & ‘ఉండు’", es: "Pronombres y «ser / estar»", it: "Pronomi ed «essere»", fr: "Pronoms et «être»",
  big: "Telugu already shows the person on the verb (వచ్చాను, వచ్చావు, వచ్చారు), so the pronoun is often left out. ⟦es|Spanish works the same way: <i>soy</i> alone means “I am”.⟧ ⟦it es|Italian too: <i>sono</i> alone means “I am”.⟧⟦it !es|Italian works the same way: <i>sono</i> alone means “I am”.⟧ ⟦fr|French always says the pronoun (<i>je suis</i>), because many of its verb endings sound alike.⟧ ⟦one|It also has⟧⟦many|Each also has⟧ a polite “you” that works like మీరు.",
  sections: [
    { h: "Personal pronouns",
      p: "Telugu has two words for “we”: మేము (without you) and మనం (including you). ⟦one|This language has⟧⟦many|These languages have⟧ only one.",
      rows: [
        ["I", "నేను", "yo", "io", ["je", "జ"]],
        ["you (casual)", "నువ్వు", "tú", "tu", ["tu", "తూ"]],
        ["he", "అతను / వాడు", "él", ["lui", "లుయీ"], ["il", "ఇల్"]],
        ["she", "ఆమె", "ella", "lei", ["elle", "ఎల్"]],
        ["you (polite, one person)", "మీరు", "usted", "Lei", ["vous", "వూ"]],
        ["we", "మేము / మనం", "nosotros / nosotras", "noi", ["nous", "నూ"]],
        ["you (plural)", "మీరు", "vosotros / ustedes", "voi", ["vous", "వూ"]],
        ["they", "వాళ్ళు / వారు", "ellos / ellas", "loro", ["ils / elles", "ఇల్ / ఎల్"]]
      ],
      tip: "Use the polite “you” exactly where you would say మీరు to one person: elders, strangers, shopkeepers. ⟦es|Spanish <i>usted</i> takes the “he / she” form of the verb.⟧ ⟦it|Italian <i>Lei</i> is literally “she”, and also takes the “he / she” verb form.⟧ ⟦fr|French <i>vous</i> is both the plural and the polite singular, exactly like మీరు.⟧"
    },
    { h: "“To be”: I am, you are…",
      p: "This is the most irregular verb of all, so learn it by heart. Telugu often needs no verb in sentences like నేను డాక్టర్ని, but ⟦one|this language always needs one⟧⟦many|these languages always need one⟧.",
      rows: [
        ["I am", "నేను ఉన్నాను", "yo soy", "io sono", ["je suis", "జ స్వీ"]],
        ["you are (casual)", "నువ్వు ఉన్నావు", "tú eres", "tu sei", ["tu es", "తూ ఏ"]],
        ["he / she is", "అతను / ఆమె ఉన్నారు", "él / ella es", ["lui / lei è", "లుయీ / లేయ్ ఏ"], ["il / elle est", "ఇల్ / ఎల్ ఏ"]],
        ["you are (polite)", "మీరు ఉన్నారు", "usted es", "Lei è", ["vous êtes", "వూ జెత్"]],
        ["we are", "మేము ఉన్నాము", "nosotros somos", "noi siamo", ["nous sommes", "నూ సొమ్"]],
        ["you are (plural)", "మీరు ఉన్నారు", "vosotros sois", "voi siete", ["vous êtes", "వూ జెత్"]],
        ["they are", "వాళ్ళు ఉన్నారు", "ellos son", "loro sono", ["ils sont", "ఇల్ సోం"]]
      ]
    },
    { h: "Two verbs for “to be”", only: "es",
      p: "Spanish splits “to be” in two. <i>Ser</i> is for what something is: identity, origin, job. <i>Estar</i> is for where it is and how it is right now. Telugu draws a similar line: ఇది పుస్తకం needs no verb, while పుస్తకం బల్ల మీద ఉంది uses ఉండు for place.",
      rows: [
        ["I am Indian", "నేను భారతీయుడిని", "Soy indio", "Sono indiano", ["Je suis indien", "జ స్వీ జెందియెం"]],
        ["I am a teacher", "నేను టీచర్ని", "Soy profesor", "Sono insegnante", ["Je suis professeur", "జ స్వీ ప్రొఫెసొర్"]],
        ["I am tired", "నేను అలసిపోయాను", "Estoy cansado", "Sono stanco", ["Je suis fatigué", "జ స్వీ ఫతీగే"]],
        ["Where are you?", "నువ్వు ఎక్కడ ఉన్నావు?", "¿Dónde estás?", "Dove sei?", ["Où es-tu ?", "ఊ ఏ-తూ?"]],
        ["The book is on the table", "పుస్తకం బల్ల మీద ఉంది", "El libro está en la mesa", "Il libro è sul tavolo", ["Le livre est sur la table", "ల లీవ్ర్ ఏ సూర్ లా తాబ్ల్"]],
        ["The soup is hot", "సూప్ వేడిగా ఉంది", "La sopa está caliente", "La zuppa è calda", ["La soupe est chaude", "లా సూప్ ఏ షోద్"]]
      ],
      tip: "Rule of thumb: where Telugu would use ఉండు (ఉన్నాను, ఉంది) for a place or a passing state, Spanish usually wants <i>estar</i>."
    },
    { h: "There is, there are",
      p: "Telugu uses ఉంది / ఉన్నాయి for “there is / there are”. ⟦es|Spanish uses one word for both: <i>hay</i>.⟧ ⟦it|Italian says <i>c'è</i> for one thing and <i>ci sono</i> for several.⟧ ⟦fr|French uses <i>il y a</i> for both.⟧",
      rows: [
        ["There is a problem", "ఒక సమస్య ఉంది", "Hay un problema", ["C'è un problema", "చే ఉన్ ప్రోబ్లేమా"], ["Il y a un problème", "ఇలియా అం ప్రొబ్లెమ్"]],
        ["There are many people", "చాలా మంది ఉన్నారు", "Hay mucha gente", "Ci sono molte persone", ["Il y a beaucoup de gens", "ఇలియా బోకూ ద జాం"]],
        ["Is there water?", "నీళ్ళు ఉన్నాయా?", "¿Hay agua?", ["C'è acqua?", "చే ఆక్క్వా?"], ["Il y a de l'eau ?", "ఇలియా ద లో?"]],
        ["There is no time", "సమయం లేదు", "No hay tiempo", ["Non c'è tempo", "నోన్ చే తేంపో"], ["Il n'y a pas de temps", "ఇల్ నియా పా ద తాం"]]
      ]
    }
  ]
});

EU_MODULES.push({
  id: "eu-nouns", en: "Nouns: Gender, Articles & Plurals", te: "నామవాచకాలు: లింగం & బహువచనం", es: "Sustantivos: género, artículos y plural", it: "Nomi: genere, articoli e plurale", fr: "Noms : genre, articles et pluriel",
  big: "Telugu sorts nouns by meaning: male persons are మహత్, everything else is అమహత్. ⟦one|This language gives⟧⟦many|These languages give⟧ <b>every</b> noun a grammatical gender, masculine or feminine, even a table or a book, and the word for “the” changes with it. Telugu has no word for “the” at all, but ⟦#langs⟧ ⟦one|uses one⟧⟦many|use one⟧ all the time. Learn each noun together with its article, as one unit.",
  sections: [
    { h: "“The”: masculine and feminine",
      p: "⟦es|<b>Spanish:</b> <i>el</i> (masculine), <i>la</i> (feminine). Nouns in -o are usually masculine, in -a usually feminine.⟧ ⟦it|<b>Italian:</b> <i>il</i> or <i>lo</i> (masculine), <i>la</i> (feminine), <i>l'</i> before a vowel. Nouns in -o are usually masculine, in -a usually feminine.⟧ ⟦fr|<b>French:</b> <i>le</i> (masculine), <i>la</i> (feminine), <i>l'</i> before a vowel. The ending rarely tells you the gender, so the article matters most here.⟧",
      rows: [
        ["the book", "పుస్తకం", "el libro", "il libro", ["le livre", "ల లీవ్ర్"]],
        ["the house", "ఇల్లు", "la casa", "la casa", ["la maison", "లా మెజోం"]],
        ["the boy", "అబ్బాయి", "el chico", "il ragazzo", ["le garçon", "ల గార్సోం"]],
        ["the girl", "అమ్మాయి", "la chica", "la ragazza", ["la fille", "లా ఫీయ్"]],
        ["the friend (man)", "స్నేహితుడు", "el amigo", ["l'amico", "లామీకో"], ["l'ami", "లామీ"]],
        ["the friend (woman)", "స్నేహితురాలు", "la amiga", ["l'amica", "లామీకా"], ["l'amie", "లామీ"]],
        ["the sun", "సూర్యుడు", "el sol", "il sole", ["le soleil", "ల సొలెయ్"]],
        ["the moon", "చంద్రుడు", "la luna", "la luna", ["la lune", "లా లూన్"]],
        ["the tree", "చెట్టు", "el árbol", ["l'albero", "లాల్బేరో"], ["l'arbre", "లార్బ్ర్"]]
      ],
      tip: "Gender here is grammar, not meaning. The sun is masculine and the moon feminine, while in Telugu సూర్యుడు and చంద్రుడు are both male. Don't reason it out; learn the article with the word."
    },
    { h: "“A”: the word for one",
      p: "The word for “a” is simply the number “one”, exactly like Telugu ఒక. It changes with gender too.",
      rows: [
        ["a book", "ఒక పుస్తకం", "un libro", "un libro", ["un livre", "అం లీవ్ర్"]],
        ["a house", "ఒక ఇల్లు", "una casa", "una casa", ["une maison", "యూన్ మెజోం"]],
        ["a boy", "ఒక అబ్బాయి", "un chico", "un ragazzo", ["un garçon", "అం గార్సోం"]],
        ["a student (woman)", "ఒక విద్యార్థిని", "una estudiante", "una studentessa", ["une étudiante", "యూన్ ఎతూదియాంత్"]],
        ["a car", "ఒక కారు", "un coche", "una macchina", ["une voiture", "యూన్ వ్వాతూర్"]],
        ["an apple", "ఒక ఆపిల్", "una manzana", "una mela", ["une pomme", "యూన్ పొమ్"]]
      ]
    },
    { h: "Plurals",
      p: "Telugu adds -లు (పుస్తకం → పుస్తకాలు). ⟦es|Spanish adds -s or -es: <i>libro → libros</i>, and the article becomes <i>los / las</i>.⟧ ⟦it|Italian changes the last vowel, -o → -i and -a → -e (<i>libro → libri</i>), and the article becomes <i>i / gli / le</i>.⟧ ⟦fr|French adds an -s that is usually silent, so you hear the plural only in the article: <i>le livre → les livres</i> (ల లీవ్ర్ → లే లీవ్ర్).⟧",
      rows: [
        ["the books", "పుస్తకాలు", "los libros", "i libri", ["les livres", "లే లీవ్ర్"]],
        ["the houses", "ఇళ్ళు", "las casas", "le case", ["les maisons", "లే మెజోం"]],
        ["the boys", "అబ్బాయిలు", "los chicos", "i ragazzi", ["les garçons", "లే గార్సోం"]],
        ["the girls", "అమ్మాయిలు", "las chicas", "le ragazze", ["les filles", "లే ఫీయ్"]],
        ["the friends", "స్నేహితులు", "los amigos", "gli amici", ["les amis", "లే జామీ"]],
        ["the trees", "చెట్లు", "los árboles", "gli alberi", ["les arbres", "లే జార్బ్ర్"]],
        ["the cities", "నగరాలు", "las ciudades", "le città", ["les villes", "లే విల్"]]
      ],
      tip: "A group of men and women together takes the masculine plural, so “the friends” above covers everyone."
    },
    { h: "People: a pair of words for man and woman",
      p: "Telugu also has separate words for male and female people (విద్యార్థి / విద్యార్థిని, కొడుకు / కూతురు). ⟦one|This language does⟧⟦many|These languages do⟧ the same, usually with a small change at the end of the word.",
      rows: [
        ["son / daughter", "కొడుకు / కూతురు", "hijo / hija", "figlio / figlia", ["fils / fille", "ఫిస్ / ఫీయ్"]],
        ["brother / sister", "సోదరుడు / సోదరి", "hermano / hermana", "fratello / sorella", ["frère / sœur", "ఫ్రేర్ / సోర్"]],
        ["father / mother", "నాన్న / అమ్మ", "padre / madre", "padre / madre", ["père / mère", "పేర్ / మేర్"]],
        ["grandfather / grandmother", "తాత / అవ్వ", "abuelo / abuela", "nonno / nonna", ["grand-père / grand-mère", "గ్రాం-పేర్ / గ్రాం-మేర్"]],
        ["uncle / aunt", "మామయ్య / అత్త", "tío / tía", "zio / zia", ["oncle / tante", "ఒంక్ల్ / తాంత్"]],
        ["cook (man / woman)", "వంటవాడు / వంటామె", "cocinero / cocinera", "cuoco / cuoca", ["cuisinier / cuisinière", "క్వీజీనియే / క్వీజీనియేర్"]]
      ]
    }
  ]
});

EU_MODULES.push({
  id: "eu-adjectives", en: "Adjectives & Agreement", te: "విశేషణాలు", es: "Adjetivos y concordancia", it: "Aggettivi e concordanza", fr: "Adjectifs et accord",
  big: "In Telugu an adjective never changes: పెద్ద ఇల్లు, పెద్ద ఇళ్ళు, పెద్ద అబ్బాయి. ⟦one|In this language⟧⟦many|In these languages⟧ an adjective agrees with its noun in gender and number, and it usually comes <b>after</b> the noun: “house big”. Think of it as the adjective copying the noun's ending.",
  sections: [
    { h: "The adjective comes after the noun",
      p: "Most adjectives follow the noun. A few short, very common ones (good, big, small, beautiful) can come first, as in Telugu.⟦fr| French puts a few more of these in front: <i>une grande maison</i>.⟧",
      rows: [
        ["a red car", "ఎర్ర కారు", "un coche rojo", "una macchina rossa", ["une voiture rouge", "యూన్ వ్వాతూర్ రూజ్"]],
        ["a cold day", "చల్లని రోజు", "un día frío", "una giornata fredda", ["une journée froide", "యూన్ జూర్నే ఫ్ర్వాద్"]],
        ["a difficult language", "కష్టమైన భాష", "una lengua difícil", "una lingua difficile", ["une langue difficile", "యూన్ లాంగ్ దిఫిసిల్"]],
        ["sweet coffee", "తీపి కాఫీ", "café dulce", "caffè dolce", ["café sucré", "కఫే సూక్రే"]],
        ["a big house", "పెద్ద ఇల్లు", "una casa grande", "una casa grande", ["une grande maison", "యూన్ గ్రాంద్ మెజోం"]],
        ["a good friend", "మంచి స్నేహితుడు", "un buen amigo", "un buon amico", ["un bon ami", "అం బొన్ నామీ"]]
      ]
    },
    { h: "Agreement: one adjective, four forms",
      p: "The adjective takes the gender and number of its noun. ⟦es|Spanish endings: -o, -a, -os, -as.⟧ ⟦it|Italian endings: -o, -a, -i, -e.⟧ ⟦fr|French adds -e for feminine and -s for plural. Often you hear only the feminine -e, because it makes the final consonant sound (<i>petit</i> పతీ, <i>petite</i> పతీత్).⟧ Adjectives that already end in -e have one form for both genders.",
      rows: [
        ["small boy", "చిన్న అబ్బాయి", "chico pequeño", "ragazzo piccolo", ["petit garçon", "పతీ గార్సోం"]],
        ["small girl", "చిన్న అమ్మాయి", "chica pequeña", "ragazza piccola", ["petite fille", "పతీత్ ఫీయ్"]],
        ["small boys", "చిన్న అబ్బాయిలు", "chicos pequeños", "ragazzi piccoli", ["petits garçons", "పతీ గార్సోం"]],
        ["small girls", "చిన్న అమ్మాయిలు", "chicas pequeñas", "ragazze piccole", ["petites filles", "పతీత్ ఫీయ్"]],
        ["tall man", "పొడవైన మనిషి", "hombre alto", "uomo alto", ["homme grand", "ఒమ్ గ్రాం"]],
        ["tall woman", "పొడవైన స్త్రీ", "mujer alta", "donna alta", ["femme grande", "ఫామ్ గ్రాంద్"]]
      ],
      tip: "Telugu speakers forget agreement because Telugu adjectives never change. A quick check before you speak: does the adjective end like the noun?⟦es| <i>casa blanca</i>, <i>libro blanco</i>.⟧⟦it| <i>casa bianca</i>, <i>libro bianco</i>.⟧"
    },
    { h: "Useful adjectives",
      rows: [
        ["good", "మంచి", "bueno", "buono", ["bon", "బోం"]],
        ["bad", "చెడ్డ", "malo", "cattivo", ["mauvais", "మోవే"]],
        ["big", "పెద్ద", "grande", "grande", ["grand", "గ్రాం"]],
        ["small", "చిన్న", "pequeño", "piccolo", ["petit", "పతీ"]],
        ["new", "కొత్త", "nuevo", "nuovo", ["nouveau", "నూవో"]],
        ["old (thing)", "పాత", "viejo", "vecchio", ["vieux", "వియొ"]],
        ["hot", "వేడి", "caliente", "caldo", ["chaud", "షో"]],
        ["cold", "చల్లని", "frío", "freddo", ["froid", "ఫ్ర్వా"]],
        ["beautiful", "అందమైన", "bonito", "bello", ["beau", "బో"]],
        ["easy", "సులభం", "fácil", "facile", ["facile", "ఫాసిల్"]],
        ["expensive", "ఖరీదైన", "caro", "caro", ["cher", "షేర్"]],
        ["cheap", "చౌక", "barato", "economico", ["bon marché", "బోం మార్షే"]]
      ]
    },
    { h: "More, most and -ly",
      p: "Telugu builds “bigger” with కంటే and leaves the adjective alone: ఇంటి కంటే పెద్ద. ⟦one|This language works⟧⟦many|These languages work⟧ almost the same way, with a word for “more” in front. ⟦es|Spanish: <i>más</i>.⟧ ⟦it|Italian: <i>più</i>.⟧ ⟦fr|French: <i>plus</i>.⟧",
      rows: [
        ["very good", "చాలా బాగుంది", "muy bueno", "molto buono", ["très bon", "త్రే బోం"]],
        ["bigger", "ఇంకా పెద్ద", "más grande", "più grande", ["plus grand", "ప్లూ గ్రాం"]],
        ["bigger than the house", "ఇంటి కంటే పెద్ద", "más grande que la casa", "più grande della casa", ["plus grand que la maison", "ప్లూ గ్రాం క లా మెజోం"]],
        ["the biggest", "అన్నిటికంటే పెద్ద", "el más grande", "il più grande", ["le plus grand", "ల ప్లూ గ్రాం"]],
        ["slowly", "నెమ్మదిగా", "lentamente", "lentamente", ["lentement", "లాంత్మాం"]],
        ["quickly", "త్వరగా", "rápidamente", "rapidamente", ["rapidement", "రాపిద్మాం"]]
      ],
      tip: "To make “-ly”, Telugu adds -గా (నెమ్మది → నెమ్మదిగా). ⟦es|Spanish adds <i>-mente</i> to the feminine form.⟧ ⟦it es|Italian adds <i>-mente</i> too.⟧⟦it !es|Italian adds <i>-mente</i> to the feminine form.⟧ ⟦fr|French adds <i>-ment</i>.⟧"
    }
  ]
});

EU_MODULES.push({
  id: "eu-numbers", en: "Numbers, Days & Time", te: "సంఖ్యలు, రోజులు & సమయం", es: "Números, días y hora", it: "Numeri, giorni e ore", fr: "Nombres, jours et heure",
  big: "Numbers are built like Telugu: twenty-one is “twenty + one”, as in ఇరవై ఒకటి. ⟦fr|French has one surprise: 70, 80 and 90 are counted partly in twenties.⟧ And the days of the week are named after the same planets as the Telugu days: Monday is the Moon's day (సోమవారం), Tuesday is Mars's day (మంగళవారం).",
  sections: [
    { h: "One to ten",
      rows: [
        ["1", "ఒకటి", "uno", "uno", ["un", "అం"]],
        ["2", "రెండు", "dos", "due", ["deux", "దొ"]],
        ["3", "మూడు", "tres", "tre", ["trois", "త్ర్వా"]],
        ["4", "నాలుగు", "cuatro", "quattro", ["quatre", "కాత్ర్"]],
        ["5", "ఐదు", "cinco", "cinque", ["cinq", "సెంక్"]],
        ["6", "ఆరు", "seis", "sei", ["six", "సిస్"]],
        ["7", "ఏడు", "siete", "sette", ["sept", "సెత్"]],
        ["8", "ఎనిమిది", "ocho", "otto", ["huit", "వీత్"]],
        ["9", "తొమ్మిది", "nueve", "nove", ["neuf", "నొఫ్"]],
        ["10", "పది", "diez", "dieci", ["dix", "దిస్"]]
      ],
      tip: "These numbers come from Latin, a distant cousin of Sanskrit, so some will look familiar: త్రి (three), సప్త (seven), అష్ట (eight), నవ (nine), దశ (ten)."
    },
    { h: "Tens and bigger numbers",
      p: "After twenty, say the tens and then the unit, as in Telugu ఇరవై ఒకటి. ⟦fr|French counts 70 as “sixty-ten” (<i>soixante-dix</i>), 80 as “four-twenties” (<i>quatre-vingts</i>) and 90 as “four-twenties-ten”.⟧",
      rows: [
        ["11", "పదకొండు", "once", "undici", ["onze", "ఒంజ్"]],
        ["20", "ఇరవై", ["veinte", "బేయింతే"], "venti", ["vingt", "వెం"]],
        ["21", "ఇరవై ఒకటి", ["veintiuno", "బేయింతియునో"], "ventuno", ["vingt et un", "వెంతే అం"]],
        ["30", "ముప్పై", ["treinta", "త్రేయింతా"], "trenta", ["trente", "త్రాంత్"]],
        ["50", "యాభై", "cincuenta", "cinquanta", ["cinquante", "సెంకాంత్"]],
        ["70", "డెబ్బై", "setenta", "settanta", ["soixante-dix", "స్వాసాంత్-దిస్"]],
        ["80", "ఎనభై", "ochenta", "ottanta", ["quatre-vingts", "కాత్ర్-వెం"]],
        ["90", "తొంభై", "noventa", "novanta", ["quatre-vingt-dix", "కాత్ర్-వెం-దిస్"]],
        ["100", "వంద", "cien", "cento", ["cent", "సాం"]],
        ["1000", "వెయ్యి", "mil", "mille", ["mille", "మిల్"]]
      ]
    },
    { h: "Days of the week",
      p: "Five of the seven days are named after the same planets as the Telugu days. Only Saturday and Sunday differ: they come from “Sabbath” and “the Lord's day”.",
      rows: [
        ["Monday · Moon", "సోమవారం", "lunes", "lunedì", ["lundi", "లందీ"]],
        ["Tuesday · Mars", "మంగళవారం", "martes", "martedì", ["mardi", "మార్దీ"]],
        ["Wednesday · Mercury", "బుధవారం", "miércoles", "mercoledì", ["mercredi", "మెర్క్రదీ"]],
        ["Thursday · Jupiter", "గురువారం", "jueves", "giovedì", ["jeudi", "జొదీ"]],
        ["Friday · Venus", "శుక్రవారం", "viernes", "venerdì", ["vendredi", "వాంద్రదీ"]],
        ["Saturday", "శనివారం", "sábado", "sabato", ["samedi", "సామ్దీ"]],
        ["Sunday", "ఆదివారం", "domingo", "domenica", ["dimanche", "దిమాంష్"]]
      ],
      tip: "Telugu adds -వారం to every day. ⟦one|This language doesn't⟧⟦many|These languages don't⟧ need a separate word: the planet's name has fused with the old word for “day”."
    },
    { h: "Telling the time",
      rows: [
        ["What time is it?", "టైమ్ ఎంత అయింది?", "¿Qué hora es?", "Che ore sono?", ["Quelle heure est-il ?", "కెల్ ఓర్ ఏ-తిల్?"]],
        ["It is one o'clock", "ఒంటి గంట అయింది", "Es la una", ["È l'una", "ఏ లూనా"], ["Il est une heure", "ఇలే యూన్ ఓర్"]],
        ["It is three o'clock", "మూడు గంటలు అయింది", "Son las tres", "Sono le tre", ["Il est trois heures", "ఇలే త్ర్వా జోర్"]],
        ["half past four", "నాలుగున్నర", "las cuatro y media", "le quattro e mezza", ["quatre heures et demie", "కాత్రోర్ ఏ దమీ"]],
        ["quarter past six", "ఆరుంబావు", "las seis y cuarto", "le sei e un quarto", ["six heures et quart", "సిజోర్ ఏ కార్"]],
        ["today", "ఈరోజు", "hoy", "oggi", ["aujourd'hui", "ఓజూర్ద్వీ"]],
        ["tomorrow", "రేపు", "mañana", "domani", ["demain", "దమెం"]],
        ["yesterday", "నిన్న", "ayer", "ieri", ["hier", "ఇయేర్"]]
      ],
      tip: "“Half past four” is said just like Telugu నాలుగున్నర: “four and a half”."
    }
  ]
});

EU_MODULES.push({
  id: "eu-phrases", en: "Everyday Phrases", te: "రోజువారీ మాటలు", es: "Frases cotidianas", it: "Frasi quotidiane", fr: "Phrases du quotidien",
  big: "Whole sentences to use from day one: shopping, getting around, eating out, asking for help. Learn them as chunks, the way you picked up Telugu as a child. The other modules will slowly explain why they are built the way they are.",
  sections: [
    { h: "Shopping",
      rows: [
        ["How much is it?", "ఇది ఎంత?", "¿Cuánto cuesta?", "Quanto costa?", ["Combien ça coûte ?", "కొంబియెం సా కూత్?"]],
        ["I want this", "నాకు ఇది కావాలి", "Quiero esto", "Voglio questo", ["Je veux ça", "జ వొ సా"]],
        ["Do you have…?", "మీ దగ్గర … ఉందా?", "¿Tiene…?", "Avete…?", ["Vous avez… ?", "వూ జావే…?"]],
        ["It's too expensive", "చాలా ఖరీదు", "Es demasiado caro", "È troppo caro", ["C'est trop cher", "సే త్రో షేర్"]],
        ["Can I pay by card?", "కార్డుతో కట్టవచ్చా?", "¿Puedo pagar con tarjeta?", "Posso pagare con la carta?", ["Je peux payer par carte ?", "జ పొ పేయే పార్ కార్త్?"]],
        ["The bill, please", "బిల్లు ఇవ్వండి", "La cuenta, por favor", "Il conto, per favore", ["L'addition, s'il vous plaît", "లాదిస్యోం, సిల్ వూ ప్లే"]]
      ]
    },
    { h: "Getting around",
      rows: [
        ["Where is the station?", "స్టేషన్ ఎక్కడ ఉంది?", "¿Dónde está la estación?", ["Dov'è la stazione?", "దోవే లా స్తాట్సియోనే?"], ["Où est la gare ?", "ఊ ఏ లా గార్?"]],
        ["to the left", "ఎడమ వైపు", "a la izquierda", "a sinistra", ["à gauche", "ఆ గోష్"]],
        ["to the right", "కుడి వైపు", "a la derecha", "a destra", ["à droite", "ఆ ద్ర్వాత్"]],
        ["straight ahead", "నేరుగా", "todo recto", "sempre dritto", ["tout droit", "తూ ద్ర్వా"]],
        ["Is it far?", "దూరమా?", "¿Está lejos?", "È lontano?", ["C'est loin ?", "సే ల్వెం?"]],
        ["A ticket to Rome, please", "రోమ్‌కి ఒక టికెట్, దయచేసి", "Un billete para Roma, por favor", "Un biglietto per Roma, per favore", ["Un billet pour Rome, s'il vous plaît", "అం బియే పూర్ రొమ్, సిల్ వూ ప్లే"]]
      ],
      tip: "Telugu puts the place first and the little word after it (రోమ్‌కి, ఇంటికి). ⟦one|This language puts⟧⟦many|These languages put⟧ the little word first: “to Rome”, “to the house”."
    },
    { h: "At a restaurant",
      rows: [
        ["A table for two", "ఇద్దరికి ఒక టేబుల్", "Una mesa para dos", "Un tavolo per due", ["Une table pour deux", "యూన్ తాబ్ల్ పూర్ దొ"]],
        ["The menu, please", "మెనూ ఇవ్వండి", "La carta, por favor", "Il menù, per favore", ["Le menu, s'il vous plaît", "ల మనూ, సిల్ వూ ప్లే"]],
        ["I am vegetarian", "నేను శాకాహారిని", "Soy vegetariano", "Sono vegetariano", ["Je suis végétarien", "జ స్వీ వెజెతారియెం"]],
        ["Water, please", "నీళ్ళు ఇవ్వండి", "Agua, por favor", "Acqua, per favore", ["De l'eau, s'il vous plaît", "ద లో, సిల్ వూ ప్లే"]],
        ["Not spicy, please", "కారం వద్దు", "Sin picante, por favor", "Non piccante, per favore", ["Pas épicé, s'il vous plaît", "పా జెపిసే, సిల్ వూ ప్లే"]],
        ["It was delicious", "చాలా రుచిగా ఉంది", "Estaba delicioso", "Era delizioso", ["C'était délicieux", "సేతే దెలిసియొ"]]
      ]
    },
    { h: "Help and emergencies",
      rows: [
        ["Help!", "సహాయం!", "¡Ayuda!", ["Aiuto!", "ఆయుతో!"], ["Au secours !", "ఓ స్కూర్!"]],
        ["I am lost", "నేను దారి తప్పిపోయాను", "Estoy perdido", "Mi sono perso", ["Je suis perdu", "జ స్వీ పెర్దూ"]],
        ["I need help", "నాకు సహాయం కావాలి", "Necesito ayuda", ["Ho bisogno di aiuto", "ఓ బిసోన్యో ది ఆయుతో"], ["J'ai besoin d'aide", "జే బజ్వెం దెద్"]],
        ["Call a doctor", "డాక్టర్‌ని పిలవండి", "Llame a un médico", "Chiami un medico", ["Appelez un médecin", "అప్లే అం మెద్సెం"]],
        ["Call the police", "పోలీసులను పిలవండి", "Llame a la policía", "Chiami la polizia", ["Appelez la police", "అప్లే లా పొలీస్"]],
        ["Where is the toilet?", "టాయిలెట్ ఎక్కడ?", "¿Dónde está el baño?", ["Dov'è il bagno?", "దోవే ఇల్ బాన్యో?"], ["Où sont les toilettes ?", "ఊ సోం లే త్వాలెత్?"]]
      ],
      tip: "In a hurry, one word plus “please” works everywhere, just as in Telugu: “water, please”, “doctor, please”."
    }
  ]
});
