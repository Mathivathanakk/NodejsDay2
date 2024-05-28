import express from 'express';
import { createEmployee, deleteEmployee, editEmployee, getEmployeeById, getEmployeeDetails } from '../Controllers/employeeControllers.js';


const router=express.Router();


router.get('/employeedetail',getEmployeeDetails)
router.get('/employeedetail/:id',getEmployeeById)
router.post('/createemp',createEmployee)
router.put('/edit/:id',editEmployee)
router.delete('/delete/:id',deleteEmployee)



export default router;