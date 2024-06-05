This is app folder and all the components inside the app folder are server side component and are rendered on the server

so in network tab we will be able to see that we are making a request to the "localhost" name and the search engine bots will be able to see the content when the browse our website in "preview" tab.

Server side rendering ---------------
We will have the users rendered on the server ,a contrast to client side rendering where the browser initially gets a blank document and then it calls the backend to fetch the data and then it renders the content on browser

Caching-----------
Fetching in server components has an extra benefit which is caching.The idea of caching is to store data somewhere that is fast to access.Next js comes with a built in data cache.Whenever we use the fetch function,next js comes with a built-in data cache which is built on the file system .So,the next time we hit the same url next js will serve the data from the file system i.e. cached data.

We can disable caching,if we have data that changes frequently:
Eg-
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1',
{cache:"no-store"})
We can also keep data fresh to a certain period of time.So,if we have to keep the data updated every 10 sec we can:
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1',
{next:{revalidate:10}})

Static rendering and dynamic rendering---------------
Dynamic rendering occurs  at request time whereas the idea of static rendering or rendering at build time is when the pages have static pages or static data ,we can have next js render them once when we built our application for production so next time those pages or components are needed ,next js is not going to re render them.

So ,when the application is built for production,next js will treat the "user" page as static page because by default whenever we use the fetch function,next js caches the data.Therefore,treating the data as static or unchanging data.

So there are 2 types of rendering :
1)Client-side
2)Server-side:
    This is further divided into -
    a)Static rendering
    b)Dynamic rendering

Global styles------------
body elements,all hyperlinks anything that is applicable to all the components.This is stored in global.css file

CSS Module-------------
A css file scoped to a component
