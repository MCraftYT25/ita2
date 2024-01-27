//Słów musi być przynajmniej 10 innaczej będą błędy
var dictionarydef = {
    "grande": "duży",
    "stesso": "ten sam",
    "bello": "piękny",
    "nuovo": "nowy",
    "certo": "pewny",
    "vero": "prawdziwy",
    "buono": "dobry",
    "italiano": "włoski",
    "vecchio": "stary",
    "ora": "teraz",
    "qui": "tutaj",
    "là": "tam",
    "sempre": "zawsze",
    "mai": "nigdy",
    "molto": "bardzo",
    "troppo": "zbyt",
    "bene": "dobrze",
    "male": "źle",
    "velocemente": "szybko",
    "lentamente": "powoli",
    "spesso": "często",
    "a volte": "czasami",
    "d’ora in poi": "od teraz",
    "amore": "miłość",
    "tempo": "czas",
    "uomo": "mężczyzna",
    "anno": "rok",
    "giorno": "dzień",
    "mano": "ręka",
    "occhio": "oko",
    "cosa": "rzecz",
    "parte": "część",
    "vita": "życie",
    "ora": "godzina",
    "madre": "matka",
    "padre": "ojciec",
    "figlio": "syn",
    "mondo": "świat",
    "casa": "dom",
    "posto": "miejsce",
    "lavoro": "praca",
    "settimana": "tydzień",
    "momento": "moment",
    "donna": "kobieta",
    "paese": "kraj",
    "amico": "przyjaciel",
    "piede": "stopa",
    "corpo": "ciało",
    "bambino": "dziecko",
    "problema": "problem"
    // Dodaj więcej słów do słownika
};
var dictionary1 = {
    "arancione": "pomarańczowy",
    "argento": "srebrny",
    "bianco": "biały",
    "blu": "niebieski",
    "giallo": "żółty",
    "grigio": "szary",
    "marrone": "brązowy",
    "nero": "czarny",
    "oro": "złoty",
    //"prugna": "śliwkowy",
    "rosa": "różowy",
    "rosso": "czerwony",
    "verde": "zielony",
    "viola": "fioletowy"
};

var dictionary2 = {
    "anatra": "kaczka",
    "cane": "pies",
    //"canguro": "kangur",
    "cavallo": "koń",
    //"coniglio": "królik",
    "elefante": "słoń",
    //"gallina": "kura",
    "gatto": "kot",
    //"giaguaro": "jaguar",
    //"giraffa": "żyrafa",
    //"gufo": "sowa",
    //"iguana": "iguana",
    "leone": "lew",
    "maiale": "świnia",
    "mucca": "krowa",
    "orso": "niedźwiedź",
    "pecora": "owca",
    "pesce": "ryba",
    "pinguino": "pingwin",
    "scimmia": "małpa",
    "serpente": "wąż",
    "tigre": "tygrys",
    "topo": "mysz",
    //"volpe": "lis"

};

var dictionary3 = {
    "aglio": "czosnek",
    "anguria": "arbuz",
    "arancia": "pomarańcza",
    "banana": "banan",
    "carne": "mięso",
    "carota": "marchewka",
    "cetriolo": "ogórek",
    "ciliegia": "wiśnia",
    "cipolla": "cebula",
    "formaggio": "ser",
    "fragola": "truskawka",
    "frutta": "owoce",
    "latte": "mleko",
    "lattuga": "sałata",
    "limone": "cytryna",
    "mela": "jabłko",
    "melone": "melon",
    //"mora": "jeżyna",
    "pane": "chleb",
    "pasta": "makaron",
    "patata": "ziemniak",
    "peperone": "papryka",
    "pesca": "brzoskwinia",
    "pesce": "ryba",
    "pomodoro": "pomidor",
    "riso": "ryż",
    //"spinaci": "szpinak",
    "uova": "jajka",
    "verdura": "warzywa",
    //"zucca": "dynia"
};

var dictionary4 = {
    "accanto": "obok",
    "davanti": "przed",
    "destra": "prawo",
    "dietro": "za",
    "di fronte": "naprzeciw",
    "est": "wschód",
    "in": "w",
    "nord": "północ",
    "ovest": "zachód",
    "sopra": "na górze, nad",
    "sotto": "na dole, pod",
    "sud": "południe",
    "sinistra": "lewo"
};

var dictionary5 = {
    "arrivederci": "do widzenia",
    "buongiorno": "dzień dobry",
    "buonanotte": "dobranoc",
    "buonasera": "dobry wieczór",
    "che lavoro fai": "kim jesteś z zawodu",
    "come stai": "jak się masz",
    "come ti chiami": "jak masz na imię",
    "ciao": "cześć",
    "di dove sei": "skąd jesteś",
    "grazie": "dziękuję",
    "mi chiamo": "nazywam się",
    "mi piace": "podoba mi się",
    "non mi piace": "nie podoba mi się",
    "per favore": "proszę (prośba)",
    "piacere di conoscerti": "miło mi cię poznać",
    "prego": "proszę, nie ma za co (w odpowiedzi na grazie)",
    "quanti anni hai": "ile masz lat",
    "scusa": "przepraszam",
    "si": "tak",
    "sto bene": "czuję się dobrze",
    "no": "nie"
    //"forse": "może",
};

