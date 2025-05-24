function fizzBuzz(n: number): string[] {
    const res: string[] = [];
    for (let i = 1; i <= n; i++) {
        if(Number.isInteger(i/5) && Number.isInteger(i/3)) res.push("FizzBuzz")
        else if(Number.isInteger(i/3)) res.push("Fizz")
        else if(Number.isInteger(i/5)) res.push("Buzz")
        else res.push(i.toString())
    }
    return res;
};