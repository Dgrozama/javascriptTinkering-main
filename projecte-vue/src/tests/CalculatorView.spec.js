import { mount } from '@vue/test-utils'
import CalculatorView from '@/views/CalculatorView.vue'

describe('CalculatorView', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(CalculatorView)
    })

    it('should input numbers correctly', async () => {
        await wrapper.find('button:contains("1")').trigger('click')
        await wrapper.find('button:contains("2")').trigger('click')
        expect(wrapper.find('input').element.value).toBe('12')
    })

    it('should perform addition correctly', async () => {
        await wrapper.find('button:contains("1")').trigger('click')
        await wrapper.find('button:contains("+")').trigger('click')
        await wrapper.find('button:contains("2")').trigger('click')
        await wrapper.find('button:contains("=")').trigger('click')
        expect(wrapper.find('input').element.value).toBe('3')
    })

    it('should clear the display', async () => {
        await wrapper.find('button:contains("1")').trigger('click')
        await wrapper.find('button:contains("C")').trigger('click')
        expect(wrapper.find('input').element.value).toBe('')
    })
})