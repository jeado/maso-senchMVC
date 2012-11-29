Ext.define("MasoApp.view.Welcome",{
	extend: 'Ext.Panel',
	xtype: 'welcome',
	config : {
		cls: 'welcome',
		title : 'Welcome',
		iconCls: 'home',
		html: ["<img src='http://www.imaso.co.kr/v2/img/left/logo.gif'>",
					"<p>Welcome to Maso App</p>",
					"<p>궁금하신 점은 <a href='http://www.facebook.com/groups/korea.sencha/'>한국 센차 유저그룹</a>을 통하여 문의하여 주세요</p>"].join("")
	}
});