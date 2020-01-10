import React from "react";

function MyBooks(props) {
    return (
        <div className="m-3 p-3 d-flex flex-wrap justify-content-start">
            {props.books.map(book => (
                <div style={{ maxWidth:"300px",height:"450px" }} key={book.id} className="bg-light card-body font-weight-bold m-4 text-center">
                {/* key={book.id} */}
                    <div className="d-flex justify-content-center">
                    <img src={book.image} alt={book.title} />
                    </div>
                    <h3 className="mt-3 text-center"><b>{book.title}</b></h3>
                    <p><b>Author:</b> {book.author}</p>
                    <p><b>Category:</b> {book.category}</p>
                    
                    <p className="text-center"><a href={book.purchase_link} target="_blank">Buy Book</a> | <a href={book.read_link} target="_blank">Read Book</a></p>
                    
                    {/* <p>Price: {book.saleInfo.listPrice.amount} </p> */}
                    <div className="d-flex justify-content-center">
                    {/* save button */}
                    <button className="card-button btn btn-secondary ml-3" key={book.id} onClick={() => props.save(book.id)}>
                       Delete Book
                    </button>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default MyBooks;