##Requirements##

* Node
* npm
* Grunt-cli

##Getting Started or Whatever##

1. Clone the repo
2. run "npm install" to install all dev dependencies as specified in the package.json file
3. run "grunt watch"

##Notes##

There are currently two main branches to this repo: Master and only-images. The former contains a few Grunt plugins, while the latter contains only grunt-contrib-imagemin.

##What to Expect##

Running "grunt watch" on the master branch will run the following Grunt plugins (where applicable):

* grunt-contrib-watch
* grunt-newer
* grunt-contrib-imagemin
* grunt-processhtml
* grunt-contrib-uglify
* grunt-contrib-cssmin

On the branch named only-images, running the above command will trigger only grunt-contrib-watch, grunt-newer, and grunt-contrib-imagemin.

##An Issue with the Mac##

After getting everything working on my Windows machine, I cloned the repo and attempted to run "grunt watch" on my Mac. An error occurred during the imagemin task: `"Warning: Error: spawn ... ENOENT in file ... Use --force to continue."` I tried a great number of potentially dangerous things to solve this issue. In the end, removing the node_modules directory and running "npm install" again ended up fixing everything.
