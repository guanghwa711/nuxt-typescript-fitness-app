<template>
	<div class="chart">
		<h3 class="chart__title">{{ props.title }}</h3>
		<Pie class="chart__bar" :chart-data="chartData" />
	</div>
</template>

<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

const props = defineProps(['title', 'labels', 'dataset'])

const chartData = {
	labels: props.labels,
	datasets: [
		{
			backgroundColor: props.dataset.backgroundColor,
			data: props.dataset.data
		}
	]
}
</script>