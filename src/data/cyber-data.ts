import { faqInterFace } from "@/interFace/interFace";

export const faqData: faqInterFace[] = [

  {
    id: 1,
    title: "Black box penetration testing",
    details:
      "In a black box penetration test, no information is provided to the tester. In this instance, the pen tester follows an unprivileged attacker’s approach, from initial access and execution to exploitation. This scenario can be seen as the most authentic, demonstrating how an adversary with no inside knowledge would target and compromise an organization.",
  },
  {
    id: 2,
    title: "Grey box penetration testing",
    details:
      "In a grey box penetration test, also known as a translucent box test (only limited information is shared with the tester). Usually, this takes the form of login credentials. Grey box testing helps understand the level of access a privileged user could gain and the potential damage they could cause. Grey box tests strike a balance between depth and efficiency and can simulate either an insider threat or an attack that has breached the network perimeter.",
  },
  {
    id: 3,
    title: "White box penetration testing",
    details:
      "White box penetration testing, sometimes called crystal or oblique box pen testing, involves sharing full network and system information with the tester, including network maps and credentials. This helps to save time and reduce the overall cost of an engagement. A white box penetration test is useful for simulating a targeted attack on a specific system utilizing as many attack vectors as possible.",
  },


];
