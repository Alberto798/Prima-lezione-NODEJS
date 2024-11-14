const p: string = "pippo"
console.log(p)
console.log(p)
console.log(p)

//il commit serve per salvare le modifiche, nel caso ci siano, nel file.git/index


//per scaricare un file di un progetto su github bisogna prima di eseguire il comando: git clone https://github.com/nome_progetto/nome_progetto.git 
// dopodichè, navigare nella cartella del progetto con il comando: cd nome_progetto
// dopodichè, fare npm install per installare le dipendenze del progetto con il comando: npm install

//minuto 45 seconda parte prima lezione (come inviare lo stop and code)

let frutta = [
    "mela",
    "banana",
    "pera"
]

//iterazione usando il ciclo for
for (let i = 0; i < frutta.length; i++) {
    const fruttaCorrente = frutta[i]
    console.log(fruttaCorrente)

}

//iterazione usando il ciclo for...of
for (const fruttaCorrente of frutta) {
    console.log(fruttaCorrente)
}