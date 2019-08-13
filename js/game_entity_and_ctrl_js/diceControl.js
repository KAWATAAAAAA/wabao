let randomNum = 0;


let dice = $('.dice');
console.log('zepto Obj '+ dice);

dice.swipeUp(function (e) {
    ctx3.clearRect(0,0,wsaw,wsah)
    player.HPNum -=10;

    userVM.usedSpirit += 10;

    console.log("上滑!!");
    dice.attr('style', 'animation:shake 3s ease 1 forwards;'); //播放上滑动画

    //* 调用 随机数骰子*/
    if (player.HPNum-10 === -20){
        alert('您的体力不足，请前往主页充值入口')
        return false;
    }
    randomNumCreate()


});

function randomNumCreate(){
            let dice = jQuery('.dice');
            let wrap = jQuery('.wrap');
            wrap.fadeIn();
            let diceWrapper = $('.cube');
            randomNum = (Math.floor(Math.random()*6)) +1;

            setTimeout(function(){
                dice.removeAttr('style');
            },3000+randomNum*1000);

            switch(randomNum){
                case 1:{
                    //先播放转动动画
                    diceWrapper.attr('style','animation:run0 .2s linear infinite forwards');

                    setTimeout(function(){
                        diceWrapper.removeAttr('style');    //移除动画
                        diceWrapper.attr('style','tansform-origin:50% 50% ;animation:run1 .2s linear 1 forwards'); //播放 1点动画
                        wrap.fadeOut(2000);                  //隐藏骰子
                        player.move(randomNum);
                    },2500);

                }break;
                case 2:{
                    diceWrapper.attr('style','animation:run0 .2s linear infinite forwards')

                    setTimeout(function(){
                        diceWrapper.removeAttr('style');
                        diceWrapper.attr('style','tansform-origin:50% 50% ;animation:run2 .2s linear 1 forwards')
                        wrap.fadeOut(2000)
                        player.move(randomNum);

                    },2500)


                }break;
                case 3:{
                    diceWrapper.attr('style','animation:run0 .2s linear infinite forwards')

                    setTimeout(function(){
                        diceWrapper.removeAttr('style');
                        diceWrapper.attr('style','tansform-origin:50% 50% ;animation:run3 .2s linear 1 forwards')
                        wrap.fadeOut(2000)
                        player.move(randomNum);

                    },2500)
                }break;
                case 4:{
                    diceWrapper.attr('style','animation:run0 .2s linear infinite forwards')

                    setTimeout(function(){
                        diceWrapper.removeAttr('style');
                        diceWrapper.attr('style','tansform-origin:50% 50% ;animation:run4 .2s linear 1 forwards')
                        wrap.fadeOut(2000)
                        player.move(randomNum);

                    },2500)
                }break;
                case 5:{
                    diceWrapper.attr('style','animation:run0 .2s linear infinite forwards')

                    setTimeout(function(){
                        diceWrapper.removeAttr('style');
                        diceWrapper.attr('style','tansform-origin:50% 50% ;animation:run5 .2s linear 1 forwards')
                        wrap.fadeOut(2000)
                        player.move(randomNum);

                    },2500)
                }break;
                case 6:{
                    diceWrapper.attr('style','animation:run0 .2s linear infinite forwards')

                    setTimeout(function(){
                        diceWrapper.removeAttr('style');
                        diceWrapper.attr('style','tansform-origin:50% 50% ;animation:run6 .2s linear 1 forwards')
                        wrap.fadeOut(2000)
                        player.move(randomNum);

                    },2500)
                }break;

            }

        }
