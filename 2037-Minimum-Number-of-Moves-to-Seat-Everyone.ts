function minMovesToSeat(seats: number[], students: number[]): number {
    let cnt=0;
    seats.sort((a,b)=>a-b);
    students.sort((a,b)=>a-b);
    return students.reduce((prev, curr, idx)=>prev+Math.abs(curr-seats[idx]), 0);
};