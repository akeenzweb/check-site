<template>
  <div class="about">
    <!--<h1>This is an about page</h1>-->
    <appHeader></appHeader>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10">
                <div >
                        <img src="../assets/images/p-2.png" class="green-circle slide-from-up">
                        <img src="../assets/images/idea-img.png" class="bulb">
                    </div>
                    <div class="top">
                        <h3 class="we-are-a-company slide-from-up">We are a company of young, smart Africans disrupting the retail ecosystem.</h3>

                        <img src="../assets/images/r-img-1.png" class="yellow-woman slide-in">

                        <h3 class="people">People spend alot of time to make money, they shouldn’t take time to spend it.</h3>
                        <img src="../assets/images/p-1.png" class="peach-circle">
                    </div>
            </div>
            <div class="col-md-2">
                <img src="../assets/images/r-img-3.png" class="purple-guy slide-from-right">
                <img src="../assets/images/r-img-4.png" class="lady slide-from-right-slow1">
                <img src="../assets/images/r-img-2.png" class="man">
            </div>
        </div>

        <div class="black-background">
            <div class="row">
                <div class="col-md-10">
                        <h3 class="your-everyday"><b>Your everyday has become pleasurable</b></h3>
                    </div>
                    <div class="col-md-2"></div>
            </div>

            <div class="row">
                <div class="col-B1 col-md-6">
                    <aos-vue animation="fade-right"><img src="../assets/images/banner-1.png" class="calling img1"></aos-vue>
                    <aos-vue animation="fade-right"><img src="../assets/images/man.png" class="calling img2"></aos-vue>
                </div>
                <div class="col-B2 col-md-6">
                    <aos-vue animation="fade-left"><h3 class="we-wake">We wake up every day to one course, thinknig of how to solve everyday problems in the retail space.</h3></aos-vue>
                        <aos-vue animation="fade-left"><h3 class="we-wake2">We wake up every day to one course, thinknig of how to solve everyday problems in the retail space.</h3></aos-vue>
                </div>
            </div>
        </div>
        <!--<aos-vue animation="zoom-in"><img src="../assets/images/Vector-32.png" class="girl-at-supermarket"></aos-vue>-->
        <div class="zoom-container"><div class="girl-at-supermarket"><img src="../assets/images/Vector-32.png"></div></div>
    </div>




    <!--<qrSection></qrSection>-->
    <oneApp></oneApp>
    <trustedBy></trustedBy>
    <footerLinks></footerLinks>
  </div>
</template>

<script>

import appHeader from '../components/headerNav.vue';
//import qrSection from '../components/qrSection.vue';
import oneApp from '../components/oneApp.vue';
import trustedBy from '../components/trustedBy.vue';
import footerLinks from '../components/linksFooter.vue';


