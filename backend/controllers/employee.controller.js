import Employee from "../models/employee.model.js";

// CREATE
export const createEmployee = async (req, res) => {
    try {
        const payload = {
            ...req.body,
            experience:
                req.body.experience === "" ? undefined : req.body.experience,
            package: req.body.package === "" ? undefined : req.body.package,
        };

        const employee = await Employee.create(payload);
        res.status(201).json(employee);
    } catch (error) {
        console.error("Create employee error:", error);
        res.status(400).json({ message: error.message });
    }
};

// READ ALL
export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// export const getEmployees = async (req, res) => {
//     try {
//         const employees = await Employee.find().sort({ createdAt: 1 });
//         res.json(employees);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// READ ONE
export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee)
            return res.status(404).json({ message: "Employee not found" });

        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE (IMPORTANT FIX HERE)
export const updateEmployee = async (req, res) => {
    try {
        const payload = {
            ...req.body,
            experience:
                req.body.experience === "" ? undefined : req.body.experience,
            package: req.body.package === "" ? undefined : req.body.package,
        };

        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            payload,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!employee)
            return res.status(404).json({ message: "Employee not found" });

        res.json(employee);
    } catch (error) {
        console.error("Update employee error:", error);
        res.status(400).json({ message: error.message });
    }
};

// DELETE
export const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);

        if (!employee)
            return res.status(404).json({ message: "Employee not found" });

        res.json({ message: "Employee deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// import Employee from "../models/employee.model.js";

// // CREATE
// export const createEmployee = async (req, res) => {
//     try {
//         const employee = await Employee.create(req.body);
//         res.status(201).json(employee);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // READ ALL
// export const getEmployees = async (req, res) => {
//     const employees = await Employee.find().sort({ createdAt: -1 });
//     res.json(employees);
// };

// // READ ONE
// export const getEmployeeById = async (req, res) => {
//     const employee = await Employee.findById(req.params.id);
//     if (!employee) return res.status(404).json({ message: "Not found" });
//     res.json(employee);
// };

// // UPDATE
// export const updateEmployee = async (req, res) => {
//     const employee = await Employee.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//     );
//     res.json(employee);
// };

// // DELETE
// export const deleteEmployee = async (req, res) => {
//     await Employee.findByIdAndDelete(req.params.id);
//     res.json({ message: "Employee deleted" });
// };
