
//Javascriptte değişkenler var ya da const tipinde tanımlanır. Değişkene verdiğimiz değere göre derleyici o değişkenin tipini kendisi algılar (zeki şey).
var a = 10;
var b = 20;
var c = 30;
var asd = "İsim";
var den = 10.3;

//Diziler, değişkenlerdeki gibi var tipinde tanımlanır ve yine dizinin türünü derleyici kendisi algılar.
var array = ["Java", "Python", "C++", "C", "C#"];

//Dizinin içine eleman eklemesi yapalım.
array.push("Go");

//Dizilere dair birçok metod var ama hepsi de internettek kolaylıkla bulunabilecek şeyler.

//For döngüsünün yapısı bu şekildedir. Diğer dillerdeki gibi. Aynı tas aynı hamam.
for (var i = 0; i < array.length; i++) {
    //alert(array[i]);
    console.log(array[i]);
}


//While, switch-case gibi yapılar diğer dillerdeki gibi aynı sytnax'tadır.


//Foreach döngüsünü for döngüsü gibi ayrı bir yapı şeklinde değil nesneye özel yazılır. Kullanımı aşağıdaki gibidir. element değişkeni yerine bir funcation da yazılabilir. 
array.forEach(element => {
    //alert(element);
    console.log(element);
});

//Buradaki == operatörü veri tipine bakmaksızın değerleri karşılaştırır. Yani string olan 2 int tipine çevrilip o şekilde bir karşılaştırma yapılır ve sonuç true döner.
if (2 == "2") {
    console.log("Eşit...");
}

//Buradaki === operatörü ise veri tipini de işin içine katarak bir karşılaştırma yapar. Yani bir değer string, diğer değer de int olduğu için false dönecektir.
if (2 === "2") {
    console.log("Eşit...");
}
else {
    console.log("Eşit değil anam");
}

//Javascriptte fonksiyon yazarken direk aşağıdaki sytnax kullanılır. Yani metod yazmak istesek de fonksiyon yazmak istesek de yapı aşağıdaki gibi olacaktır. Ekstre bir void ifadesine ya da geri dönüş tipi eklemeye gerek yoktur.
function hello(){
    console.log("Hello World!");
}

//Fonksiyonlara parametre yazarken ise parametrenin önüne o parametrenin tipini yazmamıza gerek yoktur. Direkt parametrenin adını yazıp yolumuza devam edebiliriz.
function HelloName(name) {
    console.log("Hello " + name + ". Welcome to our world!")
}

//Fonksiyonları bildiğimiz usül çağırıyoruz. Bir tantanası yok.
hello();
HelloName("Selman KOYAN");

//Bir dizinin elemanlarını toplayıp geriye döndüren ufak bir fonksiyon örneği yaptık. Parametre olarak bir dizi alıyor. Parametrenin tipini vermemize gerek yok demiştik.
function Total(numbers) {
    var top = 0;

    //numbers dizisi içerisinde dönerek elemanları top değişkeninin içerisine ekliyor.
    numbers.forEach(element => {
        top += element;
    });

    return top;
}

//Bir dizi tanımlayıp bu diziyi Total metoduna paremetre olarak gönderdik ve dönen değeri konsola yazdırdık.
var numbs = [984, 21, 55, 62];
console.log(Total(numbs));

//Burada yeni bir nesne tanımlıyoruz. Nesneyi var tipinde tanımayıp içerisini istediğimiz gibi doldurabiliriz. İster nesne içerisinde tekrar nesne tanımlarız (örn: address nesnesi), istersek de nesne içerisinde fonksiyon yazarız (örn: getnamesurname fonksiyonu).
var person = {
    name: "Selman",
    surname: "KOYAN",
    age: 21,
    telnumber: "05551234567",
    languages: ["Java", "Python", "C++", "C", "C#"],
    address: {
        country: "Türkiye",
        city: "Denizli",
        town: "Pamukkale",
        postcode: 20160
    },

    getnamesurname: function () {
        return this.name + " " + this.surname;
    }
};

//Yukarıdaki nesnle oluşturmanın başka bir yöntemi. Aynı işi yapıyorlar fakat yöntem farklı.
var person2 = new Object();
person2.name = "Selman";
person2.surname = "KOYAN";
person2.age = 21;
person2.telnumber = "05551234567";
person2.languages = ["Java", "Python", "C++", "C", "C#"];
person2.address = new Object();
person2.address.country = "Türkiye";
person2.address.city = "Denizli";
person2.address.town = "Pamukkale";
person2.address.postcode = 20160;
person2.getnamesurname = function() {
    return this.name + " " + this.surname;
};

//Nesnelerimizin elemanlarını konsola yazıp bir görelim. Bakalım doğru tanımlayabilmiş miyiz.
console.log(person.name);
console.log(person.languages[2]);
console.log(person.address.town);
console.log(person.getnamesurname())

console.log("İkinci kişi: " + person2.getnamesurname());
console.log("İkinci kişi ilçe: " + person2.address.town);


function address(_country, _city, _town, _postcode) {
    this.country = _country;
    this.city = _city;
    this.town = _town;
    this.postcode = _postcode;
};

//Bu da nesne tanımlamanın 3. yöntemi. Burada ise constructor mantığı çalışıyor.
function mainperson(_name, _surname, _age, _telnumber, _languages, _country, _city, _town, _postcode){
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
    this.telnumber = _telnumber;
    this.languages = _languages;
    this.name = _name;
    this.address = new address(_country, _city, _town, _postcode);
};

//Constructor şeklinde olan nesnemizden yeni bir nesne üretiyoruz. Ama bu sefer 2. yöntemdeki gibi "... new Object()" yerine "... new mainperson()" kullanıyoruz. Yani artık aynı nesneden birden fazla üretebiliriz.
var person3 = new mainperson("Selman", "KOYAN", 21, "05551234567", array, "Türkiye", "Denizli", "Pamukkale", 20160);

//Son olarak ise bakalım 3. yöntemde de nesneyi doğruı bir şekilde oluşturabilmiş miyiz.
console.log(person3.address.postcode);
document.getElementById('etiket') = array[0];
//alert("Toplam: " + (a+b+c));