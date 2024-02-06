import { faqInterFace } from "@/interFace/interFace";

export const faqData: faqInterFace[] = [

  {
    id: 1,
    title: "1. Retire",
    details:
      "Identifying IT assets that are no longer useful and can be turned off will help boost your business case and direct your attention towards maintaining the resources that are widely used.",
  },
  {
    id: 2,
    title: "2. Rehost (“lift and shift”)",
    details:
      "In a large legacy migration scenario where the organization is looking to quickly implement its migration and scale to meet a business case, we find that the majority of applications are rehosted. Most rehosting can be automated with tools such as AWS SMS although you may prefer to do this manually as you learn how to apply your legacy systems to the cloud. You may also find that applications are easier to re-architect once they are already running in the cloud. This happens partly because your organization will have developed better skills to do so and partly because the hard part – migrating the application, data, and traffic – has already been accomplished.",
  },
  {
    id: 3,
    title: "3. Replatform (“lift, tinker and shift”)",
    details:
      "This entails making a few cloud optimizations in order to achieve some tangible benefit without changing the core architecture of the application. For example, you may be looking to reduce the amount of time you spend managing database instances by migrating to a managed relational database service such as Amazon Relational Database Service (RDS), or migrating your application to a fully managed platform like AWS Elastic Beanstalk.",
  },
  {
    id: 4,
    title: "4. Repurchase (“drop and shop”)",
    details:
      "This is a decision to move to a different product and likely means your organization is willing to change the existing licensing model you have been using. For workloads that can easily be upgraded to newer versions, this strategy might allow a feature set upgrade and smoother implementation.",
  },
  {
    id: 5,
    title: "5. Refactor / Re-architect",
    details:
      "Typically, this is driven by a strong business need to add features, scale, or performance that would otherwise be difficult to achieve in the application’s existing environment. If your organization is looking to boost agility or improve business continuity by moving to a service-oriented architecture (SOA) this strategy may be worth pursuing – even though it is often the most expensive solution.",
  },
  {
    id: 6,
    title: "6. Retain",
    details:
      "You may want to retain portions of your IT portfolio because there are some applications that you are not ready to migrate and feel more comfortable keeping them on-premises, or you are not ready to prioritize an application that was recently upgraded and then make changes to it again.",
  },


];
