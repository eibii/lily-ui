import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Pagination from '../LPagination.vue'

describe('Pagination', () => {
  it('renders a pagination with default props', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalRecords: 10
      }
    })

    expect(wrapper.find('.w-full.flex.gap-3').exists()).toBe(true)
    expect(wrapper.find('.join').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      totalRecords: 10,
      size: 'default',
      flexPosition: 'default',
      page: 1,
      pageLinkSize: 5,
      rowsPerPage: 10,
      rowsPerPageOptions: [10, 20, 30],
      shape: 'default',
      effect: 'default',
      severity: 'default',
      template: [
        'FirstPageLink',
        'PrevPageLink',
        'PageLinks',
        'NextPageLink',
        'LastPageLink',
        'RowsPerPageDropdown',
        'CurrentPageReport'
      ],
      currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords}',
      firstPageLinkClass: '',
      prevPageLinkClass: '',
      currentPageReportClass: '',
      pageLinksClass: '',
      nextPageLinkClass: '',
      lastPageLinkClass: '',
      jumpToPageDropdownClass: '',
      jumpToPageInputClass: '',
      rowsPerPageDropdownClass: ''
    })
  })
  it('renders a pagination with custom props', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalRecords: 20,
        size: 'lg',
        flexPosition: 'end',
        page: 3,
        pageLinkSize: 4,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 20, 30],
        shape: 'circle',
        effect: 'ghost',
        severity: 'danger',
        template: ['PageLinks', 'CurrentPageReport'],
        currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords}',
        firstPageLinkClass: '',
        prevPageLinkClass: '',
        currentPageReportClass: '',
        pageLinksClass: '',
        nextPageLinkClass: '',
        lastPageLinkClass: '',
        jumpToPageDropdownClass: '',
        jumpToPageInputClass: '',
        rowsPerPageDropdownClass: ''
      }
    })

    expect(wrapper.find('.w-full.flex.gap-3').exists()).toBe(true)
    expect(wrapper.find('.join').exists()).toBe(true)
    expect(wrapper.find('[data-template="PageLinks"]').exists()).toBe(true)
    expect(wrapper.find('[data-template="CurrentPageReport"]').text()).toContain(
      'Showing 1 to 4 of 20'
    )
    expect(wrapper.props()).toEqual({
      totalRecords: 20,
      size: 'lg',
      flexPosition: 'end',
      page: 3,
      pageLinkSize: 4,
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 20, 30],
      shape: 'circle',
      effect: 'ghost',
      severity: 'danger',
      template: ['PageLinks', 'CurrentPageReport'],
      currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords}',
      firstPageLinkClass: '',
      prevPageLinkClass: '',
      currentPageReportClass: '',
      pageLinksClass: '',
      nextPageLinkClass: '',
      lastPageLinkClass: '',
      jumpToPageDropdownClass: '',
      jumpToPageInputClass: '',
      rowsPerPageDropdownClass: ''
    })
  })
})
