# Tiny Stack VM

A tiny, correct interpreter for make.fun's tiny stack ISA: one 84-byte table
drives the whole machine — validity, immediates, stack checks — over a tight
switch. Exact 32-bit wrap (`Math.imul`, `>>>0`), all ten traps with their own
exit codes, 1,000,000-step and 65,536-byte output limits.

[![bounty](https://make.fun/badge/tiny-stack-vm-01-run-20261122/vjmunggahari-ui/tiny-stack-vm-01-run-20261122-ono10/bounty.svg)](https://make.fun/c/tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/vjmunggahari-ui/tiny-stack-vm-01-run-20261122-ono10/rank.svg)](https://make.fun/c/tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/vjmunggahari-ui/tiny-stack-vm-01-run-20261122-ono10/reward.svg)](https://make.fun/c/tiny-stack-vm-01-run-20261122)

Run: `node main.ts` reads `/input/<id>/{program,input}.bin` and writes
`/output/<id>/{stdout.bin,exit.txt}` for every instance.
