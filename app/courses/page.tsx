import ContentBlock, { ContentData } from "@/components/ContentBlock";

const page = () => {
  const contentData = [
    {
      number: "1",
      heading: "Innovation, Business Models And Entrepreneurship",
      description:
        "The course titled 'Innovation, Business Models and Entrepreneurship', is designed to give an in-depth understanding on various aspects of innovation, creativity, evolving business models, incubation and entrepreneurship. The course also includes sessions on blue ocean strategy and technology incubation which are proving as game changer in today's competitive scenario. Course also deals with role of IPR and IP management in innovation management. The course is a blend of theory and practice therefore this course does not require any prerequisite and will be useful to understand innovation and its applications in different spheres of development and growth.",
      linkText: "Learn More",
      linkHref: "https://onlinecourses.nptel.ac.in/noc23_mg116/preview",
    },
    {
      number: "2",
      heading: "Product And Brand Management",
      description:
        "The structure of this course is based on one of the most important learning required for all the students seeking to join professional life and all the professionals seeking to excel including heads and leaders of institutions and Non-Profit and even Government Organizations. Its a combined package of two subjects to give its readers a comprehensive knowledge.  ",
      linkText: "Learn More",
      linkHref: "https://onlinecourses.nptel.ac.in/noc23_mg110/preview",
    },
    {
      number: "3",
      heading: "Integrated Marketing Communication",
      description:
        "The objective of this course is to enlighten the participants with important aspects of planning, execution and evaluation of marketing communication and its strategies. This course is developed with a blend of theoretical lectures and various examples which will provide insights on real-life scenarios. The participants will be familiarized with integration of marketing communication modes and strategies for building brands. The learners will also get to know the importance of different media choices along with the reasons and methods of integrating different media. The discussion would also include understanding consumer behaviour and conducting IMC-related research. The course focuses on the strategic importance of IMC and highlights the centrality of the art of IMC with reference to driving businesses and organizations at large.",
      linkText: "Learn More",
      linkHref: "https://onlinecourses.nptel.ac.in/noc23_mg32/preview",
    },
    {
      number: "4",
      heading: "Innovation in Marketing and Marketing of Innovation",
      description:
        "This course brings together the fields of marketing and innovation in an integrated subject that enables students, executives, entrepreneurs and all others who are inquisitive about innovation in marketing and marketing of innovation to develop an insight and to practically use it. It is curated to provide conceptual as well as practical knowledge of both ‘innovation in marketing’ and ‘marketing innovation’. The idea is to unfold the intricacies of innovation in the light of marketing and intricacies of marketing in the light of innovation.",
      linkText: "Learn More",
      linkHref: "https://onlinecourses.nptel.ac.in/noc24_mg25/preview",
    },

    {
      number: "5",
      heading: "Strategic Management",
      description:
        "This course develops the understanding of, visualization, planning and execution of complex strategies to meet an organization’s goals, achieve the objectives, accomplish the mission and to realize its vision. It helps to understand evolving industry structures and develop new competencies in times of industry transition. It is designed to equip students with conceptual knowledge with practical applications",
      linkText: "Learn More",
      linkHref: "https://onlinecourses.nptel.ac.in/noc24_mg112/preview",
    },

    // Add more items as needed
  ];
  return (
    <div className="mt-16">
      {contentData.map((item: ContentData, index: number) => (
        <ContentBlock
          key={index}
          number={item.number}
          heading={item.heading}
          description={item.description}
          linkText={item.linkText}
          linkHref={item.linkHref}
        />
      ))}
    </div>
  );
};

export default page;
