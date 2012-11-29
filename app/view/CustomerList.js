Ext.define("MasoApp.view.CustomerList",{
	extend: 'Ext.dataview.List',
	xtype: 'customerList',
	config: {
		itemTpl: '{name}',
		data: [
			{ seq: 1, name: '고재도', email: 'haibane84@gmail.com', telNo: '010-000-000', address: '서울시 종로구 관철동' },
			{ seq: 2, name: '안병도', email: 'yaioyaio@gmail.com', telNo: '010-000-000', address: '서울시 종로구 관철동' },
			{ seq: 3, name: '김태원', email: 'mniktw@gmail.com', telNo: '010-000-000', address: '서울시 종로구 관철동' }
		]
	}
});