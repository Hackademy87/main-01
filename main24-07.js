<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rubrica</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #contatti {
            margin-top: 20px;
        }
        #contatti h2 {
            margin-bottom: 10px;
        }
        #lista-contatti {
            list-style: none;
            padding: 0;
        }
        .contatto {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .contatto button {
            background-color: red;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Rubrica Telefonica</h1>
    <form id="form-contatto">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" required>
        <label for="numero">Numero:</label>
        <input type="text" id="numero" required>
        <button type="submit">Aggiungi Contatto</button>
    </form>
    <div id="contatti">
        <h2>Contatti</h2>
        <ul id="lista-contatti"></ul>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('form-contatto');
            const listaContatti = document.getElementById('lista-contatti');

            form.addEventListener('submit', function(event) {
                event.preventDefault();

                const nome = document.getElementById('nome').value;
                const numero = document.getElementById('numero').value;

                const contattoElement = document.createElement('li');
                contattoElement.className = 'contatto';
                contattoElement.innerHTML = `
                    <span>${nome}: ${numero}</span>
                    <button class="rimuovi">Rimuovi</button>
                `;

                listaContatti.appendChild(contattoElement);

                // Aggiungi evento per rimuovere il contatto
                const rimuoviButton = contattoElement.querySelector('.rimuovi');
                rimuoviButton.addEventListener('click', function() {
                    listaContatti.removeChild(contattoElement);
                });

                // Resetta i campi del form
                form.reset();
            });
        });
    </script>
</body>
</html>







function valoriSuperioriA30(arrNumber) {
    const risultato = arrNumber.filter(valore => valore > 30);
    return risultato;
}

const arrNumber = [10, 30, 35, 20, 25, 40, 15, 10, 20, 35, 20, 30, 50, 45];
const risultatoFiltrato = valoriSuperioriA30(arrNumber);

console.log("Valori superiori a 30:", risultatoFiltrato);
