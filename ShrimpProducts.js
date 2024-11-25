var content1=document.getElementById("content1");
      var content2=document.getElementById("content2");
      var content3=document.getElementById("content3");
      var content4=document.getElementById("content4");
      var btw1= document.getElementById("btw1");
      var btw2= document.getElementById("btw2");
      var btw3= document.getElementById("btw3");
      var btw4= document.getElementById("btw4");
      function openpro1(){
        content1.style.transform ="translateX(0)";
        content2.style.transform ="translateX(100%)";
        content3.style.transform ="translateX(100%)";
        content4.style.transform ="translateX(100%)";
        btw1.style.color="#ff7846";
        btw2.style.color="#000";
        btw3.style.color="#000";
        btw4.style.color="#000";
       
    
      }
      function openpro2(){
        content1.style.transform ="translateX(100%)";
        content2.style.transform ="translateX(0)";
        content3.style.transform ="translateX(100%)";
        content4.style.transform ="translateX(100%)";
        btw2.style.color="#ff7846";
        btw1.style.color="#000";
        btw3.style.color="#000";
        btw4.style.color="#000";
        
      }
      function openpro3(){
        content1.style.transform ="translateX(100%)";
        content2.style.transform ="translateX(100%)";
        content3.style.transform ="translateX(0)";
        content4.style.transform ="translateX(100%)";
        btw3.style.color="#ff7846";
        btw1.style.color="#000";
        btw2.style.color="#000";
        btw4.style.color="#000";
        
      }
      function openpro4(){
        content1.style.transform ="translateX(100%)";
        content2.style.transform ="translateX(100%)";
        content3.style.transform ="translateX(100%)";
        content4.style.transform ="translateX(0)";
        btw4.style.color="#ff7846";
        btw1.style.color="#000";
        btw2.style.color="#000";
        btw3.style.color="#000";
      }




