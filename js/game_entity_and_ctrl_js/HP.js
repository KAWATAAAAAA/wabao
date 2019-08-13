var HPobj = function(){
    this.x;
    this.y;

}

HPobj.prototype.HPscore = 0;
HPobj.prototype.img = Object;
HPobj.prototype.init = function(){
    this.x = 0;
    this.y = 0;

    this.HPscore = player.HPNum; //player.HPNum

    this.img =  new Image();
    this.img.src = './img/hp1.png';

}
HPobj.prototype.draw = function(){
    //console.log("draw")
    this.HPscore = player.HPNum; //player.HPNum

    ctx2.save()
        ctx2.beginPath()

        ctx2.strokeStyle = "rgba(255,255,255,1)"
        ctx2.lineWidth = 30
        ctx2.lineCap = "round"
        ctx2.shadowColor = 'rgba(0,0,0,.3)'
        ctx2.shadowBlur = 5
        ctx2.shadowOffsetX = 1
        ctx2.shadowOffsetY = 1
        ctx2.moveTo(wsaw - 100,50)
        ctx2.lineTo(wsaw - 25,50)
        ctx2.stroke()

        ctx2.closePath()
    ctx2.restore()

    ctx2.save()
        ctx2.font = '18px Consolas'
        ctx2.fillStyle = '#03a9f4'
        ctx2.fillText(this.HPscore,wsaw - 80,55)
    ctx2.restore()

    preBackgroundImg(hpObj.img, function () {
        ctx2.drawImage(hpObj.img,0,0,hpObj.img.width,hpObj.img.height,wsaw - 122,28,30,40)
    })

}

HPobj.prototype.update = function(){

    console.log("update");
}
