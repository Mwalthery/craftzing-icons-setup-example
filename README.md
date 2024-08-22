# icons setup example

This is an example setup copy pasted from the [itsme® public website](https://www.itsme-id.com/) for inspiration purposes.

This setup uses [SVGO](https://github.com/svg/svgo) and converts everything to two things:
- SVG sprite file that only exists of small UI icons which are used in most of the UI in the website;
- SVG DuoColor icons (read: astethic illustrative icons) which are loaded separatly;

All of these icons are loaded onto the pages with [SVG `use` trick](https://css-tricks.com/svg-use-with-external-reference-take-2/).

We attached 2 components in this repo of which you can see how it actually works as a React component.

This technique has a lot of benefits:
- 🏎️ It's a great performance bump, adding all icons inline in React is frowned upon as it will be part of the virtual dom.
- 💽 Caching purposes, if you load it once on the client you can cache it forever!
- 💅🏻 Modifiable and flexibility, by using the `use` trick you can still change all icon colors.

Read more into performance impact for React here:
https://kurtextrem.de/posts/svg-in-js
