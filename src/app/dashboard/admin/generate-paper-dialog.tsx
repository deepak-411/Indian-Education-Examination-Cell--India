'use client';

import { useFormState, useFormStatus } from 'react-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { QuestionPaperRequest } from "@/lib/types";
import { generateQuestionPaperAction, summarizeAction } from '@/app/actions';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

function GenerateButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 size-4 animate-spin" />}
      Generate Paper
    </Button>
  );
}

function SummarizeButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" variant="outline" size="sm" disabled={pending}>
            {pending ? <Loader2 className="mr-2 size-4 animate-spin" /> : <Sparkles className="mr-2 size-4" />}
            AI Summary
        </Button>
    )
}

export function GeneratePaperDialog({ request }: { request: QuestionPaperRequest }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const [generationState, generationAction] = useFormState(generateQuestionPaperAction, { data: null, error: null });
  const [summaryState, summaryAction] = useFormState(summarizeAction, { data: null, error: null });
  
  useEffect(() => {
    if (generationState.error) {
      toast({ title: "Generation Failed", description: generationState.error, variant: "destructive" });
    }
    if (summaryState.error) {
        toast({ title: "Summary Failed", description: summaryState.error, variant: "destructive" });
    }
  }, [generationState, summaryState, toast]);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      generationState.data = null;
      generationState.error = null;
      summaryState.data = null;
      summaryState.error = null;
    }
    setOpen(isOpen);
  };


  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>View & Generate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-headline">Generate Question Paper</DialogTitle>
          <DialogDescription>
            For {request.organizationName} - {request.className} ({request.subject})
          </DialogDescription>
        </DialogHeader>
        
        {generationState.data ? (
             <div className="prose prose-sm max-w-none dark:prose-invert rounded-md border p-4 max-h-[60vh] overflow-y-auto">
                <div dangerouslySetInnerHTML={{ __html: generationState.data.replace(/\n/g, '<br />') }} />
             </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 max-h-[60vh]">
            <ScrollArea className="h-full pr-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-1">Syllabus</h4>
                <p className="text-sm text-muted-foreground p-3 bg-muted/50 rounded-md whitespace-pre-wrap">{request.syllabus}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Notes / Instructions</h4>
                <p className="text-sm text-muted-foreground p-3 bg-muted/50 rounded-md whitespace-pre-wrap">{request.notes}</p>
              </div>
            </div>
            </ScrollArea>
            <ScrollArea className="h-full pr-4">
                <div className="flex justify-end mb-2">
                    <form action={summaryAction}>
                        <input type="hidden" name="syllabus" value={request.syllabus} />
                        <input type="hidden" name="notes" value={request.notes} />
                        <SummarizeButton />
                    </form>
                </div>
                {summaryState.data && (
                    <Alert>
                        <Sparkles className="h-4 w-4" />
                        <AlertTitle>AI Summary</AlertTitle>
                        <AlertDescription className="text-xs">
                           {summaryState.data}
                        </AlertDescription>
                    </Alert>
                )}
            </ScrollArea>
          </div>
        )}

        <DialogFooter>
            {generationState.data ? (
                <>
                    <Button variant="outline" onClick={() => window.print()}>Print / Save as PDF</Button>
                    <Button onClick={() => handleOpenChange(false)}>Close</Button>
                </>
            ) : (
                <form action={generationAction}>
                    <input type="hidden" name="organizationType" value={request.organizationType} />
                    <input type="hidden" name="className" value={request.className} />
                    <input type="hidden" name="totalMarks" value={request.totalMarks} />
                    <input type="hidden" name="syllabus" value={request.syllabus} />
                    <input type="hidden" name="notes" value={request.notes} />
                    <GenerateButton />
                </form>
            )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
