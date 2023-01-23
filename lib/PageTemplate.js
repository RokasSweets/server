class PageTemplate {
    constructor() {
        this.baseTitle = 'Banana';
        this.pageTitle = '';
    }

    headHTML() {
        const title = this.pageTitle === '' ? this.baseTitle : `${this.pageTitle} | ${this.baseTitle}`;
        return `<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>`
    }

    headerHTML() {
        return `<img src="../banana.png" alt="logo">
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
        </nav>`
    }

    mainHTML() {
        return `<h1>SOME PAGE TEMPLATE</h1>
        <p>123</p>`
    }

    footerHTML() {
        return `<p> 2023 </p>`
    }
    render () {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            ${this.headHTML()}
        </head>
        <body>
            <header>
                ${this.headerHTML()}
            </header>

            <main>
                ${this.mainHTML()}
            </main>

            <footer>
                ${this.footerHTML()}
            </footer>
        </body>
        </html>`;
    }
}

export { PageTemplate }