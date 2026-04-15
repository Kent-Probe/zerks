# 🎮 ZERKS Clan Website

Una página web espectacular para tu clan de Minecraft. Construida con Astro, Tailwind CSS y diseño minimalista con tema rojo, naranja y negro.

## 🚀 Características

- ✨ **Hero Section** - Landing épica con animaciones fluidas
- 👥 **Información del Clan** - Detalles del clan, miembros notables y legendas
- 📊 **Jerarquía** - Árbol visual con hover (LIDER, COLIDER, CAPITAN, MIEMBRO, RECLUTADOR + ADMIN externo)
- 👨‍💼 **Miembros** - Listado masivo con scroll vertical y buscador por nombre
- 🏆 **Aportaciones** - Top 10 con podio especial para top 3
- 🏗️ **Proyectos** - Galería de construcciones completadas y en progreso
- 📱 **Responsive** - Optimizado para desktop, tablet y mobile
- 🎨 **Animaciones** - Transiciones suaves y efectos visuales Minecraft
- 💬 **Botón Flotante** - Acceso rápido al Discord
- 🔗 **Integración Discord** - Enlaces para unirse al servidor

## 📋 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.astro            # Barra de navegación
│   ├── Hero.astro              # Sección principal
│   ├── ClanInfo.astro          # Información del clan
│   ├── Hierarchy.astro         # Estructura de roles
│   ├── Members.astro           # Listado de miembros
│   ├── Contributions.astro     # Ranking de aportaciones
│   ├── Projects.astro          # Proyectos del clan
│   ├── FloatingJoinButton.astro # Botón flotante
│   └── Footer.astro            # Pie de página
├── data/
│   └── clan-data.ts            # Datos mockup del clan
├── types/
│   └── clan.ts                 # TypeScript interfaces
├── layouts/
│   └── Layout.astro            # Layout principal
├── pages/
│   └── index.astro             # Página principal
└── styles/
    └── global.css              # Estilos globales
```

## 🛠️ Instalación

```bash
# Entrar en el directorio
cd zerks

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev
```

## 🌐 Acceso

- **Desarrollo**: http://localhost:4322/
- **Servidor Minecraft**: zerks.minecraft.net
- **Discord**: https://discord.gg/zerks

## 🎨 Paleta de Colores

- **Rojo**: `#dc143c` - Elementos principales
- **Naranja**: `#ff8800` - Acentos y gradientes
- **Negro**: `#000000` - Fondo principal

## 📝 Cómo Editar los Datos

Todos los datos están en `src/data/clan-data.ts`. Puedes:

1. **Agregar miembros** - Editar el array `members`
2. **Agregar proyectos** - Editar el array `projects`
3. **Cambiar información del clan** - Modificar `clanData`

## 🔗 Sincronización con Discord (más de 100 miembros)

Sí, está integrada para importar miembros automáticamente por roles.

1. Copia `.env.example` a `.env` y rellena:
   - `DISCORD_BOT_TOKEN`
   - `DISCORD_GUILD_ID`
2. Configura el mapeo de roles en `src/data/discord-role-map.json` con los IDs de roles reales de Discord.
3. Ejecuta:

```bash
pnpm run sync:discord
```

El comando genera `src/data/discord-members.json` y la web usa esos miembros automáticamente.

## 🧞 Comandos

| Comando                 | Acción                                      |
| :---------------------- | :------------------------------------------ |
| `pnpm install`          | Instalar dependencias                       |
| `pnpm run dev`          | Inicia servidor local http://localhost:4322 |
| `pnpm run build`        | Build para producción                       |
| `pnpm run preview`      | Preview local antes de deployear            |
| `pnpm run sync:discord` | Importar miembros y roles desde Discord     |

## 📦 Dependencias

- **astro** 6.1.2 - Framework web
- **tailwindcss** 4.2.2 - Estilos CSS
- **framer-motion** 12.38.0 - Animaciones

## 🚀 Deploy

### Opciones recomendadas:

1. **Vercel** - Deploy automático
2. **Netlify** - Hosting gratuito
3. **GitHub Pages** - Hosting directo

```bash
pnpm run build
# El directorio 'dist/' está listo para subir
```

---

**Hecho con ❤️ para el Clan ZERKS**
