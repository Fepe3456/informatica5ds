/** ---------- HOME PAGE ---------- */
const btn_contatore = document.getElementById("btn-contatore");
const btn_spesa = document.getElementById("btn-spesa");
const btn_ristorante = document.getElementById("btn-ristorante");

let attivo_contatore = false;
let attivo_spesa = false;
let attivo_ristorante = false;

const div_contatore = document.getElementById("div-contatore"); 
const div_spesa = document.getElementById("div-spesa"); 
const div_ristorante = document.getElementById("div-ristorante"); 

btn_contatore.addEventListener("click", function(event){
    attivo_contatore = !attivo_contatore; 
    if( attivo_contatore ){
        div_contatore.className = "div_attivo";
    }
    else{
        div_contatore.className = "div_nascosto"; 
    }
});

btn_spesa.addEventListener("click", function(event){
    attivo_spesa = !attivo_spesa; 
    if( attivo_spesa ){
        div_spesa.className = "div_attivo";
    }
    else{
        div_spesa.className = "div_nascosto"; 
    }
});

btn_ristorante.addEventListener("click", function(event){
    attivo_ristorante = !attivo_ristorante; 
    if( attivo_ristorante ){
        div_ristorante.className = "div_attivo";
    }
    else{
        div_ristorante.className = "div_nascosto"; 
    }
});


/** ---------- CONTATORE DIV ---------- */
const input_box_cont = document.getElementById("input-cont"); 
const contatore_span = document.getElementById("contatore-span"); 

input_box_cont.addEventListener("input", function(){
    const caratteri_rimasti = ( 25 - input_box_cont.value.length );
    contatore_span.textContent = caratteri_rimasti; 

    if (caratteri_rimasti < 0) {
        input_box_cont.style.color = "red";
        input_box_cont.style.borderColor = "red";
    } else {
        input_box_cont.style.color = "black";
        input_box_cont.style.borderColor = "";
    }
});


/** ---------- RISTORANTE DIV ---------- */
const nome = document.getElementById("nome"); 
const cognome = document.getElementById("cognome"); 
const cell = document.getElementById("cell"); 
const npersone = document.getElementById("npersone"); 
const data = document.getElementById("data"); 
const orario = document.getElementById("orario"); 
const noteagg = document.getElementById("noteagg"); 

const form_ristorante = document.getElementById("form-ristorante");
const btn_prenota = document.getElementById("btn-prenota"); 

form_ristorante.addEventListener("submit", function(event){
    event.preventDefault(); 
    let errore = false; 

    if( nome.value === "" ){
        alert("Inserire il nome"); 
        errore = true; 
    }

    if( cognome.value === "" ){
        alert("Inserire il cognome"); 
        errore = true; 
    }

    if( cell.value === ""){
        alert("Inserire il numero di cellulare"); 
        errore = true; 
    }
    if( isNaN(cell.value) ){
        alert("Inserire solo numeri"); 
        errore = true; 
    }
    if( cell.value.length != 10){
        alert("Inserire un numero di cellulare valido"); 
        errore = true; 
    }

    if( npersone.value === ""){
        alert("Inserire il numero di persone"); 
        errore = true; 
    }

    if( data.value === ""){
        alert("Inserire la data"); 
        errore = true; 
    }
    const oggi = new Date();
    oggi.setHours(0); 
    const data_inserita = new Date(data.value);
    if( data_inserita < oggi ){
        alert("Non puoi selezionare una data passata!"); 
        errore = true; 
    }

    if( orario.value === ""){
        alert("Inserire l'orario'"); 
        errore = true; 
    }
    if( orario.value < "12:00" || orario.value > "23:00" ){
        alert("Devi selezionare un orario tra 12:00 - 23:00"); 
        errore = true; 
    }

    if( !errore ){
        alert("Prenotazione effetuata"); 
    }
});