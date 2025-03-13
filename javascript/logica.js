
            // Declaración de variables
            let nombre, edad;
            nombre = prompt('INGRESE SU NOMBRE...');
            edad = prompt('INGRESE SU EDAD...');
            let nombre1 = nombre;  // String
            let edad1 = edad;        // Number
            let esEstudiante = false; // Boolean

            console.log("Nombre: ", nombre1);
            console.log("Edad: ", edad1);
            document.write("Nombre: ", nombre1, "<br>");
            document.write("Edad: ", edad1, "<br>");

            if (edad1 > 18) {
                esEstudiante = true;
                console.log("Es estudiante:", esEstudiante);
                //imprimie en el documento
                document.write("Es estudiante: ", esEstudiante);
            }else{
                console.log("Es estudiante:", esEstudiante);
                //imprimie en el documento
                document.write("Es estudiante: ", esEstudiante);
            }
        