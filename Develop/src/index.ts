// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles
const vehicles = [];

// uncomment once trucks are implemented
const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, 10000, [
  new Wheel(18, "Goodyear"),
  new Wheel(18, "Goodyear"),
  new Wheel(18, "Goodyear"),
  new Wheel(18, "Goodyear")
]);

// will use default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// uncomment once motorbikes are implemented
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels[0], motorbike1Wheels[1]);

// push vehicles to array
// TODO: uncomment once trucks are implemented
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);
//TODO: uncomment once motorbikes are implemented


// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
