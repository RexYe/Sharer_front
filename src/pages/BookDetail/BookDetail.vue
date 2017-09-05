<template>
  <div class="BookDetail">
    <div class="top-div">
      <mt-header title="书二">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    </div>
    <div class="book-intro">
      <div class="book-img">
        <img src="http://www.dayila.net/_static/kh_book_cover/2012_07/13929643555306f303521bb0.96867513.jpg">
      </div>
      <div class="book-info">
        <li >作者：{{this.book_info[0].author}}</li>
        <li >出版社：{{this.book_info[0].publish_house}}</li>
        <li id="book-info-price">原价：¥{{this.book_info[0].price}}</li>
      </div>
    </div>
    <div class="book-seller-list">
      <div class="book-seller-list-detail" v-for="item in book_seller">
        <img :src="item.head_img">
        <li>{{item.name}}</li>
        <li id="book-seller-price">¥：{{item.price}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Header } from 'mint-ui';
import  './BookDetail.css'


Vue.component(Header.name, Header);
export default {
  name:'bookedetail',
  data () {
    return {
      book_info:[{
        author:'王万良',
        publish_house:'清华出版社',
        price:'35',
      }],
      book_seller:[{
        name:'许见阳',
        head_img:'http://www.dayila.net/_static/kh_book_cover/2012_07/13929643555306f303521bb0.96867513.jpg',
        price:'10',
      },
    {
      name:'吴家成',
      head_img:'',
      price:'11',
    },
    {
      name:'王家伟',
      head_img:'',
      price:'13',
    }]
    }
  }
}
</script>

<style lang="css">
</style>
