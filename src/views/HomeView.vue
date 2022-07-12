<template>
  <div class="home">
    <appHeader></appHeader>
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld/>

    <div class="container-fluid" id="how">
        <div class="row first-row" >
            <div class="col-md-6 col-A1 col-sm-12 ">
                <h3 class="imagine-a-life slide-in"><b>Imagine a life of no delay...</b></h3>

                    <ul class="list1 slide-in-delay1">
                        <!--<img src="../assets/images/Rectangle-19.png"><li>Restaurant menu at a glance</li><br>
                        <img src="../assets/images/Rectangle-19.png"><li>Supermarket products on the go</li><br>
                        <img src="../assets/images/Rectangle-19.png" class="bar"><li>Goodbye to change wahala & POS failure</li><br>
                        <img src="../assets/images/Rectangle-19.png"><li>No stress, order comes to table</li><br>-->

                        <li><img src="../assets/images/Rectangle-19.png" class="rec" >Restaurant menu at a glance</li><br>
                        <li><img src="../assets/images/Rectangle-19.png" class="rec" >Supermarket products on the go</li><br>
                        <li><img src="../assets/images/Rectangle-19.png" class="rec" >Goodbye to change wahala & POS failure</li><br>
                        <li><img src="../assets/images/Rectangle-19.png" class="rec" >No stress, order comes to table</li><br>
                    </ul>

                    <div class="stores col-xs-12">
                        <img src="../assets/pic1/shutterstock_2022250442-2.png" class="store1">
                        <img src="../assets/pic1/shutterstock_2022250442-2-1.png" class="store2">
                        <!--<img src="../assets/images/apple-logo.png" class="appleStore">-->
                        <!--<img src="../assets/images/playstore-logo.png" class="playStore">-->
                    </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 ">
                <div class="img1-div col-xs-12 ">
                    <img src="../assets/images/Vector-31.png" class="img1 slide-from-right">
                </div>
            </div>

        </div>

        <div class="second-row">
            <div class="row ">
            <div class="row row2">
                <div class="col-md-10">
                    <h3 class="your-everyday"><b>Your everyday has become pleasurable</b></h3>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>

        <div class="row row3">
            <aos-vue animation="fade-right"  class="col-B1 col-md-6 col-xs-12 image">
                <img src="../assets/images/phone2.png" class="phone-1">
            </aos-vue>
            <div class="col-B1 col-md-6 col-xs-12">
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        <img src="../assets/images/img-1.png" class="img2 "><br>

                <!--<img src="../assets/images/phone2-mini.png" class="img3 col-xs-12">-->
                    </div>
                    <aos-vue animation="fade-up" easing="ease-in" class="col-md-12 col-xs-12">
                        <img src="../assets/images/phone-2-edit.png" class="img3 col-xs-12">
                    </aos-vue>
                </div>
            </div>
        </div>
        </div>


    </div>

    <qrSection></qrSection>
    <oneApp></oneApp>
    <trustedBy></trustedBy>
    <footerLinks></footerLinks>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import appHeader from '../components/headerNav.vue';
import qrSection from '../components/qrSection.vue';
import oneApp from '../components/oneApp.vue';
import trustedBy from '../components/trustedBy.vue';
import footerLinks from '../components/linksFooter.vue';

