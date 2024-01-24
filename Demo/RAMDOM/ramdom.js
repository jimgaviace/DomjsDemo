//游戏逻辑
const inputDom = document.querySelector('#input')
const buttonDom = document.querySelector('#button')
const infodom = document.querySelector('.infodom')
const infotip = document.querySelector('.infotip')
const infotitledom = document.querySelector('.infotitle')
//生成目标数字target
const target = Number.parseInt(Math.random()*100)
//玩家猜测数字 gamervalue
let gamerValue = 0;
//input值赋值给 gamervalue
inputDom.addEventListener('input',(e) => {
    gamerValue = Number.parseInt(e.target.value)
})
//button点击会进行判断
//infotitle 会代替 ”gamervavle“

buttonDom.addEventListener('click',()=>{
    //判断逻辑
    
    //target 和 gamervalue 值是否相等 
    let tip = '提示词'
    infotitledom.innerText = gamerValue;
    if (target < gamerValue) {
        tip = ('大咯')
    } else if(target > gamerValue){
        tip = ('小咯')
    } else{
        tip =('对咯')
    }

    infotip.innerText = tip;
})
//绑定按下enter 触发”猜“
inputDom.addEventListener('keydown',function(event){
    if(event.key === 'Enter' || event.keyCode === 13 ){
        buttonDom.click();
    }
})