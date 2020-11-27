class ParkingLot {
    private parkingSlots: Array<IParkingSlot>;
    private capacity: number
    
    constructor(capacity: number) {
        this.capacity = capacity;
        this.parkingSlots = [];

        for(let i=0; i<capacity; i++) {
            this.parkingSlots.push({
                status: 0
            })
        }
    }
    
}