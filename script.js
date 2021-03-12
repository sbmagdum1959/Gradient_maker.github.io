
let colorPicker1 = document.querySelector(".main .html5colorpicker").value;
let colorPicker2 = document.querySelector(".main .html5colorpicker_one").value;
let body = document.querySelector(".bod");
let code=document.getElementsByTagName("code");
// code[0].style.padding="30px";
console.log(body);
body.style.background = "linear-gradient(to right, "
    + colorPicker1 + ", "
    + colorPicker2 + ")";

let icon = document.querySelectorAll(".icon");


// for(var i=0;i<icon.length;i++){
//     icon[i].addEventListener("click",function(){
//         body.style.background = "linear-gradient(to left, "
//         + colorPicker1 + ", "
//         + colorPicker2 + ")";
//     })
// }



function Color() {
    let colorPicker1 = document.querySelector(".main .html5colorpicker").value;
    let colorPicker2 = document.querySelector(".main .html5colorpicker_one").value;
    let icon = document.querySelectorAll(".icon");

    body.style.background = "linear-gradient(to right, "
        + colorPicker1 + ", "
        + colorPicker2 + ")";
        console.log(code[0].innerHTML);
    icon[0].style.background =
        "linear-gradient(to right top, "
        + colorPicker1 + ", "
        + colorPicker2 + ")";

    icon[1].style.background =
        "linear-gradient(to right, "
        + colorPicker1 + ", "
        + colorPicker2 + ")";

    icon[2].style.background =
        "linear-gradient(to right bottom, "
        + colorPicker1 + ", "
        + colorPicker2 + ")";

    icon[3].style.background =
        "linear-gradient(to bottom, "
        + colorPicker1 + ", "
        + colorPicker2 + ")";

    icon[4].style.background =
        "linear-gradient(to left bottom, "
        + colorPicker1 + ", "
        + colorPicker2 + ")";

    icon[5].style.background =
        "linear-gradient(to left, "
        + colorPicker1 + ", "
        + colorPicker2 + ")";

    icon[6].style.background =
        "linear-gradient(to top, "
        + colorPicker1 + ", "
        + colorPicker2 + ")";

    icon[7].style.background =
        "radial-gradient(circle, "
        + colorPicker1 + ", "
        + colorPicker2 + ")";




        icon[0].addEventListener("click", function () {
            let colorPicker1 = document.querySelector(".main .html5colorpicker").value;
            let colorPicker2 = document.querySelector(".main .html5colorpicker_one").value;
let code=document.getElementsByTagName("code");

            body.style.background =
                "linear-gradient(to right top, "
                + colorPicker1 + ", "
                + colorPicker2 + ")";
                code[0].style.padding="30px";
               code[0].innerText="linear-gradient(to right top, "
               + colorPicker1 + ", "
               + colorPicker2 + ");";
                
        })
        
        icon[1].addEventListener("click", function () {
            let colorPicker1 = document.querySelector(".main .html5colorpicker").value;
            let colorPicker2 = document.querySelector(".main .html5colorpicker_one").value;
            body.style.background =
                "linear-gradient(to right, "
                + colorPicker1 + ", "
                + colorPicker2 + ")";
                code[0].style.padding="30px";
                code[0].innerText="linear-gradient(to right, "
                + colorPicker1 + ", "
                + colorPicker2 + ");";
                
        })
        icon[2].addEventListener("click", function () {
            let colorPicker1 = document.querySelector(".main .html5colorpicker").value;
            let colorPicker2 = document.querySelector(".main .html5colorpicker_one").value;
            body.style.background =
                "linear-gradient(to right bottom, "
                + colorPicker1 + ", "
                + colorPicker2 + ")";
                code[0].style.padding="30px";
                code[0].innerText="linear-gradient(to right bottom, "
                + colorPicker1 + ", "
                + colorPicker2 + ");";
        })
        icon[3].addEventListener("click", function () {
            let colorPicker1 = document.querySelector(".main .html5colorpicker").value;
            let colorPicker2 = document.querySelector(".main .html5colorpicker_one").value;
            body.style.background =
                "linear-gradient(to bottom, "
                + colorPicker1 + ", "
                + colorPicker2 + ")";
                code[0].style.padding="30px";
                code[0].innerText="linear-gradient(to bottom, "
                + colorPicker1 + ", "
                + colorPicker2 + ");";
        })
        icon[4].addEventListener("click", function () {
            let colorPicker1 = document.querySelector(".main .html5colorpicker").value;
            let colorPicker2 = document.querySelector(".main .html5colorpicker_one").value;
            body.style.background =
                "linear-gradient(to left bottom, "
                + colorPicker1 + ", "
                + colorPicker2 + ")";
                code[0].style.padding="30px";
                code[0].innerText="linear-gradient(to left bottom, "
                + colorPicker1 + ", "
                + colorPicker2 + ");";
        })
        icon[5].addEventListener("click", function () {
            let colorPicker1 = document.querySelector(".main .html5colorpicker").value;
            let colorPicker2 = document.querySelector(".main .html5colorpicker_one").value;
            body.style.background =
                "linear-gradient(to left, "
                + colorPicker1 + ", "
                + colorPicker2 + ")";
                code[0].style.padding="30px";
                code[0].innerText="linear-gradient(to left, "
                + colorPicker1 + ", "
                + colorPicker2 + ");";
        })
        icon[6].addEventListener("click", function () {
            let colorPicker1 = document.querySelector(".main .html5colorpicker").value;
            let colorPicker2 = document.querySelector(".main .html5colorpicker_one").value;
            body.style.background =
                "linear-gradient(to top, "
                + colorPicker1 + ", "
                + colorPicker2 + ")";
                code[0].style.padding="30px";
                code[0].innerText="linear-gradient(to top, "
                + colorPicker1 + ", "
                + colorPicker2 + ");";
        })
        icon[7].addEventListener("click", function () {
            let colorPicker1 = document.querySelector(".main .html5colorpicker").value;
            let colorPicker2 = document.querySelector(".main .html5colorpicker_one").value;
            body.style.background =
                "radial-gradient(circle, "
                + colorPicker1 + ", "
                + colorPicker2 + ")";
                code[0].style.padding="30px";
                code[0].innerText="radial-gradient(circle, "
                + colorPicker1 + ", "
                + colorPicker2 + ");";
        })

}