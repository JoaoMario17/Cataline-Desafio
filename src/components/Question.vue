<template>
  <div class="wrapper">
    <div class="question-up-box">
      <div class="question-up-box-arrow-wrapper" @click="$emit('gback')" >
        <img class="question-up-box-arrow" src="../assets/images/arrow-left.svg">
      </div>

      <div class="question-up-box-text-box">
        <p>{{questionTitle}}</p>
      </div>
    </div>

    <p class="question-content" v-html="questionContent">
    </p>
  </div>
  
</template>

<script>
  import {mapGetters} from 'vuex'

export default{
  emits: ["groupSelect","fpback","questionselect","gback"],
  props: {
    question_id: Number
  },
  created(){
    console.log(this.$getQuestionById(this.$props.question_id))
  },
  computed: {
    ...mapGetters([
      '$getQuestions',
      '$getQuestionById'
    ]),
    questionTitle(){
      return this.$getQuestionById(this.$props.question_id)[0].title
    },
    questionContent(){
      return this.$getQuestionById(this.$props.question_id)[0].content
    }
  }
}

</script>


<style >
  .question-up-box{
    display: flex;
    align-items: flex-start;

    margin-top: 30px;
    
    width: 90%;
    height: 30px;
  }

  .question-up-box-arrow-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;

    width: 40px;
    height: 30px;
  }

  .question-up-box-arrow-wrapper:hover{
    background-color: #5D6681;
    background: rgba(38, 40, 44, 1)
  } 

  .question-up-box-text-box{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }  

  .question-up-box-text-box p {
    margin: 0;

    box-sizing: border-box;
    padding-left: 15px;

    font-family: Lato;
    color: #F5F6F8;
    font-weight: 400;
    font-size: 16px;
  }

  .question-content{
    margin-top: 40px;

    width: 80%;

    font-family: Lato;
    color: #F5F6F8;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
  }

  .question-content a {
    text-decoration: none;
    color: #22E0DB;
  }
</style>