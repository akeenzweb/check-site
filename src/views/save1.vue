<template>
  <div class="home">
    <appHeader></appHeader>
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld/>

    <div class="container-fluid" id="how">
        <div class="row first-row" >
            <div class="col-md-6 col-A1 col-sm-12 ">
                <h3 class="imagine-a-life"><b>Imagine a life of no delay...</b></h3>

                    <ul class="list1">
                        <!--<img src="../assets/images/Rectangle-19.png"><li>Restaurant menu at a glance</li><br>
                        <img src="../assets/images/Rectangle-19.png"><li>Supermarket products on the go</li><br>
                        <img src="../assets/images/Rectangle-19.png" class="bar"><li>Goodbye to change wahala & POS failure</li><br>
                        <img src="../assets/images/Rectangle-19.png"><li>No stress, order comes to table</li><br>-->

                        <li><img src="../assets/images/Rectangle-19.png" class="rec" >Restaurant menu at a glance</li><br>
                        <li><img src="../assets/images/Rectangle-19.png" class="rec" >Supermarket products on the go</li><br>
                        <li><img src="../assets/images/Rectangle-19.png" class="rec" >Goodbye to change wahala & POS failure</li><br>
                        <li><img src="../assets/images/Rectangle-19.png" class="rec" >No stress, order comes to table</li><br>
                    </ul>

                    <div class="stores">
                        <img src="../assets/images/apple-logo.png" class="appleStore">
                        <img src="../assets/images/playstore-logo.png" class="playStore">
                    </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="img1-div">
                        <img src="../assets/images/banner-1.png" class="img1">
                    </div>
            </div>

        </div>

        <div class="row second-row">
            <div class="row row2">
                <div class="col-md-10">
                    <h3 class="your-everyday"><b>Your everyday has become pleasurable</b></h3>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>

        <div class="row row3">
            <div class="col-B1 col-md-6 col-xs-12">
                <img src="../assets/images/phone2.png" class="phone-1">
            </div>
            <div class="col-B1 col-md-6 ">
                <img src="../assets/images/img-1.png" class="img2">

                <img src="../assets/images/phone2-mini.png" class="img3">
            </div>
        </div>


    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import appHeader from '../components/headerNav.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    appHeader
  }
}
</script>

<style scoped>
.home {
    background: #FFF6FF;
    overflow-x: hidden;
    height: min-content;

}
#how {
    min-height: 100vh;
    position: sticky;
}
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
    margin-top: -80px;
    margin: 0;
    padding: 0;
    width: 120vw;
    /*position: absolute;*/
    left: 0px;
    transform: translate(0px, -280px);
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
    width: 800px;
}
.img2 {
    transform: scale(0.25) translate(-3300px, -9000px);
}
.container-fluid {
    margin: 0%;
    padding: 0%;
}
.phone-1 {
    transform: scale(0.85) translateY(-1315px);
}
.img3 {
    transform: scale(0.45) translate(-700px, -7615px);
}
.container-fluid{
    height: fit-content;
}




@media screen and (max-width: 700px) {
    .home {
        /*overflow-x: hidden;*/
        position: relative;
    }
    /** {
        margin: 0%;
        padding: 0%;
    }*/
    .imagine-a-life {
        font-size: 70px;
        width: 325px;
        line-height: 70px;
        padding: 0%;

        margin: auto;
        margin-right: 210px;
        /*border: 1px solid red;*/
        word-break: break-all;
    }
    ul {
        margin: auto;
        margin-top: 50px;
        /*border: 1px solid red;*/
        width: 380px;

    }
    li {
        font-size: 18px;
        line-height: 20px;
        margin-bottom: 15px;
        width: 300px;
        padding-right: -35px;
    }
    .stores {
        padding: 0px;
        transform: translateX(-130px);
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
        transform: scale(0.45) translate(0px, -900px);   /*translate(-455px, -900px) */
        margin: auto;
        margin-top: -50px;
        /*margin-right:-90px;*/
        text-align: center;
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
        transform: translate(0px, -500px);
        margin: 0px;
        /*margin: auto;*/
        /*width: auto;*/
        /*width: 500px;*/
        width: 100vw;
        text-align: center;
        height: 1950px;
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
        transform: scale(0.15) translate(-5750px, -21250px);  /* translate(-3300px, -8750px) */
    }
    .phone-1 {
        transform: scale(0.65) translateY(-3045px);
    }
    .img3 {
        transform: scale(0.3) translate(-1390px, -14960px);
    }

}




</style>
