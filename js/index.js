var _body = document.getElementsByTagName("body")[0];

var _boy = ["王昱程", "呂堯", "李昊勳", "林宥宇", "袁子凡", "高平", "張格賓", "莊翊彬", "張豐驛", "陳昱嘉", "陳軍佑", "黃伯憲", "傅可銘", "楊昌憲", "詹智宇", "趙子翔", "劉俊男", "蔡佳修", "蔡政益", "賴加傑", "謝文豪", "鍾學武"];
var _girl = ["王玉品", "王薇寧", "吳昕儒", "李凌瑜", "李珮瑄", "俞瑋婷", "范純瑜", "徐晨甄", "陳立芳", "陳怡儒", "陳俞婷", "陳彥利", "陳靖文", "楊珮慈", "葉思佳", "劉子愛", "黎佩欣", "謝孟潔", "謝欣玲", "謝憶湘", "鍾翌綺", "魏玟慧", "魏慈瑩", "羅巧芸", "溫珮媛"];

var _easy = ['一口氣從1數到100。', '學大象鼻子，並模仿叫聲', '男生伏地挺身15下，女生5下', '男生仰臥起坐10下，女生5下', '說一則笑話', '做出猙獰的表情，然後看著對面的人說:"我要吃了你！"', '笑一個', '跟旁邊的人說一個秘密', '跟大家說一個秘密', '用放電的眼神，跟右邊數過去第2個人說："要跟我回家嗎？"', '裝乞丐，去找班上三個人要錢', '介紹你最喜歡的歌手或幾首音樂，並且唱他', '替在場的人許三個願望，第三個願望要說出來', '大喊自己中樂透了，然後高興的大叫大跳 ', '和旁邊的同學擁抱說:"我很想你"', '男生摸自己胸說："唉太小了"，女生摸自己的頭說："哀 太笨了"', '幫左邊的人搥背30秒', '給旁邊的人彈額頭*1', '含一顆冰塊講：和尚端湯上塔，塔滑湯灑湯燙塔；和尚端塔上湯，湯滑塔灑塔燙湯。', '幫右邊的人按摩腿30秒', '幫一個有戴眼鏡的人，把眼鏡擦乾淨', '演一個居家用品，讓同桌一半以上的人猜到', '閉上眼睛 左轉三圈 右轉三圈 然後回座位', '從初一吃素唸到初時吃素', '捏著鼻子念完：八月中秋山林涼，風吹大地草枝擺。甘林老母趕羚羊，來年羊毛超級賣。草枝擺啊趕羚羊，趕羚羊啊草枝擺。庭院織笆為君開，都蘭山曉金桔擺。天摇地動舟渡嵐，嗚呼甘霖老跡埋。金桔擺啊老跡埋，老跡埋啊金桔擺。'];
var _normal = ['學狗叫，並用手咬離你最近的那個人', '跟隔壁桌的隨便一個人介紹你自己', '男生和隔壁桌最矮的一個人要Line，女生和最高的人要Line', '裝殘障走秀一圈', '假裝自己是外星人，然後想辦法統治這桌的人', '說出自己一生中最糗的事情 ', '講一個上班(當兵)最幹的事情', '說一個主管的壞話', '講一個同事的八卦', '講一個上班(當兵)遇過最好笑的事情', '對大家大喊，我是豬', '挑一條走道當作是伸展台，學貓走路', '大喊 燃燒吧，小宇宙～', '選一個同性，公主抱轉3圈', '女生的話選一個男生，一邊捶胸一邊說："你好討厭哦"；男生的話隨便選一個女生，捶自己的胸說:"我好討厭喔"', '單手壁咚左前方的一位同學', '雙手壁咚右前方的一位同學', '講一個大學發生最丟臉的事情', '找一張紙寫下自己的line，然後找一個陌生人送出去', '給旁邊的人彈額頭*3', '講一個在大學最不可告人的秘密', '左邊數過去第5個人指定一項物品，放在受逞者的頭上，要他走一圈', '吻桌子5秒', '用舌頭碰鼻子，碰不到的話請撐10秒', '講一個笑話，至少要一個人笑', '用盡你所有的形容詞去形容同桌的一位同學，要讓一半以上的人猜到，切記！只能用形容詞講話', '嘴巴喝一口湯，然後講一句成語，要讓同桌的人都猜到'];
var _hard = ['真心話or大冒險，由對面的人下指令', '和左前方的人，同時吃一根巧克力棒(可用其他條狀物代替)', '左邊的人當成鋼管，跳鋼管舞10秒', '找一個陌生人和他說："I am king of the world"', '找一桌陌生人們，大喊："I am king of the world"', '給大家搔癢10秒', '給大家搔癢腳底板10秒', '腳底板寫下"反清復明"，由左邊數過去第3個人寫', '給同桌的人30秒的時間挑配特別的果汁，至少要喝3口', '給同桌的人30秒的時間挑配特別的果汁，然後給右邊的同學喝', '倒立10秒，如果自己不能的話，請左邊跟右邊的同學幫忙抓住雙腳', '用屁股寫己的名字，要在5秒內寫完', '與右前方的一位異性十指相扣，對視10秒', '同桌的人每個人夾一道菜給他，並且要吃光光', '深情的吻牆10秒', '抓著入口的門喊「放我出去！」*5次', '嘴巴吸一張紙，右邊數過去第2個人要把它吸走', '四肢壁咚正前方的一位同學', '找一張紙寫下自己的line，然後找一個陌生人，在他面前吃下去', '給旁邊的人彈額頭*5', '哭笑不得：大笑5秒之後，再大哭5秒 反覆3次', '找一個異性陌生人，說：今生我們錯過了，下半生會再相遇的', '喝一大口湯，然後唱一首歌，要讓同桌一半以上的人猜到', '用臉撞破保鮮膜', '去服务台推銷一盤肉', '給大家問三個問題，一定要據實以告'];

