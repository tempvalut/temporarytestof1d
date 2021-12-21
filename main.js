const svgs = {
    backsvg: `<path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z" fill="#ffffff"></path>`,
}

const avatars = {
    a: 'assets/portrait_a.jpg',
    b: 'assets/portrait_b.jpg',
}

const v_messages = [{
        who: 'sys',
        detail: '2021-11-11 星期三 18:00:00',
    }, {
        who: 0,
        detail: [{
            time: '18:00:00',
            content: '我不知道该说什么',
        }, {
            time: '18:00:10',
            content: '就这样测试一下',
        }, ]
    }, {
        who: 1,
        detail: [{
            time: '18:00:20',
            content: '我也不知道该说什么',
        }, {
            time: '18:00:25',
            content: 'test message 0',
        }, {
            time: '18:00:25',
            content: '1',
        }, ]
    }, {
        who: 0,
        detail: [{
            time: '18:01:02',
            content: '好吧，找个话题',
        }, {
            time: '18:01:10',
            content: '吃了没',
        }, ]
    }, {
        who: 1,
        detail: [{
            time: '18:01:10',
            content: '没呢🙃',
        }, {
            time: '18:01:31',
            content: '那一起去吃个饭🍚',
        }, {
            time: '18:01:51',
            content: '顺便把那个啥讨论一下',
        }, {
            time: '18:02:01',
            content: 'you know',
        },]
    }, {
        who: 0,
        detail: [{
            time: '18:02:02',
            content: '行😊',
        }]
    }, {
        who: 'sys',
        detail: '2021年11月11日 星期三 20:13:14'
    },  {
        who: 0,
        detail: [{
            time: '20:13:20',
            content: '继续那个话题',
        }, {
            time: '20:15:20',
            content: 'now I\'m typing in English to test if everything is fine and I don\'t know what I am saying, what it means or what I\'m thinking cuz it\'s all random sentences pumping out of my mind and I wonder if it\'s nonsence or definately it is. ',
        }]
    }, {
        who: 1,
        detail: [{
            time: '20:16:11',
            content: 'Maybe I think I\'m also too crazy to do this...',
        }, {
            time: '20:16:20',
            content: 'anyway',
        }, {
            time: '20:18:33',
            content: '测试长中文，不过应该没啥问题，如果可以，我再说一大堆废话，现在测试在这边插入一张图片：<br/><img src="assets/portrait_b.jpg">',
        }, {
            time: '20:18:40',
            content: '看起来还不错',
        }, {
            time: '20:18:50',
            content: '🐶',
        },]
    }, ];

const status_bar = {
    data() {
        return {
            t: this.getHourMinute(),
            wifi: `<path d="M34.133333 279.893333l477.866667 624.64L989.866667 279.893333c-133.12-102.4-296.96-160.426667-477.866667-160.426666S167.253333 180.906667 34.133333 279.893333z" fill="#ffffffe8"></path><path d="M512 921.6c-6.826667 0-10.24-3.413333-13.653333-6.826667L20.48 290.133333c-3.413333-3.413333-3.413333-6.826667-3.413333-10.24 0-3.413333 3.413333-10.24 6.826666-10.24C167.253333 160.426667 334.506667 102.4 512 102.4s344.746667 58.026667 488.106667 163.84c3.413333 3.413333 6.826667 6.826667 6.826666 10.24 0 3.413333 0 10.24-3.413333 13.653333l-477.866667 624.64c-3.413333 3.413333-6.826667 6.826667-13.653333 6.826667zM58.026667 283.306667L512 877.226667 965.973333 283.306667C832.853333 187.733333 675.84 136.533333 512 136.533333S191.146667 187.733333 58.026667 283.306667z" fill="#ffffffe8"></path>`,
            battery: `<path d="M682.666667 512H341.333333V256h341.333334m28.586666-85.333333H640V85.333333H384v85.333334H312.746667A56.746667 56.746667 0 0 0 256 227.413333v654.506667C256 913.066667 281.6 938.666667 312.746667 938.666667h398.506666A56.746667 56.746667 0 0 0 768 881.92V227.413333C768 196.266667 742.4 170.666667 711.253333 170.666667z" fill="#ffffffe8"></path>`,
        }
    },
    template: 
    /* html */
    `
    <div class="status-outer">
        <div class="status-left"><span>{{t}}</span></div>
        <div class="status-right">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" v-html="wifi"></svg>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" v-html="battery"></svg>
        </div>
    </div>
    `,
    methods: {
        getHourMinute() {
            let tt = new Date().toTimeString();
            let ttt = tt.split(':');
            return ttt[0] + ':' + ttt[1];
        },
        refreshTime() {
            setInterval(() => {
                this.t = this.getHourMinute();
            }, 2000);
        }
    },
    mounted() {
        this.refreshTime();
    },
}

