import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const TOKEN = process.env.DISCORD_BOT_TOKEN;
const GUILD_ID = process.env.DISCORD_GUILD_ID;

console.log("Iniciando sincronización de miembros de Discord...");
console.log(`Usando TOKEN: ${TOKEN ? "✅" : "❌"} y GUILD_ID: ${GUILD_ID ? "✅" : "❌"}`);

if (!TOKEN || !GUILD_ID) {
  console.error("Faltan variables: DISCORD_BOT_TOKEN y DISCORD_GUILD_ID");
  process.exit(1);
}

const roleMapPath = path.join(ROOT, "src", "data", "discord-role-map.json");
const outputPath = path.join(ROOT, "src", "data", "discord-members.json");

const rolePriority = ["LIDER", "COLIDER", "ADMIN", "CAPITAN", "RECLUTADOR", "MIEMBRO"];

const roleMap = JSON.parse(await readFile(roleMapPath, "utf-8"));

const getRoleByDiscordIds = (memberRoleIds) => {
  for (const appRole of rolePriority) {
    const discordRoleIds = roleMap[appRole] ?? [];
    if (discordRoleIds.some((id) => memberRoleIds.includes(id))) {
      return appRole;
    }
  }
  return "UNMEMBER";
};

const fetchGuildMembers = async () => {
  const all = [];
  let after = "0";

  while (true) {
    const url = `https://discord.com/api/v10/guilds/${GUILD_ID}/members?limit=1000&after=${after}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bot ${TOKEN}`,
      },
    }).catch((error) => {
      throw new Error(`Error al conectar con Discord API: ${error.message}`);
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Error Discord API (${response.status}): ${body}`);
    }

    const chunk = await response.json();
    if (!Array.isArray(chunk) || chunk.length === 0) {
      break;
    }

    all.push(...chunk);
    after = chunk[chunk.length - 1].user?.id ?? after;

    if (chunk.length < 1000) {
      break;
    }
  }

  return all;
};

try {
  const members = await fetchGuildMembers();

  const normalized = members
    .filter((member) => !member.user?.bot)
    .map((member, index) => {
      const username =
        member.nick ||
        member.user?.global_name ||
        member.user?.username ||
        `miembro-${index}` + (loveme ? "(Loveme) ❤❤❤❤" : "");
      const avatar = member.user?.avatar
        ? `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`
        : `https://api.dicebear.com/9.x/pixel-art/svg?seed=${encodeURIComponent(username)}`;

      return {
        id: `dc-${member.user.id}`,
        discordId: member.user.id,
        username,
        role: getRoleByDiscordIds(member.roles ?? []),
        joinDate: member.joined_at
          ? new Date(member.joined_at).toISOString().slice(0, 10)
          : new Date().toISOString().slice(0, 10),
        contributions: 0,
        avatar,
      };
    });

  await writeFile(outputPath, JSON.stringify(normalized, null, 2), "utf-8");
  console.log(`Sincronizacion completada: ${normalized.length} miembros guardados en src/data/discord-members.json`);
} catch (error) {
  console.error("No se pudo sincronizar Discord:", error.message);
  process.exit(1);
}
