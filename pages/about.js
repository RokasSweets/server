import { PageTemplate } from "../lib/PageTemplate.js";

class PageAbout extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = 'About';
    }

    mainHTML() {
        return ` <h1>About Us</h1>
        <p>We eat alot of BANANAS!</p>`;
    }
}

export { PageAbout }