var window1 = Titanium.UI.createWindow({
	backgroundColor:'#ccc',
	modal: true,
	navBarHidden: true,
	exitOnClose: true,
	});

var listenbutton = Titanium.UI.createButton({
	height: '50%',
	width: '50%',
	title: 'Listen',
	backgroundColor: '#000',
	color: "#ccc",
	top: 0,
	right: 0,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:30, verticalAlign:'center'},
	});

var biobutton = Titanium.UI.createButton({
	height: '50%',
	width: '50%',
	title: 'Bio',
	backgroundColor: '#000',
	color: '#ccc',
	top: 0,
	left: 0,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:30, verticalAlign:'center'},
	});

var menuview = Titanium.UI.createView({
	height: '25%',
	width: '100%',
	backgroundColor: '#ccc',
	bottom: 0,
});

var cabaretictitle = Titanium.UI.createLabel({
	text: 'Cabaretic',
	font: {fontFamily:'Arial',fontWeight:'bold',fontSize:100},
	color: '#000',
	top: 0,
	height: '25%',
	width: '100%',
	textAlign: 'center',
});

var portrait = Titanium.UI.createImageView({
	url: 'portrait.png',		
});

listenbutton.addEventListener('click', function()
{
	Titanium.Platform.openURL('http://www.youtube.com/user/cabaretic?feature=results_main'); 
});

biobutton.addEventListener('click', function()
{
	var window2 = Titanium.UI.createWindow({
	backgroundColor:'#ccc',
	modal: true,
	navBarHidden: true,
	}); 
	
	var biotitle = Titanium.UI.createLabel({
	text: 'Cabaretic',
	font: {fontFamily:'Arial',fontWeight:'bold',fontSize:100},
	color: '#000',
	top: 0,
	height: '15%',
	width: '100%',
	textAlign: 'center',
	});
		
	var bioview = Titanium.UI.createLabel({
	height: '85%',
	width: '75%',
	text: 'Cabaretic is Kevin Camp, a musician and blogger in Washington, DC. \nHe is a man, his guitar, his voice, and an engagingly lo-fi, no frills approach to music. Believing that less is more, Cabaretic records all vocals and instruments with one computer microphone. He blogs frequently for Daily Kos.',
	font: {fontFamily:'Arial',fontWeight:'bold',fontSize:30},
	color: '#000',
	bottom: 0,
	});
		
	window2.add(biotitle);
	window2.add(bioview);
	window2.open();
});

window1.add(cabaretictitle);
window1.add(portrait);
window1.add(menuview);
menuview.add(listenbutton);
menuview.add(biobutton);
window1.open(); 