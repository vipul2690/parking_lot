enum ParkingSlotStatus {
    "Occupied" = 1,
    "Available" = 0
}

interface ICar {
    registration_number: string;
}

interface IParkingSlot {
    status: ParkingSlotStatus,
    car?: ICar
}