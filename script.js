//HTML El references
var containerEl = $("#timeblox"); //document.querySelector("#timeblox")

var currentDay = moment().format("LLL")
$("#currentDay").text(currentDay);

var currentHour = moment().format("HH")
//functions
function buildBlox(){
    for (i=0; i<9; i++){
        var newRow = $("<div>").attr("class", "row")

        var newP = $("<p>").attr("class", "col-1 hour").text(i+9 + "AM")

        var gettingLocally = localStorage.getItem(i+9 + "AM");
        if(currentHour< i+9){
            var newText = $("<textarea>").attr("class", "col-10 future").attr("placeholder", "Type here").val(gettingLocally);
        }else if(currentHour == i+9){
            var newText = $("<textarea>").attr("class", "col-10 present").attr("placeholder", "Type here").val(gettingLocally);
        }else {
            var newText = $("<textarea>").attr("class", "col-10 past").attr("placeholder", "Type here").val(gettingLocally);
        }
       
        var newButton = $("<button>").attr("class", "saveBtn col-1").text("Save here").on("click", saveToLocal);

        // var btn = document.querySelector("#btn")
        // btn.setAttribute("class" "")
        // btn.textContent = "Save"
        // btn.addEventListener("click", saveToLocal)

        newRow.append(newP)
        newRow.append(newText)
        newRow.append(newButton)

        containerEl.append(newRow)
    }
}

function saveToLocal() {
    console.log(this)
    var gook = $(this).prev().val();
    var key = $(this).prev().prev().text();
    localStorage.setItem(key, gook);
}

//invocations
buildBlox();