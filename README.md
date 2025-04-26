# PROTOPIE VENMA

This project was generated using [Angular CLI](https://github.com/angular/angular-cli).
The name is related to the task from PROTOPIE ergo PROTOPIE in the name and VENMA is an abbreviation for VENding MAchine.

## Versions

Angular: 19.2.9
node: 23.7.0 (used by me, so I set it as minimum requirement as it works on this version)
npm: 11.1.0

Other versions like TypeScript etc. can be found in the package.json

## Running the application

!IMPORTANT: make sure to have a running internet connection, as it downloads a google font.

I didn't bother to create some kind of container image or something as this application has nothing
complex for it to be worth to demonstrate it in a docker or kubernetes environment.

Best is to just globally install the Angular CLI

```bash
npm install -g @angular/cli
```

Clone the project (or download the .zip)

```bash
git clone <url>
```

Then go into the folder and run

```bash
npm i
```

and afterwards run it locally using

```bash
npm start (= ng serve)
```


## Development

As I am used to developing Angular and know its perks, I decided to go ahead and use Angular for the UI creation.
It was not required much, but I wanted to show a decent UI, so I did add a lot of visuals and not just a console logging. I did not concentrate on any smaller screen support, so on small devices/screens it might not be properly usable (supported from 740px x 760px).

I did use ChatGPT to create the four images and it helped me create this flickering LED like title as well as the select styling. The colors where chosen by me based on the website of ProtoPie. They are not exactly the color codes (at least I never checked the exact hexcodes), as this little piece of software was not done by ProtoPie but I tried to use the colors as it is a task requested by ProtoPie.

The thing which took the longest is probably the image creation (using free version of ChatGPT) as it sometime is not smart enough to understand what a transparent background means...

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

