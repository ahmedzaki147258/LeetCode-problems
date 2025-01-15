class ParkingSystem {
    private big: number;
    private medium: number;
    private small: number;

    constructor(big: number, medium: number, small: number) {
        this.big=big; this.medium=medium; this.small=small;
    }

    addCar(carType: number): boolean {
        if(carType===1) return this.big>0 && this.big-- ? true : false;
        else if(carType===2) return this.medium>0 && this.medium-- ? true : false;
        else if(carType===3) return this.small>0 && this.small-- ? true : false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */