import { eachLine } from 'line-reader';

import { ICar } from './models';
import ParkingLot from './src/ParkingLot';

const filePath = './bin/parking_lot_file_inputs.txt';
let parkingLot: ParkingLot;

const getLinenput = (line: string): Array<string> => {
    const commandData = line.split(" ");
    return commandData;
}

const processCommand = (line: string) => {
    const input = getLinenput(line);
    if(input.length <= 3) {
        switch(input[0]) {
            case 'create_parking_lot':
                const lotCapacity = parseInt(input[1])
                parkingLot = new ParkingLot(lotCapacity);
                console.log(`Created Parking lot with ${lotCapacity} slots`);
                return;
            case 'park':
                if(!parkingLot) {
                    console.log('Parking Lot not created');
                } else {
                    const availableSlot = parkingLot.getAvailableSlot();
                    if(availableSlot) {
                        parkingLot.occcupySlot(availableSlot, {
                            registration_number: input[1]
                        })
                    } else {
                        console.log('Sorry, parking lot is full');
                    }
                }
                return;
            case 'leave':
                if(!parkingLot) {
                    console.log('Parking Lot not created');
                } else {
                    const car: ICar = {
                        registration_number: input[1]
                    }
                    parkingLot.vacateSlot(car, parseInt(input[2]));
                }
                return;
            case 'status':
                if(!parkingLot) {
                    console.log('Parking Lot not created');
                } else {
                    parkingLot.printLotStatus();
                }
                return;
            case 'default':
                return;
        }
    } else {
        console.log('Invalid Input received');
    }
    
}


eachLine(filePath, (line: string) => {
    processCommand(line);
    if (line.includes('STOP')) {
        return false; // stop reading
    }
})