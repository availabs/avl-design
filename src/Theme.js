// import {composeTheme} from "@availabs/avl-components/dist/Themes/utils";

const colors = {
  transparent: {
    contentBg: "",
    accentColor: "blue-600",
    accentBg: "hover:bg-blue-600",
    borderColor: "border-gray-200",
    textColor: "text-gray-800",
    highlightColor: "text-white",
  },
  white: {
    contentBg: "bg-white",
    accentColor: "blue-600",
    accentBg: "hover:bg-blue-600",
    borderColor: "border-gray-100",
    textColor: "text-gray-600",
    highlightColor: "text-white",
  },
  dark: {
    contentBg: "bg-darkblue-600",
    accentColor: "blue-600",
    accentBg: "hover:bg-blue-600",
    borderColor: "border-gray-700",
    textColor: "text-gray-200",
    highlightColor: "text-white",
  },
  gray: {
    contentBg: "bg-gray-800",
    accentColor: "gray-500",
    accentBg: "hover:bg-gray-500",
    borderColor: "border-gray-600",
    textColor: "text-gray-300",
    highlightColor: "text-gray-200",
  },
  bright: {
    contentBg: "bg-blue-700",
    accentColor: "blue-400",
    accentBg: "hover:bg-blue-400",
    borderColor: "border-blue-600",
    textColor: "text-white",
    highlightColor: "text-white",
  },
};

const sizes = {
  compact: {
    wrapper: "w-64",
    sideItem: "flex mx-6 pr-4 py-2 text-sm font-light hover:pl-4",
    topItem: "flex items-center text-sm px-4 border-r h-12",
    icon: "mr-3 text-lg",
  },
  full: {
    wrapper: "w-64",
    sideItem: "flex mx-4 pr-4 py-4 text-base font-base border-b hover:pl-4",
    topItem: "flex pr-4 py-2 text-sm font-light",
    icon: "mr-4 text-2xl",
  },
  mini: {
    wrapper: "w-20 overflow-x-hidden",
    sideItem: "flex pr-4 py-4 text-base font-base border-b",
    topItem: "flex px-4 items-center text-sm font-light ",
    icon: "w-20 mr-4 text-4xl",
  },
  micro: {
    wrapper: "w-14 overflow-x-hidden",
    sideItem: "flex pr-4 py-4 text-base font-base border-b",
    topItem: "flex mx-6 pr-4 py-2 text-sm font-light",
    icon: "w-14 mr-4 text-2xl",
  },
};

let color = "white";
let size = "compact";

