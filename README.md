global-village

1. Install Node.js

2. Install Ionic globally

$ npm install -g ionic

3. Create project by Using  the command below

$ ionic start conduit blank --type=react

4. Install react dependencies

$ cd conduit

$ npm install @ionic/react react-router react-router-dom @types/react-router @types/react-router-dom

Related libraries:

$ npm i showdown @types/showdown 

$ npm install --save react-mde

5. Enable Capacitor in this project to run this project in android and ios also

$ ionic integrations enable capacitor

6. Create a build folder OR generate a build using:

$ npm run build

7. (Optional) Add a platform to this project.

$ npx capacitor add android [for android]

$ npx capacitor add ios [for ios]

or

$ ionic cap add android

$ ionic cap add ios 

8. To run as a web app. This command will run the project, the url will be http://localhost:8100

$ ionic serve
  
9. [For other platform build] Every time you perform a build (e.g. ionic build) that updates your web directory (default: build), you'll need to copy those 
changes into your native projects:

$ ionic cap copy

10. [Any change from android] After making updates to the native portion of the code (such as adding a new plugin), use the sync command:

$ ionic cap sync

11. To open this project in android studio:

First, run the Capacitor open command, which opens the native Android project in Android Studio:

$ ionic cap open android

Including redux to this project:
12. Install Redux:

$ npm install redux

$ npm install @types/react-redux
