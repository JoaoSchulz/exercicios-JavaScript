var Nota1 = Number.parseFloat(window.prompt('Qual é a primeira nota do aluno ?'));
var Nota2 = Number.parseFloat(window.prompt('Qual é a segunda nota do aluno ?'));
var Nota3 = Number.parseFloat(window.prompt('Qual é a terceira nota do aluno ?'));

var Media = ((Nota1 * 2) + (Nota2 * 3) + (Nota3 * 5)) /(10);

document.write(`A Media do aluno é ${Media}`);
