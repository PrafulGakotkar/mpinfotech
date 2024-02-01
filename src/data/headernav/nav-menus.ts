import { MenuItem } from "@/interFace/interFace";

const navMenuData: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
    hasDropdown: false,
    // hasDropdown: true,
    // subMenu: [
    //   {
    //     id: 7,
    //     label: "Home 1",
    //     link: "/",
    //   },
    //   {
    //     id: 8,
    //     label: "Home 2",
    //     link: "/home-2",
    //   },
    // ],
  },
  { id: 2, hasDropdown: false, label: "About Us", link: "/about" },
  {
    id: 3,
    label: "IT Services",
    link: "/service-1",
    hasDropdown: true,
    subMenu: [
      {
        id: 9,
        label: "Cyber/Information Security",
        link: "/service-1",
      },
      {
        id: 10,
        label: "Software Development",
        link: "/service-2",
      },
      {
        id: 11,
        label: "Cloud Transformation",
        link: "/service-3",
        hasDropdown: true,
        subMenu: [
          {
            id: 31,
            label: "Software",
            link: "/service-2",
          },
        ],
      },
      {
        id: 12,
        label: "Technology Consulting",
        link: "/service-manage",
      },
      // {id: 30,
      //   label: "Service Details",
      //   link: "/service-details",
      // },
    ],
  },
  {
    id: 4,
    label: "Our Product",
    // label: "Blog",
    link: "/product",
    // link: "/blog",
    hasDropdown: false,
    // hasDropdown: true,
    // subMenu: [
    //   {
    //     id: 13,
    //     label: "Blog",
    //     link: "/blog",
    //   },
    //   {
    //     id: 14,
    //     label: "Blog details",
    //     link: "/blog-details",
    //   },
    // ],
  },
  {
    id: 5,
    label: "Careers",
    // label: "Pages",
    link: "/career",
    hasDropdown: false,
    // hasDropdown: true,
    subMenu: [
      {
        id: 15,
        label: "Case One",
        link: "/case-1",
      },
      {
        id: 16,
        label: "Case Two",
        link: "/case-2",
      },
      {
        id: 17,
        label: "Case Three",
        link: "/case-3",
      },
      {
        id: 18,
        label: "Case Details",
        link: "/case-details",
      },
      {
        id: 19,
        label: "Career",
        link: "/career",
      },
      {
        id: 21,
        label: "Faq",
        link: "/faq",
      },
      {
        id: 22,
        label: "Goals",
        link: "/goals",
      },
      {
        id: 23,
        label: "Price",
        link: "/price",
      },
      {
        id: 24,
        label: "Team",
        link: "/team",
      },
      {
        id: 25,
        label: "Team Details",
        link: "/team-details",
      },
      {
        id: 26,
        label: "Shop",
        link: "/shop",
      },
      {
        id: 27,
        label: "Contact",
        link: "/contact",
      },
      {
        id: 28,
        label: "Login",
        link: "/login",
      },
      {
        id: 29,
        label: "Register",
        link: "/register",
      },
    ],
  },
  { id: 6, hasDropdown: false, label: "Contact Us", link: "/contact" },
];

export default navMenuData;
