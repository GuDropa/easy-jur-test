async function loadBooks() {
    
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/books')
    const books = await res.json()
    
    return books.map((book) => {
        return {
            src: book.cover,
            alt: book.originalTitle,
            pages: book.pages,
            title: book.title,
            description: assertBookDescription(book.description),
            identifier: book.index,
        }
    })

    function assertBookDescription(description) {
        const slicedDesc = description.slice(0, Math.min(description.length, 210))

        return `${slicedDesc}${slicedDesc.length == description.length ? '' : '...'}`
    }
}

export { loadBooks }