const light_base = {
  /* ----- 
     Side Nav Theme Components Minimal 
  ------*/

  sidenavWrapper: `${colors[color].contentBg} ${sizes[size].wrapper} border-r border-gray-200 h-full`,
  menuIconSide: ` text-${colors[color].accentColor} ${sizes[size].icon} group-hover:${colors[color].highlightColor}`,
  navitemSide: ` 
    group font-sans 
    ${sizes[size].sideItem} ${colors[color].textColor} ${colors[color].borderColor} 
    ${colors[color].accentBg} hover:${colors[color].highlightColor} 
    focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 
    transition-all cursor-pointer
  `,

  navitemSideActive: `
    group flex pl-8 pr-4 py-2 bg-${colors[color].highlightColor} text-base font-medium text-darkblue-500 focus:outline-none hover:text-indigo-800 focus:text-indigo-800 focus:bg-blue-200 focus:border-indigo-700 transition duration-150 ease-in-out`,

  /* ----- 
     Top Nav Theme Components Minimal 
  ------*/
  topnavWrapper: `w-full ${colors[color].contentBg}`,
  topnavContent: `flex w-full `,
  topnavMenu: `hidden md:flex flex-1 h-full overflow-x-auto overflow-y-hidden scrollbar-sm`,
  menuIconTop: `text-${colors[color].accentColor} ${sizes[size].icon} group-hover:${colors[color].highlightColor}`,

  navitemTop: `
    group font-sans w-full
    ${sizes[size].topItem} ${colors[color].textColor} ${colors[color].borderColor} 
    ${colors[color].accentBg} hover:${colors[color].highlightColor} 
    focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 
    transition cursor-pointer`,
  //`px-4 text-sm font-medium tracking-widest uppercase inline-flex items-center  border-transparent  leading-5 text-white hover:bg-white hover:text-darkblue-500 border-gray-200 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out h-full`,
  topmenuRightNavContainer: "hidden md:block h-full",
  navitemTopActive: `group font-sans w-full
    ${sizes[size].topItem} ${colors[color].textColor} ${colors[color].borderColor} 
    ${colors[color].accentBg} hover:${colors[color].highlightColor} 
    focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 
    transition cursor-pointer`,

  /* ------------------------- */
  shadow: "shadow",
  ySpace: "py-4",
  text: "text-gray-800",
  textContrast: "text-white",
  border: "broder-gray-400",

  textInfo: "text-blue-400",
  bgInfo: "bg-blue-400",
  borderInfo: "border-blue-400",

  textSuccess: "text-blue-400",
  bgSuccess: "bg-blue-400",
  borderSuccess: "border-blue-400",

  textDanger: "text-red-400",
  bgDanger: "bg-red-400",
  borderDanger: "border-red-400",

  textWarning: "text-yellow-400",
  bgWarning: "bg-yellow-400",
  borderWarning: "border-yellow-400",

  textLight: "text-gray-400", // <-- for text styled like placeholder but can't be selected with ::placeholder
  placeholder: "placeholder-gray-400",

  topMenuBorder: "border-b border-gray-200",
  topMenuScroll: "",
  headerShadow: "",
  navText: "text-gray-100",

  navMenu: "h-full relative",
  navMenuOpen: "bg-darkblue-500 text-white shadow-lg w-56 rounded-t-lg",
  navMenuBg: "bg-darkblue-500 bb-rounded-10 shadow-lg text-white rounded-b-lg",
  navMenuItem:
    "hover:font-medium cursor-pointer px-2 py-1 text-lg font-semibold",

  bg: "bg-gray-50",

  menuBg: "bg-white z-50",
  menuBgHover: "",
  menuBgActive: "bg-blue-200",
  menuBgActiveHover: "hover:bg-blue-300",
  menuText: "text-gray-100",
  menuTextHover: "hover:text-gray-700",
  menuTextActive: "text-blue-500",
  menuTextActiveHover: "hover:text-blue-700",

  headerBg: "bg-gray-200",
  headerBgHover: "hover:bg-gray-400",

  inputBg: "bg-white disabled:bg-gray-200 cursor-pointer focus:outline-none",
  inputBorder:
    "rounded border-0 border-transparent hover:border-gray-300 focus:border-gray-600 disabled:border-gray-200",
  inputBgDisabled: "bg-gray-200 cursor-not-allowed focus:outline-none",
  inputBorderDisabled: "rounded border-2 border-gray-200 hover:border-gray-200",
  inputBgFocus: "bg-white cursor-pointer focus:outline-none",
  inputBorderFocus:
    "rounded border-2 border-transparent hover:border-gray-600 focus:border-gray-600 border-gray-600",

  textBase: "text-base",
  textSmall: "text-sm",
  textLarge: "text-lg",
  paddingBase: "py-1 px-2",
  paddingSmall: "py-0 px-1",
  paddingLarge: "py-2 px-4",

  contentBg: "bg-white",

  accent1: "bg-blue-100",
  accent2: "bg-gray-300",
  accent3: "bg-gray-400",
  accent4: "bg-gray-500",

  highlight1: "bg-blue-200",
  highlight2: "bg-blue-300",
  highlight3: "bg-blue-400",
  highlight4: "bg-blue-500",

  width: "",

  transition: "transition ease-in-out duration-150",
  button: `
        inline-flex items-center
        px-4 py-2 border border-gray-300
        text-sm leading-5 font-medium
        rounded-md text-gray-700 bg-white
        hover:text-gray-500
        focus:outline-none focus:shadow-outline-blue focus:border-blue-300
        active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out
        disabled:cursor-not-allowed`,
  buttonPrimary:
    "inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out disabled:cursor-not-allowed",

  tableRow: "bg-gray-100 hover:bg-gray-200 transition ease-in-out duration-150",
  tableRowStriped:
    "bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-150",

  tableCell: "px-4 py-1 whitespace-no-wrap",

  tableHeader:
    "px-4 py-2 pb-1 border-b-2 border-gray-300 bg-gray-200 text-left font-medium text-gray-700 uppercase first:rounded-tl-md last:rounded-tr-md",
};

