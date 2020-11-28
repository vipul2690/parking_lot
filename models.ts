enum ParkingSlotStatus {
    "Occupied" = 1,
    "Available" = 0
}

export interface ICar {
    registration_number: string;
    color?: string;
}

export interface IParkingSlot {
    slotNo: number;
    status: ParkingSlotStatus,
    car?: ICar
}