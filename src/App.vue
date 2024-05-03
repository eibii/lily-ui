<script setup lang="ts">
import { LThemeMode, LPagination } from './components'
import { ref } from 'vue'

import 'bootstrap-icons/font/bootstrap-icons.css'

const value = ref(false)
const items = [
  {
    label: 'resume.pdf',
    iconClass: 'text-xl bi bi-filetype-pdf'
  },
  {
    title: 'My Files',
    iconClass: 'text-xl bi bi-menu-app',
    collapsed: true,
    items: [
      {
        iconClass: 'text-xl bi bi-filetype-psd',
        label: 'Project-final.psd'
      },
      {
        iconClass: 'text-xl bi bi-filetype-psd',
        label: 'Project-final-2.psd'
      },
      {
        title: 'Images',
        iconClass: 'text-xl bi bi-images',
        collapsed: true,
        items: [
          {
            iconClass: 'text-xl bi bi-filetype-png',
            label: 'Screenshot1.png'
          },
          {
            iconClass: 'text-xl bi bi-filetype-png',
            label: 'Screenshot2.png'
          },
          {
            iconClass: 'text-xl bi bi-folder',
            title: 'Others',
            collapsed: true,
            items: [
              {
                iconClass: 'text-xl bi bi-filetype-png',
                label: 'Screenshot3.png'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    iconClass: 'text-xl bi bi-filetype-pdf',
    label: 'reports-final-2.pdf'
  }
]
const onClick = (item: any) => {
  console.log(item)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="py-8 flex">
      <div class="flex-1"><img src="./assets/logo.svg" alt="logo" class="mx-auto max-h-20" /></div>
      <div class="flex-none pr-4 self-center">
        <LThemeMode v-model="value" default-mode="light" width-class="w-8" height-class="h-8" />
      </div>
    </div>
    <div class="p-40 flex justify-center">
      <LPagination
        :page="1"
        :totalRecords="100"
        :template="['RowsPerPageDropdown', 'PageLinks', 'CurrentPageReport']"
        currentPageReportTemplate="{currentPage}"
      />
    </div>
  </div>
</template>
