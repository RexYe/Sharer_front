<template>
  <div class="OrderDetail">
    <div class="order-container">
      <div class="top-user">
        <img :src="order[0].seller_head_img">
        <div class="name-and-date">
          <li id="name">{{order[0].name}}</li>
          <li id="date">{{order[0].date}}</li>
        </div>
        <span id="price">¥{{order[0].price}}</span>
      </div>
      <div class="sth-about-book">
        <span>{{order[0].sthaboutbook}}</span>
      </div>
      <div class="book-photo" v-for="item in order[0].img">
        <img :src="item.src">
      </div>
    </div>
    <div class="order-bottom-menu">
      <div class="join-want">
        <span>加入心愿单</span>
      </div>
      <div class="i-want">
        <span>我想要</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import './OrderDetail.css'

export default {
  name:'OrderDetail',
  data () {
    return {
      order:[
        {
          name:'许见阳',
          seller_head_img:'http://upload.jianshu.io/users/upload_avatars/2979086/e08b736e-f99a-43c1-bce4-cc72e10eef88.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
          price:'10',
          date:'2017-9-5',
          sthaboutbook:'九成新，低价出，有意者带走,九成新，低价出，有意者带走九成新，低价出，有意者带走',
          img:[
            {
              src:'http://www.dayila.net/_static/kh_book_cover/2012_07/13929643555306f303521bb0.96867513.jpg'
            },
            {
              src:'http://www.dayila.net/_static/kh_book_cover/2014_09/141167712354247bc3f4117870332084.jpg'
            }
          ],
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
