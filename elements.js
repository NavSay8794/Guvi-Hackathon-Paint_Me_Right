window.addEventListener('load', function() {
    homePage()
})

var enteredColors = []
var colorA, colorB, colorC, colorD;
var gameLives = 3
var level =1,
    scores =0 ;
var counter = 0

let homePage  = () =>{
    document.body.innerHTML = ''
    var divM = document.createElement("DIV")
    divM.setAttribute("class", "container")
    document.body.appendChild(divM);

    var brandElem = document.createElement("div")
    brandElem.setAttribute("class", "brand")
    document.querySelector('.container').appendChild(brandElem)

    var headingElem = document.createElement('h1')
    headingElem.setAttribute('id', 'heading')
    document.querySelector('.brand').appendChild(headingElem)
    var headingContent = document.querySelector('#heading')
    headingContent.innerText = 'Paint Me Right'

    var iconElem = document.createElement('div')
    iconElem.setAttribute('id', 'iconic')
    document.querySelector('.brand').appendChild(iconElem)
    var iconDivContent = document.querySelector('#iconic')
    iconDivContent.innerHTML = '<i class="fa fa-paint-brush" style="font-size:20px"></i><i class="fa fa-paint-brush" style="font-size:30px"></i><i class="fa fa-paint-brush"></i><i class="fa fa-paint-brush" style="font-size:50px;color:red"></i>'


    var startSection = document.createElement("div")
    startSection.setAttribute("class", "starting")
    document.querySelector('.container').appendChild(startSection)

    var startInnerDiv = document.createElement('div')
    startInnerDiv.setAttribute("class", "innerStart")
    document.querySelector('.starting').appendChild(startInnerDiv)

    var startButton = document.createElement('button')
    startButton.setAttribute('id', 'startButton')
    startButton.setAttribute('onclick', 'countDownLoader()')
    document.querySelector('.innerStart').appendChild(startButton)
    var button = document.querySelector('#startButton')
    button.innerHTML = "Let's Begin &nbsp <i class='fa fa-paint-brush'></i>"
}



// if (counter == 0) {
//     homePage()
// }



let countDownLoader = () =>{
    document.body.innerHTML = ''
    var divC = document.createElement("DIV")
    divC.setAttribute("class", "countdownTimer")
    document.body.appendChild(divC);

    var innerHeading = document.createElement('h1')
    innerHeading.setAttribute('id' , 'change')
    document.querySelector('.countdownTimer').appendChild(innerHeading)

    var h1 = document.getElementById('change')
    setTimeout(function(){
        h1.innerText = '3...'
        setTimeout(function(){
            h1.innerText = '2...'
            setTimeout(function(){
                h1.innerText = '1...'
                setTimeout(function(){
                    h1.innerText = 'And the Game Begins...'
                    setTimeout(function(){
                        // h1.innerText = 'And the Game Begins...'
                        document.body.innerHTML = ''
                        levels()
                    },1000)
                },1000)
            },1000)
        },1000)
    },0)
    // countdown(innerH1)
}


// let countdown = (h1) =>{
//     setTimeout(function(){
//         h1.innerText = '3...'
//         setTimeout(function(){
//             h1.innerText = '2...'
//             setTimeout(function(){
//                 h1.innerText = '1...'
//                 setTimeout(function(){
//                     h1.innerText = 'And the Game Begins...'
//                     setTimeout(function(){
//                         // h1.innerText = 'And the Game Begins...'
//                         document.body.innerHTML = ''
//                         levels()
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },0)
// }

