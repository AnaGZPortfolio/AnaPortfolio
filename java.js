 <script>
        const imagenes = [
            'imagen1',
            'imagen2',
            'imagen3',
        ];
        let indice = 0;

        function cambiarImagen(direccion) {
            indice += direccion;
            if (indice < 0) {
                indice = imagenes.length - 1;
            } else if (indice >= imagenes.length) {
                indice = 0;
            }

            document.getElementById('imagen').src =imagenes;
        }
    </script> JavaScript source code
