import React from "react";

function MyBooks(props) {
    return (
        <ul className="list-group">
            {props.books.map(book => (
                <li key={book.id} className="list-group-item card-body font-weight-bold m-3 p-3">
                {/* key={book.id} */}
                    <div className="d-flex justify-content-center">
                    <img src={book.image} alt={book.title} />
                    </div>
                    <h3 className="mt-3 text-center"><b>{book.title}</b></h3>
                    <p><b>Author:</b> {book.author}</p>
                    
                    <p className="text-center"><a href={book.purchase_link} target="_blank">Buy Book</a> | <a href={book.read_link} target="_blank">Read Book</a></p>
                    
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



export default MyBooks;