export const cartToolbar = {
	view: "toolbar",
	height: 44,
	padding: 6,
	cols: [
		{
			template: "My cart",
			css: "font-18 toolbar-template",
			borderless: true
		},
		{},
		{
			view: "button",
			value: "Proceed to checkout",
			autowidth: true,
			css: "webix_primary"
		}
	]
};
