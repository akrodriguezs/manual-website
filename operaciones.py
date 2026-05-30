def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "#DIV/0!"
    return a / b

def raiz_cuadrada(a):
    if a < 0:
        return "#ERROR"
    return a ** 0.5

def cuadrado(a):
    return a ** 2

def concatenar(a, b):
    return str(a) + str(b)

def es_numero(valor):
    try:
        float(valor)
        return True
    except:
        return False

dicc_operaciones = {
    "+": suma,
    "-": resta,
    "*": multiplicar,
    "/": dividir,
    "sqrt": raiz_cuadrada,
    "^2": cuadrado,
    "concat": concatenar
}
