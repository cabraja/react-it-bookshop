import React from 'react'

const Book = ({title,price,image,url,isbn13}) => {
    return (
        <section className="book-container">
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <h5>{price === '$0.00' ? 'Not Released Yet' : price}</h5>
            <a href={url} rel="noreferrer" target="_blank">Buy</a>
        </section>
    )
}

export default Book
