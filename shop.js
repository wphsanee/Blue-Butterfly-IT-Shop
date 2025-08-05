// ข้อมูลสินค้า
function loadXMLDoc() { // ฟังก์ชันสำหรับโหลด XML
    // สร้าง XMLHttpRequest object เพื่อดึงข้อมูล XML 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this); // เมื่อโหลดข้อมูลเสร็จแล้ว เรียกใช้ฟังก์ชัน myFunction
      }
    };
    xmlhttp.open("GET", "1product-14.xml", true); // เปิดการเชื่อมต่อกับไฟล์ XML
    // "GET" คือวิธีการดึงข้อมูล, "1product-14.xml" คือชื่อไฟล์ XML ที่จะดึงข้อมูล
    xmlhttp.send(); // ส่งคำขอไปยังเซิร์ฟเวอร์
}
  
function myFunction(xml) { // ฟังก์ชันที่ใช้จัดการข้อมูล XML ที่โหลดมา
    // ประกาศตัวแปรสำหรับเก็บข้อมูลจาก XML
    var ID, product, detail, price, amount, i, xmlDoc, txt1, txt2, txt3, txt4, txt5;
    xmlDoc = xml.responseXML; // แปลงข้อมูล XML ที่ได้รับเป็นเอกสาร XML
    txt1 = "";
    txt2 = "";
    txt3 = "";
    txt4 = "";
    txt5 = "";

    id = xmlDoc.getElementsByTagName("ID");   //tag name ใน XML
    pd = xmlDoc.getElementsByTagName("product");
    de = xmlDoc.getElementsByTagName("detail");
    pr = xmlDoc.getElementsByTagName("price");
    am = xmlDoc.getElementsByTagName("amount");

    for (i = 0; i < id.length; i++) { // วนลูปเพื่อดึงข้อมูลจากแต่ละ tag
      // childNodes[0].nodeValue ใช้เพื่อดึงค่าของ node แรก
      txt1 += id[i].childNodes[0].nodeValue + "<br>"; // แสดงผล UID
      // <br> ใช้เพื่อขึ้นบรรทัดใหม่ใน HTML
      txt2 += pd[i].childNodes[0].nodeValue + "<br>";
      txt3 += de[i].childNodes[0].nodeValue + "<br>";
      txt4 += pr[i].childNodes[0].nodeValue + "<br>";
      txt5 += am[i].childNodes[0].nodeValue + "<br>";
      
    }
    document.getElementById("demo1").innerHTML = txt1;  // แสดงผลใน HTML
    document.getElementById("demo2").innerHTML = txt2;
    document.getElementById("demo3").innerHTML = txt3;
    document.getElementById("demo4").innerHTML = txt4;
    document.getElementById("demo5").innerHTML = txt5;
}


//ข้อมูลลูกค้า
function loadXMLDoc1() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction1(this);
    }
  };
  xmlhttp.open("GET", "2customer-14.xml", true);
  xmlhttp.send();
}

function myFunction1(xml) {
  var ID, name, lastname, gender ,age , i, xmlDoc, txt1, txt2, txt3, txt4, txt5;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";
  txt5 = "";

  id = xmlDoc.getElementsByTagName("ID");
  n = xmlDoc.getElementsByTagName("name");
  ln = xmlDoc.getElementsByTagName("lastname");
  gd = xmlDoc.getElementsByTagName("gender");
  age = xmlDoc.getElementsByTagName("age");


  for (i = 0; i < id.length; i++) {
    txt1 += id[i].childNodes[0].nodeValue + "<br>";
    txt2 += n[i].childNodes[0].nodeValue + "<br>";
    txt3 += ln[i].childNodes[0].nodeValue + "<br>";
    txt4 += gd[i].childNodes[0].nodeValue + "<br>";
    txt5 += age[i].childNodes[0].nodeValue + "<br>";
    
  }
  document.getElementById("po1").innerHTML = txt1;
  document.getElementById("po2").innerHTML = txt2;
  document.getElementById("po3").innerHTML = txt3;
  document.getElementById("po4").innerHTML = txt4;
  document.getElementById("po5").innerHTML = txt5;
}

//ข้อมูลการส่งสินค้า
function loadXMLDoc2() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this);
    }
  };
  xmlhttp.open("GET", "3order-14.xml", true);
  xmlhttp.send();
}

function myFunction2(xml) {
  var ID, name, product, amount, time, i, xmlDoc, txt1, txt2, txt3, txt4, txt5 ;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";
  txt5 = "";

  id = xmlDoc.getElementsByTagName("ID");
  nam = xmlDoc.getElementsByTagName("name");
  pr = xmlDoc.getElementsByTagName("product");
  am = xmlDoc.getElementsByTagName("amount");
  time = xmlDoc.getElementsByTagName("time");

  for (i = 0; i < id.length; i++) {
    txt1 += id[i].childNodes[0].nodeValue + "<br>";
    txt2 += nam[i].childNodes[0].nodeValue + "<br>";
    txt3 += pr[i].childNodes[0].nodeValue + "<br>";
    txt4 += am[i].childNodes[0].nodeValue + "<br>";
    txt5 += time[i].childNodes[0].nodeValue + "<br>";
    
  }
  document.getElementById("em1").innerHTML = txt1;
  document.getElementById("em2").innerHTML = txt2;
  document.getElementById("em3").innerHTML = txt3;
  document.getElementById("em4").innerHTML = txt4;
  document.getElementById("em5").innerHTML = txt5;
}

//ข้อมูลการส่งสินค้า
function loadXMLDoc3() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction3(this);
    }
  };
  xmlhttp.open("GET", "4delivery-14.xml", true);
  xmlhttp.send();
}

function myFunction3(xml) {
  var ID, name, product, company, deliveryround, i, xmlDoc, txt1, txt2, txt3, txt4, txt5;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";
  txt5 = "";

  id = xmlDoc.getElementsByTagName("ID");
  nam = xmlDoc.getElementsByTagName("name");
  pro = xmlDoc.getElementsByTagName("product");
  com = xmlDoc.getElementsByTagName("company");
  deli = xmlDoc.getElementsByTagName("deliveryround");

  for (i = 0; i < id.length; i++) {
    txt1 += id[i].childNodes[0].nodeValue + "<br>";
    txt2 += nam[i].childNodes[0].nodeValue + "<br>";
    txt3 += pro[i].childNodes[0].nodeValue + "<br>";
    txt4 += com[i].childNodes[0].nodeValue + "<br>";
    txt5 += deli[i].childNodes[0].nodeValue + "<br>";
    
  }
  document.getElementById("buy1").innerHTML = txt1;
  document.getElementById("buy2").innerHTML = txt2;
  document.getElementById("buy3").innerHTML = txt3;
  document.getElementById("buy4").innerHTML = txt4;
  document.getElementById("buy5").innerHTML = txt5;
}