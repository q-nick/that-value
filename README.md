# Example Test Cases, and list of available validators
### Validator - number
``` ThatValue(123).is.number().valid();```
``` ThatValue(-113452).is.number().valid();```
``` ThatValue(112345).is.number().valid();```
``` ThatValue(1.023).is.number().valid();```
### Validator - string
``` ThatValue(a123a).is.string().valid();```
``` ThatValue(123).is.string().valid();```
``` ThatValue({a: '123'}).is.string().valid();```
### Validator - email
``` ThatValue(a@a.as).is.email().valid();```
### Validator - ip
``` ThatValue(0000:0000:0000:0000:0000:0000:0000:0000).is.ip().valid();```
``` ThatValue(fe00::1).is.ip().valid();```
``` ThatValue(fe80::217:f2ff:fe07:ed62).is.ip().valid();```
``` ThatValue(ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff).is.ip().valid();```
``` ThatValue(2001:0db8:0000:85a3:0000:0000:ac1f:8001).is.ip().valid();```
### Validator - isbn
``` ThatValue(9780306406157).is.isbn().valid();```
``` ThatValue(978-0-306-40615-7).is.isbn().valid();```
``` ThatValue(978 0 306 40615 7).is.isbn().valid();```
``` ThatValue(978-0-306-40615-6).is.isbn().valid();```
### Validator - vin
### Validator - uri
``` ThatValue(http://userid:password@example.com:8080).is.uri().valid();```
``` ThatValue(http://userid:password@example.com:8080/).is.uri().valid();```
``` ThatValue(http://userid@example.com).is.uri().valid();```
``` ThatValue(http://userid@example.com/).is.uri().valid();```
``` ThatValue(http://userid@example.com:8080).is.uri().valid();```
``` ThatValue(http://userid@example.com:8080/).is.uri().valid();```
``` ThatValue(http://userid:password@example.com).is.uri().valid();```
``` ThatValue(http://userid:password@example.com/).is.uri().valid();```
``` ThatValue(http://142.42.1.1/).is.uri().valid();```
``` ThatValue(http://142.42.1.1:8080/).is.uri().valid();```
``` ThatValue(http://foo.com/blah_(wikipedia)#cite-1).is.uri().valid();```
``` ThatValue(http://foo.com/blah_(wikipedia)_blah#cite-1).is.uri().valid();```
``` ThatValue(http://foo.com/(something)?after=parens).is.uri().valid();```
``` ThatValue(http://code.google.com/events/#&product=browser).is.uri().valid();```
``` ThatValue(http://j.mp).is.uri().valid();```
``` ThatValue(http://foo.bar/?q=Test%20URL-encoded%20stuff).is.uri().valid();```
``` ThatValue(http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com).is.uri().valid();```
``` ThatValue(http://1337.net).is.uri().valid();```
``` ThatValue(http://a.b-c.de).is.uri().valid();```
``` ThatValue(ftp://foo.bar/baz).is.uri().valid();```
``` ThatValue(http://223.255.255.254).is.uri().valid();```
