AngularJS directive of datepicker with IOS style ui
===================================================

A simple but powerful AngularJS directive that allows you to select date with IOS style scroll. You can fit it in your mobile html5 app for ios style animation feel datepicker. It is a base. You can decorate your own style datepicker by modifying css..


To see a demo go here: https://ankitdhir.github.io/angularjs-ios-style-datepicker/

### Library dependency
* Angular
* JQuery

### Getting Started
Download the code, and include the datepickerDirective.js,datepickerTemplate.html files in your page. Then add the iosdatepicker module to your Angular App file, e.g.
```html
var app = angular.module('app', ["iosdatepicker"]);
```

### Usage

```html
 <iosdatepicker date='date' min-year='1970' max-year='2017'></iosdatepicker>
```

Note: two-way data binding for $scope.date

### Description of attributes
| Attribute        | Description           | Required | Example  |
| :------------- |:-------------| :-----:| :-----|
| date | Initial date for date picker with two way binding | Yes | $scope.date = new Date(); in controller and use date as above |
| min-year | Min Year which user can select | Yes | 1950 |
| max-year | Max Year which user can select | Yes | 2018 |


### License
The angularjs-ios-style-datepicker project is covered by the [MIT License](http://opensource.org/licenses/MIT "MIT License").

The MIT License (MIT)

Copyright (c) 2014 Ankit Dhir, and contributors to the angularjs-ios-style-datepicker project.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

