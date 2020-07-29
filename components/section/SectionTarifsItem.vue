<template>
	<div class="tarifs__parent__item py-8 px-8 w-full lg:w-1/2 xl:w-1/3">
		<div class="tarifs__item flex items-center flex-col relative rounded py-8 px-8" :class="`tarifs__item--${i}`" >
			<h3 class="text-center text-xl font-bold" v-html="item.title" />
			<h5 class="text-center text-xl mt-2 font-medium" v-html="item.price" />
			<h6 class="text-center text-sm mt-2 w-2/3 font-medium" v-html="item.annotation" />
			<ul class="tarifs__item__details mt-8 w-full text-sm sm:text-base font-medium">
				<li class="tarifs__item__detail mt-1" v-for="detail in item.details" :key="detail.title" v-html="detail.title" />
			</ul>
			<div class="flex items-end h-full mt-8">
				<div>
					<nuxt-link tag="button" to="#contact" v-if="i === 0" class="text-white font-semibold py-2 px-8" v-html="item.buttonLabel" />
					<button v-if="i === 1" class="text-white font-semibold py-2 px-8" v-html="item.buttonLabel" />
					<button v-if="i === 2" class="text-white font-semibold py-2 px-8" v-html="item.buttonLabel" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "section-tarifs-item",
		props: {
			item: {
				type: Object,
				required: true
			},
			i: {
				type: Number,
				required: true
			}
		}
	}
</script>

<style>
	.tarifs__parent__item {
		max-width: 415px;
	}

	.tarifs__item {
		height: 550px;
		border: 1px solid #D6D6D6;
	}

	.tarifs__item:before {
		content: '';
		position: absolute;
		top: -8px;
		left: -1px;
		width: calc(100% + 2px);
		height: 8px;
		border-radius: 6px 6px 0 0;
	}

	.tarifs__item.tarifs__item--0:before {
		background: #718096;
	}
	.tarifs__item.tarifs__item--1:before {
		background: #1ABC9C;
	}

	.tarifs__item.tarifs__item--2:before {
		background: #575FCF;
	}

	.tarifs__item h6, .tarifs__item .tarifs__item__details .tarifs__item__detail {
		color: #818181;
	}

	.tarifs__item .tarifs__item__details .tarifs__item__detail {
		background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMTIuNjk2NCA4LjQ3NzE2SDkuNjQyODJWNS40MjM1OUM5LjY0MjgyIDUuMzM1MiA5LjU3MDUgNS4yNjI4OCA5LjQ4MjExIDUuMjYyODhIOC41MTc4MkM4LjQyOTQzIDUuMjYyODggOC4zNTcxMSA1LjMzNTIgOC4zNTcxMSA1LjQyMzU5VjguNDc3MTZINS4zMDM1NEM1LjIxNTE0IDguNDc3MTYgNS4xNDI4MiA4LjU0OTQ5IDUuMTQyODIgOC42Mzc4OFY5LjYwMjE2QzUuMTQyODIgOS42OTA1NiA1LjIxNTE0IDkuNzYyODggNS4zMDM1NCA5Ljc2Mjg4SDguMzU3MTFWMTIuODE2NUM4LjM1NzExIDEyLjkwNDggOC40Mjk0MyAxMi45NzcyIDguNTE3ODIgMTIuOTc3Mkg5LjQ4MjExQzkuNTcwNSAxMi45NzcyIDkuNjQyODIgMTIuOTA0OCA5LjY0MjgyIDEyLjgxNjVWOS43NjI4OEgxMi42OTY0QzEyLjc4NDggOS43NjI4OCAxMi44NTcxIDkuNjkwNTYgMTIuODU3MSA5LjYwMjE2VjguNjM3ODhDMTIuODU3MSA4LjU0OTQ5IDEyLjc4NDggOC40NzcxNiAxMi42OTY0IDguNDc3MTZaIiBmaWxsPSIjMUFCQzlDIi8+DQogICAgPHBhdGggZD0iTTkgMC4xMTk5OTVDNC4wMjk5MSAwLjExOTk5NSAwIDQuMTQ5OTEgMCA5LjEyQzAgMTQuMDkwMSA0LjAyOTkxIDE4LjEyIDkgMTguMTJDMTMuOTcwMSAxOC4xMiAxOCAxNC4wOTAxIDE4IDkuMTJDMTggNC4xNDk5MSAxMy45NzAxIDAuMTE5OTk1IDkgMC4xMTk5OTVaTTkgMTYuNTkzMkM0Ljg3MzY2IDE2LjU5MzIgMS41MjY3OSAxMy4yNDYzIDEuNTI2NzkgOS4xMkMxLjUyNjc5IDQuOTkzNjYgNC44NzM2NiAxLjY0Njc4IDkgMS42NDY3OEMxMy4xMjYzIDEuNjQ2NzggMTYuNDczMiA0Ljk5MzY2IDE2LjQ3MzIgOS4xMkMxNi40NzMyIDEzLjI0NjMgMTMuMTI2MyAxNi41OTMyIDkgMTYuNTkzMloiIGZpbGw9IiMxQUJDOUMiLz4NCjwvc3ZnPg==");
		background-repeat: no-repeat;
		background-size: 18px auto;
		background-position: left 3.5px;
		padding-left: 24px;
	}

	.tarifs__item.tarifs__item--0 button {
		background-color: #FFFFFF;
		border: 4px solid #1ED0AD;
		color: #1ED0AD;
	}

	.tarifs__item.tarifs__item--0 button:hover {
		background-color: #1ED0AD;
		color: #FFFFFF;
	}

	.tarifs__item.tarifs__item--1 button {
		background-color: #1ABC9C;
		border: 4px solid #1ED0AD;
	}

	.tarifs__item.tarifs__item--1 button:hover {
		background-color: #1ED0AD;
	}

	.tarifs__item.tarifs__item--2 button {
		background-color: #575fcf;
		border: 4px solid #434CCD;
	}

	.tarifs__item.tarifs__item--2 button:hover {
		background-color: #434CCD;
	}

	@media only screen and (min-width: 768px) {
		.tarifs__item .tarifs__item__details .tarifs__item__detail {
			background-position: left 5.5px;
		}
	}

	@media only screen and (max-width: 375px) {
		.tarifs__item {
			height: 575px;
		}
	}
</style>