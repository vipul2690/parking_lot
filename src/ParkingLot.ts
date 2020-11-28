import { IParkingSlot, ICar } from '../models';

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

    calculateCharge = (hours: number): number => {
        if(hours <= 2) {
            return 10;
        } else {
            const additionalHours = hours - 2;
            return (10 + (additionalHours * 10));
        }
    }

    getAvailableSlot = () => {
        const availableSlots = this.parkingSlots.filter((slot) => slot.status === 0)
        if (availableSlots.length) {
            return availableSlots[0];
        } else {
            return null;
        }
    }

    vacateSlot = (car: ICar, hours: number) => {
        const index = this.parkingSlots.findIndex((slot) => slot.car?.registration_number === car.registration_number);
        const targetSlot = this.parkingSlots[index];
        if(index > -1) {
            this.parkingSlots = [
                ...this.parkingSlots.slice(0, index),
                {
                    ...targetSlot,
                    status: 0,
                    car: undefined,
                },
                ...this.parkingSlots.slice(index+1),
            ]
            console.log(`Registration Number ${targetSlot.car?.registration_number} with Slot Number ${targetSlot.slotNo} is free with charge ${this.calculateCharge(hours)}`);
            return;
        } else {
            console.log(`Registration number ${car.registration_number} not found`);
            return null;
        }
    }

    occcupySlot = (slot: IParkingSlot, car: ICar) => {
        const index = this.parkingSlots.findIndex((pSlot) => pSlot.slotNo === slot.slotNo );
        this.parkingSlots = [
            ...this.parkingSlots.slice(0, index),
            {
                ...slot,
                status: 1,
                car: car
            },
            ...this.parkingSlots.slice(index+1)
        ]
        console.log(`Allocated slot number: ${slot.slotNo}`);
        return;
    }

    printLotStatus = () => {
        console.log("Slot No \t\t   Registration No");
        for(const slot of this.parkingSlots) {
            if(slot.status === 1) {
                console.log(`${slot.slotNo} \t\t\t    ${slot.car?.registration_number}`);
            }
        }
        return;
    }
} 