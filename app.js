Ext.application({
	name : 'MasoApp',
	models: ['Customer'],
	views: ['Welcome','CustomerInfo','CustomerList'],
	controllers: ['Customer'],
	launch: function() {
    Ext.Viewport.add({
      xtype: 'tabpanel',
      tabBarPosition: 'bottom',
      fullscreen: true,
      items: [
          {
              xtype : 'welcome'
          },
          {
              title : '고객 목록',
              xtype : 'customerList',
              iconCls : 'star'
          }
        ]
    });
  }
});