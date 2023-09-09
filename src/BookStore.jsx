
// akhane Book component import kara hoese and map function use kare Book component k use kara hoese

import Book from "./Book"
export default function BookStore ({books}){

return(

    <div>
        <h3>Books: {books.length}</h3>
        {
            books.map(book => <Book book ={book}></Book>)
        }

    </div>
)

}