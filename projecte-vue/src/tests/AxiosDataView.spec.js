import { mount } from '@vue/test-utils'
import AxiosDataView from '@/views/AxiosDataView.vue'
import axios from 'axios'

jest.mock('axios')

describe('AxiosDataView', () => {
    it('should fetch and display data correctly', async () => {
        axios.get.mockResolvedValue({
            data: { users: [{ id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' }] }
        })
        const wrapper = mount(AxiosDataView)
        await wrapper.vm.$nextTick()
        expect(wrapper.findAll('li').length).toBe(1)
        expect(wrapper.find('li').text()).toContain('John Doe')
    })

    it('should handle axios error', async () => {
        axios.get.mockRejectedValue(new Error('Failed to fetch data'))
        const wrapper = mount(AxiosDataView)
        await wrapper.vm.$nextTick()
        expect(wrapper.find('.error').text()).toBe('Failed to fetch data')
    })
})