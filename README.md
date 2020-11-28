# Parking Lot Implementation

**Description**
```
Manages a Parking Lot and calculates appropriate fee based on number of hours the Car was in Parking Lot
```

**Valid Inputs**
1. `create_parking_lot` `6`
    - Initialises a Parking Lot with second parameter for specifying capacity of the Parking ot with respect to number of cours that it can house.

2. `park KA-01-HH-1234`
   - Parks a car with registration number provided as second param.

3. `leave KA-01-HH-3141 4`
   - Car with registration number i.e. second parameter is vacated from the parking lot, with 4 being the number of hours the car was in parking lot.

4. `status`
    - Displays the currrent status of the carpool.


**Node Version**

`Node v12.19.0`

**Input File Details**
- Location: `bin` directory in root of the project directory.
- Naming convention: `parking_lot_file_input.txt`

**Setup**
1. Run `npm install` from project root directory to install dependencies.
2. Run `npm start` for compiling and running the program.