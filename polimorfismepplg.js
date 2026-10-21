class ryhan{
    skil(){
        console.log("bisa pyton");
    }
    level(){
        console.log(" 50 kemajuan");
    }
}
class kenzi{
    skil(){
        console.log("bisa html");
    }
    level(){
        console.log(" 30 kemahiran");
    }
}


const orang =[new ryhan(), new kenzi()];
orang.forEach(bisa => bisa.skil());
orang.forEach(bisa => bisa.level());