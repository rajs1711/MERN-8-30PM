
import {printData ,sum} from './file1.js';
import {test as othertestfn } from './file3.js'; // rename while importing methods
import test_fn4,{fn5} from './file4.js'; // default and normal import


let user={
    name:'Amit',
    email:'amit@gmail.com'
}


printData(user)

let r= sum(4,5);

function test(){
console.log('shsjdssjdhsjk');

}

test()
othertestfn()

test_fn4()// default import