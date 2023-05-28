# Astro Is Neat

I am migrating my personal site to [Astro](https://astro.build/) , I find the following features interesting and useful.

## Painless Routing
Routing is just folders, I can easily spin up anything where I want and it just works.
I want this site to be able to host documentation and demo for the projects I do, so this is very convenient, combined with the following compatibility. 

## Minimal By Default
Because most of the pages on this state will be static, there is no need to have the bloat of a full reactive framework all the time.
Astro by default ships with the minimal clientside JS(known as hydration), which is ensures no scaling issues long term, as I have tight control over what is SSR vs clientside.

## Compatibility with existing Frameworks

Astro is a meta framework, it is compatible with many different UI frameworks at once\*, even all together.
The Demo at the bottom here is not practical, but it is fun.
Every single one of those components is running in their respective frameworks!

This article itself was written mostly in markdown, you can look at how all pieces got integrated together [here](https://github.com/iamr2003/site-v2/blob/master/src/pages/astro-is-neat.astro).

\*CSS in JSX(commonly used in React Styling Frameworks like MUI or Mantine) is not currently supported.

