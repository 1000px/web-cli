import Vue from 'vue';
import Router from 'vue-router';
import RecordList from 'app01/view/record/list';
import RecordDetail from 'app01/view/record/detail';
import DeviceList from 'app01/view/device/list';
import DeviceDetail from 'app01/view/device/detail';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/record',
		component: { template: '<router-view/>' },
		children: [
			{
				path: '',
				name: 'record-list',
				component: RecordList
			}, {
				path: 'detail',
				name: 'record-detail',
				component: RecordDetail
			}
		]
	}, {
		path: '/device',
		component: { template: '<router-view/>' },
		children: [
			{
				path: '',
				name: 'record-list',
				component: DeviceList
			}, {
				path: 'detail',
				name: 'record-detail',
				component: DeviceDetail
			}
		]
	}]
});
