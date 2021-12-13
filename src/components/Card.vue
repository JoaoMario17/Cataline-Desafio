<template>
    <div class="card" >
      <transition mode="out-in">
        <component :is="currentView" v-bind="propsFilter"
          @groupSelect="showGroup($event)"
          @fpback="fpBack()"
          @questionselect="showQuestion($event)"
          @gback="showGroup(undefined)"
        />
      </transition>
    </div>
</template>

<script>
  import 'animate.css'

  import FirstPage from "./FirstPage.vue"
  import Group from "./Group.vue"
  import Question from "./Question.vue"

  export default {
    emits: ["groupSelect","fpback","questionselect","gback"],
    components: { FirstPage, Group, Question },
    data(){
      return{
        currentView: "FirstPage",
        currentGroupId: 0,
        currentQuestionId: 0
      } 
    },
    methods: {
      showGroup(id){
        if(id != undefined){
          this.currentGroupId = id;
        } 
        this.currentView = "Group"
      }, 
      fpBack(){
        this.currentView = "FirstPage"
      },
      showQuestion(id){
        this.currentQuestionId = id
        this.currentView = "Question"
      }
    },
    computed: {
      propsFilter(){
        let props = {}
        if(this.currentView === "Group"){
          props = {id: this.currentGroupId}
        }else if(this.currentView === "Question"){
          props = {group_id: this.currentGroupId, question_id: this.currentQuestionId}
        }
        return props
      },
      $allFaqs(){
        return this.$store.getters.$allFaqs
      }
    },
    created(){
      this.$store.dispatch('fetchData');
    },
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 310px;
    height: 450px;
    border-radius: 1.2rem;

    /* background-color: #3F4452; */
    background: rgb(63,68,82);
    background: linear-gradient(180deg, rgba(63,68,82,1) 41%, rgba(38,40,44,1) 100%);
  }

  .v-enter-from,
  .v-leave-to  {
    opacity: 0;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.2s;
  }

  :root{
    --animate-duration: 0.1s;
    --animate-delay: 0s;
  }

</style>