let levels  = () =>{
    let l1div = document.createElement("DIV")
    l1div.setAttribute("class", "l1div")
    document.body.appendChild(l1div);

    let l1innerdiv1 = document.createElement("DIV")
    l1innerdiv1.setAttribute("class", "l1div1")
    document.querySelector('.l1div').appendChild(l1innerdiv1);

    let l1innerdiv2 = document.createElement("DIV")
    l1innerdiv2.setAttribute("class", "l1div2")
    document.querySelector('.l1div').appendChild(l1innerdiv2);

    let l1innerdiv3 = document.createElement("DIV")
    l1innerdiv3.setAttribute("class", "l1div3")
    document.querySelector('.l1div').appendChild(l1innerdiv3);


    //INNER DIV 1 elements
    let idiv1d1 = document.createElement("DIV")
    idiv1d1.setAttribute("class", "idiv1d1")
    document.querySelector('.l1div1').appendChild(idiv1d1);
    let idiv1d1x = document.createElement("DIV")
    idiv1d1x.setAttribute("class", "idiv1d1x")
    document.querySelector('.idiv1d1').appendChild(idiv1d1x);

    let idiv1d2 = document.createElement("DIV")
    idiv1d2.setAttribute("class", "idiv1d2")
    document.querySelector('.l1div1').appendChild(idiv1d2);
    let idiv1d2x = document.createElement("DIV")
    idiv1d2x.setAttribute("class", "idiv1d2x")
    document.querySelector('.idiv1d2').appendChild(idiv1d2x);

    let idiv1d3 = document.createElement("DIV")
    idiv1d3.setAttribute("class", "idiv1d3")
    document.querySelector('.l1div1').appendChild(idiv1d3);
    

    var lives = document.querySelector('.idiv1d3')
    lives.innerHTML = 'Lives:<i class="fa fa-heart" style="color:red; font-size:30px;"></i><i class="fa fa-heart" style="color:red; font-size:30px;"></i><i class="fa fa-heart" style="color:red; font-size:30px;"></i>'
    

    var levelName = document.querySelector('.idiv1d2x')
    levelName.innerText = 'Level ' +level

    var score = document.querySelector('.idiv1d1x')
    score.innerHTML = 'Score: <span class = "score">' +scores+'</span>'
    
    
    //INNER DIV 2 elements

    let idiv2d1 = document.createElement("DIV")
    idiv2d1.setAttribute("class", "idiv2d1")
    document.querySelector('.l1div2').appendChild(idiv2d1);

    let idiv2d1x = document.createElement("DIV")
    idiv2d1x.setAttribute("class", "idiv2d1x")
    document.querySelector('.idiv2d1').appendChild(idiv2d1x);
    
    //four circles
    var circ1 = document.createElement("DIV")
    circ1.setAttribute("id", "cir1")
    document.querySelector('.idiv2d1x').appendChild(circ1);
    

    var circ2 = document.createElement("DIV")
    circ2.setAttribute("id", "cir2")
    document.querySelector('.idiv2d1x').appendChild(circ2);
    

    var circ3 = document.createElement("DIV")
    circ3.setAttribute("id", "cir3")
    document.querySelector('.idiv2d1x').appendChild(circ3);
    

    var circ4 = document.createElement("DIV")
    circ4.setAttribute("id", "cir4")
    document.querySelector('.idiv2d1x').appendChild(circ4);
    


    let idiv2d2 = document.createElement("DIV")
    idiv2d2.setAttribute("class", "idiv2d2")
    document.querySelector('.l1div2').appendChild(idiv2d2);

    //color Palate

    let palatediv = document.createElement("DIV")
    palatediv.setAttribute("id", "palatediv")
    document.querySelector('.idiv2d2').appendChild(palatediv);

    let palate = document.createElement("DIV")
    palate.setAttribute("id", "palate")
    document.querySelector('#palatediv').appendChild(palate);


    //palate colors
    let color1 = document.createElement("DIV")
    color1.setAttribute("id", "color1")
    document.querySelector('#palate').appendChild(color1);
    var butt1 = document.createElement('button')
    butt1.setAttribute('id' , 'butt1')
    butt1.setAttribute('onclick' , 'applyColor(this.id)')
    document.getElementById('color1').appendChild(butt1)

    let color2 = document.createElement("DIV")
    color2.setAttribute("id", "color2")
    document.querySelector('#palate').appendChild(color2);
    var butt2 = document.createElement('button')
    butt2.setAttribute('id' , 'butt2')
    butt2.setAttribute('onclick' , 'applyColor(this.id)')
    document.getElementById('color2').appendChild(butt2)

    let color3 = document.createElement("DIV")
    color3.setAttribute("id", "color3")
    document.querySelector('#palate').appendChild(color3);
    var butt3 = document.createElement('button')
    butt3.setAttribute('id' , 'butt3')
    butt3.setAttribute('onclick' , 'applyColor(this.id)')
    document.getElementById('color3').appendChild(butt3)

    let color4 = document.createElement("DIV")
    color4.setAttribute("id", "color4")
    document.querySelector('#palate').appendChild(color4);
    var butt4 = document.createElement('button')
    butt4.setAttribute('id' , 'butt4')
    butt4.setAttribute('onclick' , 'applyColor(this.id)')
    document.getElementById('color4').appendChild(butt4)

    let color5 = document.createElement("DIV")
    color5.setAttribute("id", "color5")
    document.querySelector('#palate').appendChild(color5);
    var butt5 = document.createElement('button')
    butt5.setAttribute('id' , 'butt5')
    butt5.setAttribute('onclick' , 'applyColor(this.id)')
    document.getElementById('color5').appendChild(butt5)

    let color6 = document.createElement("DIV")
    color6.setAttribute("id", "color6")
    document.querySelector('#palate').appendChild(color6);
    var butt6 = document.createElement('button')
    butt6.setAttribute('id' , 'butt6')
    butt6.setAttribute('onclick' , 'applyColor(this.id)')
    document.getElementById('color6').appendChild(butt6)



    //start and check button
    let buttonArea= document.createElement('div')
    buttonArea.setAttribute('id', 'buttonArea')
    document.querySelector('.idiv2d2').appendChild(buttonArea)

    var starter = document.createElement('div')
    starter.setAttribute('id', 'starter')
    document.querySelector('#buttonArea').appendChild(starter)

    var beginGame = document.createElement('button')
    beginGame.setAttribute('id', 'beginbutton')
    beginGame.setAttribute('onclick' , 'startGame()')
    document.querySelector('#starter').appendChild(beginGame)
    var begin = document.getElementById('beginbutton')
    begin.innerText = "Start"


    //INNER DIV 3 elements
    let backToMain= document.createElement('div')
    backToMain.setAttribute('id', 'backToMain')
    document.querySelector('.l1div3').appendChild(backToMain)

    var backer = document.createElement('div')
    backer.setAttribute('id', 'backer')
    document.querySelector('#backToMain').appendChild(backer)

    var backButton = document.createElement('button')
    backButton.setAttribute('id', 'backbutton')
    backButton.setAttribute('onclick' , 'goToHome()')
    document.querySelector('#backer').appendChild(backButton)
    var goBack = document.getElementById('backbutton')
    goBack.innerText = "Go To home Page"
}

