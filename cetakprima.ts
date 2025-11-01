// NIM : 051375001
// 1 + 10 = 11

function checkPrima(angka:number) :boolean{
    if(angka < 2) return false;

    for(let i = 2; i <= Math.sqrt(angka);i++){
        if(angka % i === 0){
            return false
        }
    }
    return true;
}

function printPrima(limit : number) :void{
    const result : number[] = [];

    for(let i = 1;i <= limit;i++){
        if(checkPrima(i)){
            result.push(i);
        }
    }
    console.log("Bilangan Prima dari 1 - 11 :",result.join(" "));

}

printPrima(11);

