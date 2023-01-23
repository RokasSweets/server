import { PageTemplate } from "../lib/PageTemplate.js";

class PageHome extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = 'Home';
    }

    mainHTML() {
        return ` <h1>Home</h1>
        <p>Banana phone: +370-BANANA-911</p>`;
    }
}

export { PageHome }