<template>
  <div class="wrapper">
    <div class="question-up-box">
      <div class="question-up-box-arrow-wrapper" @click="$emit('gback')" >
        <img class="question-up-box-arrow" src="../assets/images/arrow-left.svg">
      </div>

      <div class="question-up-box-text-box">
        <p>{{getQuestionTitle()}}</p>
      </div>
    </div>

    <p class="question-content" v-html="getQuestionContent()">
    </p>
  </div>
  
</template>

<script>
export default{
  emits: ["groupSelect","fpback","questionselect","gback"],
  props: {
    group_id: Number,
    question_id: Number
  },
  created(){
    this.$store.dispatch('fetchData')
    this.setData()
  },
  data(){
    return{
      faqs: [],
    }
  },
  computed: {
    $allFaqs(){
      return this.$store.getters.$allFaqs
    }
  },
  methods: {
    setData(){
      this.faqs = this.$allFaqs
    },
    getQuestionTitle(){
      let questions = []
      let question_title = ""

      for(let i = 0; i<this.faqs.length ; i++){
        if(this.faqs[i].id == this.$props.group_id){
          questions = this.faqs[i].questions
        }
      }

      for(let i = 0 ; i<questions.length ; i++){
        if(questions[i].id == this.$props.question_id){
          question_title = questions[i].title;
        }
      }

      return question_title
    },
    getQuestionContent(){
      let questions = []
      let question_content

      for(let i = 0; i<this.faqs.length ; i++){
        if(this.faqs[i].id == this.$props.group_id){
          questions = this.faqs[i].questions
        }
      }

      for(let i = 0 ; i<questions.length ; i++){
        if(questions[i].id == this.$props.question_id){
          question_content = questions[i].content;
        }
      }

      return question_content
  
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