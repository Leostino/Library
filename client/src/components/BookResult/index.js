import React from "react";

function BookResult(props) {
    return (
        <ul className="list-group">
            {props.books.map(book => (
                <li key={book.id} className="list-group-item card-body font-weight-bold m-3 p-3">
                {/* key={book.id} */}
                    <div className="d-flex justify-content-center">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    </div>
                    <h3 className="mt-3 text-center"><b>Book:</b> {book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.description}</p>
                    <p><b>No. of pages:</b> {book.volumeInfo.pageCount}</p>
                    <p><b>Category:</b> {book.volumeInfo.categories}</p>
                    <p><b>Authors:</b> {book.volumeInfo.authors}</p>
                    <p><b>Publisher:</b> {book.volumeInfo.publisher}</p>
                    <p><b>Published Date:</b> {book.volumeInfo.publishedDate}</p>
                    <p><b>Country:</b> {book.saleInfo.country}</p>              
                    <p><b>Average Rating:</b> {book.volumeInfo.averageRating}</p>
                    <p><b>Maturity:</b> {book.volumeInfo.maturityRating}</p>
                    <p className="text-center"><a href={book.volumeInfo.infoLink} target="_blank">Buy Book</a> | <a href={book.accessInfo.webReaderLink} target="_blank">Read Book</a></p>
                    
                    {/* <p>Price: {book.saleInfo.listPrice.amount} </p> */}
                    <div className="d-flex justify-content-center">
                    {/* save button */}
                    <button className="card-button btn btn-secondary ml-3" key={book.id} onClick={() => props.save(book.id)}>
                       Save Book
                    </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}



export default BookResult;