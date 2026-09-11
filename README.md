# 🎮 El Mundo de Snoopy

**Life-sim sandbox chill game** con NPCs autónomos, mundo persistente y gameplay emergente.

## 📋 Stack

- **React Native** + **Expo**
- **TypeScript** (strict mode)
- **Arquitectura modular** basada en eventos
- **Persistencia real** entre sesiones
- **Simulación independiente** de UI

## 🏗️ Arquitectura

### Core Systems
- `GameWorld` - Orquestador principal
- `WorldState` - Estado global
- `WorldClock` - Tiempo y estaciones
- `WorldEventBus` - Sistema de eventos

### NPCs & Intelligence
- `NPCRegistry` - Registro de personajes
- `NPCBrain` - Personalidad y estado
- `NPCDecisionService` - Decisiones emergentes
- `NPCScheduler` - Rutinas flexibles
- `NPCPerception` - Percepción del mundo

### Social Systems
- `ConversationManager` - Gestión de diálogos
- `DialogueService` - Generación contextual
- `RelationshipService` - Dinámicas sociales
- `MemoryService` - Memoria persistente
- `KnowledgeService` - Conocimiento individual

### World Systems
- `MapService` - Mapa del mundo
- `NavigationService` - Navegación táctil
- `PathfindingService` - Pathfinding
- `WeatherService` - Sistema climático
- `SeasonService` - Estaciones

### Creative & Inventory
- `DrawingService` - Sistema de dibujo
- `WritingService` - Sistema de escritura
- `GiftService` - Creación de regalos
- `InventoryService` - Inventario
- `ObjectPersistenceService` - Objetos persistentes

## 🎯 Principios

✅ Mundo autónomo que funciona sin el jugador
✅ Memoria completa y persistente
✅ NPC con personalidad emergente
✅ Chat libre sin respuestas prefabricadas
✅ Objetos físicos permanentes (dibujos, regalos)
✅ Chismes y transmisión de conocimiento
✅ Sin misiones, energía ni barras visibles
✅ Gameplay chill y exploración

## 📦 Instalación

```bash
npm install
npm start
```

## 🧪 Testing

```bash
npm run type-check
npm run lint
npm test
```

## 📝 Licencia

Peanuts © Charles M. Schulz
