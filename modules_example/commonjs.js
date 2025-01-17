file1.js

function login(){

}
function registration(){
    
}

module.exports={
    registration,
    login
}

file2.js 
==========
 
const  { registration as reg ,login }=require('./file')