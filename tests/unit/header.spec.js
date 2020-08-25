import HeaderComponent from '@/components/HeaderComponent'
import { shallowMount } from '@vue/test-utils'

describe('Descripción de Header', () => {
  it('Pasar prop título', () => {
    const wrapper = shallowMount(HeaderComponent)
    expect(wrapper.find("h1").text()).toBe('')
  }),
    it('Pasar algo de props al título', async () => {
      const wrapper = shallowMount(HeaderComponent)
      wrapper.setProps({ title: 'Desafío Opcional Jest' })
      await wrapper.vm.$nextTick()
      expect(wrapper.find("h1").text()).toBe('Desafío Opcional Jest')
    }),
    it('Pasar prop color', () => {
      const wrapper = shallowMount(HeaderComponent, { propsData: { compColor: 'green' } })
      const color = wrapper.find("h1").attributes().style
      expect(color).toBe('background-color: green;')
    }),
    it('No Pasar color al componente', () => {
      const wrapper = shallowMount(HeaderComponent)
      const color = wrapper.find("h1").attributes().style
      expect(color).toBe(undefined)
    })

})