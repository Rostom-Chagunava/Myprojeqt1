
let containerSearch = document.getElementsByClassName("container")
// სათაურები///

let adultTitel = document.getElementById("adult")
let divHidenadult = document.getElementsByClassName("div-hiden")
// 
let titelChild = document.getElementById("titel-child")
let childDivhidden = document.getElementsByClassName("child-divhidden")
// 
let titelPoetry = document.getElementById("titel-poetry")
let poetryDivhidden = document.getElementsByClassName("poetry-divhidden")
// 
let titelLangauge = document.getElementById("titel-langauge")
let poetryLanguage = document.getElementsByClassName("language-divhidden")
// 
let bool = true
// adult/////
adultTitel.addEventListener("click", function(){
    bool =!bool
    for(let i =0;i<divHidenadult.length;i++){
          if(bool == false){
                divHidenadult[i].style.display = "grid"
            }else{
                divHidenadult[i].style.display = "none"
            }
        }
})
// child//
titelChild.addEventListener("click",function(){
    bool =!bool
    for(let i =0;i<childDivhidden.length;i++){
        if(bool == false){
            childDivhidden[i].style.display = "grid"
          }else{
            childDivhidden[i].style.display = "none"
          }
      }
} )
// poetry//
titelPoetry.addEventListener("click",function(){
    bool =!bool
    for(let i =0;i<poetryDivhidden.length;i++){
        if(bool == false){
            poetryDivhidden[i].style.display = "grid"
          }else{
            poetryDivhidden[i].style.display = "none"
          }
      }
} )

// language///
titelLangauge.addEventListener("click",function(){
    bool =!bool
    for(let i =0;i<poetryLanguage.length;i++){
        if(bool == false){
            poetryLanguage[i].style.display = "grid"
          }else{
            poetryLanguage[i].style.display = "none"
          }
      }
} )
// *********************************////
// მენიუ//************-------------********* */
let AdultMenu = document.getElementsByClassName("Adult")
let ChildMenu = document.getElementsByClassName("Child")
let PoetryMenu = document.getElementsByClassName("Poetry")
let LanguageMenu = document.getElementsByClassName("Language")
// 
let adultSection = document.getElementById("adult")
let childtSection = document.getElementById("child")
let poetrytSection = document.getElementById("poetry")
let langaugeSection = document.getElementById("langauge")
// adult
for(let i =0; i < AdultMenu.length;i++){
    AdultMenu[i].addEventListener("click",function(){
    for(let i =0;i<divHidenadult.length;i++){
        divHidenadult[i].style.display = "grid"
    }
    adultSection.style.display = "grid"
    childtSection.style.display = "none"
    poetrytSection.style.display = "none"
    langaugeSection.style.display = "none"
})
}

// child // 
for (let i = 0;i < ChildMenu.length;i++ ){
    ChildMenu[i].addEventListener("click",function(){
    for(let i =0;i<childDivhidden.length;i++){
        childDivhidden[i].style.display = "grid"
    }
    childtSection.style.display = "grid"
    adultSection.style.display = "none"
    poetrytSection.style.display = "none"
    langaugeSection.style.display = "none"
})
}

///
for (let i = 0;i < PoetryMenu.length;i++){
    PoetryMenu[i].addEventListener("click",function(){
        for(let i =0;i<poetryDivhidden.length;i++){
            poetryDivhidden[i].style.display = "grid"
        }
        poetrytSection.style.display = "grid"
        adultSection.style.display = "none"
        childtSection.style.display = "none"
        langaugeSection.style.display = "none"
    })
}
    
///////
for (let i = 0;i < LanguageMenu.length;i++){
    LanguageMenu[i].addEventListener("click",function(){
    for(let i =0;i<poetryLanguage.length;i++){
        poetryLanguage[i].style.display = "grid"
    }
    langaugeSection.style.display = "grid"
    adultSection.style.display = "none"
    childtSection.style.display = "none"
    poetrytSection.style.display = "none"
})
}

///////////////
//  მენიუ////