export default {
  name: 'AboutView',
  components: {
    appHeader,
    //qrSection,
    oneApp,
    trustedBy,
    footerLinks
  }
//  mounted() {
//    $(window).scroll(function(){
//        var scroll = $(window).scrollTop();
//        $(".zoom-container .girl-at-supermarket").css({
//            zoom: (1 + scroll/5) + "%"
//        })
//    })
//  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@300;500;600&display=swap');
@import url('http://fonts.cdnfonts.com/css/euclid-circular-a');


* {
    margin: 0%;
    padding: 0%;
}

.about {
    background: #FFF6FF;
    font-family: 'Euclid Circular A';
}





.container-fluid {
    margin: 0%;
    padding: 0%;
    overflow-x: hidden;
}
.green-circle {
   height:109px;
   width: 109px;
   margin-top: 45px;
   margin-left: -265px;
}

.bulb {
    Width: 89.31px;
    height: 89.97px;
    transform: translateX(396px);
    margin-top: 109px;
}

.we-are-a-company {
    font-family: 'poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 80px;
    line-height: 90px;
    letter-spacing: -0.05em;
    font-family: 'Euclid Circular A';

    text-align: left;
    margin-left: 126px;
    color: black;
    width: 800px;
}


.yellow-woman {
    border-radius: 50%;
    transform: translateX(140px) translateY(-80px);
    width: 112.38px;
    height: 112.38px;
}
.people {
    font-family: 'poppins';
    margin-left: 126px;
    font-style: normal;
    font-weight: 300;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: -0.05em;
    width: 900px;
    margin-top: -50px;

    text-align: left;
    font-family: 'Euclid Circular A';
}
.peach-circle {
    margin-left: 950px;
    width: 109px;
    height: 109px;
    margin-bottom: 50px;
}
.purple-guy {
    border-radius: 50%;
    transform: translateX(-80px);
    /*position: absolute;*/
    height: 190px;
    width: 190px;
    margin-top: 60px;
}
.lady {
    border-radius: 50%;
    transform: translateX(-190px);
    /*position: absolute;*/
    height: 200px;
    width: 200px;
    margin-top: 60px;
}
.man {
    border-radius: 50%;
    /*transform: translateX(-9px) translateY(550px) scale(0.9);
    position: absolute;*/

    transform: translateX(-50px);
    /*position: absolute;*/
    height: 150px;
    width: 150px;
    margin-top: 60px;
}
.black-background {
    background-color: black;
    height: 1300px;
    margin-top: 56px;
    margin: 0;
    padding: 0;
    width: 100vw;
}
.your-everyday {
    color:#fff;
    font-style: normal;
    font-weight: 600;
    font-size: 80px;
    line-height: 90px;
    letter-spacing: -0.05em;
    font-family: 'poppins';
    margin-top: 136px;
    text-align: left;
    margin-left: 100px;
    width: 900px;
    font-family: 'Euclid Circular A';
}
.calling {
    width: 488px;
    height: 394px;
    margin-top: 68px
}
.we-wake {
    font-family: 'poppins';
    color: #fff;
    font-style: normal;
    font-weight: 300;
    font-size: 35px;
    line-height: 50px;
    letter-spacing: -0.05em;
    width: 500px;
    margin-top: 170px;
    text-align: left;
    font-family: 'Euclid Circular A';
}
.we-wake2 {
    font-family: 'poppins';
    color: #fff;
    font-style: normal;
    font-weight: 300;
    font-size: 35px;
    line-height: 50px;
    letter-spacing: -0.05em;
    width: 500px;
    margin-top: 270px;
    text-align: left;
    font-family: 'Euclid Circular A';
}
.zoom-container {
    max-height: 100%;
    width: 100%;
    overflow: hidden;
    /*border: 2px solid green;*/

    margin-top: 114px;
}
.girl-at-supermarket {
    /*margin-top: 114px;*/
    /*position: relative;*/
    background-position: center;
    background-size: cover;
    transition: 0.7s;
}
.girl-at-supermarket:hover {
    transform: scale(1.2);
}

@keyframes slide-from-up {
    from {
        transform: translateY(-1000px);
        opacity: 0;
        };
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-in {
    from {
        transform: translateX(-1000px);
        opacity: 0;
        };
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-from-right {
    from {
        transform: translateX(1000px);
        opacity: 0;
        };
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
.slide-from-up {
    animation: slide-from-up 1.5s;
}
.slide-in {
    animation: slide-in 1.5s;
}
.slide-from-right {
    animation: slide-from-right 1.5s;
}
.slide-from-right-slow1 {
    animation: slide-from-right 2.5s;
}












@media screen and (max-width: 800px) {
    .green-circle {
        height:59px;
        width: 59px;
        margin-left: -145px;
        margin-top: 9px;
    }
    .bulb {
        Width: 49.31px;
        height: 49.97px;
        transform: translateX(46px);
        margin-top: 59px;
    }
    .we-are-a-company {
        margin-left: 20px;
        font-size: 45px;
        line-height: 45px;
        width: 350px;
    }
    .yellow-woman {
        transform: translateX(-70px) translateY(0px);
        width: 72.38px;
        height: 72.38px;
    }
    .people {
        font-size: 22px;
        line-height: 30px;
        margin-left: 20px;
        width: 350px;
        margin-top: 0px;
    }
    .peach-circle {
        margin-left: 50px;
        width: 59px;
        height: 59px;
        margin-top: 30px;
        transform: translateX(-60px);
        margin-bottom: 0px;
    }
    .purple-guy {
        margin-top: -1160px;
        transform: translateX(190px);
        height: 80px;
        width: 80px;
    }
    .lady {
        margin-top: -750px;
        transform: translateX(90px);
        height: 50px;
        width: 50px;
    }
    .man {
        margin-top: -180px;
        transform: translateX(30px);
        height: 80px;
        width: 80px;
    }
    .your-everyday {
        font-size: 40px;
        /*margin: auto;*/
        margin-top: 70px;
        width: 280px;
        margin-left: 20px;
        /*margin-right: 390px;*/
        line-height: 50px;
    }
    .black-background {
        height: 1280px;
    }
    .calling {
        width: 318px;
        height: 254px;
        /*transform: scale(0.8);*/
    }
    .zoom-container {
        max-height: 100%;
        width: 100%;
        overflow: hidden;
        /*border: 2px solid green;*/

        margin-top: 0px;
    }
    .girl-at-supermarket {
        width: 100%;
        height: 100%;
        margin-top: 0px;
    }
    .zoom-container img {
        height: 100%;
        width: 100%;
    }
    .we-wake, .we-wake2 {
        font-size: 22px;
        line-height: 30px;
        letter-spacing: -0.05em;
        width: 340px;
        margin-left: 20px;
    }
    .img2 {
        margin-top: 30px;
        transform: translateY(220px);
    }
    .we-wake {
        margin-top: 70px;
        transform: translateY(-320px);
    }
    .we-wake2 {
        margin-top: 55px;
    }

}


</style>
