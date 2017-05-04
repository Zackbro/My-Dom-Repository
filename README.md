## Usage
1. 用script标签引入.
2. Export MDOM: var $$ = MDOM.

## Available Methods
* .addClass
	```
	// Add "intro" class
	$$('p').addClass('intro');
	
	```
* .removeClass
	```
	// remove "intro" class
	$$('p').removeClass('intro');
	
	```
* .attr
	```
	// Get attribute value
	<a href="http://google.com">Google</a>
	$$('a').attr('href'); => http://google.com
	
	```
* .removeAttr
	```
	// Remove attribute value
	<a href="http://google.com">Google</a>
	$$('a').RemoveAttr('href');
	
	```
* .data(key, value)
	```
	// storage data, the same as data-
	<a href="http://google.com">Google</a>
	$$('a').data('user', {id: 1, name: 'zack'}); 
	
	// get data
	$$('a').data('user'); => {id: 1, name: 'zack'}
	```
## License

MIT