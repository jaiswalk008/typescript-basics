"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./Routes/todos"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json()); // ts infers the bodyparser as we havenot added @types/body-parser still we will install it
app.use(todos_1.default);
app.listen(3000);
/* -----------NOTES---------------
typescript doesnot know where we are going to run this so and does require even exisit or not
npm i --save-dev @types/node -this will allow packages which provide typescript translation for
javascript code
npm i --save-dev @types/express
.d.ts files in node_modules - they contain instructions for typescript to compile these
javascript code
*/ 