//import gsap from 'gsap'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    appHeader,
    qrSection,
    oneApp,
    trustedBy,
    footerLinks
  },
  data () {
    return {
        //elements: null,
        //windowHeight: null
    }
  },
  methods: {
    //init() {
    //    elements = document.querySelectorAll('.image');
    //    windowHeight = window.innerHeight;
    //},
    //checkPosition() {
    //    for (var i = 0; i < elements.length; i++) {
    //        var element = elements[i];
    //        var positionFromTop = elements[i].getBoundingClientRect().top;

    //        if (positionFromTop - windowHeight <= 0) {
    //            element.classList.add('slide-in');
    //            element.classList.remove('img')
    //        } else{
    //            element.classList.add('slide-out');
    //        }
    //    }
    //}
  },
  mounted() {


  }
}
</script>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/euclid-circular-a');
.home {
    background: #FFF6FF;
    overflow-x: hidden;
    overflow-y: hidden;
    /*height: min-content;*/
    font-family: 'Euclid Circular A';

}
/*#how {
    min-height: 100vh;
    position: sticky;
}*/
* {
    margin: 0%;
    padding: 0%;
}
.imagine-a-life {
    font-style: normal;
    font-weight: 600;
    font-size: 85px;
    line-height: 90px;

    letter-spacing: -0.05em;
    font-family: 'poppins';
    /*margin-top: 152px;*/
    /*margin-left: 110px;*/
    width: 540px;
    color: black;
    text-align: left;
    margin-left: 126px;
    font-family: 'Euclid Circular A';
}
.first-row {
    margin-top: 172px;
}
.col-A1 {
    /*border: 1px solid red;*/
    margin-left: 0px;
}
.rec {
    transform: translateX(-20px);
}
.stores {
    margin-top: 50px;
    margin-bottom: 70px;
    transform: translateX(-0px);
}
.store2 {
    margin-left: 23px;

}
li {
    list-style: none;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    font-family: 'poppins';
    color: #000000;
    display: inline-block;
    margin-inline-start: 20px;
    margin-bottom: 20px;
    font-family: 'Euclid Circular A';
}
ul {
    text-align: left;
    margin-top: 40px;
    margin-left: 126px;
}
li img {
    /*margin-right: 20px;*/
    display: inline-block;
}
.appleStore {
    transform: scale(0.25) translate(-1270px, -200px);
    float: left;
    margin-left: 126px;
}
.playStore {
    transform: scale(0.25) translate(-300px, -1200px);
    text-align: left;
    margin-left: 126px;
}

