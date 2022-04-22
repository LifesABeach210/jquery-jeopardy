localStorage.setItem("storageScore", "");


let questions100Us=[];
let questions200=[];
let questions300 = [];
let questions400 = [];
let questions500 = [];
let isLoading = true;
let score =null;
let answerBox = $(`<div id = "Abox"><input type = "text" id = "answerBox"></input><button type = "button" class = "btn-lg btn-primary" id = "Btn1" onClick='answer()'> </button></div>`);
// let displayQuestion300 = $(`<div><p id = "q300">${questions300.question}</p></div>`)
// let displayQuestion400 = $(`<div><p id = "q400">${questions400.question}</p></div>`)
// let displayQuestion500 = $(`<div><p id = "q500">${questions500.question}</p></div>`)
let newBody = $(`<body id = "body2"></body>`)
let title = $(`<div id = "titleBox"><h2>Jeopardy</h2></div><div><h2 id = "ScoreM">Your Score:$</h2></div>`);
let body = $("#divContent");
let GV_CURRENT_QUESTION=null;
body.append(title);

const gameBox = $(`<div id = "gameBoxGame"></div>`);
body.append(gameBox);

for (let i = 0; i < 5; i++) {
    const id = "G100_"+i;
   
    const Jep100 = $(`<div class = "GameBox" id = "G100"+i>$100</div>`)
    gameBox.append(Jep100);
   //  $("#G100_"+id).click(boxClick(100, i));

}
click = false;

for (let i = 0; i < 5; i++) {
    const id = "G200_"+i;
    //$("#"+id).click(()=>boxClick(100, i));
    const Jep200 = $(`<div class = "GameBox" id  = "G200"+i>$200</div>`)
    gameBox.append(Jep200);
  //  $("#G200_"+id).click(boxClick(100, i));
}

for (let i = 0; i < 5; i++) {
    const Jep300 = $(`<div class = "GameBox" id = "G300">$300</div>`)
    gameBox.append(Jep300);
}

for (let i = 0; i < 5; i++) {
    const Jep400 = $(`<div class = "GameBox" id = "G400">$400</div>`)
    gameBox.append(Jep400);
}

for (let i = 0; i < 5; i++) {
    const Jep500 = $(`<div class = "GameBox" id = "G500">$500</div>`)
    gameBox.append(Jep500)
};

body.append(answerBox);


let game100 = document.querySelectorAll("#G100");
   for (let i = 0; i < game100.length; i++) {
    let game10 = game100[i]
    game10.addEventListener('click',function(){
        if(GV_CURRENT_QUESTION)
        {
             alert("Answer the question first");
             return;
        }GV_CURRENT_QUESTION = getQuestion(100);
        let displayQuestion100 = $(`<div><p id = "q100">${JSON.stringify(GV_CURRENT_QUESTION.question)}</p></div>`)

        body.append(displayQuestion100);
       
        // console.log(GV_CURRENT_QUESTION);
        // alert(JSON.stringify(GV_CURRENT_QUESTION));
        // $("#divQuestion").html(GV_CURRENT_QUESTION.question);
      //  alert(question.question);
    //    console.log("QQQ", question);
        //console.log ("IDX", evt.target.value);
  if(game10.style.color ="white" ){
      game10.style.color = "black";

    }})};
  
  let game200 = document.querySelectorAll("#G200");
  for (let i = 0; i < game200.length; i++) {
    let game20 = game200[i]
    game20.addEventListener('click',function(){
        if(GV_CURRENT_QUESTION)
        {
            alert("Answer the question first")
            return;
        }
        GV_CURRENT_QUESTION = getQuestion(200);

        let displayQuestion200 = $(`<div><p id = "q100">${JSON.stringify(GV_CURRENT_QUESTION)}</p></div>`)
        body.append(displayQuestion200);
        
        if(game20.style.color ="white" ){
            game20.style.color = "black";
        }})};
  
  
  
  
  let game300 = document.querySelectorAll("#G300");
  for (let i = 0; i < game300.length; i++) {
   let game30 = game300[i]
   game30.addEventListener('click',function(){
    if(GV_CURRENT_QUESTION)
    {
        alert("Answer the question first")
        return;
    }
    GV_CURRENT_QUESTION = getQuestion(300);
    let displayQuestion300 = $(`<div><p id = "q100">${JSON.stringify(GV_CURRENT_QUESTION)}</p></div>`)
    body.append(displayQuestion300);
    if(game30.style.color ="white" ){
        game30.style.color = "black";
    }})};
  
 
  
  
  let game400 = document.querySelectorAll("#G400");
  for (let i = 0; i < game400.length; i++) {
  let game40 = game400[i]
  game40.addEventListener('click',function(){
    if(GV_CURRENT_QUESTION)
    {
        alert("Answer the question first")
        return;
    }
    GV_CURRENT_QUESTION = getQuestion(400);
    let displayQuestion400 = $(`<div><p id = "q100">${JSON.stringify(GV_CURRENT_QUESTION)}</p></div>`)
    body.append(displayQuestion400);
    if(game40.style.color ="white" ){
        game40.style.color = "black";
    }})}; 
  
  
  
  
  let game500 = document.querySelectorAll("#G500");