let goToHome = ()=>{
    homePage()
}

let startGame = ()=>{
    counter++
    var begin = document.getElementById('beginbutton')
    var circle1 = document.getElementById('cir1')
    var circle2 = document.getElementById('cir2')
    var circle3 = document.getElementById('cir3')
    var circle4 = document.getElementById('cir4')

     colorA = randomColorGen()
     colorB = randomColorGen()
     colorC = randomColorGen()
     colorD = randomColorGen()

    begin.innerText = 'Check'
    begin.setAttribute('onclick', 'checkResult(colorA,colorB,colorC,colorD)')

    circle1.style.backgroundColor = colorA
    circle2.style.backgroundColor = colorB
    circle3.style.backgroundColor = colorC
    circle4.style.backgroundColor = colorD

    if(counter == 1){
        colorDispTime(5000)
    }
    else if(counter == 2){
        colorDispTime(4500)
    }else if(counter == 3){
        colorDispTime(4000)
    }else if(counter == 4){
        colorDispTime(3500)
    }else if(counter == 5){
        colorDispTime(3000)
    }
    else if(counter == 6){
        colorDispTime(2500)
    }
    else if(counter == 7){
        colorDispTime(2000)
    }
    else if(counter == 8){
        colorDispTime(1500)
    }else {
        if(counter == 9){
        colorDispTime(1000)
        }
    }
}

var colorDispTime = (num) =>{
    var circle1 = document.getElementById('cir1')
    var circle2 = document.getElementById('cir2')
    var circle3 = document.getElementById('cir3')
    var circle4 = document.getElementById('cir4')
    setTimeout(() =>{
        circle1.style.backgroundColor = 'white'
        circle2.style.backgroundColor = 'white'
        circle3.style.backgroundColor = 'white'
        circle4.style.backgroundColor = 'white'

        enablePalete(colorA,colorB,colorC,colorD)
    },num)
}

let enablePalete = (c1,c2,c3,c4) =>{

    var btn1 = document.getElementById('butt1')
    var btn2 = document.getElementById('butt2')
    var btn3 = document.getElementById('butt3')
    var btn4 = document.getElementById('butt4')
    var btn5 = document.getElementById('butt5')
    var btn6 = document.getElementById('butt6')

    var buttons = [btn1,btn2,btn3,btn4,btn5,btn6]
    var colors = [c1,c2,c3,c4]
    var flag = true

    while(flag == true){
        var c5 = randomColorGen()
        var c6 = randomColorGen()
        if((c5 !=c1 && c6 !=c1) && (c5 !=c2 && c6 !=c2) && (c5 !=c3 && c6 !=c3) && (c5 !=c4 && c6 !=c4)){
            flag =false
            colors.push(c5)
            colors.push(c6)
        }else{
            continue
        }
    }
    var shuffledColors = colors.sort(() => Math.random() -0.5)
    
    for(let i = 0; i<buttons.length; i++){
        buttons[i].style.backgroundColor = shuffledColors[i]
    }
    
}

