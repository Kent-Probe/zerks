export type MemberRole = "ADMIN" | "LIDER" | "COLIDER" | "CAPITAN" | "RECLUTADOR" | "MIEMBRO";

export type CaptainSpecialty = "FARMERS" | "PVP" | "BUILDER";

export interface ClanMember {
  id: string;
  discordId: string;
  username: string;
  role: MemberRole;
  captainSpecialty?: CaptainSpecialty;
  joinDate: string;
  contributions: number;
  avatar?: string;
  isNotable?: boolean;
  isFormer?: boolean;
}

export interface ClanInfo {
  name: string;
  description: string;
  foundationDate: string;
  serverIp: string;
  serverIpBedrockEdition?: string;
  discordInvite: string;
  discordContactMd?: string;
  members: ClanMember[];
  notableMembers: string[]; // IDs de miembros notables
  formerImportantMembers: string[]; // IDs de miembros que se fueron
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "construction" | "completed";
  images: string[];
  leaders: string[]; // nombre de los miembros!!
  startDate: string;
  completionDate?: string;
}

export interface Contribution {
  memberId: string;
  username: string;
  role: MemberRole;
  points: number;
  avatar?: string;
}
