<template>
  <div class="todo-list">
    <div class="_wrapper">
      <h1>To do list!</h1>
      <!-- items -->
      <div
        v-for="item in $store.state.items.data"
        :key="item.id"
        class="_row"
      >
        <div
          @click="$store.dispatch('items/set', {
            id: item.id,
            done: !item.done
          })"
          class="_checkbox"
        >{{
          item.done ? '✅' : '⚪️'
        }}</div>
        <input
          class="_input"
          :value="item.summary"
          @input="updateSummary($event.target.value, item.id)"
          type="text"
        />
      </div>
      <!-- new item -->
      <div class="_row">
        <div
          @click="newItem.done = !newItem.done"
          class="_checkbox"
        >{{
          newItem.done ? '✅' : '⚪️'
        }}</div>
        <input @keydown.enter="addItem" class="_input" v-model="newItem.summary" type="text" />
      </div>
      <button @click="addItem" class="_add-btn">Add</button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>

// .todo-list
._row
  display flex
  align-items center
  width 100%
._input
  font-size 17px
  padding .5em
  flex 1
._checkbox
  font-size 30px
  margin-right .5em
  margin-bottom -0.2em
  &:hover
    cursor pointer
._add-btn
  background none
  border none
  font-size 22px
  color #42b983
  margin-top .5em
  width 100%

</style>

<script>
export default {
  mounted () {
    this.$store.dispatch('items/openDBChannel')
  },
  data () {
    return {
      newItem: {
        summary: '',
        done: false
      }
    }
  },
  computed:
  {
  },
  methods:
  {
    addItem () {
      const newItem = this.newItem
      this.$store.dispatch('items/set', newItem)
      this.newItem = {
        summary: '',
        done: false
      }
    },
    updateSummary (val, id) {
      this.$store.dispatch('items/set', {
        id,
        summary: val
      })
    }
  }
}
</script>