const top_banner = {
    props: ['title', 'ontheright'],
    data() {
        return {
            backsvg: svgs.backsvg,
        }
    },
    template: /* html */ `
    <div class="top-banner-outer">
        <div class="top-banner-inner">
            <div class="goback"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" v-html="backsvg"></svg></div>
            <div class="banner-title">{{title}}</div>
            <div class="rightmore" v-html="ontheright"></div>
        </div>
    </div>
    `,
}

const chatting = {
    props: ['from', 'to_name', 'pa', 'pb', 'msg'],
    data() {
        return {
            A_portrait: this.pa,
            B_portrait: this.pb,
            messages: v_messages,
            mapWeek: ['日', '一', '二', '三', '四', '五', '六'],
        }
    },
    template: /* html */ `
    <div class="chatting-outer" ref="scrollToMe">
        <li v-for="(item, idx) in messages" :key="'chat_'+idx" class="message-side" :name="item.who===from? 'same': (item.who==='sys'?'sys':'diff')">
            <template v-if="item.who===from">
                <div class="chatting-detail chatting-right">
                <li v-for="(it, idx2) in item.detail" :key="'chatd_'+idx2">
                    <span class="chatting-detail-content" v-html="it.content"></span>
                    <span class="chatting-detail-time">{{it.time}}</span>
                </li>
                </div>
                <div class="chatting-portrait portrait-right"><img :src="A_portrait"></div>
            </template>
            <template v-else-if="item.who==='sys'">
                <div class="message-banner-time"><span>{{item.detail}}</span></div>
            </template>
            <template v-else>
                <div class="chatting-portrait portrait-left"><img :src="B_portrait"></div>
                <div class="chatting-detail chatting-left">
                <li v-for="(it, idx2) in item.detail" :key="'chatd_'+idx2" class="chatting-detail chatting-left">
                    <span class="chatting-detail-content" v-html="it.content"></span>
                    <span class="chatting-detail-time">{{it.time}}</span>
                </li>
                </div>
            </template>
        </li>
    </div>
    `,
    methods: {
        scrollToBottom() {
            const el = this.$refs.scrollToMe;
            if (el) {
                el.scrollTo({top: el.scrollHeight, behavior: 'smooth'});
            }
        },
        genDate() {
            return new Date().toTimeString().split(' ')[0];
        },
        genFullDate() {
            let t = new Date();
            return `${t.getFullYear()}年${t.getMonth()+1}月${t.getDate()}日 星期${this.mapWeek[t.getDay()]} ${this.genDate()}`
        },
        needSysDate() {
            for (let i = this.messages.length - 1; i >=0; i--) {
                if (this.messages[i].who === 'sys') {
                    let now = new Date();
                    let x = this.messages[i].detail.split(' ');
                    let d = new Date(Date.parse(x[0].replace('年','-').replace('月','-').replace('日','')));
                    let day_diff = (now.getTime() - d.getTime()) / (1000 * 3600 * 24);
                    if (day_diff > 1) return true;
                    let h = x[2].split(':')[0].toString();
                    if (Math.abs(now.getHours - h) > 1) return true;
                    return false;
                }
            }
            return true;
        }
    },
    watch: {
        msg(e) {
            if (e !== '') {
                if (this.needSysDate()) {
                    this.messages.push({
                        who: 'sys',
                        detail: this.genFullDate(),
                    })
                }
                let side = this.messages[this.messages.length - 1].who;
                if (this.from === side) {
                    this.messages[this.messages.length - 1].detail.push({
                        time: this.genDate(),
                        content: e,
                    })
                } else {
                    this.messages.push({
                        who: this.from,
                        detail: [{
                            time: this.genDate(),
                            content: e,
                        }]
                    })
                }
                this.$nextTick(() => this.scrollToBottom());
            }
        }
    }
}

