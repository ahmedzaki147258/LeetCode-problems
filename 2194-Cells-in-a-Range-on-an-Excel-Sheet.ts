function cellsInRange(s: string): string[] {
     const result: string[]=[];
  const firstLetter=s.charCodeAt(0);
  const endLetter=s.charCodeAt(3);
  const start=+s[1];
  const end=+s[4];
  for(let i=firstLetter;i<=endLetter;i++){
    // console.log(String.fromCharCode(i));
    for (let j=start;j<=end;j++) {
      result.push(String.fromCharCode(i)+j);
    }
    
  }
  // console.log(firstLetter, endLetter);
  // console.log(start, end);
  return result;
};