let manu = document.getElementById("navbar")
let nav = document.getElementById("nav") 
// 
let nav1 = document.getElementById("nav1")

// -----
let Adult = document.getElementById("Adult")
let Child = document.getElementById("Child")
let Poetry = document.getElementById("Poetry")
let Language = document.getElementById("Language")
// 

let ismanu = true
manu.addEventListener("click", function(){
    ismanu = !ismanu
    if(ismanu == true){
       nav.style.left = "-100%" 
    }else{
        nav.style.left = "0%"
    }
})

// ///******* გვერდი1-2*****///// */
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
// 
let button11 = document.getElementById("button1-1")
let button22 = document.getElementById("button2-2")
// 
button22.addEventListener("click", function(){
    adultSection.style.display = "none"
    childtSection.style.display = "none"
    poetrytSection.style.display = "grid"
    langaugeSection.style.display = "grid"
    button2.style.display = "block"
    button1.style.display = "none"
})

button11.addEventListener("click",function(){
    poetrytSection.style.display = "none"
    langaugeSection.style.display = "none"
    adultSection.style.display = "grid"
    childtSection.style.display = "grid"
    button1.style.display = "block"
    button2.style.display = "none"
})
///ძებნა -------------------------- ///
let faSolid = document.getElementsByClassName("fa-solid")
let allDiv = document.getElementsByClassName("div")
// 
let search = document.getElementById("search")
let btnSearch = document.getElementById("btnsearch")
let div = document.getElementsByClassName("alldiv")
let serchSection = document.getElementById("clasofsearch")
let searchDiv = document.getElementsByClassName("searchdiv")
// --------
btnSearch.addEventListener("click",function(){
    nav1.style.display = "none"
    serchSection.innerHTML = ""
    for(let i = 0;i < div.length;i++){
        let mtList = div[i].classList
        if(mtList[1].includes(search.value)){
            let serchdiv = document.createElement("div")
            serchdiv.classList.add("div")
            // serchdiv.classList.add("searchdiv")
            let serchI = document.createElement("i")
            serchI = div[i].querySelector("i")
            let serchPimg = document.createElement("p")
            serchPimg.classList.add("searchpimage")
            let serchImage = document.createElement("img")
            serchImage.classList.add("serachimage")
            serchPimg.appendChild(serchImage)
            let searchPrise = document.createElement("p")
            searchPrise.classList.add("searchprise")
            let searchPavtori = document.createElement("p")
            searchPavtori.classList.add("searchavtori")
            let searchPdasaxeleba = document.createElement("p")
            searchPdasaxeleba.classList.add("searchdasaxeleba")
            let searchPabout = document.createElement("p")
            serchImage.src = div[i].querySelector("img").src
            searchPrise = div[i].querySelector("#pasi")
            searchPavtori = div[i].querySelector("#avtori")
            searchPdasaxeleba = div[i].querySelector("#dasaxeleca")
            searchPabout = div[i].querySelector("#shesaxeb")
            serchdiv.appendChild(serchI)
            serchdiv.appendChild(serchPimg)
            serchdiv.appendChild(searchPrise)
            serchdiv.appendChild(searchPavtori)
            serchdiv.appendChild(searchPdasaxeleba)
            serchdiv.appendChild(searchPabout)
            serchSection.appendChild(serchdiv)
        }
    }
    serchSection.style.display = "flex"
    adultSection.style.display = "none"
    childtSection .style.display = "none"
    poetrytSection.style.display = "none"
    langaugeSection.style.display = "none"  
    button1.style.display = "none"
    search.value= ""
})
// // ////// აღწერა ///
let description = document.getElementById("description")
let more = document.getElementById("more")
let about = document.getElementById("about")
let exitDesctiption = document.getElementById("exit1")
// -----------------////
exitDesctiption.addEventListener("click",function(){
    for(let i = 0;i < div.length;i++){
        div[i].style.display = "grid"
    }
    description.style.display = "none"
})
about.addEventListener("click", function(){
    about.style.display = "none"
})
more.addEventListener("click", function(){
    about.style.display = "flex"
})
for (let i =0;i< allDiv.length;i++){
    allDiv[i].addEventListener("click", function(){
        description.style.display = "grid"
        description.querySelector("img").src = allDiv[i].querySelector("img").src
        description.querySelector("#avtor").innerHTML= allDiv[i].querySelector("#avtori").innerHTML
        description.querySelector("#prise").innerHTML= allDiv[i].querySelector("#pasi").innerHTML
        description.querySelector("#name").innerHTML= allDiv[i].querySelector("#dasaxeleca").innerHTML
        description.querySelector("#about").innerHTML= allDiv[i].querySelector("#shesaxeb").innerHTML
    })
}

