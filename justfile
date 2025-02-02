alias c := check
@check:
    deno check **/*.ts

alias b := build
@build: check
    mkdir -p dist/harmonies-planner
    bun build main.ts --outdir dist/harmonies-planner
    bun build sw.ts --outdir dist/harmonies-planner
    echo "\n// $(git rev-parse HEAD) $(uuidgen)" >> dist/harmonies-planner/sw.js # trigger reload
    deno run -A npm:@tailwindcss/cli -o dist/harmonies-planner/output.css
    cp public/hex.svg index.html manifest.json dist/harmonies-planner

alias s := serve
@serve: build
    #!/usr/bin/env bash
    cd dist
    python3 -m http.server 8080

alias f := fmt
@fmt:
    deno run -A npm:prettier -w **/*.ts
