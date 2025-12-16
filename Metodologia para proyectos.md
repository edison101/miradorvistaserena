# 🏗️ METODOLOGÍA DE ARQUITECTO DE SOFTWARE & INGENIERO FULL STACK

## 📋 ÍNDICE
1. [Por qué fallamos (y cómo evitarlo)](#por-qué-fallamos)
2. [Flujo de trabajo del arquitecto](#flujo-de-trabajo)
3. [Construcción paso a paso](#construcción-paso-a-paso)
4. [Comandos para Claude AI](#comandos-para-claude)
5. [Checklist de calidad](#checklist-de-calidad)

---

## 🚨 POR QUÉ FALLAMOS (Y CÓMO EVITARLO)

### ❌ ERRORES COMUNES QUE COMETIMOS:
1. **Construir sin mapear** - No documentamos la arquitectura existente
2. **Asumir en lugar de verificar** - Creamos interfaces sin revisar la BD real
3. **Parchar sin entender** - Agregamos capas sin entender el problema raíz
4. **Trabajar sin tests** - No validamos cada componente antes de integrar
5. **Mezclar concerns** - Mezclamos lógica de autenticación con UI

### ✅ PRINCIPIOS DE ARQUITECTO:
- **"Medir dos veces, cortar una vez"** - Analizar antes de codificar
- **"Failing fast"** - Detectar problemas temprano
- **"Single source of truth"** - Una fuente de verdad por concern
- **"Separation of concerns"** - Cada módulo una responsabilidad
- **"Documentation-driven development"** - La documentación guía el código

---

## 🎯 FLUJO DE TRABAJO DEL ARQUITECTO

### FASE 1: DISCOVERY & MAPPING (25% del tiempo)
```
📊 ANÁLISIS → 📋 DOCUMENTACIÓN → 🎯 PLAN
```

#### 1.1 Mapeo de la Arquitectura Existente
- [ ] **Diagrama de BD** - Todas las tablas y relaciones
- [ ] **Mapa de servicios** - APIs, microservicios, integraciones
- [ ] **Inventario de componentes** - UI components, hooks, utilities
- [ ] **Flujos de datos** - Cómo viajan los datos en la app
- [ ] **Puntos de dolor** - Dónde está fallando el sistema

#### 1.2 Análisis de Stakeholders
- [ ] **Requerimientos de negocio** - ¿Qué necesita el usuario?
- [ ] **Restricciones técnicas** - ¿Qué no podemos cambiar?
- [ ] **Presupuesto de tiempo** - ¿Cuánto tiempo tenemos?
- [ ] **Nivel de riesgo** - ¿Qué puede fallar?

### FASE 2: DISEÑO & ARQUITECTURA (20% del tiempo)
```
🎨 DISEÑO → 📐 VALIDACIÓN → 📝 ESPECIFICACIÓN
```

#### 2.1 Diseño de la Solución
- [ ] **Arquitectura de alto nivel** - Componentes principales
- [ ] **Contratos de API** - Interfaces entre componentes
- [ ] **Modelos de datos** - Estructuras y relaciones
- [ ] **Patrones de diseño** - Singleton, Repository, Factory, etc.

#### 2.2 Validación del Diseño
- [ ] **Review con equipo** - ¿Todos entienden el plan?
- [ ] **Proof of concept** - ¿La solución técnica funciona?
- [ ] **Estimación de esfuerzo** - ¿Es realista el timeline?

### FASE 3: CONSTRUCCIÓN ITERATIVA (45% del tiempo)
```
🧱 CORE → 🔌 INTEGRACIÓN → 🧪 TESTING → 🚀 DEPLOY
```

#### 3.1 Construcción por Capas (Bottom-Up)
```
1. 📊 CAPA DE DATOS     (Models, DB, APIs)
2. 🔧 CAPA DE LÓGICA    (Services, Business Logic)
3. 🎨 CAPA DE UI        (Components, Views)
4. 🔗 CAPA DE FLUJO     (Navigation, State Management)
```

#### 3.2 Testing en Cada Capa
- [ ] **Unit tests** - Cada función/método
- [ ] **Integration tests** - Entre componentes
- [ ] **E2E tests** - Flujos completos de usuario
- [ ] **Performance tests** - Carga y stress

### FASE 4: OPTIMIZACIÓN & DOCUMENTACIÓN (10% del tiempo)
```
⚡ OPTIMIZACIÓN → 📚 DOCUMENTACIÓN → 🔄 HANDOFF
```

---

## 🏗️ CONSTRUCCIÓN PASO A PASO

### 1️⃣ FOUNDATION FIRST (Base Sólida)
**Orden de construcción:**

#### A) DATABASE & MODELS
```bash
# 1. Diseñar esquema de BD
# 2. Crear migraciones
# 3. Seed data de prueba
# 4. Definir models/interfaces
```

#### B) CORE SERVICES 
```bash
# 1. Autenticación (sin UI)
# 2. CRUD básico (sin UI)
# 3. Validaciones de negocio
# 4. Manejo de errores
```

#### C) API LAYER
```bash
# 1. Endpoints básicos
# 2. Middleware de auth
# 3. Validaciones de input
# 4. Documentación API
```

### 2️⃣ LOGIC LAYER (Lógica de Negocio)
```bash
# 1. Business rules
# 2. State management
# 3. Data transformation
# 4. Integration services
```

### 3️⃣ UI LAYER (Interfaz de Usuario)
```bash
# 1. Design system (componentes base)
# 2. Layouts y navegación
# 3. Formularios y validaciones
# 4. Estados de loading/error
```

### 4️⃣ INTEGRATION (Integración Total)
```bash
# 1. Conectar UI con lógica
# 2. Testing de flujos completos
# 3. Optimización de performance
# 4. Error handling global
```

---

## 🤖 COMANDOS PARA CLAUDE AI

### 📊 COMANDOS DE ANÁLISIS
```
COMANDO: "Analiza mi arquitectura actual"
PROMPT: "Actúa como arquitecto de software senior. Analiza mi proyecto y crea:
1. Diagrama de la arquitectura actual
2. Inventario de componentes existentes  
3. Identificación de puntos de dolor
4. Recomendaciones de mejora
5. Plan de acción priorizado

Enfócate en entender QUÉ TENGO antes de sugerir QUÉ CAMBIAR."
```

```
COMANDO: "Mapea mi base de datos"
PROMPT: "Como DBA senior, analiza mi esquema de Supabase:
1. Lista todas las tablas y sus relaciones
2. Identifica inconsistencias en naming
3. Revisa integridad referencial
4. Sugiere optimizaciones de índices
5. Documenta el modelo de datos actual

NO hagas cambios, solo documenta lo existente."
```

### 🎯 COMANDOS DE DISEÑO
```
COMANDO: "Diseña solución para [PROBLEMA]"
PROMPT: "Como arquitecto de software, diseña una solución para [PROBLEMA]:
1. Analiza el problema desde múltiples ángulos
2. Propón 3 alternativas de solución
3. Evalúa pros/contras de cada opción
4. Recomienda la mejor opción con justificación
5. Crea plan de implementación detallado

Principios: SOLID, DRY, KISS, separation of concerns."
```

```
COMANDO: "Revisa mi diseño"
PROMPT: "Como senior architect, revisa mi diseño y evalúa:
1. ¿Cumple con principios SOLID?
2. ¿Es escalable y mantenible?
3. ¿Maneja errores correctamente?
4. ¿Tiene puntos únicos de falla?
5. ¿Está bien documentado?

Sé crítico pero constructivo."
```

### 🏗️ COMANDOS DE CONSTRUCCIÓN
```
COMANDO: "Construye componente core"
PROMPT: "Como senior developer, construye [COMPONENTE]:
1. Sigue los principios de clean architecture
2. Incluye manejo de errores robusto
3. Agrega logging y debugging
4. Escribe tests unitarios
5. Documenta la API del componente

Enfócate en CALIDAD sobre velocidad."
```

```
COMANDO: "Implementa capa de [TIPO]"
PROMPT: "Implementa la capa de [DATOS/LÓGICA/UI]:
1. Usa patrones de diseño apropiados
2. Mantén separation of concerns
3. Incluye validaciones necesarias
4. Agrega tests de integración
5. Optimiza para performance

Construye para el FUTURO, no solo para ahora."
```

### 🧪 COMANDOS DE TESTING
```
COMANDO: "Crea strategy de testing"
PROMPT: "Como QA architect, crea estrategia de testing:
1. Unit tests para lógica crítica
2. Integration tests para APIs
3. E2E tests para flujos principales
4. Performance tests para carga
5. Security tests para vulnerabilidades

Prioriza por RIESGO e IMPACTO."
```

### 🚀 COMANDOS DE DEPLOYMENT
```
COMANDO: "Planifica deployment"
PROMPT: "Como DevOps engineer, planifica deployment:
1. Estrategia de release (blue/green, canary, etc.)
2. Scripts de migración de BD
3. Rollback procedures
4. Monitoring y alertas
5. Documentación de operaciones

Planifica para el PEOR escenario."
```

---

## ✅ CHECKLIST DE CALIDAD

### 🏗️ ARQUITECTURA
- [ ] **Separación clara de responsabilidades** por capa
- [ ] **Interfaces bien definidas** entre componentes
- [ ] **Patrones de diseño consistentes** en todo el proyecto
- [ ] **Manejo de errores centralizado** y robusto
- [ ] **Logging y monitoreo** implementado

### 🔒 SEGURIDAD
- [ ] **Autenticación robusta** implementada
- [ ] **Autorización granular** por recursos
- [ ] **Validación de inputs** en todas las capas
- [ ] **Sanitización de datos** para prevenir XSS/SQL injection
- [ ] **HTTPS y encriptación** en tránsito y reposo

### ⚡ PERFORMANCE
- [ ] **Lazy loading** implementado donde corresponde
- [ ] **Caching estratégico** de datos frecuentes
- [ ] **Optimización de queries** de BD
- [ ] **Compresión de assets** y optimización de imágenes
- [ ] **CDN configurado** para recursos estáticos

### 🧪 TESTING
- [ ] **Coverage de tests >80%** en lógica crítica
- [ ] **Tests automatizados** en CI/CD pipeline
- [ ] **Tests E2E** para flujos principales
- [ ] **Tests de performance** para APIs críticas
- [ ] **Tests de seguridad** automatizados

### 📚 DOCUMENTACIÓN
- [ ] **README completo** con setup instructions
- [ ] **API documentation** actualizada
- [ ] **Architecture decision records** (ADRs)
- [ ] **Runbooks** para operaciones
- [ ] **Troubleshooting guides** para problemas comunes

---

## 🎯 METODOLOGÍA ESPECÍFICA PARA PROYECTOS COMO AZABACHE

### PASO 1: DISCOVERY (Día 1)
```bash
1. git clone [proyecto]
2. Ejecutar "Analiza mi arquitectura actual" con Claude
3. Crear ARCHITECTURE.md con findings
4. Identificar 3 problemas principales
5. Priorizar por impacto/esfuerzo
```

### PASO 2: FOUNDATION (Días 2-3)
```bash
1. Mapear BD completa con "Mapea mi base de datos"
2. Crear servicios core sin UI
3. Implementar autenticación robusta
4. Testing de servicios individuales
5. Documentar APIs creadas
```

### PASO 3: INTEGRATION (Días 4-5)
```bash
1. Conectar servicios con UI existente
2. Implementar state management
3. Testing de flujos E2E
4. Performance optimization
5. Error handling global
```

### PASO 4: POLISH (Día 6)
```bash
1. Code review completo
2. Documentación final
3. Deployment checklist
4. Handoff documentation
5. Post-mortem y lessons learned
```

---

## 🚀 COMANDOS PARA CLAUDE - PROYECTO AZABACHE

### Para evitar errores futuros:
```
COMANDO INICIAL:
"Actúa como arquitecto senior. Antes de tocar cualquier código:
1. Mapea TODA la arquitectura existente
2. Documenta TODAS las tablas de Supabase
3. Lista TODOS los servicios y hooks actuales
4. Identifica TODOS los flujos de datos
5. Crea plan de mejoras SIN romper lo existente

NUNCA cambies código sin entender completamente el sistema actual."
```

```
COMANDO DE CONSTRUCCIÓN:
"Construye [FEATURE] siguiendo estos principios:
1. USA lo que ya existe antes de crear nuevo
2. EXTIENDE servicios existentes antes de reemplazar
3. TESTEA cada componente individualmente
4. DOCUMENTA cada decisión técnica
5. MANTÉN backward compatibility

Siempre pregunta antes de hacer cambios disruptivos."
```

---

## 📝 CONCLUSIÓN

### El secreto de un arquitecto exitoso:
1. **ENTENDER antes de actuar**
2. **PLANIFICAR antes de codificar**  
3. **TESTEAR antes de integrar**
4. **DOCUMENTAR antes de entregar**
5. **ITERAR basado en feedback**

### Regla de oro:
> **"Mejor una solución simple que funciona, que una solución compleja que falla"**

---

*Este documento debe ser la base para cualquier proyecto de software. Imprímelo, pégalo en la pared, y síguelo religiosamente.* 🙏

---

## 🎯 PLAN INMEDIATO PARA AZABACHE

### DIAGNÓSTICO ACTUAL:
- ✅ Proyecto funcional base (Next.js + Supabase)
- ❌ 95 errores TypeScript críticos
- ❌ Login perdió funcionalidad
- ❌ Productos no cargan correctamente
- ❌ 15+ archivos temporales sin organizar

### PLAN DE RECUPERACIÓN - 4 SPRINTS

#### 🧹 SPRINT 1: LIMPIEZA (1-2 días)
```bash
# OBJETIVO: Proyecto limpio y compilable
1. Eliminar archivos temporales (test-*, *.sql sueltos)
2. Consolidar AuthProviders duplicados
3. Resolver top 20 errores TypeScript
4. Ejecutar npm run build exitosamente
```

#### 🔐 SPRINT 2: AUTENTICACIÓN (2-3 días)  
```bash
# OBJETIVO: Login/Register funcionando 100%
1. Un solo AuthProvider en todo el proyecto
2. Configurar Supabase RLS correctamente
3. Testing manual de login/register/logout
4. Manejo de errores robusto
```

#### 📦 SPRINT 3: PRODUCTOS (3-4 días)
```bash
# OBJETIVO: CRUD productos completo
1. Unificar tipos Product en todo el proyecto
2. Service único para productos con fallback
3. UI funcional para listar/crear/editar productos
4. Testing E2E de flujo productos
```

#### 🧪 SPRINT 4: INTEGRACIÓN (2-3 días)
```bash
# OBJETIVO: Sistema estable y documentado
1. Testing completo de todos los flujos
2. Performance optimization básica
3. Documentación actualizada (CLAUDE.md)
4. Plan para futuras funcionalidades
```

### COMANDOS ESPECÍFICOS PARA CLAUDE:

#### Para el Sprint 1:
```
"Analiza los 95 errores TypeScript y agrúpalos por tipo de error. Prioriza los 20 más críticos que impiden compilar"

"Identifica todos los archivos temporales que puedo eliminar sin afectar funcionalidad core"

"Encuentra todas las implementaciones de AuthProvider y consolida en una sola"
```

#### Para el Sprint 2:
```
"Implementa un AuthProvider único que maneje login/register/logout usando Supabase Auth"

"Revisa y corrige la configuración de RLS en Supabase para el modelo multitenant"

"Crea tests básicos para verificar que autenticación funciona correctamente"
```

#### Para el Sprint 3:
```
"Unifica todos los tipos Product en el proyecto para eliminar inconsistencias"

"Crea un ProductService único que maneje CRUD con fallback a datos mock"

"Implementa UI funcional para gestión de productos siguiendo patrones existentes"
```

#### Para el Sprint 4:
```
"Ejecuta testing completo y reporta cualquier funcionalidad rota"

"Optimiza performance básica (lazy loading, caching, etc.)"

"Actualiza documentación del proyecto incluyendo arquitectura actual"
```

---

## 🚀 PRÓXIMO PASO INMEDIATO

**Para recuperar tu proyecto:**
```
1. "Claude, ejecuta npm run type-check y lista los 20 errores más críticos"
2. "Claude, identifica archivos temporales que puedo eliminar sin riesgo"  
3. "Claude, crea plan detallado para consolidar AuthProviders duplicados"
```

**Después de cada sprint, siempre:**
- ✅ Commit los cambios
- ✅ Ejecutar npm run build
- ✅ Testing manual básico
- ✅ Actualizar documentación

---

*Recuerda: Un arquitecto exitoso construye sistemas que otros pueden entender y mantener. La claridad es más importante que la cleverness.* 💪