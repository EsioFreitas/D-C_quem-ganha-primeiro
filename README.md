# Quem ganha primeiro?

**Número da Lista**: 4<br>
**Conteúdo da Disciplina**: Dividir para conquistar<br>

## Alunos

| Matrícula  | Aluno                        |
| ---------- | ---------------------------- |
| 17/0033066 | Esio Gustavo Pereira Freitas |
| 17/0020461 | Pedro Henrique Andrade Feo   |

## Sobre

Andrea, Carlos e Marcelo são muito amigos e passam todos os finais de semana juntos. Um dia, Andrea, usando o computador portátil, decidiu propror uma brincadeira o qual ela gerava um inteiro aleatório N e uma seqüência de inteiros, também aleatória, que é uma permutação de 1, 2, . . . ,N.
O jogo então começa, cada jogador faz um movimento, e a jogada passa para o outro jogador. Marcelo é sempre o primeiro a começar a jogar. Um movimento de um jogador consiste na escolha de um par de elementos consecutivos da seqüência que estejam fora de ordem e em inverter a ordem dos dois elementos. Por exemplo, dada a seqüência 1, 5, 3, 4, 2, o jogador pode inverter as posições de 5 e 3 ou de 4 e 2, mas não pode inverter as posições de 3 e 4, nem de 5 e 2. Continuando com o exemplo, se o jogador decide inverter as posições de 5 e 3 então a nova seqüência será 1, 3, 5, 4, 2. Mais cedo ou mais tarde, a seqüência ficará ordenada. Perde o jogador impossibilitado de fazer um movimento.
Sua missão, caso decida aceitá-la, é determinar quem ganha o jogo, dada a seqüência inicial.

## Screenshots

![](https://github.com/projeto-de-algoritmos/D-C_dupla1/blob/master/styles/img1.png)
![](https://github.com/projeto-de-algoritmos/D-C_dupla1/blob/master/styles/img2.png)

## Instalação

**Linguagem**: JavaScript<br>

Fizemos o deploy da aplicação para facilitar o uso dela [AQUI](https://quem-ganha.netlify.app/).
No entanto, caso queira rodá-la, é necessário que possua instalado:

- [Node](https://nodejs.org/en/) e
- [yarn](https://yarnpkg.com/) ou
- [npm](https://www.npmjs.com/)

```ssh
$ yarn install
$ yarn start

# pode ser usado também:

$ npm install
$ npm start
```

## Uso

1. Selecione "RESOLVER" para iniciar o algoritimos
2. Para fazer um novo percurso, selecione "RESET"

## Observação

O projeto foi inspirado em https://www.urionlinejudge.com.br/judge/pt/problems/view/1088
