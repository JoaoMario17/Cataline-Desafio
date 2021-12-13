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
    $allFaqs(state){
      return state.faqCategories
    },
    $allFaqsTitles(state){
      let title = []

      for(var i = 0 ; i<state.faqCategories.length ; i++){
        title.push({id:state.faqCategories[i].id ,title: state.faqCategories[i].title})
      }

      return title
    }
    //Esse é um comentário de teste 
  },
});
