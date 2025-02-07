function minMovesToSeat(seats: number[], students: number[]): number {
    let cnt=0;
    seats.sort((a,b)=>a-b);
    students.sort((a,b)=>a-b);
    for (let i=0;i<students.length;i++) {
        cnt+=Math.abs(seats[i]-students[i]);
    }
    return cnt;
};