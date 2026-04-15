import type { ClanInfo, ClanMember, MemberRole, Project } from "../types/clan";
import discordMembers from "./discord-members.json";

const membersNotables = ["691638128678666310", "1215450133978685483"];

const defaultMembers: ClanMember[] = [
  // ADMIN
  {
    id: "0",
    discordId: "123456789",
    username: "kent_voyager",
    role: "ADMIN",
    joinDate: "2023-06-15",
    contributions: 1500,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AdminZerks",
  },
];

const roleOrder: MemberRole[] = ["LIDER", "COLIDER", "ADMIN", "CAPITAN", "RECLUTADOR", "MIEMBRO"];
const isKnownRole = (value: string): value is MemberRole => roleOrder.includes(value as MemberRole);

const syncedMembers: ClanMember[] = (discordMembers as Partial<ClanMember>[]).flatMap((member, index) => {
  if (!member.discordId || !member.username || !member.role || !isKnownRole(member.role)) {
    return [];
  }

  return [
    {
      id: member.id ?? `dc-${member.discordId}-${index}`,
      discordId: member.discordId,
      username: member.username,
      role: member.role,
      captainSpecialty: member.captainSpecialty,
      joinDate: member.joinDate ?? new Date().toISOString().slice(0, 10),
      contributions: member.contributions ?? 0,
      avatar: member.avatar,
      isNotable: membersNotables.includes(member.discordId),
      isFormer: false,
    },
  ];
});

const members = syncedMembers.length > 0 ? syncedMembers : defaultMembers;

export const clanData: ClanInfo = {
  name: "ZERKS",
  description:
    "Somo el clan top 5 clanes mas fuertes de Dioses MC. Un clan fuerte lleno de gente buena onda, con proyectos grandes y un futuro prometedor.",
  foundationDate: "2026-02-01",
  serverIp: "mc.diosesmc.net",
  serverIpBedrockEdition: "bedrock.diosesmc.net",
  discordInvite: "https://discord.gg/Cszc5CtcGu",
  discordContactMd: "https://discord.com/users/123456789012345678",
  members,
};

export const projects: Project[] = [
  {
    id: "1",
    name: "HubZerks",
    description: "Nuestro spawn, guia importante para nuevos miembros.",
    status: "completed",
    images: ["proyects/hubzerks/hubzerks2.webp", "proyects/hubzerks/hubzerks.webp"],
    leaders: ["262314793271164932"],
    startDate: "2026-02-01",
    completionDate: "2026-04-14",
  },
  {
    id: "2",
    name: "Coliseo ZERKS",
    description: "Un coliseo para eventos PvP, minijuegos y practica.",
    status: "construction",
    leaders: ["1374438008949833873"],
    images: [
      "proyects/coliseo/coliseo.webp",
      "proyects/coliseo/coliseo1.webp",
      "proyects/coliseo/coliseo3.webp",
      "proyects/coliseo/coliseo4.webp",
    ],
    startDate: "2026-04-05",
  },
  {
    id: "3",
    name: "Granja de zanahorias ZERKS",
    description: "Una granja especializada en la producción de zanahorias para el clan.",
    status: "construction",
    leaders: ["382506551652384769"],
    images: ["proyects/zanahorias/zanahorias1.webp"],
    startDate: "2026-05-01",
  },
  {
    id: "4",
    name: "pwarp de ZERKS",
    description: "Un punto de teletransporte con granjas, spawners y uso general para el server y el clan.",
    status: "construction",
    leaders: ["382506551652384769", "1215450133978685483"],
    images: [
      "proyects/pwarp/pwarpzerks1.webp",
      "proyects/pwarp/pwarpzerks.webp",
      "proyects/pwarp/pwarpzerks2.webp",
      "proyects/pwarp/pwarpzerks3.webp",
    ],
    startDate: "2026-04-07",
  },
  {
    id: "5",
    name: "Almacén de recursos masivo de ZERKS",
    description: "Un almacén gigante para guardar todos los recursos del clan de forma organizada.",
    status: "construction",
    leaders: ["1284579718183653419"],
    images: [],
    startDate: "2026-05-10",
  },
  {
    id: "6",
    name: "Traiding hall de ZERKS",
    description: "Un lugar para hacer trading con aldeanos, con varias estaciones de trabajo y granjas de experiencia.",
    status: "construction",
    leaders: ["1284579718183653419"],
    images: ["proyects/traidinghall1/traidinghall1.webp", "proyects/traidinghall1/traidinghall12.webp"],
    startDate: "2026-05-15",
  },
];

/* 
GUIA PARA AGREGAR PROYECTOS:

1. Crea un nuevo objeto de proyecto siguiendo la estructura del tipo `Project`.
2. Asegúrate de que cada proyecto tenga un ID único.
3. Agrega el nuevo proyecto al array `projects` exportado.
Ejemplo de nuevo proyecto:
{
  id: "2",
  name: "Nueva Construcción",
  description: "Descripción de la nueva construcción.",
  status: "construction",
  images: ["https://placehold.co/800x600"],
  leaders: ["ID_DEL_LIDER"],
  startDate: "2026-05-01",
}
Ejemplo de proyecto completado:
{
  id: "3",
  name: "Construcción Completada",
  description: "Descripción de la construcción completada.",
  status: "completed",
  images: ["https://placehold.co/800x600"],
  leaders: ["ID_DEL_LIDER"],
  startDate: "2026-02-01",
  completionDate: "2026-04-14",
}
*/
