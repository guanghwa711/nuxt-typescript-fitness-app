<template>
	<div class="chart">
		<h3 class="chart__title">{{ props.title }}</h3>
		<Bar class="chart__bar" :chart-data="chartData" />
	</div>
</template>

<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps<{
	title: string,
	label: string,
	labels: string[],
	data: number[]
}>()

const chartData = {
	labels: props.labels,
	datasets: [{ data: props.data, backgroundColor: '#f87979', label: props.label }]
}
</script>