// ----------------------/////
// /// კალათა /// 
let btnBuy = document.getElementById("buy")
// 
let cart = document.getElementById("shopping")
let shoppingDiv = document.getElementById("shoppingdiv")
// ///
let addtocart = document.getElementsByClassName("addtocart")

let containerShop = document.getElementById("container-shop")
let sumPrise = document.getElementById("sum-prise")
let sumNum = document.getElementById("sum-num")
let child1 = document.getElementsByClassName("child1")
// /--------////
let cartNum = document.getElementsByClassName("cartnum")
let cartsum = document.getElementById("num")
let Cartnum = 0
// ****/////
let numpx = 150
var Prise = 0
let suMnum = 0

for(let i = 0; i < addtocart.length;i++){
    addtocart[i].addEventListener("click", function(){ 
        for(let i = 0;i < div.length;i++){
            div[i].style.display = "grid"
        }
        Cartnum ++
        cartNum[0].style.display = "block"
        cartsum.innerHTML = Cartnum
        numpx += 80

        let divCont = document.createElement("div")
        divCont.classList.add("child1")
        let img = document.createElement("img")
        let num = document.createElement("p")
        let prise = document.createElement("p")
        let autor = document.createElement("p")
        autor.classList.add("shopautor")
        let del = document.createElement("p")
        del.classList.add("shopdel")

        num.innerHTML = "1"
        prise.innerHTML = description.querySelector("#prise").innerHTML
        del.innerHTML = "x"
        img.src = description.querySelector("img").src
        img.width = "50"
        autor.innerHTML = description.querySelector("#avtor").innerHTML

        divCont.appendChild(img)
        divCont.appendChild(autor)
        divCont.appendChild(num)
        divCont.appendChild(prise)
        divCont.appendChild(del)
        
        containerShop.appendChild(divCont)
        // 
        let num1 = child1.length-1
        for(let i = 0;i < child1.length-1;i++){
        var child2 = child1[i].querySelectorAll("p")
            if(child1[i].querySelector("p").innerHTML  == child1[num1].querySelector("p").innerHTML ){
                child2[1].textContent = Number(child2[1].innerHTML)+1;
                containerShop.removeChild(child1[num1]);
                numpx -= 70
            }
        }

        Prise += Number(description.querySelector("#prise").innerHTML)
        suMnum += 1
        sumPrise.innerHTML = Prise 
        sumNum.innerHTML = suMnum

        del.addEventListener("click", function(){ 
            if(num.innerHTML >= 1){
                num.innerHTML -=1
                sumNum.innerHTML -=1 
                Cartnum -=1
                cartsum.innerHTML = Cartnum
                sumPrise.innerHTML -= del.previousElementSibling.innerHTML
            }else{
                num.innerHTML -=1
                containerShop.removeChild(del.parentElement)
                numpx -= 80
                shoppingDiv.style.height = numpx + "px"
            }         
            
            if(cartsum.innerHTML == 0){
                cartNum[0].style.display = "none"
            }
        })
    })

}


// 
let isShopping = true
cart.addEventListener("click", function(){
    isShopping = !isShopping
    if(isShopping == false){
        shoppingDiv.style.padding = "8px 10px 10px 10px"
        shoppingDiv.style.height = numpx + "px"
    }else{
        shoppingDiv.style.height = "0"
        shoppingDiv.style.padding = "0"
    }
})
// **/*/* slide/*//*
let LeftButton = document.getElementById("left")
let container = document.getElementsByClassName("slide-child-container")
let RightButton = document.getElementById("right")
let Div = document.getElementsByClassName("div")
let test = document.getElementsByClassName("container")[0].children;
let num = -840

