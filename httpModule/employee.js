const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    empId : {
        type : String,
        required : true
    },
    empName : {
        type : String,
        required : true
    },
    emailId : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    },
    created : {
        type : Date,
        default : Date.now
    }
});

let Employee = mongoose.model('employee' , employeeSchema);
module.exports = Employee;