function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 160;
        console.log('ok: ' + this.left);
    }

    this.moveLeft = function (){
        this.left -= 160;
        console.log('ok' + this.left)
    }

    this.moveDown = function (){
        this.top += 160;
        console.log('ok' + this.top)
    }

    this.moveUp = function (){
        this.top -= 160;
        console.log('ok' + this.top)
    }

}

let hero = new Hero('Tendo.png', 20, 30, 200);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    } else if(hero.left == window.innerWidth - hero.size){
        hero.moveDown()
    } else if(hero.top < window.innerHeight){
        hero.moveLeft();
    } else hero.moveRight();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
