##Getting Started or Whatever##

1. Clone the repo
2. run "npm install" to install all dev dependencies as specified in the package.json file
3. run "grunt watch"

##An Issue with the Mac##

After getting everything working on my Windows machine, I cloned the repo and attempted to run "grunt watch" on my Mac. An error occurred during the imagemin task: "Warning: Error: spawn ... ENOENT in file ... Use --force to continue." I tried a great number of potentially dangerous things to solve this issue. In the end, removing the node_modules directory and running "npm install" again ended up fixing everything.
