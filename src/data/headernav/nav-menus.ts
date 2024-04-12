import { MenuItem } from "@/interFace/interFace";

const navMenuData: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
    hasDropdown: false,
  },
  { id: 2, hasDropdown: false, label: "About Us", link: "/about" },
  {
    id: 3,
    label: "Our Services",
    link: "#",
    hasDropdown: true,
    subMenu: [
      {
        id: 11,
        label: "Data Engineering",
        link: "/data-engineering",
        hasDropdown: true,
        sub_Menu: [
          {
            id: 31,
            label: "Data Warehouse Modernization",
            link: "/data-engineering/#sec_data_warehouse",
          },
          {
            id: 32,
            label: "Real Time Analytics",
            link: "/data-engineering/#sec_analytics",
          },
          {
            id: 33,
            label: "Data Governance & Observability",
            link: "/data-engineering/#sec_data_governance",
          },
          {
            id: 34,
            label: "Unique MDM Implementation",
            link: "/data-engineering/#sec_unique_mdm",
          },
        ],
      },
      {
        id: 12,
        label: "Cyber Security",
        link: "/cyber-security",
        hasDropdown: true,
        sub_Menu: [
          {
            id: 35,
            label: "Infrastructure Risk Assessment",
            link: "/infrastructure-risk-assessment",
          },
          {
            id: 36,
            label: "Application Risk Assessment",
            link: "/application-risk-assessment",
          },
          {
            id: 37,
            label: "Cloud Risk Assessment",
            link: "/cloud-risk-assessment",
          },
          {
            id: 38,
            label: "Managed Security Services",
            link: "/managed-security-services",
          },
        ],
      },
      {
        id: 13,
        label: "Cloud Services",
        link: "#",
        hasDropdown: true,
        sub_Menu: [
          {
            id: 39,
            label: "Hybrid Cloud Solution",
            link: "/hybrid-cloud-solution",
          },
          {
            id: 40,
            label: "Migration Services",
            link: "/migration-services",
          },
        ],
      },
      {
        id: 14,
        label: "Integration Services",
        link: "/integration-services",
      },
      {
        id: 15,
        label: "Analytics",
        link: "/analytics",
        hasDropdown: true,
        sub_Menu: [
          {
            id: 41,
            label: "Modern Data Analytics",
            link: "/analytics/#sec_modern_data",
          },
          {
            id: 42,
            label: "AI / ML",
            link: "/analytics/#sec_ai_ml",
          },
          {
            id: 43,
            label: "Process Mining Analytics",
            link: "/analytics/#sec_process_mining",
          },
        ],
      },
      {
        id: 16,
        label: "App Services",
        link: "/app-service",
        hasDropdown: true,
        sub_Menu: [
          {
            id: 41,
            label: "Reactive & Progressive Web Apps",
            link: "/app-service/#sec_reactive",
          },
          {
            id: 42,
            label: "Mobile Apps Development",
            link: "/app-service/#sec_mobile",
          },
          {
            id: 43,
            label: "Micro Services",
            link: "/app-service/#sec_micro",
          },
        ],
      },
      {
        id: 17,
        label: "IT Services",
        link: "/it-service",
        hasDropdown: true,
        sub_Menu: [
          {
            id: 41,
            label: "AWS/Azure/CGP",
            link: "/it-service/#sec_aws",
          },
          {
            id: 42,
            label: "DBA As Service",
            link: "/it-service/#sec_dba",
          },
          
        ],
      },
      {
        id: 30,
        label: "Management Service",
        link: "/management-service",
        
      },
    ],
  },
  {
    id: 4,
    label: "Clients & Partners",
    link: "/clients-partners",
    hasDropdown: false,
  },
  {
    id: 5,
    label: "Careers",
    link: "/career",
    hasDropdown: false,
  },
  {
    id: 6,
    label: "Contact Us",
    link: "/contact",
    hasDropdown: false,
  },
];

export default navMenuData;
