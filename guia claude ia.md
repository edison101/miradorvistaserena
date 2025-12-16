# 🤖 GUÍA DEFINITIVA: CÓMO DIRIGIR A CLAUDE AI EN PROYECTOS DE SOFTWARE

## 🎯 PRINCIPIOS FUNDAMENTALES

### ❌ Errores Comunes al Dirigir AI:
1. **Comandos vagos**: "Arregla mi proyecto"
2. **Falta de contexto**: No explicar el estado actual
3. **Objetivos poco claros**: No definir qué esperamos
4. **Sin restricciones**: No establecer límites o preferencias
5. **Falta de validación**: No revisar resultados paso a paso

### ✅ Mejores Prácticas:
1. **Contexto primero**: Siempre explica QUÉ tienes y DÓNDE estás
2. **Objetivos específicos**: Define exactamente QUÉ quieres lograr  
3. **Restricciones claras**: Establece QUÉ NO debe cambiar
4. **Validación continua**: Revisa cada paso antes del siguiente
5. **Documentación constante**: Mantén historial de decisiones

---

## 🏗️ ESTRUCTURA DE COMANDOS EFECTIVOS

### Plantilla de Comando Perfecto:
```markdown
## CONTEXTO:
[Describe el estado actual del proyecto]

## PROBLEMA:
[Explica específicamente qué no funciona]

## OBJETIVO:
[Define exactamente qué quieres lograr]

## RESTRICCIONES:
[Lista qué NO debe cambiar]

## CRITERIOS DE ÉXITO:
[Cómo sabrás que funcionó]
```

### Ejemplo Práctico:
```markdown
## CONTEXTO:
Tengo un proyecto Next.js 15 con Supabase que tiene autenticación funcionando parcialmente.

## PROBLEMA:
El LoginForm.tsx tiene 15 errores TypeScript relacionados con tipos undefined en authData.user.

## OBJETIVO:
Quiero un componente LoginForm que compile sin errores y maneje login/register correctamente.

## RESTRICCIONES:
- NO cambiar la estructura de Supabase existente
- NO modificar el AuthContext existente
- Mantener compatibilidad con React 19

## CRITERIOS DE ÉXITO:
- npm run type-check pasa sin errores en LoginForm.tsx
- Login funciona en navegador
- Register funciona en navegador
- Manejo correcto de errores de auth
```

---

## 📋 COMANDOS POR FASE DE PROYECTO

### 🔍 FASE 1: ANÁLISIS Y DIAGNÓSTICO

#### Comando: Análisis Integral
```
Actúa como arquitecto de software senior con 10+ años de experiencia.

CONTEXTO: Heredé un proyecto [TIPO_PROYECTO] que está parcialmente funcionando.

TAREA: Realiza un análisis completo y crea:
1. 📊 Inventario de arquitectura actual (tecnologías, patrones, estructura)
2. 🔍 Mapa de funcionalidades (qué funciona, qué está roto)
3. 🚨 Lista priorizada de problemas críticos
4. 📈 Evaluación de deuda técnica
5. 🎯 Plan de acción con estimaciones realistas

FORMATO: Crea un documento markdown estructurado con cada sección.
ENFOQUE: Entender antes de actuar. NO hagas cambios de código aún.
```

#### Comando: Análisis de Base de Datos
```
Como DBA senior, analiza mi esquema de [TIPO_DB]:

OBJETIVO: Documentar completamente la estructura de datos actual
1. 📋 Lista todas las tablas con sus columnas y tipos
2. 🔗 Mapea todas las relaciones (FK, constraints)
3. 📏 Identifica inconsistencias de naming conventions
4. 🔍 Revisa integridad referencial y índices
5. 💡 Sugiere optimizaciones SIN hacer cambios

CRITERIO: Dame un documento que un nuevo developer pueda usar para entender los datos.
```

#### Comando: Análisis de Errores
```
Ejecuta npm run type-check y analiza los errores encontrados:

1. 📊 Agrupa errores por tipo y frecuencia
2. 🎯 Prioriza por impacto en funcionalidad crítica
3. 🔗 Identifica errores relacionados entre sí
4. 🛠️ Sugiere orden de resolución óptimo
5. ⏰ Estima esfuerzo para resolver cada grupo

RESULTADO: Lista priorizada de "quick wins" vs "complex fixes"
```

### 🎨 FASE 2: DISEÑO Y PLANIFICACIÓN

