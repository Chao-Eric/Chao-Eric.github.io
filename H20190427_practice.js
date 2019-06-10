if($(window).width() < 601){
    console.log("RWD mode");
    var R_flag=true;
}
else{
    console.log("regular mode");
    var R_flag=false;
}
console.log(R_flag);
function quoOn(){
    var quo = document.getElementById("quotation");
    var ss = document.styleSheets[0].cssRules[0];
    var rules = ss.cssRules?ss.cssRules:ss.rules;
    
    if(rules[9]==undefined){
        ss.insertRule("#quotation:hover{ transition-property: height,background-color; transition-timing-function: ease-out; transition-duration: 2s; height:200px;background-color: rgba(190, 233, 232, 0.5);}",9);
    }
    else{
        ss.deleteRule(9);
        ss.insertRule("#quotation:hover{ transition-property: height,background-color; transition-timing-function: ease-out; transition-duration: 2s; height:200px;background-color: rgba(190, 233, 232, 0.5);}",9);
    }
}
function quoOut(){
    var quo = document.getElementById("quotation");
    var ss = document.styleSheets[0].cssRules[0];
    var rules = ss.cssRules?ss.cssRules:ss.rules;
    
    if(rules[9]==undefined){
        ss.insertRule("#quotation{ transition-property: height,background-color; transition-timing-function: ease-in; transition-duration: 2s; height:20px;rgba(27, 73, 101, 1);}",9);
    }
    else{
        ss.deleteRule(9);
        ss.insertRule("#quotation{ transition-property: height,background-color; transition-timing-function: ease-in; transition-duration: 2s; height:20px;rgba(27, 73, 101, 1);}",9);
    }
}

//ss.deleteRule(5);
//ss.insertRule("@keyframes typing-effect-forward{from{width:0em;}to{width:11em;}}",5);

function titleChange(str_name){
    var title = document.getElementById("chooseName");
    title.innerHTML=str_name;
    $("#chooseName").hide().fadeIn("slow");
}
function homeContent(){
    $("#bio_content").hide();
    $(".edu_content").hide();
    $(".work_content").hide();
    $(".res_content").hide();
    $(".pub_content").hide();
    $("#home_content").slideToggle(2000);
    
}
function bioContent(){
    $("#home_content").hide();
    $(".edu_content").hide();
    $(".work_content").hide();   
    $(".res_content").hide();
    $(".pub_content").hide();
    $("#bio_content").slideToggle(2000);
}
function eduContent(){
    $("#home_content").hide();
    $("#bio_content").hide();
    $(".work_content").hide();   
    $(".res_content").hide();
    $(".pub_content").hide();
    $(".edu_content").slideToggle(2000);
}
function workContent(){
    $("#home_content").hide();
    $("#bio_content").hide();
    $(".edu_content").hide();
    $(".res_content").hide();
    $(".pub_content").hide();
    $(".work_content").slideToggle(2000);
}
function resContent(){
    $("#home_content").hide();
    $("#bio_content").hide();
    $(".edu_content").hide();
    $(".work_content").hide();
    $(".pub_content").hide();
    $(".res_content").slideToggle(2000);
}
function pubContent(){
    $("#home_content").hide();
    $("#bio_content").hide();
    $(".edu_content").hide();
    $(".work_content").hide();
    $(".res_content").hide();
    $(".pub_content").slideToggle(2000);
}

