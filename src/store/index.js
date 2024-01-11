import { createStore } from 'vuex'
const dataURL = "https://understudystudent.github.io/vueEOMPdata/data/"

export default createStore({
  state: {
    Skills: null,
    Education: null,
    experience: null,
    projects: null,
    testimonials: null,
    jobTitle: null
  },
  getters: {},
  mutations: {
    setSkills(state, Skills) {
      state.Skills = Skills
    },
    setEducation(state, Education) {
      state.Education = Education
    },
    setExperience(state, experience) {
      state.experience = experience
    },
    setProjects(state, projects) {
      state.projects = projects
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials
    },
    setJobTitle(state, jobTitle) {
      state.jobTitle = jobTitle;
    },
  },
  actions: {
    async fetchSkills(context) {
      try {
        let res = await fetch(dataURL);
        let { Skills } = await res.json();
        context.commit('setSkills', Skills);
      } catch (e) {
        alert("Failed to fetch Skills");
      }
    },

    // Education

    async fetchEducation(context) {
      try {
        let res = await fetch(dataURL);
        let { Education } = await res.json();
        context.commit('setEducation', Education);
      } catch (e) {
        alert("Failed to fetch Education");
      }
    },

    // Experience

    async fetchExperience(context) {
      try {
        let res = await fetch(dataURL);
        let { experience } = await res.json();
        context.commit('setExperience', experience);
      } catch (e) {
        alert("Failed to fetch Experience");
      }
    },

    // Projects

    async fetchProjects(context) {
      try {
        let res = await fetch(dataURL);
        let { projects } = await res.json();
        context.commit('setProjects', projects);
      } catch (e) {
        alert("Failed to fetch projects");
      }
    },

    // Testimonials

    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataURL);
        let { Testimonials } = await res.json();
        context.commit('setTestimonials', Testimonials);
      } catch (e) {
        alert("Failed to fetch Testimonials");
      }
    },

    // Job Title

    async fetchJobTitle(context) {
      try {
        let res = await fetch(dataURL);
        let { jobTitle } = await res.json();
        context.commit('setJobTitle', jobTitle);
      } catch (e) {
        alert("Failed to fetch Job Title");
      }
    }
  },
  modules: {}
});
