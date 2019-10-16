function getPlayerInfo() {

    let url = '../wabao/dataTest.txt';
    let requestData = '';
    let isAsync = false;
    let sendType = "POST";
    let successCallback = function(data){
        // entity 实体信息初始化
        console.log('获取到的金币是：'+ data.money)
        userVM.CoinsNum = data.money;
        userVM.SpiritNum = data.hp;

        player.moneyNum = data.money;
        player.HPNum = data.hp;
        console.log(data.money,data.hp)
    }

    let FailedCallback = function(err){
        alert(false)
        window.history.go(-1)
    }
    todoAjax(url,requestData,isAsync,sendType,successCallback,FailedCallback);


    if (player.HPNum <= 0) {
        alert('您的体力不足，请前往充值');
        window.history.go(-1)
    }


}

function todoStorage() {
    let [url,requestData,isAsync,sendType] = ["","Id",true,"POST"];
    let successCallback = function(data){


        window.history.go(-1);
    }
    let FailedCallback = function(err){
        alert("网络不稳定，保存失败，请重试",err);
    }


    todoAjax(url,requestData,isAsync,sendType,successCallback,FailedCallback);
}

let userVM = new Vue({
    el:'#userArea',
    data:{
        Id:'',
        UserName:'',
        UserPicture:'',
        CoinsNum:'',
        SpiritNum:'',
        usedSpirit:0,
        gotCoin:0,

    },
    computed:{
        usedSpiritText:function(){
            return "体力 -" + this.usedSpirit;
        },
        gotCoinText:function () {
            return "金币 +" + this.gotCoin;
        }

    }
})

//todoAjax(url,requestData,isAsync,sendType,successCallback,FailedCallback);



