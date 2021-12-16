import { createStore } from "vuex";
import data from "./db.json"

export default createStore({
  state: {
    faqCategories:[]
  },
  mutations: {
    SET_FAQCATEGORIES(state,faqCategories){
      state.faqCategories = faqCategories;
    }
  },
  actions: {
    fetchData(context){
      var faqCategories = data.faqCategories;
    
      context.commit('SET_FAQCATEGORIES',faqCategories)
    }
  },
  getters: {
    $getAllFaqs: (state) => {
      return state.faqCategories
    },
    $getFaqById: (state) => (id) => {
      return state.faqCategories.filter(faq => faq.id == id)
    },
    $getQuestions: (state) => {
      let questions = []

      state.faqCategories.forEach(faq => {
        faq.questions.forEach(question => {
          questions.push(question)
        })
      })

      return questions
    },
    $getQuestionById: (state,getters) => (id) => {
      let questions = getters.$getQuestions

      return questions.filter(question => question.id == id)
    }
  },
});
