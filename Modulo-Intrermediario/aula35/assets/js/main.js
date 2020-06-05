// Exercicio com For e manipulação de objetos e array

function listarTexto(){

    const elementos = [
        {tag: 'p', texto: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'},
        {tag: 'div', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur sem at ex ultricies semper. Duis egestas elementum enim, at efficitur mi viverra at. Integer at est aliquam metus semper eleifend. Proin euismod velit ut viverra aliquet. Duis aliquam faucibus est, sed auctor ligula rhoncus semper.'},
        {tag: 'footer', texto: 'neque, congue et pulvinar tincidunt, tristique non sapien. Sed pellentesque justo est, et gravida leo egestas et. Fusce suscipit mauris et lorem imperdiet, vitae bib'},
        {tag: 'section', texto: 'In id efficitur dui. Suspendisse porta viverra erat, quis accumsan mi fringilla ac. Suspendisse imperdiet mauris non mi aliquam, non faucibus tellus ultricies. Fusce quis metus nec diam venenatis commodo vel nec nibh. Praesent efficitur lacus ut tristique congue. Suspendisse non augue ac metus facilisis euismod.'},
    ];

    const container = document.querySelector('.container');
    container.appendChild(separaConteudo());

    function separaConteudo(){

        const div = preparaCompomente('div');

        for (let i = 0; i < elementos.length; i++){
            const { tag, texto} = elementos[i];
           
            div.appendChild(preparaHtml(tag, texto));
        }
        
        return div;
    };

    function preparaCompomente(tipoElemento){
        
        return document.createElement(tipoElemento);
    };

    function preparaHtml(elemento, frase){

        let compoment = preparaCompomente(elemento); 
        //compoment.innerText = frase;        
        compoment.appendChild(document.createTextNode(frase));
        return compoment;   
    };
}

listarTexto();
