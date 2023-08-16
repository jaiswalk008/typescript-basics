import  {Router}  from "express";
//named import
import {Todo} from '../models/todo';

type RequestBody ={id:number,text:string};
const router  = Router();
const todos:Todo[] = [];
router.get('/',(req,res) =>{
    //typescript knows the type of req,res,next
    res.status(200).json({todos:todos});
})

router.post('/',(req,res)=>{
    //cant use empty data
    // console.log(req.body);
    const body = req.body as RequestBody;
    const newTodo: Todo ={
        id: body.id,
        text:body.text
    }
    todos.push(newTodo);
    res.json({todo:newTodo});
})

router.post('/edit',(req,res) =>{
    const body = req.body as RequestBody;
    todos.forEach((element,index) => {
        if(req.body.id==element.id) {
            todos[index] = {id:body.id , text: body.text};
            res.json({todo:element});
        }

    });
    res.sendStatus(404).json({"message":'No element found'})
})
router.delete('/delete',(req,res) =>{
    
    todos.forEach((element,index) => {
        if(req.body.id==element.id) {
            todos.splice(index,1);
            res.json({"message":'deleted todo successfully'})
        }
    });
    res.sendStatus(404).json({"message":'No element found'})
    
})


export default router;