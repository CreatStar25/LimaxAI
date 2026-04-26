---
title: "Tras 15 Meses de Espera, DeepSeek Finalmente Presenta la Vista Previa de V4: Análisis Completo"
description: "DeepSeek V4 Preview se lanza oficialmente, con dos modelos MoE (Pro y Flash) con soporte nativo para contexto de 1 millón de tokens, ofreciendo mejoras significativas de rendimiento mientras reduce drásticamente los costos de inferencia. Este artículo proporciona un desglose detallado de la arquitectura técnica, el rendimiento y los precios de DeepSeek V4."
tags: ["deepseek v4", "sitio oficial de deepseek", "tutorial de deepseek", "precio de deepseek v4"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "es"
author: "DeepSeek HK"
---

Este artículo explora las características técnicas, el rendimiento y las guías de uso de DeepSeek V4, proporcionando un análisis completo de las ventajas centrales de este nuevo modelo de lenguaje de gran tamaño. El contenido está escrito en un estilo accesible adecuado tanto para entusiastas de la tecnología como para desarrolladores.

Palabras clave: deepseek v4, sitio oficial de deepseek, tutorial de deepseek, precio de deepseek v4.

Fecha de publicación: 25 de abril de 2026
Autor: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/es/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Comenzar a Usar DeepSeek
  </a>
</div>

![Análisis Completo de DeepSeek V4 Preview](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. Lanzamiento Oficial de DeepSeek V4 Preview

El 24 de abril, DeepSeek anunció oficialmente el lanzamiento de V4 Preview. Esta actualización importante llega 15 meses después del lanzamiento de V3.2, marcando otro avance importante en la hoja de ruta tecnológica de modelos grandes de DeepSeek.

Según la introducción oficial, la serie V4 incluye dos modelos MoE:
- **DeepSeek-V4-Pro**: 1,6T parámetros totales, 49B parámetros activados
- **DeepSeek-V4-Flash**: 284B parámetros totales, 13B parámetros activados

Ambos modelos admiten nativamente un contexto de 1 millón de tokens, representando un salto cualitativo en las capacidades de procesamiento de textos largos. Cabe destacar que, bajo la configuración de contexto de 1M:
- Los FLOPs de inferencia por token de V4-Pro son solo el 27% de los de V3.2, con KV Cache en solo el 10%
- V4-Flash es aún más extremo, reduciendo estas métricas al 10% y 7% respectivamente

Esto significa que, aunque la longitud del contexto se ha expandido casi 8 veces de los 128K de V3.2 a los 1M de V4, los requisitos computacionales por token han disminuido significativamente, logrando avances tanto en la capacidad de contexto largo como en la eficiencia de inferencia.

Los funcionarios de DeepSeek indican claramente que V4 Preview está posicionado como una actualización de infraestructura, reconstruyendo principalmente la estructura de costos del contexto largo para allanar el camino para la siguiente etapa de escalado de tiempo de prueba y tareas de largo alcance. Su nivel de capacidad actual aún está por detrás de GPT-5.4 y Gemini-3.1-Pro, con una trayectoria de desarrollo aproximadamente 3-6 meses por detrás de los modelos de código cerrado de vanguardia.

## 2. Dos Modelos, Tres Modos de Inferencia: Características Centrales de V4

### 2.1 Parámetros del Modelo y Ventajas de Costo

El mayor destacado de la serie V4 es la optimización significativa de la curva de costos. Bajo la configuración de contexto de 1M tokens:
- V4-Pro: Los FLOPs de inferencia por token son solo el 27% de los de V3.2, KV Cache solo el 10%
- V4-Flash: Los FLOPs de inferencia por token son solo el 10% de los de V3.2, KV Cache solo el 7%

Esta mejora de eficiencia reduce drásticamente el costo de inferencia para contextos de nivel millón, proporcionando una solución económicamente viable para el procesamiento de textos largos, análisis de documentos y otros escenarios.

### 2.2 Sistema de Precios de la API

DeepSeek continúa su estrategia de precios consistente de alto valor:
- **V4-Pro**: ¥1 por millón de tokens de entrada (acierto de caché) o ¥12 (fallo de caché), ¥24 por millón de tokens de salida
- **V4-Flash**: ¥0,2 por millón de tokens de entrada (acierto de caché) o ¥1 (fallo de caché), ¥2 por millón de tokens de salida

### 2.3 Tres Niveles de Intensidad de Inferencia

Cada modelo ofrece tres modos de inferencia para satisfacer diferentes requisitos de escenario:
1. **Non-think**: Modo de salida directa, velocidad de respuesta más rápida
2. **Think High**: Modo de pensamiento profundo regular, equilibrando velocidad y calidad
3. **Think Max**: Inyecta instrucciones fuertes, maximiza la longitud del contexto y la salida, desata las capacidades completas del modelo

El modo Max mejora significativamente el rendimiento del modelo: las puntuaciones de V4-Pro-Max aumentan de 34,5 a 37,7 en pruebas HLE, y de 85,5 a 90,2 en pruebas Apex Shortlist, a costa de duplicar el número de tokens de salida.

## 3. Rendimiento en Pruebas de Referencia

Según los datos de prueba oficiales publicados por DeepSeek, la serie V4 se desempeña excelentemente en múltiples evaluaciones:

### 3.1 Pruebas de Conocimiento y Razonamiento
- DeepSeek-V4-Pro-Max ocupa el primer lugar en Apex Shortlist (90,2%) y Codeforces (Rating 3206), dos tareas de razonamiento/programación de núcleo duro, demostrando capacidades extremadamente fuertes de lógica y algoritmos
- Gemini-3.1-Pro-High lidera en SimpleQA Verified (75,6%)
- Claude y GPT tienen sus respectivas fortalezas en diferentes proyectos, con pequeñas brechas generales

### 3.2 Pruebas de Capacidad de Agente
- Los cuatro modelos se desempeñan por igual en tareas SWE Verified (todos alcanzando el 80,6%)
- DeepSeek destaca en Terminal Bench 2.0 (67,9%) y Toolathlon (51,8%), demostrando ventajas claras en escenarios de ejecución de instrucciones complejas y llamadas a herramientas

Los funcionarios indican que las capacidades de Agente de DeepSeek-V4-Pro han mejorado significativamente en comparación con generaciones anteriores, "ofreciendo una mejor experiencia de usuario que Sonnet 4.5, con calidad de entrega cercana al modo no-thinking de Opus 4.6, aunque aún rezagado en cierta medida detrás del modo thinking de Opus 4.6."

### 3.3 Conocimiento Mundial y Capacidades Generales
- V4-Pro supera significativamente a otros modelos de código abierto en evaluaciones de conocimiento mundial, solo ligeramente por detrás del modelo de código cerrado líder Gemini-Pro-3.1
- En matemáticas, STEM y evaluaciones de código competitivo, V4-Pro supera a todos los modelos de código abierto actualmente evaluados públicamente, alcanzando el nivel de los modelos de código cerrado más avanzados del mundo
- Como modelo económico, V4-Flash tiene una reserva de conocimiento ligeramente menor que la versión Pro, pero capacidades de razonamiento similares. Con parámetros y valores de activación más pequeños, proporciona servicios de API más rápidos y rentables
- En evaluaciones de Agente, V4-Flash se desempeña comparativamente a la versión Pro en tareas simples, pero aún tiene brechas en tareas de alta dificultad

## 4. Innovación Tecnológica Central: Reescribir el Mecanismo de Atención

El cambio técnico más central de V4 está en la capa de atención, resolviendo fundamentalmente el problema de eficiencia de la inferencia de contexto largo.

En los mecanismos de atención Transformer tradicionales, cada token necesita calcular la similitud con todos los tokens anteriores. Cuando el contexto se expande de 100K a 1M, el costo computacional aumenta 100 veces, lo cual es el cuello de botella central que impide que el contexto largo sea ampliamente adoptado.

V4 adopta un mecanismo de atención dual innovador con capas alternadas:
1. **CSA (Compressed Sparse Attention)**: Primero fusiona el caché KV por cada 4 tokens en un solo resumen, luego permite que cada consulta solo seleccione los top-k resúmenes más relevantes para el cálculo de atención, comprimiendo tanto el contenido a procesar como enfocándose solo en la información relevante
2. **HCA (Heavy Compressed Attention)**: Utiliza una compresión más agresiva, fusionando cada 128 tokens en un resumen, luego aplica atención densa en los resúmenes restantes sin selección dispersa

Los dos mecanismos de atención se alternan y apilan, combinados con una rama de ventana deslizante que maneja dependencias de detalle entre tokens cercanos, formando un enfoque combinado de "grano grueso + grano fino, disperso + denso".

Desde la perspectiva de la evolución tecnológica, DeepSeek V2 y V3 siguieron principalmente la ruta de parametrización dispersa (grandes parámetros totales pero activando solo expertos parciales por token). V4 abre un nuevo camino de dispersión de contexto (compresión KV, selección top-k, tasas de compresión por capas) sobre esta base. Esta es la primera vez que DeepSeek aplica el concepto de "dispersión" a la estructura central de Transformer.

Además de la capa de atención, V4 tiene otras dos mejoras arquitectónicas importantes:
1. Actualiza las conexiones residuales tradicionales a mHC (Manifold Constrained Hyperconnection), haciendo que la propagación hacia adelante y hacia atrás de redes profundas sea más estable a través de restricciones matemáticas
2. Reemplaza AdamW con el optimizador Muon para la mayoría de los módulos, logrando una convergencia más rápida y un entrenamiento más estable

Esta es la primera vez que DeepSeek modifica simultáneamente tres componentes centrales de Transformer: atención, conexiones residuales y optimizador.

## 5. Innovación en el Paradigma de Post-Entrenamiento: Destilación de Modelos Expertos

En comparación con los cambios arquitectónicos, la innovación de V4 en métodos de post-entrenamiento es aún más notable.

V3.2 utilizó un enfoque de "RL mixto", optimizando múltiples objetivos simultáneamente con aprendizaje por refuerzo. V4 adopta una estrategia de dos pasos de "diferenciar luego unificar":
1. **Fase de Diferenciación**: Para diferentes dominios como matemáticas, código, Agente y seguimiento de instrucciones, entrena un modelo experto separado para cada dominio. Estos expertos primero se someten a ajuste fino supervisado con datos de dominio de alta calidad, luego aprendizaje por refuerzo con el algoritmo GRPO, cada experto logrando un rendimiento óptimo en su dominio especializado
2. **Fase de Unificación**: Utiliza el método On-Policy Distillation (OPD) para "sintetizar" más de diez expertos de dominio de vuelta en un modelo estudiante unificado. Después de que el estudiante genera una respuesta, coincide con la distribución de salida del experto que "mejor entiende este problema", absorbiendo capacidades de expertos a través de la alineación a nivel de logits

Este enfoque puede entenderse como destilar las capacidades de múltiples "mejores estudiantes" de dominio en un solo modelo. Para resolver el desafío de ingeniería de cargar simultáneamente más de diez modelos de profesores de billones de parámetros, DeepSeek descarga todos los pesos de profesores al almacenamiento distribuido, almacenando en caché solo el estado oculto de la última capa de cada profesor. Durante el entrenamiento, las muestras se ordenan por índice de profesor, asegurando que solo una cabeza de profesor resida en la memoria GPU en cualquier momento.

Este enfoque evita el problema de interferencia de capacidades común en el "RL mixto" tradicional, permitiendo que el modelo logre un rendimiento de nivel superior en múltiples dominios.

## 6. Optimización Especial de Capacidades de Agente

DeepSeek V4 incluye adaptaciones y optimizaciones especializadas para productos de Agente principales, con un rendimiento mejorado en tareas de código, generación de documentos y otros escenarios.

Las optimizaciones especiales de V4 para capacidades de Agente incluyen:
1. Durante el post-entrenamiento, Agente se trata como una dirección experta independiente junto con matemáticas y código, con entrenamiento separado
2. El formato de llamada a herramientas cambia de JSON a estructura XML con tokens especiales, reduciendo las tasas de error de escape
3. Las trazas de razonamiento entre turnos se conservan completamente en escenarios de llamada a herramientas, ya no se borran cada turno como en V3.2
4. Plataforma de sandbox DSec propia, con un solo clúster capaz de gestionar concurrentemente cientos de miles de instancias de sandbox, apoyando el entrenamiento y evaluación de aprendizaje por refuerzo de Agente

Los funcionales indican que las capacidades de Agente de V4-Pro "son mejores que Sonnet 4.5, con calidad de entrega cercana al modo no-thinking de Opus 4.5, aunque aún rezagado en cierta medida detrás del modo thinking de Opus 4.6."

![Arquitectura Técnica de DeepSeek V4](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## Resumen

DeepSeek V4 Preview es un modelo grande con innovaciones tecnológicas sobresalientes. A través de la reconstrucción del mecanismo de atención y la innovación del paradigma de entrenamiento, mantiene fuertes capacidades de razonamiento mientras reduce drásticamente los costos de inferencia de contexto largo, allanando el camino para aplicaciones prácticas de contexto de nivel millón.

Ya sea para escenarios profesionales que requieren fuertes capacidades de razonamiento o aplicaciones a gran escala que buscan rentabilidad, la serie V4 proporciona opciones adecuadas. Si desea experimentar las poderosas capacidades de DeepSeek V4, le damos la bienvenida a usarlo directamente a través de nuestra plataforma.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/es/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Comenzar a Usar DeepSeek
  </a>
</div>