function detail_change(str_name){
    if(R_flag===true){
        console.log(R_flag);
        RWD_detail_change(str_name);
    }
    else{
        console.log(R_flag);
        var detail = document.getElementById("work_detail");
    switch(str_name){
        case 'Yahoo':{
            detail.style.fontSize="40px";
            detail.style.lineHeight="20px";
            detail.innerHTML='<p>SDE/Research Engineer</p>'+'<p>Yahoo! Inc., Taiwan</p>'+'<p>2011 - 2013</p>';
            break;
        }
        case 'Rakuten':{
            detail.style.fontSize="40px";
            detail.style.lineHeight="20px";
            detail.innerHTML='<p>Data Scientist</p>'+'<p>Rakuten Inc., Japan</p>'+'<p>2013 - 2015</p>';
            break;
        }
        case 'SMU':{
            detail.style.fontSize="30px";
            detail.style.lineHeight="16px";
            detail.innerHTML='<p>Visiting Professor & International Consultant</p>'+'<p>Living Analytics Research Center</p>'+'<p>Singapore Management University, Singapore</p>'+'<p>2017/7~8, 2018/1~2, 2018/7~8</p>';
            break;
        }
        case 'LARC':{
            detail.style.fontSize="30px";
            detail.style.lineHeight="16px";
            detail.innerHTML='<p>Visiting Professor & International Consultant</p>'+'<p>Living Analytics Research Center</p>'+'<p>Singapore Management University, Singapore</p>'+'<p>2017/7~8, 2018/1~2, 2018/7~8</p>';
            break;
        }
        case 'TKU':{
            detail.style.fontSize="30px";
            detail.style.lineHeight="16px";
            detail.innerHTML='<p>Assistant Professor</p>'+'<p>Department of Computer Science and '+'<p>Information Engineering,</p>'+'<p>Tamkang University, Taiwan</p>'+'<p>2015-Current</p>';
            break;
        }    
    }
    $("#work_detail").hide().slideDown(1000);

    }
}
function pub_write(str){
    switch(str){
        case 'journal':
            $("#pub_conf").hide();
            $("#pub_journal").slideDown(2000);    
            break;
        case 'conf':
            $("#pub_journal").hide();
            $("#pub_conf").slideDown(2000);
            break;
    }
}
function RWD_detail_change(str_name){
    console.log("RWDsuccess");
    var detail=document.getElementById("work_detail");
    switch(str_name){
        case 'Yahoo':{
            detail.style.fontSize="30px";
            detail.style.lineHeight="25px";
            detail.innerHTML='<p>SDE/Research Engineer</p>'+'<p>Yahoo! Inc., Taiwan</p>'+'<p>2011 - 2013</p>';
            break;
        }
        case 'Rakuten':{
            detail.style.fontSize="30px";
            detail.style.lineHeight="32px";
            detail.innerHTML='<p>Data Scientist</p>'+'<p>Rakuten Inc., Japan</p>'+'<p>2013 - 2015</p>';
            break;
        }
        case 'SMU':{
            detail.style.fontSize="18px";
            detail.style.lineHeight="27px";
            detail.innerHTML='<p>Visiting Professor & International Consultant</p>'+'<p>Living Analytics Research Center</p>'+'<p>Singapore Management University, Singapore</p>'+'<p>2017/7~8, 2018/1~2, 2018/7~8</p>';
            break;
        }
        case 'LARC':{
            detail.style.fontSize="17px";
            detail.style.lineHeight="29px";
            detail.innerHTML='<p>Visiting Professor & International Consultant</p>'+'<p>Living Analytics Research Center</p>'+'<p>Singapore Management University, Singapore</p>'+'<p>2017/7~8, 2018/1~2, 2018/7~8</p>';
            break;
        }
        case 'TKU':{
            detail.style.fontSize="21px";
            detail.style.lineHeight="16.5px";
            detail.innerHTML='<p>Assistant Professor</p>'+'<p>Department of Computer Science and '+'<p>Information Engineering,</p>'+'<p>Tamkang University, Taiwan</p>'+'<p>2015-Current</p>';
            break;
        }    
    }
    $("#work_detail").hide().slideDown(1000);
}
//function RWD_res_img_size(){
//    var res_db=document.getElementById("db");
//    res_db.class="fas fa-database fa-3x";
//    var res_cre=document.getElementById("cre");
//    res_cre.class="fas fa-credit-card fa-3x";
//    var res_mob=document.getElementById("mob");
//    res_mob.class="fas fa-mobile-alt fa-3x";
//    console.log("RWD_res_img_size()!");
//}
