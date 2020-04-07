
# Panoramica

  

- ****Anno accademico****: 2019-2020

  

- ****Titolo del progetto****: Interfaccia multi-pattaforma (iOS e Android) per la gestione e la ricerca di informazioni relative ad artisti e gruppi musicali.

  

- ****Studente****: Lorenzo Andriani

  

- ****CFUs****: 6

Lo scopo di questo progetto è quello di creare un'applicazione multi-piattaforma (iOS e Android) in grado di fornire tutte le caratteristiche relative ai vari artisti. Nello specifico il progetto sarà suddiviso in cinque categorie:

*	Home: dove sono visualizzate le uscite dei vari artisti. In questa sezione inoltre sono state aggiunte alcune playlist, web radio e podcast da consigliare all'utente, data la massiccia approvazione dell'idea nel sondaggio.

*	Artisti: Una rubrica in cui l'utente può selezionare un determinato artista di cui sono elencate le varie caratteristiche tra cui, Storia, Live, Album, Singoli e Link Social.

*	Uscite: In questa sezione è presente una lista di nuovi singoli e album che usciranno in futuro.

*	Articoli: Una serie di articoli estratti da più magazine online.

*	Live: Una lista di live con varie caratteristiche tra cui: Artista, Luogo, Giorno, Prezzo Medio.


# Linguaggi e IDE

  
L'IDE su cui verrà sviluppato il progetto è Visual Studio, in particolare verrà usato Angular e Ionic come framework. Il progetto sarà scritto in più linguaggi, tra cui JavaScript, CSS3, HTML5 e TypeScript.

  

  

# Risultati attesi

  

Come risultato finale ci si aspetta un'applicazione facile nel suo utilizzo e che allo stesso tempo fornisca in maniera intuitiva una sorta di "archivio" del mondo musicale attuale. Questa dovrà consentire una navigazione tra le uscite più importanti dell’ultimo periodo, rimandando alle informazioni dell’artista e ai vari link di ascolto.

  

# Sviluppo

****Needfinding:****

  

Inizialmente è stata fatta una ricerca su un campione di 12 persone per capire le necessità e l'interesse su cui verte l'attenzione di alcuni possibili fruitori finali. A questo scopo è stato creato un modulo e sono stati raccolti dati e idee per il progetto. Sulla base di questi dati sono stati scelti i punti fondamentali che l’applicazione doveva possedere.

****Progettazione e prototipazione:****

La fascia di persone a cui si rivolge l'applicazione è un pubblico di età che va dai 13 ai 30 anni. Questa piattaforma ha lo scopo di aiutare l'utente ad avere un quadro generale immediato sulle nuove uscite musicali, con link diretti all'ascolto e alle informazioni dell'artista.

Durante questa fase alcune scelte si sono evolute in altre tenendo conto del parere di alcune persone e della complessità di sviluppo. In particolare era stata scelta inizialmente al posto di un tab con i vari componenti un menu a comparsa sul lato sinistro dell'applicazione. Questa decisione è stata testata da alcuni utenti che ne hanno riconosciuto un percorso troppo macchinoso per il raggiungimento delle informazioni. Questa scelta si è poi trasformata in un tab definitivo.

Durante lo sviluppo è cambiato anche il modo in cui l'utente può ascoltare il brano che gli viene consigliato nella Home. infatti inizialmente i tre bottoni presenti in ogni card dovevano essere presenti all'interno di un popover a comparsa che però per motivi di praticità e sviluppo è stato accantonato. Questo cambiamento è servito anche a differenziare graficamente le due sezioni "Home" e "Uscite" che inizialmente erano molto simili tra loro.

Durante lo sviluppo della sezione Articoli la maggior parte dei titolo venivano visualizzati solo per metà, date le proporzioni dello schermo, per questo dopo 2 secondi il testo scorre per poi tornare a capo. 
Per dare più importanza alla Home, essendo la sezione principale dell’applicazione, questa è l’unica ad avere un’icona colorata internamente.
Successivamente è stato sviluppato un mockup del progetto che contenesse gli elementi chiave e i vari collegamenti che portavano alle pagine in modo da avere un quadro più dettagliato del progetto.

Per il propotipo le uniche informazioni simulate sono quelle relative alla parte delle "Uscite". Nelle altre sezioni dell'applicazione si è fatto riferimento ai principali brani e album in uscita nel nostro paese in questo periodo e di conseguenza anche di Articoli e Live.

****Usability testing:****

Questa fase di test verrà svolta concentrandosi su un campione di 5-10 persone a cui verrà chiesto di navigare liberamente nell’applicazione per poi, in un secondo momento, svolgere determinate operazioni, rispondendo alle domande riportate nel modulo.

Lo scenario proposto è il seguente:

*	Ascoltare uno degli ultimi brani usciti in questo periodo per poi tornare all'applicazione.
*	Verificare se il tuo artista preferito verrà nella tua città a fare un concerto e simularne l'acquisto del biglietto.
*	Si vuole aggiornare la pagina per verificare se ci sono nuove notizie.
*	Cercare e leggere alcuni articoli usciti di recente.
*	Seguire un artista che ti piace su Instagram.

A cui verrà chiesta una valutazione dove 1 rappresenta in totale disaccordo e 7 in pieno accordo. 

Alcuni di questi utenti sono stati registrati durante il test per vedere e analizzare il comportamento di questi nel mentre familiarizzano con l’interfaccia e svolgono i vari compiti.
Da questa fase è emerso che l’utente ha avuto difficoltà nel distinguere a primo impatto la differenza tra la sezione Home e Uscite, in particolare quest’ultima non avendo per il momento alcuna azione associata ed essendo un insieme di Card è stata interpretata come una sezione cliccabile, invece che di sola lettura. 
È emerso anche che per alcuni utenti la sezione dei link social nella scheda di ogni artista dovrebbe avere i loghi al posto del testo, mantenendo il colore e spostando questa sezione subito dopo la storia dell’artista. Un'altra eventuale soluzione potrebbe essere inserire una lista puntata iniziale per definire le sezioni della scheda.


# Considerazioni

A maggiore integrazione nell'applicazione potrà essere aggiunto un sistema di notifica quando viene aggiornata la sezione "Uscite". 

Inoltre la parte relativa ai "Live" potrà contenere un menu a tendina da cui poter filtrare la data del concerto, il luogo e l'artista.
  

# Documenti del progetto

Qui sono presenti le statistiche ottenute e gli eventuali commenti da parte degli utenti [(link)](https://github.com/LorenzoAndriani/progettoHCI/tree/master/Statistiche). L'applicazione è stata sviluppata concentrandosi anche e sopratutto sul responso ottenuto.

  

# Esecuzione

  

Per eseguire il progetto è necessario:

1) Recarsi all'interno della cartella da terminale.

2) Sempre da terminale eseguire il comando `ionic serve` oppure `ionic serve -l` se si vuole visualizzare l'applicazione sui due ambienti iOS e Android.

3) Il alternativa si può eseguire l'applicazione anche su Cordova attraverso il comando `ionic cordova emulate ios` (per il momento solo in versione iOS).
