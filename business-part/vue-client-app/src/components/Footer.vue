<template>
  <section id="footer" class="fixed-bottom">

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 mt-3">
          <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-envelope"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 text-center text-white">
          <p class="h6">Industrial Database Project Ⓒ All right Reversed</p>
        </div>
      </div>
    </div>
  </section>
  <!-- ./Footer -->
</template>

<script>
// TODO zmienic komponenty na gradientowe
export default {
  name: "Footer"
};
</script>
 
<style  >
/* Footer */
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

#footer {
  background: linear-gradient(
    180deg,
    rgba(23, 167, 189, 1) 0%,
    rgba(23, 167, 189, 1) 21%,
    rgba(0, 128, 128, 1) 100%
  ) !important; /* w3c */
}

#footer ul.social li a i {
  margin-right: 5px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.social li:hover a i {
  font-size: 30px;
  margin-top: -10px;
}
#footer ul.social li a {
  color: #ffffff;
}
#footer ul.social li a:hover {
  color: #eeeeee;
}
</style>

