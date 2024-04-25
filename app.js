//定义变量
const bgm_button = document.getElementById("bgm_button");
const 开始页面bgm = document.getElementById("开始页面bgm");
const bgm = document.getElementById("bgm");
const 按钮1 = document.getElementById("按钮1");
const 打字 = document.getElementById("打字");
const 开门 = document.getElementById("开门");
const 机枪 = document.getElementById("机枪");
const end = document.getElementById("end");
const 气体 = document.getElementById("气体");
const 错误 = document.getElementById("错误");
const 对话框 = document.getElementById("对话框");
const 对话框2 = document.getElementById("对话框2");
const 选项 = document.getElementById("选项");
const 版本号 = document.getElementById("版本号");

const 版本 = "版本:0.00.16"
版本号.innerHTML = 版本
console.log(版本)


// 初始背景图片
let currentBackground = 'url("素材库/没声音.png")';

// 切换背景图片的函数
function changeBackground() {

    // 根据当前背景图片切换到另一张图片
    if (currentBackground == 'url("素材库/没声音.png")') {
        bgm_button.style.backgroundImage = 'url("素材库/有声音.png")';
        currentBackground = 'url("素材库/有声音.png")';
        开始页面bgm.play();
        开始页面bgm.volume = 0.5;
    } else {
        bgm_button.style.backgroundImage = 'url("素材库/没声音.png")';
        currentBackground = 'url("素材库/没声音.png")';
        开始页面bgm.pause();
    }
}


//开始游戏
const 开始游戏 = document.getElementById("开始游戏");
开始游戏.addEventListener("click",()=>{
    开始页面bgm.pause();
    const hiddenContent = document.querySelector('.开始');
    hiddenContent.style.display = 'none';
    const hiddenContent1 = document.querySelector('.序章');
    hiddenContent1.style.display = 'block';
    bgm.volume = 0.05 ;
    bgm.play();
    setTimeout(()=>{bgm.volume = 0.1 ;},3000)
    setTimeout(()=>{bgm.volume = 0.2 ;},4000)
    setTimeout(()=>{bgm.volume = 0.3 ;},5000)
    setTimeout(()=>{bgm.volume = 0.35 ;},6000)
    showText(0)
})


function 等待(text){
    let textStarted = false;
    const startPlaytext = () => {
        if (textStarted) return;
        textStarted = true;
        对话框.innerHTML = "";
        text(0);
        document.body.removeEventListener('click', startPlaytext);
    };
    document.body.addEventListener('click', startPlaytext);
}




// 逐字显示文本
function showText(index) {
    let text1 = "黑暗，无边无际的黑暗。"
    if (index < text1.length) {
        对话框.innerHTML += text1[index];

        setTimeout(() => {
            showText(index + 1);
        }, 35); // 设置延迟时间（毫秒）
    }
    else {
        等待(showText1)
    }
}

function showText1(index) {
    let text1 = "你感觉自己就像在深海里一样，并且全身像是消失了动弹不得。";
    if (index < text1.length) {
        对话框.innerHTML += text1[index];
        setTimeout(() => {
            showText1(index + 1);
        }, 35); // 设置延迟时间（毫秒）
    }
    else {
        等待(showText2)
    }
}
function showText2(index) {
    
    let text1 = "你不知道自己为什么在这里，就像你不知道你是谁一样。";
    if (index < text1.length) {
        对话框.innerHTML += text1[index];
        setTimeout(() => {
            showText2(index + 1);
        }, 35); // 设置延迟时间（毫秒）
    }
    else {
        等待(showText3)
    }
}

function showText3(index) {
    
    let text1 = "是的，你失忆了。你忘记自己的过去，忘记了一切，你只记得一些常识和自己是一名18岁的男高中生。";
    if (index < text1.length) {
        对话框.innerHTML += text1[index];
        setTimeout(() => {
            showText3(index + 1);
        }, 35); // 设置延迟时间（毫秒）
    }
    else {
        等待(showText4)
    }
}


function showText4(index) {
    
    let text1 = "不知道过了多久，可能是一秒，一天，或者是一年，你感觉到自己的意识越来越清醒了。";
    if (index < text1.length) {
        对话框.innerHTML += text1[index];
        setTimeout(() => {
            showText4(index + 1);
        }, 35); // 设置延迟时间（毫秒）
    }
    else {
        等待(睁眼)
    }
}


function 睁眼(time) {
    const 睁眼1 = document.querySelector(".body");
    const hiddenContent2 = document.querySelector('.对话框');
    hiddenContent2.style.display = 'none';
    const hiddenContent3 = document.querySelector('.对话框2');
    hiddenContent3.style.display = 'none';
    bgm.pause();
    if (time < 500) {
        requestAnimationFrame(() => {
            睁眼1.style.backgroundColor = `rgba(0, 0, 0, ${1 - (time / 500)})`;
            睁眼(time + 1);
        });
    }
    else {
        setTimeout(() => {
            const hiddenContent3 = document.querySelector('.对话框');
            hiddenContent3.style.display = 'block';
            const hiddenContent = document.querySelector('.对话框2');
            hiddenContent.style.display = 'block';
        },500)
        setTimeout(() => {
            const hiddenContent = document.querySelector('.对话框');
            const hiddenContent1 = document.querySelector('.对话框2');
            hiddenContent.style.color = "black"
            hiddenContent1.style.color = "black"
            对话框2.innerHTML = "我"
            showText5(0)
        },500)
    }
}


function showText5(index) {

    let text1 = "这里是....?";
    if (index < text1.length) {
        对话框.innerHTML += text1[index];
        setTimeout(() => {
            showText5(index + 1);
        }, 300); // 设置延迟时间（毫秒）
    }
    else {
        等待(showText6)
    }
}

function showText6(index) {
    let text1 = "我是被绑架了吗?....等等";
    if (index < text1.length) {
        对话框.innerHTML += text1[index];
        setTimeout(() => {
            showText6(index + 1);
        }, 300); // 设置延迟时间（毫秒）
    }
    else {
        等待(showText7)
    }
}

function showText7(index) {
    let text1 = "我是谁?";
    if (index < text1.length) {
        对话框.innerHTML += text1[index];
        setTimeout(() => {
            showText7(index + 1);
        }, 300); // 设置延迟时间（毫秒）
    }
    else {
        选项设置()
    }
}


function 选项设置() {
    const 选项css = document.querySelector(".选项")
    选项css.style.display = "flex"
    选项.innerHTML += `
        <button class="选项1">123</button>
        <button class="选项2">123</button>
        <button class="选项3">123</button>
    `
}