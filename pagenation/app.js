console.log("conected")

var listelement = document.getElementById("list");
var pagenumberelement = document.getElementById("pagenumber")

const list_items = [
	"Item 1",
	"Item 2",
	"Item 3",
	"Item 4",
	"Item 5",
	"Item 6",
	"Item 7",
	"Item 8",
	"Item 9",
	"Item 10",
	"Item 11",
	"Item 12",
	"Item 13",
	"Item 14",
	"Item 15",
	"Item 16",
	"Item 17",
	"Item 18",
	"Item 19",
	"Item 20",
	"Item 21",
	"Item 22"
];
let currentpage = 1 ;
let rows = 10;
// item , div , number of rows , number of pages 
function display (item, wraper,rowsperpage,page){
     wraper.innerHTML="";
     page--;

     let start = rowsperpage * page;
     console.log(start)
     let end = rowsperpage + start;
     console.log(end)
     let pagenated = item.slice(start,end)
     for(let counter = 0; counter <=pagenated.length-1;counter++){
         let element = pagenated[counter];
         let item_element = document.createElement("div");
         item_element.classList.add("item")
         item_element.innerText=element;
         listelement.appendChild(item_element)
     }
}
 
function setpagenation(item,wraper,rowsperpage){
    wraper.innerHTML="";
    let pagecount = Math.ceil(item.length/rowsperpage)
    console.log(pagecount)
    for(let i = 1;i <pagecount+1;i++){
        let btn = pagenationbutton(i,item)
        wraper.appendChild(btn)
    }
}

function pagenationbutton(pages,items){
    let button = document.createElement("button");
    button.innerText=pages;
    if (currentpage == pages){
        button.classList.add("active")
    }
    button.addEventListener("click",function(){
        currentpage=pages;
        display(items,listelement,rows,currentpage);
        let currentbtn = document.querySelector(".pagenumber button.active");
        currentbtn.classList.remove("active");

        button.classList.add("active")

    });
     return button
}

display(list_items,listelement,rows,currentpage)
setpagenation(list_items,pagenumberelement,rows)