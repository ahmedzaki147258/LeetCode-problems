function interpret(command: string): string {
    let res="";
    const n=command.length;
    for (let i=0;i<n;i++) {
        if(command[i]==='('&&command[i+1]===')'){
            res+='o';
            i++;
        } else if(command[i]==='('&&command[i+1]!==')') {
            res+='al';
            i+=3;
        } else {
            res+='G';
        }
    }
    return res;
};