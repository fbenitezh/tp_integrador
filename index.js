const prd = new Producto(1, "lapiz", 'asd', 123, 2);
const stock_gl_class = new Stock([
    prd
]);
let flag_edit = 0; // variable q indica si tenemos q editar o agregar un producto

// funcion que se ejecuta cuando cargo la pagina
window.onload = ()=>{
    handleEvents();
    renderTable();
}

const submitForm = () => {
    if(flag_edit){
        console.log('editar');
    }else{
        console.log('crear');
    }

    flag_edit = 0;
}

const handleEvents = () => {
    const btn_submit = document.getElementById('btn_submit_form');    
    btn_submit.addEventListener('click', submitForm);
}

const detalle = id => {
    flag_edit = 1;
    console.log('edit');
}

const remove = id => {
    console.log('remove');
}

const renderTable = () => {
    const data = stock_gl_class.find();
    let template = '';
    data.forEach(product => {
        template += `
            <tr>
                <th scope="row">${product.name}</th>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.available_quantity}</td>
                <td>
                    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="detalle(${product.id})">   
                        Modificar
                    </button>
                    <button class="btn btn-danger" onclick="remove(${product.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
    document.getElementById('table_stock_body').innerHTML = template;
    return;
}