// prompt ile kullanıcıdan bilgi alma
let userName = prompt('Size nasıl seslenelim ? ')

// kullanıcı adını ekrana yazdırma, boş veya girişten vazgeçilmesi durumunda uuyarı verme
if ((userName != "") && (userName != null)) {
    document.getElementById("myName").innerHTML = userName.toUpperCase();
} else if (userName == "")

    alert("boş bıraktınız, bırakmayın.");

else if (userName == null)

    alert("Giriş yapmaktan vazgeçtiniz.");

// ekrana tarih ve saat yazdırma
function showTime() {
    let now = new Date()
    let days = now.getDay()
    let h = now.getHours() // return number (0 - 23)
    let m = now.getMinutes()
    let s = now.getSeconds()
        // let dayString = ""
        // console.log(days)

    switch (days) {
        case 1:
            console.log(days)

            days = "Pazartesi";
            dayString = "Pazartesi"
            console.log(days, dayString)

            break;

        case 2:
            days = "Salı";
            break;

        case 3:
            days = "Çarşamba";
            break;

        case 04:
            days = "Perşembe";
            break;

        case 05:
            days = "Cuma";
            break;

        case 06:
            days = "Cumartesi";
            break;

        case 07:
            days = "Pazar";
            break;
    }

    if (h == 0) {
        h = 12
    } else if (h > 12) {
        h = h - 12
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + days



    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

}
setInterval(showTime, 1000);