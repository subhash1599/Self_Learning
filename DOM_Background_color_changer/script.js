const btn = document.getElementById("f");
 color_change=()=> {
    let chars = '0123456789ABCDEF';
    let result = '#';
    for (let i = 0; i < 6; i++) {
        result = result + chars[Math.floor(Math.random() * 16)];
        
    }
    return result;
};
console.log(color_change());
function background_color_change() {
    document.body.style.backgroundColor = color_change();
}
btn.addEventListener("click", background_color_change)