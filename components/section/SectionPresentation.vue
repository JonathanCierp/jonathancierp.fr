<template>
	<section itemscope id="presentation" class="presentation mt-10 md:mt-16 container mx-auto flex text-center md:text-left">
		<div class="presentation__content lg:w-1/2 mx-auto">
			<h1 class="text-4xl md:text-5xl text-white leading-tight font-bold" v-html="$t('body.section.presentation.title')"></h1>
			<h2 class="my-10 md:my-6 text-white" v-html="$t('body.section.presentation.subtitle')"></h2>
			<div class="presentation__content__actions flex justify-center md:justify-start">
				<a href="#contact" class="presentation__content__actions__contact text-white font-semibold mr-3 px-3 py-3 md:px-6"
					 v-html="$t('body.section.presentation.button.contact')"></a>
				<a href="#mes-services" class="presentation__content__actions__more text-white font-semibol mx-3 px-3 py-3 md:px-6"
					 v-html="$t('body.section.presentation.button.plus')"></a>
			</div>
		</div>
		<div class="presentation__images w-1/2 relative hidden lg:block">
			<icon-man-sit-on-block />
			<icon-man-talk-to-woman />
			<icon-man-and-woman-looking />
			<icon-man-and-woman-sit-on-pc />
		</div>
	</section>
</template>

<script>
	import IconManSitOnBlock from "@/components/icon/IconManSitOnBlock"
	import IconManTalkToWoman from "@/components/icon/IconManTalkToWoman"
	import IconManAndWomanLooking from "@/components/icon/IconManAndWomanLooking"
	import IconManAndWomanSitOnPc from "@/components/icon/IconManAndWomanSitOnPc"
	
	export default {
		name: "section-presentation",
		components: {
			IconManSitOnBlock,
			IconManTalkToWoman,
			IconManAndWomanLooking,
			IconManAndWomanSitOnPc
		}
	}
</script>

<style>
	.presentation .presentation__content .presentation__content__actions .presentation__content__actions__contact{
		background-color: #1ABC9C;
		border: 4px solid #1ED0AD;
	}

	.presentation .presentation__content .presentation__content__actions .presentation__content__actions__contact:hover{
		background-color: #1ED0AD;
	}

	.presentation .presentation__content .presentation__content__actions .presentation__content__actions__more{
		background-color: transparent;
		border: 4px solid #1ED0AD;
	}

	.presentation .presentation__content .presentation__content__actions .presentation__content__actions__more:hover{
		background-color: #1ED0AD;
		border: 4px solid transparent;
	}

	.presentation .presentation__images #man-sit-on-block{
		animation: float 3s ease-in infinite;
		left: 28%;
		top: 26%;
		z-index: 2;
		width: 61px;
		height: 105px;
	}

	.presentation .presentation__images #man-talk-to-woman{
		animation: float 3.5s ease-in infinite;
		left: 23%;
		top: 58%;
		z-index: 2;
		width: 74px;
		height: 115px;
	}

	.presentation .presentation__images #man-and-woman-looking{
		animation: float 4s ease-in infinite;
		left: 52%;
		top: 67%;
		z-index: 2;
		width: 135px;
		height: 150px;
	}

	.presentation .presentation__images #man-and-woman-sit-on-pc{
		animation: float 4.5s ease-in infinite;
		left: 29%;
		top: 3%;
		z-index: 1;
		width: 239px;
		height: 270px;
	}

	@keyframes float {
		0% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(15px);
		}
		100% {
			transform: translateY(0px);
		}
	}
</style>