LeftButton.addEventListener("click", function(){
    butL()
})

setInterval(butL,1000)

RightButton.addEventListener("click" , function(){
    butR()
})


function butR(){
    num -=50    
    container[0].style.right = num + "px"
    if(num < -1510){
        RightButton.style.display = "none"
        num = -840
    }else if(num >-1510){
        LeftButton.style.display = "block"
    }
}

function butL(){
    num +=50 
    container[0].style.right = num + "px"     
    if(num  > -170){
        num = -1030
        LeftButton.style.display = "none"
    }else{
        RightButton.style.display = "flex"
    }
}

// 
// სარეგისტრაციო//*/*/**/*/* */
// 
let personIcon = document.getElementsByClassName("log-in")
let exit = document.getElementsByClassName("log-aut")
let userName = document.getElementById("username")
let registDiv = document.getElementsByClassName("regist")
let person = document.getElementsByClassName("person")
let spanLog = document.getElementById("in-aut")


// date of Register ==== ==

let reName = document.getElementById("re-name")
let reSurname = document.getElementById("re-surname")
let reEmail = document.getElementById("re-email")
let rePassword = document.getElementById("re-password")

let rName = document.getElementById("rname")
let rSurname = document.getElementById("rsurname")
let rEmail = document.getElementById("remail")
let rPassword = document.getElementById("rpassword")

let formRegister = document.getElementById("register")


// date of Log in  ======
let logName = document.getElementById("log-name")
let logSurname = document.getElementById("log-surname")
let logEmail = document.getElementById("log-email")
let logpassword = document.getElementById("log-password")

let lName = document.getElementById("lname")
let lEmail = document.getElementById("lemail")
let lPassword = document.getElementById("lpassword")

let formLogin = document.getElementById("log-in")



let isregister = true
for (let i = 0;i < personIcon.length;i++){
    personIcon[i].addEventListener("click", function(){
    isregister =! isregister
    if (isregister == false){
        console.log(isregister)
        registDiv[0].style.display = "flex"
    }else{
        registDiv[0].style.display = "none"
    }
    
 })
}
// /=============

function personDate(name,surname,email,password){
    this.name = name
    this.surname = surname
    this.email = email
    this.password = password
}

let myArr = []

function register(){
    if(reName.value == ""){
        reName.style.backgroundColor = "red"
        formRegister.style.boxShadow = "0 0 10px red"
        rName.innerHTML = "Enter your name!!!"
        rName.style.color = "red"
    }else if(reSurname.value == ""){
        reSurname.style.backgroundColor = "red"
        formRegister.style.boxShadow = "0 0 10px red"
        rSurname.innerHTML = "Enter your surname!!!"
        rSurname.style.color = "red"
    }else if(reEmail.value == ""){
        reEmail.style.backgroundColor = "red"
        formRegister.style.boxShadow = "0 0 10px red"
        rEmail.innerHTML = "Enter your Email!!!"
        rEmail.style.color = "red"
    }else if(rePassword.value == ""){
        rePassword.style.backgroundColor = "red"
        formRegister.style.boxShadow = "0 0 10px red"
        rPassword.innerHTML = "Enter your password!!!"
        rPassword.style.color = "red"
    }else{
        let person = new personDate(reName.value,reSurname.value,reEmail.value,rePassword.value)
        myArr.push(person)
        console.log(myArr)

        reName.style.backgroundColor = "#ffffff"
        formRegister.style.boxShadow = "0 0 10px black"
        rName.innerHTML = ""
        rName.style.color = "red"

        reSurname.style.backgroundColor = "#ffffff"
        formRegister.style.boxShadow = "0 0 10px black"
        rSurname.innerHTML = ""
        rSurname.style.color = "red"

        reEmail.style.backgroundColor = "#ffffff"
        formRegister.style.boxShadow = "0 0 10px black"
        rEmail.innerHTML = ""
        rEmail.style.color = "red"

        rePassword.style.backgroundColor = "#ffffff"
        formRegister.style.boxShadow = "0 0 10px black"
        rPassword.innerHTML = ""
        rPassword.style.color = "red"

        reName.value = ""
        reSurname.value = ""
        reEmail.value = ""
        rePassword.value = ""

        logName.value = ""
        logEmail.value = ""
        logpassword.value = ""

        formRegister.style.display = "none"
        formLogin.style.display = "flex"
    }
}

