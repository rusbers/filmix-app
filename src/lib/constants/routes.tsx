import {
  Bookmark,
  Home,
  Movies,
  TvSeries,
} from "@/components/icons/navigation";
import {
  Clapperboard,
  Gauge,
  HelpCircle,
  UserRound,
  Users,
} from "lucide-react";

export const routes = {
  user: {
    home: "/app/home",
    movies: "/app/movies",
    tvSeries: "/app/tv-series",
    bookmarked: "/app/bookmarked",
    account: "/app/account",
    helpCentre: "/app/help-centre",
  },
  dashboard: {
    home: "/dashboard",
    shows: "/dashboard/shows",
    users: "/dashboard/users",
  },
};

export const adminRoutes = [
  {
    label: "Dashboard",
    path: routes.dashboard.home,
    Icon: Gauge,
  },
  {
    label: "Shows",
    path: routes.dashboard.shows,
    Icon: Clapperboard,
  },
  {
    label: "Users",
    path: routes.dashboard.users,
    Icon: Users,
  },
];

export const navigationRoutes = [
  {
    label: "Home",
    path: routes.user.home,
    Icon: Home,
  },
  {
    label: "Movies",
    path: routes.user.movies,
    Icon: Movies,
  },
  {
    label: "TV Series",
    path: routes.user.tvSeries,
    Icon: TvSeries,
  },
  {
    label: "Bookmarked",
    path: routes.user.bookmarked,
    Icon: Bookmark,
  },
];

export const userMenuRoutes = [
  {
    label: "Account",
    path: routes.user.account,
    Icon: UserRound,
  },
  {
    label: "Help Centre",
    path: routes.user.helpCentre,
    Icon: HelpCircle,
  },
];
