import React from 'react'
import Book from './book.js'


class Shelf  extends React.Component{

 render(){ 
   const  {books} = this.props
	
  return(
  				<div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
					<div className="bookshelf-books">
                    <ol className="books-grid"> 
					{ books.map((book) => (                      
					<Book
                      key={book.id}
                      books={books}
						book={book}
						updateShelf={this.props.updateShelf}
                      />
                      	))}
                    </ol>
					</div>
                </div>
  )
 }
}




export default Shelf