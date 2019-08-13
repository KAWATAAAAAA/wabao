var Player = function(){
	this.x;
	this.y;
	this.moneyNum;
	this.HPNum;

}
Player.prototype.img = Object;
Player.prototype.inLandArrIndexId = 0;
Player.prototype.digAnimImgStatusNum = 1;

Player.prototype.init = function(){
	this.x = landObj.x[this.inLandArrIndexId];
	this.y = landObj.y[this.inLandArrIndexId];

	this.img = new Image();
	this.img.src = './img/farmer.png';


}
Player.prototype.draw = function(){
/*
	画人物的时候 要判断，当前人物是否在移动
	如果在移动那么就马上擦除 当前所在位置
	由于程序 main.js 在不停的画，所以直接更新人物的位置就行，不必再再move 中写一个 draw 画出来

	起先开始我陷入的误区就是在 move 函数中 设定延迟，每次都擦除画布（清除上次位置），然后再画一次
	这样导致的结果是  主程序还在不断的画，而我画人物是用的当前所在的陆地的格子来定位人物，这个当前所在陆地并不能
	直接变成最后那个陆地（一旦变成了最后要去的那个陆地，则人物直接跳过去了，没有经过每一个格子的动画）
	所以我想判断

*/
	//console.log('be drawed')
	/*	if (isPlayerMoving()) {
			ctx2.clearRect(0,0,wsaw,wsah);
		}
		else*/
		//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
		ctx2.drawImage(this.img,0,0,91,124,this.x + 10,this.y - 20,35,50);


}
Player.prototype.move = function(randomNumValue){

	console.log("移动了" + randomNumValue);
	/*

	*/
	for(let i = 1; i <= randomNumValue ; i++){

		/*setTimeout(function(e){
			console.log(e);
			ctx2.clearRect(0,0,wsaw,wsah);  //
			ctx2.drawImage(player.img,0,0,91,124,landObj.x[player.inLandArrIndexId+e] + 10,landObj.y[player.inLandArrIndexId+e] - 20,35,50);
		}(i),() => {runTime*i});

		这段代码的问题为： 人物只能在最后一个点循环到了后，人物直接被画到了最后该去的那个点上
		问题产生的原因：main.js 中画布在不断的  先 clear 再 draw，所以我看不到中间路程，且当前的 人物所在陆地座标没有被更新
		*/

		(function(e){

			let t = e*600;    //一秒钟移动一次，让setTimeout 中的函数 入队列栈
			setTimeout(function(){
				player.x = landObj.x[player.inLandArrIndexId + e];   //人物的X 轴为 所在第（n）块陆地的 x 轴，e是移标，每次都移动一格
				player.y = landObj.y[player.inLandArrIndexId + e];
				console.log('this.inLandArrIndexId:' + player.inLandArrIndexId);
				console.log('thisX:' + player.x);
				console.log('thisY:' + player.y);
			},t);
		})(i);

	}

		setTimeout(function(){
			player.update(randomNumValue);
		},randomNumValue*600);   //同步最后一个队列栈中的时间，移动完成后立马通知更新


}

Player.prototype.update = function(randomNumValue){

		/*
		更新状态 update
		更新是更新 移动搜索移动 要分开，
		移动负责 延时画画 控制人物跳 点，到点后控制人物挥动锄头，播放动画，进行通知 land更新
	*/

	this.inLandArrIndexId += randomNumValue;  // 更新 人物的位置

	let animInfinID = setInterval(function(){  // 挖土
		ctx2.clearRect(0,0,wsaw,wsah);
		player.changeStatus();						//改变人物动作
	},1000 / 60);

	setTimeout(function(){
		clearInterval(animInfinID);		 //三秒之后清除挖土动画
		player.img.src = './img/farmer.png';
		landObj.alive[player.inLandArrIndexId] = false; //并且设定挖土完毕

		if (player.inLandArrIndexId+1 + 6 >=20){
			console.log('要刷新了')

			landObj.init();

			player.inLandArrIndexId = (player.inLandArrIndexId+1) % 4 - 1;
			if ((player.inLandArrIndexId+1) % 4 == 0){
				player.inLandArrIndexId = 3;
			}
			console.log('所在行的第 ' + player.inLandArrIndexId + '个');
			player.x = landObj.x[player.inLandArrIndexId];
			player.y = landObj.y[player.inLandArrIndexId];
			player.draw();

			landObj.alive[player.inLandArrIndexId] = false;
		}

		// 产生随机事件 是否挖出金币
		let hasGold  = Math.round(Math.random()); // 0无 ，1有
		if (hasGold)
		{
			console.log('挖到宝物了')
			let gnum = Math.floor( Math.random()*100 + 1)
			moneyObj.update(gnum)

			let tips = '+' + gnum + 'G'
			console.log('本次挖出 '+tips)
			userVM.gotCoin += gnum;
			ctx3.save()
				ctx3.fillStyle = '#f92525'
				ctx3.font = '18px Consolas'
				ctx3.fillText(tips,player.x,player.y - 25)
			ctx3.restore()
		}
		else{
			ctx3.save()
				ctx3.fillStyle = '#f92525'
			ctx3.font = '18px Consolas'
				ctx3.fillText('+0',player.x,player.y - 25)
			ctx3.restore()
		}



	},2000);




}

Player.prototype.changeStatus = function(){

	if (this.digAnimImgStatusNum > 1 && this.digAnimImgStatusNum < 5) {
		this.img.src = './img/f1.png';
	}
	if (this.digAnimImgStatusNum > 5 && this.digAnimImgStatusNum < 10) {
		this.img.src = './img/f2.png';
	}
	if (this.digAnimImgStatusNum > 10 && this.digAnimImgStatusNum < 15) {
		this.img.src = './img/f3.png';
	}
	if (this.digAnimImgStatusNum > 15 && this.digAnimImgStatusNum < 20) {
		this.img.src = './img/f4.png';
	}
	if (this.digAnimImgStatusNum > 20 && this.digAnimImgStatusNum < 25) {
		this.img.src = './img/f5.png';
	}
	if (this.digAnimImgStatusNum > 25 && this.digAnimImgStatusNum < 30) {
		this.img.src = './img/f6.png';
	}
	if (this.digAnimImgStatusNum > 30 && this.digAnimImgStatusNum < 35) {
		this.img.src = './img/f7.png';
	}


	this.digAnimImgStatusNum+=1;
	if (this.digAnimImgStatusNum == 36) {
		this.digAnimImgStatusNum = 1;
	}



}
