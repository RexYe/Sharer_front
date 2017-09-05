<template>
  <div class="Publish">
    <div class="text">
      <mt-field label="书名" placeholder="请输入书名" v-model="bookname"></mt-field>
      <mt-field label="作者" placeholder="请输入作者" type="email" v-model="author"></mt-field>
      <mt-field label="ISBN" placeholder="请输入ISBN" type="tel" v-model="ISBN"></mt-field>
<mt-field  placeholder="描述一下你的书" type="textarea" rows="4" v-modal="introduction"></mt-field>
    </div>
    <div class="upload-img">
      <div class="img-btn" v-for="i in 3">
        +
      </div>

      <!-- <uploadImg1></uploadImg1> -->
    </div>
    <div class="college">
      <li>浙江工业大学-计算机-物联网</li>
    </div>
    <div class="publish-bottom-div">
      <div class="made-price">
        <span>书价</span>
        <mt-field  placeholder="¥0.00" v-model="bookprice"></mt-field>
      </div>
      <div class="sure-to-publish">
        <mt-button type="danger">确定发布</mt-button>
      </div>
    </div>

    <!-- <bottomMenu1 /> -->
  </div>
</template>

<script>
// import bottomMenu1 from '../../components/bottomMenu/bottomMenu'
import { Field } from 'mint-ui';
import Vue from 'vue'
import uploadImg1 from '../../components/uploadImg'
import './Publish.css'
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

Vue.component(Field.name, Field);
export default {
  name:"publish",
  data () {
    return {

    }
  },
  components:{
    uploadImg1
    // bottomMenu1
  }
}
</script>

<style lang="css">
</style>
