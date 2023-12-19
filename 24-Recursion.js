function takeShower(){
    return "Showering!";
}
function eatBreakfast(){
    let meal = cookFood();
    return `eating ${meal}`
}
function cookFood(){
    let list = ["Eggs", "Oatmeal", "Cereal", "Banana", "Protien Shake"];
    return list[Math.floor(Math.random() * list.length)];
}
const wakeUp = () => {
    takeShower();
    console.log(eatBreakfast());
    console.log("Ok ready to go to work!");
}

wakeUp();