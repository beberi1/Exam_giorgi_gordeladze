import ApiService from '../services/apiService';

export async function  addUpgrade(object, setUpgrades) {
    const apiService = new ApiService();

    console.log('object:', object);
  
    if (object.length === 2 && object[1].numberOfUpgrades >= 2){
      setUpgrades([...object, {name: "python", numberOfUpgrades: 0, cost: 100}])
      await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 100});
    }

    if (object.length === 3 && object[2].numberOfUpgrades >= 2){
        setUpgrades([...object, {name: "frontend", numberOfUpgrades: 0, cost: 300}])
        await apiService.postAddUpgrades({name: "frontend", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 4 && object[3].numberOfUpgrades >= 3){
        setUpgrades([...object, {name: "algorithms", numberOfUpgrades: 0, cost: 1000}])
        await apiService.postAddUpgrades({name: "algorithms", numberOfUpgrades: 0, cost: 1000});
    }

    if (object.length === 5 && object[4].numberOfUpgrades >= 3){
        setUpgrades([...object, {name: "c++", numberOfUpgrades: 0, cost: 1500}])
        await apiService.postAddUpgrades({name: "c++", numberOfUpgrades: 0, cost: 1500});
    }

    if (object.length === 6 && object[5].numberOfUpgrades >= 2){
        setUpgrades([...object, {name: "oop", numberOfUpgrades: 0, cost: 10000}])
        await apiService.postAddUpgrades({name: "oop", numberOfUpgrades: 0, cost: 10000});
    }

    if (object.length === 7 && object[6].numberOfUpgrades >= 5){
        setUpgrades([...object, {name: "java", numberOfUpgrades: 0, cost: 20000}])
        await apiService.postAddUpgrades({name: "java", numberOfUpgrades: 0, cost: 20000});
    }
    
    if (object.length === 8 && object[7].numberOfUpgrades >= 4){
        setUpgrades([...object, {name: "react", numberOfUpgrades: 0, cost: 50000}])
        await apiService.postAddUpgrades({name: "react", numberOfUpgrades: 0, cost: 50000});
    }

    if (object.length === 9 && object[8].numberOfUpgrades >= 20){
        setUpgrades([...object, {name: "c#", numberOfUpgrades: 0, cost: 70000}])
        await apiService.postAddUpgrades({name: "c#", numberOfUpgrades: 0, cost: 70000});
    }

    if (object.length === 10 && object[9].numberOfUpgrades >= 20){
        setUpgrades([...object, {name: "scratch", numberOfUpgrades: 0, cost: 90000}])
        await apiService.postAddUpgrades({name: "scratch", numberOfUpgrades: 0, cost: 300});
    }


  
  }