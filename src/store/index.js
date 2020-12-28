import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchText:null,
    sorting:false,
    tasks:[
      {
        id:1,
        title:"Brush your teeth",
        done:false,
        dueDate: "2020-12-19"
      },
      {
        id:2,
        title:"Get ready for online school",
        done:false,
        dueDate: '2020-10-17'
      },
      {
        id:3,
        title:"Complete Math Submission",
        done:false,
        dueDate: ""
      },
    ],
    snackbar:{
      show:false,
      text: ''
    }
  },
  mutations: { // note: to invoke any methods, you have to commit a mutation
    setSearch(state,value){
      //console.log('value',value)
      state.searchText=value
    },
    addTask(state,newTaskTitle ){
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done:false,
        dueDate:''
      }
      state.tasks.push(newTask)

  },
    doneTask(state,id){
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done= !task.done
    },

    deleteTask(state,id){
      state.tasks = state.tasks.filter(task=>task.id !== id)
  },
    showSnackbar(state, text) {
      let timeout = 0
      if(state.snackbar.show){
        state.snackbar.show = false
        timeout=300
      }
      setTimeout(()=> {
        state.snackbar.show = true
        state.snackbar.text = text
      },timeout)

    },
    hideSnackbar(state){
      state.snackbar.show = false
    },
    updateTaskTitle(state, payload){
     //console.log(payload)
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.title = payload.title

    },
    updateTaskDueDate(state, payload){
      //console.log(payload)
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.dueDate = payload.dueDate

    },
    setTasks(state,tasks){
      state.tasks = tasks
    },
    toggleSorting(state){
      state.sorting=!state.sorting
    }
  },
  actions: { //note: to invoke any methods, you have to dispatch an action
    addTask({commit}, newTaskTitle){
      commit('addTask',newTaskTitle )
      commit('showSnackbar','Task Added')
    },
    deleteTask({commit},id){
      commit('deleteTask',id)
      commit('showSnackbar','Task Deleted')
    },
    updateTaskTitle({commit},payload){
      commit('updateTaskTitle',payload)
      commit('showSnackbar','Task Updated !')
    },
    updateTaskDueDate({commit},payload){
      commit('updateTaskDueDate',payload)
      commit('showSnackbar','Due Date Updated !')
    }
  },
  getters: {
    tasksFiltered(state){
      if(!state.searchText)
        return state.tasks
      else
        return state.tasks.filter(task => task.title.toLowerCase().includes(state.searchText.toLowerCase()) )
     }
  }
})
