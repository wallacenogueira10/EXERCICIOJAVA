const ageText = prompt('type your age');
const age = Number(ageText);
const ageString = String(age); // caso queira converter um texto em número
const ageString1 = age + ''; // mais comum

if (age>18){
    document.write('Então você é adulto')
}   

else if (age>12){
    document. write('Então você é adolescente');
} else {
    document.write('Então você é criança');
}       

document.write('<br>')

        switch(age){
                case 16:
                document.whrite('Já pode votar');
                break;

                case 18:
                document.whrite('Já pode beber e dirigir, não ao mesmo tempo');
                break;

                case 65:
                document.whrite('Já pode pegar ônibus de graça');
                break;

                default: // significado: caso contrário
                document.write('Se lascou')
                break;
}