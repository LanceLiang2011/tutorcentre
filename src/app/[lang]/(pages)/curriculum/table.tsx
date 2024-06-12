import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableDemo({
  grades,
  lang = "en",
}: {
  grades: { grade: string; time: string }[];
  lang?: string;
}) {
  return (
    <Table className=" text-base sm:text-lg md:text-xl">
      <TableCaption>
        {lang === "en" ? "Course schedule details." : "課程時間安排"}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">
            {lang === "en" ? "Grade" : "年級"}
          </TableHead>
          <TableHead className="text-right">
            {lang === "en" ? "Time" : "時間"}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {grades.map((grade, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{grade.grade}</TableCell>
            <TableCell className="text-right">{grade.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
