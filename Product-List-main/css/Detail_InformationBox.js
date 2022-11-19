function myFunction() {
    document.getElementById("tab-description").style.display = "block";
    document.getElementById("tab--color-description").style.backgroundColor = "black";
    document.getElementById("tab-additionalInformation").style.display = "none";
    document.getElementById("tab--color-additionalInformation").style.backgroundColor = "#be9c79";
    document.getElementById("tab-reviews").style.display = "none";
    document.getElementById("tab--color-reviews").style.backgroundColor = "#be9c79";

}   
function myFunction1(){
    document.getElementById("tab-additionalInformation").style.display = "block";
    document.getElementById("tab-description").style.display = "none";
    document.getElementById("tab--color-description").style.backgroundColor = "#be9c79";
    document.getElementById("tab--color-additionalInformation").style.backgroundColor = "black";
    document.getElementById("tab--color-reviews").style.backgroundColor = "#be9c79";
    document.getElementById("tab-reviews").style.display = "none";
}
function myFunction2(){
    document.getElementById("tab-reviews").style.display = "block";
    document.getElementById("tab-description").style.display = "none";
    document.getElementById("tab--color-description").style.backgroundColor = "#be9c79";
    document.getElementById("tab--color-additionalInformation").style.backgroundColor = "#be9c79";
    document.getElementById("tab--color-reviews").style.backgroundColor = "black";
    document.getElementById("tab-additionalInformation").style.display = "none";
}