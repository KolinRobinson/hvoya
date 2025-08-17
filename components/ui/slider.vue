<script setup lang="ts">
import {ref, computed, watch} from 'vue'
import {debounce} from 'lodash'

//Props
interface Props {
  minPriceFromAPI: number
  maxPriceFromAPI: number
}

interface Emits {
  'values-changed': [min: number, max: number]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Reactive state
const minValue = ref<number>(props.minPriceFromAPI)
const maxValue = ref<number>(props.maxPriceFromAPI)
const minRange = ref<number>()
const maxRange = ref<number>()

// Constants
const PADDING_PERCENT = 0.125
const DEBOUNCE_DELAY = 2000


// Debounced emit function
const debouncedSValue = debounce(() => {
  emit('values-changed', minValue.value, maxValue.value)
}, DEBOUNCE_DELAY)


// Watchers
watch(minValue, (newminValue) => {
  if (newminValue < 0) {
    minValue.value = 0
  }
  if (newminValue >= maxRange.value) {
    minValue.value = maxRange.value
  }
})

watch(maxValue, (newmaxValue) => {
  if (newmaxValue > maxRange.value) {
    maxValue.value = maxRange.value
  }
})

// Computed properties
const minPercent = computed(() => {
  const range = maxRange.value - minRange.value
  return ((minValue.value - minRange.value) / range) * 100
})

const maxPercent = computed(() => {
  const range = maxRange.value - minRange.value
  return ((maxValue.value - minRange.value) / range) * 100
})

const styleSlider = computed(() => {
  return {
    '--min-percent': minPercent.value + '%',
    '--max-percent': maxPercent.value + '%',
  };
})

// Event handlers
const handleMinChange = () => {
  if (minValue.value >= maxValue.value) {
    minValue.value = minValue.value + 1
    maxValue.value = minValue.value + 1
  }
}
const handleMaxChange = () => {
  if (maxValue.value <= minValue.value) {
    minValue.value = maxValue.value - 1
  }
}

// Initialization start value
const calculateRanges = () => {

  //making 10% padding of scale on left and right side of the slider for symmetrical view
  const oneHundredPercents = () => {
    return (maxValue.value - minValue.value) / (1 - PADDING_PERCENT)
  }
  const isPaddingPercentMinus = minValue.value - oneHundredPercents() * PADDING_PERCENT

  minRange.value = isPaddingPercentMinus < 0 ? 0 : minValue.value - oneHundredPercents() * PADDING_PERCENT
  maxRange.value = isPaddingPercentMinus < 0 ? maxValue.value + minValue.value : maxValue.value + oneHundredPercents() * PADDING_PERCENT
}

calculateRanges()

</script>

<template>
  <div class="flex w-full justify-center  mt-10 ">
    <div class="flex flex-col w-[300px] md:w-[364px]">
      <div class="range-slider w-full" id="rangeSlider"
           :style="styleSlider"
      >
        <input type="range" id="rangeMin" :min="minRange" :max="maxRange" step="1" v-model.number="minValue"
               @input="handleMinChange(); debouncedSValue()">
        <input type="range" id="rangeMax" :min="minRange" :max="maxRange" step="1" v-model.number="maxValue"
               @input="handleMaxChange(); debouncedSValue()">
      </div>
      <div class="flex justify-between mt-3">
        <div
            class="MinMaxAmountFrame bg-gray-100 border border-gray-300 ml-2  px-6 py-4 text-gray-500 font-medium text-lg flex w-full self-center relative">
          <div class="absolute left-1 top-1"><p class="text-nowrap text-sm text-[#999999] font-['Inter']">UAH
            {{ Math.floor(minValue) }}</p></div>
        </div>
        <div
            class="MinMaxAmountFrame bg-gray-100 border border-gray-300 mr-2 px-6 py-4 text-gray-500 font-medium text-lg flex w-full self-center relative">
          <div class="absolute left-1 top-1"><p class="text-nowrap text-sm text-[#999999] font-['Inter']">UAH
            {{ Math.floor(maxValue) }}</p></div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

.MinMaxAmountFrame {
  height: 40px;
  width: 95px;
  border-radius: 10px;
}

.range-slider {
  margin: auto 0;
  text-align: center;
  position: relative;
  align-items: center
}

.range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
  pointer-events: none;
}

.range-slider input[type=range]::-webkit-slider-thumb {
  pointer-events: all;
}

.range-slider input[type=range]::-moz-range-thumb {
  pointer-events: all;
}

/* Track Background - This creates the visual effect */
.range-slider::before {
  content: '';
  position: absolute;
  bottom: 2.5px;
  left: 0;
  width: 100%;
  height: 8px;
  background: #CCC8C8; /* Gray background */
  border-radius: 4px;
  z-index: 1;
}


/* Active range between thumbs */
.range-slider::after {
  content: '';
  position: absolute;
  bottom: 2.5px;
  left: var(--min-percent, 5%);
  width: calc(var(--max-percent, 85%) - var(--min-percent, 15%));
  height: 8px;
  background: black; /* Black between toggles */
  border-radius: 4px;
  z-index: 2;

}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
}

input[type=range]:focus {
  outline: none;
}

/* Hide the default track */
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: transparent;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 3;
  position: relative;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10px;
  transition: all 0.2s ease;
}

input[type=range]::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
}

/* Firefox styles */
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: transparent;
  border-radius: 1px;
  border: 0;
}

input[type=range]::-moz-range-thumb {
  z-index: 3;
  position: relative;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid black;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  -moz-appearance: none;
}

</style>
