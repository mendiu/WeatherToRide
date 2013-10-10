function some_function(callback) {

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    width = width*0.80;
    height = height*0.80;

    var my_number = $$.get('http://marketer.herokuapp.com/applications/3.json',{ }, function(api) {
                                obj=api;
                                template="<ul class slide>{{#name}}\
                                                <img src ={{description}} width="+width+" style='margin-top:5%;margin-left:7.5%;'>\
                                             {{/name}}</ul><a href={{download_url}}><img src='download1.png' width='80%'  height='auto' style='margin-top:1%;margin-left:7%;'margin-bot:1%'></a>";
                                html=Mustache.render(template,obj);
                                $$('section#main article#main-article').html(html); //Aqui es donde se 'pintaría' los datos que estamos consumiendo en JSON
                            }
                            );
 ;
    callback(my_number);
}

// call the function
some_function(function(num) {
    // this anonymous function will run when the
    // callback is called
    console.log("callback called! " + num);
});