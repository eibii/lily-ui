<script setup lang="ts">
defineEmits<{
  (e: 'onItemActive', idx: number): void
}>()
withDefaults(
  defineProps<{
    items: {
      image: string
      alt: string
    }[]
    align?: 'default' | 'center' | 'end'
    vertical?: boolean
    itemClass?: string
    fullBleed?: boolean
    indicator?: boolean
    slide?: boolean
  }>(),
  {
    items: () => [],
    align: 'default',
    vertical: false,
    itemClass: '',
    fullBleed: false,
    indicator: false,
    slide: false
  }
)
const carouselId = self.crypto.randomUUID()
</script>

<template>
  <div>
    <div
      :class="[
        'carousel rounded-box',
        {
          'carousel-center':
            $props.align === 'center' && !$props.slide && !$props.indicator && !$props.fullBleed,
          'carousel-end':
            $props.align === 'end' && !$props.slide && !$props.indicator && !$props.fullBleed,
          'carousel-vertical':
            $props.vertical && !$props.slide && !$props.indicator && !$props.fullBleed,
          'carousel-center max-w-md p-4 space-x-4':
            $props.fullBleed && !$props.slide && !$props.indicator,
          'w-full': $props.indicator || $props.slide
        }
      ]"
    >
      <template v-for="(item, i) in $props.items" :key="i">
        <div
          :id="`item-${carouselId}-${i}`"
          :class="[
            'carousel-item',
            $props.itemClass,
            {
              'w-full': $props.indicator || $props.slide,
              relative: $props.slide
            }
          ]"
        >
          <img :src="item.image" :alt="item.alt" />
          <div
            v-if="$props.slide"
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              :href="`#item-${carouselId}-${i === 0 ? items.length - 1 : i - 1}`"
              class="btn btn-circle"
              @click="$emit('onItemActive', i === 0 ? items.length - 1 : i - 1)"
              @keypress.enter="$emit('onItemActive', i === 0 ? items.length - 1 : i - 1)"
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
            </a>
            <a
              :href="`#item-${carouselId}-${i >= items.length - 1 ? 0 : i + 1}`"
              class="btn btn-circle"
              @click="$emit('onItemActive', i >= items.length - 1 ? 0 : i + 1)"
              @keypress.enter="$emit('onItemActive', i >= items.length - 1 ? 0 : i + 1)"
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
            </a>
          </div>
        </div>
      </template>
    </div>
    <div
      v-if="$props.indicator && !$props.slide"
      class="corousel-indicator flex justify-center w-full py-2 gap-2"
    >
      <template v-for="(item, i) in $props.items" :key="i">
        <a
          :href="`#item-${carouselId}-${i}`"
          class="btn btn-xs"
          @click="$emit('onItemActive', i)"
          @keypress.enter="$emit('onItemActive', i)"
        >
          {{ i }}
        </a>
      </template>
    </div>
  </div>
</template>
