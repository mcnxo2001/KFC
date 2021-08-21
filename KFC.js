var i=0;
var list=[];// mảng đồ ăn
var amt=[];// mảng số lượng đồ ăn

/*obj.addEventListener('click', function(){
    amt.push(1);
    list.push({
        id_name:`item_${i}`,
        id_value:`value_${i}`,
        name:`Cánh gà chiên ${i}`,
        bt:`bt_remo${i}`,
        remo:`remo${i}`,
        amount:i
    }) 
    render();
    i=i+1;
});*/
function add_item(){ // thêm một món mới
    amt.push(1); // số lượng cho input
    list.push({
        id_name:`item_${i}`,
        id_value:`value_${i}`,
        name:`Cánh gà chiên ${i}`,
        bt:`bt_remo${i}`,
        remo:`remo${i}`,
        amount:i
    }) 
    render();
    i=i+1;
}
 
function render(){ // viết ra một món mới và tính tổng tiền
    document.getElementById(`list_order`).innerHTML='';
    for(let a=0;a<list.length;a++)
    {
        document.getElementById(`list_order`).innerHTML+=`
            <ul class="order" id=${list[a].id_name}>
                <span class="name">
                    ${list[a].name}
                </span>

                <span class="amount">
                    <button onclick="add_amt(${a})" id=${list[a].bt}>+</button>
                    <input type="text" value=${amt[a]} id=${list[a].id_value}>
                    <button onclick=reduce_amt(${a})>-</button>
                </span>

                <span class="price">
                    <span>$7.99</span>
                    <button onclick="rmv(${a})">X</button>
                </span>
            </ul>`
    }
    let subtt=0;
    subtt=total_price();
    let tva=subtt+2;
    subtt=subtt.toFixed(3);
    tva=tva.toFixed(3);
    document.getElementById('sub').innerHTML=`$${subtt}`;
    document.getElementById('total').innerHTML=`$${tva}`;
}

function rmv(b){ // xóa một món
    amt.splice(b,1);
    list.splice(b,1);
    render();
}

function add_amt(c){ // tăng số lượng của một món
    amt[c]=amt[c]+1;
    render();
}

function reduce_amt(d){ // giảm số lượng của một món
    amt[d]=amt[d]-1;
    if(amt[d]<1)
    {
        amt[d]=1;
    }
    render();
}
function total_price(){ // tính tổng giá tiền
    let all=0;
    for(let e=0;e<amt.length;e++)
    {
        all+=amt[e]*7.79;
    }
    return all;
}
function check(){ // hàm này em dùng để kiểm tra lỗi :v
    document.getElementById('list_order').innerHTML+=`<div>${amt}</div>`;
}

