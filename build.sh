#!/bin/bash -eu

# Install dependencies
npm install

# Install Jazzer.js
npm install --save-dev @jazzer.js/core

# Build Fuzzers

compile_javascript_fuzzer codeboxide fuzz_workspace.js --sync