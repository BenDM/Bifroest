function fn() {
    var env = karate.env; // get java system property 'karate.env'
    var config = {};

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