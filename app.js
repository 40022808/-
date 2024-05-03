//定义变量
const 对话框 = document.getElementById("对话框");
const 对话框2 = document.getElementById("对话框2");
const 选项 = document.getElementById("选项");
const 版本号 = document.getElementById("版本号");

const sound = {
    按钮1:document.getElementById("按钮1"),
    打字:document.getElementById("打字"),
    开门:document.getElementById("开门"),
    机枪:document.getElementById("机枪"),
    气体:document.getElementById("气体"),
    错误:document.getElementById("错误"),
    眩晕感:document.getElementById("眩晕感")
}

const BGMs = {
    bgm_不安:document.getElementById("bgm_不安"),
    bgm:document.getElementById("bgm"),
    开始页面bgm:document.getElementById("开始页面bgm"),
    end:document.getElementById("end")
} 

const doc = {
    选项1:document.getElementById("选项1"),
    选项2:document.getElementById("选项2"),
    选项3:document.getElementById("选项3"),
    选项4:document.getElementById("选项4")
}

function updateDoc() {
    doc.选项1 = document.getElementById("选项1");
    doc.选项2 = document.getElementById("选项2");
    doc.选项3 = document.getElementById("选项3");
    doc.选项4 = document.getElementById("选项4");
}



const 版本 = "版本:0.00.25"
版本号.innerHTML = 版本
console.log(版本)


// 初始背景图片
let currentBackground = 'url("素材库/没声音.png")';

// 切换背景图片的函数
function changeBackground() {
    const bgm_button = document.getElementById("bgm_button");
    // 根据当前背景图片切换到另一张图片
    if (currentBackground == 'url("素材库/没声音.png")') {
        bgm_button.style.backgroundImage = 'url("素材库/有声音.png")';
        currentBackground = 'url("素材库/有声音.png")';
        BGMs.开始页面bgm.play();
        BGMs.开始页面bgm.volume = 0.45;
    } else {
        bgm_button.style.backgroundImage = 'url("素材库/没声音.png")';
        currentBackground = 'url("素材库/没声音.png")';
        BGMs.开始页面bgm.pause();
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
    BGMs.bgm.volume = 0;
    BGMs.bgm.play();
    bgm_volume_set(BGMs.bgm)
    showText(0)
})

