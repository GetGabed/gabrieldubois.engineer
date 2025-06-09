import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from '@/components/ui/timeline';

type TimelineItemType = {
  id: number;
  title: string;
  description: string;
  time: string;
  link: string;
  icon?: string;
};

const timelineData: TimelineItemType[] = [
  {
    id: 1,
    title: 'Shopify - Software Engineer Intern',
    description: `
        Migrated internal monitoring from Bugsnag to Grafana, reducing alert latency by 40% and improving alert customization. Engineered trust score recording system to track merchant integrity for each action, enabling data-informed enforcement and risk assessment across millions of shops.
    `,    
    time: 'May 2025 – Aug. 2025',
    link: "https://www.shopify.com",
    icon: "/gabrieldubois.engineer/svg/shopify_glyph.svg",
  },
  {
    id: 2,
    title: 'Ubisoft - Software Engineer Intern',
    description: `
        Developed high-performance online systems, enhancing player notifications, connections, and asset management for millions of users. Monitored AWS instances with Grafana, Splunk, and ElasticSearch. Optimized CI/CD pipeline by 30% through parallelization and caching, improving code maturity with SonarQube and Renovate.
    `,
    time: 'May 2024 – Apr. 2025',
    link: "https://www.ubisoft.com",
    icon: "/gabrieldubois.engineer/svg/ubisoft.svg",
  },
  {
    id: 3,
    title: 'Genetec - Software Engineer Intern',
    description:`
        Implemented a multithreaded feature for faster Modbus device discovery, reducing setup time by 10x. Added plugin factories for XML integration and regex substitutions, expanding software capabilities. Optimized plugin responsiveness, improving data serialization and reducing device polling intervals by 60%.
    `,
    time: 'May 2023 – Sep. 2023',
    link: "https://www.genetec.com",
  },
  {
    id: 4,
    title: 'iBwave - Software Engineer Intern',
    description: `
        Addressed security concerns with front-end and back-end verifications, ensuring data integrity during project deletions. Increased test coverage with comprehensive unit, integration, and automated tests using Selenium and SQL.
    `,
    time: 'Sep. 2022 – Dec. 2022',
    link: "https://www.ibwave.com",
  },
];

export const TimelineLayout = () => {
  return (
    <Timeline className='mt-8'>
      {timelineData.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <TimelineTime>{item.time}</TimelineTime>
            <TimelineTitle href={item.link}>
              {item.title}
              {item.icon && (
                <img 
                src={item.icon} 
                alt={`${item.title} icon`}
                className="inline-block ml-2 mb-2 w-6 h-6" 
                />
              )}
            </TimelineTitle>
          </TimelineHeader>
          <TimelineDescription>{item.description
              .trim()
              .split('\n')
              .map((line, index) => (
                <p key={index} className="mb-2">
                  {line.trim()}
                </p>
              ))}</TimelineDescription>
        </TimelineItem>
      ))}
    </Timeline>
  );
};