#### Comando: Diseño de Solución
```
Como arquitecto de software, diseña solución para: [PROBLEMA_ESPECÍFICO]

CONTEXTO: [Describe el contexto actual]
RESTRICCIONES: [Lista limitaciones técnicas/tiempo/recursos]

PROCESO:
1. 🎯 Analiza el problema desde múltiples ángulos
2. 💡 Propón 3 alternativas de solución diferentes
3. ⚖️ Evalúa pros/contras de cada alternativa
4. 🏆 Recomienda la mejor opción con justificación sólida
5. 📋 Crea plan de implementación paso a paso

PRINCIPIOS: SOLID, DRY, KISS, separation of concerns, testabilidad
FORMATO: Documento técnico que otro developer pueda implementar
```

#### Comando: Validación de Diseño
```
Revisa mi diseño propuesto como senior architect:

DISEÑO: [Describe tu propuesta]

EVALUACIÓN:
1. ✅ ¿Cumple principios SOLID y clean architecture?
2. 📈 ¿Es escalable para 10x más usuarios/datos?
3. 🔧 ¿Es mantenible por un equipo junior?
4. 🚨 ¿Maneja errores y edge cases correctamente?
5. 🔗 ¿Tiene puntos únicos de falla?
6. 📚 ¿Está suficientemente documentado?

ENFOQUE: Sé crítico pero constructivo. Sugiere mejoras concretas.
```

### 🏗️ FASE 3: IMPLEMENTACIÓN

#### Comando: Construcción de Componente Core
```
Como senior full-stack developer, implementa [COMPONENTE]:

ESPECIFICACIÓN: [Describe exactamente qué debe hacer]
CONTEXTO TÉCNICO: [Stack, patrones existentes, convenciones del proyecto]

IMPLEMENTACIÓN:
1. 🏗️ Sigue clean architecture y principios SOLID
2. 🛡️ Incluye manejo de errores robusto y logging
3. 🧪 Escribe tests unitarios con casos edge
4. 📝 Documenta la API/interfaz del componente
5. ⚡ Optimiza para performance desde el inicio

CALIDAD ANTES QUE VELOCIDAD. Prefiero código bien hecho que código rápido.
```

#### Comando: Refactoring Seguro
```
Refactoriza [COMPONENTE/SERVICIO] siguiendo estos principios:

OBJETIVO: [Describe el estado objetivo]
RESTRICCIONES: [Qué no debe cambiar]

METODOLOGÍA:
1. 🔍 Analiza el código actual y identifica problemas
2. 🧪 Crea tests para funcionalidad existente ANTES de cambiar
3. 🔄 Refactoriza incrementalmente manteniendo tests verdes
4. ✅ Valida que funcionalidad no se rompió
5. 📚 Actualiza documentación

REGLA DE ORO: Si no hay tests, créalos antes de refactorizar.
```

### 🧪 FASE 4: TESTING Y VALIDACIÓN

#### Comando: Estrategia de Testing
```
Como QA architect, crea estrategia completa de testing para [FUNCIONALIDAD]:

COBERTURA REQUERIDA:
1. 🧪 Unit tests para lógica de negocio crítica
2. 🔗 Integration tests para APIs y servicios externos
3. 🎭 E2E tests para flujos de usuario principales
4. ⚡ Performance tests para endpoints críticos
5. 🔒 Security tests para vulnerabilidades comunes

CRITERIOS:
- Priorizar por RIESGO e IMPACTO en el negocio
- Tests deben ser mantenibles y confiables
- Fallos deben ser informativos y actionables
```

#### Comando: Debugging Sistemático
```
Ayúdame a debuggear [PROBLEMA] siguiendo metodología sistemática:

SÍNTOMAS: [Describe exactamente qué observas]
CONTEXTO: [Cuándo ocurre, pasos para reproducir]

PROCESO:
1. 🔍 Reproduce el problema de manera consistente
2. 🕵️ Aísla variables (network, data, browser, etc.)
3. 📊 Recolecta datos (logs, network requests, state)
4. 💡 Formula hipótesis basada en evidencia
5. 🧪 Prueba hipótesis sistemáticamente
6. 🎯 Identifica root cause, no solo síntomas

OBJETIVO: Entender el WHY, no solo el WHAT.
```

---

## 🎯 COMANDOS ESPECÍFICOS POR TECNOLOGÍA

