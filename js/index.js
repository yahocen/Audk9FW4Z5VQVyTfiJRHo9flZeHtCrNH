const Counter = {
	data() {
		return {
			api: 'https://home.yhc.red:6843',
			config: {},
			menus: [],
			notes: [],
		}
	},
	created(){
		this.init()
		this.getNotes(0)
	},
	methods: {
		async init(){
			//菜单
			const configRes = await axios.get(`${this.api}/blog/config`)
			if(configRes.status==200 && configRes.data.code==1){
				this.config = configRes.data.data
			}
			//配置
			const menuRes = await axios.get(`${this.api}/blog/menu`)
			if(menuRes.status==200 && menuRes.data.code==1){
				this.menus = menuRes.data.data
			}
		},
		async getNotes(start){
			const menuRes = await axios.get(`${this.api}/blog/home?start=${start}&count=10`)
			if(menuRes.status==200 && menuRes.data.code==1){
				this.notes = menuRes.data.data
			}
		},
	}
}
let app = Vue.createApp(Counter).mount('#app')