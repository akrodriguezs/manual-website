# Hoja de Cálculo en Python

Una hoja de cálculo simple desarrollada en Python que permite manejar una matriz de 10×10 celdas con soporte para valores numéricos, texto y fórmulas aritméticas.

## Características

- **Matriz de 10×10** — Espacio de trabajo con 10 filas y 10 columnas.
- **Valores numéricos y de texto** — Cada celda puede almacenar números o texto.
- **Fórmulas aritméticas** — Suma, resta, multiplicación, división, raíz cuadrada y cuadrado.
- **Concatenación de texto** — Une dos palabras o valores de texto.
- **Valores combinables** — Cada operando puede ser una celda existente o un número ingresado manualmente.
- **Detección de errores** — Muestra `#ERROR` al mezclar números con texto, y `#DIV/0!` al dividir entre cero.

## Estructura del Proyecto

```
proyecto-hoja-calculo/
├── main.py              # Programa principal con menú interactivo
├── operaciones.py       # Módulo con las operaciones matemáticas y de texto
├── README.md            # Documentación del proyecto
├── manual-usuario/      # Manual de usuario (sitio web)
└── dist/
    └── hoja_calculo.exe # Ejecutable (Windows)
```

## Requisitos

- Python 3.10 o superior
- No requiere librerías externas

## Cómo Ejecutar

### Desde el código fuente
```bash
python main.py
```

### Desde el ejecutable
Ejecutar `hoja_calculo.exe` (no requiere Python instalado).

## Cómo Crear el Ejecutable

Si querés generar el `.exe` desde el código fuente:

```bash
pip install pyinstaller
pyinstaller --onefile --name hoja_calculo --distpath dist --workpath build main.py
```

El ejecutable se crea en `dist/hoja_calculo.exe`. No necesita Python para ejecutarse.

## Uso

Al iniciar el programa se muestra la hoja de cálculo y un menú con 3 opciones:

```
    1   2   3   4   5   6   7   8   9  10
 1: ['', '', '', '', '', '', '', '', '', '']
 2: ['', '', '', '', '', '', '', '', '', '']
 ...

=== MENU ===
1. Modificar una celda
2. Operar entre celdas
3. Salir
```

### Opción 1: Modificar una celda
Permite ingresar un valor (número o texto) en una celda específica.
```
Fila (1-10): 3
Columna (1-10): 6
Valor: 15
```

### Opción 2: Operar entre celdas
Aplica una operación y guarda el resultado en una celda. Cada valor puede ser:
- **1. Usar celda existente** — Toma el valor de una celda de la hoja.
- **2. Ingresar número** — Escribes el número directamente.

```
Celda destino (fila,columna): 1,1
Operacion (+, -, *, /, sqrt, ^2, concat): +

Primer valor:
  1. Usar celda existente
  2. Ingresar numero
  Elija: 1
    Fila (1-10): 3
    Columna (1-10): 6

Segundo valor:
  1. Usar celda existente
  2. Ingresar numero
  Elija: 2
    Numero: 10
```

Operaciones disponibles:
- `+` — Suma
- `-` — Resta
- `*` — Multiplicación
- `/` — División
- `sqrt` — Raíz cuadrada (solo 1 valor)
- `^2` — Cuadrado (solo 1 valor)
- `concat` — Concatenación

### Opción 3: Salir
Finaliza la ejecución del programa.

## Manejo de Errores

| Situación | Resultado |
|-----------|-----------|
| Operación aritmética entre número y texto | `#ERROR` |
| Raíz cuadrada de número negativo | `#ERROR` |
| División entre cero | `#DIV/0!` |
| Operación no válida | Mensaje indicando que no existe |

## Autor
Proyecto académico — Programación en Python
