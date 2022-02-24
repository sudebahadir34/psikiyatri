document.getElementById("kitaplari").addEventListener("change", kitaplari);
let sonucBaslik=document.getElementById("sonucBaslik");

function kitaplari(){
    sonucBaslik.classList.remove("iy", "cm", "mr", "kh", "pc", "normal");
    kitaplari=document.getElementById("kitaplari").selectedIndex;
    console.log(kitaplari);

    if(kitaplari==0){
        document.body.style.background="rgb(107, 69, 143)";
        sonucBaslik.innerHTML="Dünyaca ünlü psikoloji yazarı Irvin D. Yalom’dan psikoloji meraklılarının keyfine layık bir romanla listemize başlayalım: Divan! Daha önce Nitzsche Ağladığında eseri ile başka okuma listelerimizde yerini alan yazar, Divan ile okurlarını adeta hep birlikte psikanaliz yapmaya davet ediyor. Zira bu roman, adını terapi koltuğundan alıyor. Yalom, bu defa koltuğa danışanların yanı sıra terapistleri de oturtuyor. Bunun yanı sıra yazar, karakterler üzerinden de ego, kibir, hırs, tutuculuk, dürüstlük ve cinsellik gibi pek çok insani dürtüyü ele alıyor";
        sonucBaslik.classList.add("iy");
        document.getElementById("resim").setAttribute("src", "divan.jpg");
    }

    else if(kitaplari==1){
        document.body.style.background="#000";
        sonucBaslik.innerHTML="Türkiye’nin tanınan ve sevilen psikiyatrı Cem Mumcu’nun en bilinen romanı Makber, oldukça kısa bir anlatı olmasıyla birlikte okuru düşünmeye ve değerlendirmeye iten bir kurgu sunuyor. Mumcu, romanında zamansız bir hikaye aktarmayı tercih ederek yaşama ve ölüme, tesadüfe ve kadere, iyiliğe ve kötülüğe, sevgiye ve nefrete, bilgiye ve cehalete dair kavramları, yani insanı, ele alıyor.";
        sonucBaslik.classList.add("cm");
        document.getElementById("resim").setAttribute("src", "makber.jpg");
    }

    else if(kitaplari==2){
        document.body.style.background="pink";
        sonucBaslik.innerHTML="Henüz lise sıralarındayken aklımıza kazınan bir eser doğrusu! Türk edebiyatının ilk psikolojik romanı Eylül! Bu unutulmaz eser, evli bir kadın olan Suat’la Necip’in imkânsız aşkını konu ediniyor. Servet-i Fünun’un önde gelen yazarlarından Mehmet Rauf’un adını birlikte andığımız roman, mekânları ve mevsimleri de birer karaktere dönüştürerek okura sevgi, doğa, sadakat ve ilişkilere dair sorular sorma imkanı tanıyor.";
        sonucBaslik.classList.add("mr");
        document.getElementById("resim").setAttribute("src", "eylul.jpg");
    }

    else if(kitaplari==3){
        document.body.style.background="rgb(182, 49, 49)";
        sonucBaslik.innerHTML="Psikolojik roman denince dünya edebiyatında ilk akla gelen eser, “Açlık” olur muhtamelen. Knut Hamson’ın kendi ince içeriği ise devasa edebiyat yapıtı Açlık, psikoloji ağırlıklı bir roman. Hem bir klasik okumak hem de psikoloji alanında ufkunuzu açmak istiyorsanız bu eseri okuyun.";
        sonucBaslik.classList.add("kh");
        document.getElementById("resim").setAttribute("src", "aclik.jpg")
    }

    else if(kitaplari==4){
        document.body.style.background="rgb(87, 133, 201)";
        sonucBaslik.innerHTML=" Veronika, Bosna ve Slovenya'da yaşamış, her istediğine sahip, hareketli bir yaşamı olan, yakışıklı erkeklerin dikkatini çeken genç bir kadın olsa da mutlu değildir. Yaşamında bir şeylerin eksikliğini hisseder. Başarısız bir intihar girişiminin ardından, kendine geldiği zaman bir akıl hastanesindedir artık. Üstelik çok kısa bir ömrü kaldığını öğrenir. Zaten ölmek isteyen Veronika bu süreçte, başka dünyaların insanlarını tanırken kendisini de keşfetmeye başlar. Paulo Coelho'nun kendine özgü anlatımıyla ders çıkarılacak, sürükleyici bu romanı okumanızı öneririz.";
        sonucBaslik.classList.add("pc");
        document.getElementById("resim").setAttribute("src", "veronika.jpg")
    }

}


