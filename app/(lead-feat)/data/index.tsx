import { Lead } from "@/app/(lead-feat)/types";
import {
   House, LandPlot, Rocket,
   BadgeCent, Phone, Megaphone,
   Settings, User, Weight
} from "lucide-react";


const className = "text-gray-300"
const size = 20

export const leadslist: Lead[] = [
  {
    id: 1,
    subject: "Collaboration for a new app",
    name: "John Doe",
    activities: "Jan 3 at 10:00 am",
    status: "Hot Lead",
    created: "1 day ago",
    sources: "LinkedIn",
  },
  {
    id: 2,
    subject: "Redesign company logo",
    name: "Jane Smith",
    activities: "Jan 2 at 2:00 pm",
    status: "Cold Lead",
    created: "2 days ago",
    sources: "Facebook",
  },
  {
    id: 3,
    subject: "E-commerce platform inquiry",
    name: "Michael Johnson",
    activities: "Jan 1 at 4:30 pm",
    status: "Warm Lead",
    created: "3 days ago",
    sources: "Instagram",
  },
  {
    id: 4,
    subject: "Custom software solution request",
    name: "Emily Davis",
    activities: "Dec 30 at 1:15 pm",
    status: "Hot Lead",
    created: "5 days ago",
    sources: "Google",
  },
  {
    id: 5,
    subject: "Website maintenance proposal",
    name: "Chris Brown",
    activities: "Dec 29 at 11:00 am",
    status: "Cold Lead",
    created: "1 week ago",
    sources: "Website",
  },
  {
    id: 6,
    subject: "Brand identity design project",
    name: "Laura Wilson",
    activities: "Dec 28 at 9:45 am",
    status: "Warm Lead",
    created: "1 week ago",
    sources: "Dribbble",
  },
  {
    id: 7,
    subject: "Digital marketing strategy",
    name: "James Taylor",
    activities: "Dec 27 at 3:20 pm",
    status: "Hot Lead",
    created: "2 weeks ago",
    sources: "LinkedIn",
  },
  {
    id: 8,
    subject: "SEO optimization for blog",
    name: "Sophia Martinez",
    activities: "Dec 26 at 12:30 pm",
    status: "Cold Lead",
    created: "2 weeks ago",
    sources: "Instagram",
  },
  {
    id: 9,
    subject: "Mobile app development consultation",
    name: "Ethan Thompson",
    activities: "Dec 25 at 5:10 pm",
    status: "Warm Lead",
    created: "3 weeks ago",
    sources: "Google",
  },
  {
    id: 10,
    subject: "Custom CMS platform inquiry",
    name: "Olivia Garcia",
    activities: "Dec 24 at 10:15 am",
    status: "Hot Lead",
    created: "3 weeks ago",
    sources: "Facebook",
  },
];



export const sidebarLinks = [
  {
    name: "Home",
    icon: <House className={className} size={size} />,
    path: "/",
  },
  {
    name: "Leads",
    icon: <Weight className={className} size={size} />,
    path: "/leads",
  },
  {
    name: "Properties",
    icon: <LandPlot className={className} size={size} />,
    path: "/properties",
  },
  {
    name: "Projects",
    icon: <Rocket className={className} size={size} />,
    path: "/projects",
  },
  {
    name: "Sales",
    icon: <BadgeCent className={className} size={size} />,
    path: "/sales",
  },
  {
    name: "Communication",
    icon: <Phone className={className} size={size} />,
    path: "/communication",
  },
  {
    name: "Marketing",
    icon: <Megaphone className={className} size={size} />,
    path: "/marketing",
  },
  {
    name: "Settings",
    icon: <Settings className={className} size={size} />,
    path: "/settings",
  },
  {
    name: "User Management",
    icon: <User className={className} size={size} />,
    path: "/user-management",
  },
];