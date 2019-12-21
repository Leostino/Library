import React from "react";

function BookResult(props) {
    return (
        <ul className="list-group">
      {props.books.map(book => (
        <li key={book.id} className="list-group-item card-body font-weight-bold mt-3 mb-3">
          {/* key={book.id} */}
          <img src={book.volumeInfo.imageLinks.thumbnail}></img>
           <h3>Title: {book.volumeInfo.title}</h3>
            <p>Authors: {book.volumeInfo.authors}</p>
            <p>Description: {book.volumeInfo.description}</p>     
            <p>Link: {book.volumeInfo.infoLink}</p>
             
          {/* delete button */}
          <button className="card-button btn btn-secondary ml-3" key={book.id} onClick={() => props.save(book.id)}>
            Save Book
          </button>
        </li>
      ))}
    </ul>
    )
}



export default BookResult;