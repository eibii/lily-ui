<script setup lang="ts">
type ListTemplate =
  | 'FirstPageLink'
  | 'PrevPageLink'
  | 'PageLinks'
  | 'NextPageLink'
  | 'LastPageLink'
  | 'RowsPerPageDropdown'
  | 'JumpToPageDropdown'
  | 'JumpToPageInput'
  | 'CurrentPageReport'

type ReportMarker =
  | '{currentPage}'
  | '{totalPages}'
  | '{rows}'
  | '{first}'
  | '{last}'
  | '{totalRecords}'

type CurrentPageReportTemplate = `${string}${ReportMarker}${string}`

import { ref, computed, watch, onBeforeMount } from 'vue'

import { LButton, LDropdown, LInput } from '.'

const emit = defineEmits<{
  (e: 'onPage', page: number): void
}>()
const props = withDefaults(
  defineProps<{
    size?: 'xs' | 'sm' | 'default' | 'lg'
    bg?: 'default' | 'primary' | 'secondary' | 'accent' | 'neutral'
    flexPosition?: 'start' | 'default' | 'end' | 'between' | 'around' | 'evenly' | 'stretch'
    totalRecords: number
    page?: number
    pageLinkSize?: number
    rowsPerPage?: number
    rowsPerPageOptions?: number[]
    shape?: 'default' | 'circle' | 'square'
    effect?: 'default' | 'glass' | 'ghost' | 'neutral' | 'link'
    severity?:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'accent'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
    template?: ListTemplate[]
    currentPageReportTemplate?: CurrentPageReportTemplate
    firstPageLinkClass?: string
    prevPageLinkClass?: string
    currentPageReportClass?: string
    pageLinksClass?: string
    nextPageLinkClass?: string
    lastPageLinkClass?: string
    jumpToPageDropdownClass?: string
    jumpToPageInputClass?: string
    rowsPerPageDropdownClass?: string
  }>(),
  {
    size: 'default',
    bg: 'default',
    flexPosition: 'default',
    page: 1,
    pageLinkSize: 5,
    rowsPerPage: 10,
    rowsPerPageOptions: () => [10, 20, 30],
    shape: 'default',
    effect: 'default',
    severity: 'default',
    template: () => [
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
  }
)
const currentPage = ref()
const currentRowsPerPage = ref()
const pages = ref<number[]>([])
const totalPages = computed(() => Math.ceil(props.totalRecords / +currentRowsPerPage.value))
const jumpToPageOptions = computed(() => {
  let options = []
  for (let i = 1; i <= totalPages.value; i++) {
    options.push({ label: `${i}`, value: i, active: i === currentPage.value })
  }
  return options
})
const currentPageReportText = computed(() => {
  return props.currentPageReportTemplate
    .replace(/{currentPage}/g, String(currentPage.value))
    .replace(/{totalPages}/g, String(totalPages.value))
    .replace(/{rows}/g, String(currentRowsPerPage.value))
    .replace(/{first}/g, String(pages.value[0]))
    .replace(/{last}/g, String(pages.value[pages.value.length - 1]))
    .replace(/{totalRecords}/g, String(props.totalRecords))
})
const orderTemplate = computed<{ [k: string]: number }>(() => {
  let res = {}
  props.template.map((item: any, i: number) => {
    res = { ...res, [item.trim()]: i + 1 }
  })
  return res
})
const calculatePagination = (
  currentPage: number,
  totalPages: number,
  maxDisplayPages: number
): number[] => {
  let startPage: number, endPage: number

  if (totalPages <= maxDisplayPages) {
    // If the total number of pages is less than or equal to the maximum to be displayed, it shows all
    startPage = 1
    endPage = totalPages
  } else {
    // Calculates the number of pages before and after the current one
    let maxPagesBeforeCurrentPage = Math.floor(maxDisplayPages / 2)
    let maxPagesAfterCurrentPage = Math.ceil(maxDisplayPages / 2) - 1

    if (currentPage <= maxPagesBeforeCurrentPage) {
      // Página atual perto do início
      startPage = 1
      endPage = maxDisplayPages
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // Current page near top
      startPage = totalPages - maxDisplayPages + 1
      endPage = totalPages
    } else {
      // Current page in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage
      endPage = currentPage + maxPagesAfterCurrentPage
    }
  }

  // Create an array for the page range
  let paginationArray: number[] = []
  for (let i = startPage; i <= endPage; i++) {
    paginationArray.push(i)
  }
  return paginationArray
}
const rowsPerPageOptions = computed(() =>
  props.rowsPerPageOptions.map((option) => ({
    label: `${option}`,
    value: option,
    active: option === currentRowsPerPage.value
  }))
)

watch(currentPage, (newPage, oldPage) => {
  if (oldPage !== undefined) {
    pages.value = calculatePagination(newPage, totalPages.value, props.pageLinkSize)
    emit('onPage', newPage)
  }
})
watch(totalPages, (newTotalPages) => {
  if (currentPage.value > newTotalPages) {
    currentPage.value = newTotalPages
  }
  pages.value = calculatePagination(currentPage.value, newTotalPages, props.pageLinkSize)
})

onBeforeMount(() => {
  currentPage.value = props.page
  currentRowsPerPage.value = props.rowsPerPage
  pages.value = calculatePagination(props.page, totalPages.value, props.pageLinkSize)
})
</script>

<template>
  <div
    :class="[
      'w-full flex',
      {
        'justify-center': props.flexPosition === 'default',
        'justify-start': props.flexPosition === 'start',
        'justify-end': props.flexPosition === 'end',
        'justify-between': props.flexPosition === 'between',
        'justify-around': props.flexPosition === 'around',
        'justify-evenly': props.flexPosition === 'evenly',
        'justify-stretch': props.flexPosition === 'stretch'
      },
      'gap-3'
    ]"
  >
    <!-- FirstPageLink -->
    <LButton
      v-if="orderTemplate.FirstPageLink"
      data-template="FirstPageLink"
      :class="[
        'join-item',
        {
          'order-1': orderTemplate.FirstPageLink === 1,
          'order-2': orderTemplate.FirstPageLink === 2,
          'order-3': orderTemplate.FirstPageLink === 3,
          'order-4': orderTemplate.FirstPageLink === 4,
          'order-5': orderTemplate.FirstPageLink === 5,
          'order-6': orderTemplate.FirstPageLink === 6,
          'order-7': orderTemplate.FirstPageLink === 7,
          'order-8': orderTemplate.FirstPageLink === 8,
          'order-9': orderTemplate.FirstPageLink === 9,
          'order-10': orderTemplate.FirstPageLink === 10,
          'order-11': orderTemplate.FirstPageLink === 11,
          'order-12': orderTemplate.FirstPageLink === 12
        },
        $props.firstPageLinkClass
      ]"
      :disabled="currentPage === 1"
      :size="$props.size"
      :shape="$props.shape"
      :effect="$props.effect"
      :severity="$props.severity"
      @click="currentPage = 1"
      @keypress.enter="currentPage = 1"
    >
      <svg
        class="w-4 h-4 fill-current"
        viewBox="0 0 200 200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M114.7,100l82,81h0c4.3,4.5,4.2,11.4,0,15.7-4.4,4.3-11.5,4.3-15.9,0l-90-88.8h0c-4.3-4.5-4.2-11.4,0-15.7L180.8,3.3c4.4-4.4,11.5-4.4,15.9,0h0c4.3,4.4,4.2,11.4,0,15.7l-82,81Z"
        />
        <path
          d="M27.2,100.1l82,81h0c4.3,4.5,4.2,11.4,0,15.7-4.4,4.3-11.5,4.3-15.9,0L3.3,107.9h-.1c-4.3-4.5-4.2-11.4.1-15.7L93.3,3.3c4.4-4.3,11.5-4.3,15.9,0h0c4.3,4.5,4.2,11.4,0,15.7L27.2,100.1Z"
        />
      </svg>
    </LButton>
    <!-- PrevPageLink -->
    <LButton
      v-if="orderTemplate.PrevPageLink"
      data-template="PrevPageLink"
      :class="[
        'join-item',
        {
          'order-1': orderTemplate.PrevPageLink === 1,
          'order-2': orderTemplate.PrevPageLink === 2,
          'order-3': orderTemplate.PrevPageLink === 3,
          'order-4': orderTemplate.PrevPageLink === 4,
          'order-5': orderTemplate.PrevPageLink === 5,
          'order-6': orderTemplate.PrevPageLink === 6,
          'order-7': orderTemplate.PrevPageLink === 7,
          'order-8': orderTemplate.PrevPageLink === 8,
          'order-9': orderTemplate.PrevPageLink === 9,
          'order-10': orderTemplate.PrevPageLink === 10,
          'order-11': orderTemplate.PrevPageLink === 11,
          'order-12': orderTemplate.PrevPageLink === 12
        },
        $props.prevPageLinkClass
      ]"
      :disabled="currentPage === 1"
      :size="$props.size"
      :shape="$props.shape"
      :effect="$props.effect"
      :severity="$props.severity"
      @click="--currentPage"
      @keypress.enter="--currentPage"
    >
      <svg
        class="w-4 h-4 fill-current"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M783.128464 97.117329L363.044017 511.98592l420.068448 414.868592a56.398449 56.398449 0 0 1 0 80.461787 58.110402 58.110402 0 0 1-81.46976 0l-460.787328-455.107485a56.398449 56.398449 0 0 1 0-80.445787l460.787328-455.107485a58.110402 58.110402 0 0 1 81.46976 0 56.398449 56.398449 0 0 1 0 80.461787z"
        ></path>
      </svg>
    </LButton>
    <!-- CurrentPageReport -->
    <div
      v-if="orderTemplate.CurrentPageReport"
      data-template="CurrentPageReport"
      :class="[
        'join-item self-center px-2',
        {
          'order-1': orderTemplate.CurrentPageReport === 1,
          'order-2': orderTemplate.CurrentPageReport === 2,
          'order-3': orderTemplate.CurrentPageReport === 3,
          'order-4': orderTemplate.CurrentPageReport === 4,
          'order-5': orderTemplate.CurrentPageReport === 5,
          'order-6': orderTemplate.CurrentPageReport === 6,
          'order-7': orderTemplate.CurrentPageReport === 7,
          'order-8': orderTemplate.CurrentPageReport === 8,
          'order-9': orderTemplate.CurrentPageReport === 9,
          'order-10': orderTemplate.CurrentPageReport === 10,
          'order-11': orderTemplate.CurrentPageReport === 11,
          'order-12': orderTemplate.CurrentPageReport === 12
        },
        $props.currentPageReportClass
      ]"
    >
      {{ currentPageReportText }}
    </div>
    <!-- PageLinks -->
    <div
      v-if="orderTemplate.PageLinks"
      data-template="PageLinks"
      :class="[
        'join',
        {
          'order-1': orderTemplate.PageLinks === 1,
          'order-2': orderTemplate.PageLinks === 2,
          'order-3': orderTemplate.PageLinks === 3,
          'order-4': orderTemplate.PageLinks === 4,
          'order-5': orderTemplate.PageLinks === 5,
          'order-6': orderTemplate.PageLinks === 6,
          'order-7': orderTemplate.PageLinks === 7,
          'order-8': orderTemplate.PageLinks === 8,
          'order-9': orderTemplate.PageLinks === 9,
          'order-10': orderTemplate.PageLinks === 10,
          'order-11': orderTemplate.PageLinks === 11,
          'order-12': orderTemplate.PageLinks === 12
        },
        $props.pageLinksClass
      ]"
    >
      <template v-for="page in pages" :key="page">
        <LButton
          :class="['join-item', { 'btn-active': currentPage === page }]"
          :size="$props.size"
          :shape="$props.shape"
          :effect="$props.effect"
          :severity="$props.severity"
          @click="currentPage = page"
          @keypress.enter="currentPage = page"
          >{{ page }}</LButton
        >
      </template>
    </div>
    <!-- NextPageLink -->
    <LButton
      v-if="orderTemplate.NextPageLink"
      data-template="NextPageLink"
      :class="[
        'join-item',
        {
          'order-1': orderTemplate.NextPageLink === 1,
          'order-2': orderTemplate.NextPageLink === 2,
          'order-3': orderTemplate.NextPageLink === 3,
          'order-4': orderTemplate.NextPageLink === 4,
          'order-5': orderTemplate.NextPageLink === 5,
          'order-6': orderTemplate.NextPageLink === 6,
          'order-7': orderTemplate.NextPageLink === 7,
          'order-8': orderTemplate.NextPageLink === 8,
          'order-9': orderTemplate.NextPageLink === 9,
          'order-10': orderTemplate.NextPageLink === 10,
          'order-11': orderTemplate.NextPageLink === 11,
          'order-12': orderTemplate.NextPageLink === 12
        },
        $props.nextPageLinkClass
      ]"
      :disabled="currentPage === totalPages"
      :size="$props.size"
      :shape="$props.shape"
      :effect="$props.effect"
      :severity="$props.severity"
      @click="currentPage++"
      @keypress.enter="currentPage++"
    >
      <svg
        class="w-4 h-4 fill-current"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M240.871694 97.117314a56.39844 56.39844 0 0 1 0-80.461775 58.110393 58.110393 0 0 1 81.469746 0l460.787257 455.107414a56.39844 56.39844 0 0 1 0 80.445775L322.34144 1007.332141a58.110393 58.110393 0 0 1-81.469746 0 56.39844 56.39844 0 0 1 0-80.461775L660.956076 511.98584 240.871694 97.117314z"
        ></path>
      </svg>
    </LButton>
    <!-- LastPageLink -->
    <LButton
      v-if="orderTemplate.LastPageLink"
      data-template="LastPageLink"
      :class="[
        'join-item',
        {
          'order-1': orderTemplate.LastPageLink === 1,
          'order-2': orderTemplate.LastPageLink === 2,
          'order-3': orderTemplate.LastPageLink === 3,
          'order-4': orderTemplate.LastPageLink === 4,
          'order-5': orderTemplate.LastPageLink === 5,
          'order-6': orderTemplate.LastPageLink === 6,
          'order-7': orderTemplate.LastPageLink === 7,
          'order-8': orderTemplate.LastPageLink === 8,
          'order-9': orderTemplate.LastPageLink === 9,
          'order-10': orderTemplate.LastPageLink === 10,
          'order-11': orderTemplate.LastPageLink === 11,
          'order-12': orderTemplate.LastPageLink === 12
        },
        $props.lastPageLinkClass
      ]"
      :disabled="currentPage === totalPages"
      :size="$props.size"
      :shape="$props.shape"
      :effect="$props.effect"
      :severity="$props.severity"
      @click="currentPage = totalPages"
      @keypress.enter="currentPage = totalPages"
    >
      <svg
        class="w-4 h-4 fill-current"
        viewBox="0 0 200 200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.3,19C-1,14.7-1.1,7.7,3.2,3.4c0,0,0,0,.1-.1C7.7-1.1,14.8-1.1,19.2,3.3l90,88.9c4.3,4.3,4.4,11.2.1,15.6,0,0,0,0-.1.1L19.2,196.7c-4.4,4.3-11.5,4.3-15.9,0-4.3-4.3-4.4-11.2-.1-15.6,0,0,0,0,.1-.1l82-81L3.3,19Z"
        />
        <path
          d="M90.8,19c-4.3-4.3-4.4-11.2-.1-15.6,0,0,0,0,.1-.1,4.4-4.3,11.5-4.3,15.9,0l90,88.9c4.3,4.3,4.4,11.2.1,15.6,0,0,0,0-.1.1l-90,88.9c-4.4,4.3-11.5,4.3-15.9,0-4.3-4.3-4.4-11.2-.1-15.6,0,0,0,0,.1-.1l82-81L90.8,19Z"
        />
      </svg>
    </LButton>
    <!-- JumpToPageDropdown -->
    <div
      v-if="orderTemplate.JumpToPageDropdown"
      data-template="JumpToPageDropdown"
      :class="[
        'join-item',
        {
          'order-1': orderTemplate.JumpToPageDropdown === 1,
          'order-2': orderTemplate.JumpToPageDropdown === 2,
          'order-3': orderTemplate.JumpToPageDropdown === 3,
          'order-4': orderTemplate.JumpToPageDropdown === 4,
          'order-5': orderTemplate.JumpToPageDropdown === 5,
          'order-6': orderTemplate.JumpToPageDropdown === 6,
          'order-7': orderTemplate.JumpToPageDropdown === 7,
          'order-8': orderTemplate.JumpToPageDropdown === 8,
          'order-9': orderTemplate.JumpToPageDropdown === 9,
          'order-10': orderTemplate.JumpToPageDropdown === 10,
          'order-11': orderTemplate.JumpToPageDropdown === 11,
          'order-12': orderTemplate.JumpToPageDropdown === 12
        },
        $props.jumpToPageDropdownClass
      ]"
    >
      <LDropdown
        :label="`${currentPage}`"
        widthClass="w-full"
        :size="$props.size"
        :shape="$props.shape"
        :effect="$props.effect"
        :severity="$props.severity"
        :options="jumpToPageOptions"
        @onClickOption="currentPage = +$event.value"
      />
    </div>
    <!-- JumpToPageInput -->
    <div
      v-if="orderTemplate.JumpToPageInput"
      data-template="JumpToPageInput"
      :class="[
        'join-item',
        {
          'order-1': orderTemplate.JumpToPageInput === 1,
          'order-2': orderTemplate.JumpToPageInput === 2,
          'order-3': orderTemplate.JumpToPageInput === 3,
          'order-4': orderTemplate.JumpToPageInput === 4,
          'order-5': orderTemplate.JumpToPageInput === 5,
          'order-6': orderTemplate.JumpToPageInput === 6,
          'order-7': orderTemplate.JumpToPageInput === 7,
          'order-8': orderTemplate.JumpToPageInput === 8,
          'order-9': orderTemplate.JumpToPageInput === 9,
          'order-10': orderTemplate.JumpToPageInput === 10,
          'order-11': orderTemplate.JumpToPageInput === 11,
          'order-12': orderTemplate.JumpToPageInput === 12
        },
        $props.jumpToPageInputClass
      ]"
    >
      <LInput
        v-model="currentPage"
        type="number"
        min="1"
        :max="totalPages"
        widthClass="w-16"
        :size="$props.size"
        :shape="$props.shape"
        :effect="$props.effect"
        :severity="$props.severity"
      />
    </div>
    <!-- RowsPerPageDropdown -->
    <div
      v-if="orderTemplate.RowsPerPageDropdown"
      data-template="RowsPerPageDropdown"
      :class="[
        'join-item',
        {
          'order-1': orderTemplate.RowsPerPageDropdown === 1,
          'order-2': orderTemplate.RowsPerPageDropdown === 2,
          'order-3': orderTemplate.RowsPerPageDropdown === 3,
          'order-4': orderTemplate.RowsPerPageDropdown === 4,
          'order-5': orderTemplate.RowsPerPageDropdown === 5,
          'order-6': orderTemplate.RowsPerPageDropdown === 6,
          'order-7': orderTemplate.RowsPerPageDropdown === 7,
          'order-8': orderTemplate.RowsPerPageDropdown === 8,
          'order-9': orderTemplate.RowsPerPageDropdown === 9,
          'order-10': orderTemplate.RowsPerPageDropdown === 10,
          'order-11': orderTemplate.RowsPerPageDropdown === 11,
          'order-12': orderTemplate.RowsPerPageDropdown === 12
        },
        $props.rowsPerPageDropdownClass
      ]"
    >
      <LDropdown
        :label="`${currentRowsPerPage}`"
        widthClass="w-full"
        :size="$props.size"
        :shape="$props.shape"
        :effect="$props.effect"
        :severity="$props.severity"
        :options="rowsPerPageOptions"
        @onClickOption="currentRowsPerPage = +$event.value"
      />
    </div>
  </div>
</template>