for (let i = 0; i < game500.length; i++) {
 let game50 = game500[i]
 game50.addEventListener('click',function(){
    if(GV_CURRENT_QUESTION)
    {
        alert("Answer the question first")
        return;
    }
    GV_CURRENT_QUESTION = getQuestion(500);
    let displayQuestion500 = $(`<div><p id = "q100">${JSON.stringify(GV_CURRENT_QUESTION)}</p></div>`)
    body.append(displayQuestion500)
    if(game50.style.color ="white" ){
        game50.style.color = "black";
    }})}; 


    // questions100[Math.floor(Math.random() * questions100.length).toFixed(0)];
    // currentQuestion = question.question;
    // questionAnswerDisplay.text(currentQuestion);

    // currentAnswer = question.answer;
    // currentQuestionValue = question.value;
    // console.log(currentAnswer);




async function load() {
   console.log("loading...");
    const JeopardyData = await fetch('jeopardy.json');
    let Data = await JeopardyData.json();
  //  console.log("DATA", Data);
//Data = questions100Us;
    for(let i in Data) {
        const element=Data[i];
        if(element.value== "$100")
        {
            questions100Us.push(element);
        }else if(element.value === "$200") {
            questions200.push(element);
        }else if(element.value === "$300") {
            questions300.push(element);
        }else if(element.value === "$400") {
            questions400.push(element);
        }else if(element.value === "$500") {
            questions500.push(element);
        console.log(questions500);
        };
    };
    isLoading=false;
    console.log("Q100", questions100Us)    

       
    };
  
    load();
    console.log(questions200);
// . $ 100   [0]=$, [1]=100

function answer ()
{
   // const ans = document.getElementById("answerBox").value;
    const ans = ($("#answerBox").val()+"").toUpperCase();
    if((GV_CURRENT_QUESTION.answer+"").toUpperCase() == ans)
    {
        const arr = (GV_CURRENT_QUESTION.value).split("$");
      
        console.log(arr);
      
        let val =  parseInt(arr[1]);
      
        alert("Right: "+  val);//Number VAL
      
        val = JSON.stringify(val);
       
      
      let storageScore = localStorage.getItem('storageScore');
      
      if(storageScore===null){
            localStorage.setItem('storageScore',val);
        if(!score){
             score = document.getElementById("ScoreM");
        }
      score.innerText = val;
      
      }else if (storageScore!==null) {
         val = Number(val);

        let val2 = localStorage.getItem('storageScore')

        let val3 = Number(val2)+val;

        localStorage.setItem('storageScore',val3.toString())
        if(!score){
            score = document.getElementById("ScoreM");
        }
        score.innerText ="Your Score$"+ val3;


  
 console.log(val2);
  

      }

    }else if((GV_CURRENT_QUESTION.answer+"").toUpperCase() !== ans) {
        alert("Wrong!!"+"The correct answer is"+" " +GV_CURRENT_QUESTION.answer);
    }
    GV_CURRENT_QUESTION=null;
    $("#divQuestion").html("");
    document.getElementById("q100").remove();
}
function getQuestion (id)
{
    //alert(id+ " - ");
    let arr=[];
    if(id==100)
        arr=questions100Us;
    else if(id==200)
        arr=questions200;
        else if(id==300)
        arr=questions300;
        else if(id==400)
        arr=questions400;
        else if(id==500)
        arr=questions500;
//alert(arr.length);
console.log(arr);
    const len = arr.length;
    const idx = Math.floor(Math.random() * len);
    const quest = arr[idx];
   // alert(JSON.stringify(quest));
    console.log("Question", quest);
    return quest;
    //console.log(arr);
}
