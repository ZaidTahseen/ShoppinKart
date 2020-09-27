const all_product = [

    {
        id: 1,
        imgUrl: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        title: 'Hp Laptop',
        price: 45000
    },

    {
        id: 2,
        imgUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
        title: 'Oppo X9',
        price: 15000
    },

    {
        id: 3,
        imgUrl: 'https://images.unsplash.com/photo-1589188107547-ba1295208be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
        title: 'Nike GT',
        price: 5000
    },
    {
        id: 4,
        imgUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        title: 'Mufti',
        price: 1500,
    },

    {
        id: 5,
        imgUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        title: 'Jio Phone',
        price: 20000,

    },
    {
        id: 6,
        imgUrl: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        title: 'Jeans',
        price: 2000,

    },
    {
        id: 7,
        imgUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
        title: 'Dell Z500',
        price: 55000,

    },
    {
        id: 8,
        imgUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80",
        title: 'Keyboard',
        price: 2500,

    },
    {
        id: 9,
        imgUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        title: 'Bag',
        price: 1000,

    },
    {
        id: 10,
        imgUrl: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        title: 'Formal Shoe',
        price: 2300,

    }


]


// const all_product = []



var cart_products = []

var total_price = 0

var cart_count = 1




function upload_product() {

    if (all_product.length > 0) {

        card = ""

        for (prods of all_product) {


            card = card + `
            <div class='card'>
                <img src='${prods.imgUrl}'> 
                <h2> ${prods.title}</h2>
                <h3> Price - ${prods.price} </h3>
                <button class="c_btn" onclick = "add_cart( ${prods.id} )" >Add to Cart </button>
            </div>
        `
        }

        sec_product = document.getElementsByClassName('product')
        sec_product[0].innerHTML = card
    }

    else {

        sec_product = document.getElementsByClassName('product')
        sec_product[0].innerHTML = 'No Products ,, Come Later !!! '
    }

}

upload_product()



function add_cart(prod_id) {

    for (item of all_product) {
        if (prod_id == item.id) {
            cart_products.push(item)
            total_price = total_price + item.price
            break
        }
    }

    document.getElementById('cart-count').innerHTML = cart_count
    cart_count++;
    update_cart();

}






function update_cart() {
    var cart = `
            
            <tr>
                <th>S_No</th>
                <th>Prod_Name</th>
                <th>Prod_Img</th>
                <th>Prod_Price</th>
            </tr>
    `
    var s_no = 1
    for (cart_item of cart_products) {
        cart = cart + `

            <tr>
                <td>${s_no}</td>
                <td>${cart_item.title}</td>
                <td><img src="${cart_item.imgUrl}" alt=""></td>
                <td>${cart_item.price}</td>
            </tr>
        
        `
        s_no++;
    };

    document.getElementById('cart_products').innerHTML = cart
    document.getElementById('total_price').innerHTML = "Total Price   = " + total_price


    // console.log(total_price)

}










function show_cart() {

    const prod_card = document.getElementsByClassName('product_section')
    const cart = document.getElementsByClassName('cart_items')

    prod_card[0].style.display = 'none'
    cart[0].style.display = 'block'

}


function show_product() {
    const prod_card = document.getElementsByClassName('product_section')
    const cart = document.getElementsByClassName('cart_items')

    prod_card[0].style.display = 'block'
    cart[0].style.display = 'none'

}