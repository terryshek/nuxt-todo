<template>
  <article class="pa3 pa5-ns">
    <h1 class="f4 bold center mw6">Todos</h1>
    <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
      <li class="ph3 pv3 bb b--light-silver" v-for="todo of todos" >{{todo.task}}</li>
    </ul>
  </article>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      todos:state=>state.todos
    })
  },
  methods:{
    ...mapMutations([
      'increment', 'decrement'
    ])
  }

}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
