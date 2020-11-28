enum ParkingSlotStatus {
    "Occupied" = 1,
    "Available" = 0
}

interface ICar {
    registration_number: string;
    color: string;
}

interface IParkingSlot {
    slotNo: number;
    status: ParkingSlotStatus,
    car?: ICar
}