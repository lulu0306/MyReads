import React from 'react'
import {Link}  from 'react-router-dom'
import * as BooksAPI from '../BooksAPI.js'
import Book from './book.js'
class Search extends React.Component{
  
  state={
    ResultSearch: [],
    query: "",
	hasError : ''
  }


updateQueryChange = (query) =>{

this.setState({query});
this.updateResultSearch(query)

}



updateResultSearch = query => {
 const { books } = this.props;
    if (query) {
      BooksAPI.search(query).then(ResultSearch => {
        if (ResultSearch.error) {
		this.setState({
  		hasError: 'there was not match',
  		ResultSearch: []
		});
        } else {
          ResultSearch.map(book => {
            book.shelf = 'none';
            books.map(bookOnShelf => {
              if (book.id === bookOnShelf.id) {
                book.shelf = bookOnShelf.shelf;
              }
              return bookOnShelf;
            });
            return book;
          });
          this.setState({ ResultSearch: ResultSearch });
        } 
      });
    }else{
      this.setState({ ResultSearch: []});
    }
  };






  render(){
    
    const {ResultSearch} = this.state
   
  return(
 
  <div className="search-books">
            <div className="search-books-bar">
   		  <Link className="close-search" to="/">Close</Link>
           
              <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title or author"
  		  		 
  			onChange={(e) => this.updateQueryChange(e.target.value)} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
							
			{ResultSearch.map(book => (
  			<Book
    		key={book.id}
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


export default Search