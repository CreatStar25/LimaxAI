---
title: "DeepSeek V4: Contexto de 1M de Tokens, Reducción de Costos del 73%"
description: "Los modelos de la serie DeepSeek V4 se lanzaron oficialmente, admiten un contexto de 1 millón de tokens, con una reducción del 73% en los costos de inferencia en comparación con la generación anterior. Incluye versiones Pro y Flash, brindando opciones de modelos grandes de alto rendimiento y rentables para desarrolladores de IA."
tags: ["deepseek v4", "sitio web oficial de deepseek", "tutorial de deepseek", "precio de deepseek v4"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "es"
author: "DeepSeek HK"
---

Palabras clave: deepseek v4, sitio web oficial de deepseek, tutorial de deepseek, precio de deepseek v4

Fecha de publicación: 24 de abril de 2026

Autor: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/es/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Empezar a usar DeepSeek
  </a>
</div>

![DeepSeek V4: Contexto de 1M de Tokens, Reducción de Costos del 73%](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Hoy, DeepSeek anunció oficialmente el lanzamiento y la apertura del código de la versión de vista previa de la serie DeepSeek-V4, el sistema de modelo insignia de próxima generación que sigue a V3.2. Este lanzamiento incluye dos modelos: DeepSeek-V4-Pro y DeepSeek-V4-Flash, ambos adoptan la arquitectura MoE con escalas de parámetros totales de 1,6T (49B activados) y 284B (13B activados) respectivamente, y ambos admiten un máximo de 1 millón de tokens de contexto.

DeepSeek también declaró oficialmente que, limitado por la potencia de cálculo de gama alta, el rendimiento del servicio actual de DeepSeek-V4-Pro es muy limitado. Se espera que después del lanzamiento masivo de los supernodos Ascend 950 en el segundo semestre del año, su precio se reduzca significativamente. Además, DeepSeek-V4 recibió soporte de adaptación Day 0 de Cambricon, y el código de adaptación relevante se ha abierto a la comunidad de GitHub.

## Diferencias en el Posicionamiento de los Modelos
DeepSeek-V4-Pro se centra en el límite de rendimiento, tomando como referencia los modelos insignia de código cerrado; mientras que DeepSeek-V4-Flash reduce significativamente la escala de parámetros y la escala de activación a cambio de una latencia menor y un costo menor. En comparación con el modelo de generación anterior, ha mejorado aún más en capacidades de agente, conocimiento mundial y tareas de razonamiento complejas, y por primera vez, el "contexto de 1 millón de tokens" se abre como una capacidad predeterminada.

### Capacidades de Agente Mejoradas Significativamente
En términos de capacidades de agente, las capacidades de agente de DeepSeek-V4-Pro se han mejorado significativamente. Ha entrado en el primer nivel de código abierto en evaluaciones como Codificación Agéntica. Las evaluaciones internas muestran que su calidad de entrega es cercana al modo no pensante de Claude Opus 4.6, pero todavía hay una brecha en comparación con su modo pensante.

DeepSeek-V4-Pro ha superado a los modelos de código abierto actualmente evaluados públicamente en tareas de alta dificultad como matemáticas, STEM y código de competición, y su rendimiento general es cercano o incluso comparable a los principales modelos de código cerrado como GPT-5.4 y Claude Opus 4.6-Max.

### Reducción Significativa del Costo de Contexto Largo
Al mismo tiempo, DeepSeek-V4 ha introducido un conjunto de optimizaciones más radicales en la eficiencia de contexto largo: en escenarios de 1 millón de tokens, el cálculo de inferencia por token es solo el 27% de V3.2, y el uso de caché KV se reduce a aproximadamente el 10%, reduciendo significativamente los costos de potencia de cálculo y memoria de vídeo de las tareas de enlaces largos.

## Plan de Precios de API
El precio de API anunciado oficialmente para la serie DeepSeek-V4:
- DeepSeek-V4-Pro: 1 yuan / millón de tokens para entrada en caché, 12 yuan / millón de tokens para entrada sin caché, 24 yuan / millón de tokens para salida
- DeepSeek-V4-Flash: solo 0,2 yuan / millón de tokens para entrada en caché, 1 yuan / millón de tokens para entrada sin caché, 2 yuan / millón de tokens para salida

Actualmente, la serie DeepSeek-V4 se ha lanzado en el sitio web oficial y la aplicación, y las API y los pesos de los modelos se abren simultáneamente.

## Experiencia Práctica: Mejora Integral de Capacidades
Experimentamos inicialmente los cambios de DeepSeek-V4, probando principalmente el modelo DeepSeek-V4-Pro.

### Capacidad de Programación Agéntica Mejorada Significativamente
En el caso de desarrollo web frontend de una sola vez, DeepSeek-V4-Pro mostró una alta eficiencia de ejecución. Dado que los requisitos no eran complejos, el modelo solo tardó 5 segundos en pensar, y luego desarrolló rápidamente, lo que difiere significativamente del patrón de modelos DeepSeek anteriores que desperdician muchos tokens en el pensamiento. Después de entrar en el proceso de generación real, la longitud de salida de DeepSeek-V4-Pro es significativamente más larga que la de otros modelos DeepSeek, con una velocidad de generación rápida, básicamente saliendo en unidades de 5 líneas de código, y el grado de finalización de la página web es mayor que el de DeepSeek-V3.2, con un diseño más rico.

En la prueba de tareas que combina capacidades de agente y programación, DeepSeek-V4-Pro puede realizar llamadas de herramientas complejas de varias rondas, y el número de entradas de búsqueda en línea también ha aumentado en comparación con modelos anteriores, y la recopilación de información es más completa. El plan de viaje generado final está planificado razonablemente, y está equipado con la ubicación de cada atracción turística, que se puede usar directamente en la aplicación de navegación después de hacer clic, lo que es muy conveniente. En las tareas de agente, se puede observar que sus acciones son muy decididas, las llamadas de herramientas y el pensamiento se resuelven en pocos segundos, y la eficiencia de tokens es buena.

### Prueba Práctica de Contexto de 1M de Tokens
Los modelos de la serie DeepSeek-V4 admiten un contexto de 1 millón de tokens. Subimos la trilogía completa de "Los tres cuerpos" (aproximadamente 540.000 tokens en total) para probar, y el modelo puede localizar rápidamente el contenido especificado, logrando con éxito la recuperación de información en textos ultralargos.

La prueba de fecha de corte de conocimiento muestra que la fecha de corte de conocimiento de DeepSeek-V4-Pro todavía está en 2025. Además, este modelo no admite capacidades visuales por el momento. Después de cargar imágenes, seguirá realizando extracción de texto, y las imágenes sin texto mostrarán que no se pueden procesar.

## Innovación de la Arquitectura Técnica
El cambio más directo de esta generación V4 es que el "contexto largo" se ha convertido en una capacidad predeterminada. A diferencia de la forma tradicional de simplemente expandir la ventana, DeepSeek-V4-Pro introduce una nueva arquitectura de atención híbrida, combinando Atención Dispersa Comprimida con Atención de Alta Compresión (HCA), y cooperando con la atención dispersa DSA para comprimir en la dimensión de tokens.

Además, el modelo introduce una hiperconexión restringida por variedad (mHC) para mejorar las conexiones residuales tradicionales, y usa el optimizador Muon para mejorar la velocidad de convergencia y la estabilidad del entrenamiento. Esta serie de diseños permite al modelo controlar efectivamente el costo de cálculo mientras "recuerda por más tiempo".

Según datos oficiales, en un contexto de 1 millón de tokens, los TFLOP de inferencia por token de DeepSeek-V4-Pro se redujeron aproximadamente entre 3,7 y 9,8 veces en comparación con DeepSeek-V3.2, y el uso de caché KV se redujo entre 9,5 y 13,7 veces. Esto significa que las tareas de enlaces ultralargos que eran difíciles de ejecutar realmente en el pasado (como la planificación de agentes de varias rondas, el procesamiento de documentos largos) han comenzado a entrar en el rango ejecutable.

## Rendimiento: Nuevo Techo para los Modelos de Código Abierto
Desde la perspectiva de la estructura de capacidades, la mejora de DeepSeek-V4-Pro es la mejora simultánea de las capacidades de razonamiento, conocimiento y agente:

### Capacidades de Conocimiento y Razonamiento
En tareas de conocimiento y razonamiento, supera a los modelos de código abierto convencionales actuales en evaluaciones como SimpleQA, Apex y Codeforces, y se acerca a GPT-5.4 y Gemini 3.1 Pro en muchas tareas. Por ejemplo, obtuvo 90,2 puntos en la Lista Corta de Apex, ya superando a los principales modelos de código cerrado; también mantiene el nivel de primer nivel en tareas de competición como Codeforces.

### Capacidades de Agente
En tareas relacionadas con la capacidad de agente, DeepSeek-V4-Pro funciona de manera estable en indicadores como SWE Verified y Terminal Bench. SWE Verified alcanza 80,6, cerca de Claude Opus 4.6, significativamente más alto que la mayoría de los modelos de código abierto. En Terminal Bench 2.0, su rendimiento también supera a modelos como GLM-5.1 Thinking y Kimi K2.6 Thinking.

En general, DeepSeek-V4-Pro es actualmente el "techo" de los modelos de código abierto.

## Optimización Especial para Escenarios de Agente
Esta generación de DeepSeek-V4 fortalece significativamente la adaptación a escenarios de agente. Ha realizado optimizaciones especiales para marcos de agente convencionales como Claude Code, OpenClaw y CodeBuddy, y funciona de manera más estable en tareas de varios pasos como generación de código y generación de documentos.

Desde el punto de vista del posicionamiento práctico, DeepSeek-V4-Pro ya se usa como modelo de codificación agéntica dentro de DeepSeek, centrándose en "completar tareas". Para tareas simples, V4-Flash ya está cerca de la versión Pro, pero todavía hay una brecha significativa en tareas complejas, lo que esencialmente proporciona dos "marchas de potencia de cálculo" para aplicaciones de agente.

## Conclusión
El lanzamiento de DeepSeek-V4 no solo demuestra la acumulación del equipo en tecnología y arquitectura, sino que también marca la capacidad de implementación real de los modelos grandes de código abierto bajo el ecosistema de potencia de cálculo nacional. Después de la adaptación y optimización para chips nacionales como Huawei Ascend y Cambricon, la serie DeepSeek-V4 ha logrado soporte estable e inferencia eficiente para un contexto de 1 millón de tokens, haciendo posible las tareas de enlaces largos y la ejecución de agentes de varios pasos.

Esta versión implementa el posicionamiento diferente de Pro y Flash, acercándose a los modelos insignia de código cerrado en rendimiento, y manteniendo una alta rentabilidad en costos, brindando opciones abiertas sin precedentes para los desarrolladores nacionales. Más importantly, este lanzamiento muestra que los modelos de código abierto no solo pueden establecerse firmemente en la competencia global, sino que también pueden transformar el potencial técnico en productividad práctica con la ayuda de la potencia de cálculo nacional y la arquitectura optimizada.

DeepSeek-V4 podría ser un paso clave dado por la fuerza de código abierto de China en la pista de IA de alto rendimiento, y también proporciona una guía clara para la innovación e implementación del ecosistema de IA nacional.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/es/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Empezar a usar DeepSeek
  </a>
</div>
