// 1.同时实现餐厅和厨房
//ui
const addInputDom = document.querySelector('#addInput')
const addBtnDom = document.querySelector('#addBtn')
const todoLstDom = document.querySelector('.todo')


//数据
const meals = [
    {
        name: '鸡腿',
        isDone : false
    },
    {
        name: '鸭腿',
        isDone : true
    }
]
let nextMeal = ''
//ui事件监听
addInputDom.addEventListener('input',(e) => {
    nextMeal = e.target.value
})
addBtnDom.addEventListener('click',() => {
    //判空操作
    if(nextMeal == ''){
        alert("不行")
        return
    }
    let newMeal = {
        name : nextMeal ,
        isDone : false
    }


//添加todolist
todoLstDom.appendChild(lidom)

//
addInputDom.value = ''
nextMeal = ''
})

//meals的事件 渲染meal区域
mealsRender()
function mealsRender() {
    todoLstDom.innerHTML = null
    doneLstDOM.innerHTML = null
    meals.forEach((meal) => {
        //根据meal创建lidom
        const {name,isDone} = meal
        //渲染一个dom内容
        //渲染dom
        const lidom = document.createElement('li')
        const checkDom = document.createElement('input')
        checkDom.type = 'checkbox'
        checkDom.value = newMeal.isDone
        const spanDom = document.createElement('span')
        spanDom.innerText = newMeal.name

        lidom.appendChild(checkDom)
        lidom.appendChild(spanDom)
//根据isdone不同 把创建的lidone插入不同的区域
        if(!isDone){
            todoLstDom.appendChild(lidom)
        }else {
            doneLstDOM.appendChild(lidom)
        }



    })
}

//2.根据路由url选择餐厅or厨房