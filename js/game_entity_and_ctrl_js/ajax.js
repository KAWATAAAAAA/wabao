function getPlayerInfo() {

    let promise = $.ajax({
        url: '../untitled/dataTest.txt',
        type: 'POST',
        //data: 'userID',
        async: false,
        dataType: 'json',
        contentType: "application/json;utf-8",
        success(data) {

            // entity 实体信息初始化
            userVM.CoinsNum = data.money;
            userVM.SpiritNum = data.hp;

            player.moneyNum = data.money;
            player.HPNum = data.hp;
            console.log(data.money,data.hp)
        },
        error(err) {
            alert(false)
            window.history.go(-1)
        }

    });

    if (player.HPNum <= 0) {
        alert('您的体力不足，请前往充值');
        window.history.go(-1)
    }
    /*

        Promise.all([
            promise
            ]).then(
                result =>{
                    alert('Promise成功了' + result)
                    console.log(result)
                    console.log(result.responseText.money,result.responseText.hp)
                },
                err =>{
                    alert('Promise失败了' + err)
                }
                    );*/

}

function todoStorage() {
    $.ajax({
        url:'',
        type:'POST',
        async:true,
        contentType: "application/json;utf-8",
        success(){

        },
        error(){

        }

    })
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