const bottom_input = {
    props: ['handleMSG'],
    data() {
        return {
            txt: '',
            audio: `<path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168z" p-id="9374" fill="#ffffffe6"></path><path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z" p-id="9375" fill="#ffffffe6"></path>`,
            sticker: `<path d="M929.2 338.2c-22.5-53.2-54.7-101-95.8-142.1-41-41-88.8-73.3-142.1-95.8-55.1-23.3-113.7-35.1-174-35.1s-118.9 11.8-174 35.1c-53.2 22.5-101 54.7-142.1 95.8-41 41-73.3 88.8-95.8 142.1-23.3 55.1-35.1 113.7-35.1 174s11.8 118.9 35.1 174c22.5 53.2 54.7 101 95.8 142.1 41 41 88.8 73.3 142.1 95.8 55.1 23.3 113.7 35.1 174 35.1s118.9-11.8 174-35.1c53.2-22.5 101-54.7 142.1-95.8 41-41 73.3-88.8 95.8-142.1 23.3-55.1 35.1-113.7 35.1-174 0-60.4-11.8-118.9-35.1-174zM658 368.8c30.2 0 54.7 24.5 54.7 54.7s-24.5 54.7-54.7 54.7-54.7-24.5-54.7-54.7 24.5-54.7 54.7-54.7z m-281.7 0c30.2 0 54.7 24.5 54.7 54.7s-24.5 54.7-54.7 54.7-54.7-24.5-54.7-54.7 24.4-54.7 54.7-54.7z m335.6 321.7c-20.6 22.5-45.1 41.4-72.1 55.5-37.5 19.7-79.8 30.1-122.4 30.1S432.5 765.7 395 746c-27-14.1-51.5-33.1-72.1-55.5-11.4-12.4-9.5-32 4.2-41.8 11.5-8.2 27.3-6.7 36.9 3.7 16.3 17.8 35.7 32.8 57.1 44 29.9 15.7 62.4 23.6 96.4 23.6s66.5-8 96.4-23.6c21.4-11.2 40.8-26.2 57.1-44 9.5-10.4 25.4-11.9 36.9-3.7 13.5 9.9 15.3 29.4 4 41.8z" fill="#ffffffe6" p-id="11746"></path>`,
            attachment: `<path d="M957.516339 178.688c-87.552-87.552-229.376-89.088-315.904-2.56L497.228339 321.024 352.332339 465.408l-144.896 144.896c-53.248 53.248-52.736 140.288 1.024 194.048s140.8 54.272 194.048 1.024l289.28-289.28c19.968-19.968 19.968-52.224 0-72.192-19.968-19.968-52.224-19.968-72.192 0l-289.28 289.28c-13.312 13.312-35.84 12.8-49.664-1.024-13.824-13.824-14.336-36.352-1.024-49.664L424.524339 537.6l144.896-144.896 144.896-144.896c46.592-46.592 123.392-45.568 171.52 2.56 48.128 48.128 49.152 124.928 2.56 171.52l-148.48 148.48-141.312 141.312-140.8 140.8c-79.872 79.872-211.456 78.336-293.376-3.584s-83.456-213.504-3.584-293.376l281.088-281.088c19.968-19.968 19.968-52.224 0-72.192-19.968-19.968-52.224-19.968-72.192 0L88.652339 483.328c-119.808 119.808-117.76 315.904 3.584 437.76s317.952 123.392 437.76 3.584l140.8-140.8 140.8-140.8 148.48-148.48c86.528-86.528 84.992-228.352-2.56-315.904z" p-id="12595" fill="#ffffffe6"></path>`,
            send: `<path d="M478.4128 491.7248l-202.1376-30.1056a81.92 81.92 0 0 1-64.67584-52.38784L125.52192 178.4832c-7.8848-21.17632 2.49856-44.8512 23.22432-52.92032a39.38304 39.38304 0 0 1 31.90784 1.47456L878.592 475.15648c19.90656 9.9328 28.18048 34.48832 18.432 54.82496-3.8912 8.21248-10.40384 14.848-18.432 18.8416L180.6336 896.96256a39.77216 39.77216 0 0 1-53.6576-18.8416 41.7792 41.7792 0 0 1-1.45408-32.58368l86.07744-230.74816a81.92 81.92 0 0 1 64.67584-52.38784l202.1376-30.1056a20.48 20.48 0 0 0 0-40.5504z" p-id="13434" fill="#ffffffe6"></path>`,
        }
    },
    template: /* html */ `
    <div class="bottom-input-outer">
        <div class="bottom-input-inner">
            <div class="bottom-input-svg input-svg-left">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" v-html="audio"></svg>
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" v-html="sticker"></svg>
            </div>
            <input type="text" placeholder="type to say something..." ref='focusMe' v-on:keyup.enter="sendMSG" v-model="txt">
            <div class="bottom-input-svg input-svg-right">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" v-html="attachment"></svg>
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" v-html="send" @click="sendMSG"></svg>
            </div>
        </div>
    </div>
    `,
    mounted() {
        this.$nextTick(() => this.$refs.focusMe.focus());
    },
    methods: {
        sendMSG() {
            if (this.txt !== '' && this.txt !== undefined && this.txt !== null) {
                this.handleMSG(this.txt);
                this.txt = '';
            }
        }
    },
}

