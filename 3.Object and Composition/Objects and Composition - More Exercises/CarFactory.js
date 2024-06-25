function carFactory(input) {
    let car = {
        model: input.model,
        engine: {
            power: input.power,
            volume: 0,
        },
        carriage: {
            type: input.carriage,
            color: input.color
        },
        wheels: []
    };

    function setVolume() {
       if (this.power <= 90) {
           this.volume = 1800;
       } else if (this.power <= 120) {
           this.volume = 2400;
       }else {
           this.volume = 3500;
       }
    }

    function setWheelSize() {
        let size = input.wheelsize;
        if (size % 2 === 0) {
            size--;
        }
        car.wheels = [size, size, size, size];
    }

    setVolume.call(car.engine);
    setWheelSize();
    return car;
}

console.log(carFactory({model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14}));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
console.log(carFactory({
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
}))