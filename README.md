
# Panoramica

  

- ****Anno accademico****: 2019-2020

  

- ****Titolo del progetto****: Interfaccia multi-pattaforma (iOS e Android) per la gestione e la ricerca di informazioni relative ad artisti e gruppi musicali.

  

- ****Studente****: Lorenzo Andriani

  

- ****CFUs****: 6

  

Lo scopo di questo progetto è quello di creare un'appicazione multi-piattaforma (iOS e Android) in grado di fornire tutte le caratteristiche relative ai vari artisti. Nello specifico il progetto sarà suddiviso in cinque categorie:

  

- Home: dove sono visualizzate le uscite dei vari artisti. In questa sezione inoltre sono state aggiunte alcune playlist e podcast da consigliare all'utente, data la massiccia approvazione dell'idea nel sondaggio.

  

- Artisti: Una rubrica in cui l'utente può selezionare un determinato artista di cui sono elencate le varie caratteristiche tra cui, Storia, Prossime Uscite, Live, Album, Singoli e Link Social.

  

- Uscite: In questa sezione è presente una lista di nuovi singoli e album che usciranno in futuro.

  

- Articoli: Una serie di articoli estratti da più magazine online.

  

- Live: Una lista di live con verie caratteristiche tra cui: Artista, Luogo, Giorno, Prezzo Medio.

  

# Linguaggi e IDE

  

L'IDE su cui verrà sviluppato il progetto è Visual Studio, in particolare verrà usato Angular come framework e Ionic come SDK. Il progetto sarà scritto in più linguaggi, tra cui JavaScript, CSS, HTML5 e TypeScript.

  

  

# Risultati attesi

  

Come risultato finale ci si aspetta un'applicazione facile nel suo utilizzo e che allo stesso tempo fornisca in maniera intuitiva una sorta di "archivio" del mondo musicale attuale.

  

# Sommario

****Needfinding:****

  

Inizialmente è stata fatta una ricerca su un campione di 12 persone per capire le necessità e l'interesse su cui verte l'attezione di alcuni possibili fruitori finali. A questo scopo è stato creato un modulo Google [(link)](https://forms.gle/14nzKjwpztQkoJcHA) e sono stati raccolti dati e idee per il progetto.

****Progettazione e prototipazione:****

La fascia di persone a cui si rivolge l'applicazione è un pubblico di età che va da 13 ai 30 anni. Questa piattaforma ha lo scopo di aiutare l'utente ad avere un quadro generale immediato sulle nuove uscite musicali, con link diretti all'ascolto e alle informazioni dell'artista. 

Durante questa fase alcune scelte si sono evolute in altre tenendo conto del parere di alcune persone e della complessità di sviluppo. In particolare era stata scelta inizialmente al posto di un tab con i vari componenti un menu a comparsa sul lato sinistro dell'applicazione  (questa decisione è stata testata da cinque utenti che ne hanno riconosciuto un percorso troppo macchinoso per il raggiungimento delle informazioni). Questa scelta si è poi trasformata in un tab definitivo. 

Durante lo sviluppo è cambiato anche il modo in cui l'utente può ascoltare il brano che gli viene consigliato nella Home. infatti inizialmente i tre bottoni presenti in ogni card dovevano essere presenti all'interno di un popover a comparsa che però per motivi di praticità e sviluppo è stato accantonato, questo cambiamento è servito anche a differenziare graficamente le due sezioni "Home" e "Uscite" che inizialmente erano molto simili tra loro.

Per motivi di tempistiche e complessità non è stato inserito un filtro per la sezione live.

In questa cartella è presente un mockup del progetto [(link)](https://github.com/LorenzoAndriani/progettoHCI/tree/master/Mockup).

Per il propotipo le uniche informazioni simulate sono quelle relative alla parte delle "Uscite". Nelle altre sezioni dell'applicazione si è fatto riferimento ai principali brani e album in uscita nel nostro paese in questo periodo e di conseguenza anche di articoli e live.

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
