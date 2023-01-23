import { PageTemplate } from "../lib/PageTemplate.js";

class PageServices extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = 'Services';
    }

    mainHTML() {
        return ` <h1>Services</h1>
        <p>Services list: 1)Banana eating.</p>`;
    }
}

export { PageServices }