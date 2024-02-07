let laptop = 35000;
let tablet = 15000; 
let mobile = 20000;

function calculateElectronicsBudget(laptopQn, tabletQn, mobileQn) {

    const laptopTotalPrice = laptopQn*laptop;
    const tabletTotalPrice = tabletQn*tablet;
    const mobileTotalPrice = mobileQn*mobile;
    const totalMoney = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
    return totalMoney;

}

const money = calculateElectronicsBudget(5, 0, 5);
console.log(money);