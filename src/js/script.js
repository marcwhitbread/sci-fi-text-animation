(function() {
	
	var selection = getElementByClass('scifi');
	
	for(var i = 0; i < selection.length; i++)
		scifi(selection[i]);
	
})();

function scifi(element) {
	
	element.addEventListener('click', function(e) {
		
		if(element.className.indexOf('open') != -1)
			element.className = element.className.replace(/\bopen\b/,'');
		else
			element.className += " open";
		
	});
	
}

function getElementByClass(className) {
	
    var elements = document.getElementsByTagName('*'),i;
    var selected = [];
    
    for(i in elements)
        if((" "+elements[i].className+" ").indexOf(" "+className+" ") > -1)
            selected[selected.length] = elements[i];
        
    return selected;
    
}