const navigation_bar = {
    template: /* html */ `
    <div class="navigation-bar-outer">
        <span class="navigation-bar"></span>
    </div>
    `,
}

const switch_toggle = {
    props: ['default', 'name'],
    data() {
        return {
            on: true,
            id: "switch-toggle_" + new Date().valueOf(),
        }
    },
    template: /* html */ `
    <div class="switch-toggle-outer">
        <input type="checkbox" v-model="on" :id="id">
        <label :for="id"></label>
    </div>
    `,
    watch: {
        on(e) {
            console.log(this.name, e);
        }
    },
    mounted() {
        if (this.default !== undefined && (this.default === true || this.default === false)) {
            this.on = this.default;
        }
    },
}

const second_menu = {
    props: ['default', 'name', 'tit'],
    data() {
        return {
            opa: 0,
            radio_def: 0,
            backsvg: svgs.backsvg,
            show: false,
            menus: [{
                title: '允许权限范围',
                id: 'whocansee',
                type: 'radio',
                selections: ['所有人', '仅联系人', '禁止任何人'],
            }, {
                title: '设置例外',
                id: 'exception',
                type: 'button',
                selections: ['点击添加'],
            }]
        }
    },
    template: /* html */ `
    <div class="second-menu-all" ref='trigger'>
        <div class="second-menu-outside-all" @click="showit" :id="'m_'+name">{{menus[0].selections[radio_def]}}</div>
        <div class="second-menu-outer" v-show="show" :style="{opacity: opa}">
            <div class="second-menu-border">
                <div class="second-menu-top">
                    <span>{{tit}}</span>
                </div>
                <div class="second-menu-body">
                    <li class="second-menu-per" v-for="item in menus" :key="item.id">
                        <div class="second-menu-per-title">{{item.title}}</div>
                        <div class="second-menu-per-body">
                            <template v-if="item.type==='radio'">
                                <li v-for="(it, idx) in item.selections" :key="'radio_'+idx">
                                    <label class="r-label" :for="name+'_'+item.id+'_radio_'+idx">{{it}}</label>
                                    <input type="radio" :id="name+'_'+item.id+'_radio_'+idx" :value="idx" v-model="radio_def">
                                    <label :for="name+'_'+item.id+'_radio_'+idx" class="span-for-radio"></label>
                                </li>
                            </template>
                            <template v-else-if="item.type==='button'">
                                <li v-for="(it, idx) in item.selections" :key="'button_'+idx">{{it}}</li>
                            </template>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        showit() {
            this.show=true;
            setTimeout(()=>{
                this.opa = 1;
            },100);
        }
    },
    created() {
        this.radio_def = this.default;
    },
    mounted() {
        document.addEventListener('click', (e) => {
            if (this.show === true && !this.$refs.trigger.contains(e.target)) {
                this.opa = 0;
                setTimeout(()=>{
                    this.show = false;
                },200);
            }
        })
    },
}

const drop_menu = {
    props: ['default', 'name', 'selection'],
    data() {
        return {
            selected: 0,
            show: false,
            opa: 0,
        }
    },
    template: /* html */ `
    <div class="drop-menu-all second-menu-all" ref='trigger'>
        <div class="drop-menu-selected second-menu-outside-all" :name="show?'up':'down'" @click="controlit">{{selection[selected]}}</div>
        <div class="drop-menu-outer" v-show="show" :style="{opacity: opa}">
            <li v-for="(item, idx) in selection" class="drop-menu-li" :key="'dropli_'+idx" @click="changeit(idx)">{{item}}</li>
        </div>
    </div>
    `,
    created() {
        this.selected = this.default;
    },
    methods: {
        changeit(idx) {
            this.selected = idx;
            this.hideit();
        },
        controlit() {
            if (this.show === true) {
                this.hideit();
            } else {
                this.showit();
            }
        },
        showit() {
            this.show=true;
            setTimeout(()=>{
                this.opa = 1;
            },100);
        },
        hideit() {
            this.opa = 0;
            setTimeout(()=>{
                this.show = false;
            },200);
        }
    },
    mounted() {
        document.addEventListener('click', (e) => {
            if (this.show === true && !this.$refs.trigger.contains(e.target)) {
                this.hideit();
            }
        })
    },
}

const privacySettings = {
    data() {
        return {
            /* configs.type:
                0: no more configs
                1: switch toggle
                2: allow who? 
                3: select menu
            */
            menu: [{
                title: '个人资料可见范围',
                configs: [{
                    content: '头像',
                    id: 'portrait',
                    type: 2,
                    default: 0,
                }, {
                    content: '昵称',
                    id: 'nickname',
                    type: 2,
                    default: 0,
                }, {
                    content: '手机',
                    id: 'phone',
                    type: 2,
                    default: 1,
                }, {
                    content: '邮箱',
                    id: 'email',
                    type: 2,
                    default: 1,
                }, {
                    content: '所在地',
                    id: 'address',
                    type: 2,
                    default: 2,
                }]
            }, {
                title: '聊天设置',
                configs: [{
                    content: '在线状态显示',
                    id: 'ifonline',
                    type: 2,
                    default: 1
                }, {
                    content: '消息已读状态显示',
                    id: 'messageifread',
                    type: 2,
                    default: 1
                }, {
                    content: '聊天记录自动删除周期',
                    id: 'messageautodelete',
                    type: 3,
                    default: 0,
                    details: ['从不', '1天', '3天', '7天', '1月', '1年']
                }, {
                    content: '聊天记录转发',
                    id: 'messageforward',
                    type: 2,
                    default: 1
                }, {
                    content: '转发来源显示',
                    id: 'messageforwardsource',
                    type: 1,
                    default: true
                }, {
                    content: '聊天界面截图',
                    id: 'chatscreenshot',
                    type: 2,
                    default: 1
                }]
            }, {
                title: '防骚扰设置',
                configs: [{
                    content: '加友方式',
                    id: 'friendingme',
                    type: 3,
                    default: 0,
                    details: ['用户ID', '手机号', '用户ID或手机号', '不允许任何人']
                }, {
                    content: '是否允许群聊成员私聊我',
                    id: 'groupchatprivate',
                    type: 1,
                    default: true,
                }, {
                    content: '管理屏蔽用户',
                    id: 'blockuser',
                    type: 0,
                }]
            }, {
                title: '更多设置',
                configs: [{
                    content: '不列举出来了',
                    id: 'moresettings',
                    type: 0,
                }]
            }, {
                title: '更更多设置',
                configs: [{
                    content: '也不列举出来了',
                    id: 'moremoresettings',
                    type: 0,
                }]
            }],
        }
    },
    components: {
        'switch-toggle': switch_toggle,
        'second-menu': second_menu,
        'drop-menu': drop_menu,
    },
    template: /* html */ `
        <div class="settings-outer">
            <li v-for="(item, idx) in menu" :key="'menu_'+idx" class="per-setting-outer">
                <div class="setting-title">{{item.title}}</div>
                <div class="setting-config">
                    <li v-for="it in item.configs" :key="it.id" class="setting-config-per">
                        <span class="setting-config-per-t">{{it.content}}</span>
                        <template v-if="it.type===1">
                            <switch-toggle :default="it.default" :name="it.id"></switch-toggle>
                        </template>
                        <template v-else-if="it.type===2">
                            <second-menu :default="it.default" :name="it.id" :tit="it.content"></second-menu>
                        </template>
                        <template v-else-if="it.type===3">
                            <drop-menu :default="it.default" :name="it.id" :selection="it.details"></drop-menu>
                        </template>
                    </li>
                </div>
            </li>
        </div>
    `,
}

const chat_interface = {
    props: ['from', 'to_name', 'pa', 'pb'],
    components: {
        'status-bar': status_bar,
        'top-banner': top_banner,
        'chatting': chatting,
        'bottom-input': bottom_input,
        'navigation-bar': navigation_bar,
    },
    data() {
        return {
            msg: '',
            morebutton: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M417.696 224c0-52.928 43.072-96 96-96s96 43.072 96 96-43.072 96-96 96S417.696 276.928 417.696 224z" fill="#ffffff"></path><path d="M417.696 512c0-52.928 43.072-96 96-96s96 43.072 96 96-43.072 96-96 96S417.696 564.928 417.696 512z"  fill="#ffffff"></path><path d="M417.696 800c0-52.928 43.072-96 96-96s96 43.072 96 96-43.072 96-96 96S417.696 852.928 417.696 800z" fill="#ffffff"></path></svg>`,
        }
    },
    template: /* html */ `
    <div class="show-area">
        <status-bar></status-bar>
        <top-banner :title="to_name" :ontheright="morebutton"></top-banner>
        <div class="v-body-content">
            <chatting :from="from" :to_name="to_name" :pa="pa" :pb="pb" :msg="msg"></chatting>
            <bottom-input :handleMSG="handleMSG"></bottom-input>
        </div>
        <navigation-bar></navigation-bar>
    </div>
    `,
    methods: {
        handleMSG(msg) {
            this.msg = msg;
        }
    }
}

const app01 = Vue.createApp({
    data() {
        return {
            from: 0,
            to_name: '柴门闻犬吠',
            pa: avatars.a,
            pb: avatars.b,
        }
    },
    components: {
        'chat': chat_interface,
    }
}).mount('#case1');

const app01x = Vue.createApp({
    data() {
        return {
            from: 1,
            to_name: '风雪夜猫咪',
            pa: avatars.b,
            pb: avatars.a,
        }
    },
    components: {
        'chat': chat_interface,
    }
}).mount('#case1x');

const app02 = Vue.createApp({
    data() {
        return {
            toptitle: 'Privacy Settings',
        }
    },
    components: {
        'status-bar': status_bar,
        'top-banner': top_banner,
        'privacy-settings': privacySettings,
        'navigation-bar': navigation_bar,
    },
}).mount('#show02');