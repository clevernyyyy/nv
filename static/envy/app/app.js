import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import DS from 'ember-data';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

//Define any global variables or functions here using the 'App' namespace
App.api = "/api"
App.debug = true;

App.getLocal = function(name){
	return JSON.parse(localStorage.getItem(name));
};
App.setLocal = function (name, value){
	localStorage.setItem(name, JSON.stringify(value)); 
};
App.getSession = function(name){
	return JSON.parse(sessionStorage.getItem(name));
};
App.setSession = function (name, value){
	sessionStorage.setItem(name, JSON.stringify(value)); 
};
App.getCookie = function (cookieName){
	//Finds cookieName in window.document.cookie
	var cookieValue = document.cookie;
	var start = cookieValue.indexOf(" " + cookieName + "=");
	if (start === -1){
		start = cookieValue.indexOf(cookieName + "=");
	}
	if (start === -1){
	  	cookieValue = null;
	}
	else {
	  	start = cookieValue.indexOf("=", start) + 1;
	  	var end = cookieValue.indexOf(";", start);
	  	if (end === -1){
	    	end = cookieValue.length;
	    }
	  	cookieValue = decodeURI(cookieValue.substring(start,end));
	}
	return cookieValue;
};

App.setCookie = function (cookieName,value,exdays){
	//Adds cookieName in window.document.cookie following the format cookieName=value, where exdays sets the expiration date. exdays=null implies session cookie.
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var cookieValue = encodeURI(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie = cookieName + "=" + cookieValue;
};

DS.TobjectTransform = DS.Transform.extend({
  deserialize: function(serialized) {
  	console.log("deserialize");
    return (Ember.typeOf(serialized) === 'object') ? serialized : null;
  },
  serialize: function(deserialized) {
  	console.log("serialize");
  	var type = Ember.typeOf(deserialized);
  	if (type === 'object') {
	    	return deserialized;
		} else if (type === 'string') {
			return deserialized.split(',').map(function(item) {
				return Ember.$jQuery.trim(item);
			});
		} else {
			return null;
		}
	}
});

//App.register("transform:tobject", DS.TobjectTransform);

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: window.location.origin + '/api',
  headers: {
    "X-CSRFToken": App.getCookie('csrftoken'),
  }

}); //used by ember-data
App.store = DS.Store.extend({
  revision: 12,
  adapter: 'App.ApplicationAdapter'
  //adapter: DS.LSAdapter.create()
}); // used by ember-data

loadInitializers(App, config.modulePrefix);

export default App;
