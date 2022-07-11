<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-D ">
                <h3 class="one">One App </h3><img src="../assets/images/Line-6.png" class="line"><h3 class="all">All Access</h3>
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
    font-family: 'Euclid Circular A';
}

.row {
    position: relative;
    background-color: black;
    color: #fff;
    margin-top: 70px;
    width: 101vw;
    margin: 0;
    padding: 0;
    transform: translateY(0px);
    height: 322px;

    text-align: center;
}

.one {
    font-family: 'poppins';
    display: inline-block;
    font-style: normal;
    font-weight: 600;
    font-size: 90px;
    line-height: 90px;
    letter-spacing: -0.05em;
    transform: translateY(20px);
    background: linear-gradient(90deg, rgba(220,12,201,1) 0%, rgba(129,55,203,1) 64%, rgba(242,180,159,1) 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    overflow-y: hidden;
    font-family: 'Euclid Circular A';
}
.all {
    font-family: 'poppins';
    display: inline-block;
    font-style: normal;
    font-weight: 600;
    font-size: 90px;
    line-height: 90px;
    letter-spacing: -0.05em;
    transform: translateY(20px);
    background: linear-gradient(90deg, rgba(242,180,159,1) 0%, rgba(232,168,166,1) 35%, rgba(254,223,166,1) 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    overflow-y: hidden;
    font-family: 'Euclid Circular A';
}

.col-D {
    text-align: center;
    margin-top: 83px;

}

.line {
    padding-left: 46px;
    padding-right: 46px;
    /*display: block;*/
}

@media screen and (max-width: 700px) {
    .row {
        margin-top: 0px;
        height: 422px;
    }
    .line {
        display: none;
    }
    .one {
        font-size: 60px;
    }
    .all {
        font-size: 60px;
    }
}
</style>