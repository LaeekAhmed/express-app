"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_1 = require("./test");
const app = (0, express_1.default)();
const add = (a, b) => a + b;
app.get('/', (req, res) => {
    console.log(add(5, 5));
    res.send('Hello World!');
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // const file_data = await fs.promises.readFile('./file.txt')
        // console.log(file_data);
        console.log('Helo World!');
    });
}
main();
console.log(test_1.msg);
app.listen(3000, () => console.log("server running on http://localhost:3000/"));
