// "use client";

// import { GraduationCap, Laptop, Database } from "lucide-react";

// const education = [
//   {
//     icon: GraduationCap,
//     period: "2024 — Present",
//     title: "Higher Secondary Certificate (HSC)",
//     subtitle: "Science • HSC 2nd Year",
//     description:
//       "Currently pursuing Higher Secondary education while developing practical skills in modern web development alongside my academic studies.",
//     tags: ["Science", "Mathematics", "English"],
//   },
//   {
//     icon: Laptop,
//     period: "2026 — Present",
//     title: "Complete Web Development Course",
//     subtitle: "Programming Hero",
//     description:
//       "Learning modern frontend development through a structured course, covering React, Next.js, Tailwind CSS, Git, and industry best practices.",
//     tags: ["React", "Next.js", "Tailwind CSS", "Git"],
//   },
//   {
//     icon: Database,
//     period: "Present",
//     title: "Backend Development",
//     subtitle: "Currently Learning",
//     description:
//       "Expanding my knowledge of Node.js, Express.js, MongoDB, REST APIs, and backend architecture to become a full-stack developer.",
//     tags: ["Node.js", "Express.js", "MongoDB", "REST API"],
//   },
// ];

// export const Education = () => {
//   return (
//     <section id="education" className="py-32 relative overflow-hidden">
//       <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//             Education
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//             Building knowledge
//             <span className="font-serif italic font-normal text-white">
//               {" "}
//               through continuous learning.
//             </span>
//           </h2>

//           <p className="text-muted-foreground animate-fade-in animation-delay-200">
//             My academic background and learning journey, combining structured
//             education with hands-on web development to continuously grow as a
//             frontend developer.
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {education.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="glass p-8 rounded-3xl glow-border border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
//                 style={{ animationDelay: `${index * 150}ms` }}
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
//                   <Icon className="w-7 h-7 text-primary" />
//                 </div>

//                 <span className="text-sm font-medium text-primary">
//                   {item.period}
//                 </span>

//                 <h3 className="text-2xl font-semibold mt-3">{item.title}</h3>

//                 <p className="text-muted-foreground mt-1">{item.subtitle}</p>

//                 <p className="text-muted-foreground mt-6 leading-relaxed">
//                   {item.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mt-8">
//                   {item.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-3 py-1 rounded-full bg-surface text-xs text-muted-foreground"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
