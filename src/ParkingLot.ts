export default class ParkingLot {
    public parkingSlots: Array<IParkingSlot>;
    public capacity: number
    
    constructor(capacity: number) {
        this.capacity = capacity;
        this.parkingSlots = [];

        for(let i=0; i<capacity; i++) {
            this.parkingSlots.push({
                slotNo: i+1,
                status: 0
            })
        }
    }

    getAvailableSlot = () => {
        const availableSlots = this.parkingSlots.filter((slot) => slot.status === 1)
        if (availableSlots.length) {
            return availableSlots[0];
        } else {
            console.log("Sorry Parking Lot is full");
            return null;
        }
    }

    vacateSlot = (car: ICar) => {
        let targetSlot = this.parkingSlots.find((slot) => slot.car && slot.car.registration_number === car.registration_number)
        if(targetSlot) {
            targetSlot = {
                ...targetSlot,
                status: 0,
            }
            this.parkingSlots = [
                ...this.parkingSlots,
                targetSlot
            ]
            console.log(`Registration Number ${targetSlot.car?.registration_number} with Slot Number ${targetSlot.slotNo} is free with carge 30`);
        } else {
            return null;
        }
    }

    occcupySlot = (slot: IParkingSlot, car: ICar) => {
        slot = {
            ...slot,
            car: car,
            status: 1
        }
        this.parkingSlots = [
            ...this.parkingSlots,
            slot
        ]
        console.log(`Allocated slot number: ${slot.slotNo}`)
    }

    printLotStatus = () => {
        console.log("Slot No \t\t   Registration No");
        for(const slot of this.parkingSlots) {
            if(slot.status === 1) {
                console.log(`${slot.slotNo} \t\t    ${slot.car?.registration_number}`)
            }
        }
    }
} 