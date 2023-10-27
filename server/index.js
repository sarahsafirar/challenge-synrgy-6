const http = require('http');
const fs = require('fs');
const path = require('path');

const { PORT = 1400 } = process.env;

const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

const MIME_TYPES = {
    html: 'text/html; charset=UTF-8',
    css: 'text/css',
    js: 'application/javascript',
    jpg: 'image/jpeg',
    png: 'image/png',
    ico: 'image/x-icon',
};

function getMimeType(ext) {
    return MIME_TYPES[ext] || 'application/octet-stream';
}

function serveFile(req, res, filePath) {
    const ext = path.extname(filePath).substring(1);
    const mimeType = getMimeType(ext);

    res.setHeader('Content-Type', mimeType);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
}

http.createServer((req, res) => {
    let reqPath = req.url;

    if (reqPath === '/') {
        reqPath = '/index.html';
    }

    if (reqPath === '/search') {
        reqPath = '/search-car.html';
    }

    const filePath = path.join(PUBLIC_DIRECTORY, reqPath);

    serveFile(req, res, filePath);

    console.log(`${req.method} ${req.url}`);
}).listen(PORT, 'localhost', () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});