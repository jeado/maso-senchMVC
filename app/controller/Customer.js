Ext.define('MasoApp.controller.Customer',{
	extend : 'Ext.app.Controller',
	config : {
		control : {
			customerList : {
				itemtap: 'showCustomerInfo'
			}
		},
		refs : {
			customerList : 'customerList'
		}
	},
	showCustomerInfo : function(comp, index, target, record, opts) {
		console.log(record);
	}
});