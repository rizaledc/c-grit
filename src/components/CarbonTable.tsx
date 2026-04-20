import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { carbonTableData } from "@/data/carbon_data";

export default function CarbonTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-[200px]">Ekosistem</TableHead>
          <TableHead className="text-right">Luas 2020 (ha)</TableHead>
          <TableHead className="text-right">Luas 2025 (ha)</TableHead>
          <TableHead className="text-right">Delta Luas</TableHead>
          <TableHead className="text-right font-semibold">Net Change (Juta Ton C)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {carbonTableData.map((row, idx) => {
          const isTotal = row.ekosistem === 'TOTAL';
          const isPositive = row.netChange.startsWith('+');
          const isNegative = row.netChange.startsWith('-');
          return (
            <TableRow key={idx} className={isTotal ? 'bg-muted/50 font-bold' : ''}>
              <TableCell className="font-medium">{row.ekosistem}</TableCell>
              <TableCell className="text-right">{row.luas2020}</TableCell>
              <TableCell className="text-right">{row.luas2025}</TableCell>
              <TableCell className={`text-right ${row.delta.startsWith('+') ? 'text-emerald-500' : row.delta.startsWith('-') ? 'text-rose-500' : ''}`}>
                {row.delta}
              </TableCell>
              <TableCell className={`text-right ${isPositive ? 'text-emerald-500' : isNegative ? 'text-rose-500' : ''}`}>
                {row.netChange}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
