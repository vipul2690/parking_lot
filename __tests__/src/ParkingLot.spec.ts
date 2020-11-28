import ParkingLot, {mockGetAvailableSlot} from '../__mocks__/ParkingLot';
jest.mock('../../src/ParkingLot');

beforeEach(() => {
    ParkingLot.mockClear();
    mockGetAvailableSlot.mockClear();
})

it("returns an available slot", () => {
    const parkingLot = new ParkingLot();
    parkingLot.getAvailableSlot();
    expect(mockGetAvailableSlot).toHaveBeenCalledTimes(1);
    expect(mockGetAvailableSlot).toEqual({
        slotNo: 1,
        status: 0,
    });
})