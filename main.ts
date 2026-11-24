// One-Line Office Joke — make.fun entry
// Writes a single original office joke (<= 200 chars) to /output/entry.txt.
// Deterministic: the same fixed line is written on every run.
//
// The joke: office-fridge lunch theft is a universal office grievance, and
// "per my last email" is the most passive-aggressive phrase in corporate
// life. The turn is that the phrase itself — not a lock, not a note — is
// what finally protects the lunch: the office's own weaponised politeness
// becomes a deterrent. Specific detail, one sentence, no meetings/coffee
// cliche, and it lands on first read.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, one sentence, setup + punchline.
const JOKE =
  "Someone keeps stealing my lunch, so I labelled it 'per my last email' — suddenly nobody in the office wants it.";

// Gate limits from the competition rules: /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, a single line, not only whitespace.
const MAX_CHARS = 200;

function validate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `Joke must be 1-${MAX_CHARS} characters, got ${text.length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Joke must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Joke must be a single line.");
  }
}

validate(JOKE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
