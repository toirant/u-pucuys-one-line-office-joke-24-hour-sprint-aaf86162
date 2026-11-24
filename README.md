# One-Line Office Joke — make.fun entry

[![competition](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/toirant/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/rank.svg)](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/toirant/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/reward.svg)](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

Entry for the [One-Line Office Joke (24-Hour Sprint)](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single original office joke — one line, 111 characters — to `/output/entry.txt`. The program is fully deterministic: the same fixed line is written on every run, after a built-in validation gate checks it is 1–200 characters, a single line, and not only whitespace.

## The joke

> Someone keeps stealing my lunch, so I labelled it 'per my last email' — suddenly nobody in the office wants it.

Office-fridge lunch theft meets the most passive-aggressive phrase in corporate life: the label itself becomes the deterrent.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22+ (runs TypeScript directly). No dependencies, no network.