var dictionary6 = {
    "secondo": "sekunda",
    "minuto": "minuta",
    "ora": "godzina",
    "giorno": "dzień",
    "settimana": "tydzień",
    "mese": "miesiąc",
    "anno": "rok",
    "ieri": "wczoraj",
    "oggi": "dzisiaj",
    "domani": "jutro",
    "mattina": "rano",
    "pomeriggio": "popołudnie",
    "sera": "wieczór",
    "notte": "noc",
    "lunedì": "poniedziałek",
    "martedì": "wtorek",
    "mercoledì": "środa",
    "giovedì": "czwartek",
    "venerdì": "piątek",
    "sabato": "sobota",
    "domenica": "niedziela",
    "gennaio": "styczeń",
    "febbraio": "luty",
    "marzo": "marzec",
    "aprile": "kwiecień",
    "maggio": "maj",
    "giugno": "czerwiec",
    "luglio": "lipiec",
    "agosto": "sierpień",
    "settembre": "wrzesień",
    "ottobre": "październik",
    "novembre": "listopad",
    "dicembre": "grudzień"
};

var dictionary7 = {
    //potrzebne jeszcze kilka innaczej błedy
    "sole": "słońce",
    "pioggia": "deszcz",
    "neve": "śnieg",
    "nuvola": "chmura",
    "vento": "wiatr",
    "tempesta": "burza",
    "arcobaleno": "tęcza",
    "caldo": "ciepło",
    "freddo": "zimno"
};

var dictionary8 = {
    "abitare": "mieszkać",
    "aiutare": "pomagać",
    "amare": "kochać",
    "aprire": "otwierać",
    "arrivare": "przyjeżdżać",
    "ascoltare": "słuchać",
    "aspettare": "czekać",
    "ballare": "tańczyć",
    "cambiare": "zmieniać",
    "cantare": "śpiewać",
    "capire": "rozumieć",
    "cercare": "szukać",
    "chiamare": "dzwonić, wołać, nazywać",
    "chiedere": "pytać, prosić, żądać",
    "chiudere": "zamykać",
    "cominciare": "zaczynać",
    "comprare": "kupować",
    "conoscere": "znać",
    "correre": "biec",
    "costare": "kosztować",
    "creare": "tworzyć",
    "credere": "wierzyć, sądzić",
    "crescere": "rosnąć",
    "cucinare": "gotować",
    "decidere": "decydować",
    "dimenticare": "zapominać",
    "diventare": "stać się",
    "dividere": "dzielić",
    "dormire": "spać",
    "entrare": "wchodzić",
    "finire": "kończyć",
    "fornire": "dostarczać",
    "giocare": "grać, bawić się",
    "guardare": "oglądać, patrzeć",
    "guidare": "prowadzić, kierować",
    "invitare": "zapraszać",
    "lavare": "myć",
    "lavorare": "pracować",
    "leggere": "czytać",
    "mancare": "brakować",
    "mandare": "wysyłać",
    "mangiare": "jeść",
    "mettere": "kłaść, położyć",
    "offrire": "oferować, stawiać",
    "ordinare": "zamawiać",
    "pagare": "płacić",
    "parlare": "mówić",
    "partecipare": "uczestniczyć",
    "partire": "wyjeżdżać",
    "passare": "spędzać, przechodzić, mijać",
    "pensare": "myśleć",
    "perdere": "gubić, tracić",
    "portare": "nosić",
    "preferire": "woleć, preferować",
    "prendere": "brać, łapać (np. autobus)",
    "preparare": "przygotowywać",
    "presentare": "przedstawiać",
    "pulire": "sprzątać, czyścić",
    "restare": "zostać",
    "ricevere": "dostać",
    "rispondere": "odpowiedzieć",
    "scendere": "schodzić [ruch w dół]",
    "scrivere": "pisać",
    "sembrare": "wydawać się",
    "sentire": "słyszeć, czuć",
    "servire": "służyć",
    "soffrire": "cierpieć",
    "sostituire": "zastąpić",
    "spendere": "wydawać",
    "sperare": "mieć nadzieję",
    "spiegare": "wyjaśniać",
    "sposare": "poślubić",
    "studiare": "uczyć się",
    "telefonare": "dzwonić",
    "tornare": "wracać",
    "trovare": "znaleźć",
    "usare": "używać",
    "vedere": "widzieć",
    "vendere": "sprzedawać",
    "viaggiare": "podróżować",
    "vincere": "wygrywać",
    "visitare": "odwiedzać, zwiedzać",
    "vivere": "żyć"
};

var dictionary9 = {
    "andare": "iść, jechać",
    "avere": "mieć",
    "bere": "pić",
    "dare": "dawać",
    "dire": "mówić",
    "dovere": "musieć",
    "essere": "być",
    "fare": "robić",
    "piacere": "lubić, podobać się",
    "potere": "móc",
    "salire": "wchodzić [ruch w górę]",
    "sapere": "wiedzieć",
    "scegliere": "wybierać",
    "stare": "być, przebywać, czuć się",
    "uscire": "wychodzić",
    "venire": "przyjść, przyjechać",
    "volere": "chcieć"
};

var dictionary4555 = {
    "grande": "duży2",
    "stesso": "ten sam2",
    "bello": "piękny2",
    "nuovo": "nowy2",
    "certo": "pewny2",
    "vero": "prawdziwy2",
    "buono": "dobry2",
    "italiano": "włoski2",
    "vecchio": "stary",
    "ora": "teraz",
    "qui": "tutaj",
    "là": "tam",
    "sempre": "zawsze"
    // Dodaj więcej słów do słownika
};
