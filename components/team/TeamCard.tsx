'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { TeamMember } from "@/data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-surface rounded-2xl p-6 border border-white/10"
    >
      <div className="h-40 w-full bg-zinc-800 rounded-xl mb-4 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-sm text-muted">{member.role}</p>

      <p className="mt-4 text-sm text-muted">{member.bio}</p>

      {member.socials && (
        <div className="flex gap-4 mt-4">
          {member.socials.github && (
            <a href={member.socials.github} target="_blank">
              <Github size={18} />
            </a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} target="_blank">
              <Linkedin size={18} />
            </a>
          )}
          {member.socials.instagram && (
            <a href={member.socials.instagram} target="_blank">
              <Instagram size={18} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
