# angular-ivy-w7guew

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-w7guew)

## App post-it
di Matteo Scannavini, progetto per l’esame di Sviluppo di servizi web a.s. 2020/2021 
Questa web app realizza un servizio per la scrittura e lettura di post-it. 
È composta da un component parent (app), tre component child (login, add-post-it e read-post-it) e un servizio (kvaa-s).
Il servizio kvaas-s contiene tre funzioni, tutte basate su fetch: 
    • Key: esegue una post a un link che genera una nuova chiave 
    • postData: esegue una post per salvare dei dati al link personale dell’utente (composto con la propria chiave)
    • getData: prende i dati salvati al link personale dell’utente
Nel component app sono definite:
    • la classe di oggetti Postit, che hanno proprietà title (il titolo), text (il testo) e pref (il contrassegno booleano che indica se il post-it è importante)
    • gli array my_data e prefs, che contengono, rispettivamente, la lista di post-it totale e quella di post-it filtrata sui preferiti
    • l’oggetto selected di classe Postit, che rappresenta il post-it selezionato dall’utente
    • la funzione getNewKey: è associata all’evento newKeyEvent generato dal component login; effettua la registrazione dell’utente, ovvero genera e gli assegna una nuova chiave (funzione Key del servizio)
    • la funzione login: associata all’evento loginEvent generato dal component login; permette a un utente già registrato di fare il login con la propria chiave e scaricare i post-it che aveva salvato (funzione getData del servizio)
    • la funzione addPostit: associata all’evento newPostitEvent generato dal component add-post-it; inserisce un nuovo post-it nella lista e salva la lista aggiornata di post-it  (funzione postData del servizio)
    • la funzione deletePostit: elimina il postit selezionato e salva la lista aggiornata di post-it (funzione postData del servizio)
    • la funzione showPostit: mostra il testo di un post-it selezionato (l’oggetto selected, definito nel parent e visualizzato nel template del child read-post-it) 
    • le funzioni showPref e showAll: servono per visualizzare, rispettivamente, solo i post-it contrassegnati come importanti, oppure l’intera lista di post-it 
Nel component login sono definiti:
    • le direttive @output LoginEvent e newKeyEvent per la comunicazione da child a parent
    • la funzione newLogin: genera un evento associato alla callback login e che trasporta la nuova chiave passata in input dall’utente
    • la funzione newKey: genera l’evento associato alla callback getNewKey
Nel component add-post-it sono definiti:
    • la direttiva @output newPostitEvent per la comunicazione da child a parent
    • la funzione newPostit: genera un evento che trasporta al parent il nuovo postit scritto in input dall’utente 
Nel component read-post-it sono definiti:
    • la direttiva @input che collega la proprietà selected del component parent con quella del component child
    • la funzione clean: svuota l’area dove sono visualizzati i testi dei post-it 


