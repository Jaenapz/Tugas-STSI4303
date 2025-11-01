//NIM : 051375001

function printSegitiga(height:number):void{
    for(let i = 1; i<= height; i++){
        let row ="";

    for(let j= 1; j<= i; j++){
        row += j;
    }
    console.log(row)
    }
}

printSegitiga(5);