function getLangResources(){
    
    // Define arrays how many language you want to translate
    var ar = new Array();
    var en = new Array();
    
    ar['jumbTitle'] = "حجز لتنظيف المنزل";
    en['jumbTitle'] = "Booking Home Cleaning"; 
    ar['services'] = "الخدمات"; 
    en['services'] = "Services";
    ar['cleanInfo'] = "معلومات الخدمة :"; 
    en['cleanInfo'] = "Clean Information:";
    
    ar['manyCleaner'] =  "كم عدد عمال النظافة التي تحتاجها؟";
    en['manyCleaner'] ="How many cleaners do you need?"; 
    ar['longCleanr'] = "إلى متى تحتاج منظفك للبقاء؟"; 
    en['longCleanr'] = "How long do you need your cleaner to stay?";
    ar['oneHour'] = "ساعة واحدة"; 
    en['oneHour'] = "1 hours";
    ar['twoeHour'] = "ساعتان"; 
    en['twoeHour'] = "2 hours";
    ar['threeeHour'] = "3 ساعات"; 
    en['threeeHour'] = "3 hours";
    ar['fourHour'] = "4 ساعات"; 
    en['fourHour'] = "4 hours";
    ar['fiveHour'] = "5 ساعات"; 
    en['fiveHour'] = "5 hours";
    ar['sixHour'] = "6 ساعات"; 
    en['sixHour'] = "6 hours";
    ar['matrClean'] = "هل تحتاج إلى مواد تنظيف؟"; 
    en['matrClean'] = "Do you require cleaning materials?";
    ar['yesMatrClean'] = "نعم"; 
    en['yesMatrClean'] = "Yes";
    ar['noMatrClean'] = "لا"; 
    en['noMatrClean'] = "No";
    ar['choosExtra'] = "اختر ميزات إضافية"; 
    en['choosExtra'] = "Choose extra features";
    ar['matrAed'] = "المواد 10 درهم لساعة"; 
    en['matrAed'] = "Materials 10 AED \\ Hour";
    ar['matrSavFiveAed'] = "20 ساعة ووفر 5٪ 475 درهم  لكل شهر"; 
    en['matrSavFiveAed'] = "20 hour save 5 % 475 AED\\Per Month";
    ar['matrSavTenAed'] = "50 ساعة ووفر 10 ٪ 1225 درهم  في الشهر"; 
    en['matrSavTenAed'] = "50 hour save 10 % 1225 AED\\Per Month";
    ar['specificReqst'] = "هل لديك أي تعليمات تنظيف محددة؟"; 
    en['specificReqst'] = "Do you have any specific cleaning instructions?";
    ar['staff'] = "موظفين"; 
    en['staff'] = "Staff";
    ar['chooseCleaner'] = "اختر من طاقم العمل"; 
    en['chooseCleaner'] = "Choose Your Cleaner:";
    ar['fivExprinc'] = "خمس سنوات من الخبرة في التنظيف"; 
    en['fivExprinc'] = "Five years' experience cleaning";
    ar['fourExprinc'] = "أربع سنوات من الخبرة في التنظيف"; 
    en['fourExprinc'] = "Four years' experience cleaning";
    ar['threeExprinc'] = "ثلاث سنوات خبرة في التنظيف"; 
    en['threeExprinc'] = "Three years' experience cleaning";
    ar['oneExprinc'] = "ثلاث سنوات خبرة في التنظيف"; 
    en['oneExprinc'] = "Three years' experience cleaning";
    ar['dateTime'] = "التاريخ"; 
    en['dateTime'] = "Date & Time";
    ar['startDateTime'] = "متى تريد وقت بداية التنظيف ؟"; 
    en['startDateTime'] = "When would you like your cleaning start?";
    ar['endtDateTime'] = "متى تريد وقت انتهاء التنظيف ؟"; 
    en['endtDateTime'] = "When would you like your cleaning end?";
    ar['personal'] = "تواصل"; 
    en['personal'] = "Personal";
    ar['personalInfo'] = "المعلومات الشخصية:"; 
    en['personalInfo'] = "Personal Information:";
    ar['personalName'] = "الاسم"; 
    en['personalName'] = "Name";
    ar['selectCity'] = "اختر مدينتك"; 
    en['selectCity'] = "Select your city";
    ar['chooseCity'] = "دبي"; 
    en['chooseCity'] = "Dubai";
    ar['personalEmail'] = "البريد الالكتروني"; 
    en['personalEmail'] = "Email";
    ar['personalPhone'] = "رقم الهاتف"; 
    en['personalPhone'] = "Phone";
    ar['promoCode'] = "الرمز الترويجي"; 
    en['promoCode'] = "Promo Code";
    ar['locatAdress'] = "حدد موقع عنوانك"; 
    en['locatAdress'] = "Locate your address";
    ar['payment'] = "الدفع"; 
    en['payment'] = "Payment";
    ar['paymentInfo'] = "معلومات الدفع :"; 
    en['paymentInfo'] = "Payment Information :";
    ar['holderName'] = "الاسم"; 
    en['holderName'] = "Holder Name";
    ar['cardNum'] = "رقم البطاقة"; 
    en['cardNum'] = "Card Number";
    ar['cvCode'] = "رمز تحقق البطاقة"; 
    en['cvCode'] = "CVC";
    ar['expirDate'] = "تاريخ انتهاء الصلاحية"; 
    en['expirDate'] = "Expiry Date";
    ar['dateMonth'] = "الشهر"; 
    en['dateMonth'] = "Month";
    ar['dateYear'] = "السنة"; 
    en['dateYear'] = "Year";
    ar['confirmInfo'] = "تاكيد الحجز"; 
    en['confirmInfo'] = "Confirm";
    ar['confirmDetails'] = "تفاصيل الحجز:"; 
    en['confirmDetails'] = "Confirm Details:";
    ar['servicDetails'] = "تفاصيل الخدمة"; 
    en['servicDetails'] = "Service details";
    ar['cleanNames'] = "عدد المنظفين :"; 
    en['cleanNames'] = "Cleaners Number :";
    ar['duration'] = "المدة الزمنية:"; 
    en['duration'] = "Duration :";
    ar['matrials'] = "مواد النظافة :"; 
    en['matrials'] = "Material :";
    ar['extraFeatures'] = "ميزات اضافية :"; 
    en['extraFeatures'] = "Extra Features :";
    ar['dateTimeAdress'] = "الوقت والتاريخ / العنوان"; 
    en['dateTimeAdress'] = "Datetime / Address";
    ar['confStarClean'] = "وقت البدء :"; 
    en['confStarClean'] = "Start Clean :";
    ar['confEndClean'] = "وقت الانتهاء :"; 
    en['confEndClean'] ="End Clean :";
    ar['confAdress'] = "عنوان المنزل :"; 
    en['confAdress'] = "Home Address :";
    ar['confPayment'] = "الدفع"; 
    en['confPayment'] = "Payment";
    ar['confCarType'] = "نوع البطاقة :"; 
    en['confCarType'] = "Card Type :";
    ar['readAccept'] = "لقد قرأت وقبلت"; 
    en['readAccept'] = "I have read and accepted the";
    ar['termCond'] = " الشروط والأحكام"; 
    en['termCond'] ="Terms & Conditions";
    ar['privaPolic'] = "وسياسة الخصوصية."; 
    en['privaPolic'] = "Privacy Policy";
    ar['siteMap'] = "خريطة الموقع"; 
    en['siteMap'] = "Sitemap";
    ar['booking'] = "حجز"; 
    en['booking'] = "Booking";
    ar['myBooking'] = "حجزي"; 
    en['myBooking'] = "My Booking";
    ar['about'] = "من نحن"; 
    en['about'] ="About Us";
    ar['contactus'] = "وسياسة الخصوصية."; 
    en['contactus'] = "Privacy Policy";
    ar['footInfo'] = "معلومات"; 
    en['footInfo'] = "Information";
    ar['footTerm'] = "الشروط والأحكام"; 
    en['footTerm'] = "Terms & conditions";
    ar['footPrivcy'] = "سياسة الخصوصية"; 
    en['footPrivcy'] = "Privacy policy";
    ar['canWeUse'] = "كيف يمكننا استخدام"; 
    en['canWeUse'] ="How Can We Use";
    ar['discont'] = "خصم"; 
    en['discont'] = "Discount";
    ar['footFaq'] = "الاسئلة المتكررة"; 
    en['footFaq'] = "FAQ";
    ar['footContacUs'] =  "تواصل معنا"; 
    en['footContacUs'] = "Contact Us";
    ar['footAdress'] = "العنوان"; 
    en['footAdress'] = "Address";
    ar['footAdressInfo'] = "الظبي للتنظيف ، 06 شارع هاي ، فيكتوريا ، الإمارات العربية المتحدة."; 
    en['footAdressInfo']= "Al-dhabi-cleaning, 06 Highley St, Victoria, UAE.";
    ar['footEmaiUs'] = "راسلنا"; 
    en['footEmaiUs'] = "E-mail Us";
    ar['rightReserv'] = "© 2019 الظبي. جميع الحقوق محفوظة"; 
    en['rightReserv'] = "© 2019 AL-Zabey All rights reserved.";




    
    // Added new array defined arrays.
    var resources = new Array();
    resources['ar'] = ar;
    resources['en'] = en;
    
    return resources;
}

