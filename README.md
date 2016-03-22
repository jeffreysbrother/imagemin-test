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

##Future Tools or Features to Include##

* grunt-uncss: getting this to work with other plugins can be tricky...do more research on the WordPress workaround
* add preserveComments key to specify desired action with respect to how the uglify task handles comments, research variable mangling.
* grunt-contrib-sass. Is Compass a better idea?
* It would be great to have a terminal emulator that supports multiple tabs

##Points to Consider##

It would be extremely beneficial to experiment with Grunt because it's so popular. Dismissing the tool as a whole would be utterly silly. However, after some fiddling we might find that certain plugins cause certain projects to become too convoluted. The ultimate goal, I think, should be to save time so if a certain plugin fails to do this, or if reliably imparts confusion onto the developers, that plugin should be abandoned. Blah blah blah.
