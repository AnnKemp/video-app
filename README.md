This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can see the preview of this project at: https://annkemp.github.io/video-app/  click on the menu-items to see the movies!

## Photogallery app in Ionic

The great thing about Ionic is that with one codebase, you can build for any platform using just HTML, CSS, and JavaScript. Follow along as we learn the fundamentals of Ionic app development by creating a realistic app step by step.

## What We'll Build
We'll create a Photo Gallery app that offers the ability to take photos with your device's camera, display them in a grid, and store them permanently on the device.

Highlights include:

One Angular-based codebase that runs on the web, iOS, and Android using Ionic Framework UI components.
Deployed as a native iOS and Android mobile app using Capacitor, Ionic's official native app runtime.
Photo Gallery functionality powered by the Capacitor Camera, Filesystem, and Storage APIs.


## Download required tools
Download and install these right away to ensure an optimal Ionic development experience:

Node.js for interacting with the Ionic ecosystem. Download the LTS version here.
A code editor for... writing code! We are fans of Visual Studio Code.
Command-line interface/terminal (CLI):
Windows users: for the best Ionic experience, we recommend the built-in command line (cmd) or the Powershell CLI, running in Administrator mode.
Mac/Linux users, virtually any terminal will work.

## Install Ionic tooling
Run the following in the command line terminal to install the Ionic CLI (ionic), native-run, used to run native binaries on devices and simulators/emulators, and cordova-res, used to generate native app icons and splash screens:

To open a terminal in Visual Studio Code, go to Terminal -> New Terminal. The code in terminal:

npm install -g @ionic/cli native-run cordova-res

The -g option means install globally. When packages are installed globally, EACCES permission errors can occur.

Consider setting up npm to operate globally without elevated permissions. 

When I installed it permission-errors did occur and you can't solve them with 'sudo', not at all!
So here's the solution I found:

EACCES permission errors can occur when packages are installed globally. If this is the case, npm may need to be set up to operate without elevated permissions.

Using sudo with npm is not recommended because it can lead to further complications.

The best way to avoid permission issues is to reinstall NodeJS and npm using a node version manager.

This guide will document nvm installation and usage. See the nvm docs for full documentation. See the npm docs for additional options and instructions for Windows.

Install nvm.

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
New terminals will now use nvm. To verify, open a new terminal and run the following. If something prints, the installation was successful.

command -v nvm
To download and install the latest LTS release of NodeJS, run:

nvm install --lts
Set the newly installed NodeJS as the default environment:

nvm alias default lts/*
New terminals will now use the nvm-controlled NodeJS. To verify:

node -v  # will print the version installed abovewhich npm  # will print a path somewhere within the ~/.nvm folder
Global packages will now be installed in the ~/.nvm directory, so permission errors should no longer occur as long as npm is used without sudo.


