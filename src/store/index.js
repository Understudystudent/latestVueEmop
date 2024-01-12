import { createStore } from 'vuex'
const url = "https://understudystudent.github.io/vueEOMPdata/data/"

export default createStore({
  state: {
    skills: null,
    education: null,
    experience: null,
    projects: null,
    testimonials: null,
    jobTitle: null
  },
  getters: {},
  mutations: {
    setSkills(state, skills) {
      state.skills = skills
    },
    setEducation(state, education) {
      state.education = education
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
        let res = await fetch(url);
        let { skills } = await res.json();
        context.commit('setSkills', skills);
      } catch (e) {
        alert("Failed to fetch Skills");
      }
    },

    // Education

    async fetchEducation(context) {
      try {
        let res = await fetch(url);
        let { education } = await res.json();
        context.commit('setEducation', education);
      } catch (e) {
        alert("Failed to fetch Education");
      }
    },

    // Experience

    async fetchExperience(context) {
      try {
        let res = await fetch(url);
        let { experience } = await res.json();
        context.commit('setExperience', experience);
      } catch (e) {
        alert("Failed to fetch Experience");
      }
    },

    // Projects

    async fetchProjects(context) {
      try {
        let res = await fetch(url);
        let { projects } = await res.json();
        context.commit('setProjects', projects);
      } catch (e) {
        alert("Failed to fetch projects");
      }
    },

    // Testimonials

    async fetchTestimonials(context) {
      try {
        let res = await fetch(url);
        let { testimonials } = await res.json();
        context.commit('setTestimonials', testimonials);
      } catch (e) {
        alert("Failed to fetch Testimonials");
      }
    },

    
    // Job Title

    async fetchJobTitle(context) {
      try {
        let res = await fetch(url);
        let { jobTitle } = await res.json();
        context.commit('setJobTitle', jobTitle);
      } catch (e) {
        alert("Failed to fetch Job Title");
      }
    }
  },
  modules: {}
});
