Ext.define('MasoApp.model.Customer',{
	extend : 'Ext.data.Model',
	config : {
		ipProperty : 'seq',
		fields: [
			{ name : 'seq', type : 'int'},
			{ name : 'name', type : 'string'},
			{ name : 'email', type : 'string'},
			{ name : 'telNo', type : 'string'},
			{ name : 'address', type : 'string'}
		]
	}
});