import  {Router}  from "express";
//named import
import {Todo} from '../models/todo'; 
const router  = Router();
const todos:Todo[] = [];
router.get('/',(req,res) =>{
    //typescript knows the type of req,res,next
    res.status(200).json({todos:todos});
})

router.post('/',(req,res)=>{
    //cant use empty data
    // console.log(req.body);
    const newTodo: Todo ={
        id: req.body.id,
        text:req.body.text
    }
    todos.push(newTodo);
    res.json({todo:newTodo});
})

router.post('/edit',(req,res) =>{
    
    todos.forEach(element => {
        if(req.body.id==element.id) {
            element.text = req.body.text;
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