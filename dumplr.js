var btn_outer = document.createElement("li");
var btn_inner = document.createElement("div");


btn_inner.classList.add("control-item");
btn_inner.classList.add("control-anchor");
btn_inner.classList.add("customize");
btn_inner.innerHTML = "Post everything ᕦ(ò_óˇ)ᕤ";   
btn_inner.style.cursor = "pointer";

btn_outer.classList.add("controls_section_item")
btn_outer.appendChild(btn_inner);

var aside = document.getElementsByClassName("blog_menu")
if (aside.length == 0)
{
  aside = document.getElementsByClassName("_27qMJ")
}
aside[0].appendChild(btn_outer);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

btn_outer.addEventListener("click", async function()
{
	if(confirm("Are you sure you want to post all posts from your draft?"))
	{
		var last_post_id = null;
		var top_post_id = null;
		
		while(document.getElementsByClassName("publish").length > 0)
		{
			var top_post_id = document.getElementsByClassName("post_full")[1].getAttribute("id");
		
			if(last_post_id != top_post_id)
			{
				var publish_buttons = document.getElementsByClassName("publish")[0];
				publish_buttons.click();
				await sleep(250);
				var publish_btn = document.getElementsByClassName("btn_1")[0];
				publish_btn.click();
				last_post_id = top_post_id
			}
			
			await sleep(150);
		}
	}
});