function changeLanguage(lng){
var resources = getLangResources()[lng];

$("h1[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("h2[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("h3[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("h6[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("span[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
    
$("label[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("span[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
    
$("p[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("button[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("title[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("option[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("li[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("a[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});



}


$(function() { 
    // Default Language
    changeLanguage("en");
 
    $(".getLang").click(function(){
        if($(this).text()==="AR"){
            changeLanguage("ar");
            $(".actions ul li a").text("التالي");
            $(".actions ul li a").first().text("للخلف");
            $(".actions ul li a").last().text("تاكيد");

            $(".inner,.inner2").addClass("changeDir");
            $(".inner2 #datetimepicker12,.inner2 #datetimepicker3,#map").addClass("dirForClockMap");
            // $(".notChange").addClass("dirForClockMap");
            $("section,footer,li,.display-4,.actions ul li a").addClass("fontForArab");
            $(".chnagePlaceHolder").attr("placeholder", "أدخل عنوان بريدك الالكتروني");
            $("#chnagPadding").css({"padding-right" :"5%"});
            $(this).text("EN");
           
        }else{
            changeLanguage("en");
            $(".actions ul li a").text("Next Step");
            $(".actions ul li a").first().text("Previous");
            $(".inner,.inner2").removeClass("changeDir");
            $("section,footer,span,li,.display-4,.actions ul li a").removeClass("fontForArab");
            $(".chnagePlaceHolder").attr("placeholder", "Enter your email address");
            $(this).text("AR");
        }
    });


});