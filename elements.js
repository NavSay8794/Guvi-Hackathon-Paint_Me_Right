window.addEventListener('load', function() {
    homePage()
})

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

// var counter = 0

// if (counter == 0) {
//     homePage()
// }



let countDownLoader = () =>{
    counter = 1
    document.body.innerHTML = ''
    var divC = document.createElement("DIV")
    divC.setAttribute("class", "countdownTimer")
    document.body.appendChild(divC);

    var innerHeading = document.createElement('h1')
    innerHeading.setAttribute('id' , 'change')
    document.querySelector('.countdownTimer').appendChild(innerHeading)

    var innerH1 = document.getElementById('change')
    countdown(innerH1)
}


let countdown = (h1) =>{
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
}

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
    levelName.innerText = 'Level 1'

    var score = document.querySelector('.idiv1d1x')
    score.innerHTML = 'Score: <span class = "score">0</span>'
    
    
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
    var circle1 = document.getElementById('cir1')

    var circ2 = document.createElement("DIV")
    circ2.setAttribute("id", "cir2")
    document.querySelector('.idiv2d1x').appendChild(circ2);
    var circle2 = document.getElementById('cir2')

    var circ3 = document.createElement("DIV")
    circ3.setAttribute("id", "cir3")
    document.querySelector('.idiv2d1x').appendChild(circ3);
    var circle3 = document.getElementById('cir4')

    var circ4 = document.createElement("DIV")
    circ4.setAttribute("id", "cir4")
    document.querySelector('.idiv2d1x').appendChild(circ4);
    var circle4 = document.getElementById('cir4')



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
    document.getElementById('color1').appendChild(butt1)

    let color2 = document.createElement("DIV")
    color2.setAttribute("id", "color2")
    document.querySelector('#palate').appendChild(color2);
    var butt2 = document.createElement('button')
    butt2.setAttribute('id' , 'butt2')
    document.getElementById('color2').appendChild(butt2)

    let color3 = document.createElement("DIV")
    color3.setAttribute("id", "color3")
    document.querySelector('#palate').appendChild(color3);
    var butt3 = document.createElement('button')
    butt3.setAttribute('id' , 'butt3')
    document.getElementById('color3').appendChild(butt3)

    let color4 = document.createElement("DIV")
    color4.setAttribute("id", "color4")
    document.querySelector('#palate').appendChild(color4);
    var butt4 = document.createElement('button')
    butt4.setAttribute('id' , 'butt4')
    document.getElementById('color4').appendChild(butt4)

    let color5 = document.createElement("DIV")
    color5.setAttribute("id", "color5")
    document.querySelector('#palate').appendChild(color5);
    var butt5 = document.createElement('button')
    butt5.setAttribute('id' , 'butt5')
    document.getElementById('color5').appendChild(butt5)

    let color6 = document.createElement("DIV")
    color6.setAttribute("id", "color6")
    document.querySelector('#palate').appendChild(color6);
    var butt6 = document.createElement('button')
    butt6.setAttribute('id' , 'butt6')
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