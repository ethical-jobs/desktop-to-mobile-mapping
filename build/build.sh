#!/bin/bash

set -e

# build an image capable of transpiling python to js
docker build . -t transcrypt

# transpile
docker run -v $PWD:/working -w /working/res --rm transcrypt transcrypt --nomin res

# edit js file to strip out heavy python polyfills
cp res/__target__/res.js res/res.polyfills-stripped.js
docker run --rm -i -v $PWD:/working -w /working hairyhenderson/sed -i '/^import/ d' res/res.polyfills-stripped.js

# edit js to make it a valid npm module
docker run --rm -i -v $PWD:/working -w /working hairyhenderson/sed -i 's/return dict/export var desktop_to_mobile_mapping = dict/g' res/res.polyfills-stripped.js
docker run --rm -i -v $PWD:/working -w /working hairyhenderson/sed -i 's/export var/var/g' res/res.polyfills-stripped.js

# create dist file
echo "" > ../index.js

# build dist file
cat prefix >> ../index.js
cat res/res.polyfills-stripped.js >> ../index.js
cat suffix >> ../index.js
