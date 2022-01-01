

var audio = new Audio("slap2.mp3")
var img = document.getElementById("img")


var example1 = new Vue({
    el: '#ex1',
    data: {
        counter: 0
    },
    methods: {

        res: function () {

            this.counter++;
            audio.play();

        }
    }
})

function pop(){
    example1.res();
    document.addEventListener("mousedown", function(){
        
        img.src = './shin2.jpg';
        
    });
    document.addEventListener("mouseup", function(){
        
        img.src = './shin1.png';
        
    });

}
