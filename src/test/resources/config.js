function fn() {
    var env = karate.env; // get java system property 'karate.env'
    var config = {};

    config.userPayloads = karate.read('user-payloads.json');
    config.updateUserPayloads = karate.read('update-user-payloads.json');

    if (!env) {
        env = 'default'; // a custom 'intelligent' default
    }

    if (env == 'default') {
        config.host = 'http://localhost:8080';
        config.externalHost = 'http://localhost:8080';
        config.zobHost = 'https://zob.vdl.k8s.dvag.net';
        config.zobUser = '1000000';
        config.zobPassword = '1000000';
    } else if (env == 'entwicklung') {
        config.host = 'https://zob-bifroest.entwicklung.k8s.dvag.net';
        config.externalHost = 'https://zob-bifroest.entwicklung.dvag';
        config.zobHost = 'https://hsz.entw-mydvag.com';
        config.zobUser = karate.properties['user'];
        config.zobPassword = karate.properties['password'];
       // karate.configure('proxy', 'http://proxy.1.mgmt.dvag.net:3128');
    } else if (env == 'integration') {
        config.host = 'https://zob-bifroest.integration.k8s.dvag.net';
        config.externalHost = 'https://zob-bifroest.integration.dvag';
        config.zobHost = 'https://hsz.intg-mydvag.com';
        config.zobUser = karate.properties['user'];
        config.zobPassword = karate.properties['password'];
       // karate.configure('proxy', 'http://proxy.1.mgmt.dvag.net:3128');
    } else if (env == 'abnahme') {
        config.host = 'https://zob-bifroest.abnahme.k8s.dvag.net';
        config.externalHost = 'https://zob-bifroest.abnahme.dvag';
        config.zobHost = 'https://hsz.test-mydvag.com';
        config.zobUser = karate.properties['user'];
        config.zobPassword = karate.properties['password'];
        //karate.configure('proxy', 'http://proxy.1.mgmt.dvag.net:3128');
    }
    return config;
}

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function createUser(){
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
}

function test(){
               "sender":{
                 "id":"USER_ID"
               },
               "recipient":{
                 "id":"PAGE_ID"
               },
               "timestamp":1458692752478,
               "message":{
                 "mid":"mid.1457764197618:41d102a3e1ae206a38",
                 "seq":73,
                 "text":"hello, world!",
                 "quick_reply": {
                   "payload": "DEVELOPER_DEFINED_PAYLOAD"
                 }
               }
             }

function userJson(){
 var user =
        {
          "userId": "userId-stf-www22",
          "managerId": "managerId-1",
          "manager": "The Manager",
          "vorname": "Torben-Peter",
          "name": "Müller",
          "telefon": "069123455678",
          "email": "44wtorben-peter.mueller@entprod.dvag.de",
          "groups": []
        };

 return user;
}


var user = {
  "userId"  :  "Sammy",
  "last_name"   :  "Shark",
  "online"      :  true
}

* def ids = karate.map(response, )

function(x){
var link = x.links[0].href;
return link.substring(link.lastIndexOf('/') + 1)
}


failed features:
com.dvag.zob.test: test.feature:16 - javascript evaluation failed:
'/rest/v1/bifroest/users/%3Fstartswith(givenName%2C'Moh')%20and%20startswith(surname%2C'Ben')',
'/rest/v1/bifroest/users/%3Fstartswith(givenName%2C'Moh')%20and%20startswith(surname%2C'Ben')'
                                                    ^ in <eval> at line number 1 at column number 52
