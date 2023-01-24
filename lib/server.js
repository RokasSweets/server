import http from 'node:http';
import config from '../config.js';

import { PageHome } from '../pages/home.js';
import { PageAbout } from '../pages/about.js';
import { PageServices } from '../pages/services.js';
import { Page404 } from '../pages/404.js';

import { PageTemplate } from './PageTemplate.js';
import { utils } from './utils.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const ssl = req.socket.encryption ? 's' : '';
    const baseURL = `http${ssl}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const trimmedPath = parsedURL.pathname
        .replace(/^\/+|\/+$/g, '')
        .replace(/\/\/+/g, '/');


    const extension = utils.fileExtension(trimmedPath);

    const isTextFile = ['css', 'js'].includes(extension);
    const isBinaryFile = ['jpg', 'png', 'ico'].includes(extension);
    const isAPI = trimmedPath.includes('api');
    const isPage = !isTextFile && !isBinaryFile && !isAPI;
    
    req.on('data', () => {
        console.log('gaunami duomenys...');
    })

    req.on('end', () => {
        if (isTextFile) {
            res.end('stai tau tekstinio failo turinys...');
        }

        if (isBinaryFile) {
            res.end('stai tau binary failo turinys...');
        }

        if (isAPI) {
            res.end('stai tau api atsakymas...');
        }
        //failai: photo, jpg, ico, svg, ...

        //failai: ttf, woff, ...

        //tekstas: css, js, ...


        //puslapio klase -> html
        if (isPage) {
            let PageClass = server.routes[404];
            if (trimmedPath in server.routes) {
                PageClass = server.routes[trimmedPath];
        }};

        const page = new PageClass();


        res.end(page.render());
    })
});

server.routes = {
    '': PageHome,
    'about': PageAbout,
    'services': PageServices,
    '404': Page404,


};

server.init = () => {
    const { port } = config;
    server.httpServer.listen(port, () => {
        console.log(`Projekto nuoroda: http://localhost:${port}/`);
    });
};

export { server }