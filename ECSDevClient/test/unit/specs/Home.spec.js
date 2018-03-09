import Vue from 'vue'
import Home from '@/components/pages/Home'
describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Welcome to Article Page')
  })
})
