import { createStore } from 'vuex'

const dataUrl = "https://understudystudent.github.io/vueEOMPdata/data/"

export default createStore({
  state: {
    Jobtitle : null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null,
  },
  getters: {
  },
  mutations: {
    SetJobtitle (state,value){
      state.Jobtitle = value
    },
    SetAbout (state,value){
      state.about = value
    },
    SetEducation (state,value){
      state.education = value
    },
    SetSkills (state,value){
      state.skills = value
    },
    SetTestimonials (state,value){
      state.testimonials = value
    },
    SetProjects (state,value){
      state.projects = value
    },
    
  },
  actions: {
    async fetchJobTitle(context){
      let res = await fetch(dataUrl)
      let {Jobtitle} =  res.json()
      context.commit('setJobTitle',Jobtitle)
    }
  },
  modules: {
  }
})
