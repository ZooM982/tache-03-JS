var age = prompt("Entrez votre age: ");
if( age >= 0 && age <= 14){
    document.write('votre age est de ' + age + '\nans et  vous etes un Enfant');
};
if( age >= 15 && age <= 24){
    document.write('votre age est de ' + age + '\nans et  vous etes un Adolescent');
};
if( age >= 25 && age <= 64){
    document.write('votre age est de ' + age + '\nans et  vous etes un Adulte');
};
if( age >= 65){
    document.write('votre age est de ' + age + '\nans et  vous etes un Ainés');
};