let applyColor =(element)=>{
   
    var cir1 = document.getElementById('cir1')
    var cir2 = document.getElementById('cir2')
    var cir3 = document.getElementById('cir3')
    var cir4 = document.getElementById('cir4')

    var elem = document.getElementById(element)
    let toCircle = elem.getAttribute('style')

    if(cir1.style.backgroundColor == 'white'){
        cir1.style = toCircle
        let temp = toRGB(cir1.style.backgroundColor) 
        enteredColors.push(RGBToHex(temp[0] , temp[1] , temp[2]))
    }
    else if(cir2.style.backgroundColor == 'white'){
        cir2.style = toCircle
        let temp = toRGB(cir2.style.backgroundColor) 
        enteredColors.push(RGBToHex(temp[0] , temp[1] , temp[2]))
    }
    else if(cir3.style.backgroundColor == 'white'){
        cir3.style = toCircle
        let temp = toRGB(cir3.style.backgroundColor) 
        enteredColors.push(RGBToHex(temp[0] , temp[1] , temp[2]))
    }
    else {
        if(cir4.style.backgroundColor == 'white'){
            cir4.style = toCircle
            let temp = toRGB(cir4.style.backgroundColor) 
            enteredColors.push(RGBToHex(temp[0] , temp[1] , temp[2]))
        }
    }
    
      console.log(enteredColors)
}


let checkResult =(a,b,c,d) =>{

    var initialColors = [a,b,c,d]
    let count = 0
    for(let i = 0; i< initialColors.length; i++){
        if(enteredColors[i] == initialColors[i]){
            count++
        }
    }
    console.log(count)
    let circle1 = document.getElementById('cir1')
    let circle2 = document.getElementById('cir2')
    let circle3 = document.getElementById('cir3')
    let circle4 = document.getElementById('cir4')
    circle1.style.backgroundColor = 'white'
    circle2.style.backgroundColor = 'white'
    circle3.style.backgroundColor = 'white'
    circle4.style.backgroundColor = 'white'

    var lives = document.querySelector('.idiv1d3')

    if(count<4){
        alert('Retry Again')
        enteredColors = []
        gameLives -=1
        if(gameLives == 2){
            lives.innerHTML ='Lives:<i class="fa fa-heart" style="color:red; font-size:30px;"></i><i class="fa fa-heart" style="color:red; font-size:30px;"></i>'
        }
        else if(gameLives ==1){
            lives.innerHTML ='Lives:<i class="fa fa-heart" style="color:red; font-size:30px;"></i>'

        }else{
            if(gameLives == 0){
                lives.innerHTML = 'Lives: '
                document.querySelector('.l1div2').innerHTML = '<h1 id="message">Your Lives Are Up ....Your Final Score is '  + scores +'<br> Heading Back to Main Page</h1>'
                setTimeout(() =>{
                    homePage()
                    enteredColors = []
                    gameLives = 3
                    level =1,
                    scores =0 ;
                    counter = 0     
                },3000);
            }
        }
    }
    else{
        if(count == 4){
            enteredColors = []
            scores +=10;
            level++
            var levelName = document.querySelector('.idiv1d2x')
            levelName.innerText = 'Level ' +level

            var score = document.querySelector('.idiv1d1x')
            score.innerHTML = 'Score: <span class = "score">' +scores+'</span>'
            var begin = document.getElementById('beginbutton')
            begin.innerText = 'Start'
            begin.setAttribute('onclick', 'startGame()')
        }
    }
}


function toRGB(str) {
    let sep = str.indexOf(",") > -1 ? "," : " ";
    return  str.substr(4).split(")")[0].split(sep).map(Number); 
}

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return ("#" + r + g + b).toUpperCase();
  }
let randomColorGen = () =>{
    var str = '0123456789ABCDEF'
    let randomCol = '#'

    for(let i =0; i< 6 ;i++){
        randomCol += str[Math.floor(Math.random()*16)]
    }
    return randomCol
}