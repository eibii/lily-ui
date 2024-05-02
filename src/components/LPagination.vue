<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

import { LButton, LDropdown, LInput } from '.'

const emit = defineEmits<{
  (e: 'onPage', page: number): void
}>()
const props = withDefaults(
  defineProps<{
    size?: 'xs' | 'sm' | 'default' | 'lg'
    bg?: 'default' | 'primary' | 'secondary' | 'accent' | 'neutral'
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
    template?: string
    currentPageReportTemplate?: string
  }>(),
  {
    size: 'default',
    bg: 'default',
    page: 1,
    pageLinkSize: 5,
    rowsPerPage: 10,
    rowsPerPageOptions: () => [10, 20, 30],
    shape: 'default',
    effect: 'default',
    severity: 'default',
    template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
    currentPageReportTemplate: '({currentPage} of {totalPages})'
  }
)
const currentPage = ref(props.page)
const currentRowsPerPage = ref(props.rowsPerPage)
const pages = ref<number[]>([])
const totalPages = computed(() => Math.ceil(props.totalRecords / currentRowsPerPage.value))
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

watch(currentPage, (newPage) => {
  pages.value = calculatePagination(newPage, totalPages.value, props.pageLinkSize)
  emit('onPage', newPage)
})
watch(currentRowsPerPage, (newRows) => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value
  }
  pages.value = calculatePagination(currentPage.value, newRows, props.pageLinkSize)
})

onMounted(() => {
  pages.value = calculatePagination(props.page, totalPages.value, props.pageLinkSize)
})
</script>

<template>
  <div class="flex gap-3">
    <div class="join">
      <!-- FirstPageLink -->
      <LButton
        class="join-item"
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
        class="join-item"
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
      <span class="join-item self-center px-2">{{ currentPageReportText }}</span>
      <!-- PageLinks -->
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
      <!-- NextPageLink -->
      <LButton
        class="join-item"
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
        class="join-item"
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
    </div>
    <!-- JumpToPageDropdown -->
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
    <!-- JumpToPageInput -->
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
    <!-- RowsPerPageDropdown -->
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
</template>
