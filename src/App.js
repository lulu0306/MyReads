import React from 'react'
import { Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import Search from './components/searchPage'
import Shelves from './components/shelves.js'
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }


  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({ books });
    })
  }
  

 updateShelf = (book, shelf) => {
    book.shelf = shelf;
this.setState((state) => ({
books:  this.state.books.filter(bk => bk.id !== book.id).concat([book])
}));
BooksAPI.update(book, shelf);
};
  render() {   
    return (
      <div className="app">      
       <Route  exact path="/" render={() =>(
		<Shelves
    books={this.state.books}
	updateShelf={this.updateShelf}
    />
    )
}
/>



     <Route path='/search' render={() => (
     <Search
	books={this.state.books}
	updateShelf={this.updateShelf}
     />
    )}/>                            
      </div>
    )
  }
}

export default BooksApp
