import ParkingLot from '../../src/ParkingLot';

export const mockGetAvailableSlot = jest.fn(() => {
    return {
        slotNo: 1,
        status: 0,
    }
});
const mock = jest.fn().mockImplementation(() => {
    return {getAvailableSlot: mockGetAvailableSlot};
});

export default mock;