var dom7 = (function () {
    var Dom7 = function (arr) {
        var _this = this, i = 0;
        // 创建类数组对象
        for(i = 0; i < arr.length; i++) {
            _this[i] = arr[i];
        }
        _this.length = arr.length;
        // 返回带方法的集合
        return this;
    };
    var $ = function (selector, context) {
        // arr保存选择器选择的数组对象
        var arr = [], i =0;
        // 如果已经是dom7的内置对象（的实例），就可以直接返回
        if (selector && !context) {
            if (selector instanceof Dom7) {
                return selector;
            }
        }
        if (selector) {
            // String
            if (typeof selector === 'string') {
                // els保存selector数组
                var els, temParent, html;
                selector = html = selector.trim();
                // 创建标签
                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                    var toCreate = 'div';
                    if (html.indexOf('<li') === 0) toCreate = 'ul';
                    if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                    if (html.indexOf('<tbody') === 0) toCreate = 'table';
                    if (html.indexOf('<option') === 0) toCreate = 'select';

                    temParent = document.createElement(toCreate);
                    temParent.innerHTML = html;
                    for (i = 0; i < temParent.childNodes.length; i++) {
                        arr.push(temParent.childNodes[i]);
                    }
                } else {
                    if (!context && selector[0] ==='#' && !selector.match(/[ .<>:~]/)) {
                        // 选择id
                        els = [document.getElementById(selector.split('#')[1])];
                        console.log(els);
                    }
                    // 选择class
                    else {
                        els = (context || document).querySelectorAll(selector);
                    }
                    for (i = 0; i < els.length; i++) {
                        if (els[i]) arr.push(els[i]);
                    }
                }
            }
            // 节点
            else if (selector.nodeType || selector === window || selector === document) {
                arr.push(selector);
            }
            // 数组节点 或者 dom7的类数组对象
            else if (selector.length > 0 && selector[0].nodeType) {
                for (i = 0; i < selector.length; i++) {
                    arr.push(selector[i]);
                }
            }
        }
        return new Dom7(arr);
    }

    Dom7.prototype = {
    	// this 指代的选取创建的类数组对象 ex: Dom7 {0: p, length: 1}
    	addClass: function (className) {
    		console.log(this);
    		if (typeof className === 'undefined') {
    			return this;
    		}
    		var classes = className.split(' ');
    		for (var i = 0; i < classes.length; i++) {
    			for (var j = 0; j < this.length; j++) {
    				// classList 属性返回元素的类名，作为 DOMTokenList 对象(h5)
    				if (typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    			}
    		}
    	},
    	// 移除class
    	removeClass: function (className) {
    		var classes = className.split(' ');
    		for (var i = 0; i < classes.length; i++) {
    			for (var j = 0; j < this.length; j++) {
    				if (typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    			}
    		}
    	},
    	// 获取属性值

    }
    return $;

})()

window.dom7 = dom7;

