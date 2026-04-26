---
title: "DeepSeek V4 lanzado oficialmente, precios de API oficiales anunciados"
description: "Los modelos de la serie DeepSeek V4 se han lanzado oficialmente, con precios de API oficiales completos anunciados. Incluyen las versiones Pro y Flash, admiten un contexto ultralargo de 1 millón de tokens y brindan servicios de modelos grandes de alto rendimiento y rentables para los desarrolladores."
tags: ["deepseek v4", "sitio web oficial de deepseek", "tutorial de deepseek", "precio de deepseek v4"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png"
lang: "es"
author: "DeepSeek HK"
---

Palabras clave: deepseek v4, sitio web oficial de deepseek, tutorial de deepseek, precio de deepseek v4

Fecha de publicación: 25 de abril de 2026

Autor: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/es/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Empieza a usar DeepSeek
  </a>
</div>

![DeepSeek V4 lanzado oficialmente, precios de API oficiales anunciados](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png)

Hoy, DeepSeek anunció oficialmente el plan de precios de API para los nuevos modelos de la serie V4, lo que marca el lanzamiento comercial oficial de este modelo grande de próxima generación muy esperado para los desarrolladores de todo el mundo. La serie DeepSeek V4 incluye dos versiones: Flash y Pro, ambas admiten un contexto ultralargo de 1 millón de tokens. Mientras que el rendimiento ha mejorado considerablemente, la rentabilidad también se ha optimizado, ofreciendo una opción más competitiva para el desarrollo de aplicaciones de IA.

## Descripción del modelo y precios
Los precios de la API de DeepSeek se calculan por millón de tokens. Un token es la unidad de texto más pequeña reconocida por el modelo, que puede ser una palabra, un número o incluso un signo de puntuación. Las tarifas se calculan según el número total de tokens de entrada y salida procesados realmente por el modelo.

### Comparación detallada de parámetros del modelo
| Característica | deepseek-v4-flash* | deepseek-v4-pro |
|---------|---------------------|------------------|
| URL base (formato OpenAI) | https://api.deepseek.com | https://api.deepseek.com |
| URL base (formato Anthropic) | https://api.deepseek.com/anthropic | https://api.deepseek.com/anthropic |
| Versión del modelo | DeepSeek-V4-Flash | DeepSeek-V4-Pro |
| Modo de pensamiento | Admite tanto el modo sin pensamiento como el modo de pensamiento (predeterminado). Consulta el modo de pensamiento para obtener instrucciones de cambio | Admite tanto el modo sin pensamiento como el modo de pensamiento (predeterminado). Consulta el modo de pensamiento para obtener instrucciones de cambio |
| Longitud de contexto | 1 millón | 1 millón |
| Longitud máxima de salida | Hasta 384.000 | Hasta 384.000 |
| Salida JSON | ✓ | ✓ |
| Llamadas a herramientas | ✓ | ✓ |
| Finalización de prefijo de chat (Beta) | ✓ | ✓ |
| Finalización FIM (Beta) | Solo modo sin pensamiento | Solo modo sin pensamiento |
| 1 millón de tokens de entrada (acierto de caché) | 0,028 $ | 0,145 $ |
| 1 millón de tokens de entrada (fallo de caché) | 0,14 $ | 1,74 $ |
| 1 millón de tokens de salida | 0,28 $ | 3,48 $ |

* Nota: Los nombres de los modelos "deepseek-chat" y "deepseek-reasoner" se eliminarán gradualmente en el futuro. Por compatibilidad, estos dos nombres corresponden actualmente al modo sin pensamiento y al modo de pensamiento de "deepseek-v4-flash" respectivamente.

## Reglas de deducción de tarifas
Importe de consumo real = uso de tokens × precio unitario correspondiente. Las tarifas se deducirán directamente de tu saldo de recarga o saldo de regalo. Cuando existan ambos saldos, el sistema priorizará el uso del saldo de regalo.

Los precios de los productos pueden ajustarse según las condiciones del mercado, y DeepSeek se reserva el derecho final de ajuste de precios. Se recomienda a los desarrolladores que recarguen según sus necesidades de uso real y revisen periódicamente la página de precios oficial para obtener la información más reciente.

## Análisis de ventajas básicas
Mientras mantiene un alto rendimiento, la serie DeepSeek V4 aplica una estrategia de precios extremadamente competitiva, que es especialmente adecuada para diversos escenarios de aplicaciones de IA:

### Opción de potencia de cálculo rentable
La versión deepseek-v4-flash ofrece un rendimiento excelente a un precio extremadamente bajo, especialmente adecuada para escenarios con alto rendimiento y altos requisitos de velocidad de respuesta, como servicio de atención al cliente inteligente, generación de contenido, aplicaciones de chat regulares, etc. Su precio de solo 0,028 $ por millón de tokens de entrada en caso de acierto de caché reduce considerablemente los costos operativos de las aplicaciones a gran escala.

### Experiencia de rendimiento insignia
La versión deepseek-v4-pro está optimizada para tareas de razonamiento complejas y de ámbito profesional, y tiene un mejor rendimiento en escenarios como cálculos matemáticos, generación de código, preguntas de conocimiento profesional, adecuada para escenarios de aplicaciones profesionales que requieren salidas de alta precisión.

### Soporte de contexto ultralargo
Ambas versiones admiten un contexto ultralargo de 1 millón de tokens y una longitud máxima de salida de 384.000 tokens, y pueden manejar tareas de texto de gran tamaño como libros completos, documentos largos y código de proyecto completo, proporcionando una base sólida para el desarrollo de aplicaciones de IA complejas.

## Guía de inicio rápido
Empezar a usar DeepSeek V4 es muy sencillo:
1. Visita el sitio web oficial de DeepSeek para registrar una cuenta
2. Obtén la clave API
3. Realiza llamadas a la interfaz según la documentación oficial
4. Empieza a construir tu aplicación de IA

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/es/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Empieza a usar DeepSeek
  </a>
</div>

El lanzamiento de DeepSeek V4 ofrece más opciones a los desarrolladores. Tanto si eres un desarrollador individual como una aplicación de nivel empresarial, podrás encontrar una solución de potencia de cálculo adaptada a tus necesidades en este sistema de modelos. Con la mejora continua del ecosistema de modelos, creemos que DeepSeek V4 se convertirá en una piedra angular importante para el desarrollo de aplicaciones de IA, promoviendo el nacimiento de más productos innovadores.
