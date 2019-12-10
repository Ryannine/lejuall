import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        wrapper: '',
        list: [{
            id: 1,
            title: 'Vallery 单人沙发',
            subtitle: 'by Adrianne Ho',
            price: '¥560',
            src: [require("@/views/idea/new/imgs/img1.png"), require("@/views/idea/new/imgs/img2.png"), require("@/views/idea/new/imgs/img3.png")]
        }, {
            id: 2,
            title: '  现代极简实木椅 休闲椅子',
            subtitle: 'by Adrianne Ho',
            price: '¥560',
            src: [require("@/views/idea/new/imgs/img2.png")]
        }, {
            id: 3,
            title: '欧式屏风隔断',
            subtitle: 'by Adrianne Ho',
            price: '¥560',
            src: [require("@/views/idea/new/imgs/img3.png")]
        }, {
            id: 4,
            title: '简约书桌',
            subtitle: 'by Adrianne Ho',
            price: '¥560',
            src: [require("@/views/idea/new/imgs/img4.png")]
        }, {
            id: 5,
            title: 'Worcester 电视柜',
            subtitle: 'by Adrianne Ho',
            price: '¥560',
            src: [require("@/views/idea/new/imgs/img5.png")]
        }, {
            id: 6,
            title: 'Jenner 茶几',
            subtitle: 'by Adrianne Ho',
            price: '¥560',
            src: [require("@/views/idea/new/imgs/img6.png")]
        }, {
            id: 7,
            title: '现代橱柜',
            subtitle: 'by Adrianne Ho',
            price: '¥560',
            src: [require("@/views/idea/new/imgs/img7.png")]
        }, {
            id: 8,
            title: '创意休闲椅',
            subtitle: 'by Adrianne Ho',
            price: '¥560',
            src: [require("@/views/idea/new/imgs/img8.png")]
        }, {
            id: 9,
            title: '单人木椅',
            subtitle: 'by Adrianne Ho',
            price: '¥560',
            src: [require("@/views/idea/new/imgs/img9.png")]
        }, {
            id: 10,
            title: '几何图形书柜',
            subtitle: 'by Adrianne Ho',
            price: '¥560',
            src: [require("@/views/idea/new/imgs/img10.png")]
        }],
        shopList: [],
        buyList: []
    },

    mutations: {
        selectZ(state) {
            console.log(this.getters.checkAll);
            if (this.getters.checkAll == false) {
                state.shopList.forEach(el => el.check = true)
                console.log(1)
            } else {
                state.shopList.forEach(el => el.check = false)
                console.log(1)

            }
        }
    },
    actions: {},
    modules: {},
    getters: {
        totalPrice(state) {
            var item = state.shopList.filter(el => el.check == true);
            var count = 0;
            // return item.count * item.price.number
            for (var i = 0; i < item.length; i++) {
                count += item[i].number * item[i].price.substring(1);
            }
            return count;
            // console.log(count);
            // return state.shopList.reduce((prev, current) => {
            //     if (current.check == true) {
            //         return prev += Number(current.number) * current.price.substring(1)
            //     }
            // }, 0)
        },
        checkAll(state) {
            if (state.shopList.length > 0) {

                return state.shopList.every(el => el.check == true)
            }
        }
    }
})