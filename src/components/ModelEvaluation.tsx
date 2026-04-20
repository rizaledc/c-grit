import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { modelAccuracyData } from "@/data/carbon_data";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ModelEvaluation() {
  const renderAccuracy = (valStr: string) => {
    if (valStr.includes("Kappa")) return <span>{valStr}</span>;
    const val = parseFloat(valStr);
    
    if (val > 90) {
      return (
        <span className="flex items-center justify-end text-emerald-500 font-medium">
          {valStr} <CheckCircle2 className="w-4 h-4 ml-2" strokeWidth={1.5} />
        </span>
      );
    } else if (val < 80) {
      return (
        <span className="flex items-center justify-end text-yellow-500 font-medium">
          {valStr} <AlertCircle className="w-4 h-4 ml-2" strokeWidth={1.5} />
        </span>
      );
    }
    
    return <span>{valStr}</span>;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-[150px]">Kelas</TableHead>
          <TableHead>Tipe</TableHead>
          <TableHead className="text-right">PA (%)</TableHead>
          <TableHead className="text-right">UA (%)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {modelAccuracyData.map((row, idx) => {
          const isTotal = row.kelas === 'OVERALL';
          return (
            <TableRow key={idx} className={isTotal ? 'bg-muted/50 font-bold' : ''}>
              <TableCell className="font-medium">{row.kelas}</TableCell>
              <TableCell>{row.tipe}</TableCell>
              <TableCell className="text-right">{renderAccuracy(row.pa)}</TableCell>
              <TableCell className="text-right">{renderAccuracy(row.ua)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
