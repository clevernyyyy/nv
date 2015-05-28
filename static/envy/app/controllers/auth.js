import Ember from 'ember';
import App from '../app.js';

export default Ember.Controller.extend({
    username: '',
    password: '',
    remember: false,
    isLoggedIN: false,
    errorMsg: '',
    inviteCode: '',
    inviteErrors: '',
    registerErrors: '',
    actions: {
		login: function(){
      			var token = App.getCookie('csrftoken');
			var username = this.get('username');
			var password = this.get('password');
			var remember = this.get('remember');

			var formData = 'csrfmiddlewaretoken='+token+'&username='+this.get('username')+'&password='+this.get('password');
			console.log(formData);
			var url = '../session/';
			var controllerObj = this;
			Ember.$.ajax({
				headers: {"X-CSRFToken": token},
			    url: url,
			    type: "POST",
			    contentType:"application/x-www-form-urlencoded",
			    data: formData
			})
			.then(function(response){
				console.log(response);
				if(!response.session.success){//unsuccessful login
					if(App.debug){console.log('Login POST Request to ' +url+' was unsuccessful.');}
					if(App.debug){console.log('The error was: '+response.session.message);}
					controllerObj.set('errorMsg', response.session.message);
				}
				else{//successful login
					if(App.debug){console.log('Login POST Request to ' +url+' was successful.');}
					controllerObj.set('isLoggedIn', true);
					App.setSession('username',username);
					App.setSession('isLoggedIn',true);
					if(remember){
						App.setLocal('username',username);
						App.setLocal('password',password);
						App.setLocal('remember',true);
					}
					controllerObj.transitionToRoute('/feed');  //change to feed
				}
			})
			.fail(function(){
	    		if(App.debug){console.log('Login failed');}
	    		controllerObj.set('isLoggedIn', false);
	    	});
                },
	init: function(){
                if(App.getSession('username')){ 
		    this.set('username', App.getSession('username'));
		} 
		else if (App.getLocal('username')){ 
		    this.set('username', App.getLocal('username'));
		}
		if(App.getLocal('password')!==""){ this.set('password', App.getLocal('password'));}
    	if(App.getSession('isLoggedIn')){ this.set('isLoggedIn', Ember.$.parseJSON(App.getSession('isLoggedIn')));}
    	if(App.getLocal('remember')){ this.set('remember', Ember.$.parseJSON(App.getLocal('remember')));}
	}
    }
});
            
