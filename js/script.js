
let snake_head = document.querySelector(".head");
let snake_body = document.querySelector(".snake-body");
let snake_marginTop = Number(snake_head.style.marginTop);
let snake_marginLeft = Number(snake_head.style.marginLeft);
let score_int = 0;
let score = document.querySelector(".score");
const availableValuesPixels = [0, 25, 50, 75, 100,
                                125, 150, 175, 200,
                                225, 250, 275, 300, 325,
                                350, 375, 400, 425, 450, 475];
let food_marginTop = 0;
let food_marginLeft = 0;
let randomNumber = 0;
let food = document.querySelector(".food");
let key = "ArrowRight";
const game_field = document.querySelector(".game-field");
const snake_elements = document.querySelector(".game-field").children;

const gameData = {
    "snake-head-color": "red",
    "snake-body-color": "green",
    "snake-size": 25,
    "food-size": 25,
    "food-color": "blue"
}

food.style.width = `${gameData["food-size"]}px`;
food.style.height = `${gameData["food-size"]}px`;
food.style.background = gameData["food-color"]


DrawBackgroundItems();
ChangeMarginFood();

snake_head.style.width = `${gameData["snake-size"]}px`;
snake_head.style.height = `${gameData["snake-size"]}px`;


setInterval(function(){
    if (key == "ArrowDown"){
        if (snake_marginTop > 470){
            SetMargin();
            snake_marginTop = 0;
            snake_head.style.marginTop = `${snake_marginTop}px`;
        }
        else{
            SetMargin();
            snake_marginTop += gameData["snake-size"];
            snake_head.style.marginTop = `${snake_marginTop}px`;

        }
        CheckMargins();
    }

    else if (key == "ArrowUp"){
        if (snake_marginTop < 25){
            SetMargin();
            snake_marginTop = 475;
            snake_head.style.marginTop = `${snake_marginTop}px`;

        }

        else{
            SetMargin();
            snake_marginTop -= gameData["snake-size"];
            snake_head.style.marginTop = `${snake_marginTop}px`;

        }
        CheckMargins();
    }

    else if (key == "ArrowRight"){
        if (snake_marginLeft > 470){
            SetMargin();
            snake_marginLeft = 0;
            snake_head.style.marginLeft = `${snake_marginLeft}px`;

        }

        else{
            SetMargin();
            snake_marginLeft += gameData["snake-size"];
            snake_head.style.marginLeft = `${snake_marginLeft}px`;

        }
        CheckMargins();
    }

    else if (key = "ArrowLeft"){
        if (snake_marginLeft < 25){
            SetMargin();
            snake_marginLeft = 475;
            snake_head.style.marginLeft = `${snake_marginLeft}px`;

        }

        else{
            SetMargin();
            snake_marginLeft -= gameData["snake-size"];
            snake_head.style.marginLeft = `${snake_marginLeft}px`;

        }
        
        CheckMargins();
    }

    

    
}, 50)

function CheckMargins(){
    if (snake_marginTop == food_marginTop && snake_marginLeft == food_marginLeft){
        ChangeMarginFood();
        score_int++;
        score.innerHTML = score_int;
        AppendSnakeItem();
    }

    console.log(food_marginTop);
    console.log(food_marginLeft);
    console.log();
}

function ChangeMarginFood(){

    for (let x = 0; x < 2; x++){
        randomNumber = Math.floor(Math.random()*21);
        food_marginTop = availableValuesPixels[randomNumber];
        food.style.marginTop = `${food_marginTop}px`;

        randomNumber = Math.floor(Math.random()*21);
        food_marginLeft = availableValuesPixels[randomNumber];
        food.style.marginLeft = `${food_marginLeft}px`;
    }

    if (food_marginLeft == undefined || food_marginTop == undefined){
        ChangeMarginFood();
    }
}

function AppendSnakeItem(){
    var item = document.createElement("div");
    item.classList.add("snake-body");
    item.classList.add("item");
    game_field.append(item);
    item.classList.add("hidden");
    DrawBackgroundItems();
}

function DrawBackgroundItems(){
    snake_head.style.background = gameData["snake-head-color"]
    for (let x = 2; x < snake_elements.length; x++) {
        snake_elements[x].style.background = gameData["snake-body-color"];
    }
}

function SetMargin(){
    
    for (let x = 1; x < snake_elements.length-1; x++){
        snake_elements[snake_elements.length-x].style.marginTop = snake_elements[snake_elements.length-(x+1)].style.marginTop;
        snake_elements[snake_elements.length-x].style.marginLeft = snake_elements[snake_elements.length-(x+1)].style.marginLeft;
    }  
    snake_elements[snake_elements.length-1].classList.remove("hidden");
}

document.querySelector(".body_page").addEventListener("keydown", function(event){
    key = event.key;
});