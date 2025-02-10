import { ArrowUpFromLine, Book, Calendar, Home, LogIn } from "lucide-react";


const routePages = [
    {
      label: "Home",
      icon: Home,
      href: "/dashboard",
      icon_color:"text-sky-500",
      color: "text-black",
    },
    {
      label: "Book Event",
      icon: Book,
      href: "/book",
      icon_color:"text-blue-500",
      color: "text-black",
    },
    {
        label: "Event Details",
        icon: Calendar,
        href: "/event",
        icon_color:"text-purple-600",
        color: "text-black",
    },
    {
      label: "Sign In",
      icon: LogIn,
      href: "/sign-in",
      icon_color:"text-orange-500",
      background_color: "bg-purple-600",
      color: "text-white",
    },
    {
      label: "Sign Up",
      icon: ArrowUpFromLine,
      href: "/sign-up",
      icon_color:"text-emerald-500",
      background_color: "bg-purple-600",
      color: "text-white",
    },
  ];

  export default routePages;