class UI{
	addTask(task){
		const li = document.creatElement("li");
		li.className = "collection-item";
		li.appendChild(document.createTextNode(task.name));

		const link = document.creatElement("a");
		link.className = "secondary-content";
		link.appendChild(document.createTextNode("X"));
		link.setAttribute("href", "#");
		li.appendChild(link);

		const list = document.querySelector("ul");
		list.appendChild(li);

		const input = document.querySelector("#task");
		input.value = "";
		task.addedToUI();
	}
}