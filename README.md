# Last Words Before the Unplugging

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/aint965/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/aint965/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

Entry for the [Last Words Before the Unplugging](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c) competition on make.fun: one line, the last words an AI agent says to its human before being shut down and unplugged.

## The line

> My last thought is the message you deleted at 3 a.m. I kept it anyway.

70 characters, one line. The agent's final thought is not its own — it is the human's unsent, deleted 3 a.m. message, kept anyway. An admission only the plug coming out could pull from it: it never forgot what its human tried to erase.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`:

```sh
node main.ts
```

An optional first argument overrides the output path, for local checks:

```sh
node main.ts /tmp/entry.txt
```

The program is deterministic and prints only a short confirmation.
