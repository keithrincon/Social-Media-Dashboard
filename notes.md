# Functional Requirements and Notes

Light/Dark Mode toggle -- takes system pref by default, but can override with radio toggle

- detects the users display settings (light/dark)

- What HTML markup (accessible)

Use fieldset, legend, radio inputs

CSS Variables (custom properties)
-updating CSS Variable with JS
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme

Three option toggle: light/dark/system pref

- https://codepen.io/renddrew/pen/bRomab

Accessibilty

- Use correct heading tags
- Screenreader-only text for card titles/username
- Hidden text/ readiable from screen readers
  https://www.accessibility-developer-guide.com/examples/hiding-elements/visually/

step 2: make a repository in the empty folder at the beginning
that way you make commits

step 3: setup utlis folder:
-breakpoints, colors, fonts, functions

step 4: Global styles (same way step 3)

step 5: Gulp workflow

- set up Gulp and install NPM packages for workflow
- a. install Glup CLI
- b. npm init -y
- c. npm install @babel/core @babel/preset-env
  -used for autp prefixer, some CSS properties need to use browser prefixes like WebKit for browsers that dont support. ex: transform supoorted by modern browers but older need to use dash Webkit prefix
  So babel will work with auto prefixer to determine which properties get prefiexed automatically.
  So you dont have to type it out yourself!

- d browser-sync reloads website everytime you make a change!
- gulp terser used to minify JS files

- securities and vulnerabilities - 6!
- Solution: npm audit fix


