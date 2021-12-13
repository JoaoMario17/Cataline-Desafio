<template>
  <div class="wrapper animate__animated animate__slideInRight">
    <div class="group-up-box">
      <div class="group-up-box-arrow-wrapper" @click="$emit('fpback')" >
        <img class="group-up-box-arrow" src="../assets/images/arrow-left.svg">
      </div>

      <div class="group-up-box-text-box">
        <h1>{{groupTitle}}</h1>
        <p>Selecione uma pergunta</p>
      </div>
      <img class="group-up-box-logo" :src="require(`@/assets/images/${getIconPath}`)" :alt="id">
    </div>

    <hr class="group-line-divider" width="95%">

    <div class="group-questions-box">
      <ul class="group-questions-list">
        <li @click="$emit('questionselect',question.id)" v-for="(question,index) in getQUestions" :key="index">
          {{question.title}}
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>

  export default{
    emits: ["groupSelect","fpback","questionselect","gback"],
    props: {
      id: Number
    },
    data(){
      return{
        faqs: [],
        string: 'partnership.svg'
      }
    },
    created(){
      this.$store.dispatch('fetchData')
      this.setData()
    },
    computed: {
      $allFaqs(){
        return this.$store.getters.$allFaqs
      },
      groupTitle(){
        var title = "titulo";

        for(var i = 0; i<this.faqs.length ; i++){
          if(this.faqs[i].id == this.$props.id){
            title = this.faqs[i].title
          }
        }
        return title
      },
      getIconPath(){
        var icon = ''

        for(var i = 0; i<this.faqs.length ; i++){
          if(this.faqs[i].id == this.$props.id){
            icon += this.faqs[i].icon
          }
        }
        return icon
      },
      getQUestions(){
        var questions = []

        for(var i = 0; i<this.faqs.length ; i++){
          if(this.faqs[i].id == this.$props.id){
            questions = this.faqs[i].questions
          }
        }

        return questions
      }
    },
    methods: {
      setData(){
        this.faqs = this.$allFaqs;
      }
    }

  }
</script>

<style scoped>
  .group-up-box{
    display: flex;
    align-items: flex-start;

    margin-top: 30px;
    
    width: 90%;
    height: 55px;
  }

  .group-up-box-arrow-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;

    width: 40px;
    height: 30px;
  }

  .group-up-box-arrow-wrapper:hover{
    background-color: #5D6681;
    background: rgba(38, 40, 44, 1)
  } 

  .group-up-box-text-box {
    margin-left: 20px;
    margin-right: 40px;

    display: flex;
    flex-direction: column;
  }

  .group-up-box-text-box > *{
    margin: 0;

    font-family: Lato;
    color: #F5F6F8;
    font-weight: bold;
    font-size: 20px;
  }

  .group-up-box-text-box p {
    font-weight: 400;
    font-size: 13px;

    margin-top: 10px;
  }

  .group-up-box-logo{
    width: auto;
    height: 27px;

    align-self: center;
  }

  .group-line-divider {
    margin-top: 25px;

    opacity: 0.03;
  }

  .group-questions-box{
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .group-questions-list{
    width: 100%;

    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0  ;
    list-style: none;
  }

  .group-questions-list > li {
    font-family: Lato;
    color: #F5F6F8;
    font-weight: 400;
    font-size: 16px;

    box-sizing: border-box;
    padding-left: 20px;

    cursor: default;

    display: flex;
    align-items: center;
    border-radius: 5px;

    width: 95%;
    height: 50px;
  }

  .group-questions-list > li:hover{
    background-color: #5D6681;
    background: rgba(93, 102, 129, 0.2);
  }
</style>  