# chai-aur-react

# React JS Roadmap

## Why to learn React?
- hype, job, trend, build UI
- makes easy to manage & build complex frontend

## When should I learn React?
- After mastering JS
- most project don't need react in initial phase

## Why react was created?
- Phantom/Ghost message problem (Facebook -> No consistency in UI)

- state -> JS & UI -> DOM  (problem in syncing between the state and UI)
- khan academy -> unsplash

## Don't learn React if:
- you don't know how JS works or DOM works

## React is a library?
- Framework VS Library
- Framework -> Rules are followed strictly
- Library -> more freedom/ no predefined rule to follow

## Topics to learn
- Core of React (state or UI manipulation, JSX)
- component reusability
- Reusing of component (props)
- How to propogate change (hooks)

## Additional Addon to React
- Router (React don't have Router)
- state management (Read don't have state management)
    - Redux, Redux toolkit, zustand, context API
- class based component
    - legacy code
- BAAS (Backend as a service) Apps
    - social media clone, e-commerce app...

## After React
- React is not a complete solution in most cases
    - no SEO, browser Render of JS, no routing 
- Framework
    - Next JS, Gatsby, Remix


# Key points to Remember
- always open first "package.json"
- if you are making a component and HTML return ho rha hai -> use ".jsx" extension
- and if only javascript ka code hai koi HTML return nhi ho rha hai -> use ".js" extension
- always use capital letter function


- ek script(main.jsx/index.js) inject karani hai "index.html" mai
- script run ho rhi hai using
    - react & react-dom
- inke andar se hi method mil rhe hai
- jaise browser ek DOM banata hai usi tarah se react ek parallel DOM (VIRTUAL DOM) bana ke rakhta hai under
    - create-react-app -> index.js
    - vite -> src/main.jsx
- and then us DOM ko render karta hai 
- ek element pe jo present hota hai index.html mai
- to update the main page(index.html)


- because we have only one page that is "index.html" -> 'Single Page Application'

## Virtual DOM
- JS ek apna poora track rakhta hai
- ek virtual DOM tree banata hai
- aur usmai cheezon ko update karta hai

## React Fibre
- React's core algorithm 
- used to update the virtual DOM tree
- key Features of this algo
    - ability to pause, abort, or reuse work as new updates come in 
    - the ability to assign priority to different types of updates
    - new concurrency primitives 

## props
- every component function has access of props(object)
- by default it is empty
- jo bhi value aap component mai daal do ge vo object mai insert ho jayegi.

 
