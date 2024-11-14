import { mount } from '@vue/test-utils'
import FetchDataView from '@/views/FetchDataView.vue'

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, name: 'Test', body: 'Test body', email: 'test@example.com' }])
    })
)

describe('FetchDataView', () => {
    it('should fetch and display data correctly', async () => {
        const wrapper = mount(FetchDataView)
        await wrapper.vm.$nextTick()
        expect(wrapper.findAll('li').length).toBe(1)
        expect(wrapper.find('li').text()).toContain('Test body')
    })

    it('should handle fetch error', async () => {
        fetch.mockImplementationOnce(() => Promise.reject(new Error('Failed to fetch data')))
        const wrapper = mount(FetchDataView)
        await wrapper.vm.$nextTick()
        expect(wrapper.find('.error').text()).toBe('Failed to fetch data')
    })
})