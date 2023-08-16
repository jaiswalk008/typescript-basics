import express from 'express';
import todoRoutes from './Routes/todos';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());// ts infers the bodyparser as we havenot added @types/body-parser still we will install it


app.use(todoRoutes);
app.listen(3000);

/* -----------NOTES---------------
typescript doesnot know where we are going to run this so and does require even exisit or not
npm i --save-dev @types/node -this will allow packages which provide typescript translation for
javascript code
npm i --save-dev @types/express
.d.ts files in node_modules - they contain instructions for typescript to compile these
javascript code
*/