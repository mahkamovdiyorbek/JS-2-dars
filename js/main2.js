let sana = new Date();

sana.setFullYear(2009);
sana.setMonth(4);
sana.setDate(5);

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let oylar = ["dekabr","yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr"];
document.write("Men   " + yil + "-yil   " + oylar[oy] +  "  oyining    " +  kun + "-kunida tug'ilganman")