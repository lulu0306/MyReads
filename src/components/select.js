import React from 'react'
class Select extends React.Component{
  
 updateShelf = e => this.props.updateShelf(this.props.book, e.target.value);
 render(){ 

 return(
    
   
    <div className="book-shelf-changer">
                              <select value={this.props.book.shelf}  onChange={this.updateShelf} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
  
  
  )
 }
}

export default Select 