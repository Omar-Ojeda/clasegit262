const alumnos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
]

function mostrarAlumnos() {
  console.log("Lista de alumnos:");
  alumnos.forEach(alumno => {
    console.log(`Nombre: ${alumno.nombre}, Edad: ${alumno.edad}`);
  });
}

mostrarAlumnos();