### Next.js + React
```
"Implementa [FEATURE] en Next.js 15 siguiendo App Router patterns:
- Usa Server/Client Components apropiadamente
- Implementa loading.tsx y error.tsx
- Optimiza con lazy loading donde corresponde
- Mantén SEO y performance en mente"
```

### Supabase + Database
```
"Configura [FEATURE] en Supabase con RLS apropiado:
- Diseña políticas de Row Level Security granulares
- Crea migraciones versionadas correctamente
- Implementa backup de datos críticos
- Considera performance de queries complejas"
```

### TypeScript
```
"Refactoriza [CÓDIGO] para TypeScript estricto:
- Elimina todos los 'any' types
- Usa interfaces para contratos claros
- Implementa proper error handling con tipos
- Mantén type safety end-to-end"
```

---

## 💡 COMANDOS PARA SITUACIONES ESPECÍFICAS

### 🚨 Crisis Mode: "El proyecto no compila"
```
EMERGENCIA: Mi proyecto no compila y necesito recuperar funcionalidad ASAP.

PRIORIDADES:
1. 🏥 TRIAGE: Lista errores por criticidad (bloquean build vs warnings)
2. 🎯 QUICK WINS: Identifica fixes de 5 minutos que desbloquean
3. 🔧 CRITICAL PATH: Qué mínimo necesito para funcionalidad básica
4. 📋 PLAN B: Rollback strategy si no podemos avanzar

RESTRICCIÓN: Solo cambios mínimos y seguros. Evitar refactoring grande.
```

### 🔄 Mantenimiento: "Limpiar deuda técnica"
```
Analiza deuda técnica en el proyecto y prioriza improvements:

ANÁLISIS:
1. 📊 Code quality metrics (complejidad, duplicación, coverage)
2. 🏗️ Architectural issues (tight coupling, missing patterns)
3. 📚 Documentation gaps (APIs, setup, troubleshooting)
4. 🧪 Testing gaps (unit, integration, e2e)
5. ⚡ Performance bottlenecks (queries, renders, bundles)

PRIORIZACIÓN: ROI = (Business Impact × Developer Velocity) / Effort
```

### 🚀 Scaling: "Preparar para crecimiento"
```
Prepara [FUNCIONALIDAD] para escalar 10x:

DIMENSIONES DE ESCALA:
1. 👥 Users: Más usuarios concurrentes
2. 📊 Data: Mayor volumen de datos
3. 🌐 Geographic: Múltiples regiones
4. 🔧 Features: Mayor complejidad funcional
5. 👨‍💻 Team: Más developers trabajando

ESTRATEGIAS: Caching, CDN, database optimization, code splitting, monitoring
```

---

## 🔄 MANEJO DE ITERACIONES CON CLAUDE

### Flujo de Trabajo Recomendado:

#### 1. Session Start:
```
"Claude, este es el estado actual de mi proyecto: [RESUMEN]
Últimos cambios realizados: [LISTA]
Objetivo de esta sesión: [OBJETIVO_ESPECÍFICO]
Restricciones para hoy: [LIMITACIONES]"
```

#### 2. Durante el Trabajo:
```
"Pausa. Antes de continuar:
- ¿El cambio anterior funcionó correctamente?
- ¿Hay errores nuevos introducidos?
- ¿Necesitamos ajustar el plan?"
```

#### 3. Session End:
```
"Documenta lo realizado en esta sesión:
1. ✅ Cambios completados exitosamente
2. ⚠️ Problemas encontrados y cómo se resolvieron
3. 📋 Tareas pendientes para próxima sesión
4. 🎯 Prioridades para continuar
5. 💡 Lessons learned o insights importantes"
```

### Manejo de Errores con Claude:
```
"Error encontrado: [DESCRIPCIÓN]

Necesito que:
1. 🔍 Analices el error systematically
2. 💡 Propongas 2-3 soluciones alternativas
3. ⚖️ Evalúes pros/contras de cada solución
4. 🎯 Recomiende la mejor opción
5. 🧪 Implementes con rollback plan

Si no estás 100% seguro, di 'necesito más información' antes de actuar."
```

---

## 📚 MANTENIMIENTO DE CONTEXTO