.img1 {
    width: 737px;
    height: 600px;
    transform: scale(0.9);

    margin-top: -50px;
    margin-right:-90px;
    /*animation-name: opaq;
    animation-duration: 3s;*/
}
.second-row {
    background-color: #000000;
    height: 1250px;
    margin-top: 0px;
    margin: 0;
    padding: 0;
    width: 100vw;
    /*position: absolute;*/
    left: 0px;
    /*transform: translate(0px, 0px);*/
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
.img2 {
    /*transform: scale(0.25) translate(-3300px, -8000px);*/
    height: 660px;
    width: 560px;
    text-align: center;
    transform: translate(-120px, -100px);

    /*transform: scale(0.25);*/
}
.container-fluid {
    margin: 0%;
    padding: 0%;
}
.phone-1 {
    transform: scale(0.85) translateY(110px);
}
.img3 {
    /*transform: scale(0.45) translate(-700px, -7615px);*/
    height: 360px;
    width: 550px;
    transform: scale(0.9) translate(-100px, -80px);
}
.container-fluid{
    height: fit-content;
}
.slide-in {
    animation-name: slide-in;
    animation-duration: 1.5s;
}
/*.slide-in-delay1 {
    animation-name: slide-in;
    animation-duration: 2.5s;

}*/
ul li:nth-child(1) {
    animation-name: stagger;
    animation-duration: 1s;
}
ul li:nth-child(3) {
    animation-name: stagger;
    animation-duration: 3s;;
}
ul li:nth-child(5) {
    animation-name: stagger;
    animation-duration: 5s;
}
ul li:nth-child(7) {
    animation-name: stagger;
    animation-duration: 7s;
}

.slide-out {
    animation-name: slide-out;
    animation-duration: 1.5s;
}
.fade-in {
    animation-name: fade-in;
    animation-duration: 0.8s;
    animation-delay: 2.8s;
    display: block;
}

.slide-from-right {
    animation-name: slide-from-right;
    animation-duration: 1.5s;
    /*animation-delay: 3s;*/
    animation-fill-mode: forwards;
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

@keyframes slide-out {
    from {
        transform: translateX(0px);
        opacity: 1;
        };
    to {
        transform: translateX(-1000px);
        opacity: 0;
    }
}
@keyframes fade-in {
    from {opacity: 0;};
    to {opacity: 1;}
}

@keyframes slide-from-right {
    from {
        transform: translateX(1000px);
        opacity: 0;
        };
    to {
        transform: translateX(0px);
        opacity: 1;
    }
}

/*Stagger animations for the list */

@keyframes stagger {
 from {
    opacity: 0;
    transform: translateY(20px);
 };
 to {
    opacity: 1;
    transform: translateY(0);
 }
}

 /*  Animation starts here */
  [data-aos='phone1-slide'] {
    transform: translateX(-1000px);
    opacity: 0;
  }
  /*  Animation ends here */
  [data-aos='phone1-slide'].aos-animate {
    transform: translateX(0px);
    opacity: 1;
  }







@media screen and (max-width: 800px) {
    /*.home {
        overflow-x: hidden;
        position: relative;
    }*/
    * {
        margin: 0%;
        padding: 0%;
    }
    .imagine-a-life {
        font-size: 70px;
        width: 300px;
        line-height: 70px;
        padding: 0%;

        margin: auto;
        margin-right: 210px;
        /*border: 1px solid red;*/
        /*word-break: break-all;*/
        margin-left: 20px;
    }
    ul {
        margin: auto;
        margin-top: 50px;
        /*border: 1px solid red;*/
        width: 380px;
        margin-left: 20px;

    }
    li {
        font-size: 18px;
        line-height: 20px;
        margin-bottom: 15px;
        /*width: 250px;*/
        /*padding-right: -35px;*/
        padding-left: 0;

    }
    li:nth-child(5){
        margin-right: 100px;
    }
    .stores {
        padding: 0px;
        transform: scale(0.9) translateX(-13px);
    }
    .store1 {
        transform: scale(0.75) translateX(20px);
        margin-right: 0px;

    }
    .store2 {
        transform: scale(0.75) translateX(-20px);
        margin-left: 0px;

    }
    .first-row {
        margin-top: 112px;
        margin-left: 5px;
        display: flex;
        justify-content: center;
        text-align: center;
    }
    .bar {
        transform: translateY(35px);
    }
    .appleStore {
        transform: scale(0.18) translate(-1890px, -450px);
    }
    .playStore {
        transform: scale(0.18) translate(-950px, -1830px);
    }
    .img1 {
        /*width: 437px;
        height: 400px;*/
        transform: scale(0.45) translate(-20px, -300px);   /*translate(-455px, -900px) */
        margin: auto;
        margin-top: -50px;
        /*margin-right:-90px;*/
        text-align: center;


        /*animation-name: opaq;
        animation-duration: 3s;*/
    }
    .col-xs-12 {
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .second-row {
        /*transform: translate(0px, -500px);*/
        margin: 0px;
        /*margin: auto;*/
        /*width: auto;*/
        /*width: 500px;*/
        position: relative;
        width: 100vw;
        margin-top: -250px;
        text-align: center;
        height: 1800px;
    }
    .your-everyday {
        font-size: 58px;
        /*margin: auto;*/
        margin-top: 150px;
        width: 250px;
        margin-left: 20px;
        /*margin-right: 390px;*/
        line-height: 50px;
    }
    .img2 {
        /*transform: scale(0.15) translate(-5750px, -21250px);*/  /* translate(-3300px, -8750px) */
        height: 450px;
        width: 320px;
        text-align: center;
        transform: translate(0px, -280px);
        margin-top: 50px;
        margin-right: 0px;
        display: block;
    }
    .phone-1 {
        transform: scale(0.6) translateY(-175px);
    }
    .img3 {
        /*transform: scale(0.3) translate(0px, 60px);*/
        height: 260px;
        width: 340px;
        display: block;
        transform: translate(0px, -270px);
    }

}




</style>
