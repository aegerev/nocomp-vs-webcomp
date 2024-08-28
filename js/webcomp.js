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
                <p class="product-name">📖${name}</p>
                <p class="product-author">👨‍🎓${author}</p>
                <p class="product-publication">🎟️${publication}</p>
                <p class="product-rating">🍅${rating}</p>
                <p class="product-description">🔍${description}</p>
            </div>
        `;
    }
}

customElements.define("book-card", Book);

