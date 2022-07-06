<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-E ">
                <h3 class="trust">TRUSTED BY</h3>
                <ul class="trusted-by-logos">
                    <li class="by-logo"><img src="../assets/images/c-1.png"></li>
                    <li class="by-logo" ><img src="../assets/images/c-2.png"></li>
                    <li class="by-logo" ><img src="../assets/images/c-3.png"></li>
                    <li class="by-logo" ><img src="../assets/images/c-4.png"></li>
                    <li class="by-logo" ><img src="../assets/images/c-5.png"></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/euclid-circular-a');

* {
    margin: 0%;
    padding: 0%;
    overflow-x: hidden;
}
.col-E {
    text-align: center;
    background-color: #fff;
}
.trust {
    font-family: 'poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 25px;
    letter-spacing: 0.4em;
    margin-top: 70px;
    overflow-y: hidden;

    font-family: 'Euclid Circular A';

}

li {
    display: inline-block;
    transform: scale(0.5);
    margin-left: -25px;
    margin-right: -25px;
    /*border: 1px  solid red;*/
}
ul {
    transform: translateX(-30px);
    margin-top: -95px;
    margin-bottom: 80px;
}

/*.trusted-by-logos {
    margin-top: 30px;
    transform: scale(1.5);
}
.by-logo {
    margin-left: 40px;
    margin-right: 40px;
}*/


@media screen and (max-width: 700px) {
    ul {
        transform: translateX(0px);
        margin-top: -0px;
        margin-bottom: 0px;
    }
}
</style>