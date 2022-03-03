let form = document.getElementById('form');
let changesbtn = document.getElementById('changesbtn');
let addbtn = document.getElementById('addbtn');
let modalopenbtn = document.getElementById('modalopenbtn');
let table = document.getElementsByTagName('tbody')[0];
// inputfield
let productName = document.getElementsByName('productName')[0];
let productCategory = document.getElementsByName('productCategory')[0];
let productPrice = document.getElementsByName('productPrice')[0];
let productdescription = document.getElementsByName('productdescription')[0];
let closebtn = document.getElementById('closebtn');
// Function run when window load
window.addEventListener('load', () => {
    display();
});
// modalopen button click evevnt
modalopenbtn.addEventListener('click', () => {
    form.reset();
    addbtn.style.display = 'block';
    changesbtn.style.display = 'none';
});
// form submit button add event
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let obj = {
        productName: productName.value,
        productCategory: productCategory.value,
        productPrice: productPrice.value,
        productdescription: productdescription.value
    }
    const add = await axios.post('/product/addProduct', obj);
    display();
    closebtn.click();
});

async function display() {
    table.innerHTML = ``;
    const data = await axios.get('/product/getAllProducts');
    let Result = data.data.Result;
    Result.map(x => {
        return table.innerHTML += ` <tr>
        <th scope="row">${x._id}</th>
        <td>${x.productName}</td>
        <td>${x.productCategory}</td>
        <td>${x.productPrice}</td>
        <td>${x.productdescription}</td>
        <td > <button class=" btn btn-info me-2" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop" onclick="edit('${x._id}')" >Edit</button>
            <button class=" btn btn-danger" onclick="deleted('${x._id}')" >Delete</button>
        </td>
    </tr>`
    })
}
let object;
async function edit(_id) {
    addbtn.style.display = 'none';
    changesbtn.style.display = 'block';
    const data = await axios.get(`/product/getOneProduct?_id=${_id}`)
    object = data.data.Result;
    productName.value = object.productName;
    productCategory.value = object.productCategory;
    productPrice.value = object.productPrice;
    productdescription.value = object.productdescription
}

async function save() {
    object.productName = productName.value;
    object.productCategory = productCategory.value;
    object.productPrice = productPrice.value;
    object.productdescription = productdescription.value;
    await axios.post('/product/updateProductDetails',object);
   display();
   closebtn.click();
}

async function deleted (_id){
    const deleted = await axios.delete(`/product/deleteProductDetails/${_id}`);
    display();
}