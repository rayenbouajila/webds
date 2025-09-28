console.log("bonjour!")
var liste_tache=new Array();
var ajouter_btn=document.getElementById("ajouter");
var nom_tache=document.getElementById("tache");
var liste= document.getElementById("taches");
ajouter_btn.addEventListener("click",function(){
    if(nom_tache.value!=""){
        liste_tache.push(nom_tache.value);
        console.log(liste_tache);
        nom_tache.value="";
        console.log(liste_tache)
        ajouterTache()
    }  
    else{
        console.log("tache vide!");
    }
})
function ajouterTache(){
    liste.innerHTML="";
    for(var i=0;i<liste_tache.length;i++){
        liste.innerHTML+=`<li>${liste_tache[i]}</li> <button id="ajouter" onclick="supprimerTache(${i})">Supprimer</button> <button id="ajouter" onclick="terminerTache(${i})">Terminer</button>`;
    }   
}
function supprimerTache(i){
    liste_tache.splice(i,1);
    ajouterTache();
}
function terminerTache(i){
    var tacheaterminer=liste.getElementsByTagName("li")[i];
    console.log(tacheaterminer);
    tacheaterminer.style.textDecoration="line-through";
}   