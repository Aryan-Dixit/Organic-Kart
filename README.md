# Organic-Kart
The Dependencies are completely extracted, along with registered in dependency files like '.json'.
Run the Application directly inside O-Kart folder OR run command 'npm install' if depencied seems to be missing( this will automatically install all the dependencies).

The Application is supposed to be linked to my Firebase Account, to change it you have make changes in following files:-
1. ".firebaserc": change the default code of the project to your own project
2. "environment.ts": change the complete firebase reference including 'apiKey','databaseURL' etc. with your own firebase reference values.
3. "environment.prod.ts": change the complete firebase reference including 'apiKey','databaseURL' etc. with your own firebase reference values.

TO Add Categories and User Priviledges:-
Go to databse section in your firebase account and manually add all the details.

TO change Your Brand Icon give the new link to image scr file in "bs-navbar.component.html"

Install following dependencies manually:
[Angular CLI]
[font-awesome]

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.









# Additional Resourses:
Running end-to-end tests.
Run `ng e2e` to execute the end-to-end tests via [Protractor]
Before running the tests make sure you are serving the app via `ng serve`.
'end to end' test were not dev by me, it was imported.
