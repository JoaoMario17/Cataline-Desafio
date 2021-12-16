<template>
  <div class="wrapper animate__animated animate__slideInLeft">
    <img class="card-astronaut" src="../assets/images/astronaut.svg" alt="astronaut">

    <section class="card-text">
      <h1>Perguntas frequentes</h1>
      <p>Escolha a categoria desejada</p>
    </section>

    <!-- <section class="card-buttons">
      <div @click="$emit('groupSelect',1)">
        <img src="../assets/images/rocket.svg" alt="">
        <p>{{titles[0].title}}</p>
      </div>
      <div @click="$emit('groupSelect',2)">
        <img src="../assets/images/astronaut-helmet.svg" alt="">
        <p>{{titles[1].title}}</p>
      </div>
      <div @click="$emit('groupSelect',3)">
        <img src="../assets/images/student-hat.svg" alt="">
        <p>{{titles[2].title}}</p>
      </div>
      <div @click="$emit('groupSelect',4)">
        <img src="../assets/images/partnership.svg" alt="">
        <p>{{titles[3].title}}</p>
      </div>
    </section> -->
    <section class="card-buttons">
      <div v-for="category in $getAllFaqs" :key="category.id" @click="$emit('groupSelect',category.id)">
        <img :src="require(`@/assets/images/${category.icon}`)" alt="">
        <p>{{category.title}}</p>
      </div>
    </section>
  </div>
</template>

<script> 
  import {mapGetters,mapActions} from 'vuex'

  export default{
    emits: ["groupSelect","fpback","questionselect","gback"],
    data(){
      return {

      }
    },
    created(){
      this.fetchData
    },
    computed: {
      ...mapGetters([
        '$getAllFaqs',
        '$getFaqById'
      ])
    },
    methods: {
      ...mapActions([
        'fetchData'
      ]),
      setData(){
        this.titles = this.$allFaqsTitles
      },
      showData(){
        console.log(this.titles[0].title);
      }
    },
  }
</script>

<style scoped>
  .card-astronaut {
    width: auto;
    height: 110px;

    margin-top: 15px;
  }

  .card-text {
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 38px 0px 38px;

    font-family: Lato;
    color: #F5F6F8;
  }

  .card-text h1 {
    margin: 0;

    font-weight: bold;
    font-size: 20px;
  }

  .card-text p {
    margin-top: 7px;

    font-weight: 400;
    font-size: 13px;
  }

  .card-buttons {
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  .card-buttons div {
    display: flex;
    border-radius: 5px;

    width: 95%;
    height: 50px;
  }

  .card-buttons div:hover {
    background-color: #5D6681;
    background: rgba(93, 102, 129, 0.2);
  }

  .card-buttons div:active{
    background-color: #5D6681;
    background: rgba(34, 224, 219, 0.5)
  }

  .card-buttons div img {
    margin-left: 30px;

    width: 28px;
    height: auto;
  }

  .card-buttons div p {
    width: 100%;
    margin-left: 30px;

    font-family: Lato;
    color: #F5F6F8;
    font-weight: 400;
    font-size: 16px;

    cursor: default;
  }
</style>