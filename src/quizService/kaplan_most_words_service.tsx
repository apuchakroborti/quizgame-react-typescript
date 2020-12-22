const kaplanGreWordsBank = [
    {
        question: "Anomaly",
        answers: ["Deviation from what is normal", "Not clear like double meaning", "completely obvious", "to object or show reluctance"],
        correct: "Deviation from what is normal",
        synonyms:[
            "Anomalous: deviating from what is normal",
            "Aberrance: ",
            "Aberation: ",
            "Abnormality",
            "Deviance",
            "Deviation",
            "Irregularity",
            "Preternaturalness"
        ],
        questionId: "0001",
        description:"Albino animals may display too great an anomaly in their coloring to attract normally colored mates."
    },
    {
        question: "Equivocal",
        answers: ["lucid", 
        "Not clear like double meaning", 
        "completely obvious", 
        "to object or show reluctance"],
        correct: "Not clear like double meaning",
        synonyms:[
            "Ambiguous",
            "Evasive",
            "Waffling",
        ],
        questionId: "0002",
        description:"When faced with criticism of his polices, the politician equivocated and left all parties thinking he agreed with them."
    },
    {
        question: "Lucid",
        answers: ["difficult to understand", "Not clear like double meaning", "easily understand", "to throw violently"],
        correct: "easily understand",
        synonyms:[
            "Lucidity: clarity",
            "Lucent: glowing with light",
            "Clear",
            "Coherent",
            "Explicit",
            "Intelligible",
            "Limpid",
        ],
        questionId: "0003",
        description:"The explanation were written in a simple and Lucid manner so that students were immediatley able to apply what they learned."
    },
    {
        question: "Precipitate",
        answers: ["pacify", "without any attempt at concealment", "completely obvious", "to throw violently"],
        correct: "to throw violently",
        synonyms:[
            "Abrupt",
            "Hasty",
            "Headlong",
            "Hurried",
            "Ill-considered",
            "Impetuous",
            "Impulsive",
            "Prompt",
            "Reckless",
            "Sudden"
        ],
        questionId: "0004",
        description:"Upon learning that the couple married after knowing each other only"+
        " two months, friends and family members expected such a precipitate marriage to end in divorce."
    },
    {
        question: "Assuage",
        answers: ["pacify", "to throw violently", "completely obvious", "to object or show reluctance"],
        correct: "pacify",
        synonyms:[
            "Allay",
            "Alleviate",
            "Appease",
            "Comfort",
            "Conciliate",
            "Ease",
            "Lighten",
            "Mitigate",
            "Mollify",
            "Pacify",
            "Palliate",
            "Placate",
            "Propitiate",
            "Relieve",
            "Soothe",
            "Sweeten"
        ],
        questionId: "0005",
        description:"Like many people, Philip Larkin used alcohol to assuage "+
        "his sense of meaninglessness and despair."
    },
    {
        question: "Erudite",
        answers: ["to throw violently", "scholarly", "completely obvious", "pacify"],
        correct: "scholarly",
        synonyms:[
            "Scholastic",
            "Learned",
            "Wise",
        ],
        questionId: "0006",
        description:"The annual meeting of philosophy professor was a gathering of the most erudite, well-published individuals in the field."
    },
    {
        question: "Opaque",
        answers: ["scholarly", "pacify", "impossible to see through", "a puzzle"],
        correct: "impossible to see through",
        synonyms:[
            "Obscure",
        ],
        questionId: "0007",
        description:"The heavy buildup of dirt and grime on the windows almost made them opaque."
    },
    {
        question: "Prodigal",
        answers: ["pacify", "scholarly", "completely obvious", "wasteful"],
        correct: "wasteful",
        synonyms:[
            "Prodigality: excessive or reckless spending",
            "Extravagant",
            "Lavish",
            "Profligate",
            "Spendthrift",
            "Wasteful",
        ],
        questionId: "0008",
        description:"The prodigal son quickly wasted all of his inheritance on a lavish lifestyle devoted to pleasure."
    },
    {
        question: "Enigma",
        answers: ["difficult to understand", "without any attempt at concealment", "a puzzle", "to object or show reluctance"],
        correct: "a puzzle",
        synonyms:[
            "Conundrum",
            "Perplexity",
        ],
        questionId: "0009",
        description:"(a mystery) Speaking in riddles and dressed in old robes, the artist gained a reputation as something of an enigma."
    },
    {
        question: "Fervid",
        answers: ["a puzzle", "intensely emotional", "completely obvious", "wasteful"],
        correct: "intensely emotional",
        synonyms:[
            "Fervent: enthusiastic",
            "Fervor: passion",
            "Burning",
            "Impassioned",
            "Passionate",
            "Vehement",
            "Zealous",
        ],
        questionId: "0010",
        description:"The fans of Maria Callas were particularly fervid, doing anything to catch a glimpse(flash) of the great singer."
    },
    {
        question: "Placate",
        answers: ["scholarly", "intensely emotional", "to soothe or pacify", "wasteful"],
        correct: "to soothe or pacify",
        synonyms:[
            "Appease",
            "Conciliate",
            "Related words: Placid: tolerant; calm",
            "Related words: Implacable: unable to be made peaceful",
        ],
        questionId: "0011",
        description:"The burglar tried to placate the snarling dog by saying, 'Nice doggy', and offering it a treat."
    },
    {
        question: "Zeal",
        answers: ["to soothe", "completely obvious", "wasteful", "passion, excitement"],
        correct: "passion, excitement",
        synonyms:[
            "Ardency",
            "Fervor",
            "Fire",
            "Passion",
            "Related word: Zealot: a fanatic",
        ],
        questionId: "0012",
        description:"She brought her typical zeal to the project, sparking enthusiasm in the other team members"
    }
    ,
    {
        question: "Abstain",
        answers: ["to choose not to do something", "completely obvious", "wasteful", "passion, excitement"],
        correct: "to choose not to do something",
        synonyms:[
            "Forbear", 
            "Refrain",
            "Withhold",
        ],
        questionId: "0013",
        description: "During Lent, practicing Catholics abstain from eating meat."
    }
    ,
    {
        question: "Audacious",
        answers: ["to choose not to do something", "fearless and daring", "wasteful", "passion, excitement"],
        correct: "fearless and daring",
        synonyms:[
            "Audacity: the quality of being audacious",
            "Adventuresome",
            "Aggressive",
            "Assertive",
            "Bold",
            "Brave",
            "Courageous",
            "Daring",
            "Dauntless",
            "Doughty",
            "Fearless",
            "Gallant",
            "Game",
            "Heroic",
            "Intrepid",
            "Mettlesome",
            "Plucky",
            "Stout",
            "Stouthearted",
            "Unafraid",
            "Undaunted",
            "Valiant",
            "Valorous",
            "Venturesome",
            "Venturous"
        ],
        questionId: "0014",
        description: "'And you, your majesty, may kiss my bum!' replied the audacious peasant."
    }
    ,
    {
        question: "Desiccate",
        answers: ["to choose not to do something", "fearless and daring", "to dry out thoroughly", "passion, excitement"],
        correct: "to dry out thoroughly",
        synonyms:[
            "Related words: Desiccant: something that removes water from another substance",
            "Dehydrate",
            "Dry",
            "Parch",
        ],
        questionId: "0015",
        description: "After a few weeks of lying on the desert's baking sands, the cow's carcass became completely desiccated."
    }
    ,
    {
        question: "Gullible",
        answers: ["to choose not to do something", 
        "fearless and daring", 
        "to dry out thoroughly", 
        "easily deceived"],
        correct: "easily deceived",
        synonyms:[
            "Related words: Gull: a person who is easily tricked",
            "Credulous",
            "Exploitable",
            "Naive",
        ],
        questionId: "0016",
        description: "The con man pretend to be a bank officer so as to fool guillible bank customers into giving him their account information."
    }
    ,
    {
        question: "Laudable",
        answers: ["worthy of praise", 
        "fearless and daring", 
        "to dry out thoroughly", 
        "easily deceived"],
        correct: "worthy of praise",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0017",
        description: "Parades and fireworks were staged to laud the success of the rebels."
    }
    ,
    {
        question: "Pedant",
        answers: ["", "", "", ""],
        correct: "Someone who shows off learning",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0018",
        description: "The graduate instructor's tedious and exxessive commentary on the subject soon gained her a reputation as a pedant."
    }
    ,
    {
        question: "Vacillate",
        answers: ["", "", "", ""],
        correct: "",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0019",
        description: ""
    }
    ,
    {
        question: "Adulterate",
        answers: ["", "", "", ""],
        correct: "",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0020",
        description: ""
    }
    ,
    {
        question: "Capricious",
        correct: "changing one's mind quickly and often",
        description:"Queen Elizabeth I was capricious; her coutiers could never be sure which of their number would catch her fancy.",
        synonyms:[
            "Arbitary: random, capricious", 
            "Chance: ", 
            "Changeable: ", 
            "Erratic: (Wandering and unpredictable) The plot seemed predictable until it suddenly took a"+
            " series of erratic turns that surprised the audience.",
            "Errant: straying, mistaken, roving",
            "Fickle: likely to change for no good reason",
            "Inconstant: ",
            "Mercurial: emotionally unpredictable; rapidly changing in mood",
            "Random: ",
            "Whimsical: acting in a fanciful or capricious manner; unpredictable",
            "Willful: ",
            "Irresolute"
        ],
        answers: [ "", "", "", ""],
        questionId: "0021",
    },
    {
        question: "Engender",
        answers: ["", "", "", ""],
        correct: "",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0022",
        description: ""
    }
    ,
    {
        question: "Homogenous",
        answers: ["", "", "", ""],
        correct: "",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0023",
        description: ""
    }
    ,
    {
        question: "Loquacious",
        answers: ["", "", "", ""],
        correct: "",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0024",
        description: ""
    }
    ,
    {
        question: "Pragmatic",
        answers: ["", "", "", ""],
        correct: "",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0025",
        description: ""
    }
    ,
    {
        question: "Volatile",
        answers: ["", "", "", ""],
        correct: "",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0026",
        description: ""
    }
    ,
    {
        question: "Apathy",
        answers: ["", "", "", ""],
        correct: "",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0027",
        description: ""
    }
    ,
    {
        question: "Corroborate",
        answers: ["", "", "", ""],
        correct: "",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0028",
        description: ""
    }
    ,
    {
        question: "Ephemeral",
        answers: ["", "", "", ""],
        correct: "",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0029",
        description: ""
    }
    ,
    {
        question: "Laconic",
        answers: ["to express sorrow; to grieve", "easily made angry", "using few words", "to give praise"],
        correct: "using few words",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0030",
        description: "She was a laconic poet who built her reputation on using words as sparingly as possible."
    }
    ,
    {
        question: "Mitigate",
        answers: [
            "to soften, to lessen", 
            "to evade responsibility by pretending to be ill", 
            "extremly careful about details", 
            "capable of being shaped"
        ],
        correct: "to soften, to lessen",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0031",
        description: "A judge may mitigate a sentence if she decides that a person commited a crime out of need."
    }
    ,
    {
        question: "Propriety",
        answers: [
        "wisdom, caution, or restraint", 
        "correct behavior, obediance to rules and customs", 
        "motionless", 
        "to increase in number quickly"
        ],
        correct: "correct behavior, obediance to rules and customs",
        synonyms:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        questionId: "0032",
        description: "The aristocracy maintained a high level of propriety, adhearing to even the most minor social rules."
    },    
];
    
    export default (n = 5) =>
        Promise.resolve(kaplanGreWordsBank.sort(() => 0.5 - Math.random()).slice(0, n));
      
    