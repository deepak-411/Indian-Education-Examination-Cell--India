'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { QuestionPaperRequest } from "@/lib/types";
import { format, parseISO } from "date-fns";
import { GeneratePaperDialog } from "./generate-paper-dialog";

interface RequestsTableProps {
  requests: QuestionPaperRequest[];
}

export function RequestsTable({ requests }: RequestsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Organization</TableHead>
          <TableHead>Class/Exam</TableHead>
          <TableHead className="hidden md:table-cell">Subject</TableHead>
          <TableHead className="hidden md:table-cell">Marks</TableHead>
          <TableHead className="hidden sm:table-cell">Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request) => (
          <TableRow key={request.id}>
            <TableCell>
              <div className="font-medium">{request.organizationName}</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                {request.organizationType.replace('_', ' ')}
              </div>
            </TableCell>
            <TableCell>{request.className}</TableCell>
            <TableCell className="hidden md:table-cell">{request.subject}</TableCell>
            <TableCell className="hidden md:table-cell">{request.totalMarks}</TableCell>
            <TableCell className="hidden sm:table-cell">
              {format(parseISO(request.createdAt), "dd MMM, yyyy")}
            </TableCell>
            <TableCell className="text-right">
              <GeneratePaperDialog request={request} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
