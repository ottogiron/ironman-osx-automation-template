#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

osascript -l JavaScript $DIR/main.js "$@"
