import {cartList} from "./js/cartList";
import {cartToolbar} from "./js/cartToolbar";
import {leftMenu} from "./js/leftMenu";
import {userTitle} from "./js/userTitle";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize && webix.CustomScroll) {
		webix.CustomScroll.init();
	}
	webix.ui({
		type: "space",
		cols: [
			{},
			{
				width: 1420,
				margin: 10,
				type: "clean",
				borderless: true,
				cols: [
					{
						width: 300,
						rows: [
							userTitle,
							leftMenu
						]
					},
					{
						rows: [
							cartToolbar,
							cartList
						]
					}
				]
			},
			{}
		]
	});
});
