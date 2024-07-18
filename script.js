//Inverser une chaîne : écrivez une fonction qui inverse une chaîne donnée.

function reverseString(str){
    console.log(str.split('').reverse('').join());

}
const string ="Hello gomycode";
reverseString(string);
//split() divise une chaine de caracteres en une liste ordonnee ,place ses sous chaines dans un tableau 
// reverse () permet d'inverser l'ordre  des elemente du tableau
//join() cree et renvoie une nouvelle chaine de caractere en concatenant tous les elements du tableau 

//Compter les caractères : créez une fonction qui compte le nombre de caractères dans une chaîne.

function compterCaracteres(chaine) {
    return chaine.length;
}
console.log(compterCaracteres("hello marie" ))

function mettreEnMajusculePremiereLettre(phrase) {
    return phrase
        .split(' ')
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(' ');
}
console.log( mettreEnMajusculePremiereLettre("je suis bien arrive"));
//map() permet de parcourir les elements selon leur ordre d'insertion
//charAt() renvoie une nouvelle chaine contenant le caractere a la position indiquee
//toUppercase() renvoie le contenu d'entree en majuscules
//slice() renvoie un objet de tableau contenant une copie superficielle d'une portion du tableau d'origine 

//Rechercher le maximum et le minimum : écrivez des fonctions pour trouver les valeurs maximales et minimales dans un tableau de nombres.

function trouverMaximal(tableau) {

    return (Math.max(...tableau)+" "+Math.min(...tableau))
}
console.log(trouverMaximal([1,2,3,4,5]));
//Somme d'un tableau : créez une fonction qui calcule la somme de tous les éléments d'un tableau.

function somme (tableau) {
    let sum = 0
    for ( let i=0 ; i<tableau.length ;i++ ){
        sum=sum+tableau[i];
    }
    return sum

}
console.log(somme([1,2,8,7,6,5]));

//Filtrer le tableau : implémentez une fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée.

function FiltrerTab(tab){
    let tab2 = [];
    for ( let i=0 ; i<tab.length ; i++){
        if ((tab[i]% 2)==0){ tab2.push(tab[i])

        }
    }
    return tab2;
}
console.log(FiltrerTab([98,3,36,14,34]));
//Factorielle : Écrivez une fonction pour calculer la factorielle d'un nombre donné.
function factorielle(n){
    let f = 1
    for ( let i=0 ; i<=n ; i++){
        f=f=i
    }
    return f;
}
console.log(factorielle(4));
//Vérification des nombres premiers : créez une fonction pour vérifier si un nombre est premier ou non.
function nombrePremier(nombre){
    let check = true 
    let m = nombre/2
    for( let i = 0 ; i <=m ; i++){
        if ( m% i ===0){
            check=false
        }
    }
    return check;
}
console.log(nombrePremier(7));
//Suite de Fibonacci : Implémenter une fonction pour générer la suite de Fibonacci jusqu'à un nombre donné de termes. (recherche sur le net)
function fibonacci(m){
    var fib = [];
    fib[0]=0
    fib[1]=1
    for( let i=2 ; i<=m ; i++){
        fib[i]=fib[i-2]+fib[i-1]
    }
    return fib;
}
console.log(fibonacci(5));
