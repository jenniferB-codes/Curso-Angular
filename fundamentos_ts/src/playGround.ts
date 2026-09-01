/*const array: string[] = ['hola', 'como estas?', 'buenos dias', 'buenas tardes']

const index: string = array[1] ?? 'sin actividades'
console.log(index)

for (const saludo of array) {
    console.log(saludo)
}



const frameWorks: string[] = ['react', 'jasmine', 'angular', 'TypeScriptcccc']

const largos = frameWorks.filter((frameWork) => {
    return frameWork.length > 12
})

console.log(largos)

interface user {
    name: string,
    age: number
}

const userObject: user = {
    name: 'anaa',
    age: 10
}

console.log(userObject)

const saludo: unknown = '222'

console.log(saludo)*/

const array = [{nombre: 'jen', edad: 2}, {nombre: 'jen', edad: 2}]

console.table(array)

function cargar(nombre: string, exito: boolean): Promise<string> {
  return new Promise((cumplir, rechazar) => {
    setTimeout(() => {
      if (exito) {
        cumplir(`${nombre} listo`);
      } else {
        rechazar(new Error(`${nombre} falló`));
      }
    }, 300);
  });
}

async function iniciar(): Promise<void> {
  console.log('1. inicio');

  try {
    const [actividades, usuarios] = await Promise.all([
      cargar('actividades', true),
      cargar('usuarios', true),
    ]);
    console.log(`2. ${actividades}`);
    console.log(`3. ${usuarios}`);

    await cargar('comentarios', false);
    console.log('no se llega aquí');
  } catch (error: unknown) {
    const mensaje = error instanceof Error ? error.message : 'desconocido';
    console.log(`4. ${mensaje}`);
  } finally {
    console.log('5. terminado');
  }
}

iniciar();