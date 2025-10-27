import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly course: Course = {
    id: 'py-integral',
    title: 'Guía de Estudio Integral para la Programación en Python',
    modules: [
      {
        id: 'm1',
        title: 'MÓDULO I: Fundamentos y Elementos del Lenguaje',
        description: 'Comienza con la configuración del entorno, la sintaxis básica y los tipos de datos fundamentales.',
        lessons: [
          {
            id: 'l1-1',
            title: 'Introducción a Python',
            steps: [
              { type: 'explanation', title: '¿Qué es Python?', content: 'Python es un lenguaje de programación de alto nivel, interpretado y orientado a objetos, conocido por su sintaxis clara y simple, lo que facilita la legibilidad.' },
              { type: 'explanation', title: 'Versatilidad de Python', content: 'Su gran versatilidad lo hace esencial en campos como el Desarrollo Web (Backend), Ciencia de Datos, Machine Learning (ML) e Inteligencia Artificial (IA).' },
              { type: 'multiple-choice', question: 'Python es conocido por su sintaxis...', options: ['Compleja y estricta', 'Clara y simple', 'Solo para web', 'Difícil de leer'], correctAnswer: 'Clara y simple' },
              { type: 'multiple-choice', question: '¿Cuál de los siguientes campos NO es un área fuerte de Python?', options: ['Ciencia de Datos', 'Desarrollo de videojuegos de bajo nivel', 'Inteligencia Artificial', 'Desarrollo Web Backend'], correctAnswer: 'Desarrollo de videojuegos de bajo nivel' },
            ]
          },
          {
            id: 'l1-2',
            title: 'Entorno y CLI',
            steps: [
              { type: 'explanation', title: 'Entornos Virtuales', content: 'Es crucial para aislar las dependencias de paquetes por proyecto. Se crea para evitar conflictos entre librerías de diferentes proyectos.' },
              { type: 'explanation', title: 'Creando un Entorno Virtual', content: 'Usa el siguiente comando en tu Interfaz de Línea de Comandos (CLI) para crear un entorno virtual en una carpeta llamada `.venv`:', code: 'python -m venv .venv' },
              { type: 'explanation', title: 'Gestión de Paquetes (PIP)', content: 'PIP es el gestor de paquetes de Python. Te permite instalar librerías externas que no vienen con Python por defecto.' },
              { type: 'explanation', title: 'Instalando un paquete', content: 'Por ejemplo, para instalar la popular librería `requests` para hacer peticiones HTTP, usarías:', code: 'pip install requests' },
              { type: 'multiple-choice', question: '¿Qué comando se usa para crear un entorno virtual?', options: ['python new-env .venv', 'python -m venv .venv', 'pip create venv', 'venv create .'], correctAnswer: 'python -m venv .venv' },
              { type: 'multiple-choice', question: '¿Para qué sirve `pip`?', options: ['Para ejecutar código Python', 'Para instalar y gestionar paquetes externos', 'Para crear entornos virtuales', 'Para comprobar la versión de Python'], correctAnswer: 'Para instalar y gestionar paquetes externos' },
            ]
          },
          {
            id: 'l1-3',
            title: 'Variables y Tipos de Datos',
            steps: [
              { type: 'explanation', title: 'Variables en Python', content: 'Python utiliza tipado dinámico, lo que significa que no necesitas declarar el tipo de una variable. Se recomienda la convención snake_case (ej. `nombre_variable`).' },
              { type: 'explanation', title: 'Tipos de Datos Básicos', content: 'Los tipos principales son: `int` (enteros), `float` (decimales), `str` (cadenas de texto, que son inmutables), y `bool` (True o False).' },
              { type: 'explanation', title: 'Ejemplos de Variables', content: 'Así se asignan variables en Python.', code: 'nombre_variable = "Hola"\nedad = 25\nprecio = 19.95\nes_valido = True' },
              { type: 'multiple-choice', question: '¿Cuál es la convención recomendada para nombrar variables en Python?', options: ['camelCase', 'PascalCase', 'snake_case', 'kebab-case'], correctAnswer: 'snake_case' },
              { type: 'multiple-choice', question: '¿Qué significa que las cadenas (`str`) sean inmutables?', options: ['No se pueden usar en funciones', 'Su valor no puede ser modificado una vez creadas', 'Solo pueden contener letras', 'Deben tener una longitud fija'], correctAnswer: 'Su valor no puede ser modificado una vez creadas' },
            ]
          },
          {
            id: 'l1-4',
            title: 'Operadores',
            steps: [
              { type: 'explanation', title: 'Operadores Aritméticos', content: 'Incluyen `+`, `-`, `*`, `/`. También hay operadores especiales: `//` (división entera), `%` (módulo o resto), y `**` (exponente).' },
              { type: 'explanation', title: 'Ejemplo de Operadores', content: 'Observa cómo funcionan.', code: 'print(10 // 3) # Resultado: 3\nprint(10 % 3)  # Resultado: 1\nprint(2 ** 3)  # Resultado: 8' },
              { type: 'explanation', title: 'Operadores Lógicos', content: 'Se usan para combinar condiciones booleanas: `and` (y), `or` (o), `not` (no).' },
              { type: 'multiple-choice', question: '¿Qué resultado da la expresión `5 ** 2`?', options: ['10', '7', '25', '3'], correctAnswer: '25' },
              { type: 'multiple-choice', question: '¿Cuál es el operador para obtener el resto de una división?', options: ['/', '//', '%', '*'], correctAnswer: '%' },
            ]
          },
        ]
      },
      {
        id: 'm2',
        title: 'MÓDULO II: Estructuras de Control y Colecciones',
        description: 'Aprende a controlar el flujo de tu programa y a organizar datos en colecciones eficientes.',
        lessons: [
          {
            id: 'l2-1',
            title: 'Control de Flujo: Selección',
            steps: [
              { type: 'explanation', title: 'Tomando Decisiones', content: 'Las estructuras `if`, `elif` (else if), y `else` permiten ejecutar diferentes bloques de código según si una condición es verdadera (`True`) o falsa (`False`).' },
              { type: 'explanation', title: 'La importancia de la Indentación', content: 'En Python, el sangrado (indentación) no es opcional. Define qué código pertenece a un bloque `if`, `else`, etc. Un sangrado incorrecto causará un error.' },
              { type: 'explanation', title: 'Ejemplo de if/elif/else', content: 'Este código evalúa el valor de una nota.', code: 'nota = 85\nif nota >= 90:\n  print("Sobresaliente")\nelif nota >= 70:\n  print("Notable")\nelse:\n  print("Aprobado")' },
              { type: 'multiple-choice', question: '¿Qué define un bloque de código en una estructura `if` en Python?', options: ['Llaves {}', 'Paréntesis ()', 'La indentación (sangrado)', 'La palabra clave `end`'], correctAnswer: 'La indentación (sangrado)' },
              { type: 'multiple-choice', question: '¿Qué imprimirá el código anterior si `nota = 60`?', options: ['Sobresaliente', 'Notable', 'Aprobado', 'Nada'], correctAnswer: 'Aprobado' },
            ]
          },
          {
            id: 'l2-2',
            title: 'Control de Flujo: Iteración',
            steps: [
              { type: 'explanation', title: 'Bucles `for`', content: 'El bucle `for` se usa para recorrer secuencias (como listas o rangos) cuando sabes cuántas veces quieres repetir una acción.' },
              { type: 'explanation', title: 'Ejemplo de `for`', content: 'Este bucle imprime los números del 0 al 4.', code: 'for i in range(5):\n  print(i)' },
              { type: 'explanation', title: 'Bucles `while`', content: 'El bucle `while` repite un bloque de código mientras una condición sea verdadera. ¡Cuidado con los bucles infinitos!' },
              { type: 'explanation', title: 'Control de Bucles', content: '`break` termina el bucle por completo. `continue` salta a la siguiente iteración.' },
              { type: 'multiple-choice', question: '¿Qué tipo de bucle usarías si necesitas repetir una acción un número exacto de veces?', options: ['while', 'if', 'for', 'try'], correctAnswer: 'for' },
              { type: 'multiple-choice', question: '¿Qué palabra clave detiene la iteración actual y pasa a la siguiente?', options: ['break', 'stop', 'exit', 'continue'], correctAnswer: 'continue' },
            ]
          },
          {
            id: 'l2-3',
            title: 'Colecciones: Listas y Tuplas',
            steps: [
              { type: 'explanation', title: 'Listas', content: 'Una lista es una colección ordenada y mutable de elementos. Se definen con corchetes `[]`.' },
              { type: 'explanation', title: 'Tuplas', content: 'Una tupla es una colección ordenada e inmutable. Una vez creada, no puedes cambiar sus elementos. Se definen con paréntesis `()`.' },
              { type: 'explanation', title: 'Ejemplos', content: 'Observa la diferencia en su creación.', code: 'mi_lista = [1, "hola", True]\nmi_tupla = (1, "hola", True)\n\nmi_lista[0] = 99 # Válido\n# mi_tupla[0] = 99 # Inválido, daría error' },
              { type: 'multiple-choice', question: '¿Cuál es la principal diferencia entre una lista y una tupla?', options: ['Las listas son más rápidas', 'Las tuplas solo aceptan números', 'Las listas son mutables y las tuplas inmutables', 'Las tuplas no están ordenadas'], correctAnswer: 'Las listas son mutables y las tuplas inmutables' },
            ]
          },
          {
            id: 'l2-4',
            title: 'Colecciones: Diccionarios y Conjuntos',
            steps: [
              { type: 'explanation', title: 'Diccionarios (`dict`)', content: 'Almacenan pares `clave: valor`. Son ideales para modelar entidades con atributos. Las claves deben ser únicas.' },
              { type: 'explanation', title: 'Ejemplo de Diccionario', content: 'Así se define un diccionario que representa a una persona.', code: 'persona = {\n  "nombre": "Ana",\n  "edad": 30,\n  "ciudad": "Madrid"\n}' },
              { type: 'explanation', title: 'Conjuntos (`set`)', content: 'Almacenan elementos únicos y no ordenados. Son muy rápidos para comprobar si un elemento pertenece al conjunto y para eliminar duplicados.' },
              { type: 'multiple-choice', question: '¿Qué estructura usarías para almacenar las notas de alumnos usando su nombre como referencia?', options: ['Lista', 'Tupla', 'Conjunto', 'Diccionario'], correctAnswer: 'Diccionario' },
              { type: 'multiple-choice', question: 'Tengo una lista con elementos repetidos y quiero obtener solo los únicos. ¿Qué estructura es la más adecuada?', options: ['Diccionario', 'Conjunto', 'Tupla', 'Otra lista'], correctAnswer: 'Conjunto' },
            ]
          },
          {
            id: 'l2-5',
            title: 'Funciones y Módulos',
            steps: [
              { type: 'explanation', title: 'Funciones', content: 'Son bloques de código reutilizables que encapsulan una lógica. Se definen con `def`. Ayudan a evitar la repetición de código.' },
              { type: 'explanation', title: 'Ejemplo de Función', content: 'Esta función recibe un nombre y devuelve un saludo.', code: 'def saludar(nombre):\n  return f"¡Hola, {nombre}!"\n\nprint(saludar("Mundo"))' },
              { type: 'explanation', title: 'Módulos', content: 'Son archivos `.py` que contienen funciones y variables. Puedes importarlos en otros archivos para usar su código, usando `import modulo`.' },
              { type: 'multiple-choice', question: '¿Qué palabra clave se usa para definir una función en Python?', options: ['function', 'def', 'fun', 'define'], correctAnswer: 'def' },
            ]
          },
        ]
      },
      {
        id: 'm3',
        title: 'MÓDULO III: Programación Orientada a Objetos (POO)',
        description: 'Aprende el paradigma de POO para crear software modular, reutilizable y fácil de mantener.',
        lessons: [
          {
            id: 'l3-1',
            title: 'Clases y Objetos',
            steps: [
              { type: 'explanation', title: '¿Qué es una Clase?', content: 'Una clase es como un plano o una plantilla para crear objetos. Define los atributos (datos) y métodos (comportamientos) que tendrán sus objetos.' },
              { type: 'explanation', title: '¿Qué es un Objeto?', content: 'Un objeto es una instancia específica de una clase. Si la clase es `Coche`, un objeto podría ser `mi_coche_rojo`.' },
              { type: 'explanation', title: 'El Constructor `__init__`', content: 'Es un método especial que se ejecuta automáticamente al crear un objeto. Se usa para inicializar los atributos del objeto. `self` se refiere a la instancia del objeto que se está creando.' },
              { type: 'explanation', title: 'Ejemplo de Clase `Coche`', content: 'Esta clase define un coche con marca y modelo.', code: 'class Coche:\n  def __init__(self, marca, modelo):\n    self.marca = marca\n    self.modelo = modelo\n\n  def describir(self):\n    return f"Coche: {self.marca} {self.modelo}"\n\n# Creando un objeto (instancia)\nmi_coche = Coche("Toyota", "Corolla")\nprint(mi_coche.describir())' },
              { type: 'multiple-choice', question: 'En POO, un objeto es una...', options: ['Plantilla', 'Función', 'Instancia de una clase', 'Variable global'], correctAnswer: 'Instancia de una clase' },
              { type: 'multiple-choice', question: '¿Qué hace el método `__init__`?', options: ['Destruye el objeto', 'Imprime la clase', 'Es el constructor que inicializa los atributos', 'Define el nombre de la clase'], correctAnswer: 'Es el constructor que inicializa los atributos' },
            ]
          },
          {
            id: 'l3-2',
            title: 'Pilares de la POO',
            steps: [
              { type: 'explanation', title: 'Herencia', content: 'Permite que una clase (hija) herede atributos y métodos de otra clase (padre). Fomenta la reutilización de código. Se usa `super()` para llamar a métodos de la clase padre.' },
              { type: 'explanation', title: 'Polimorfismo', content: 'Permite que objetos de diferentes clases respondan al mismo método de manera distinta. Esto hace el código más genérico y flexible.' },
              { type: 'explanation', title: 'Encapsulamiento', content: 'Oculta los detalles internos de un objeto y protege sus datos del acceso no autorizado. En Python se usan convenciones como un guion bajo `_privado`.' },
              { type: 'multiple-choice', question: 'El concepto de que una clase hija adquiera las propiedades de una clase padre se llama:', options: ['Polimorfismo', 'Encapsulamiento', 'Abstracción', 'Herencia'], correctAnswer: 'Herencia' },
            ]
          }
        ]
      },
      {
        id: 'm4',
        title: 'MÓDULO IV: Temas Avanzados y Ecosistema',
        description: 'Explora el manejo de errores, la concurrencia y el vasto ecosistema de librerías de Python.',
        lessons: [
          {
            id: 'l4-1',
            title: 'Manejo de Excepciones',
            steps: [
              { type: 'explanation', title: 'Programación Robusta', content: 'La gestión de errores es vital. El código puede fallar por muchas razones (entrada incorrecta, un archivo que no existe, etc.). Las excepciones nos permiten manejar estos errores sin que el programa se detenga.' },
              { type: 'explanation', title: 'Bloque `try...except`', content: 'Pones el código que podría fallar dentro de un bloque `try`. Si ocurre un error, el bloque `except` correspondiente se ejecuta.' },
              { type: 'explanation', title: 'Ejemplo: División por Cero', content: 'Este código maneja el error que ocurre al intentar dividir por cero.', code: 'try:\n  resultado = 10 / 0\nexcept ZeroDivisionError:\n  print("¡Error! No se puede dividir por cero.")\nfinally:\n  print("Este bloque se ejecuta siempre.")' },
              { type: 'multiple-choice', question: '¿En qué bloque se pone el código que podría generar un error?', options: ['except', 'finally', 'try', 'else'], correctAnswer: 'try' },
              { type: 'multiple-choice', question: '¿Qué bloque se ejecuta siempre, haya o no un error?', options: ['except', 'finally', 'try', 'else'], correctAnswer: 'finally' },
            ]
          },
          {
            id: 'l4-2',
            title: 'Ecosistema de Librerías',
            steps: [
              { type: 'explanation', title: 'El Poder de Python', content: 'Gran parte del poder de Python reside en su enorme ecosistema de librerías de terceros, que se instalan con `pip`.' },
              { type: 'explanation', title: 'Librerías Populares', content: '- **Pandas y NumPy**: Para análisis de datos y ciencia de datos.\n- **Matplotlib/Seaborn**: Para visualización de datos.\n- **Flask y Django**: Para desarrollo web backend.\n- **Requests**: Para hacer peticiones HTTP a APIs.' },
              { type: 'multiple-choice', question: '¿Qué librería es fundamental para el análisis y manipulación de datos en formato de tablas (DataFrames)?', options: ['Requests', 'Flask', 'Pandas', 'Matplotlib'], correctAnswer: 'Pandas' },
              { type: 'multiple-choice', question: 'Si quisieras crear una API RESTful, ¿qué librería podrías usar?', options: ['NumPy', 'Flask', 'Seaborn', 'OpenCV'], correctAnswer: 'Flask' },
            ]
          }
        ]
      }
    ]
  };

  getCourse(): Course {
    return this.course;
  }
}
