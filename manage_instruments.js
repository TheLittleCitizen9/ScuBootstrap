var halil = {
    description: "חליל יפה",
    id: 1,
    imagePath: "halil.jpg",
    instrumentOrders: null,

    instrumentType: {id:1, name:"נשיפה"},
    name: "חליל",
    price: 50,
    typeID: 1
}

var chromonica = {
    description: "מפוחית יפה",
    id: 2,
    imagePath: "chromonica.jpg",
    instrumentOrders: null,

    instrumentType: {id:1, name:"נשיפה"},
    name: "מפוחית",
    price:35,
    typeID: 1
}
var hatzotzra = {
    description: "חצוצרה ארוכה",
    id: 3,
    imagePath: "hatzotzra.jpg",
    instrumentOrders: null,

    instrumentType: {id:1, name:"נשיפה"},
    name: "חצוצרה",
    price:1500,
    typeID: 1
}
var trombon = {
    description: "טרומבון קטן",
    id: 4,
    imagePath: "trombon.jpg",
    instrumentOrders: null,

    instrumentType: {id:1, name:"נשיפה"},
    name: "טרומבון",
    price:2400,
    typeID: 1
}
var klarinet = {
    description: "קלרינט רועש",
    id: 5,
    imagePath: "klarinet.jpg",
    instrumentOrders: null,

    instrumentType: {id:1, name:"נשיפה"},
    name: "קלרינט",
    price:1400,
    typeID: 1
}
var violin = {
    description: "כינור קטן",
    id: 6,
    imagePath: "",
    instrumentOrders: null,

    instrumentType: {id:1, name:"מיתר"},
    name: "2כינור",
    price:2300,
    typeID: 1
}

var allInstruments = [halil, chromonica, hatzotzra, trombon, klarinet, violin]
var instrumentsCurrentShowing = [halil, chromonica, hatzotzra, trombon, klarinet, violin]
var tempInstruments = []
var filteredByTypeInstruments = []
var filteredByTextInstruments = []
var filteredByPriceInstruments = []

window.onload = function() {
    allInstruments.forEach(showOnSite)
}

function showOnSite(instrument){
    var instrumentElement = "<div class='text-center col-md-3 border rounded mx-2'>"
    instrumentElement += "<div class='row'>"
    instrumentElement += " <div class='pic'>" + "<img src=" + instrument.imagePath + " class='img-fluid' alt='לא קיימת תמונה'></div></div>"
    instrumentElement += "<div class='row'>"
    instrumentElement += "<div class='col-12'>"
    instrumentElement += "<div class='product'>" + instrument.name+ "</div>"
    instrumentElement += "<div class='description'>" + instrument.description +"</div>"
    instrumentElement += "<div class='price'>" + instrument.price + 'ש"ח</div>'
    instrumentElement += "</div></div>"
    instrumentElement += "<div class='row'>"
    instrumentElement += "<div class='add-to-cart'>"
    instrumentElement += "<button type='button' class='btn btn-cart btn-sm'>הוספה לעגלה<img src= 'shopping_cart.png'" +" class='img-fluid float-right' alt='Responsive image'></button>"
    instrumentElement += "</div></div></div>"

    document.getElementById("instruments").innerHTML += instrumentElement
}


function filterInstruments(){
    filterByType()
    filterByText()
    filterByPrice()
    filteredByTypeInstruments = filteredByTypeInstruments.filter(value => filteredByTextInstruments.indexOf(value) !== -1)

    
    filteredByTypeInstruments = filteredByTypeInstruments.filter(value => filteredByPriceInstruments.indexOf(value) !== -1)
    
    document.getElementById("instruments").innerHTML = ""
    filteredByTypeInstruments.forEach(showOnSite)
}

function filterByType(){
    filteredByTypeInstruments = []
    var a = document.getElementById("dropdown")
    var t = a.options[a.selectedIndex].text
    allInstruments.forEach(function(instrument){
        if(t == instrument.instrumentType.name){
            filteredByTypeInstruments.push(instrument)
        }else if(t == "סוג כלי נגינה"){
            filteredByTypeInstruments.push(instrument)
        }
    })
}

function filterByText(){
    filteredByTextInstruments = []
    var t = document.getElementById("search").value
    allInstruments.forEach(function(instrument){
        if(instrument.name.includes(t)){
            filteredByTextInstruments.push(instrument)
    }})
}

function filterByPrice(){
    filteredByPriceInstruments = []
    if(document.getElementById("checkbox1").checked){
        allInstruments.forEach(function(instrument){
            if(instrument.price < 500){
                filteredByPriceInstruments.push(instrument)
            }
        })
    }else if(document.getElementById("checkbox2").checked){
        allInstruments.forEach(function(instrument){
            if(instrument.price >= 500 && instrument.price < 1000){
                filteredByPriceInstruments.push(instrument)
            }
        })
    }else if(document.getElementById("checkbox3").checked){
        allInstruments.forEach(function(instrument){
            if(instrument.price > 1000 && instrument.price <= 1500){
                filteredByPriceInstruments.push(instrument)
            }
        })
    }else if(document.getElementById("checkbox4").checked){
        allInstruments.forEach(function(instrument){
            if(instrument.price > 1500 && instrument.price <= 2000){
                filteredByPriceInstruments.push(instrument)
            }
        })
    }else if(document.getElementById("checkbox5").checked){
        allInstruments.forEach(function(instrument){
            if(instrument.price > 2000){
                filteredByPriceInstruments.push(instrument)
            }
        })
    }else{
        allInstruments.forEach(function(instrument){
            showOnSite(instrument)
            filteredByPriceInstruments.push(instrument)
        })
    }
}