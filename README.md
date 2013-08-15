# JavaScript Snippets for Sublime Text

![Demo](http://zno.io/QopI/subime-snippet.gif)

## Install

To install through [Package Control](http://wbond.net/sublime_packages/package_control),
search for **JavaScript & NodeJS Snippets**. If you still don't have Package Control in Sublime Text, [go get it](http://wbond.net/sublime_packages/package_control/installation).
It's pure awesomeness.

If you insist to not install it, you can download the package and
put it manually inside your `Pacakages` directory. It should work but will not update automatically.

## Console

### [cd] console.dir

```javascript
console.dir(${1:obj});
```

### [ce] console.error

```javascript
console.error(${1:obj});
```

### [cl] console.log

```javascript
console.log(${1:obj});
```

### [cw] console.warn

```javascript
console.warn(${1:obj});
```

## DOM

### [ae] addEventListener

```javascript
${1:document}.addEventListener('${2:event}', function(e) {
	${3:// body...}
});
```

### [ac] appendChild

```javascript
${1:document}.appendChild('${2}');
```

### [rc] removeChild

```javascript
${1:document}.removeChild('${2}');
```

### [cel] createElement

```javascript
${1:document}.createElement('${2:elem}');
```

### [cdf] createDocumentFragment

```javascript
${1:document}.createDocumentFragment();
```

### [ca] classList.add

```javascript
${1:document}.classList.add('${2:class}');
```

### [ct] classList.toggle

```javascript
${1:document}.classList.toggle('${2:class}');
```

### [cr] classList.remove

```javascript
${1:document}.classList.remove('${2:class}');
```

### [gi] getElementById

```javascript
${1:document}.getElementById('${2:id}');
```

### [gc] getElementsByClassName

```javascript
${1:document}.getElementsByClassName('${2:class}');
```

### [gt] getElementsByTagName

```javascript
${1:document}.getElementsByTagName('${2:tag}');
```

### [ga] getAttribute

```javascript
${1:document}.getAttribute('${2:attr}');
```

### [sa] setAttribute

```javascript
${1:document}.setAttribute('${2:attr}', ${3:value});
```

### [ra] removeAttribute

```javascript
${1:document}.removeAttribute('${2:attr}');
```

### [ih] innerHTML

```javascript
${1:document}.innerHTML = '${2}';
```

### [tc] textContent

```javascript
${1:document}.textContent = '${2}';
```

### [qs] querySelector

```javascript
${1:document}.querySelector('${2:selector}');
```

### [qsa] querySelectorAll

```javascript
${1:document}.querySelectorAll('${2:selector}');
```

## Loop

### [fe] forEach

```javascript
${1:myArray}.forEach(function (${2:elem}) {
	${3:// body...}
});
```

### [fec] forEachCall

```javascript
[].forEach.call(document.querySelectorAll(${1:selector}), function (${2:elem}) {
	${3:// body...}
});
```

### [fi] for in

```javascript
for (var ${1:prop} in ${1:obj}) {
  if (${1:obj}.hasOwnProperty(${1:prop})) {
    ${3:// body...}
  }
}
```

## Function

### [fu] function

```javascript
function ${1:methodName} (${2:arguments}) {
  ${3:// body...}
}
```

### [pr] prototype

```javascript
${1:ClassName}.prototype.${2:methodName} = function(${3:arguments}) {
  ${4:// body...}
}
```

### [iffe] immediately-invoked function expression

```javascript
(function (window, document, undefined) {
	${1:// body...}
})(window, document);
```

## Timer

### [si] setInterval

```javascript
setInterval(function() {
  ${2:// body...}
}, ${1:delay});
```

### [st] setTimeout

```javascript
setTimeout(function() {
  ${2:// body...}
}, ${1:delay});
```

## NodeJS

### [ase] assert.equal

```javascript
assert.equal(${1:actual}, ${2:expected});
```

### [asd] assert.deepEqual

```javascript
assert.deepEqual(${1:actual}, ${2:expected});
```

### [asn] assert.notEqual

```javascript
assert.notEqual(${1:actual}, ${2:expected});
```

### [me] module.exports

```javascript
module.exports = ${1}
```

### [pe] process.exit

```javascript
process.exit(${1:code});
```

### [re] require

```javascript
require('${1:module}');
```

## Roadmap

* Add BDD snippets

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* [v0.1.4](https://github.com/zenorocha/sublime-snippets-js/releases/tag/0.1.4) August 15, 2013
	* Added `createDocumentFragment` and `removeChild` snippets
	* Renamed `appendChild` snippet filename
* [v0.1.3](https://github.com/zenorocha/sublime-snippets-js/releases/tag/0.1.3) August 14, 2013
	* Fixed duplicated [ce] shortcut
* [v0.1.2](https://github.com/zenorocha/sublime-snippets-js/releases/tag/0.1.2) August 14, 2013
	* Added timer function snippets
* [v0.1.1](https://github.com/zenorocha/sublime-snippets-js/releases/tag/0.1.1) August 14, 2013
	* Added NodeJS assert snippets
* [v0.1.0](https://github.com/zenorocha/sublime-snippets-js/releases/tag/0.1.0) August 14, 2013
	* Added console and function snippets
	* Added DOM manipulation snippets
	* Added NodeJS snippets

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha