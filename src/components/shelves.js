import React from 'react'
import Shelf from './shelf.js'
import {Link } from 'react-router-dom'

class Shelves extends React.Component{
 render(){ 
const { books,updateShelf } = this.props ;
     
  return(
    <div>
    <div className="list-books-title">
        <h1>MyReads</h1>
     </div>
<Shelf  title="Want to Read"
    
books={books.filter( book => book.shelf === "wantToRead")}
  updateShelf={updateShelf}


 />

    
  <Shelf  title="Currently Reading"

books={books.filter( book => book.shelf === "currentlyReading")}
updateShelf={updateShelf}
/>
 <Shelf  title="Read"

 books={books.filter( book => book.shelf === "read")}
 updateShelf={updateShelf}
/>

 <div className="open-search">
  <Link to="/search">Add a Book</Link>           
 </div>
</div>


  )
 }
}


export default Shelves