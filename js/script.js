// function to validate input form
function submit_form() {    
    // pull out all the input variable
    var weight= document.getElementById('weight').value;
    var height= document.getElementById('height').value/100;
    var age= document.getElementById('age').value;
    var result=weight/(height*height);

    //show result to result section
    if(document.getElementById('male').checked) {   
        //for checking the input
        //    console.log("Weight: " + weight);
        //    console.log("Height: " + height);
        //    console.log("Age: " + age);
        //    console.log("Gender: " + document.getElementById('male').value );
        //    console.log(result);
       document.getElementById("result-number").innerHTML= result.toFixed(2);
       document.getElementById("span-gender").innerHTML= "Sebagai " + "Pria ";
       document.getElementById("span-weight").innerHTML= "dengan berat " + weight + " kg ";
       document.getElementById("span-height").innerHTML= "dan tinggi " + height*100 + " cm.";
       document.getElementById("span-age").innerHTML= "berusia " + age + " tahun ";
       

       event.preventDefault();
       bmi_result(); //continue to show the other bmi details result
       hide_unhide_button(); //show result buttons if result button pressed and hide button if reset button pressed
   }   
   else if(document.getElementById('female').checked) {   
        //for checking the input
        // console.log("Weight: " + weight);
        // console.log("Height: " + height);
        // console.log("Age: " + age);
        // console.log("Gender: " + document.getElementById('female').value );
        // console.log(result);
        document.getElementById("result-number").innerHTML= result.toFixed(2);
        document.getElementById("span-gender").innerHTML= "Sebagai " + "Wanita ";
        document.getElementById("span-weight").innerHTML= "dengan berat " + weight + " kg ";
        document.getElementById("span-height").innerHTML= "dan tinggi " + height*100 + " cm.";
        document.getElementById("span-age").innerHTML= "berusia " + age + " tahun ";
        

        event.preventDefault();
        bmi_result(); //continue to show the other bmi details result
        hide_unhide_button();//show result buttons if result button pressed and hide button if reset button pressed
    }   
   else {alert("Isi form dengan benar");   
   }   
    //to show the other bmi details result
    function bmi_result(){

        //looping list of each bmi result health risk
        kurus_list=["Kekurangan gizi","Gangguan menstruasi pada wanita","Osteoporosis","Penurunan imunitas"];
        n=kurus_list.length;
        var loop_kurus="";

        for(i=0; i<=(n-1); i++){
            var list=kurus_list[i];
            loop_kurus+="<li>"+list+"</li>"
        }

        gendut_list=["Penyakit jantung dan pembuluh darah","Diabetes tipe 2","Masalah pernapasan","Kanker (seperti kanker payudara, usus besar, rahim, dan kandung kemih)"];
        n=gendut_list.length;
        var loop_gendut="";

        for(i=0; i<=(n-1); i++){
            var list=gendut_list[i];
            loop_gendut+="<li>"+list+"</li>"
        }

        obesitas_list=["Penyakit jantung dan stroke", "Diabetes tipe 2","Masalah sendi","Gangguan tidur","Kanker (seperti kanker payudara, usus besar, dan prostat.)"];
        n=obesitas_list.length;
        var loop_obesitas="";

        for(i=0; i<=(n-1); i++){
            var list=obesitas_list[i];
            loop_obesitas+="<li>"+list+"</li>"
        }

        //show each bmi result details to result page section
        if(result<18.5){
            // console.log(result);
            document.getElementById("overall-result-review").innerHTML= "Kurus";
            document.getElementById("result-category").innerHTML= "Anda memiliki berat badan kurus";
            document.getElementById("result-category-detail").innerHTML= "Anda berada dalam kategori : Anda memiliki berat badan kurus";
            document.getElementById("result-number-range").innerHTML= "Hasil BMI Anda kurang dari 18.5";
            document.getElementById("result-category-description").innerHTML= "Ini menunjukkan bahwa berat badan Anda mungkin di bawah kisaran yang sehat. Penting untuk berkonsultasi dengan profesional medis untuk menentukan apakah berat badan Anda sehat atau memerlukan peningkatan.";
            document.getElementById("risk-health-category").innerHTML="Beberapa Penyakit yang Berasal dari Kekurangan Berat Badan";
            document.getElementById("risk-health-detail").innerHTML=loop_kurus;
        }
        else if (result>= 18.5 && result<=24.9){
            // console.log(result);
            document.getElementById("overall-result-review").innerHTML= "Normal";
            document.getElementById("result-category").innerHTML= "Anda memiliki berat badan normal";
            document.getElementById("result-category-detail").innerHTML= "Anda berada dalam kategori : Anda memiliki berat badan normal";
            document.getElementById("result-number-range").innerHTML= "Hasil BMI Anda diantara 18.5 hingga 24.9";
            document.getElementById("result-category-description").innerHTML= "Ini menunjukkan bahwa berat badan Anda berada dalam kisaran yang sehat untuk tinggi badan Anda. Ini adalah hasil yang diinginkan dan menunjukkan bahwa Anda memiliki risiko yang lebih rendah untuk mengembangkan masalah kesehatan terkait berat badan.";
            document.getElementById("risk-health-category").innerHTML="Orang dengan berat badan normal memiliki risiko yang lebih rendah untuk mengalami berbagai penyakit kronis. Namun, penting untuk tetap menjaga gaya hidup sehat, termasuk pola makan seimbang dan aktivitas fisik teratur, untuk menjaga kesehatan optimal.";
        }
        else if (result>= 25 && result<=29.9){
            // console.log(result);
            document.getElementById("overall-result-review").innerHTML= "Kelebihan Berat Badan";
            document.getElementById("result-category").innerHTML= "Anda memiliki berat badan berlebih";
            document.getElementById("result-category-detail").innerHTML= "Anda berada dalam kategori : Anda memiliki berat badan berlebih";
            document.getElementById("result-number-range").innerHTML= "Hasil BMI Anda diantara 25.0 hingga 29.9 ";
            document.getElementById("result-category-description").innerHTML= "Ini menunjukkan bahwa Anda mungkin memiliki kelebihan berat badan. Ini bisa meningkatkan risiko Anda untuk mengembangkan berbagai masalah kesehatan, dan perubahan gaya hidup mungkin diperlukan untuk mencapai berat badan yang sehat.";
            document.getElementById("risk-health-category").innerHTML="Beberapa Penyakit yang Berasal dari Kelebihan Berat Badan";
            document.getElementById("risk-health-detail").innerHTML=loop_gendut;
        }
        else{
            // console.log(result);
            document.getElementById("overall-result-review").innerHTML= "Obesitas";
            document.getElementById("result-category").innerHTML= "Anda memiliki berat badan obesitas";
            document.getElementById("result-category-detail").innerHTML= "Anda berada dalam kategori : Anda memiliki berat badan obesitas";
            document.getElementById("result-number-range").innerHTML= "Hasil BMI Anda lebih dari 30.0";
            document.getElementById("result-category-description").innerHTML= "Ini menunjukkan bahwa Anda menderita obesitas. Obesitas dapat meningkatkan risiko Anda untuk berbagai masalah kesehatan serius, termasuk penyakit jantung, diabetes, dan tekanan darah tinggi. Konsultasikan dengan profesional medis untuk rencana pengelolaan berat badan yang tepat.";
            document.getElementById("risk-health-category").innerHTML="Beberapa Penyakit yang Berasal dari Obesitas";
            document.getElementById("risk-health-detail").innerHTML=loop_obesitas;
        }
    }
}   

