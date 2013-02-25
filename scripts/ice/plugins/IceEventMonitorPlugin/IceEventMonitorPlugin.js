(function (){
	var exports = this, IceEventMonitorPlugin;

	IceEventMonitorPlugin = function (ice_instance) {
		this._ice = ice_instance;
	};

	IceEventMonitorPlugin.prototype = {
		setSettings: function (settings) {
			settings = settings || {};
    		ice.dom.extend(this, settings);
		},

		nodeCreated: function(node, options) {
			console.log(new Date().toLocaleString() + ': ice.IceEventMonitorPlugin.nodeCreated');

			$(node).bind('change', this.nodeChanged);

			if (this.changeCaptured) {
				this.changeCaptured.apply(this, [node, options])
			}
		},

		keyDown: function(e){
			console.log(new Date().toLocaleString() + ': ice.IceEventMonitorPlugin.keyDown');
			return true;
		},

		keyPress: function(e){
			console.log(new Date().toLocaleString() + ': ice.IceEventMonitorPlugin.keyPress');
		},

		selectionChanged: function(range) {
			console.log(new Date().toLocaleString() + ': ice.IceEventMonitorPlugin.selectionChanged');
		},

		nodeChanged: function(e) {
			console.log(new Date().toLocaleString() + ': ice.IceEventMonitorPlugin.nodeChanged');
		},

		changeCaptured: undefined
	};

	ice.dom.noInclusionInherits(IceEventMonitorPlugin, ice.IcePlugin);
	exports._plugin.IceEventMonitorPlugin = IceEventMonitorPlugin;

}).call(this.ice);