// ====== log in/   

function login(){
    if(logName.value == ""){
        logName.style.backgroundColor = "red"
        formLogin.style.boxShadow = "0 0 10px red"
        lName.innerHTML = "Enter your name!!!"
        lName.style.color = "red"
    }else if(logEmail.value == ""){
        logEmail.style.backgroundColor = "red"
        formLogin.style.boxShadow = "0 0 10px red"
        lEmail.innerHTML = "Enter your Email!!!"
        lEmail.style.color = "red"
    }else if(logpassword.value ==""){
        logpassword.style.backgroundColor = "red"
        formLogin.style.boxShadow = "0 0 10px red"
        lPassword.innerHTML = "Enter your Password!!!"
        lPassword.style.color = "red"
    }else{

        logName.style.backgroundColor = "#ffffff"
        formLogin.style.boxShadow = "0 0 10px black"
        lName.innerHTML = ""
        lName.style.color = "red"

        logEmail.style.backgroundColor = "#ffffff"
        formLogin.style.boxShadow = "0 0 10px black"
        lEmail.innerHTML = ""
        lEmail.style.color = "red"

        logpassword.style.backgroundColor = "#ffffff"
        formLogin.style.boxShadow = "0 0 10px black"
        lPassword.innerHTML = ""
        lPassword.style.color = "red"

        for(let i = 0;i<myArr.length;i++){
            if(myArr[i].name == logName.value){
                lName.innerHTML = ""
                if(myArr[i].email == logEmail.value){
                    lEmail.innerHTML = ""
                    if(myArr[i].password == logpassword.value){ 
                        lPassword.innerHTML = ""
                        userName.innerHTML = myArr[i].name
                        person[0].style.visibility = "visible"
                        registDiv[0].style.display = "none"
                        personIcon[1].style.display = "none"
                        exit[0].style.display = "block"

                        logName.value = ""
                        logEmail.value = ""
                        logpassword.value = ""
                    }else{
                        lPassword.innerHTML = "The Password is incorrect!!!"
                    }
                }else{
                    lEmail.innerHTML = "The Email is incorrect!!!"
                }
            }else{
                lName.innerHTML = "The Name is incorrect!!!"
            }
        }

    }
    
}



function Register(){
    formLogin.style.display = "flex"
    formRegister.style.display = "none"
}

function Login(){
    formLogin.style.display = "none"
    formRegister.style.display = "flex"
}

exit[0].addEventListener("click", function(){
    userName.innerHTML = ""
    person[0].style.visibility = "hidden"
    exit[0].style.display = "none"
    personIcon[1].style.display = "block"
})

// 

btnBuy.addEventListener("click", function(){

    if (userName.innerHTML == ""){
        var ansver = confirm("გთხოვთ გაიაროთ რეგისტრაცია.!")
    }
    if (ansver){
        registDiv[0].style.display = "flex"
    }else{
        registDiv[0].style.display = "none"
    }
})


// **/*/*/**

let homePage = document.getElementsByClassName("titel")

homePage[0].addEventListener("click", function(){
    adultSection.style.display = "grid"
    childtSection.style.display = "grid"
    poetrytSection.style.display = "none"
    langaugeSection.style.display = "none"
    serchSection.style.display = "none"
    button1.style.display = "block"
    shoppingDiv.style.height = "0"
    shoppingDiv.style.padding = "0"
    description.style.display = "none"
    registDiv[0].style.display = "none"
})

