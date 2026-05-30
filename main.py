from operaciones import dicc_operaciones, es_numero
import os

def limpiar_consola():
    os.system('cls' if os.name == 'nt' else 'clear')

def crear_tabla(filas, columnas):
    tabla = []
    for i in range(filas):
        fila = []
        for j in range(columnas):
            fila.append("")
        tabla.append(fila)
    return tabla

def mostrar_tabla(tabla):
    print("    ", end="")
    for j in range(1, 11):
        print(f" {j:<3}", end="")
    print()
    for i in range(10):
        print(f"{i+1:>2}: {tabla[i]}")

def modificar_celda(tabla):
    fila = int(input("Fila (1-10): ")) - 1
    columna = int(input("Columna (1-10): ")) - 1
    valor = input("Valor: ")
    try:
        valor = float(valor)
        if valor == int(valor):
            valor = int(valor)
    except:
        pass
    tabla[fila][columna] = valor

def obtener_valor(tabla, mensaje):
    print(f"  {mensaje}")
    print("    1. Usar celda existente")
    print("    2. Ingresar numero")
    tipo = input("    Elija: ")
    if tipo == "1":
        f = int(input("      Fila (1-10): ")) - 1
        c = int(input("      Columna (1-10): ")) - 1
        return tabla[f][c]
    else:
        n = input("      Numero: ")
        try:
            n = float(n)
            if n == int(n):
                n = int(n)
        except:
            pass
        return n

def operar_celda(tabla):
    print("Celda donde se guardara el resultado:")
    fila_r = int(input("  Fila (1-10): ")) - 1
    col_r = int(input("  Columna (1-10): ")) - 1

    print("Operacion (+, -, *, /, sqrt, ^2, concat):")
    operacion = input()

    if operacion in ["sqrt", "^2"]:
        valor1 = obtener_valor(tabla, "Primer valor:")
        if not es_numero(valor1):
            resultado = "#ERROR"
        else:
            resultado = dicc_operaciones[operacion](float(valor1))
    elif operacion == "concat":
        valor1 = obtener_valor(tabla, "Primer valor:")
        valor2 = obtener_valor(tabla, "Segundo valor:")
        resultado = dicc_operaciones[operacion](str(valor1), str(valor2))
    elif operacion in dicc_operaciones:
        valor1 = obtener_valor(tabla, "Primer valor:")
        valor2 = obtener_valor(tabla, "Segundo valor:")
        if not es_numero(valor1) or not es_numero(valor2):
            resultado = "#ERROR"
        else:
            resultado = dicc_operaciones[operacion](float(valor1), float(valor2))
    else:
        print("Operacion no valida")
        return

    if type(resultado) == float:
        resultado = round(resultado, 2)

    if resultado == "#ERROR":
        print("Error: no se puede operar numero con texto")
    elif resultado == "#DIV/0!":
        print("Error: division por cero")

    tabla[fila_r][col_r] = resultado

tabla = crear_tabla(10, 10)

if __name__ == "__main__":
    while True:
        mostrar_tabla(tabla)
        print("\n=== MENU ===")
        print("1. Modificar una celda")
        print("2. Operar entre celdas")
        print("3. Salir")
        opcion = input("Elegir opcion: ")

        if opcion == "1":
            modificar_celda(tabla)
            limpiar_consola()
        elif opcion == "2":
            operar_celda(tabla)
            input("\nPresione Enter para continuar...")
            limpiar_consola()
        elif opcion == "3":
            break
