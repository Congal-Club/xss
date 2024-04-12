"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCookies = void 0;
const fs_1 = __importDefault(require("fs"));
function saveCookies(ip, cookies) {
    let data = {};
    try {
        data = JSON.parse(fs_1.default.readFileSync('cookies.json', 'utf-8'));
    }
    catch (error) {
        console.log('El archivo cookies.json no existe o está vacío. Se creará uno nuevo.');
    }
    data[ip] = cookies;
    fs_1.default.writeFileSync('cookies.json', JSON.stringify(data, null, 2));
    console.log(`Cookies guardadas para la IP ${ip}: ${cookies}`);
}
exports.saveCookies = saveCookies;
