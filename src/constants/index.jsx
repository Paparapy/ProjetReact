import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Fonctionnalités", href: "/features" },
  { label: "Flux de travail", href: "/workflow" },
  { label: "Tarification", href: "/pricing" },
  { label: "Témoignages", href: "/testimonials" },
];


export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Je suis extrêmement satisfait des services fournis. L'équipe était réactive, professionnelle et a livré des résultats au-delà de mes attentes.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Je ne pourrais pas être plus heureuse du résultat de notre projet. La créativité de l'équipe et ses compétences en résolution de problèmes ont été essentielles pour donner vie à notre vision.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Travailler avec cette entreprise a été un plaisir. Leur attention aux détails et leur engagement envers l'excellence sont remarquables. Je les recommande vivement à toute personne recherchant un service de premier ordre.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Travailler avec l'équipe de XYZ Company a été un changement de donne pour notre projet. Leur attention aux détails et leurs solutions innovantes nous ont aidés à atteindre nos objectifs plus rapidement que nous ne le pensions possible. Nous sommes reconnaissants pour leur expertise et leur professionnalisme!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Je suis impressionné par le niveau de professionnalisme et de dévouement démontré par l'équipe. Ils ont pu dépasser nos attentes et fournir des résultats exceptionnels.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "L'équipe a fait des efforts supplémentaires pour assurer le succès de notre projet. Leur expertise et leur dévouement sont inégalés. J'ai hâte de retravailler avec eux à l'avenir.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interface par glisser-déposer",
    description:
      "Concevez et arrangez facilement vos environnements VR avec une interface conviviale par glisser-déposer.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilité multiplateforme",
    description:
      "Créez des applications VR qui fonctionnent parfaitement sur plusieurs plateformes, y compris mobile, bureau, et casques VR.",
  },
  {
    icon: <ShieldHalf />,
    text: "Modèles intégrés",
    description:
      "Lancez rapidement vos projets VR avec une variété de modèles intégrés pour différents types d'applications et d'environnements.",
  },
  {
    icon: <BatteryCharging />,
    text: "Aperçu en temps réel",
    description:
      "Prévisualisez votre application VR en temps réel au fur et à mesure que vous apportez des modifications, permettant des itérations et ajustements rapides.",
  },
  {
    icon: <PlugZap />,
    text: "Outils de collaboration",
    description:
      "Travaillez ensemble avec votre équipe en temps réel sur des projets VR, permettant une collaboration et un partage d'idées fluides.",
  },
  {
    icon: <GlobeLock />,
    text: "Tableau de bord analytique",
    description:
      "Obtenez des informations précieuses sur les interactions et comportements des utilisateurs au sein de vos applications VR grâce à un tableau de bord analytique intégré.",
  },
];

export const checklistItems = [
  {
    title: "Fusion de code simplifiée",
    description:
      "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
  },
  {
    title: "Revue de code sans souci",
    description:
      "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
  },
  {
    title: "Assistance IA pour réduire le temps",
    description:
      "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
  },
  {
    title: "Partage du travail en quelques minutes",
    description:
      "Suivez les performances de vos applications VR et obtenez des informations sur le comportement des utilisateurs.",
  },
];

export const pricingOptions = [
  {
    title: "Gratuit",
    price: "$0",
    features: [
      "Partage de tableau privé",
      "5 Go de stockage",
      "Analyse Web",
      "Mode privé",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Partage de tableau privé",
      "10 Go de stockage",
      "Analyse Web (Avancée)",
      "Mode privé",
    ],
  },
  {
    title: "Entreprise",
    price: "$200",
    features: [
      "Partage de tableau privé",
      "Stockage illimité",
      "Réseau haute performance",
      "Mode privé",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Prise en main" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutoriels" },
  { href: "#", text: "Référence API" },
  { href: "#", text: "Forums communautaires" },
];

export const platformLinks = [
  { href: "#", text: "Fonctionnalités" },
  { href: "#", text: "Appareils supportés" },
  { href: "#", text: "Configuration système" },
  { href: "#", text: "Téléchargements" },
  { href: "#", text: "Notes de mise à jour" },
];

export const communityLinks = [
  { href: "#", text: "Événements" },
  { href: "#", text: "Rencontres" },
  { href: "#", text: "Conférences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Emplois" },
];
