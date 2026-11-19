let elsoSzamjegySzovege = 0
let masodikSzamjegySzovege = 0
let muvelet = ""

let szamok = document.getElementsByClassName("szam")
let fosok = document.getElementsByClassName("fos")
let kiiro = document.getElementById("kiirato")
console.log(szamok[0].textContent)

for (let index = 0; index < szamok.length; index++) {
    const element = szamok[index];
    szamok[index].addEventListener("click", function alma(){
    elsoSzamjegySzovege = szamok[index]
    console.log(elsoSzamjegySzovege.textContent)
    kiiro.textContent += elsoSzamjegySzovege.textContent
})
}
