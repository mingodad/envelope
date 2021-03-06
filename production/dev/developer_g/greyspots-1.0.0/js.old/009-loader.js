
window.addEventListener('design-register-element', function () {
    registerDesignSnippet('Add Loader (to page)', 'GS.addLoader', 'addLoader(\'${0:class-name}\', \'${1:Loading...}\');');
    registerDesignSnippet('Add Loader (to element)', 'GS.addLoader', 'addLoader(${0:document.getElementById(\'id\')}, \'${1:Loading...}\');');
    registerDesignSnippet('Remove Loader (from page)', 'GS.removeLoader', 'removeLoader(\'${0:class-name}\');');
    registerDesignSnippet('Remove Loader (from element)', 'GS.removeLoader', 'removeLoader(${0:document.getElementById(\'id\')});');
});

document.addEventListener('DOMContentLoaded', function () {
    xtag.register('gs-loader', {
        lifecycle: {},
        events: {},
        accessors: {},
        methods: {}
    });
});

GS.addLoader = function (loaderClassOrTarget, loaderContent) {
    var loaderElement = document.createElement('gs-loader'), loaderClass, loaderTarget;
    
    if (typeof loaderClassOrTarget === 'string') {
        loaderClass = loaderClassOrTarget;
        
    } else if (typeof loaderClassOrTarget === 'object') {
        loaderTarget = loaderClassOrTarget;
    }
    
    if (loaderClass) {
        loaderElement.classList.add('loader-' + loaderClass);
    }
    
    if (!loaderTarget) {
        loaderTarget = document.body;
    }
    
    loaderElement.innerHTML =   '<div class="loader-positioning" gs-dynamic>' +
                                    '<div class="loader" gs-dynamic></div>' +
                                    '<div class="loader-inner spinning" gs-dynamic></div>' +
                                    '<div class="loader-inner-inner spinning" gs-dynamic></div>' +
                                    '<div class="loader-inner-inner-inner spinning" gs-dynamic></div>' +
                                    (loaderContent ? '<div class="loader-content" gs-dynamic>' + loaderContent + '</div>' : '') +
                                '</div>';
    
    loaderTarget.appendChild(loaderElement); // document.body
};

GS.removeLoader = function (loaderClassOrTarget) {
    var element, i, len, arrLoaders, loaderClass, loaderTarget;
    
    if (typeof loaderClassOrTarget === 'string') {
        loaderClass = loaderClassOrTarget;
        
    } else if (typeof loaderClassOrTarget === 'object') {
        loaderTarget = loaderClassOrTarget;
    }
    
    if (loaderClass) {
        element = document.getElementsByClassName('loader-' + loaderClass)[0];
        
    } else if (loaderTarget) {
        element = xtag.queryChildren(loaderTarget, 'gs-loader')[0];
        
    } else {
        
        arrLoaders = xtag.queryChildren(document.body, 'gs-loader');
        
        for (i = 0, len = arrLoaders.length; i < len; i += 1) {
            if (!arrLoaders[i].hasAttribute('id')) {
                element = arrLoaders[i];
                break;
            }
        }
    }
    
    if (element) {
        element.parentNode.removeChild(element);
    } else {
        console.warn('GS.removeLoader Error: loader' + (loaderClass ? ' class: "' + loaderClass + '"' : '') + ' not found');
    }
};

