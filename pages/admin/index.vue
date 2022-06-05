<template>
	<div class="stats">
		<h2 class="stats__title title">Статистика</h2>
		<div class="charts">
			<chart-bar class="chart" title="Выручка" label="Прибыль" :labels="profitLabels" :data="profitData" />
			<chart-pie class="chart" title="Продано" :labels="saledLabels" :dataset="saledDataset" />
		</div>
		<div class="saled">
			<h2 class="saled__title">Продажи</h2>
			<v-table class="saled__table table">
				<thead class="table__header">
					<tr class="text-left">
						<th>
							Имя заказчика
						</th>
						<th>
							Цена
						</th>
						<th>
							Статус
						</th>
						<th>
							Информация
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in orders" :key="item.name" class="aicsss">
						<td>{{ item.user }}</td>
						<td>{{ item.price }} грн.</td>
						<td>{{ item.status }}</td>
						<td>
							<v-btn class="icon" icon color="white">
								<v-icon>mdi-eye</v-icon>
							</v-btn>
						</td>
					</tr>
				</tbody>
			</v-table>
		</div>
	</div>
</template>

<script setup>
const profitLabels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май']
const profitData = [40000, 20000, 31200, 34400, 25000]

const saledLabels = ['Беговые дорожки', 'Велотренажеры', 'Прочее']
const saledDataset = {
	backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
	data: [40, 20, 10]
}

const orders = [
	{ user: 'Иван', price: 19999, status: 'В процессе' },
	{ user: 'Иван', price: 19999, status: 'В процессе' },
	{ user: 'Иван', price: 19999, status: 'В процессе' },
	{ user: 'Иван', price: 19999, status: 'В процессе' },
	{ user: 'Иван', price: 19999, status: 'В процессе' },
	{ user: 'Иван', price: 19999, status: 'В процессе' },
	{ user: 'Иван', price: 19999, status: 'В процессе' },
	{ user: 'Иван', price: 19999, status: 'В процессе' },
	{ user: 'Иван', price: 19999, status: 'В процессе' },
	{ user: 'Иван', price: 19999, status: 'В процессе' },
	{ user: 'Иван', price: 19999, status: 'В процессе' }
]

</script>

<style lang="scss" scoped>
.stats {
	&__title {
		text-align: center;
		margin-bottom: 50px;
	}
}

.charts {
	display: flex;
	justify-content: space-around;
	margin-bottom: 50px;
}

.chart {
	// max-width: 600px;

	&__title {
		text-align: center;
		font-weight: 500;
		margin-bottom: 20px;
	}

	&__bar {
		min-height: 400px !important;
		min-width: 400px !important;
	}
}

.saled {
	&__title {
		text-align: center;
		margin-bottom: 30px;
	}
}
</style>