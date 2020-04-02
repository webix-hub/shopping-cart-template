export const userTitle = {
	view: "template",
	data: {name: "Jane Smith", src: "./assets/img/user.jpg"},
	css: "user-title",
	borderless: true,
	autoheight: true,
	template(obj) {
		const html = `
			<div class="avatar-img">
				<img alt="${obj.name}" src="${obj.src}"/>
			</div>
			<div>
				Hi,<br>
				<span class="webix_strong">${obj.name}</span>
			</div>
		`;
		return html;
	}
};
