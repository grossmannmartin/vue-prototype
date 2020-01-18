import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex'

import About from './components/About.vue'
import Homepage from './components/Homepage/Homepage.vue'
import OrderStepCart from './components/Order/OrderStepCart.vue'
import OrderStepTransportAndPayment from './components/Order/OrderStepTransportAndPayment.vue'
import OrderStepDeliveryData from './components/Order/OrderStepDeliveryData.vue'

import OrderPreview from './state/OrderPreview'
import { productsInCart, shippingMethods, paymentMethods, shippingAndPaymentRelations } from './api';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		orderPreview: new OrderPreview(shippingMethods, paymentMethods, shippingAndPaymentRelations),
		productsInCart: productsInCart,
	},
	mutations: {
		setShippingMethod (state, shippingMethod) {
			state.orderPreview.setShippingMethod(shippingMethod);
		},
		setPaymentMethod(state, paymentMethod) {
			state.orderPreview.setPaymentMethod(paymentMethod);
		},
		setShippingMethods (state, shippingMethods) {
			state.orderPreview.setShippingMethods(shippingMethods);
		},
		setPaymentMethods(state, paymentMethods) {
			state.orderPreview.setPaymentMethods(paymentMethods);
		}
	}
});

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: Homepage },
		{ path: '/about', component: About },
		{ path: '/order', component: OrderStepCart },
		{ path: '/order/2', component: OrderStepTransportAndPayment },
		{ path: '/order/3', component: OrderStepDeliveryData }
	]
});

Vue.config.productionTip = false

new Vue({
	store,
	router,
	template: `
	<div id="app">
		<div class="web__in">
			<div class="web__main">
				<div class="web__main__content">
					<router-view class="view"></router-view>
				</div>
			</div>
		</div>
	</div>`
}).$mount('#app')