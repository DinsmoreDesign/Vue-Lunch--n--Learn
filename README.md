# Vue Lunch 'N' Learn - eStatements UI
In this Lunch 'n' Learn session, we will be building a working version of the eStatements application UI. You will be interacting with a REST API to request and update data via Axios.

Our first session will focus on beginner and intermediate concepts, utilizing existing UI components to build our Single Page Application using Vue Single File Components. We will **not** be writing any CSS and only basic HTML knowledge is needed. This tutorial will focus on modern JavaScript concepts and leveraging the Vue.js framework to build a real-world application from start to finish.

Our second session will focus on advanced Vue concepts, by implementing VueRouter, instead of manually showing/hiding components, and managing global state with Vuex. We will also utilize component lifecycle hooks to fetch data.

## Project prerequisites:
**For those of you joing us for these sessions,** if you wish to follow along in building the application on your own machine, please clone this repository to your computer using CMD or Powershell with the following command, once you've navigated to the folder you wish to save it to:

```
git clone https://bitbucket.phx.dsfcu.local:8443/scm/~dedinsmore/vue-lunch-n-learn.git
```

If you don't have Git installed yet, you can get it here:

https://git-scm.com/download/win

If, for some reason, your computer is not letting you clone the repo, try running:

```
git -c http.sslVerify=false clone https://bitbucket.phx.dsfcu.local:8443/scm/~dedinsmore/vue-lunch-n-learn.git
```

Or just download the master branch as a Zip file: https://bitbucket.phx.dsfcu.local:8443/rest/api/latest/projects/~DEDINSMORE/repos/vue-lunch-n-learn/archive?format=zip

Also make sure you have Node/NPM installed prior to our session, I will not be going over how to set it up:

https://nodejs.org/en/ - Download the latest LTS version

Once Node is installed, you'll need to run the following commands in CMD or Powershell if you haven't already. This allows us to bypass the network firewall and access the NPM repository to download the packages needed for our app:

```
npm set proxy http://internet:HowAboutMyLlama%23!2013@sp.desertschools.org:8080/
npm set https-proxy http://internet:HowAboutMyLlama%23!2013@sp.desertschools.org:8080/
```

To verify you’ve done it correctly, you can run npm get proxy and it should return the URL you’ve entered above.

>**Note:** A working example of the full application we'll be building in Session 1 can be found in the "working-example" branch of this repository, for your reference. I will update the repository for the advanced session before it starts, so those of you who aren't building the application with me, will have the complete set of code to reference later.

## Project setup:
**Install Dependencies**
```
# Navigate to the directory you've cloned the files to and run:

npm install
```

**Run the app in development mode:**
```
npm run dev
```

**Compile and minify code for production:**
```
npm run build
```

## Optional:
I will be using VSCode during the Lunch 'n' Learn. It has superior IntelliSense to Visual Studio for JavaScript and *much* better syntax highlighting. You can download it here:

https://code.visualstudio.com/

I'd suggest a few extensions, as well, to make development more enjoyable:

[Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

[Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

[Vetur - Vue.js IntelliSense](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
