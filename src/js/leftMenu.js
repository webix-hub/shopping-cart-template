export const leftMenu = {
	view: "menu",
	borderless: true,
	layout: "y",
	css: "left-menu",
	select: true,
	type: {
		height: 44
	},
	ready() {
		this.select("3");
	},
	data: [
		{id: "1", value: "Account Overview", icon: "mdi mdi-account"},
		{$template: "Spacer", $height: 15},
		{id: "2", value: "My Orders", icon: "mdi mdi-shopping"},
		{id: "3", value: "My Cart", icon: "mdi mdi-cart"},
		{id: "4", value: "My Wishlist", icon: "mdi mdi-heart-multiple"},
		{id: "5", value: "My Disputes", icon: "mdi mdi-chat-alert-outline"},
		{id: "6", value: "Log Out", icon: "mdi mdi-logout"}
	]
};
