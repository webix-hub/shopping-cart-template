const data = [
	{id: 1, title: "Shoes 1", count: 1, shipping: "Free shipping", cost: 45, like: 215, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "./assets/img/Shoes_1.png"},
	{id: 2, title: "Shoes 2", count: 2, shipping: "Free shipping", cost: 62, like: 117, desc: "Sed quis justo eu urna fermentum vehicula nec vel leo.", src: "./assets/img/Shoes_2.png"},
	{id: 3, title: "Shoes 3", count: 1, shipping: "Free shipping", cost: 53, like: 72, desc: "Curabitur augue turpis, volutpat in scelerisque non, tempor sed erat.", src: "./assets/img/Shoes_3.png"},
	{id: 4, title: "Shoes 4", count: 2, shipping: "Free shipping", cost: 46, like: 54, desc: "Proin faucibus luctus tellus imperdiet accumsan. Suspendisse potenti.", src: "./assets/img/Shoes_4.jpg"},
	{id: 5, title: "Shoes 5", count: 1, shipping: "Free shipping", cost: 52, like: 81, desc: "Nulla imperdiet rhoncus nunc, id posuere nunc egestas nec.", src: "./assets/img/Shoes_5.jpg"},
	{id: 6, title: "Shoes 6", count: 1, shipping: "Free shipping", cost: 61, like: 112, desc: "Etiam accumsan tortor et risus sagittis blandit.", src: "./assets/img/Shoes_6.jpg"}
];

export const cartList = {
	view: "list",
	css: "cart-list",
	select: true,
	minWidth: 500,
	type: {
		height: 200,

		remove: () => "<div class='click_icon_remove'><span class='webix_icon mdi mdi-close'></span></div>",

		likeButton: value => `
			<div class="item-like">
				<span class="click_icon_like webix_icon mdi mdi-heart"></span>
				<span>${value}</span>
			</div>
		`,
		// HTML-based counter (clickable template)
		counter: value => `
			<div class="webix_control webix_el_counter counter-overall">
				<button type="button" class="webix_inp_counter_prev" tabindex="-1" >-</button><input type="text" readonly class="webix_inp_counter_value" style="" value="${value}"></input><button type="button" class="webix_inp_counter_next" tabindex="-1">+</button>
			</div>
		`,
		// overall template of the item
		template: (obj, common) => `
			<div class="cart-item">
				<div class="item-img"><img src="${obj.src}"></img></div>
				<div class="item-mid-content">
					<div class="webix_strong font-16">${obj.title}</div>
					<div>${obj.desc}</div>
					<div class="item-action-buttons">
						${common.counter(obj.count || 0)}
						${common.likeButton(obj.like)}
					</div>
				</div>
				<div class="item-right-content">
					<div class="webix_strong font-16">US $${obj.cost}</div>
					<div>${obj.shipping}</div>
				</div>
				${common.remove()}
			</div>
		`,

		on_click: {
			webix_inp_counter_value: () => false,

			webix_inp_counter_prev(e, id) {
				let item = this.getItem(id);
				item.count -= 1;
				this.updateItem(id);
				return false;
			},

			webix_inp_counter_next(e, id) {
				let item = this.getItem(id);
				item.count += 1;
				this.updateItem(id);
				return false;
			},

			click_icon_like(ev, id) {
				webix.message(`Like: item ID ${id}`);
				return false;
			},

			click_icon_remove(ev, id) {
				webix.message(`Delete: item ID ${id}`);
				return false;
			}
		}
	},
	data
};
