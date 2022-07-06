<template>

    <div class="container-fluid">
        <div class="row">
                <div class="col-md-3"><h3 class="footer">How it Works</h3></div>
                <div class="col-md-3"><h3 class="footer" >About Us</h3></div>
                <div class="col-md-3"><h3 class="footer" >Register as a Marchant </h3></div>
                <div class="col-md-3"><h3 class="footer" ><router-link to="/policy" exact>Privacy Policy</router-link></h3></div>
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
    background-color: black;
    color: #fff;
    height: 280px;
    padding-top: 50px;
    text-align: center;
}
a {
    color: #fff;
    text-decoration: none;
}
.footer {
    font-weight: 300;
    font-size: 25px;
    overflow-y: hidden;
}

@media screen and (max-width: 700px) {
    * {
        overflow-x: hidden;
    }
    .row {
        text-align: left;
        padding: 20px;
        padding-top: 50px;
    }
}
</style>