var MoneyObj = function(){
    this.x;
    this.y;
}

MoneyObj.prototype.moneyNum = 0;

MoneyObj.prototype.img = Object;

MoneyObj.prototype.init = function(){

    this.x = 0;
    this.y = 0;
    console.log(player.moneyNum,player.HPNum);
    this.moneyNum = player.moneyNum;//player.moneyNum

    this.img =  new Image();
    this.img.src = './img/money.png';
}
MoneyObj.prototype.draw = function(){
    //console.log("draw")

    this.moneyNum = player.moneyNum;//player.moneyNum

    ctx2.save()

        ctx2.beginPath()
        ctx2.strokeStyle = "rgba(255,255,255,1)"
        ctx2.lineWidth = 30
        ctx2.lineCap = "round"
        ctx2.shadowColor = 'rgba(0,0,0,.3)'
        ctx2.shadowBlur = 5
        ctx2.shadowOffsetX = 1
        ctx2.shadowOffsetY = 1
        ctx2.moveTo(25,50)
        ctx2.lineTo(120,50)
        ctx2.stroke()

        ctx2.closePath()
    ctx2.restore()

    ctx2.save()
        ctx2.font = '18px Consolas'
        ctx2.fillStyle = '#ff6600'

        ctx2.fillText(this.moneyNum,75,55)
    ctx2.restore()

    preBackgroundImg(moneyObj.img,function(){
       ctx2.drawImage(moneyObj.img,0,0,moneyObj.img.width,moneyObj.img.height,10,32,35,35);

    })



}

MoneyObj.prototype.update = function(goldNum){
    player.moneyNum += goldNum;

    console.log("update");
}
