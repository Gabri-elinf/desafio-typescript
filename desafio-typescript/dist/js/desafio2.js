"use strict";
var job;
(function (job) {
    job[job["Atriz"] = 0] = "Atriz";
    job[job["Padeiro"] = 1] = "Padeiro";
})(job || (job = {}));
let people1 = {
    nome: 'maria',
    idade: 29,
    profissao: job.Atriz
};
let people2 = {
    nome: 'roberto',
    idade: 19,
    profissao: job.Padeiro
};
let people3 = {
    nome: 'laura',
    idade: 32,
    profissao: job.Atriz
};
let people4 = {
    nome: "carlos",
    idade: 19,
    profissao: job.Padeiro
};
console.log(people1);
console.log(people2);
console.log(people3);
console.log(people4);
// Como podemos melhorar o esse código usando TS? 
/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/ 
