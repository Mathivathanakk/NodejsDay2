const employee = [
  { id: 1, emp_name: "john", designation: "QA" },
  { id: 2, emp_name: "joe", designation: "FSD" },
  { id: 3, emp_name: "adam", designation: "UI/UX Designer" },
  { id: 4, emp_name: "dluffy", designation: "Tester" },
  { id: 5, emp_name: "smith", designation: "Solution Architect" },
];

//getall or get method
export const getEmployeeDetails = (req, res) => {
  res.status(200).json({ message: "employee details", data: employee });
};

//getById

export const getEmployeeById = (req, res) => {
  const empId = req.params.id;
  //console.log(empId);

  const empDetail = employee.find((ele) => ele.id == empId);
  if (!empDetail) {
    res.status(200).json({ message: "employee not found" });
  }

  res.status(200).json({ message: "employee detail", data: empDetail });
};

//create employee and post method
export const createEmployee = (req, res) => {
  const { emp_name, designation } = req.body;
  const newEmp = {
    id: employee.length + 1,
    emp_name: emp_name,
    designation: designation,
  };

  employee.push(newEmp);
  console.log(newEmp);
  res
    .status(200)
    .json({ message: "employee created successfully", data: newEmp });
};

//edit employee and put method

export const editEmployee = (req, res) => {
  const empId = req.params.id;
  const { emp_name, designation } = req.body;
  const index = employee.findIndex((ele) => ele.id == empId);
  if (index === -1) {
    res.status(404).send("employee not found");
  }
  employee[index].emp_name = emp_name;
  employee[index].designation = designation;

  res
    .status(200)
    .json({ message: "employee updated successfully", data: employee[index] });
};

//delete employee and delete method
export const deleteEmployee=(req,res)=>{
const empId=req.params.id
const index = employee.findIndex((ele) => ele.id == empId);
  if (index === -1) {
    res.status(404).send("employee not found");
  }
  employee.splice(index,1)
  res.status(200).json({message:"employee deleted successfully"})
}

