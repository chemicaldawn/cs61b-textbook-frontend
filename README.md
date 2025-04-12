# The CS61B Textbook

Who goes there?

## Me! I want to modify the textbook content!
Thankfully, that's really easy! Just clone the repository down, make changes in the `/content` directory, commit them, and push them back up. GitHub Actions is set up in such a way that changes will automatically be deployed. The content is organized in `.mdx` files, which are like markdown with optional HTML inclusion. If you've ever worked with markdown, it should hopefully be a painless transition.

I tried to make this codebase as easy to work with as possible for course staff who wish to commit textbook content. Everything is handled automagically.

If you want to preview your changes, you can install **node.js** and run `npm run dev` in the terminal. Open the browser link it generates (probably `localhost:4321`) and take a look!

## Me! I want to modify the textbook itself! (The way it looks, functions, etc.)
If you're looking to work with the textbook's infrastructure, I fear it's much more difficult. This codebase is built on MANY technologies (namely TypeScript, Astro, Svelte, jQuery, and MDX), each with their own quirks. 

If you're coming at this codebase with **zero JavaScript/TypeScript knowledge, I'd urge you to turn around.** These languages are very quirky, and differentiating JS/TS running on the client versus server, understanding TypeScript's type system, working around Astro's many weird edge cases, and understanding reactivity in frontent frameworks like Svelte may be extremely daunting if you have little exposure to web development. I wish I could just build this site as a static HTML/CSS/JS site but such is the hell that is modern webdev.

Astro is the main JavaScript framework at play, and acts as a Static Site Generator (SSG). The JavaScript inside the code fences (`---`) at the top of the file is run on the server at build-time, and generates a completely static site! That's right, this textbook is powered by a simple HTTP server with no proprietary code running on the backend. That's what allows us to use GitHub Pages. Astro is my personal GOAT (closely followed by HTMX and jQuery, but thankfully the three fit together like bread, peanut butter, and jelly).

Svelte is a standard frontend framework, and is used to build some of the more client-logic-heavy parts of the site (such as the quiz-boxes and interactive demos).

jQuery is used to do inline HTML swaps (such as when you click on a new section in the table of contents in the left sidebar). Any time you see a dollar sign `$` in the code, jQuery is being invoked.

MDX is the markdown language that most of the site's content is rendered from. It's like markdown but more flexible.