<script setup lang="ts">
import {ref, computed, onMounted, watch} from 'vue'

const props = defineProps<{
  minPriceFromAPI?: number
  maxPriceFromAPI?: number
}>()

const minValue = ref()
const maxValue = ref()

const minPercent = ref()
const maxPercent = ref()

const minRange = ref()
const maxRange = ref()

const emit = defineEmits<{
  'values-changed': [min: number, max: number]
}>()

const emitValues = () => {
  emit('values-changed', minValue.value, maxValue.value)
}

const updateSliderStyle = async () => {
  minPercent.value = ((minValue.value - minRange.value) / (maxRange.value - minRange.value)) * 100
  maxPercent.value = ((maxValue.value - minRange.value) / (maxRange.value - minRange.value)) * 100
}

watch(minValue, async (newminValue) => {
  if (newminValue < 0) {
    minValue.value = 0
  }
})

const styleSlider = computed(() => {
  return {
    '--min-percent': minPercent.value + '%',
    '--max-percent': maxPercent.value + '%',
  };
})

const handleMinChange = () => {
  if (minValue.value >= maxValue.value) {
    minValue.value = maxValue.value -1
    maxValue.value = minValue.value + 1
  }
  updateSliderStyle()
}
const handleMaxChange = () => {
  if (Number(maxValue.value) <= Number(minValue.value)) {
      minValue.value = maxValue.value - 1
  }
  updateSliderStyle()
}
onBeforeMount(() => {
  minValue.value = Number(props.minPriceFromAPI)
  maxValue.value = Number(props.maxPriceFromAPI)

  //making a gap on left and right part of slider symmetrical
  const oneHundredPercents = () => {
    return (maxValue.value - minValue.value) / 0.8
  }

  minRange.value = minValue.value - oneHundredPercents() * 0.1 < 0 ? 0 : minValue.value - oneHundredPercents() * 0.1
  maxRange.value = minValue.value - oneHundredPercents() * 0.1 < 0 ? maxValue.value + minValue.value : maxValue.value + oneHundredPercents() * 0.1

  updateSliderStyle()
})

</script>

<template>
  <h1>SLIDER</h1>
  >
  <div class="container">

    <div class="range-slider" id="rangeSlider"
         :style="styleSlider"
    >
      <input type="range" id="rangeMin" :min="minRange" :max="maxRange" :value="minValue" step="1" v-model="minValue"
             @input="handleMinChange(); emitValues()">
      <input type="range" id="rangeMax" :min="minRange" :max="maxRange" :value="maxValue" step="1" v-model="maxValue"
             @input="handleMaxChange(); emitValues()">
    </div>
    <div class="price flex justify-between mt-3">
      <div
          class="MinMaxAmount bg-gray-100 border border-gray-300 ml-2  px-6 py-4 text-gray-500 font-medium text-lg flex w-full self-center relative">
        <div class="absolute left-1 top-1 flex items-center justify-center "><p class="valueMinMax text-nowrap">UAH
          {{ minValue }}</p></div>
      </div>
      <div
          class="MinMaxAmount bg-gray-100 border border-gray-300 mr-2 px-6 py-4 text-gray-500 font-medium text-lg flex w-full self-center relative">
        <div class="absolute left-1 top-1 flex items-center justify-center "><p class="valueMinMax text-nowrap">UAH
          {{ maxValue }}</p></div>
      </div>
    </div>
    <p>props, min {{ minPriceFromAPI }} max {{ maxPriceFromAPI }}</p>
    <p>Value min {{ minValue }} max {{ maxValue }}</p>
    <p>Percent, min {{ minPercent }} max {{ maxPercent }}</p>
    <p>Range, min {{ minRange }} max {{ maxRange }}</p>
  </div>
</template>

<style scoped>

body {
  font-family: Arial, sans-serif;
  padding: 50px;
  background: #f5f5f5;
}

.valueMinMax {
  font-family: 'Inter';
  font-size: 14px;
  color: #999999;
}

.MinMaxAmount {
  height: 40px;
  width: 90px;
  border-radius: 10px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
}

.price {
  width: 300px;
  margin: 0 auto;
}

.range-slider {
  width: 300px;
  margin: auto;
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

input[type=number] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1.6em;
  -moz-appearance: textfield;
  width: 80px;
  padding: 5px;
  border-radius: 4px;
  margin: 0 10px;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number]:invalid,
input[type=number]:out-of-range {
  border: 2px solid #ff6347;
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

/* Value display */
.values {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.value-label {
  font-weight: bold;
  color: #333;
}

.current-range {
  background: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 14px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

</style>
