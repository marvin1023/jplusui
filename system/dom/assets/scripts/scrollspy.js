/** * @author  */using('System.Dom.Dom')Dom.implement({		scrollSpy: function(){		var me = this,			initY = me.getPosition().y,			initP = me.getStyle('position'),			initT = me.getStyle('top');		if(navigator.isIE6){				Dom.query('html,html body').setStyle('_background-image','url("about:blank")').setStyle('_background-attachment','fixed');			}		Dom.window.on('scroll',function() {			if (navigator.isIE6) {				if (initY <= document.getScroll().y) {
					me.setStyle('position', 'absolute').setStyle('top', document.documentElement.scrollTop);
				} else {
					me.setStyle('position', initP).setStyle('top', initT);
				}						}else{				if (initY <= document.getScroll().y) {
					me.setStyle('position', 'fixed').setStyle('top', 0);
				} else {
					me.setStyle('position', initP).setStyle('top', initT);
				}			}		});	}});