import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TableDemo } from "./table";

interface Course {
  name: string;
  grades: { grade: string; time: string }[];
}

interface Props {
  courses: Course[];
  lang?: string;
}

export default function CourseTabs({ courses, lang = "en" }: Props) {
  return (
    <div className="w-full max-w-5xl mx-auto my-12">
      <Tabs defaultValue={courses[0].name} className="w-full">
        <TabsList className="flex flex-wrap h-36 sm:h-auto sm:flex-nowrap">
          {courses.map((course) => (
            <TabsTrigger
              key={course.name}
              value={course.name}
              className="px-4 py-2 w-1/2 sm:w-auto text-base sm:text-lg md:text-2xl"
            >
              {course.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {courses.map((course) => (
          <TabsContent
            key={course.name}
            value={course.name}
            className="p-4 mt-2"
          >
            <h2 className="text-xl font-semibold mb-4">{course.name}</h2>
            <TableDemo lang={lang} grades={course.grades} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