var _L_Status, _R_Status;
var events;

var STUDENT_SLOT, MISSION_SLOT;
function init() {
    setBarInit();
    setStudent();
    setMission();
    setSelectize();
    events = $._data($("#playFancy")[0], "events");
    events = events["click"].slice();
    // btn = byId("playFancy");
    // btn.addEventListener("click", hahaha);
    // function hahaha() {
    //     alert(0);
    // }
}


function setBarInit() {
    var topEle = document.getElementsByClassName("topEle")[0];
    var leftEle = document.getElementsByClassName("leftEle")[0];
    var rightEle = document.getElementsByClassName("rightEle")[0];

    var topBar = document.getElementsByClassName("topBar")[0];
    var leftBar = document.getElementsByClassName("leftBar")[0];
    var rightBar = document.getElementsByClassName("rightBar")[0];

    var tClose = true;
    var lClose = true;
    var rClose = true;

    topEle.style.top = "-220px";
    leftEle.style.left = "-225px";
    rightEle.style.right = "-225px";

    topBar.addEventListener("click", function (e) {
        if (tClose) {
            topEle.style.top = "-20px";
            tClose = false;
        } else {
            topEle.style.top = "-220px";
            setStudent();
            tClose = true;
        }
    });


    leftBar.addEventListener("click", function (e) {
        if (lClose) {
            leftEle.style.left = "-20px";
            setStatus("left");
            lClose = false;
        } else {
            leftEle.style.left = "-225px";

            sl = byId("slot-list");
            sm = byId("slot-mission");

            if (_L_Status["sl"] !== isC(sl)) {
                if (!isC(sl)) {
                    $("#playFancy").unbind('click', events[0]);
                } else {
                    setStudent();
                }
            }


            if (_L_Status["sm"] !== isC(sm)) {
                if (!isC(sm)) {
                    $("#playFancy").unbind('click', events[1]);
                } else {
                    setMission();
                }
            }

            // if (_L_Status["sl"] !== isC(sl))
            //     setStudent();
            // if (_L_Status["sm"] !== isC(sm))
            //     setMission();
            lClose = true;
        }
    });

    rightBar.addEventListener("click", function (e) {
        if (rClose) {
            rightEle.style.right = "-20px";
            rClose = false;
        } else {
            rightEle.style.right = "-225px";
            setMission();
            rClose = true;
        }
    });
}

function setStatus(type) {
    if (type == "left") {
        sl = byId("slot-list");
        sm = byId("slot-mission");

        _L_Status = {
            "sl": isC(sl),
            "sm": isC(sm)
        }

    } else if (type == "right") {

    }

}

