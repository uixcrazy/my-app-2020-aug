import { createContext, useState } from "react";
import {
  CategoryIcon,
  DashboardIcon,
  PhotoIcon,
  CalendarIcon,
  ArticleIcon,
} from "icons";

export const MENU_LIST = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    url: "",
  },
  {
    id: "categories",
    name: "Categories",
    icon: CategoryIcon,
    permissions: ["ADMIN", "READ_ONLY"],
    children: [
      {}
    ]
  },
  {
    id: "articles",
    name: "Articles",
    icon: ArticleIcon,
  },
  {
    id: "photos",
    name: "Photos",
    icon: PhotoIcon,
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: CalendarIcon,
  },
  {
    id: "users",
    name: "Typicode Users",
    icon: CalendarIcon,
  },
  {
    id: "unsplash",
    name: "Unsplash",
    icon: PhotoIcon,
  }
];

export const MenuContext = createContext({
  selected: { id: null, name: null },
  select: () => {},
});

export const MenuContextProvider = ({ route, children }) => {
  const menuItem = route && MENU_LIST.find((item) => item.id === route);
  const defaultSelected = menuItem
    ? {
        id: menuItem.id,
        name: menuItem.name,
      }
    : {
        id: null,
        name: null,
      };

  const [selected, setSelected] = useState(defaultSelected);
  const onSelectMenu = (item) => {
    setSelected({
      id: item.id,
      name: item.name,
    });
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <MenuContext.Provider value={[selected, onSelectMenu]}>
      {children}
    </MenuContext.Provider>
  );
};

// export default AppContext;
