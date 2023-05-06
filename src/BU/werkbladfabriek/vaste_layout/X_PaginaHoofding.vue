<template>

  <div id="hoofding">
    <p>naam: _______________________</p>
    <div class="text-h4 werkbladtitel" contenteditable="true"><slot></slot></div>

    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editmode: false
    };
  }
};
</script>
<style scoped>
#hoofding {
  height: 2cm;
  /* background-color: aqua; */
}
p {
  text-align: right;
}
img {
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -50px;
  margin-left: -30px;
}
.werkbladtitel{
  text-align: center;
}
</style>
