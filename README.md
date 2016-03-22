##Requirements##

* Node
* npm
* Grunt-cli

##Getting Started or Whatever##

1. Clone the repo
2. run "npm install" to install all dev dependencies as specified in the package.json file
3. run "grunt watch"

##Notes##

There are currently two main branches to this repo: **Master** and **only-images**. The former contains a few Grunt plugins, while the latter contains only grunt-contrib-imagemin.

##Project Organization and What to Expect##

This example relies on a distinction between those files associated with development (src) and those that will be distributed (dist). The developer makes all necessary changes to the code in the src/ directory, while Grunt generates modified code and places it in dist/. I will say more about these specific modifications later...

Running "grunt watch" on the **Master** branch will run the following Grunt plugins (where applicable):

* grunt-contrib-watch
* grunt-newer
* grunt-contrib-imagemin
* grunt-processhtml
* grunt-contrib-uglify
* grunt-contrib-cssmin

On the branch named **only-images**, running the above command will trigger only grunt-contrib-watch, grunt-newer, and grunt-contrib-imagemin.

This task will generate a "dist" directory containing a processed HTML file that reflects the new CSS and JS (now minified and concatenated), and images that have been minified. Thanks to grunt-newer, this image minification process will only be carried out when the src/ directory contains images not contained in dist/.

##An Issue with the Mac##

After getting everything working on my Windows machine, I cloned the repo and attempted to run "grunt watch" on my Mac. An error occurred during the imagemin task: `"Warning: Error: spawn ... ENOENT in file ... Use --force to continue."` I tried a great number of potentially dangerous things to solve this issue. In the end, removing the node_modules directory and running "npm install" again ended up fixing everything. This, by the way, does not appear to break the Grunt tasks if the changes are committed and pushed after switching to operating system b, and then pulling the code updates back to operating system a; the round-trip from Windows-Mac-Windows is working just fine for me.

##Future Tools or Features to Include##

* grunt-uncss: getting this to work with other plugins can be tricky...do more research on the WordPress workaround
* add preserveComments key to specify desired action with respect to how the uglify task handles comments, research variable mangling.
* grunt-contrib-sass. Is Compass a better idea?
* It would be great to have a terminal emulator that supports multiple tabs

##To Use or Not to Use##

It would be extremely beneficial for our agency to experiment with Grunt, given its popularity. In fact, a web developer friend claims that his agency was unwilling to hire someone lacking experience with build tools (like Grunt), Sass (or other CSS pre-processors), or a grid system (like Bootstrap). Dismissing the tool as a whole would be fairly silly. However, after some fiddling we might find that certain plugins cause certain projects to become too convoluted. The ultimate goal, I think, should be to save time and to obtain reliable results; if a certain plugin fails to do these things, or if reliably imparts confusion onto the process, that plugin should be discarded. Blah blah blah.
