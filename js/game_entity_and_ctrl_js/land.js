let LandObj = function(){
    this.x = [];
    this.y = [];
    this.alive = [];
    this.landImg = new Image();
    this.landedImg = new Image();

}

LandObj.prototype.num = 20;
LandObj.prototype.img = Object;
LandObj.prototype.init = function(){


    this.landImg.src = './img/land.png';
    this.landedImg.src = './img/landed.png';

  
    for(let i = 0,j = 0; i < this.num ;i++,j++){    // 赋值20次
        
        if (j == 4) {   
            j = 0;
        }
        let value = j + j * 100 + 10;   // 三值 为控制 x 轴之间的间距。 四值为控制元素在画布x的位置

        this.x[i] = value;
     //   console.log('x:' + this.x[i]);

        this.alive[i] = true;   // 初始化陆地状态 
    }
    
    for(let i = 0,j = 0; i < this.num ;i++){    // 赋值20次

        // j 是 控制值相同
        if (j == 5) {
            j = 0;
        }

        let value = j + j * 120 + 120;         // y 轴的值需要每一轮都一模一样   // 三值 为控制 y 轴之间的间距。 四值为控制元素在画布y的位置


        /*for(let k = 0 ; k < this.num / 4 ; k++){
            
        }*/
        this.y[i] = value;      
        if ((i + 1)%4 == 0) {
            j++;
        }
        console.log('y:' + this.y[i]);
    }

/*
0,0     10,0    20,0    30,0
0,10    10,10   20,10   30,10
0,
0
0
*/
}

LandObj.prototype.draw = function(){


    
    for(let i = 0 ; i < this.num;i++){
          //test index  console.log(this.x[i] + ":" + this.y[i]);
          if (this.alive[i]) {
            ctx1.drawImage(this.landImg,0,0,95,90,this.x[i],this.y[i],50,50);
          }
            else
            {
                ctx1.drawImage(this.landedImg,0,0,95,90,this.x[i],this.y[i],50,50);
            }

        }
    
}
LandObj.prototype.update = function(){
    /*
        time：在碰撞检测后立即调用
        work：获取到碰撞元素的 (x,y) 并且更新画布 更新 陆地状态
        碰撞检测传统的做法就是 ：
        遍历所有陆地 并且与在动的人物的 x,y 相匹配 ,取一个区间[？~？],位置大小在区间内即视为碰撞

        这里有些特殊，因为陆地是固定的，走的步数应该是 当前人物所在 land id（index，下标）加上骰子点数

        再通过下标取出 该land 的 X,Y轴 ，改变land 颜色，更新画布状态


    */


}

/*
10  111 212 313 10  111 212 313 10  111 212 313 10  111 212 313 10  111 212 313

100 100 100 100 100






*/