<template>
  <div class="black-bg" v-if="isModalOpen === true">
    <div class="white-bg">
      <img :src="onerooms[clickedIdx].image" style="width: 100%" />
      <h4>{{ onerooms[clickedIdx].title }}</h4>
      <p>{{ onerooms[clickedIdx].content }}</p>
      <p>{{ onerooms[clickedIdx].price }}원</p>
      <button @click="isModalOpen = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
 
  <div v-for="(room, i) in onerooms" :key="i">
    <img :src="room.image" class="room-img" />
    <h4 @click="isModalOpen = true; clickedIdx = i">{{ room.title }} </h4>
    <p>{{ room.price }}</p>
  </div>
</template>

<script>
import data from './assets/onerooms';

export default {
  name: 'App',
  data() { // 데이터 보관함
    return {
      menus: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      count: 0,
      isModalOpen: false,
      onerooms: data,
      clickedIdx: 0,
    }
  },
  methods: { // 함수
    increase(){
      this.count++;
    }
  },
  components: {
  }
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

</style>
