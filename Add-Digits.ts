function addDigits(num: number): number {
    let digits = (num+"").split("").reduce((a,b)=>+a+(+b), 0);

    while (digits >= 10){
        digits = (digits+"").split("").reduce((a,b)=>+a+(+b), 0);
    }

    return digits;
};