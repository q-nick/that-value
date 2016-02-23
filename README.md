# that-value & ThatValue 
### Installation: 
Currently options to install are:
```
npm install that-value --save
```
```
bower install that-value --save
```
After that you must include main file: ```that-value.js``` in your code. It will add ```ThatValue``` to global namespace.
### How to use: 
ThatValue uses natural language to show what validation is really doing. It has few hyphens like: "is", "and" and probably few more in future.
For Example if you want to check something like this:
"If that value is an valid email and contains specific domain "mail.pl" you can write it as:"
```
if(ThatValue('paul@mail.pl').is.email().and.contains('mail.pl').valid()) 
{ 
/*do something*/
}
```
call ```.valid()``` is required here to get validation result. But we can use it in another way.
You can also check which property isn`t valid, then you should save validation object that is returned by ThatValue.
```
var emailValue = ThatValue('paul@omg.pl').is.string().is.email().and.contains('paul');

if(emailValue.valid())
{
    /* when valid */
} 
else
{ 
  /*not valid*/
   var errorList = emailValue.getErrors();
}
```
now ```errorList``` will contain name of validators which returned false. In This Example: ```["email"]```
# List of currently available validators
### Validator - number
```
 ThatValue(123).is.number().valid(); 
```

```
 ThatValue(-113452).is.number().valid(); 
```

```
 ThatValue(112345).is.number().valid(); 
```

```
 ThatValue(1.023).is.number().valid(); 
```

### Validator - string
```
 ThatValue("a123").is.string().valid(); 
```

```
 ThatValue("a123a").is.string().valid(); 
```

```
 ThatValue("123").is.string().valid(); 
```

```
 ThatValue("{a: '123'}").is.string().valid(); 
```

### Validator - email
```
 ThatValue("afsdfasdf@drgdrg.pl").is.email().valid(); 
```

```
 ThatValue("a+++++sdf@drgdrg.pl").is.email().valid(); 
```

```
 ThatValue("a@a.as").is.email().valid(); 
```

### Validator - ip
```
 ThatValue("0.0.0.0").is.ip().valid(); 
```

```
 ThatValue("192.168.1.1").is.ip().valid(); 
```

```
 ThatValue("255.255.255.255").is.ip().valid(); 
```

```
 ThatValue("0000:0000:0000:0000:0000:0000:0000:0000").is.ip().valid(); 
```

```
 ThatValue("fe00::1").is.ip().valid(); 
```

```
 ThatValue("fe80::217:f2ff:fe07:ed62").is.ip().valid(); 
```

```
 ThatValue("ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff").is.ip().valid(); 
```

```
 ThatValue("2001:0db8:0000:85a3:0000:0000:ac1f:8001").is.ip().valid(); 
```

### Validator - isbn
```
 ThatValue("9971502100").is.isbn().valid(); 
```

```
 ThatValue("99921-58-10-7").is.isbn().valid(); 
```

```
 ThatValue("960 425 059 0").is.isbn().valid(); 
```

```
 ThatValue("99921-58-10-6").is.isbn().valid(); 
```

```
 ThatValue("9780306406157").is.isbn().valid(); 
```

```
 ThatValue("978-0-306-40615-7").is.isbn().valid(); 
```

```
 ThatValue("978 0 306 40615 7").is.isbn().valid(); 
```

```
 ThatValue("978-0-306-40615-6").is.isbn().valid(); 
```

### Validator - vin
```
 ThatValue("1FAHP26W49G252740").is.vin().valid(); 
```

```
 ThatValue("2FTRX07W53C371582").is.vin().valid(); 
```

```
 ThatValue("WP0CA29863U153381").is.vin().valid(); 
```

### Validator - uri
```
 ThatValue("http://foo.com/blah_blah").is.uri().valid(); 
```

```
 ThatValue("http://foo.com/blah_blah/").is.uri().valid(); 
```

```
 ThatValue("http://foo.com/blah_blah_(wikipedia)").is.uri().valid(); 
```

```
 ThatValue("http://foo.com/blah_blah_(wikipedia)_(again)").is.uri().valid(); 
```

```
 ThatValue("http://www.example.com/wpstyle/?p=364").is.uri().valid(); 
```

```
 ThatValue("https://www.example.com/foo/?bar=baz&inga=42&quux").is.uri().valid(); 
```

```
 ThatValue("http://userid:password@example.com:8080").is.uri().valid(); 
```

```
 ThatValue("http://userid:password@example.com:8080/").is.uri().valid(); 
```

```
 ThatValue("http://userid@example.com").is.uri().valid(); 
```

```
 ThatValue("http://userid@example.com/").is.uri().valid(); 
```

### Validator - zipCode
```
 ThatValue("1234").is.zipCode("AF").valid(); 
```

```
 ThatValue("1234").is.zipCode("AL").valid(); 
```

```
 ThatValue("1234").is.zipCode("AM").valid(); 
```

```
 ThatValue("1234").is.zipCode("AR").valid(); 
```

```
 ThatValue("1234").is.zipCode("AT").valid(); 
```

```
 ThatValue("1234").is.zipCode("AU").valid(); 
```

```
 ThatValue("1234").is.zipCode("BD").valid(); 
```

```
 ThatValue("1234").is.zipCode("BE").valid(); 
```

```
 ThatValue("1234").is.zipCode("BG").valid(); 
```

```
 ThatValue("1234").is.zipCode("CV").valid(); 
```

### Validator - greaterThan
```
 ThatValue(1.0000000001).is.greaterThan(1).valid(); 
```

```
 ThatValue(2).is.greaterThan(1).valid(); 
```

```
 ThatValue(22345234).is.greaterThan(3456).valid(); 
```

### Validator - lowerThan
```
 ThatValue(1.0000000001).is.lowerThan(1.1).valid(); 
```

```
 ThatValue(2).is.lowerThan(3).valid(); 
```

```
 ThatValue(22345234).is.lowerThan(345612341234).valid(); 
```

### Validator - shorterThan
```
 ThatValue("abracadabra").is.shorterThan(15).valid(); 
```

```
 ThatValue("abracadabra").is.shorterThan(12).valid(); 
```

### Validator - longerThan
```
 ThatValue("abracadabra").is.longerThan(5).valid(); 
```

```
 ThatValue("abracadabra").is.longerThan(10).valid(); 
```

### Validator - contains
```
 ThatValue("afsdfasdf@drgdrg.pl").is.contains("a").valid(); 
```

```
 ThatValue("a+++++sdf@drgdrg.pl").is.contains("a").valid(); 
```

```
 ThatValue("a@a.as").is.contains("a").valid(); 
```