const button = [
  {
    $default:
      "rounded inline-flex items-center justify-center @transition disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50 focus:outline-none border",
  }, // <-- applied to all buttons
  {
    $default: "$button", // <-- this is pulled from the theme during composeDefaults and overwritten
    Primary: "$buttonPrimary", // <-- this is pulled from the theme during composeDefaults and overwritten
    Success: "$buttonSuccess",
    Danger: "$buttonDanger",
    Info: "$buttonInfo",
  },
  {
    $default: "px-4 py-1 @textBase", // <<-- padding based on size
    Large: "px-6 py-2 @textLarge",
    Small: "px-2 py-0 @textSmall",
  },
  { Block: "w-full" },
];
const input = [
  {
    $default:
      "w-full block rounded cursor-pointer disabled:cursor-not-allowed @transition @text @placeholder @inputBg @inputBorder",
  },
  {
    $default: "@paddingBase @textBase", // <<-- padding based on size
    Large: "@paddingLarge @textLarge",
    Small: "@paddingSmall @textSmall",
  },
];
const navitem = [
  {
    $default:
      "group border-transparent font-medium focus:outline-none @transition",
  },
  {
    Top: "mr-4 inline-flex items-center px-1 pt-1 border-b-2 text-sm leading-5",
    Side: "mb-1 flex pl-3 pr-4 py-2 border-l-4 text-bas",
  },
  {
    $default: "@menuBg @menuBgHover @menuText @menuTextHover",
    Active:
      "@menuBgActive @menuBgActiveHover @menuTextActive @menuTextActiveHover",
  },
];
const textbutton = [
  {
    $default:
      "@transition inline-flex px-2 hover:font-bold disabled:font-normal disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
  },
  {
    $default: "$textbutton",
    Info: "text-blue-400 hover:text-blue-500 disabled:text-blue-400",
  },
  { $default: "text-base", Large: "text-lg", Small: "text-sm" },
  {
    $default: "font-normal cursor-pointer",
    Active: "font-bold cursor-default",
  },
];
const list = [
  { $default: "@transition rounded" },
  {
    $default: "p-2 pb-0 bg-white shadow",
    Dragging: "p-2 pb-0 bg-white",
    Item: "py-1 px-3 bg-gray-300 mb-2 border-b",
  },
];
const $compositions = {
  $defaults: [
    "input",
    "navitemTop",
    "navitemTopActive",
    "navitemSide",
    "navitemSideActive",
  ], // <-- these are generated in theme during composeDefaults
  button,
  input,
  navitem,
  textbutton,
  list,
};
const TEST_THEME_BASE = {
  ...light_base,

  tableInfoBar: "bg-white",
  tableRow: "bg-white hover:bg-gray-200 @transition",
  tableRowStriped: "bg-white even:bg-gray-100 hover:bg-gray-200 @transition",

  button:
    "text-gray-400 border-gray-400 hover:bg-gray-400 hover:text-white disabled:text-gray-400",
  buttonPrimary:
    "text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white disabled:text-blue-400",
  buttonSuccess:
    "text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white disabled:text-blue-400",
  buttonDanger:
    "text-red-400 border-red-400 hover:bg-red-400 hover:text-white disabled:text-red-400",
  buttonInfo:
    "text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white disabled:text-blue-400",

  textbutton: "text-gray-400 hover:text-gray-500 disabled:text-gray-400",

  $compositions,
};

const compose = (themeType, theme) => {
  const [base, ...rest] = themeType.split(/(?<!^)(?=[A-Z])/);
  if (!theme.$compositions) return theme[base] || "";
  if (!theme.$compositions[base]) return theme[base] || "";

  return theme.$compositions[base]
    .reduce((a, c) => {
      let option = c.$default || "";
      for (const opt of rest) {
        if (opt in c) {
          option = c[opt];
        }
      }
      a.push(option);
      return a;
    }, [])
    .filter(Boolean)
    .join(" ");
};

const handler = {
  get: (theme, definition, receiver) => {
    if (!(definition in theme)) {
      theme[definition] = compose(definition, theme);
    }
    return theme[definition];
  },
};

export default new Proxy(TEST_THEME_BASE, handler);

//export default composeTheme(TEST_THEME_BASE)