function bgm_volume_set(setbgm) {
    let i = 1;
    let intervalId = setInterval(() => {
    let volume = 0.015 * i;
    setbgm.volume = volume;
    i++;
    if (i > 10) {
        clearInterval(intervalId);
    }
    }, 1000); // 每隔1秒（1000毫秒）改变一次音量

}



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
    
    let text1 = "是的，你失忆了。你忘记自己的过去，忘记了一切，你只记得一些常识。";
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
    BGMs.bgm.pause();
    if (time < 400) {
        requestAnimationFrame(() => {
            睁眼1.style.backgroundColor = `rgba(0, 0, 0, ${1 - (time / 400)})`;
            睁眼(time + 1);
        });
    }
    else {
        setTimeout(() => {
            const hiddenContent3 = document.querySelector('.对话框');
            hiddenContent3.style.display = 'block';
            hiddenContent3.style.color = "black"
            const hiddenContent = document.querySelector('.对话框2');
            hiddenContent.style.display = 'block';
            hiddenContent.style.color = "black"
            对话框2.innerHTML = "我"
            showText5(0)
            BGMs.bgm_不安.volume = 0.2
            BGMs.bgm_不安.play()
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
    选项.innerHTML = ""
    选项.innerHTML += `
        <button class="选项1" id="选项1" onclick="选项选择(1)">稍微回忆</button>
        <button class="选项2" id="选项2" onclick="选项选择(2)">努力回忆</button>
        <button class="选项3" id="选项3" onclick="选项选择(3)">全力回忆</button>
        <button class="选项4" id="选项4" onclick="选项选择(4)">放弃回忆</button>
        
    `
    updateDoc()
}

function 选项选择(选择) {
    if (选择 == 1) {
        闪屏设置(0)
        对话框.innerHTML = "...!"
        if (doc.选项1) {
            // 创建一个新的 <div> 元素
            const newElement = document.createElement('button');
            newElement.textContent = '稍微回忆';
            newElement.id = '乱码';
            newElement.className = '选项1';
            // 替换旧元素
            doc.选项1.replaceWith(newElement);
        }
        乱码动画(1)
    }
    else if (选择 == 2) {
        闪屏设置(0)
        对话框.innerHTML = "..!!!"
        if (doc.选项2) {
            // 创建一个新的 <div> 元素
            const newElement2 = document.createElement('button');
            newElement2.textContent = '稍微回忆';
            newElement2.id = '乱码2';
            newElement2.className = '选项2';
            // 替换旧元素
            doc.选项2.replaceWith(newElement2);

        }
        乱码动画(2)
    }
    else if (选择 == 3) {
        闪屏设置(0)
        对话框.innerHTML = "!!!"
        if (doc.选项3) {
            // 创建一个新的 <div> 元素
            const newElement3 = document.createElement('button');
            newElement3.textContent = '稍微回忆';
            newElement3.id = '乱码3';
            newElement3.className = '选项3';
            // 替换旧元素
            doc.选项3.replaceWith(newElement3);
        }
        乱码动画(3)
    }
    else if (选择 == 4) {
        const 选项css = document.querySelector(".选项")
        选项css.style.display = "none"
        对话框.innerHTML = "";
        showtext8(0)

    }
}

function showtext8(index) {
    let text1 = "...算了，先想办法从这里出去吧。";
    if (index < text1.length) {
        对话框.innerHTML += text1[index];
        setTimeout(() => {
            showtext8(index + 1);
        }, 35); // 设置延迟时间（毫秒）
    }
    else {
        
    }
}


function 乱码动画(判断) {
    const 乱码 = document.getElementById("乱码")
    const 乱码2 = document.getElementById("乱码2")
    const 乱码3 = document.getElementById("乱码3")
    if (判断 == 1) {
        if (乱码) {
            // 如果元素存在，执行以下操作
            let count = 0;
            setInterval(() => {
                if (count == 0) {
                    乱码.textContent = `sdf%os#ds`;
                    count = 1
                }
                else if (count == 1) {
                    乱码.textContent = `fcf/7o1238`;
                    count = 2
                }
                else if (count == 2) {
                    乱码.textContent = `745!7o%%3&d`;
                    count = 3
                }
                else if (count == 3) {
                    乱码.textContent = `asdf(*?@af`;
                    count = 4
                }
                else if (count == 4) {
                    乱码.textContent = `#sd<3%!;s9`;
                    count = 0
                }
            }, 50); // 每隔 1 秒更新20次内容
        }
    }
    else if (判断 == 2) {
        if (乱码2) {
            // 如果元素存在，执行以下操作
            let count = 0;
            setInterval(() => {
                if (count == 0) {
                    乱码2.textContent = `sdf%os#ds`;
                    count = 1
                }
                else if (count == 1) {
                    乱码2.textContent = `fcf/7o1238`;
                    count = 2
                }
                else if (count == 2) {
                    乱码2.textContent = `745!7o%%3&d`;
                    count = 3
                }
                else if (count == 3) {
                    乱码2.textContent = `asdf(*?@af`;
                    count = 4
                }
                else if (count == 4) {
                    乱码2.textContent = `#sd<3%!;s9`;
                    count = 0
                }
            }, 50); // 每隔 1 秒更新20次内容
        }
    } 
    else if (判断 == 3) {
        if (乱码3) {
            // 如果元素存在，执行以下操作
            let count = 0;
            setInterval(() => {
                if (count == 0) {
                    乱码3.textContent = `sdf%os#ds`;
                    count = 1
                }
                else if (count == 1) {
                    乱码3.textContent = `fcf/7o1238`;
                    count = 2
                }
                else if (count == 2) {
                    乱码3.textContent = `745!7o%%3&d`;
                    count = 3
                }
                else if (count == 3) {
                    乱码3.textContent = `asdf(*?@af`;
                    count = 4
                }
                else if (count == 4) {
                    乱码3.textContent = `#sd<3%!;s9`;
                    count = 0
                }
            }, 50); // 每隔 1 秒更新20次内容
        } 
    }
}



function 闪屏设置(time) {
    const 闪屏 = document.querySelector(".闪屏")
    sound.眩晕感.play();
    sound.眩晕感.volume = 1;
    闪屏.style.zIndex = 2;
    let 时间 = 10
    if (time < 时间) {
        requestAnimationFrame(() => {
            闪屏.style.backgroundColor = `rgba(255, 255, 255, ${0 + (时间/10)})`;
            闪屏设置(time + 1);
        });
    }
    else {
        setTimeout(()=>{
            for (let time2 = 0 ; time2 < 时间 ; time2++) {
                requestAnimationFrame(() => {
                    闪屏.style.backgroundColor = `rgba(255, 255, 255, ${1 - (time2 / 时间)})`;
                });
            }
            闪屏.style.zIndex = -1;
        },100)
    }
}