### CLAUDE.md - Template:
```markdown
# PROYECTO: [NOMBRE]

## Estado Actual (Última actualización: [FECHA])
- ✅ Funcionalidades operativas: [LISTA]
- ❌ Problemas conocidos: [LISTA]
- 🚧 En desarrollo: [LISTA]

## Arquitectura
- **Frontend**: [TECH_STACK]
- **Backend**: [TECH_STACK]
- **Database**: [ESQUEMA_RESUMEN]
- **Deploy**: [ESTRATEGIA]

## Comandos Importantes
```bash
npm run dev          # Desarrollo local
npm run build        # Build producción
npm run type-check   # Validar TypeScript
npm run test         # Ejecutar tests
```

## Patterns y Convenciones
- **Naming**: [CONVENCIÓN]
- **Structure**: [ORGANIZACIÓN]
- **State Management**: [ESTRATEGIA]

## Contactos y Resources
- **Repo**: [URL]
- **Deploy**: [URL]
- **Docs**: [URL]

## Decisiones Técnicas Importantes
### [FECHA] - [DECISIÓN]
**Context**: [CONTEXT]
**Decision**: [DECISION]
**Rationale**: [WHY]
**Consequences**: [TRADE-OFFS]
```

---

## 🎯 COMANDOS ANTI-PATRÓN (EVITAR)

### ❌ Comandos Vagos:
```
"Arregla mi proyecto"
"Haz que funcione"
"Optimiza todo"
"Mejora el código"
```

### ❌ Sin Contexto:
```
"Implementa login"
"Agrega una base de datos"
"Crea un API"
```

### ❌ Objetivos Poco Claros:
```
"Haz algo con los productos"
"Mejora la UI"
"Arregla los bugs"
```

### ❌ Sin Restricciones:
```
"Usa cualquier tecnología"
"Cambia lo que sea necesario"
"No hay limitaciones"
```

---

## 🏆 COMANDOS MAESTROS (USAR FRECUENTEMENTE)

### 🔍 El Analizador:
```
"Antes de hacer cualquier cambio, analiza completamente [ÁREA] y documenta:
1. Estado actual y funcionalidad existente
2. Problemas identificados con evidencia
3. Dependencies y implications de cambios
4. Riesgos potenciales y mitigation strategies
5. Plan paso a paso con rollback options"
```

### 🎯 El Implementador:
```
"Implementa [FEATURE] siguiendo esta metodología:
1. Tests first: Crea tests que definan el comportamiento esperado
2. Interface first: Define APIs/contracts antes que implementación
3. Core first: Implementa lógica de negocio antes que UI
4. Validate early: Testing y validation en cada step
5. Document: Explica decisiones técnicas importantes"
```

### 🔧 El Debugger:
```
"Problema: [DESCRIPCIÓN]
Usa debugging sistemático:
1. Reproduce de manera consistente
2. Aísla variables una por una
3. Recolecta evidencia (logs, network, state)
4. Formula hipótesis basada en datos
5. Valida hipótesis metódicamente
6. Encuentra root cause, no síntomas"
```

### 📚 El Documentador:
```
"Documenta [CAMBIO/DECISIÓN] para el futuro:
1. Context: Por qué era necesario este cambio
2. Options: Qué alternativas consideramos
3. Decision: Qué decidimos hacer y por qué
4. Implementation: Cómo lo implementamos
5. Consequences: Trade-offs y future implications
6. Usage: Cómo usar/mantener lo implementado"
```

---

## 🎯 CONCLUSIÓN: LAS 10 REGLAS DE ORO

1. **Contexto primero**: Siempre explica la situación actual antes de pedir cambios
2. **Objetivos específicos**: Define exactamente qué quieres lograr
3. **Un cambio a la vez**: No mezcles múltiples modificaciones en una tarea  
4. **Valida cada paso**: Revisa que cada cambio funciona antes del siguiente
5. **Documenta decisiones**: Mantén registro de por qué hiciste cada cambio
6. **Tests como red de seguridad**: Crea tests antes de refactorizar
7. **Rollback plan siempre**: Ten plan B si algo sale mal
8. **Comunicación clara**: Usa comandos específicos, no vagos
9. **Iteración consciente**: Cada sesión debe tener objetivo claro
10. **Aprendizaje continuo**: Documenta lessons learned para evitar repetir errores

---

*Recuerda: Claude es extremadamente capaz, pero necesita dirección clara. Un arquitecto exitoso no es quien sabe todas las respuestas, sino quien hace las preguntas correctas.* 🚀