// $.jSlots.defaultOptions = {
//     number : 3,          // Number: number of slots
//     winnerNumber : 1,    // Number or Array: list item number(s) upon which to trigger a win, 1-based index, NOT ZERO-BASED
//     spinner : '',        // CSS Selector: element to bind the start event to
//     spinEvent : 'click', // String: event to start slots on this event
//     onStart : $.noop,    // Function: runs on spin start,
//     onEnd : $.noop,      // Function: run on spin end. It is passed (finalNumbers:Array). finalNumbers gives the index of the li each slot stopped on in order.
//     onWin : $.noop,      // Function: run on winning number. It is passed (winCount:Number, winners:Array, finalNumbers:Array)
//     easing : 'swing',    // String: easing type for final spin. I recommend the easing plugin and easeOutSine, or an easeOut of your choice.
//     time : 7000,         // Number: total time of spin animation
//     loops : 6            // Number: times it will spin during the animation
// };
function setSlot(eleClassName, btnId) {
    return $(eleClassName).jSlots({
        number: 1, //要幾格
        spinner: btnId, //轉盤ID '#playFancy'
        easing: 'easeOutSine', //轉盤風格
        time: 5000, //時間
        loops: 2, //模擬跑幾圈
        onStart: function (spinner) {
            $('.slot').removeClass('winner');
        },
        onEnd: function (array) {
            $('.slot').addClass('winner');
        }
    });
}



function setStudent() {
    $(".list", _body).remove();

    div = document.createElement('div');
    div.setAttribute('class', 'fancy intermediate list');
    ul = document.createElement('ul');
    ul.id = 'student';
    ul.setAttribute('class', 'slot');
    div.appendChild(ul);
    _body.appendChild(div);


    studentList = [];
    var boy = byId("boy");
    var girl = byId("girl");
    if (isC(boy))
        addList(studentList, _boy);
    if (isC(girl))
        addList(studentList, _girl);


    passAry = $("#input-tags").val().split(',');

    for (var i = 0; i < passAry.length; i++) {
        stu = passAry[i];
        index = studentList.indexOf(stu);
        if (index > -1) {
            studentList.splice(index, 1);
        }
    }


    sl = byId("slot-list");
    btnId = '#playFancy';
    if (!isC(sl))
        btnId = '#123';



    shuffle(studentList);
    setList("student", studentList);
    STUDENT_SLOT = setSlot('.list .slot', btnId);
}

function setMission() {
    $(".mission", _body).remove();

    div = document.createElement('div');
    div.setAttribute('class', 'fancy intermediate mission');
    ul = document.createElement('ul');
    ul.id = 'mission';
    ul.setAttribute('class', 'slot missionSlot');
    div.appendChild(ul);
    _body.appendChild(div);
    var misEasy = byId("misEasy");
    var misNormal = byId("misNormal");
    var misHard = byId("misHard");

    var misList = [];
    if (isC(misEasy))
        addList(misList, _easy);
    if (isC(misNormal))
        addList(misList, _normal);
    if (isC(misHard))
        addList(misList, _hard);

    sm = byId("slot-mission");
    btnId = '#playFancy';
    if (!isC(sm))
        btnId = '#123';

    shuffle(misList);
    setList("mission", misList);
    MISSION_SLOT = setSlot('.mission .slot', btnId);
}

function setList(parentID, list) {
    var slot = byId(parentID);
    $("li", slot).remove();

    for (var i = 0; i < list.length; i++) {
        var li = document.createElement("li");
        var classNum = i % 7 + 1;
        li.setAttribute("class", "c" + classNum);
        p = document.createElement('p');
        p.innerHTML = list[i];
        p.setAttribute('class', 'intermediate');
        p.style.position = 'relative';
        li.appendChild(p);
        slot.appendChild(li);
    }
}

function setSelectize() {
    $('#input-tags').selectize({
        delimiter: ',',
        persist: false,
        create: function (input) {
            return {
                value: input,
                text: input
            }
        }
    });
}



// 使用亂數
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function addList(parent, childNode) {
    for (var i = 0; i < childNode.length; i++) {
        parent.push(childNode[i]);
    }
    return parent;
}

function byId(id) {
    return document.getElementById(id);
}

function isC(ele) {
    if (ele.checked)
        return true;
    else
        false;
}

init();