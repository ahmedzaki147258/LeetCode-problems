function minPartitions(n: string): number {
    return Math.max(...n.split("").map(e=>+e));

    /**************** this solution give me time limit exceeded */
    // let cnt=0;
    // const len=n.length;
    // while (+n>0){
    //   cnt++;
    //   let str="";
    //   for(let i=0;i<len;i++){
    //     if(n[i]==='0') str+=0;
    //     else str+=1;
    //   }
    //   for(let i=0;i<len;i++){
    //     n=n.substring(0, i) + (+n[i]-+str[i]).toString() + n.substring(i+1);
    //   }
    // }
    // return cnt;
};