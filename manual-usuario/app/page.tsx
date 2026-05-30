"use client";

import { useState } from "react";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "caracteristicas", label: "Características" },
  { id: "uso", label: "Cómo Usar" },
  { id: "operaciones", label: "Operaciones" },
  { id: "errores", label: "Errores" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Hoja de Cálculo
        </span>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-slate-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-slate-300 hover:text-white transition-colors text-left py-1"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto text-sm text-green-400 font-mono">
      <code>{children}</code>
    </pre>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ErrorCard({ tipo, desc, resultado }: { tipo: string; desc: string; resultado: string }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-red-400 text-xl">⚠</span>
        <h3 className="text-lg font-semibold text-white">{tipo}</h3>
      </div>
      <p className="text-slate-400 text-sm mb-3">{desc}</p>
      <span className="inline-block bg-red-950/50 text-red-400 border border-red-900/50 rounded px-3 py-1 text-sm font-mono">
        {resultado}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      {/* HERO */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-transparent to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="inline-block mb-6 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm">
            Proyecto Académico — Python
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Hoja de Cálculo
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-4">
            Una hoja de cálculo simple en Python con matriz de 10x10
          </p>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto">
            Ingresa valores numéricos y texto, realiza operaciones aritméticas y concatenaciones,
            todo desde la terminal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#caracteristicas"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition-colors"
            >
              Explorar
            </a>
            <a
              href="#uso"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-colors"
            >
              Cómo Usar
            </a>
          </div>
        </div>
      </section>

      {/* CARACTERISTICAS */}
      <section id="caracteristicas" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Características</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Un programa diseñado para ser simple pero funcional, ideal para aprender
            los fundamentos de programación en Python.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon="📊"
            title="Matriz 10×10"
            desc="Espacio de trabajo con 10 filas y 10 columnas donde puedes almacenar números y texto."
          />
          <FeatureCard
            icon="➕"
            title="Operaciones Aritméticas"
            desc="Suma, resta, multiplicación, división, raíz cuadrada y cuadrado. Resultados redondeados a 2 decimales."
          />
            <FeatureCard
                icon="🔄"
                title="Valores Combinables"
                desc="Cada operando puede ser una celda existente o un número que escribes directamente. Combina como quieras."
              />
              <FeatureCard
                icon="🔗"
                title="Concatenación de Texto"
                desc="Une dos valores de texto o combina números y texto fácilmente con la operación concat."
              />
              <FeatureCard
                icon="⚠️"
                title="Detección de Errores"
                desc="Muestra mensajes claros cuando se mezclan tipos de datos o se intenta dividir entre cero."
              />
              <FeatureCard
                icon="📋"
                title="Menú Interactivo"
                desc="Navegación simple con 3 opciones numeradas para modificar celdas, operar y salir."
          />
          <FeatureCard
            icon="🎯"
            title="Ejecutable Portable"
            desc="No requiere instalar Python. El archivo .exe funciona directamente en cualquier Windows."
          />
        </div>
      </section>

      {/* COMO USAR */}
      <section id="uso" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Usar</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Sigue estos pasos para empezar a usar la hoja de cálculo.
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                <h3 className="text-xl font-semibold">Ejecutar el programa</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Abre el archivo <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded text-xs">hoja_calculo.exe</code> o ejecuta <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded text-xs">python main.py</code> en la terminal.
              </p>
            </div>
            <div className="md:w-2/3">
              <CodeBlock>{`=== MENU ===
1. Modificar una celda
2. Operar entre celdas
3. Salir`}</CodeBlock>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                <h3 className="text-xl font-semibold">Modificar una celda</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Elige la opción 1. Ingresa la fila (1-10), columna (1-10) y el valor que deseas almacenar.
              </p>
            </div>
            <div className="md:w-2/3">
              <CodeBlock>{`Fila (1-10): 3
Columna (1-10): 6
Valor: 15`}</CodeBlock>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                <h3 className="text-xl font-semibold">Operar entre celdas</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Elige la opción 2. Cada valor puede ser una celda existente o un número que escribes.
              </p>
            </div>
            <div className="md:w-2/3">
              <CodeBlock>{`Celda destino (fila,columna): 1,1
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
    Numero: 10`}</CodeBlock>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                <h3 className="text-xl font-semibold">Visualizar la hoja</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                La hoja se muestra automáticamente al inicio y después de cada operación. Siempre ves los datos actualizados.
              </p>
            </div>
            <div className="md:w-2/3">
              <CodeBlock>{`    1   2   3   4   5   6   7   8   9  10
 1: [45.0, '', '', '', '', '', '', '', '', '']
 2: ['', 25.0, '', '', '', '', '', '', '', '']
 3: ['', '', '', 15, '', '', '', '', '', '']`}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* OPERACIONES */}
      <section id="operaciones" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Operaciones Disponibles</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Todas las operaciones que puedes realizar entre las celdas de la hoja de cálculo.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900/80">
                <th className="px-6 py-4 text-indigo-300 font-semibold text-sm">Operación</th>
                <th className="px-6 py-4 text-indigo-300 font-semibold text-sm">Símbolo</th>
                <th className="px-6 py-4 text-indigo-300 font-semibold text-sm">Descripción</th>
                <th className="px-6 py-4 text-indigo-300 font-semibold text-sm">Ejemplo</th>
                <th className="px-6 py-4 text-indigo-300 font-semibold text-sm">Resultado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="px-6 py-4 font-medium">Suma</td>
                <td className="px-6 py-4"><code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded text-sm font-mono">+</code></td>
                <td className="px-6 py-4 text-slate-400 text-sm">Suma dos valores numéricos</td>
                <td className="px-6 py-4 text-sm"><code className="text-slate-300">5 + 3</code></td>
                <td className="px-6 py-4 text-sm text-green-400">8</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="px-6 py-4 font-medium">Resta</td>
                <td className="px-6 py-4"><code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded text-sm font-mono">-</code></td>
                <td className="px-6 py-4 text-slate-400 text-sm">Resta dos valores numéricos</td>
                <td className="px-6 py-4 text-sm"><code className="text-slate-300">10 - 3</code></td>
                <td className="px-6 py-4 text-sm text-green-400">7</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="px-6 py-4 font-medium">Multiplicación</td>
                <td className="px-6 py-4"><code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded text-sm font-mono">*</code></td>
                <td className="px-6 py-4 text-slate-400 text-sm">Multiplica dos valores numéricos</td>
                <td className="px-6 py-4 text-sm"><code className="text-slate-300">4 * 3</code></td>
                <td className="px-6 py-4 text-sm text-green-400">12</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="px-6 py-4 font-medium">División</td>
                <td className="px-6 py-4"><code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded text-sm font-mono">/</code></td>
                <td className="px-6 py-4 text-slate-400 text-sm">Divide dos valores numéricos</td>
                <td className="px-6 py-4 text-sm"><code className="text-slate-300">10 / 3</code></td>
                <td className="px-6 py-4 text-sm text-green-400">3.33</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="px-6 py-4 font-medium">Raíz Cuadrada</td>
                <td className="px-6 py-4"><code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded text-sm font-mono">sqrt</code></td>
                <td className="px-6 py-4 text-slate-400 text-sm">Calcula la raíz cuadrada de un valor</td>
                <td className="px-6 py-4 text-sm"><code className="text-slate-300">sqrt(9)</code></td>
                <td className="px-6 py-4 text-sm text-green-400">3</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="px-6 py-4 font-medium">Cuadrado</td>
                <td className="px-6 py-4"><code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded text-sm font-mono">^2</code></td>
                <td className="px-6 py-4 text-slate-400 text-sm">Eleva un valor al cuadrado</td>
                <td className="px-6 py-4 text-sm"><code className="text-slate-300">4^2</code></td>
                <td className="px-6 py-4 text-sm text-green-400">16</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="px-6 py-4 font-medium">Concatenar</td>
                <td className="px-6 py-4"><code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded text-sm font-mono">concat</code></td>
                <td className="px-6 py-4 text-slate-400 text-sm">Une dos valores de texto</td>
                <td className="px-6 py-4 text-sm"><code className="text-slate-300">"Hola" + "Mundo"</code></td>
                <td className="px-6 py-4 text-sm text-green-400">HolaMundo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ERRORES */}
      <section id="errores" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Manejo de Errores</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            El programa muestra mensajes claros cuando ocurre una situación inesperada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ErrorCard
            tipo="Tipo de Dato Incorrecto"
            desc="Cuando intentas realizar una operación aritmética entre un número y un texto."
            resultado="#ERROR"
          />
          <ErrorCard
            tipo="Raíz de Número Negativo"
            desc="No existe la raíz cuadrada de un número negativo en los números reales."
            resultado="#ERROR"
          />
          <ErrorCard
            tipo="División entre Cero"
            desc="No está definida la división de un número entre cero."
            resultado="#DIV/0!"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Hoja de Cálculo
          </div>
          <p className="text-slate-500 text-sm">
            Proyecto académico — Programación en Python
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Manual de usuario interactivo construido con Next.js y Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
