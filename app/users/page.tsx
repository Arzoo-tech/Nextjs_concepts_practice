import Image from 'next/image'
import React from 'react'

//using typescript 
interface User {
    id: number;
    name: string;
}
const UsersPage = async () => {

    //since this is a server side component,we don't have to use useEffect to make an api call
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1',
    {cache:"no-store"})
    const users: User[] = await res.json();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Users Page</h1>
            <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
        </main>
    )
}

//here,we will have the users rendered on the server a contrast to client side rendering 
//the browser initially gets a blank document and then it calls the backend to fetch the data and
// then it renders the content on browser 

//Fetching in server components has an extra benefit which is caching
//the idea of caching is to store data somewhere that is fast to access


export default UsersPage