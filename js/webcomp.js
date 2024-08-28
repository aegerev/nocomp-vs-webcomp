class Book extends HTMLElement {
    constructor() {
        super();

        const name = this.getAttribute("name");
        const author = this.getAttribute("author");
        const publication = this.getAttribute("publication");
        const rating = this.getAttribute("rating");
        const description = this.getAttribute("description");
        
        
        this.innerHTML = `
            <div class="book-card">
                <p class="book-name">📖${name}</p>
                <p class="book-author">👨‍🎓${author}</p>
                <p class="book-publication">🎟️${publication}</p>
                <p class="book-rating">🍅${rating}</p>
                <p class="book-description">🔍${description}</p>
            </div>
        `;
    }
}

customElements.define("book-card", Book);

