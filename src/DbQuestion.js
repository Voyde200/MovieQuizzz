//Creating the list of question
//The each element of the list is another list
//this other list contain
//1 : The name of the movie in québécois (the question)
//2 : The name of the movie in english (the answer, that the player has to select to win points)
//3 : Keyword from the name in english, in order to fetch movie name that looks alike in OMDB API

var QuestionList = [
  ["Une vie de bestiole", "A Bug's Life", "bug"],
  ["Quand les femmes s'en mêlent", "Working Girl", "women"],
  ["Rapides et Dangereux", "Fast and Furious", "fast"],
  ["Maison Blanche en péril", "White House Down", "house"],
  ["Lendemain de veille", "Hangover", "hangover"],
  ["Au bord du désastre", "The Edge", "disaster"],
  ["Brèche", "Breach", "breach"],
  ["Le courage à l'épreuve", "Courage Under Fire", "courage"],
  ["Une nuit en enfer", "From Dusk Till Dawn", "night"],
  ["L'agent secret se découvre", "Spy Hard", "spy"],
  ["Histoire de jouets", "Toy Story", "toy"],
  ["Thor : Amour et tonnerre", "Thor: Love and Thunder", "thor"],
  ["Bonjour l'amour", "The Sweetest Thing", "love"],
  ["Terminator Rédemption", "Terminator Salvation", "terminator"],
  ["Collège américain", "National Lampoon's Animal House", "highschool"],
  ["Chauffeur de taxi", "Taxi Driver", "driver"],
  [
    "Sur les traces du Père Noël 3 La Clause Force Majeure",
    "The Santa Clause 3: The Escape Clause",
    "santa clause",
  ],
  ["Le tout pour le tout", "Bring It On", "all"],
  ["L'Escadron Suicide", "Suicide Squad", "squad"],
  ["Folie de graduation", "American Pie", "crazy"],
  ["Patrouilleurs de l'espace", "Starship Troopers", "space"],
  ["Tireur d'élite américain", "American Sniper", "sniper"],
  ["Le téléphone rose", "For a Good Time, Call...", "call"],
  ["SOS Fantôme : l'au-delà", "Ghostbusters: Afterlife", "ghost"],
  ["72 Heures", "Get Him to the Greek", "hours"],
  ["Le pouilleux millionnaire", "Slumdog Millionaire", "millionaire"],
  ["Vivre pour danser", "Step Up", "dancer"],
  ["Maman Porteuse", "Baby Mama", "carrier"],
  ["Film de peur", "Scary Movie", "scary"],
  ["Décadence", "Saw"],
  ["Mauvais Garçons", "Bad Boys", "boy"],
  ["Blonde et légale", "Legally Blonde", "blonde"],
  ["Les apprentis champions", "Cool Runnings", "champion"],
  ["Fiction pulpeuse", "Pulp Fiction", "fiction"],
  ["Une jolie femme", "Pretty Woman", "woman"],
  ["Combinaison gagnante", "Lucky Numbers", "winner"],
  ["Bataille Navale", "Battleship"],
  ["Au-delà du Jeu et de l'Amour", "For Love of the Game", "love"],
  ["Extrême limite", "Point Break", "extreme"],
  ["Les Avions: les pompiers du ciel", "Planes 2", "plane"],
  ["Rives du Pacifique", "Pacific Rim", "Pacific"],
  ["La chambre forte", "Panic Room", "vault"],
  ["Les Bagnoles", "Cars", "car"],
  ["L'inconnu de Las Vegas", "Ocean's Eleven", "Las Vegas"],
  ["Poulets en fuite", "Chiken Run", "chiken"],
  ["Coup musclé", "Pain & Gain", "pain"],
  ["Conjuration", "Conjuring"],
  ["Détestable moi", "Despicable Me", "detestable"],
  ["La Brume", "Stephen King's The Mist", "mist"],
  ["Hommes en noir", "Men in Black", "black"],
  ["Mamma Mia! Et c'est reparti", "Mamma Mia! Here We Go Again"],
  ["Sang-froid", "Drive", "impassive"],
  ["Danse lascive", "Dirty Dancing", "dancing"],
  ["L'homme d'acier", "Man of Steel", "steel"],
  ["Deux épais en cavale", "Dude, Where's My Car ?", "run"],
  ["Réellement l'amour", "Love actually", "love"],
  ["La Cloche et l'Idiot", "Dumb and Dumber", "bell"],
  ["Traduction infidèle", "Lost in Translation", "translation"],
  ["Tuer Bill", "Kill Bill", "bill"],
  ["Diaboliquement vôtre", "Bedazzled", "diabolical"],
  ["Monde Jurassique", "Jurassic World", "jurassic"],
  ["Marche ou crève vengeance définitive", "Die Hard with a Vengeance", "die"],
  ["Amour et Magie", "Practical Magic", "magic"],
  ["Le Commando des bâtards", "Inglourious Basterds", "commando"],
  ["Le Sacrifiés", "The Expendables", "sacrificed"],
  ["Blessures fatales", "Exit Wounds", "fatal"],
  ["Alter ego", "Dead Ringers", "ego"],
  ["Géotempête", "Geostorm", "storm"],
  ["Drôle de blondes", "White Chicks", "funny"],
];

// Selecting a random array from QuestionList
var randomIndex = Math.floor(Math.random() * QuestionList.length);
var randomQuestion = QuestionList[randomIndex];

// Now, randomQuestion contains a random array from QuestionList
console.log("Goulu");
console.log(randomQuestion);
export default randomQuestion;
