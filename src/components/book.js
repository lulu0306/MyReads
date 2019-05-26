import React from 'react'
import Select from './select.js'

class Book extends React.Component{
  
 
 render(){ 
 const{book,updateShelf}= this.props
 const BackgroundImage = book.imageLinks ?
          book.imageLinks.thumbnail :
          ''

 
 
 return( 
<li key={book.id}>
   <div className="book">
    <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${BackgroundImage})` }}></div>
                            <Select book={book} updateShelf={updateShelf}/>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>





)
}
}

export default Book