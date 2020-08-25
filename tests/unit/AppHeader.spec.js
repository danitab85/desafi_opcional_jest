import AppHeader from '@/components/AppHeader'
import { shallowMount } from '@vue/test-utils'

describe('Descripcion del AppHeader', () => {
  it('Por defecto el botón no se muestra', () => {
    const wrapper = shallowMount(AppHeader)
    expect(wrapper.find("[data-test='button']").isVisible()).toBe(false)
  }),

    it('Si está logueado muestra el botón', async () => {
      const wrapper = shallowMount(AppHeader)
      wrapper.setData({ loggedIn: true })
      await wrapper.vm.$nextTick()
      expect(wrapper.find("[data-test='button']").isVisible()).toBe(true)
    }),

    it('Por defecto el párrafo está vacío', () => {
      const wrapper = shallowMount(AppHeader)
      expect(wrapper.find("p").text()).toBe('')
    }),
    it('Cuando se aprieta el botón se muestra el texto', async () => {
      const wrapper = shallowMount(AppHeader)
      wrapper.find("[data-test='button2']").trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.find("p").text()).not.toBe('')
    })
})
