import ApiService from '../services/apiService';

export async function  addUpgrade(object, setUpgrades) {
    const apiService = new ApiService();

    console.log('object:', object);
  
    if (object.length === 2 && object[1].numberOfUpgrades >= 5){
      setUpgrades([...object, {name: "python", numberOfUpgrades: 0, cost: 300}])
      await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 3 && object[2].numberOfUpgrades >= 10){
        setUpgrades([...object, {name: "frontend", numberOfUpgrades: 0, cost: 1000}])
        await apiService.postAddUpgrades({name: "frontend", numberOfUpgrades: 0, cost: 1000});
    }

    if (object.length === 4 && object[3].numberOfUpgrades >= 30){
        setUpgrades([...object, {name: "algorithms", numberOfUpgrades: 0, cost: 5000}])
        await apiService.postAddUpgrades({name: "algorithms", numberOfUpgrades: 0, cost: 5000});
    }

    if (object.length === 5 && object[4].numberOfUpgrades >= 40){
        setUpgrades([...object, {name: "c++", numberOfUpgrades: 0, cost: 10000}])
        await apiService.postAddUpgrades({name: "c++", numberOfUpgrades: 0, cost: 10000});
    }

    if (object.length === 6 && object[5].numberOfUpgrades >= 30){
        setUpgrades([...object, {name: "oop", numberOfUpgrades: 0, cost: 20000}])
        await apiService.postAddUpgrades({name: "oop", numberOfUpgrades: 0, cost: 20000});
    }

    if (object.length === 7 && object[6].numberOfUpgrades >= 40){
        setUpgrades([...object, {name: "java", numberOfUpgrades: 0, cost: 30000}])
        await apiService.postAddUpgrades({name: "java", numberOfUpgrades: 0, cost: 30000});
    }
    
    if (object.length === 8 && object[7].numberOfUpgrades >= 50){
        setUpgrades([...object, {name: "React", numberOfUpgrades: 0, cost: 50000}])
        await apiService.postAddUpgrades({name: "React", numberOfUpgrades: 0, cost: 50000});
    }

    if (object.length === 9 && object[8].numberOfUpgrades >= 30){
        setUpgrades([...object, {name: "kata", numberOfUpgrades: 0, cost: 70000}])
        await apiService.postAddUpgrades({name: "kata", numberOfUpgrades: 0, cost: 70000});
    }

    if (object.length === 10 && object[9].numberOfUpgrades >= 20){
        setUpgrades([...object, {name: "koxori", numberOfUpgrades: 0, cost: 90000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 11 && object[10].numberOfUpgrades >= 10){
        setUpgrades([...object, {name: "yvelaze_dzlieri", numberOfUpgrades: 0, cost: 100000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 12 && object[11].numberOfUpgrades >= 30){
        setUpgrades([...object, {name: "kacobashi", numberOfUpgrades: 0, cost: 160000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 13 && object[12].numberOfUpgrades >= 20){
        setUpgrades([...object, {name: "ajika", numberOfUpgrades: 0, cost: 250000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 14 && object[13].numberOfUpgrades >= 50){
        setUpgrades([...object, {name: "dido_mefeo", numberOfUpgrades: 0, cost: 300000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 15 && object[14].numberOfUpgrades >= 70){
        setUpgrades([...object, {name: "iumorina", numberOfUpgrades: 0, cost: 400000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 16 && object[15].numberOfUpgrades >= 80){
        setUpgrades([...object, {name: "ramamklavda", numberOfUpgrades: 0, cost: 500000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 17 && object[16].numberOfUpgrades >= 90){
        setUpgrades([...object, {name: "gveli_idga", numberOfUpgrades: 0, cost: 600000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 18 && object[17].numberOfUpgrades >= 100){
        setUpgrades([...object, {name: "me_var", numberOfUpgrades: 0, cost: 700000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 19 && object[18].numberOfUpgrades >= 90){
        setUpgrades([...object, {name: "mdzleta_mdzle", numberOfUpgrades: 0, cost: 800000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }

    if (object.length === 20 && object[19].numberOfUpgrades >= 30){
        setUpgrades([...object, {name: "tyabladze", numberOfUpgrades: 0, cost: 1000000}])
        await apiService.postAddUpgrades({name: "python", numberOfUpgrades: 0, cost: 300});
    }


  
  }