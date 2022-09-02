class Producto {
    constructor(Código, Nombre, Cantidad, Precio) {
        this.Código = Código;
        this.Nombre = Nombre;
        this.Cantidad = Cantidad;
        this.Precio = Precio;
        this.hijoIzquierdo = null;
        this.hijoDerecho = null;
    }
}
class BinaryTree {
    constructor() {
        this.Raiz = null;
    }
    agregar(Nuevo) {
        if (this.Raiz == null)
            this.Raiz = Nuevo;
        else
            this.agregate(Nuevo, this.Raiz);
    }
    agregate(Nuevo, Nodox) {
        if (Nuevo.Código < Nodox.Código)
            if (Nodox.hijoIzquierdo == null)
                Nodox.hijoIzquierdo = Nuevo;
            else
                this.agregate(Nuevo, Nodox.hijoIzquierdo);

        else
        if (Nodox.hijoDerecho == null)
            Nodox.hijoDerecho = Nuevo;
        else
            this.agregate(Nuevo, Nodox.hijoDerecho);
    }
    inOrder() {
        if (this.Raiz == null)
            return "";
        else
            return this.inOrderRec(this.Raiz);
    }
    inOrderRec(Nodox) {
        let info = "";
        if (Nodox.hijoIzquierdo != null)
            info += this.inOrderRec(Nodox.hijoIzquierdo);
        info += 'Código del Producto: ' + Nodox.Código + "<br>";
        if (Nodox.hijoDerecho != null)
            info += this.inOrderRec(Nodox.hijoDerecho);
        return info;
    }
    PreOrder() {
        if (this.Raiz == null) {
            return "";
        } else
            return this.PreOrderRec(this.Raiz);
    }
    PreOrderRec(Nodox) {
        let info = Nodox.Código;
        if (Nodox.hijoIzquierdo != null) {
            info += "-" + this.PreOrderRec(Nodox.hijoIzquierdo);
        }
        if (Nodox.hijoDerecho != null) {
            info += "-" + this.PreOrderRec(Nodox.hijoDerecho);
        }
        return info;
    }
    PosOrder() {
        if (this.Raiz == null) {
            return "";
        } else {
            return this.PosOrderRec(this.Raiz);
        }
    }
    PosOrderRec(Nodox) {
        let info = "";
        if (Nodox.hijoIzquierdo != null) {
            info += this.PosOrderRec(Nodox.hijoIzquierdo) + "-";
        }
        if (Nodox.hijoDerecho != null) {
            info += this.PosOrderRec(Nodox.hijoDerecho) + "-";
        }
        info += Nodox.Código;
        return info;
    }
    Buscar(Código, Nodox = this.Raiz) {
        while (Nodox != null) {
            if (Nodox.Código === Código)
                return Nodox;

            if (Código < Nodox.Código) {
                return this.Buscar(Código, Nodox = Nodox.hijoIzquierdo)
            }
            if (Código > Nodox.Código) {
                return this.Buscar(Código, Nodox = Nodox.hijoDerecho)
            }
        }
        return null;
    }
}
let Arbol = new BinaryTree();
const BtnAdd = document.getElementById('BtnAdd');
BtnAdd.addEventListener('click', () => {
    let Código = Number(document.getElementById('Codi').value);
    let Nombre = document.getElementById('Nombr').value;
    let Precio = document.getElementById('Preord').value;
    let Cantidad = document.getElementById('Cantid').value;

    let Nuevo = new Producto(Código, Nombre, Cantidad, Precio);
    Arbol.agregar(Nuevo);
    console.log(Arbol);
    let detalles = document.getElementById('detalles');
    detalles.innerHTML += '<p>Se agrego el producto ' + Código + '</p>';

    document.getElementById('Codi').value = '';
    document.getElementById('Cantid').value = '';
    document.getElementById('Preord').value = '';
    document.getElementById('Nombr').value = '';

});
const BtnListInOrder = document.getElementById('BtnListInOrder');
BtnListInOrder.addEventListener('click', () => {
    let detalles = document.getElementById('Arbol');
    Arbol.inOrder();
    detalles.innerHTML += Arbol.inOrder();
});
const BtnListPreOrder = document.getElementById('BtnListPreOrder');
BtnListPreOrder.addEventListener('click', () => {
    let detalles = document.getElementById('Arbol');
    Arbol.PreOrder();
    detalles.innerHTML += Arbol.PreOrder() + '<br>';
});
const BtnListPosOrder = document.getElementById('BtnListPosOrder');
BtnListPosOrder.addEventListener('click', () => {
    let detalles = document.getElementById('Arbol');
    Arbol.PosOrder();
    detalles.innerHTML += Arbol.PosOrder() + '<br>';
});
const BtnFind = document.getElementById('BtnFind');
BtnFind.addEventListener('click', () => {
    let Código = Number(document.getElementById('Codi').value);
    let detalles = document.getElementById('Arbol');
    let Buscado = Arbol.Buscar(Código);
    if (Buscado == null) {
        detalles.innerHTML += 'No se encontro el Buscado' + '<br>' + '<br>';
    } else {
        detalles.innerHTML += 'Se encontro el Buscado con Código: ' + Código + '<br>' + 'INFO:' + '<br>' + 'Nombre:' + Buscado.Nombre + '<br>' +
            'Cantidad: ' + Buscado.Cantidad + '<br>' + 'Precio: ' + Buscado.Precio + '<br>' + '<br>';
    }
});