//show result buttons if result button pressed and hide button if reset button pressed
function hide_unhide_button(){
        var result_button= document.getElementsByClassName("result-detail-button");
        var health_button= document.getElementsByClassName("health-button");
        var overall_result_button= document.getElementById("overall-result-button");
        
        //to show and hide "download hasil bmi" button 
        if (overall_result_button.style.display === "none") {
            overall_result_button.style.display = "block";
        } else {
            overall_result_button.style.display = "block";
        }
        
        //to show and hide "konsultasi ahli gizi dan regitrasi online ahli gizi" button 
        for(var index=0;index < result_button.length;index++){
            if (result_button[index].style.display === "none") {
                result_button[index].style.display = "block";
            } else {
                result_button[index].style.display = "block";
                }
            }
        
        //to show and hide "konsultasi dokter dan regitrasi online" button 
        for(var index=0;index < health_button.length;index++){
            if (health_button[index].style.display === "none") {
                health_button[index].style.display = "block";
            } else {
                health_button[index].style.display = "block";
                }
            }
    }

// reset form, dan unhide semua button dan result di result page
function resetbutton(){
    var result_button= document.getElementsByClassName("result-detail-button");
    var health_button= document.getElementsByClassName("health-button");
    var overall_result_button= document.getElementById("overall-result-button");

    console.log("reset click");
    document.getElementById("result-number").innerHTML= "";
    document.getElementById("span-gender").innerHTML= "";
    document.getElementById("span-weight").innerHTML= "";
    document.getElementById("span-height").innerHTML= "";
    document.getElementById("span-age").innerHTML= "";
    document.getElementById("overall-result-review").innerHTML= "";
    document.getElementById("result-category").innerHTML= "";
    document.getElementById("result-category-detail").innerHTML= "";
    document.getElementById("result-number-range").innerHTML= "";
    document.getElementById("result-category-description").innerHTML= "";
    document.getElementById("risk-health-category").innerHTML="";
    document.getElementById("risk-health-detail").innerHTML="";

    if (overall_result_button.style.display === "none") {
        overall_result_button.style.display = "none";
    } else {
        overall_result_button.style.display = "none";
    }
    
    
    for(var index=0;index < result_button.length;index++){
        if (result_button[index].style.display === "none") {
            result_button[index].style.display = "none";
        } else {
            result_button[index].style.display = "none";
            }
        }
    
    for(var index=0;index < health_button.length;index++){
        if (health_button[index].style.display === "none") {
            health_button[index].style.display = "none";
        } else {
            health_button[index].style.display = "none";
            }
        }
}

//sementara button belum dapat berfungsi dan show alert saja
function overall_result(){
    alert ("Maaf data BMI Anda belum dapat di download untuk saat ini");
}
//sementara button belum dapat berfungsi dan show alert saja
function registration_button(){
    alert ("Maaf saat ini kami belum dapat melakukan registrasi online, nantikan terus perbaikan melalui aplikasi kami");
}
//sementara button konsultasi diarahkan ke wa saja (nomor wa diedit)
function wa_click(){
    console.log("wa click")
    window.open('https://wa.me/6283857491340?text=Halo! Saya ingin melakukan konsultasi untuk Hasil BMI saya');
}

