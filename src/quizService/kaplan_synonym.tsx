const kaplanGreSynonymBank = [
    {
        question: "Abate",
        correct: "To reduce in amount, degree, or severity",
        description:"As the hurricane's force abated, the winds dropped the sea became calm.",
        synonyms:[
            "Ebb: ",
            "Lapse: ",
            "Let up: ",
            "Moderate: ",
            "Relent: ",
            "Slacken: ",
            "Subside: ",
            "Wane: "
        ],
        answers: [ "", "", "", ""],
        questionId: "0001",
    },
    {
        question: "Banal",
        correct: "predictable, cliched, boring",
        description:"He used banal phrases like 'Have a nice Day' or 'Another day another dollar'.",
        synonyms:[
            "Bland: ",
            "Bromidic: ",
            "Cliched: ",
            "Commonplace: ",
            "Fatuous: ",
            "Hackneyed: ",
            "Innocuous: ", 
            "Insipid: ", 
            "Jejune: ", 
            "Musty: ",
            "Platitudinous: ",
            "Prosaic: ",
            "Quotidian: ",
            "Shopworn: ",
            "Stale: ",
            "Stereotypic: ",
            "Threadbare: ",
            "Timeworn: ",
            "Tired: ",
            "Trite: ",
            "Vapid: ",
            "Worn-out: "
        ],
        answers: [ "", "", "", ""],
        questionId: "0002",
        
    },
    {
        question: "Capricious",
        correct: "changing one's mind quickly and often",
        description:"Queen Elizabeth I was capricious; her coutiers could never be sure which of their number would catch her fancy.",
        synonyms:[
            "Arbitary: ", 
            "Chance: ", 
            "Changeable: ", 
            "Erratic: ",
            "Fickle: ",
            "Inconstant: ",
            "Mercurial: ",
            "Random: ",
            "Whimsical: ",
            "Willful: "
        ],
        answers: [ "", "", "", ""],
        questionId: "0003",
    },
    {
        question: "Deference",
        correct: "respect, courtesy",
        description: "The respectful young law clerk treated the Supreme Court justice with the utmost deference.",
        synonyms:[
            "Courtesy: ", 
            "Homage: ", 
            "Obeisance: ", 
            "Reverence: ",
            "Veneration: ",
            
        ],
        answers: [ "", "", "", ""],
        questionId: "0004",
        
    },
    {
        question: "Enervate",
        correct: "To reduce in strength",
        description: "The guerrillas hoped that a series of surprise attacks would enervate the regular army.",
        synonyms:[
            "Unnerve: to deprive of strength or courage", 
            "Debilitate: ", 
            "Enfeeble: ", 
            "Sap: ",
            "Weaken: "
        ],
        answers: [ "", "", "", ""],
        questionId: "0005",
        
    },
    {
        question: "Fanatical",
        correct: "Acting excessively enthusiastic",
        description: "The stomtroopers were fanatical in their devotion to the Emperor, readily sacrificing their lives for him.",
        synonyms:[
            "Extremist: ", 
            "Fiery: ", 
            "Frenzied: ", 
            "Zealous: "
        ],
        answers: [ "", "", "", ""],
        questionId: "0006",
        
    },
    {
        question: "Garrulous",
        correct: "tending to talk a lot",
        description: "The garrulous parakeet distracted its owner with its continuous talking",
        synonyms:[
            "Effusive: ", 
            "Loquacious: ", 
        ],
        answers: [ "", "", "", ""],
        questionId: "0007",
        
    },
    {
        question: "Iconoclast",
        correct: "one who opposes established beliefs, customs, and institution",
        description: "His lack of regard for traditional belief soon established him as an iconoclast.",
        synonyms:[
            "Maverick: ", 
            "Nonconformist: ", 
            "Rebel: ", 
            "Revolutionary: "
        ],
        answers: [ "", "", "", ""],
        questionId: "0008",
        
    },
    {
        question: "Malingerer",
        correct: "to evade responsibility by pretending to be ill",
        description: "A common way to avoid the draft was by malingering- pretending to be mentally or physically ill so as to avoid being taken by the army",
        synonyms:[
            "shirk: ", 
            "slack: ",  
        ],
        answers: [ "", "", "", ""],
        questionId: "0009",
        
    },
    {
        question: "Naive",
        correct: "lacking sophistication or experience",
        description: "Having never traveled before, the hillbillies were more naive than the people they met in Beverly Hills",
        synonyms:[
            "Artless: ", 
            "Credulous: ", 
            "Guileless: ", 
            "Ingenuous: ",
            "Simple: "
        ],
        answers: [ "", "", "", ""],
        questionId: "0010",
        
    },
    {
        question: "Obdurate",
        correct: "hardened in feeling; resistant to persuasion",
        description: "The president was completely obdurate on the issue, and amount of persuation would change his mind.",
        synonyms:[
            "Inflexible", 
            "Intransigent", 
            "Recalcitrant", 
            "Tenacious",
            "Unyielding"
        ],
        answers: [ "", "", "", ""],
        questionId: "0011",
        
    },
    {
        question: "Paragon",
        correct: "Model of excellence or perfection",
        description: "She is the paragon of what a judge should be: honest, intelligent, hardworking, and just.",
        synonyms:[
            "Apotheosis", 
            "Ideal", 
            "Quintessence", 
            "Standard"
        ],
        answers: [ "", "", "", ""],
        questionId: "0012",
        
    },
    {
        question: "Quiescent",
        correct: "motionless",
        description: "Many animals are quiescent over the winter months, minimizing activity in order to conserve energy.",
        synonyms:[
            "Dormant", 
            "Latent", 
        ],
        answers: [ "", "", "", ""],
        questionId: "0013",
        
    },
    {
        question: "Rarefy",
        correct: "to make thinner or sparser",
        description: "Since the atmosphere rarefy as altitudes increase, the air at the top of very tall mountains is too thin to breathe.",
        synonyms:[
            "Attenuate", 
            "Thin", 
        ],
        answers: [ "", "", "", ""],
        questionId: "0014",
        
    },
]


export default (n = 5) =>
        Promise.resolve(kaplanGreSynonymBank.sort(() => 0.5 - Math.random()).slice(0, n));
    