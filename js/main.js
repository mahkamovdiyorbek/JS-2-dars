/* Data taypes in JS (undefined,boolean,object) */

/*let soz */

/*let rost = 45==45 ? true : false*/
/*document.write(typeof rost);*/


/*let arrayObject = [45,78,"text",true,false];*/

/*let oddiyObject = {ism:"Lola", familiya:"Ergasheva", uningYoshi:"16 yoshda"}
document.write(oddiyObject.ism,oddiyObject.familiya,oddiyObject.uningYoshi)*/

/* Functions in JS */


/*function savatchaniTekshir() {

    let savatcha = [12, 78, "matn", true, "true"];

    if (savatcha.length == 0) {
        document.write("Savatchaning ichida " + savatcha.length + "dona ma'lumot bor!");
    }
    else {
        document.write("savatchaning ichida " + savatcha.length + "ta ma'lumot bor!")
    }
}
savatchaniTekshir();*/

/* Data in JS */

let sana = new Date()

sana.setFullYear(2009)
sana.setMonth(3)
sana.setDate(5)

let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftaKuni = sana.getDay()
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"];
let kunlar = ["Yakshanba","Dushanba","Seyshanba","Chorshanba","Payshanba","Juma","Shanba"]

document.write("Bugun " + yil + " / " +oylar [oy] + " / " + kun + "-kuni. haftaning " + kunlar[haftaKuni] + " kuni ");














