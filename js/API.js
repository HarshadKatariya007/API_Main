let Arry = []

const Pro_UI = (data) => {
    document.querySelector("#data_1").innerHTML=""
    data.map((ele) => {
        
        let Pro_Title = document.createElement("h6");
        Pro_Title.innerHTML = `Title :- ${ele.title}`

        let Pro_Image = document.createElement("img");
        Pro_Image.src = ele.images[0]

        let Pro_Description = document.createElement("h5");
        Pro_Description.innerHTML = ele.description

        let Pro_Price = document.createElement("p");
        Pro_Price.innerHTML = `Price :-  ₹ ${ele.price}`

        let Pro_Rating = document.createElement("p");
        Pro_Rating.innerHTML = `Rating :- ${ele.rating}`

        let Pro_Brand = document.createElement("h6");
        Pro_Brand.innerHTML = `Brand :- ${ele.brand}`

        let Pro_Category = document.createElement("p");
        Pro_Category.innerHTML = `Category :- ${ele.category}`

        let Div = document.createElement("div");
        Div.append(Pro_Image, Pro_Title, Pro_Description, Pro_Price, Pro_Rating, Pro_Brand, Pro_Category)
        document.querySelector("#data_1").append(Div)
    })
}

const Price_Sorting = (val) => {

    if (val == "high_to_low") {
        Arry.sort((a, b) => b.price - a.price)
    }
    else {
        Arry.sort((a, b) => a.price - b.price)
    }
    Pro_UI(Arry)
}


const Filtering = (val) =>
{
  let fil = Arry.filter((ele)=> ele.category==val)
  Pro_UI(fil)
  console.log(fil);
}
const Search_Bar_FI = (val) =>
{
    let fil = Arry.filter((ele)=> ele.title.includes(val))
    Pro_UI(fil)
}
const Search_Bar = (e) =>
{
    e.preventDefault();
    let Search_Title = document.querySelector("#search_bar").value;
    Search_Bar_FI(Search_Title)
    console.log(Search_Title);
}

const Get_Api = async() => 
{
    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json()
    Pro_UI(data.products)
    Arry = data.products
}

Get_Api()

document.querySelector("#low_to_high").addEventListener("click", () => Price_Sorting("low_to_high"))
document.querySelector("#high_to_low").addEventListener("click", () => Price_Sorting("high_to_low"))
document.querySelector("#smart").addEventListener("click",()=> Filtering("smartphones"))
document.querySelector("#laptop").addEventListener("click",()=> Filtering("laptops"))
document.querySelector("#fragrances").addEventListener("click",()=> Filtering("fragrances"))
document.querySelector("#skincare").addEventListener("click",()=> Filtering("skincare"))
document.querySelector("#groceries").addEventListener("click",()=> Filtering("groceries"))    
document.querySelector("#home").addEventListener("click",()=> Filtering("home-decoration"))  
document.querySelector("#search").addEventListener("submit",Search_Bar) 